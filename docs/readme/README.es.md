<div align="center">

# Servidor MCP de GO2ABROAD Registry

**Servicio Model Context Protocol (MCP) para inteligencia estatutaria global y cumplimiento corporativo**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Registro interactivo oficial — busque **23.795+** expedientes estatutarios en vivo:**  
> **[Explorar la base en https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> Hub del ecosistema: **[https://go2abroad.space](https://go2abroad.space)** · Matriz de datos: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Español** · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## Impulsado por GO2ABROAD Registry

Este repositorio publica el **servidor MCP remoto** de código abierto del [GO2ABROAD Registry](https://registry.go2abroad.space): inteligencia estatutaria sobre constitución transfronteriza, fiscalidad multinivel y rieles KYC bancarios en **más de 80** jurisdicciones.

| Activo | URL |
| --- | --- |
| Registro oficial de datos | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Hub del ecosistema | [https://go2abroad.space](https://go2abroad.space) |
| Matriz de datos en GitHub | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| MCP SSE de producción | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Salud / descubrimiento | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| Raíz CDN | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

Los registros se archivan con DOI permanentes en [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) y [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), y se sirven desde Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) y **R2 CDN**.

---

## Conectar el servidor MCP remoto (SSE)

No se requiere instalar un dataset local. Apunte Cursor, Claude Desktop, Cline, Dify, LibreChat o cualquier cliente compatible con MCP al endpoint SSE perimetral.

* **Endpoint SSE:** `https://mcp-registry.go2abroad.space/sse`
* **Endpoint de mensajes:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **JSON de salud:** `https://mcp-registry.go2abroad.space/`

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

Puente stdio legado vía `mcp-proxy` (si el cliente no puede abrir SSE remoto):

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

## Ciclo de vida estatutario de 6 etapas

Cada expediente sigue el ciclo de cumplimiento GO2ABROAD de 6 etapas. Abra cualquier etapa en el portal oficial para búsqueda interactiva:

| Etapa | Enfoque | Abrir en el registro |
| --- | --- | --- |
| Stage 1 — Constitución | Tipo de entidad, tasas de registro, días de formación | [Buscar expedientes de constitución](https://registry.go2abroad.space) |
| Stage 2 — Estructura fiscal | Tipo impositivo societario, modelo fiscal, postura de tratados | [Explorar matriz fiscal](https://registry.go2abroad.space) |
| Stage 3 — Banca y KYC | Nivel de viabilidad bancaria, fricción de onboarding | [Filtrar rieles bancarios](https://registry.go2abroad.space) |
| Stage 4 — Licencias | Indicadores de licencia estatutaria / sectorial | [Inspeccionar cobertura de licencias](https://registry.go2abroad.space) |
| Stage 5 — Mantenimiento | Cuotas anuales, presentaciones continuas, alertas red-line | [Revisar carga de mantenimiento](https://registry.go2abroad.space) |
| Stage 6 — Salida / cambio | Reestructuración, migración, indicios de disolución | [Comparar vías de salida](https://registry.go2abroad.space) |

Mapa de calor macro fiscal/cumplimiento de 82 países (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Payload completo del expediente (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Respaldo: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## Recursos MCP

| URI | Descripción |
| --- | --- |
| `compliance://tax-heatmap` | Hace proxy del mapa de calor fiscal y de cumplimiento de 82 jurisdicciones desde el CDN |
| `compliance://academic-identifiers` | Devuelve stubs DOI de Zenodo, Figshare y Harvard Dataverse con guía de citación |

## Herramientas MCP

| Herramienta | Propósito |
| --- | --- |
| `search_statutory_dossiers` | Búsqueda SQL D1 parametrizada sobre `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Carga diferida de un expediente 6-Stage completo desde R2 CDN por `task_id` (+ `lang` opcional) |
| `compare_jurisdictions` | Comparación concurrente de tasas de constitución, impuestos y niveles bancarios para varios `task_ids` |

---

## Persistencia académica (DOI)

Cite el corpus de GO2ABROAD Registry mediante cualquiera de los tres identificadores permanentes:

| Archivo | DOI | Resolver |
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

## Arquitectura

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

Puntos clave del Worker de producción:

* Preflight global `OPTIONS` → `204` con CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + SSE legado (`event: endpoint`) con afinidad de sesión Durable Object
* `POST /messages?sessionId=` — canal de mensajes JSON-RPC para clientes SSE legado
* `GET /` — JSON de salud / descubrimiento con herramientas, recursos y deep-link al registro

---

## Desarrollo local y despliegue

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

Archivos clave:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## Licencia

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Abrir el registro en vivo](https://registry.go2abroad.space)** · **[Hub del ecosistema](https://go2abroad.space)** · **[Conectar MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
