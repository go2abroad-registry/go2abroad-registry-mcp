/**
 * GO2ABROAD Registry — remote MCP server for Cloudflare Workers.
 *
 * Transports (Glama-compatible):
 *   POST /sse  | POST /mcp  — Streamable HTTP (stateless JSON responses)
 *   GET  /sse               — Legacy HTTP+SSE (endpoint + /messages)
 *   GET  /mcp               — 405 (no server-push stream; avoids Glama timeouts)
 *   POST /messages?sessionId= — Legacy SSE message channel
 *   OPTIONS *               — CORS preflight
 *   GET  /                  — health / discovery JSON
 *
 * Glama "Test Connection" POSTs initialize to the listed URL. Returning a
 * long-lived SSE body from that POST causes a 30s timeout — hence POST /sse
 * is Streamable HTTP, not SSE open.
 */
import { DurableObject } from "cloudflare:workers";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createRegistryMcpServer } from "./mcp-server";
import {
  corsHeaders,
  sseResponseHeaders,
  withCors,
  WorkersSseServerTransport,
} from "./sse-transport";

export { WorkersSseServerTransport } from "./sse-transport";

type SessionStub = DurableObjectStub<McpSseSession>;

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "GET" && path === "/") {
      return json(
        {
          service: "go2abroad-registry-mcp",
          status: "ok",
          protocol: "MCP Streamable HTTP + legacy SSE",
          endpoints: {
            sse: "https://mcp-registry.go2abroad.space/sse",
            messages: "https://mcp-registry.go2abroad.space/messages?sessionId=<id>",
            streamable_http_alias: "/mcp",
          },
          resources: [
            "compliance://tax-heatmap",
            "compliance://academic-identifiers",
          ],
          tools: [
            "search_statutory_dossiers",
            "get_dossier_detail",
            "compare_jurisdictions",
          ],
          registry: "https://registry.go2abroad.space",
          ecosystem: "https://go2abroad.space",
          github: "https://github.com/go2abroad-registry/go2abroad-registry-mcp",
        },
        200,
      );
    }

    // Modern Streamable HTTP (what Glama health-checks with).
    if (path === "/mcp" || path === "/sse") {
      if (request.method === "POST" || request.method === "DELETE") {
        return handleStreamableHttp(request, env);
      }

      if (request.method === "GET") {
        // Streamable HTTP clients advertise JSON in Accept; refuse long GET
        // streams so Glama does not hang for 30s. Pure EventSource clients
        // typically send only text/event-stream → legacy SSE below.
        const accept = (request.headers.get("accept") || "").toLowerCase();
        if (path === "/mcp" || accept.includes("application/json")) {
          return new Response(null, {
            status: 405,
            headers: {
              Allow: "POST, OPTIONS",
              ...corsHeaders(),
            },
          });
        }

        if (path === "/sse") {
          const sessionId = crypto.randomUUID();
          const stub = sessionStub(env, sessionId);
          return stub.fetch(
            new Request(new URL(`/sse?sessionId=${sessionId}`, url.origin), {
              method: "GET",
              headers: request.headers,
            }),
          );
        }
      }
    }

    if (request.method === "POST" && path === "/messages") {
      const sessionId = url.searchParams.get("sessionId");
      if (!sessionId) {
        return json({ error: "Missing sessionId query parameter" }, 400);
      }
      const stub = sessionStub(env, sessionId);
      return stub.fetch(request);
    }

    return json({ error: "Not found", path }, 404);
  },
} satisfies ExportedHandler<Env>;

async function handleStreamableHttp(
  request: Request,
  env: Env,
): Promise<Response> {
  const transport = new WebStandardStreamableHTTPServerTransport({
    // Stateless: each request gets a fresh server — ideal for Workers + Glama.
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  const server = createRegistryMcpServer(env);
  await server.connect(transport);

  try {
    const response = await transport.handleRequest(request);
    return withCors(response);
  } finally {
    await transport.close().catch(() => undefined);
    await server.close().catch(() => undefined);
  }
}

function sessionStub(env: Env, sessionId: string): SessionStub {
  const id = env.MCP_SESSION.idFromName(sessionId);
  return env.MCP_SESSION.get(id);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

/**
 * Holds one legacy MCP SSE session so GET /sse and POST /messages stick.
 */
export class McpSseSession extends DurableObject<Env> {
  private transport: WorkersSseServerTransport | null = null;
  private heartbeat: number | null = null;

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (path === "/sse" && request.method === "GET") {
      return this.openSse(url);
    }

    if (request.method === "POST" && path === "/messages") {
      return this.handleMessage(request);
    }

    return json({ error: "Session route not found" }, 404);
  }

  private async openSse(url: URL): Promise<Response> {
    if (this.transport) {
      await this.transport.close();
      this.transport = null;
    }
    this.clearHeartbeat();

    const sessionId = url.searchParams.get("sessionId") || crypto.randomUUID();
    const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
    const transport = new WorkersSseServerTransport("/messages", sessionId, writable);
    this.transport = transport;

    const server = createRegistryMcpServer(this.env);
    transport.onclose = () => {
      this.clearHeartbeat();
      this.transport = null;
    };

    await server.connect(transport);

    this.heartbeat = setInterval(() => {
      void transport.ping();
    }, 15_000) as unknown as number;

    return new Response(readable, {
      status: 200,
      headers: {
        ...sseResponseHeaders(),
        "MCP-Session-Id": sessionId,
      },
    });
  }

  private async handleMessage(request: Request): Promise<Response> {
    if (!this.transport) {
      return json(
        {
          error:
            "Unknown or expired SSE session. Open GET /sse first and use the returned sessionId.",
        },
        404,
      );
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return json({ error: "Content-Type must be application/json" }, 415);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400);
    }

    return this.transport.handlePostMessage(body);
  }

  private clearHeartbeat(): void {
    if (this.heartbeat !== null) {
      clearInterval(this.heartbeat);
      this.heartbeat = null;
    }
  }
}
