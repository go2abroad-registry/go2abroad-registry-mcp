<div align="center">

# GO2ABROAD Registry MCP सर्वर

**वैश्विक वैधानिक इंटेलिजेंस और कॉर्पोरेट अनुपालन के लिए Model Context Protocol (MCP) रिमोट सेवा**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **आधिकारिक इंटरैक्टिव रजिस्ट्री — **23,795+** वैधानिक डोजियर लाइव खोजें:**  
> **[https://registry.go2abroad.space पर लाइव डेटाबेस खोलें](https://registry.go2abroad.space)**  
> इकोसिस्टम हब: **[https://go2abroad.space](https://go2abroad.space)** · डेटा मैट्रिक्स: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

[English](../../README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [한국어](README.ko.md) · [العربية](README.ar.md) · **हिन्दी**

</div>

---

## GO2ABROAD Registry द्वारा संचालित

यह रिपॉजिटरी [GO2ABROAD Registry](https://registry.go2abroad.space) का ओपन-सोर्स **रिमोट MCP सर्वर** प्रकाशित करती है — **80+** अधिकारक्षेत्रों में सीमा-पार इकाई गठन, बहु-स्तरीय कराधान और बैंकिंग KYC रेल की वैधानिक इंटेलिजेंस।

| एसेट | URL |
| --- | --- |
| आधिकारिक डेटा रजिस्ट्री | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| इकोसिस्टम हब | [https://go2abroad.space](https://go2abroad.space) |
| GitHub डेटा मैट्रिक्स | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| प्रोडक्शन MCP SSE | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| हेल्थ / डिस्कवरी | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| CDN रूट | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

रिकॉर्ड [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) और [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) पर स्थायी DOI के साथ संग्रहीत हैं, तथा Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) और **R2 CDN** से परोसे जाते हैं।

---

## रिमोट MCP सर्वर कनेक्ट करें (SSE)

स्थानीय डेटासेट इंस्टॉल करने की आवश्यकता नहीं। Cursor, Claude Desktop, Cline, Dify, LibreChat या किसी भी MCP-संगत क्लाइंट को एज SSE एंडपॉइंट पर पॉइंट करें।

* **SSE एंडपॉइंट:** `https://mcp-registry.go2abroad.space/sse`
* **मैसेज एंडपॉइंट:** `https://mcp-registry.go2abroad.space/messages?sessionId=<id>`
* **हेल्थ JSON:** `https://mcp-registry.go2abroad.space/`

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

यदि क्लाइंट रिमोट SSE नहीं खोल सकता तो `mcp-proxy` के माध्यम से लेगेसी stdio ब्रिज:

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

## 6-Stage वैधानिक जीवनचक्र

प्रत्येक डोजियर GO2ABROAD 6-Stage अनुपालन जीवनचक्र का पालन करता है। इंटरैक्टिव खोज के लिए आधिकारिक पोर्टल पर कोई भी स्टेज खोलें:

| स्टेज | फोकस | रजिस्ट्री पर खोलें |
| --- | --- | --- |
| Stage 1 — गठन | इकाई प्रकार, राज्य फाइलिंग शुल्क, गठन दिन | [गठन डोजियर खोजें](https://registry.go2abroad.space) |
| Stage 2 — कर संरचना | कॉर्पोरेट कर दर, कर मॉडल, संधि मुद्रा | [कर मैट्रिक्स देखें](https://registry.go2abroad.space) |
| Stage 3 — बैंकिंग और KYC | बैंकिंग व्यवहार्यता टियर, ऑनबोर्डिंग घर्षण | [बैंकिंग रेल फ़िल्टर करें](https://registry.go2abroad.space) |
| Stage 4 — लाइसेंसिंग | वैधानिक / क्षेत्रीय लाइसेंस फ्लैग | [लाइसेंस कवरेज जाँचें](https://registry.go2abroad.space) |
| Stage 5 — रखरखाव | वार्षिक शुल्क, निरंतर फाइलिंग, रेड-लाइन चेतावनी | [रखरखाव भार समीक्षा](https://registry.go2abroad.space) |
| Stage 6 — निकास / परिवर्तन | पुनर्गठन, माइग्रेशन, परिसमापन संकेत | [निकास पथ तुलना](https://registry.go2abroad.space) |

82 देशों का मैक्रो कर/अनुपालन हीटमैप (CDN):  
`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json`

पूर्ण डोजियर पेलोड (CDN):  
`https://cdn.go2abroad.space/dossiers/{task_id}.json`  
फ़ॉलबैक: `https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl`

---

## MCP संसाधन

| URI | विवरण |
| --- | --- |
| `compliance://tax-heatmap` | CDN से 82-अधिकारक्षेत्र कॉर्पोरेट कर और अनुपालन हीटमैप का प्रॉक्सी |
| `compliance://academic-identifiers` | Zenodo, Figshare और Harvard Dataverse DOI स्टब तथा उद्धरण मार्गदर्शन लौटाता है |

## MCP टूल

| टूल | उद्देश्य |
| --- | --- |
| `search_statutory_dossiers` | `dossier_catalog` पर पैरामीटरयुक्त D1 SQL खोज (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`) |
| `get_dossier_detail` | `task_id` (+ वैकल्पिक `lang`) द्वारा R2 CDN से पूर्ण 6-Stage डोजियर लेज़ी-लोड |
| `compare_jurisdictions` | कई `task_ids` के लिए फाइलिंग शुल्क, कर दर और बैंकिंग टियर की समवर्ती तुलना |

---

## शैक्षणिक स्थायित्व (DOI)

तीन स्थायी पहचानकर्ताओं में से किसी के माध्यम से GO2ABROAD Registry कॉर्पस उद्धृत करें:

| आर्काइव | DOI | रिज़ॉल्व |
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

## आर्किटेक्चर

```
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
```

प्रोडक्शन Worker मुख्य बिंदु:

* ग्लोबल `OPTIONS` प्रीफ्लाइट → `204` CORS के साथ (`Access-Control-Allow-Origin: *`)
* `GET|POST /sse` — Streamable HTTP + लेगेसी SSE (`event: endpoint`) Durable Object सत्र आत्मीयता के साथ
* `POST /messages?sessionId=` — लेगेसी SSE क्लाइंट के लिए JSON-RPC मैसेज चैनल
* `GET /` — टूल, संसाधन और रजिस्ट्री डीप-लिंक सहित हेल्थ / डिस्कवरी JSON

---

## लोकल विकास और डिप्लॉय

```bash
npm install
npm run typecheck
npm run dev
npm run deploy
```

मुख्य फ़ाइलें:

* `src/index.ts` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* `src/mcp-server.ts` — MCP resources & tools
* `src/catalog.ts` — parameterized D1 queries
* `src/cdn.ts` — R2 CDN dossier / heatmap helpers
* `wrangler.jsonc` — Worker name, custom route `mcp-registry.go2abroad.space/*`, D1 binding `DB`

---

## लाइसेंस

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[लाइव रजिस्ट्री खोलें](https://registry.go2abroad.space)** · **[इकोसिस्टम हब](https://go2abroad.space)** · **[MCP SSE कनेक्ट करें](https://mcp-registry.go2abroad.space/sse)**

</div>
