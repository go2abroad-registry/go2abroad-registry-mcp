/**
 * Workers-native SSE transport that mirrors the wire protocol of
 * `@modelcontextprotocol/sdk/server/sse.js` (endpoint + message events),
 * without depending on Node.js `http.ServerResponse`.
 */
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { JSONRPCMessage } from "@modelcontextprotocol/sdk/types.js";
import { JSONRPCMessageSchema } from "@modelcontextprotocol/sdk/types.js";

const encoder = new TextEncoder();

export class WorkersSseServerTransport implements Transport {
  readonly sessionId: string;
  onclose?: () => void;
  onerror?: (error: Error) => void;
  onmessage?: (message: JSONRPCMessage) => void;

  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private started = false;
  private closed = false;

  constructor(
    private readonly messagesPath: string,
    sessionId: string,
    writable: WritableStream<Uint8Array>,
  ) {
    this.sessionId = sessionId;
    this.writer = writable.getWriter();
  }

  async start(): Promise<void> {
    if (this.started) {
      throw new Error("WorkersSseServerTransport already started");
    }
    this.started = true;

    const endpoint = `${this.messagesPath}?sessionId=${this.sessionId}`;
    await this.writeEvent("endpoint", endpoint);
  }

  async send(message: JSONRPCMessage): Promise<void> {
    if (this.closed) {
      throw new Error("SSE transport is closed");
    }
    await this.writeEvent("message", JSON.stringify(message));
  }

  async close(): Promise<void> {
    if (this.closed) return;
    this.closed = true;
    try {
      await this.writer.close();
    } catch {
      // already closed by client disconnect
    }
    this.onclose?.();
  }

  /** Keep proxies from idle-closing the stream. */
  async ping(): Promise<void> {
    if (this.closed) return;
    try {
      await this.writer.write(encoder.encode(`: ping ${Date.now()}\n\n`));
    } catch (err) {
      this.onerror?.(err instanceof Error ? err : new Error(String(err)));
      await this.close();
    }
  }

  async handlePostMessage(body: unknown): Promise<Response> {
    if (this.closed) {
      return jsonResponse({ error: "SSE session closed" }, 404);
    }

    let message: JSONRPCMessage;
    try {
      message = JSONRPCMessageSchema.parse(body);
    } catch (err) {
      this.onerror?.(err instanceof Error ? err : new Error(String(err)));
      return jsonResponse({ error: "Invalid JSON-RPC message" }, 400);
    }

    try {
      this.onmessage?.(message);
    } catch (err) {
      this.onerror?.(err instanceof Error ? err : new Error(String(err)));
      return jsonResponse({ error: "Failed to process message" }, 500);
    }

    // Match SDK SSEServerTransport: accept and deliver responses over SSE.
    return jsonResponse({ status: "accepted" }, 202);
  }

  private async writeEvent(event: string, data: string): Promise<void> {
    const chunk = `event: ${event}\ndata: ${data}\n\n`;
    try {
      await this.writer.write(encoder.encode(chunk));
    } catch (err) {
      this.onerror?.(err instanceof Error ? err : new Error(String(err)));
      await this.close();
      throw err;
    }
  }
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

export function corsHeaders(origin = "*"): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "Content-Type, MCP-Session-Id",
    "Access-Control-Max-Age": "86400",
  };
}

/** Merge CORS headers onto an existing Response (Streamable HTTP transport). */
export function withCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeaders())) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function sseResponseHeaders(): HeadersInit {
  return {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no",
    ...corsHeaders(),
  };
}
