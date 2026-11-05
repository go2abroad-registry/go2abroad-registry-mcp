<div align="center">

# GO2ABROAD Registry MCP サーバー

**グローバルな法定インテリジェンスと企業コンプライアンス向け Model Context Protocol（MCP）リモートサービス**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **公式インタラクティブ・レジストリ — **23,795+** の法定ドシエをライブ検索：**  
> **[https://registry.go2abroad.space のライブDBを開く](https://registry.go2abroad.space)**  
> エコシステム・ハブ: **[https://go2abroad.space](https://go2abroad.space)** · データ・マトリクス: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · **日本語** · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## GO2ABROAD Registry により提供

本リポジトリは [GO2ABROAD Registry](https://registry.go2abroad.space) の**リモート MCP サーバー**をオープンソース公開します。**80+** 法域にわたる越境会社設立、多層税制、銀行 KYC の法定インテリジェンスを提供します。

| 資産 | URL |
| --- | --- |
| 公式データレジストリ | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| エコシステム・ハブ | [https://go2abroad.space](https://go2abroad.space) |
| GitHub データ・マトリクス | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| 本番 MCP SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| ヘルス / ディスカバリ | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN ルート | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

レコードは [Zenodo](https://doi.org/10.5281/zenodo.23493470)、[Figshare](https://doi.org/10.6084/m9.figshare.34711899)、[Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) の永続 DOI でアーカイブされ、Cloudflare **D1**（`transcend-go2abroad` / `dossier_catalog`）と **R2 CDN** から配信されます。

---

## リモート MCP サーバー（SSE）に接続

ローカルデータセットのインストールは不要です。Cursor、Claude Desktop、Cline、Dify、LibreChat、または任意の MCP 対応クライアントをエッジ SSE エンドポイントに向けてください。

* **SSE エンドポイント:** `https://mcp-registry.go2abroad.space/sse`
* **メッセージ・エンドポイント:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **ヘルス JSON:** `https://mcp-registry.go2abroad.space/`

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

クライアントがリモート SSE を直接開けない場合の `mcp-proxy` stdio ブリッジ：

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

## 6-Stage 法定ライフサイクル

各ドシエは GO2ABROAD 6 段階コンプライアンス・ライフサイクルに従います。下表の各段階から公式ポータルの対話検索へ入れます：

| ステージ | 焦点 | レジストリで開く |
| --- | --- | --- |
| Stage 1 — 設立 | 事業体タイプ、州設立費用、設立日数 | [設立ドシエを検索](https://registry.go2abroad.space) |
| Stage 2 — 税構造 | 法人税率、税モデル、条約姿勢 | [税マトリクスを閲覧](https://registry.go2abroad.space) |
| Stage 3 — 銀行 & KYC | 銀行実行可能性ティア、オンボーディング摩擦 | [銀行レールを絞込](https://registry.go2abroad.space) |
| Stage 4 — 許認可 | 法定 / 業種ライセンス・フラグ | [ライセンス範囲を確認](https://registry.go2abroad.space) |
| Stage 5 — 維持 | 年次費用、継続申告、レッドライン警告 | [維持負荷を確認](https://registry.go2abroad.space) |
| Stage 6 — 退出 / 変更 | 再編、移転、清算の手がかり | [退出パスを比較](https://registry.go2abroad.space) |

82 か国マクロ税・コンプライアンス熱マップ（CDN）:  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

完全ドシエ・ペイロード（CDN）:  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
フォールバック: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP リソース

| URI | 説明 |
| --- | --- |
| `compliance://tax-heatmap` | CDN 上の 82 法域法人税・コンプライアンス熱マップをプロキシ取得 |
| `compliance://academic-identifiers` | Zenodo / Figshare / Harvard Dataverse の DOI スタブと引用ガイダンスを返却 |

## MCP ツール

| ツール | 目的 |
| --- | --- |
| `search_statutory_dossiers` | `dossier_catalog` に対するパラメータ化 D1 SQL 検索（`jurisdiction`、`entity_type`、`max_tax_rate`、`banking_viability`、`keyword`、`limit`） |
| `get_dossier_detail` | `task_id`（任意の `lang`）で R2 CDN から完全 6-Stage ドシエを遅延読込 |
| `compare_jurisdictions` | 複数 `task_ids` の設立費用・税率・銀行ティアを並行比較 |

---

## 学術永続識別子（DOI）

次のいずれかの永続識別子で GO2ABROAD Registry コーパスを引用できます：

| アーカイブ | DOI | 解決 |
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

## アーキテクチャ

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

本番 Worker の要点:

* グローバル `OPTIONS` プリフライト → `204`、CORS 付き（`Access-Control-Allow-Origin: *`）
* `GET|POST /sse` — Streamable HTTP + レガシー SSE（`event: endpoint`）、Durable Object セッション親和性
* `POST /messages?sessionId=` — レガシー SSE クライアント向け JSON-RPC メッセージ経路
* `GET /` — ツール・リソース・レジストリ深リンク付きヘルス / ディスカバリ JSON

---

## ローカル開発とデプロイ

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

主要ファイル:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## ライセンス

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[ライブリジストリを開く](https://registry.go2abroad.space)** · **[エコシステム・ハブ](https://go2abroad.space)** · **[MCP SSE に接続](https://mcp-registry.go2abroad.space/sse)**

</div>
