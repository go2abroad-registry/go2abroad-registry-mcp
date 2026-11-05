<div align="center">

# Server MCP GO2ABROAD Registry

**Servizio Model Context Protocol (MCP) per intelligence statutaria globale e compliance societaria**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Registro interattivo ufficiale — cerca **23.795+** dossier statutari in tempo reale:**  
> **[Esplora il database live su https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> Hub ecosistema: **[https://go2abroad.space](https://go2abroad.space)** · Matrice dati: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · **Italiano** · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## Powered by GO2ABROAD Registry

Questo repository pubblica il **server MCP remoto** open source del [GO2ABROAD Registry](https://registry.go2abroad.space) — intelligence statutaria su costituzione transfrontaliera, fiscalità multi-livello e binari KYC bancari in **oltre 80** giurisdizioni.

| Asset | URL |
| --- | --- |
| Registro dati ufficiale | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Hub ecosistema | [https://go2abroad.space](https://go2abroad.space) |
| Matrice dati GitHub | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| MCP SSE di produzione | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Health / discovery | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| Root CDN | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

I record sono archiviati con DOI permanenti su [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) e [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), e serviti da Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) e **R2 CDN**.

---

## Connetti il server MCP remoto (SSE)

Non è necessaria l’installazione di un dataset locale. Punta Cursor, Claude Desktop, Cline, Dify, LibreChat o qualsiasi client MCP-compatible all’endpoint SSE edge.

* **Endpoint SSE:** `https://mcp-registry.go2abroad.space/sse`
* **Endpoint messaggi:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **JSON health:** `https://mcp-registry.go2abroad.space/`

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

Ponte stdio legacy via `mcp-proxy` (se il client non apre SSE remoto):

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

## Ciclo di vita statutario a 6 stadi

Ogni dossier segue il ciclo di compliance GO2ABROAD a 6 stadi. Apri ogni stadio sul portale ufficiale per la ricerca interattiva:

| Stadio | Focus | Apri sul registro |
| --- | --- | --- |
| Stage 1 — Costituzione | Tipo di entità, fee di deposito, giorni di formazione | [Cerca dossier di costituzione](https://registry.go2abroad.space) |
| Stage 2 — Struttura fiscale | Aliquota societaria, modello fiscale, postura trattati | [Sfoglia matrice fiscale](https://registry.go2abroad.space) |
| Stage 3 — Banking & KYC | Tier di viabilità bancaria, frizione di onboarding | [Filtra binari bancari](https://registry.go2abroad.space) |
| Stage 4 — Licensing | Flag di licenza statutaria / settoriale | [Ispeziona copertura licenze](https://registry.go2abroad.space) |
| Stage 5 — Manutenzione | Fee annuali, adempimenti continui, alert red-line | [Rivedi carico di manutenzione](https://registry.go2abroad.space) |
| Stage 6 — Exit / cambio | Ristrutturazione, migrazione, indizi di liquidazione | [Confronta percorsi di exit](https://registry.go2abroad.space) |

Heatmap macro fiscale/compliance di 82 paesi (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Payload completo del dossier (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Fallback: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## Risorse MCP

| URI | Descrizione |
| --- | --- |
| `compliance://tax-heatmap` | Esegue proxy della heatmap fiscale e di compliance a 82 giurisdizioni dal CDN |
| `compliance://academic-identifiers` | Restituisce stub DOI Zenodo, Figshare e Harvard Dataverse con guida di citazione |

## Tool MCP

| Tool | Scopo |
| --- | --- |
| `search_statutory_dossiers` | Ricerca SQL D1 parametrizzata su `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Carica lazy un dossier 6-Stage completo da R2 CDN tramite `task_id` (+ `lang` opzionale) |
| `compare_jurisdictions` | Confronto concorrente di fee di costituzione, aliquote e tier bancari per più `task_ids` |

---

## Persistenza accademica (DOI)

Cita il corpus GO2ABROAD Registry tramite uno dei tre identificatori permanenti:

| Archivio | DOI | Risolvi |
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

## Architettura

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

Punti salienti del Worker di produzione:

* Preflight globale `OPTIONS` → `204` con CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + SSE legacy (`event: endpoint`) con affinità di sessione Durable Object
* `POST /messages?sessionId=` — canale messaggi JSON-RPC per client SSE legacy
* `GET /` — JSON health / discovery con tool, risorse e deep-link al registro

---

## Sviluppo locale e deploy

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

File chiave:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## Licenza

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Apri il registro live](https://registry.go2abroad.space)** · **[Hub ecosistema](https://go2abroad.space)** · **[Connetti MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
