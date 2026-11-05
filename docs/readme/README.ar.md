<div align="center">
<html dir="rtl">

# خادم MCP لسجل GO2ABROAD

**خدمة Model Context Protocol (MCP) للذكاء النظامي العالمي وامتثال الشركات**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **السجل التفاعلي الرسمي — ابحث في **أكثر من 23,795** ملفًا نظاميًا مباشرة:**  
> **[استكشف قاعدة البيانات الحية على https://registry.go2abroad.space](https://registry.go2abroad.space)**  
> مركز المنظومة: **[https://go2abroad.space](https://go2abroad.space)** · مصفوفة البيانات: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · **العربية** · [हिन्दी](README.hi.md)

</div>

---

## مدعوم من GO2ABROAD Registry

ينشر هذا المستودع **خادم MCP عن بُعد** مفتوح المصدر لـ [GO2ABROAD Registry](https://registry.go2abroad.space) — ذكاء نظامي حول تأسيس الكيانات عبر الحدود، والضرائب متعددة الطبقات، ومسارات KYC المصرفية في **أكثر من 80** ولاية قضائية.

| الأصل | الرابط |
| --- | --- |
| سجل البيانات الرسمي | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| مركز المنظومة | [https://go2abroad.space](https://go2abroad.space) |
| مصفوفة بيانات GitHub | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| MCP SSE للإنتاج | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| الصحة / الاكتشاف | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| جذر CDN | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

تُأرشف السجلات بمعرّفات DOI دائمة على [Zenodo](https://doi.org/10.5281/zenodo.23493470) و[Figshare](https://doi.org/10.6084/m9.figshare.34711899) و[Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)، وتُقدَّم عبر Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) و**R2 CDN**.

---

## الاتصال بخادم MCP البعيد (SSE)

لا حاجة لتثبيت مجموعة بيانات محلية. وجّه Cursor أو Claude Desktop أو Cline أو Dify أو LibreChat أو أي عميل متوافق مع MCP إلى نقطة نهاية SSE الطرفية.

* **نقطة نهاية SSE:** `https://mcp-registry.go2abroad.space/sse`
* **نقطة نهاية الرسائل:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **JSON الصحة:** `https://mcp-registry.go2abroad.space/`

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

جسر stdio قديم عبر `mcp-proxy` (إذا تعذّر فتح SSE البعيد):

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

## دورة الحياة النظامية ذات المراحل الست

يتبع كل ملف دورة امتثال GO2ABROAD ذات المراحل الست. افتح أي مرحلة على البوابة الرسمية للبحث التفاعلي:

| المرحلة | التركيز | افتح في السجل |
| --- | --- | --- |
| Stage 1 — التأسيس | نوع الكيان، رسوم الإيداع، أيام التأسيس | [ابحث عن ملفات التأسيس](https://registry.go2abroad.space) |
| Stage 2 — الهيكل الضريبي | معدل ضريبة الشركات، النموذج الضريبي، موقف المعاهدات | [تصفّح المصفوفة الضريبية](https://registry.go2abroad.space) |
| Stage 3 — البنوك و KYC | مستوى قابلية البنوك، احتكاك الإدماج | [صفِّ مسارات البنوك](https://registry.go2abroad.space) |
| Stage 4 — التراخيص | أعلام الترخيص النظامي / القطاعي | [افحص تغطية التراخيص](https://registry.go2abroad.space) |
| Stage 5 — الصيانة | الرسوم السنوية، الإيداعات المستمرة، تحذيرات الخط الأحمر | [راجع عبء الصيانة](https://registry.go2abroad.space) |
| Stage 6 — الخروج / التغيير | إعادة الهيكلة، الهجرة، إشارات التصفية | [قارن مسارات الخروج](https://registry.go2abroad.space) |

خريطة حرارية ضريبية/امتثالية لـ 82 دولة (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

حمولة الملف الكاملة (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
احتياطي: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## موارد MCP

| URI | الوصف |
| --- | --- |
| `compliance://tax-heatmap` | بروكسي لخريطة الحرارة الضريبية والامتثالية لـ 82 ولاية من CDN |
| `compliance://academic-identifiers` | يعيد stubs DOI لـ Zenodo وFigshare وHarvard Dataverse مع إرشادات الاقتباس |

## أدوات MCP

| الأداة | الغرض |
| --- | --- |
| `search_statutory_dossiers` | بحث SQL معلَم على D1 عبر `dossier_catalog` (`jurisdiction`، `entity_type`، `max_tax_rate`، `banking_viability`، `keyword`، `limit`) |
| `get_dossier_detail` | تحميل كسول لملف 6-Stage كامل من R2 CDN عبر `task_id` (+ `lang` اختياري) |
| `compare_jurisdictions` | مقارنة متزامنة لرسوم التأسيس ومعدلات الضريبة ومستويات البنوك لعدة `task_ids` |

---

## الثبات الأكاديمي (DOI)

اقتبس مدونة GO2ABROAD Registry عبر أي من المعرّفات الثلاثة الدائمة:

| الأرشيف | DOI | حلّ |
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

## البنية

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

أبرز نقاط Worker الإنتاج:

* فحص مسبق عام `OPTIONS` → `204` مع CORS (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + SSE قديم (`event: endpoint`) مع ألفة جلسة Durable Object
* `POST /messages?sessionId=` — قناة رسائل JSON-RPC لعملاء SSE القدامى
* `GET /` — JSON صحة / اكتشاف يتضمن الأدوات والموارد ورابطًا عميقًا للسجل

---

## التطوير المحلي والنشر

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

الملفات الرئيسية:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## الترخيص

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[افتح السجل الحي](https://registry.go2abroad.space)** · **[مركز المنظومة](https://go2abroad.space)** · **[اتصل بـ MCP SSE](https://mcp-registry.go2abroad.space/sse)**

</div>
