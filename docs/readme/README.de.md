<div align="center">

# GO2ABROAD Registry MCP-Server

**Model Context Protocol (MCP)-Dienst für globale gesetzliche Intelligenz & Unternehmens-Compliance**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Offizielles interaktives Register — durchsuchen Sie **23.795+** gesetzliche Dossiers live:**  
> **[Live-Datenbank auf https://registry.go2abroad.space öffnen](https://registry.go2abroad.space)**  
> Ökosystem-Hub: **[https://go2abroad.space](https://go2abroad.space)** · Datenmatrix: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · **Deutsch** · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## Bereitgestellt von GO2ABROAD Registry

Dieses Repository veröffentlicht den Open-Source-**Remote-MCP-Server** für das [GO2ABROAD Registry](https://registry.go2abroad.space) — gesetzliche Intelligenz zu grenzüberschreitender Gesellschaftsgründung, mehrstufiger Besteuerung und Banking-KYC in **über 80** Rechtsordnungen.

| Asset | URL |
| --- | --- |
| Offizielles Datenregister | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Ökosystem-Hub | [https://go2abroad.space](https://go2abroad.space) |
| GitHub-Datenmatrix | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| Produktions-MCP-SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Health / Discovery | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN-Root | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

Datensätze sind unter permanenten DOIs auf [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) und [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) archiviert und werden über Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) sowie **R2 CDN** bereitgestellt.

---

## Remote-MCP-Server verbinden (SSE)

Keine lokale Dataset-Installation nötig. Richten Sie Cursor, Claude Desktop, Cline, Dify, LibreChat oder jeden MCP-fähigen Client auf den Edge-SSE-Endpunkt.

* **SSE-Endpunkt:** `https://mcp-registry.go2abroad.space/sse`
* **Nachrichten-Endpunkt:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **Health-JSON:** `https://mcp-registry.go2abroad.space/`

### Cursor / Claude Desktop (`mcpServers`)

```json
{
  "mcpServers": {
    "go2abroad-registry": {
      "url": "https://mcp-registry.go2abroad.space/sse"
    }
  }
}
```

Legacy-stdio-Bridge über `mcp-proxy` (wenn der Client kein Remote-SSE öffnen kann):

```json
{
  "mcpServers": {
    "go2abroad-registry": {
      "command": "npx",
      "args": ["-y", "mcp-proxy", "https://mcp-registry.go2abroad.space/sse"]
    }
  }
}
```

---

## 6-stufiger gesetzlicher Lebenszyklus

Jedes Dossier folgt dem GO2ABROAD 6-Stage-Compliance-Lebenszyklus. Öffnen Sie jede Stufe im offiziellen Portal für interaktive Abfragen:

| Stufe | Fokus | Im Register öffnen |
| --- | --- | --- |
| Stage 1 — Gründung | Rechtsform, staatliche Gründungsgebühren, Gründungstage | [Gründungsdossiers suchen](https://registry.go2abroad.space) |
| Stage 2 — Steuerstruktur | Körperschaftsteuersatz, Steuermodell, Abkommenslage | [Steuermatrix browsen](https://registry.go2abroad.space) |
| Stage 3 — Banking & KYC | Bankfähigkeitsstufe, Onboarding-Reibung | [Banking-Rails filtern](https://registry.go2abroad.space) |
| Stage 4 — Lizenzierung | Gesetzliche / sektorale Lizenzflags | [Lizenzabdeckung prüfen](https://registry.go2abroad.space) |
| Stage 5 — Wartung | Jahresgebühren, laufende Meldungen, Red-Line-Warnungen | [Wartungslast prüfen](https://registry.go2abroad.space) |
| Stage 6 — Exit / Änderung | Umstrukturierung, Migration, Abwicklungshinweise | [Exit-Pfade vergleichen](https://registry.go2abroad.space) |

Makro-Steuer-/Compliance-Heatmap für 82 Länder (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Vollständiges Dossier-Payload (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Fallback: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP-Ressourcen

| URI | Beschreibung |
| --- | --- |
| `compliance://tax-heatmap` | Proxyt die 82-Rechtsordnungs-Körperschaftsteuer- & Compliance-Heatmap vom CDN |
| `compliance://academic-identifiers` | Liefert Zenodo-, Figshare- und Harvard-Dataverse-DOI-Stubs inkl. Zitationshinweisen |

## MCP-Tools

| Tool | Zweck |
| --- | --- |
| `search_statutory_dossiers` | Parametrisierte D1-SQL-Suche über `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Lädt ein vollständiges 6-Stage-Dossier per `task_id` (+ optional `lang`) lazy vom R2-CDN |
| `compare_jurisdictions` | Paralleler Jurisdiktionsvergleich von Gründungsgebühren, Steuersätzen und Banking-Tiers für mehrere `task_ids` |

---

## Wissenschaftliche Persistenz (DOI)

Zitieren Sie das GO2ABROAD-Registry-Korpus über einen der drei permanenten Identifier:

| Archiv | DOI | Auflösen |
| --- | --- | --- |
| Zenodo | `10.5281/zenodo.23493470` | [https://doi.org/10.5281/zenodo.23493470](https://doi.org/10.5281/zenodo.23493470) |
| Figshare | `10.6084/m9.figshare.34711899` | [https://doi.org/10.6084/m9.figshare.34711899](https://doi.org/10.6084/m9.figshare.34711899) |
| Harvard Dataverse | `10.7910/DVN/XUWOHL` | [https://doi.org/10.7910/DVN/XUWOHL](https://doi.org/10.7910/DVN/XUWOHL) |

### BibTeX

```bibtex
@misc{go2abroad_registry_2026,
  title        = {GO2ABROAD Registry: Open Statutory Compliance Corpus for Cross-Border Entity Formation},
  author       = {{GO2ABROAD Registry}},
  year         = {2026},
  howpublished = {Zenodo / Figshare / Harvard Dataverse},
  doi          = {10.5281/zenodo.23493470},
  note         = {Also 10.6084/m9.figshare.34711899 and 10.7910/DVN/XUWOHL. Interactive portal: https://registry.go2abroad.space},
  url          = {https://registry.go2abroad.space}
}
```

---

## Architektur

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

Highlights des Produktions-Workers:

* Globales `OPTIONS`-Preflight → `204` mit CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + Legacy-SSE (`event: endpoint`) mit Durable-Object-Session-Affinität
* `POST /messages?sessionId=` — JSON-RPC-Nachrichtenkanal für Legacy-SSE-Clients
* `GET /` — Health-/Discovery-JSON mit Tools, Ressourcen und Registry-Deep-Link

---

## Lokale Entwicklung & Deployment

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

Wichtige Dateien:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## Lizenz

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Live-Register öffnen](https://registry.go2abroad.space)** · **[Ökosystem-Hub](https://go2abroad.space)** · **[MCP-SSE verbinden](https://mcp-registry.go2abroad.space/sse)**

</div>
