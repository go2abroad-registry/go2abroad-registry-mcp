import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { fetchCatalogMetrics, searchStatutoryDossiers } from "./catalog";
import {
  ACADEMIC_IDENTIFIERS,
  compareTaskIds,
  fetchDossierDetail,
  heatmapUrl,
} from "./cdn";

export function createRegistryMcpServer(env: Env): McpServer {
  const server = new McpServer({
    name: "go2abroad-registry-mcp",
    version: "1.0.0",
  });

  server.resource(
    "tax-heatmap",
    "compliance://tax-heatmap",
    {
      description:
        "GO2ABROAD 82-jurisdiction macro tax/compliance heatmap (zh master JSON from CDN).",
      mimeType: "application/json",
    },
    async (uri) => {
      const url = heatmapUrl("zh");
      const res = await fetch(url, {
        cf: { cacheTtl: 3600, cacheEverything: true },
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch heatmap: HTTP ${res.status}`);
      }
      const text = await res.text();
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "application/json",
            text,
          },
        ],
      };
    },
  );

  server.resource(
    "academic-identifiers",
    "compliance://academic-identifiers",
    {
      description:
        "Zenodo / Figshare / Harvard Dataverse DOIs and official registry endorsement text.",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "application/json",
          text: JSON.stringify(ACADEMIC_IDENTIFIERS, null, 2),
        },
      ],
    }),
  );

  server.tool(
    "search_statutory_dossiers",
    "Search the GO2ABROAD dossier_catalog (D1, ~23,795 statutory dossiers) by jurisdiction, entity type, max corporate tax rate, banking viability, and free-text keyword.",
    {
      jurisdiction: z
        .string()
        .optional()
        .describe("Jurisdiction / country code filter, e.g. AU, SG, US-WY"),
      entity_type: z
        .string()
        .optional()
        .describe("Entity type filter, e.g. Pty Ltd, LLC, Ltd"),
      max_tax_rate: z
        .number()
        .optional()
        .describe("Maximum corporate_tax_rate (inclusive), e.g. 15"),
      banking_viability: z
        .string()
        .optional()
        .describe("Banking viability tier substring, e.g. Strict, Open, Medium"),
      keyword: z
        .string()
        .optional()
        .describe("Free-text keyword matched against task_id, codes, i18n names/SEO"),
      limit: z
        .number()
        .int()
        .min(1)
        .max(100)
        .optional()
        .describe("Max rows to return (default 20, max 100)"),
    },
    async (args) => {
      const data = await searchStatutoryDossiers(env.DB, args);
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(data, null, 2),
          },
        ],
      };
    },
  );

  server.tool(
    "get_dossier_detail",
    "Lazy-load a full 6-Stage statutory dossier from the CDN (JSON, with JSONL fallback).",
    {
      task_id: z
        .string()
        .min(1)
        .describe("Primary key task_id from dossier_catalog"),
      lang: z
        .string()
        .optional()
        .describe("Locale for JSONL fallback path (default zh)"),
    },
    async ({ task_id, lang }) => {
      const detail = await fetchDossierDetail(task_id, lang ?? "zh");
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(detail, null, 2),
          },
        ],
      };
    },
  );

  server.tool(
    "compare_jurisdictions",
    "Compare multiple dossiers by key formation metrics (filing fee, tax rate, banking access, formation days). Uses D1 catalog rows when available and enriches from CDN details.",
    {
      task_ids: z
        .array(z.string().min(1))
        .min(2)
        .max(12)
        .describe("List of task_id values to compare (2–12)"),
      lang: z
        .string()
        .optional()
        .describe("Locale used when falling back to CDN JSONL (default zh)"),
    },
    async ({ task_ids, lang }) => {
      const catalogRows = await fetchCatalogMetrics(env.DB, task_ids);
      const byId = new Map(catalogRows.map((row) => [row.task_id, row]));

      const missing = task_ids.filter((id) => !byId.has(id));
      const cdnExtras =
        missing.length > 0 ? await compareTaskIds(missing, lang ?? "zh") : [];

      const comparison = task_ids.map((task_id) => {
        const row = byId.get(task_id);
        if (row) {
          return {
            task_id: row.task_id,
            jurisdiction_code: row.jurisdiction_code,
            entity_type_code: row.entity_type_code,
            state_filing_fee_usd: row.state_filing_fee_usd,
            annual_maintenance_fee_usd: row.annual_maintenance_fee_usd,
            corporate_tax_rate: row.corporate_tax_rate,
            banking_viability_tier: row.banking_viability_tier,
            formation_days: row.formation_days,
            tier: row.tier,
            source: "d1:dossier_catalog",
          };
        }
        return (
          cdnExtras.find((item) => item.task_id === task_id) ?? {
            task_id,
            error: "Not found in D1 or CDN",
          }
        );
      });

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({ count: comparison.length, comparison }, null, 2),
          },
        ],
      };
    },
  );

  return server;
}
