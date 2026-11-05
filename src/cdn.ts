/** R2 CDN static origin for GO2ABROAD Registry. */
export const CDN_BASE = "https://cdn.go2abroad.space";

export const ACADEMIC_IDENTIFIERS = {
  zenodo_doi: "10.5281/zenodo.23493470",
  figshare_doi: "10.6084/m9.figshare.34711899",
  harvard_dataverse_doi: "10.7910/DVN/XUWOHL",
  website: "https://registry.go2abroad.space",
  endorsement:
    "GO2ABROAD Registry is an open statutory compliance corpus for cross-border entity formation. " +
    "Dataset releases are archived with persistent DOIs on Zenodo, Figshare, and Harvard Dataverse " +
    "for citation, reproducibility, and academic reuse.",
} as const;

export function heatmapUrl(lang = "zh"): string {
  return `${CDN_BASE}/stat/registry/${lang}/heatmap_82_master.json`;
}

/**
 * Lazy-load a 6-Stage dossier JSON/JSONL from CDN.
 * Primary: /dossiers/{task_id}.json
 * Fallbacks: /dossiers/{task_id}.jsonl, /data/registry/{lang}/{task_id}.jsonl
 */
export async function fetchDossierDetail(
  taskId: string,
  lang = "zh",
): Promise<{ source: string; payload: unknown }> {
  const candidates = [
    `${CDN_BASE}/dossiers/${encodeURIComponent(taskId)}.json`,
    `${CDN_BASE}/dossiers/${encodeURIComponent(taskId)}.jsonl`,
    `${CDN_BASE}/data/registry/${encodeURIComponent(lang)}/${encodeURIComponent(taskId)}.jsonl`,
  ];

  const errors: string[] = [];

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json, application/x-ndjson, text/plain" },
        cf: { cacheTtl: 3600, cacheEverything: true },
      });
      if (!res.ok) {
        errors.push(`${url} -> HTTP ${res.status}`);
        continue;
      }
      const text = await res.text();
      return { source: url, payload: parseJsonOrJsonl(text) };
    } catch (err) {
      errors.push(`${url} -> ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  throw new Error(
    `Unable to load dossier for task_id=${taskId}. Tried: ${errors.join("; ")}`,
  );
}

function parseJsonOrJsonl(text: string): unknown {
  const trimmed = text.trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch {
    // JSONL / NDJSON: merge objects; prefer the richest record.
    const rows: unknown[] = [];
    for (const line of trimmed.split(/\r?\n/)) {
      const piece = line.trim();
      if (!piece) continue;
      try {
        rows.push(JSON.parse(piece));
      } catch {
        // skip malformed line
      }
    }
    if (rows.length === 0) {
      throw new Error("CDN body is neither JSON nor JSONL");
    }
    if (rows.length === 1) return rows[0];
    return { records: rows, primary: rows[0] };
  }
}

export type CompareMetric = {
  task_id: string;
  source?: string;
  state_filing_fee_usd: number | null;
  annual_maintenance_fee_usd: number | null;
  corporate_tax_rate: number | null;
  banking_viability_tier: string | null;
  formation_days: number | null;
  jurisdiction_code: string | null;
  entity_type_code: string | null;
  error?: string;
};

export async function compareTaskIds(
  taskIds: string[],
  lang = "zh",
): Promise<CompareMetric[]> {
  const unique = [...new Set(taskIds.map((id) => id.trim()).filter(Boolean))].slice(
    0,
    12,
  );

  return Promise.all(
    unique.map(async (task_id): Promise<CompareMetric> => {
      try {
        const { source, payload } = await fetchDossierDetail(task_id, lang);
        return { task_id, source, ...extractCompareMetrics(payload) };
      } catch (err) {
        return {
          task_id,
          state_filing_fee_usd: null,
          annual_maintenance_fee_usd: null,
          corporate_tax_rate: null,
          banking_viability_tier: null,
          formation_days: null,
          jurisdiction_code: null,
          entity_type_code: null,
          error: err instanceof Error ? err.message : String(err),
        };
      }
    }),
  );
}

function extractCompareMetrics(
  payload: unknown,
): Omit<CompareMetric, "task_id" | "source" | "error"> {
  const root = unwrapRecord(payload);

  const filing =
    num(root.state_filing_fee_usd) ??
    num(deepGet(root, ["formation", "official_state_filing_fee_usd"])) ??
    num(deepGet(root, ["stage_1", "official_state_filing_fee_usd"])) ??
    num(deepGet(root, ["metrics", "state_filing_fee_usd"]));

  const maintenance =
    num(root.annual_maintenance_fee_usd) ??
    num(deepGet(root, ["formation", "annual_maintenance_fee_usd"])) ??
    num(deepGet(root, ["metrics", "annual_maintenance_fee_usd"]));

  const tax =
    num(root.corporate_tax_rate) ??
    num(deepGet(root, ["tax", "corporate_tax_rate"])) ??
    num(deepGet(root, ["metrics", "corporate_tax_rate"]));

  const banking =
    str(root.banking_viability_tier) ??
    str(deepGet(root, ["banking", "viability_tier"])) ??
    str(deepGet(root, ["metrics", "banking_viability_tier"])) ??
    str(deepGet(root, ["banking", "viability"]));

  const days =
    num(root.formation_days) ??
    num(deepGet(root, ["formation", "formation_days"])) ??
    num(deepGet(root, ["metrics", "formation_days"]));

  const jurisdiction =
    str(root.jurisdiction_code) ??
    str(deepGet(root, ["metadata", "composite_key", "jurisdiction_id"])) ??
    str(deepGet(root, ["dimensions", "jurisdiction", "iso_code"]));

  const entity =
    str(root.entity_type_code) ??
    str(deepGet(root, ["metadata", "composite_key", "entity_id"])) ??
    str(deepGet(root, ["dimensions", "entity", "entity_id"]));

  return {
    state_filing_fee_usd: filing,
    annual_maintenance_fee_usd: maintenance,
    corporate_tax_rate: tax,
    banking_viability_tier: banking,
    formation_days: days,
    jurisdiction_code: jurisdiction,
    entity_type_code: entity,
  };
}

function unwrapRecord(payload: unknown): Record<string, unknown> {
  if (!payload || typeof payload !== "object") return {};
  const obj = payload as Record<string, unknown>;
  if (obj.primary && typeof obj.primary === "object") {
    return obj.primary as Record<string, unknown>;
  }
  if (Array.isArray(obj.records) && obj.records[0] && typeof obj.records[0] === "object") {
    return obj.records[0] as Record<string, unknown>;
  }
  return obj;
}

function deepGet(obj: unknown, path: string[]): unknown {
  let cur: unknown = obj;
  for (const key of path) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[key];
  }
  return cur;
}

function num(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v.replace(/%/g, "").trim());
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function str(v: unknown): string | null {
  if (typeof v === "string" && v.trim()) return v.trim();
  return null;
}
