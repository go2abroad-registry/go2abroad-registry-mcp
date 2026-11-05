<div align="center">

# GO2ABROAD Registry MCP 서버

**글로벌 법정 인텔리전스 및 기업 컴플라이언스를 위한 Model Context Protocol(MCP) 원격 서비스**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **공식 인터랙티브 레지스트리 — **23,795+** 법정 도시에를 실시간 검색:**  
> **[https://registry.go2abroad.space 라이브 DB 열기](https://registry.go2abroad.space)**  
> 생태계 허브: **[https://go2abroad.space](https://go2abroad.space)** · 데이터 매트릭스: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · **한국어** · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

</div>

---

## GO2ABROAD Registry 제공

이 저장소는 [GO2ABROAD Registry](https://registry.go2abroad.space)의 오픈소스 **원격 MCP 서버**를 공개합니다. **80+** 관할권의 국경 간 법인 설립, 다층 세제, 은행 KYC 레일에 대한 법정 인텔리전스를 제공합니다.

| 자산 | URL |
| --- | --- |
| 공식 데이터 레지스트리 | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| 생태계 허브 | [https://go2abroad.space](https://go2abroad.space) |
| GitHub 데이터 매트릭스 | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| 프로덕션 MCP SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| 헬스 / 디스커버리 | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN 루트 | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

레코드는 [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899), [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)의 영구 DOI로 아카이브되며 Cloudflare **D1**(`transcend-go2abroad` / `dossier_catalog`)과 **R2 CDN**으로 제공됩니다.

---

## 원격 MCP 서버 연결(SSE)

로컬 데이터셋 설치가 필요하지 않습니다. Cursor, Claude Desktop, Cline, Dify, LibreChat 또는 모든 MCP 호환 클라이언트를 엣지 SSE 엔드포인트로 지정하세요.

* **SSE 엔드포인트:** `https://mcp-registry.go2abroad.space/sse`
* **메시지 엔드포인트:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **헬스 JSON:** `https://mcp-registry.go2abroad.space/`

### Cursor / Claude Desktop(`mcpServers`)

```json
{
  "mcpServers": {
    "go2abroad-registry": {
      "url": "https://mcp-registry.go2abroad.space/sse"
    }
  }
}
```

클라이언트가 원격 SSE를 직접 열 수 없을 때 `mcp-proxy` stdio 브리지:

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

## 6-Stage 법정 라이프사이클

모든 도시에는 GO2ABROAD 6단계 컴플라이언스 라이프사이클을 따릅니다. 아래 각 단계에서 공식 포털의 인터랙티브 검색으로 이동할 수 있습니다:

| 단계 | 초점 | 레지스트리에서 열기 |
| --- | --- | --- |
| Stage 1 — 설립 | 법인 유형, 주 설립 수수료, 설립 일수 | [설립 도시에 검색](https://registry.go2abroad.space) |
| Stage 2 — 세제 구조 | 법인세율, 세제 모델, 조약 포지션 | [세금 매트릭스 탐색](https://registry.go2abroad.space) |
| Stage 3 — 뱅킹 & KYC | 은행 실행 가능성 티어, 온보딩 마찰 | [뱅킹 레일 필터](https://registry.go2abroad.space) |
| Stage 4 — 라이선스 | 법정 / 업종 라이선스 플래그 | [라이선스 범위 확인](https://registry.go2abroad.space) |
| Stage 5 — 유지 | 연간 비용, 지속 신고, 레드라인 경고 | [유지 부담 검토](https://registry.go2abroad.space) |
| Stage 6 — 종료 / 변경 | 구조조정, 이전, 청산 신호 | [종료 경로 비교](https://registry.go2abroad.space) |

82개국 거시 세금/컴플라이언스 히트맵(CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

전체 도시에 페이로드(CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
폴백: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP 리소스

| URI | 설명 |
| --- | --- |
| `compliance://tax-heatmap` | CDN의 82개 관할 법인세·컴플라이언스 히트맵을 프록시 |
| `compliance://academic-identifiers` | Zenodo / Figshare / Harvard Dataverse DOI 스텁과 인용 가이드 반환 |

## MCP 도구

| 도구 | 목적 |
| --- | --- |
| `search_statutory_dossiers` | `dossier_catalog`에 대한 매개변수화 D1 SQL 검색(`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | `task_id`(선택 `lang`)로 R2 CDN에서 전체 6-Stage 도시에 지연 로드 |
| `compare_jurisdictions` | 여러 `task_ids`의 설립 수수료·세율·은행 티어 동시 비교 |

---

## 학술 영속 식별자(DOI)

다음 세 영구 식별자 중 하나로 GO2ABROAD Registry 코퍼스를 인용하세요:

| 아카이브 | DOI | 해석 |
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

## 아키텍처

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

프로덕션 Worker 하이라이트:

* 전역 `OPTIONS` 프리플라이트 → `204`, CORS 포함(`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + 레거시 SSE(`event: endpoint`), Durable Object 세션 어피니티
* `POST /messages?sessionId=` — 레거시 SSE 클라이언트용 JSON-RPC 메시지 채널
* `GET /` — 도구·리소스·레지스트리 딥링크가 포함된 헬스/디스커버리 JSON

---

## 로컬 개발 및 배포

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

핵심 파일:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## 라이선스

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[라이브 레지스트리 열기](https://registry.go2abroad.space)** · **[생태계 허브](https://go2abroad.space)** · **[MCP SSE 연결](https://mcp-registry.go2abroad.space/sse)**

</div>
