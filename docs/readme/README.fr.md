<div align="center">

# Serveur MCP GO2ABROAD Registry

**Service Model Context Protocol (MCP) pour l’intelligence statutaire mondiale et la conformité des sociétés**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **Registre interactif officiel — recherchez **23 795+** dossiers statutaires en direct :**  
> **[Explorer la base live sur https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> Hub écosystème: **[https://go2abroad.space](https://go2abroad.space)** · Matrice de données: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · **Français** · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## Propulsé par GO2ABROAD Registry

Ce dépôt publie le **serveur MCP distant** open source du [GO2ABROAD Registry](https://registry.go2abroad.space) — intelligence statutaire sur la création d’entités transfrontalières, la fiscalité multi-niveaux et les rails KYC bancaires dans **plus de 80** juridictions.

| Actif | URL |
| --- | --- |
| Registre de données officiel | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| Hub écosystème | [https://go2abroad.space](https://go2abroad.space) |
| Matrice de données GitHub | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| MCP SSE de production | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| Santé / découverte | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| Racine CDN | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

Les enregistrements sont archivés sous DOI permanents sur [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) et [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), et servis via Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) et **R2 CDN**.

---

## Connecter le serveur MCP distant (SSE)

Aucune installation de jeu de données local n’est requise. Pointez Cursor, Claude Desktop, Cline, Dify, LibreChat ou tout client compatible MCP vers le endpoint SSE edge.

* **Endpoint SSE:** `https://mcp-registry.go2abroad.space/sse`
* **Endpoint messages:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **JSON de santé:** `https://mcp-registry.go2abroad.space/`

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

Pont stdio legacy via `mcp-proxy` (si le client ne peut pas ouvrir le SSE distant) :

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

## Cycle de vie statutaire en 6 étapes

Chaque dossier suit le cycle de conformité GO2ABROAD en 6 étapes. Ouvrez chaque étape sur le portail officiel pour une recherche interactive :

| Étape | Focus | Ouvrir sur le registre |
| --- | --- | --- |
| Stage 1 — Formation | Type d’entité, frais de dépôt, délais de création | [Rechercher les dossiers de formation](https://registry.go2abroad.space) |
| Stage 2 — Structure fiscale | Taux d’IS, modèle fiscal, posture conventionnelle | [Parcourir la matrice fiscale](https://registry.go2abroad.space) |
| Stage 3 — Banque & KYC | Niveau de viabilité bancaire, friction d’onboarding | [Filtrer les rails bancaires](https://registry.go2abroad.space) |
| Stage 4 — Licences | Indicateurs de licences statutaires / sectorielles | [Inspecter la couverture licence](https://registry.go2abroad.space) |
| Stage 5 — Maintenance | Frais annuels, déclarations continues, alertes red-line | [Revoir la charge de maintenance](https://registry.go2abroad.space) |
| Stage 6 — Sortie / changement | Restructuration, migration, indices de liquidation | [Comparer les voies de sortie](https://registry.go2abroad.space) |

Heatmap macro fiscale/conformité 82 pays (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

Charge utile complète du dossier (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
Repli: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## Ressources MCP

| URI | Description |
| --- | --- |
| `compliance://tax-heatmap` | Proxy de la heatmap fiscale & conformité des 82 juridictions depuis le CDN |
| `compliance://academic-identifiers` | Renvoie les stubs DOI Zenodo, Figshare et Harvard Dataverse avec guide de citation |

## Outils MCP

| Outil | Objectif |
| --- | --- |
| `search_statutory_dossiers` | Recherche SQL D1 paramétrée sur `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | Charge paresseusement un dossier 6-Stage complet depuis le CDN R2 via `task_id` (+ `lang` optionnel) |
| `compare_jurisdictions` | Comparaison concurrente des frais de dépôt, taux d’impôt et niveaux bancaires pour plusieurs `task_ids` |

---

## Persistance académique (DOI)

Citez le corpus GO2ABROAD Registry via l’un des trois identifiants permanents :

| Archive | DOI | Résoudre |
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

Points clés du Worker de production:

* Préflight `OPTIONS` global → `204` avec CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + SSE legacy (`event: endpoint`) avec affinité de session Durable Object
* `POST /messages?sessionId=` — canal de messages JSON-RPC pour clients SSE legacy
* `GET /` — JSON santé / découverte avec outils, ressources et deep-link registre

---

## Développement local et déploiement

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

Fichiers clés:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## Licence

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[Ouvrir le registre live](https://registry.go2abroad.space)** · **[Hub écosystème](https://go2abroad.space)** · **[Connecter MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
