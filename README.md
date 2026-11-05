<div align="center">

# GO2ABROAD Registry MCP Server

**Model Context Protocol (MCP) service for global statutory intelligence & corporate compliance**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Official interactive registry** — search **23,795+** statutory dossiers live:  
> **[Explore the database on https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> Parent ecosystem: **[https://go2abroad.space](https://go2abroad.space)** · Data matrix: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](README.md) · [简体中文](docs/readme/README.zh.md) · [日本語](docs/readme/README.ja.md) · [Deutsch](docs/readme/README.de.md) · [Français](docs/readme/README.fr.md) · [Español](docs/readme/README.es.md) · [Italiano](docs/readme/README.it.md) · [Português](docs/readme/README.pt.md) · [한국어](docs/readme/README.ko.md) · [العربية](docs/readme/README.ar.md) · [हिन्दी](docs/readme/README.hi.md)

</div>

---

## Powered by GO2ABROAD Registry

This repository publishes the open-source **remote MCP server** for the [GO2ABROAD Registry](https://registry.go2abroad.space) — statutory intelligence covering cross-border entity formation, multi-tier taxation, and banking KYC rails across **80+ jurisdictions**.

| Asset | URL |
| --- | --- |
| Official data registry | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Ecosystem hub | [https://go2abroad.space](https://go2abroad.space) |
| GitHub data matrix | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| Production MCP SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Health / discovery | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN root | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

Records are archived under permanent DOIs on [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899), and [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), and served from Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) plus **R2 CDN**.

---

## Connect the remote MCP server (SSE)

No local dataset install is required. Point Cursor, Claude Desktop, Cline, Dify, LibreChat, or any MCP-compatible client at the edge SSE endpoint.

* **SSE endpoint:** `https://mcp-registry.go2abroad.space/sse`
* **Messages endpoint:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **Health JSON:** `https://mcp-registry.go2abroad.space/`

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

Legacy stdio bridge via `mcp-proxy` (if your client cannot open remote SSE directly):

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

## 6-Stage statutory lifecycle

Every dossier follows the GO2ABROAD 6-Stage compliance lifecycle. Open any stage on the official portal for interactive retrieval:

| Stage | Focus | Open on registry |
| --- | --- | --- |
| Stage 1 — Formation | Entity type, state filing fees, formation days | [Search formation dossiers](https://registry.go2abroad.space) |
| Stage 2 — Tax structure | Corporate tax rate, tax model, treaty posture | [Browse tax matrix](https://registry.go2abroad.space) |
| Stage 3 — Banking & KYC | Banking viability tier, onboarding friction | [Filter banking rails](https://registry.go2abroad.space) |
| Stage 4 — Licensing | Statutory / sectoral license flags | [Inspect license coverage](https://registry.go2abroad.space) |
| Stage 5 — Maintenance | Annual fees, ongoing filings, red-line warnings | [Review maintenance load](https://registry.go2abroad.space) |
| Stage 6 — Exit / change | Restructuring, migration, wind-down cues | [Compare exit paths](https://registry.go2abroad.space) |

Macro 82-country tax/compliance heatmap (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Full dossier payload (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Fallback: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP resources

| URI | Description |
| --- | --- |
| `compliance://tax-heatmap` | Proxies the 82-jurisdiction corporate tax & compliance heatmap from CDN |
| `compliance://academic-identifiers` | Zenodo, Figshare, and Harvard Dataverse DOI stubs plus citation guidance |

## MCP tools

| Tool | Purpose |
| --- | --- |
| `search_statutory_dossiers` | Parameterized D1 SQL over `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Lazy-loads a full 6-Stage dossier from R2 CDN by `task_id` (+ optional `lang`) |
| `compare_jurisdictions` | Concurrent cross-jurisdiction comparison of filing fees, tax rates, and banking tiers for multiple `task_ids` |

---

## Academic persistence (DOI)

Cite the GO2ABROAD Registry corpus via any of the three permanent identifiers:

| Archive | DOI | Resolve |
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

## Architecture

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

Production Worker highlights:

* Global `OPTIONS` preflight → `204` with CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + legacy SSE (`event: endpoint`) with Durable Object session affinity
* `POST /messages?sessionId=` — JSON-RPC message channel for legacy SSE clients
* `GET /` — health / discovery JSON with tools, resources, and registry deep-link

---

## Local development & deploy

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

Key files:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## License

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Open the live registry](https://registry.go2abroad.space)** · **[Ecosystem hub](https://go2abroad.space)** · **[Connect MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
