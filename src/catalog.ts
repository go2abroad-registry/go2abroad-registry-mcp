export type DossierCatalogRow = {
  task_id: string;
  jurisdiction_code: string;
  flag: string;
  tier: string;
  entity_type_code: string;
  isic_code: string;
  tax_structure_model: string;
  state_filing_fee_usd: number;
  annual_maintenance_fee_usd: number;
  corporate_tax_rate: number;
  banking_viability_tier: string;
  formation_days: number;
  has_statutory_license: number;
  i18n_names: string;
  i18n_redline_warning: string;
  i18n_seo: string;
  last_updated: string;
  r2_dossier_key: string;
};

export type SearchParams = {
  jurisdiction?: string;
  entity_type?: string;
  max_tax_rate?: number;
  banking_viability?: string;
  keyword?: string;
  limit?: number;
};

export async function searchStatutoryDossiers(
  db: D1Database,
  params: SearchParams,
): Promise<{ count: number; results: DossierCatalogRow[] }> {
  const limit = Math.min(Math.max(params.limit ?? 20, 1), 100);
  const where: string[] = [];
  const binds: unknown[] = [];

  if (params.jurisdiction?.trim()) {
    where.push("UPPER(jurisdiction_code) LIKE UPPER(?)");
    binds.push(`%${params.jurisdiction.trim()}%`);
  }

  if (params.entity_type?.trim()) {
    where.push("UPPER(entity_type_code) LIKE UPPER(?)");
    binds.push(`%${params.entity_type.trim()}%`);
  }

  if (typeof params.max_tax_rate === "number" && Number.isFinite(params.max_tax_rate)) {
    where.push("corporate_tax_rate <= ?");
    binds.push(params.max_tax_rate);
  }

  if (params.banking_viability?.trim()) {
    where.push("UPPER(banking_viability_tier) LIKE UPPER(?)");
    binds.push(`%${params.banking_viability.trim()}%`);
  }

  if (params.keyword?.trim()) {
    const kw = `%${params.keyword.trim()}%`;
    where.push(
      "(task_id LIKE ? OR jurisdiction_code LIKE ? OR entity_type_code LIKE ? OR isic_code LIKE ? OR i18n_names LIKE ? OR i18n_seo LIKE ?)",
    );
    binds.push(kw, kw, kw, kw, kw, kw);
  }

  const whereSql = where.length > 0 ? `WHERE ${where.join(" AND ")}` : "";
  const sql = `
    SELECT
      task_id,
      jurisdiction_code,
      flag,
      tier,
      entity_type_code,
      isic_code,
      tax_structure_model,
      state_filing_fee_usd,
      annual_maintenance_fee_usd,
      corporate_tax_rate,
      banking_viability_tier,
      formation_days,
      has_statutory_license,
      i18n_names,
      i18n_redline_warning,
      i18n_seo,
      last_updated,
      r2_dossier_key
    FROM dossier_catalog
    ${whereSql}
    ORDER BY corporate_tax_rate ASC, state_filing_fee_usd ASC
    LIMIT ?
  `;

  const stmt = db.prepare(sql).bind(...binds, limit);
  const { results } = await stmt.all<DossierCatalogRow>();
  return { count: results?.length ?? 0, results: results ?? [] };
}

export async function fetchCatalogMetrics(
  db: D1Database,
  taskIds: string[],
): Promise<DossierCatalogRow[]> {
  const unique = [...new Set(taskIds.map((id) => id.trim()).filter(Boolean))].slice(
    0,
    12,
  );
  if (unique.length === 0) return [];

  const placeholders = unique.map(() => "?").join(", ");
  const sql = `
    SELECT
      task_id,
      jurisdiction_code,
      flag,
      tier,
      entity_type_code,
      isic_code,
      tax_structure_model,
      state_filing_fee_usd,
      annual_maintenance_fee_usd,
      corporate_tax_rate,
      banking_viability_tier,
      formation_days,
      has_statutory_license,
      i18n_names,
      i18n_redline_warning,
      i18n_seo,
      last_updated,
      r2_dossier_key
    FROM dossier_catalog
    WHERE task_id IN (${placeholders})
  `;
  const { results } = await db.prepare(sql).bind(...unique).all<DossierCatalogRow>();
  return results ?? [];
}
