<div align="center">

# GO2ABROAD Registry MCP 服务器

**面向全球法定情报与公司合规的 Model Context Protocol（MCP）远程服务**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **官方交互式注册局 — 在线检索 **23,795+** 法定档案：**  
> **[打开 https://registry.go2abroad.space 实时数据库](https://registry.go2abroad.space)**  
> 出海生态主站: **[https://go2abroad.space](https://go2abroad.space)** · 数据矩阵: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · **简体中文** · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## 由 GO2ABROAD Registry 驱动

本仓库开源发布 [GO2ABROAD Registry](https://registry.go2abroad.space) 的**远程 MCP 服务器**，覆盖 **80+** 法域的跨境公司设立、多层税制与银行 KYC 轨道法定情报。

| 资产 | 链接 |
| --- | --- |
| 官方数据注册局 | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| 生态主站 | [https://go2abroad.space](https://go2abroad.space) |
| GitHub 数据矩阵 | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| 生产 MCP SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| 健康检查 / 发现 | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN 根地址 | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

数据以永久 DOI 归档于 [Zenodo](https://doi.org/10.5281/zenodo.23493470)、[Figshare](https://doi.org/10.6084/m9.figshare.34711899) 与 [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)，并由 Cloudflare **D1**（`transcend-go2abroad` / `dossier_catalog`）与 **R2 CDN** 提供服务。

---

## 连接远程 MCP 服务器（SSE）

无需安装本地数据集。将 Cursor、Claude Desktop、Cline、Dify、LibreChat 或任意 MCP 兼容客户端指向边缘 SSE 端点即可。

* **SSE 端点:** `https://mcp-registry.go2abroad.space/sse`
* **消息端点:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **健康 JSON:** `https://mcp-registry.go2abroad.space/`

### Cursor / Claude Desktop（`mcpServers`）

```json
{
  "mcpServers": {
    "go2abroad-registry": {
      "url": "https://mcp-registry.go2abroad.space/sse"
    }
  }
}
```

若客户端无法直接打开远程 SSE，可使用 `mcp-proxy` 的 stdio 桥接：

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

## 6-Stage 法定全生命周期

每份档案遵循 GO2ABROAD 六阶段合规生命周期。点击下表任意阶段即可进入官网交互检索：

| 阶段 | 焦点 | 进入官网 |
| --- | --- | --- |
| Stage 1 — 设立 | 实体类型、州立设立费、设立天数 | [检索设立档案](https://registry.go2abroad.space) |
| Stage 2 — 税制结构 | 企业所得税率、税制模型、协定立场 | [浏览税务矩阵](https://registry.go2abroad.space) |
| Stage 3 — 银行与 KYC | 银行可行性层级、开户摩擦 | [筛选银行轨道](https://registry.go2abroad.space) |
| Stage 4 — 牌照 | 法定 / 行业牌照标志 | [查看牌照覆盖](https://registry.go2abroad.space) |
| Stage 5 — 维护 | 年费、持续申报、红线预警 | [复核维护负担](https://registry.go2abroad.space) |
| Stage 6 — 退出 / 变更 | 重组、迁移、清算线索 | [对比退出路径](https://registry.go2abroad.space) |

82 国宏观税与合规热力图（CDN）:  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

完整档案载荷（CDN）:  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
回退: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP Resources

| URI | 说明 |
| --- | --- |
| `compliance://tax-heatmap` | 代理抓取 CDN 上 82 国企业税与合规热力图 |
| `compliance://academic-identifiers` | 返回 Zenodo、Figshare、Harvard Dataverse 三大 DOI 存根与引用说明 |

## MCP Tools

| 工具 | 用途 |
| --- | --- |
| `search_statutory_dossiers` | 对 `dossier_catalog` 执行参数化 D1 SQL 检索（`jurisdiction`、`entity_type`、`max_tax_rate`、`banking_viability`、`keyword`、`limit`） |
| `get_dossier_detail` | 按 `task_id`（可选 `lang`）懒加载 R2 CDN 上的完整 6-Stage 档案 |
| `compare_jurisdictions` | 并发对比多个 `task_ids` 的设立规费、所得税率与银行评级 |

---

## 学术持久存证（DOI）

可通过以下任一永久标识符引用 GO2ABROAD Registry 语料：

| 存档 | DOI | 解析 |
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

## 架构

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

生产 Worker 要点:

* 全局 `OPTIONS` 预检 → `204`，附带 CORS（`Access-Control-Allow-Origin: *`）
* `GET|POST /sse` — Streamable HTTP + 传统 SSE（`event: endpoint`），Durable Object 会话亲和
* `POST /messages?sessionId=` — 传统 SSE 客户端的 JSON-RPC 消息通道
* `GET /` — 健康 / 发现 JSON，含工具、资源与注册局深链

---

## 本地开发与部署

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

关键文件:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## 许可证

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[打开实时注册局](https://registry.go2abroad.space)** · **[生态主站](https://go2abroad.space)** · **[连接 MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
