<div align="center">

# Servidor MCP GO2ABROAD Registry

**Serviço Model Context Protocol (MCP) para inteligência estatutária global e conformidade corporativa**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Registro interativo oficial — pesquise **23.795+** dossiês estatutários ao vivo:**  
> **[Explorar a base em https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> Hub do ecossistema: **[https://go2abroad.space](https://go2abroad.space)** · Matriz de dados: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · **Português** · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## Powered by GO2ABROAD Registry

Este repositório publica o **servidor MCP remoto** open source do [GO2ABROAD Registry](https://registry.go2abroad.space) — inteligência estatutária sobre constituição transfronteiriça, tributação multinível e trilhos KYC bancários em **mais de 80** jurisdições.

| Ativo | URL |
| --- | --- |
| Registro oficial de dados | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Hub do ecossistema | [https://go2abroad.space](https://go2abroad.space) |
| Matriz de dados no GitHub | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| MCP SSE de produção | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Saúde / descoberta | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| Raiz CDN | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

Os registros são arquivados com DOI permanentes em [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) e [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), e servidos via Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) e **R2 CDN**.

---

## Conectar o servidor MCP remoto (SSE)

Não é necessário instalar um dataset local. Aponte Cursor, Claude Desktop, Cline, Dify, LibreChat ou qualquer cliente compatível com MCP para o endpoint SSE de borda.

* **Endpoint SSE:** `https://mcp-registry.go2abroad.space/sse`
* **Endpoint de mensagens:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **JSON de saúde:** `https://mcp-registry.go2abroad.space/`

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

Ponte stdio legada via `mcp-proxy` (se o cliente não abrir SSE remoto):

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

## Ciclo de vida estatutário em 6 estágios

Cada dossiê segue o ciclo de conformidade GO2ABROAD em 6 estágios. Abra qualquer estágio no portal oficial para busca interativa:

| Estágio | Foco | Abrir no registro |
| --- | --- | --- |
| Stage 1 — Constituição | Tipo de entidade, taxas de registro, dias de formação | [Buscar dossiês de constituição](https://registry.go2abroad.space) |
| Stage 2 — Estrutura fiscal | Alíquota societária, modelo fiscal, postura de tratados | [Navegar matriz fiscal](https://registry.go2abroad.space) |
| Stage 3 — Banking & KYC | Nível de viabilidade bancária, atrito de onboarding | [Filtrar trilhos bancários](https://registry.go2abroad.space) |
| Stage 4 — Licenciamento | Flags de licença estatutária / setorial | [Inspecionar cobertura de licenças](https://registry.go2abroad.space) |
| Stage 5 — Manutenção | Taxas anuais, obrigações contínuas, alertas red-line | [Revisar carga de manutenção](https://registry.go2abroad.space) |
| Stage 6 — Saída / mudança | Reestruturação, migração, indícios de liquidação | [Comparar caminhos de saída](https://registry.go2abroad.space) |

Heatmap macro fiscal/conformidade de 82 países (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Payload completo do dossiê (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Fallback: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## Recursos MCP

| URI | Descrição |
| --- | --- |
| `compliance://tax-heatmap` | Faz proxy do heatmap fiscal e de conformidade de 82 jurisdições a partir do CDN |
| `compliance://academic-identifiers` | Retorna stubs DOI Zenodo, Figshare e Harvard Dataverse com orientação de citação |

## Ferramentas MCP

| Ferramenta | Propósito |
| --- | --- |
| `search_statutory_dossiers` | Busca SQL D1 parametrizada em `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Carrega preguiçosamente um dossiê 6-Stage completo do R2 CDN por `task_id` (+ `lang` opcional) |
| `compare_jurisdictions` | Comparação concorrente de taxas de constituição, alíquotas e níveis bancários para vários `task_ids` |

---

## Persistência acadêmica (DOI)

Cite o corpus do GO2ABROAD Registry por qualquer um dos três identificadores permanentes:

| Arquivo | DOI | Resolver |
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

## Arquitetura

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

Destaques do Worker de produção:

* Preflight global `OPTIONS` → `204` com CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + SSE legado (`event: endpoint`) com afinidade de sessão Durable Object
* `POST /messages?sessionId=` — canal de mensagens JSON-RPC para clientes SSE legado
* `GET /` — JSON de saúde / descoberta com ferramentas, recursos e deep-link do registro

---

## Desenvolvimento local e deploy

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

Arquivos-chave:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## Licença

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Abrir o registro ao vivo](https://registry.go2abroad.space)** · **[Hub do ecossistema](https://go2abroad.space)** · **[Conectar MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
