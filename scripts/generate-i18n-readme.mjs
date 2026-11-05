import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "docs", "readme");
mkdirSync(outDir, { recursive: true });

const langs = [
  { code: "zh", label: "简体中文" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "hi", label: "हिन्दी" },
];

function nav(active) {
  const items = [
    ["en", "English", "../../README.md"],
    ["zh", "简体中文", "README.zh.md"],
    ["ja", "日本語", "README.ja.md"],
    ["de", "Deutsch", "README.de.md"],
    ["fr", "Français", "README.fr.md"],
    ["es", "Español", "README.es.md"],
    ["it", "Italiano", "README.it.md"],
    ["pt", "Português", "README.pt.md"],
    ["ko", "한국어", "README.ko.md"],
    ["ar", "العربية", "README.ar.md"],
    ["hi", "हिन्दी", "README.hi.md"],
  ];
  return items
    .map(([code, label, href]) => (code === active ? `**${label}**` : `[${label}](${href})`))
    .join(" · ");
}

const t = {
  zh: {
    title: "GO2ABROAD Registry MCP 服务器",
    subtitle: "面向全球法定情报与公司合规的 Model Context Protocol（MCP）远程服务",
    cta: "官方交互式注册局 — 在线检索 **23,795+** 法定档案：",
    ctaLink: "打开 https://registry.go2abroad.space 实时数据库",
    parent: "出海生态主站",
    data: "数据矩阵",
    powered: "由 GO2ABROAD Registry 驱动",
    poweredBody:
      "本仓库开源发布 [GO2ABROAD Registry](https://registry.go2abroad.space) 的**远程 MCP 服务器**，覆盖 **80+** 法域的跨境公司设立、多层税制与银行 KYC 轨道法定情报。",
    asset: "资产",
    url: "链接",
    portal: "官方数据注册局",
    eco: "生态主站",
    gh: "GitHub 数据矩阵",
    sse: "生产 MCP SSE",
    health: "健康检查 / 发现",
    cdn: "CDN 根地址",
    doiNote:
      "数据以永久 DOI 归档于 [Zenodo](https://doi.org/10.5281/zenodo.23493470)、[Figshare](https://doi.org/10.6084/m9.figshare.34711899) 与 [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)，并由 Cloudflare **D1**（`transcend-go2abroad` / `dossier_catalog`）与 **R2 CDN** 提供服务。",
    connect: "连接远程 MCP 服务器（SSE）",
    connectBody:
      "无需安装本地数据集。将 Cursor、Claude Desktop、Cline、Dify、LibreChat 或任意 MCP 兼容客户端指向边缘 SSE 端点即可。",
    sseEp: "SSE 端点",
    msgEp: "消息端点",
    healthEp: "健康 JSON",
    cursor: "Cursor / Claude Desktop（`mcpServers`）",
    legacy: "若客户端无法直接打开远程 SSE，可使用 `mcp-proxy` 的 stdio 桥接：",
    stages: "6-Stage 法定全生命周期",
    stagesBody:
      "每份档案遵循 GO2ABROAD 六阶段合规生命周期。点击下表任意阶段即可进入官网交互检索：",
    stageCol: "阶段",
    focusCol: "焦点",
    openCol: "进入官网",
    s1: ["Stage 1 — 设立", "实体类型、州立设立费、设立天数", "检索设立档案"],
    s2: ["Stage 2 — 税制结构", "企业所得税率、税制模型、协定立场", "浏览税务矩阵"],
    s3: ["Stage 3 — 银行与 KYC", "银行可行性层级、开户摩擦", "筛选银行轨道"],
    s4: ["Stage 4 — 牌照", "法定 / 行业牌照标志", "查看牌照覆盖"],
    s5: ["Stage 5 — 维护", "年费、持续申报、红线预警", "复核维护负担"],
    s6: ["Stage 6 — 退出 / 变更", "重组、迁移、清算线索", "对比退出路径"],
    heatmap: "82 国宏观税与合规热力图（CDN）",
    dossier: "完整档案载荷（CDN）",
    fallback: "回退",
    resources: "MCP Resources",
    tools: "MCP Tools",
    uri: "URI",
    desc: "说明",
    tool: "工具",
    purpose: "用途",
    r1: "代理抓取 CDN 上 82 国企业税与合规热力图",
    r2: "返回 Zenodo、Figshare、Harvard Dataverse 三大 DOI 存根与引用说明",
    t1: "对 `dossier_catalog` 执行参数化 D1 SQL 检索（`jurisdiction`、`entity_type`、`max_tax_rate`、`banking_viability`、`keyword`、`limit`）",
    t2: "按 `task_id`（可选 `lang`）懒加载 R2 CDN 上的完整 6-Stage 档案",
    t3: "并发对比多个 `task_ids` 的设立规费、所得税率与银行评级",
    academic: "学术持久存证（DOI）",
    academicBody: "可通过以下任一永久标识符引用 GO2ABROAD Registry 语料：",
    archive: "存档",
    resolve: "解析",
    arch: "架构",
    highlights: "生产 Worker 要点",
    h1: "全局 `OPTIONS` 预检 → `204`，附带 CORS（`Access-Control-Allow-Origin: *`）",
    h2: "`GET|POST /sse` — Streamable HTTP + 传统 SSE（`event: endpoint`），Durable Object 会话亲和",
    h3: "`POST /messages?sessionId=` — 传统 SSE 客户端的 JSON-RPC 消息通道",
    h4: "`GET /` — 健康 / 发现 JSON，含工具、资源与注册局深链",
    local: "本地开发与部署",
    files: "关键文件",
    license: "许可证",
    footerOpen: "打开实时注册局",
    footerEco: "生态主站",
    footerMcp: "连接 MCP SSE",
  },
  ja: {
    title: "GO2ABROAD Registry MCP サーバー",
    subtitle: "グローバルな法定インテリジェンスと企業コンプライアンス向け Model Context Protocol（MCP）リモートサービス",
    cta: "公式インタラクティブ・レジストリ — **23,795+** の法定ドシエをライブ検索：",
    ctaLink: "https://registry.go2abroad.space のライブDBを開く",
    parent: "エコシステム・ハブ",
    data: "データ・マトリクス",
    powered: "GO2ABROAD Registry により提供",
    poweredBody:
      "本リポジトリは [GO2ABROAD Registry](https://registry.go2abroad.space) の**リモート MCP サーバー**をオープンソース公開します。**80+** 法域にわたる越境会社設立、多層税制、銀行 KYC の法定インテリジェンスを提供します。",
    asset: "資産",
    url: "URL",
    portal: "公式データレジストリ",
    eco: "エコシステム・ハブ",
    gh: "GitHub データ・マトリクス",
    sse: "本番 MCP SSE",
    health: "ヘルス / ディスカバリ",
    cdn: "CDN ルート",
    doiNote:
      "レコードは [Zenodo](https://doi.org/10.5281/zenodo.23493470)、[Figshare](https://doi.org/10.6084/m9.figshare.34711899)、[Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) の永続 DOI でアーカイブされ、Cloudflare **D1**（`transcend-go2abroad` / `dossier_catalog`）と **R2 CDN** から配信されます。",
    connect: "リモート MCP サーバー（SSE）に接続",
    connectBody:
      "ローカルデータセットのインストールは不要です。Cursor、Claude Desktop、Cline、Dify、LibreChat、または任意の MCP 対応クライアントをエッジ SSE エンドポイントに向けてください。",
    sseEp: "SSE エンドポイント",
    msgEp: "メッセージ・エンドポイント",
    healthEp: "ヘルス JSON",
    cursor: "Cursor / Claude Desktop（`mcpServers`）",
    legacy: "クライアントがリモート SSE を直接開けない場合の `mcp-proxy` stdio ブリッジ：",
    stages: "6-Stage 法定ライフサイクル",
    stagesBody:
      "各ドシエは GO2ABROAD 6 段階コンプライアンス・ライフサイクルに従います。下表の各段階から公式ポータルの対話検索へ入れます：",
    stageCol: "ステージ",
    focusCol: "焦点",
    openCol: "レジストリで開く",
    s1: ["Stage 1 — 設立", "事業体タイプ、州設立費用、設立日数", "設立ドシエを検索"],
    s2: ["Stage 2 — 税構造", "法人税率、税モデル、条約姿勢", "税マトリクスを閲覧"],
    s3: ["Stage 3 — 銀行 & KYC", "銀行実行可能性ティア、オンボーディング摩擦", "銀行レールを絞込"],
    s4: ["Stage 4 — 許認可", "法定 / 業種ライセンス・フラグ", "ライセンス範囲を確認"],
    s5: ["Stage 5 — 維持", "年次費用、継続申告、レッドライン警告", "維持負荷を確認"],
    s6: ["Stage 6 — 退出 / 変更", "再編、移転、清算の手がかり", "退出パスを比較"],
    heatmap: "82 か国マクロ税・コンプライアンス熱マップ（CDN）",
    dossier: "完全ドシエ・ペイロード（CDN）",
    fallback: "フォールバック",
    resources: "MCP リソース",
    tools: "MCP ツール",
    uri: "URI",
    desc: "説明",
    tool: "ツール",
    purpose: "目的",
    r1: "CDN 上の 82 法域法人税・コンプライアンス熱マップをプロキシ取得",
    r2: "Zenodo / Figshare / Harvard Dataverse の DOI スタブと引用ガイダンスを返却",
    t1: "`dossier_catalog` に対するパラメータ化 D1 SQL 検索（`jurisdiction`、`entity_type`、`max_tax_rate`、`banking_viability`、`keyword`、`limit`）",
    t2: "`task_id`（任意の `lang`）で R2 CDN から完全 6-Stage ドシエを遅延読込",
    t3: "複数 `task_ids` の設立費用・税率・銀行ティアを並行比較",
    academic: "学術永続識別子（DOI）",
    academicBody: "次のいずれかの永続識別子で GO2ABROAD Registry コーパスを引用できます：",
    archive: "アーカイブ",
    resolve: "解決",
    arch: "アーキテクチャ",
    highlights: "本番 Worker の要点",
    h1: "グローバル `OPTIONS` プリフライト → `204`、CORS 付き（`Access-Control-Allow-Origin: *`）",
    h2: "`GET|POST /sse` — Streamable HTTP + レガシー SSE（`event: endpoint`）、Durable Object セッション親和性",
    h3: "`POST /messages?sessionId=` — レガシー SSE クライアント向け JSON-RPC メッセージ経路",
    h4: "`GET /` — ツール・リソース・レジストリ深リンク付きヘルス / ディスカバリ JSON",
    local: "ローカル開発とデプロイ",
    files: "主要ファイル",
    license: "ライセンス",
    footerOpen: "ライブリジストリを開く",
    footerEco: "エコシステム・ハブ",
    footerMcp: "MCP SSE に接続",
  },
  de: {
    title: "GO2ABROAD Registry MCP-Server",
    subtitle: "Model Context Protocol (MCP)-Dienst für globale gesetzliche Intelligenz & Unternehmens-Compliance",
    cta: "Offizielles interaktives Register — durchsuchen Sie **23.795+** gesetzliche Dossiers live:",
    ctaLink: "Live-Datenbank auf https://registry.go2abroad.space öffnen",
    parent: "Ökosystem-Hub",
    data: "Datenmatrix",
    powered: "Bereitgestellt von GO2ABROAD Registry",
    poweredBody:
      "Dieses Repository veröffentlicht den Open-Source-**Remote-MCP-Server** für das [GO2ABROAD Registry](https://registry.go2abroad.space) — gesetzliche Intelligenz zu grenzüberschreitender Gesellschaftsgründung, mehrstufiger Besteuerung und Banking-KYC in **über 80** Rechtsordnungen.",
    asset: "Asset",
    url: "URL",
    portal: "Offizielles Datenregister",
    eco: "Ökosystem-Hub",
    gh: "GitHub-Datenmatrix",
    sse: "Produktions-MCP-SSE",
    health: "Health / Discovery",
    cdn: "CDN-Root",
    doiNote:
      "Datensätze sind unter permanenten DOIs auf [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) und [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) archiviert und werden über Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) sowie **R2 CDN** bereitgestellt.",
    connect: "Remote-MCP-Server verbinden (SSE)",
    connectBody:
      "Keine lokale Dataset-Installation nötig. Richten Sie Cursor, Claude Desktop, Cline, Dify, LibreChat oder jeden MCP-fähigen Client auf den Edge-SSE-Endpunkt.",
    sseEp: "SSE-Endpunkt",
    msgEp: "Nachrichten-Endpunkt",
    healthEp: "Health-JSON",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "Legacy-stdio-Bridge über `mcp-proxy` (wenn der Client kein Remote-SSE öffnen kann):",
    stages: "6-stufiger gesetzlicher Lebenszyklus",
    stagesBody:
      "Jedes Dossier folgt dem GO2ABROAD 6-Stage-Compliance-Lebenszyklus. Öffnen Sie jede Stufe im offiziellen Portal für interaktive Abfragen:",
    stageCol: "Stufe",
    focusCol: "Fokus",
    openCol: "Im Register öffnen",
    s1: ["Stage 1 — Gründung", "Rechtsform, staatliche Gründungsgebühren, Gründungstage", "Gründungsdossiers suchen"],
    s2: ["Stage 2 — Steuerstruktur", "Körperschaftsteuersatz, Steuermodell, Abkommenslage", "Steuermatrix browsen"],
    s3: ["Stage 3 — Banking & KYC", "Bankfähigkeitsstufe, Onboarding-Reibung", "Banking-Rails filtern"],
    s4: ["Stage 4 — Lizenzierung", "Gesetzliche / sektorale Lizenzflags", "Lizenzabdeckung prüfen"],
    s5: ["Stage 5 — Wartung", "Jahresgebühren, laufende Meldungen, Red-Line-Warnungen", "Wartungslast prüfen"],
    s6: ["Stage 6 — Exit / Änderung", "Umstrukturierung, Migration, Abwicklungshinweise", "Exit-Pfade vergleichen"],
    heatmap: "Makro-Steuer-/Compliance-Heatmap für 82 Länder (CDN)",
    dossier: "Vollständiges Dossier-Payload (CDN)",
    fallback: "Fallback",
    resources: "MCP-Ressourcen",
    tools: "MCP-Tools",
    uri: "URI",
    desc: "Beschreibung",
    tool: "Tool",
    purpose: "Zweck",
    r1: "Proxyt die 82-Rechtsordnungs-Körperschaftsteuer- & Compliance-Heatmap vom CDN",
    r2: "Liefert Zenodo-, Figshare- und Harvard-Dataverse-DOI-Stubs inkl. Zitationshinweisen",
    t1: "Parametrisierte D1-SQL-Suche über `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "Lädt ein vollständiges 6-Stage-Dossier per `task_id` (+ optional `lang`) lazy vom R2-CDN",
    t3: "Paralleler Jurisdiktionsvergleich von Gründungsgebühren, Steuersätzen und Banking-Tiers für mehrere `task_ids`",
    academic: "Wissenschaftliche Persistenz (DOI)",
    academicBody: "Zitieren Sie das GO2ABROAD-Registry-Korpus über einen der drei permanenten Identifier:",
    archive: "Archiv",
    resolve: "Auflösen",
    arch: "Architektur",
    highlights: "Highlights des Produktions-Workers",
    h1: "Globales `OPTIONS`-Preflight → `204` mit CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + Legacy-SSE (`event: endpoint`) mit Durable-Object-Session-Affinität",
    h3: "`POST /messages?sessionId=` — JSON-RPC-Nachrichtenkanal für Legacy-SSE-Clients",
    h4: "`GET /` — Health-/Discovery-JSON mit Tools, Ressourcen und Registry-Deep-Link",
    local: "Lokale Entwicklung & Deployment",
    files: "Wichtige Dateien",
    license: "Lizenz",
    footerOpen: "Live-Register öffnen",
    footerEco: "Ökosystem-Hub",
    footerMcp: "MCP-SSE verbinden",
  },
  fr: {
    title: "Serveur MCP GO2ABROAD Registry",
    subtitle: "Service Model Context Protocol (MCP) pour l’intelligence statutaire mondiale et la conformité des sociétés",
    cta: "Registre interactif officiel — recherchez **23 795+** dossiers statutaires en direct :",
    ctaLink: "Explorer la base live sur https://registry.go2abroad.space",
    parent: "Hub écosystème",
    data: "Matrice de données",
    powered: "Propulsé par GO2ABROAD Registry",
    poweredBody:
      "Ce dépôt publie le **serveur MCP distant** open source du [GO2ABROAD Registry](https://registry.go2abroad.space) — intelligence statutaire sur la création d’entités transfrontalières, la fiscalité multi-niveaux et les rails KYC bancaires dans **plus de 80** juridictions.",
    asset: "Actif",
    url: "URL",
    portal: "Registre de données officiel",
    eco: "Hub écosystème",
    gh: "Matrice de données GitHub",
    sse: "MCP SSE de production",
    health: "Santé / découverte",
    cdn: "Racine CDN",
    doiNote:
      "Les enregistrements sont archivés sous DOI permanents sur [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) et [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), et servis via Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) et **R2 CDN**.",
    connect: "Connecter le serveur MCP distant (SSE)",
    connectBody:
      "Aucune installation de jeu de données local n’est requise. Pointez Cursor, Claude Desktop, Cline, Dify, LibreChat ou tout client compatible MCP vers le endpoint SSE edge.",
    sseEp: "Endpoint SSE",
    msgEp: "Endpoint messages",
    healthEp: "JSON de santé",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "Pont stdio legacy via `mcp-proxy` (si le client ne peut pas ouvrir le SSE distant) :",
    stages: "Cycle de vie statutaire en 6 étapes",
    stagesBody:
      "Chaque dossier suit le cycle de conformité GO2ABROAD en 6 étapes. Ouvrez chaque étape sur le portail officiel pour une recherche interactive :",
    stageCol: "Étape",
    focusCol: "Focus",
    openCol: "Ouvrir sur le registre",
    s1: ["Stage 1 — Formation", "Type d’entité, frais de dépôt, délais de création", "Rechercher les dossiers de formation"],
    s2: ["Stage 2 — Structure fiscale", "Taux d’IS, modèle fiscal, posture conventionnelle", "Parcourir la matrice fiscale"],
    s3: ["Stage 3 — Banque & KYC", "Niveau de viabilité bancaire, friction d’onboarding", "Filtrer les rails bancaires"],
    s4: ["Stage 4 — Licences", "Indicateurs de licences statutaires / sectorielles", "Inspecter la couverture licence"],
    s5: ["Stage 5 — Maintenance", "Frais annuels, déclarations continues, alertes red-line", "Revoir la charge de maintenance"],
    s6: ["Stage 6 — Sortie / changement", "Restructuration, migration, indices de liquidation", "Comparer les voies de sortie"],
    heatmap: "Heatmap macro fiscale/conformité 82 pays (CDN)",
    dossier: "Charge utile complète du dossier (CDN)",
    fallback: "Repli",
    resources: "Ressources MCP",
    tools: "Outils MCP",
    uri: "URI",
    desc: "Description",
    tool: "Outil",
    purpose: "Objectif",
    r1: "Proxy de la heatmap fiscale & conformité des 82 juridictions depuis le CDN",
    r2: "Renvoie les stubs DOI Zenodo, Figshare et Harvard Dataverse avec guide de citation",
    t1: "Recherche SQL D1 paramétrée sur `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "Charge paresseusement un dossier 6-Stage complet depuis le CDN R2 via `task_id` (+ `lang` optionnel)",
    t3: "Comparaison concurrente des frais de dépôt, taux d’impôt et niveaux bancaires pour plusieurs `task_ids`",
    academic: "Persistance académique (DOI)",
    academicBody: "Citez le corpus GO2ABROAD Registry via l’un des trois identifiants permanents :",
    archive: "Archive",
    resolve: "Résoudre",
    arch: "Architecture",
    highlights: "Points clés du Worker de production",
    h1: "Préflight `OPTIONS` global → `204` avec CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + SSE legacy (`event: endpoint`) avec affinité de session Durable Object",
    h3: "`POST /messages?sessionId=` — canal de messages JSON-RPC pour clients SSE legacy",
    h4: "`GET /` — JSON santé / découverte avec outils, ressources et deep-link registre",
    local: "Développement local et déploiement",
    files: "Fichiers clés",
    license: "Licence",
    footerOpen: "Ouvrir le registre live",
    footerEco: "Hub écosystème",
    footerMcp: "Connecter MCP SSE",
  },
  es: {
    title: "Servidor MCP de GO2ABROAD Registry",
    subtitle: "Servicio Model Context Protocol (MCP) para inteligencia estatutaria global y cumplimiento corporativo",
    cta: "Registro interactivo oficial — busque **23.795+** expedientes estatutarios en vivo:",
    ctaLink: "Explorar la base en https://registry.go2abroad.space",
    parent: "Hub del ecosistema",
    data: "Matriz de datos",
    powered: "Impulsado por GO2ABROAD Registry",
    poweredBody:
      "Este repositorio publica el **servidor MCP remoto** de código abierto del [GO2ABROAD Registry](https://registry.go2abroad.space): inteligencia estatutaria sobre constitución transfronteriza, fiscalidad multinivel y rieles KYC bancarios en **más de 80** jurisdicciones.",
    asset: "Activo",
    url: "URL",
    portal: "Registro oficial de datos",
    eco: "Hub del ecosistema",
    gh: "Matriz de datos en GitHub",
    sse: "MCP SSE de producción",
    health: "Salud / descubrimiento",
    cdn: "Raíz CDN",
    doiNote:
      "Los registros se archivan con DOI permanentes en [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) y [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), y se sirven desde Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) y **R2 CDN**.",
    connect: "Conectar el servidor MCP remoto (SSE)",
    connectBody:
      "No se requiere instalar un dataset local. Apunte Cursor, Claude Desktop, Cline, Dify, LibreChat o cualquier cliente compatible con MCP al endpoint SSE perimetral.",
    sseEp: "Endpoint SSE",
    msgEp: "Endpoint de mensajes",
    healthEp: "JSON de salud",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "Puente stdio legado vía `mcp-proxy` (si el cliente no puede abrir SSE remoto):",
    stages: "Ciclo de vida estatutario de 6 etapas",
    stagesBody:
      "Cada expediente sigue el ciclo de cumplimiento GO2ABROAD de 6 etapas. Abra cualquier etapa en el portal oficial para búsqueda interactiva:",
    stageCol: "Etapa",
    focusCol: "Enfoque",
    openCol: "Abrir en el registro",
    s1: ["Stage 1 — Constitución", "Tipo de entidad, tasas de registro, días de formación", "Buscar expedientes de constitución"],
    s2: ["Stage 2 — Estructura fiscal", "Tipo impositivo societario, modelo fiscal, postura de tratados", "Explorar matriz fiscal"],
    s3: ["Stage 3 — Banca y KYC", "Nivel de viabilidad bancaria, fricción de onboarding", "Filtrar rieles bancarios"],
    s4: ["Stage 4 — Licencias", "Indicadores de licencia estatutaria / sectorial", "Inspeccionar cobertura de licencias"],
    s5: ["Stage 5 — Mantenimiento", "Cuotas anuales, presentaciones continuas, alertas red-line", "Revisar carga de mantenimiento"],
    s6: ["Stage 6 — Salida / cambio", "Reestructuración, migración, indicios de disolución", "Comparar vías de salida"],
    heatmap: "Mapa de calor macro fiscal/cumplimiento de 82 países (CDN)",
    dossier: "Payload completo del expediente (CDN)",
    fallback: "Respaldo",
    resources: "Recursos MCP",
    tools: "Herramientas MCP",
    uri: "URI",
    desc: "Descripción",
    tool: "Herramienta",
    purpose: "Propósito",
    r1: "Hace proxy del mapa de calor fiscal y de cumplimiento de 82 jurisdicciones desde el CDN",
    r2: "Devuelve stubs DOI de Zenodo, Figshare y Harvard Dataverse con guía de citación",
    t1: "Búsqueda SQL D1 parametrizada sobre `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "Carga diferida de un expediente 6-Stage completo desde R2 CDN por `task_id` (+ `lang` opcional)",
    t3: "Comparación concurrente de tasas de constitución, impuestos y niveles bancarios para varios `task_ids`",
    academic: "Persistencia académica (DOI)",
    academicBody: "Cite el corpus de GO2ABROAD Registry mediante cualquiera de los tres identificadores permanentes:",
    archive: "Archivo",
    resolve: "Resolver",
    arch: "Arquitectura",
    highlights: "Puntos clave del Worker de producción",
    h1: "Preflight global `OPTIONS` → `204` con CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + SSE legado (`event: endpoint`) con afinidad de sesión Durable Object",
    h3: "`POST /messages?sessionId=` — canal de mensajes JSON-RPC para clientes SSE legado",
    h4: "`GET /` — JSON de salud / descubrimiento con herramientas, recursos y deep-link al registro",
    local: "Desarrollo local y despliegue",
    files: "Archivos clave",
    license: "Licencia",
    footerOpen: "Abrir el registro en vivo",
    footerEco: "Hub del ecosistema",
    footerMcp: "Conectar MCP SSE",
  },
  it: {
    title: "Server MCP GO2ABROAD Registry",
    subtitle: "Servizio Model Context Protocol (MCP) per intelligence statutaria globale e compliance societaria",
    cta: "Registro interattivo ufficiale — cerca **23.795+** dossier statutari in tempo reale:",
    ctaLink: "Esplora il database live su https://registry.go2abroad.space",
    parent: "Hub ecosistema",
    data: "Matrice dati",
    powered: "Powered by GO2ABROAD Registry",
    poweredBody:
      "Questo repository pubblica il **server MCP remoto** open source del [GO2ABROAD Registry](https://registry.go2abroad.space) — intelligence statutaria su costituzione transfrontaliera, fiscalità multi-livello e binari KYC bancari in **oltre 80** giurisdizioni.",
    asset: "Asset",
    url: "URL",
    portal: "Registro dati ufficiale",
    eco: "Hub ecosistema",
    gh: "Matrice dati GitHub",
    sse: "MCP SSE di produzione",
    health: "Health / discovery",
    cdn: "Root CDN",
    doiNote:
      "I record sono archiviati con DOI permanenti su [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) e [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), e serviti da Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) e **R2 CDN**.",
    connect: "Connetti il server MCP remoto (SSE)",
    connectBody:
      "Non è necessaria l’installazione di un dataset locale. Punta Cursor, Claude Desktop, Cline, Dify, LibreChat o qualsiasi client MCP-compatible all’endpoint SSE edge.",
    sseEp: "Endpoint SSE",
    msgEp: "Endpoint messaggi",
    healthEp: "JSON health",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "Ponte stdio legacy via `mcp-proxy` (se il client non apre SSE remoto):",
    stages: "Ciclo di vita statutario a 6 stadi",
    stagesBody:
      "Ogni dossier segue il ciclo di compliance GO2ABROAD a 6 stadi. Apri ogni stadio sul portale ufficiale per la ricerca interattiva:",
    stageCol: "Stadio",
    focusCol: "Focus",
    openCol: "Apri sul registro",
    s1: ["Stage 1 — Costituzione", "Tipo di entità, fee di deposito, giorni di formazione", "Cerca dossier di costituzione"],
    s2: ["Stage 2 — Struttura fiscale", "Aliquota societaria, modello fiscale, postura trattati", "Sfoglia matrice fiscale"],
    s3: ["Stage 3 — Banking & KYC", "Tier di viabilità bancaria, frizione di onboarding", "Filtra binari bancari"],
    s4: ["Stage 4 — Licensing", "Flag di licenza statutaria / settoriale", "Ispeziona copertura licenze"],
    s5: ["Stage 5 — Manutenzione", "Fee annuali, adempimenti continui, alert red-line", "Rivedi carico di manutenzione"],
    s6: ["Stage 6 — Exit / cambio", "Ristrutturazione, migrazione, indizi di liquidazione", "Confronta percorsi di exit"],
    heatmap: "Heatmap macro fiscale/compliance di 82 paesi (CDN)",
    dossier: "Payload completo del dossier (CDN)",
    fallback: "Fallback",
    resources: "Risorse MCP",
    tools: "Tool MCP",
    uri: "URI",
    desc: "Descrizione",
    tool: "Tool",
    purpose: "Scopo",
    r1: "Esegue proxy della heatmap fiscale e di compliance a 82 giurisdizioni dal CDN",
    r2: "Restituisce stub DOI Zenodo, Figshare e Harvard Dataverse con guida di citazione",
    t1: "Ricerca SQL D1 parametrizzata su `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "Carica lazy un dossier 6-Stage completo da R2 CDN tramite `task_id` (+ `lang` opzionale)",
    t3: "Confronto concorrente di fee di costituzione, aliquote e tier bancari per più `task_ids`",
    academic: "Persistenza accademica (DOI)",
    academicBody: "Cita il corpus GO2ABROAD Registry tramite uno dei tre identificatori permanenti:",
    archive: "Archivio",
    resolve: "Risolvi",
    arch: "Architettura",
    highlights: "Punti salienti del Worker di produzione",
    h1: "Preflight globale `OPTIONS` → `204` con CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + SSE legacy (`event: endpoint`) con affinità di sessione Durable Object",
    h3: "`POST /messages?sessionId=` — canale messaggi JSON-RPC per client SSE legacy",
    h4: "`GET /` — JSON health / discovery con tool, risorse e deep-link al registro",
    local: "Sviluppo locale e deploy",
    files: "File chiave",
    license: "Licenza",
    footerOpen: "Apri il registro live",
    footerEco: "Hub ecosistema",
    footerMcp: "Connetti MCP SSE",
  },
  pt: {
    title: "Servidor MCP GO2ABROAD Registry",
    subtitle: "Serviço Model Context Protocol (MCP) para inteligência estatutária global e conformidade corporativa",
    cta: "Registro interativo oficial — pesquise **23.795+** dossiês estatutários ao vivo:",
    ctaLink: "Explorar a base em https://registry.go2abroad.space",
    parent: "Hub do ecossistema",
    data: "Matriz de dados",
    powered: "Powered by GO2ABROAD Registry",
    poweredBody:
      "Este repositório publica o **servidor MCP remoto** open source do [GO2ABROAD Registry](https://registry.go2abroad.space) — inteligência estatutária sobre constituição transfronteiriça, tributação multinível e trilhos KYC bancários em **mais de 80** jurisdições.",
    asset: "Ativo",
    url: "URL",
    portal: "Registro oficial de dados",
    eco: "Hub do ecossistema",
    gh: "Matriz de dados no GitHub",
    sse: "MCP SSE de produção",
    health: "Saúde / descoberta",
    cdn: "Raiz CDN",
    doiNote:
      "Os registros são arquivados com DOI permanentes em [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) e [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL), e servidos via Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) e **R2 CDN**.",
    connect: "Conectar o servidor MCP remoto (SSE)",
    connectBody:
      "Não é necessário instalar um dataset local. Aponte Cursor, Claude Desktop, Cline, Dify, LibreChat ou qualquer cliente compatível com MCP para o endpoint SSE de borda.",
    sseEp: "Endpoint SSE",
    msgEp: "Endpoint de mensagens",
    healthEp: "JSON de saúde",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "Ponte stdio legada via `mcp-proxy` (se o cliente não abrir SSE remoto):",
    stages: "Ciclo de vida estatutário em 6 estágios",
    stagesBody:
      "Cada dossiê segue o ciclo de conformidade GO2ABROAD em 6 estágios. Abra qualquer estágio no portal oficial para busca interativa:",
    stageCol: "Estágio",
    focusCol: "Foco",
    openCol: "Abrir no registro",
    s1: ["Stage 1 — Constituição", "Tipo de entidade, taxas de registro, dias de formação", "Buscar dossiês de constituição"],
    s2: ["Stage 2 — Estrutura fiscal", "Alíquota societária, modelo fiscal, postura de tratados", "Navegar matriz fiscal"],
    s3: ["Stage 3 — Banking & KYC", "Nível de viabilidade bancária, atrito de onboarding", "Filtrar trilhos bancários"],
    s4: ["Stage 4 — Licenciamento", "Flags de licença estatutária / setorial", "Inspecionar cobertura de licenças"],
    s5: ["Stage 5 — Manutenção", "Taxas anuais, obrigações contínuas, alertas red-line", "Revisar carga de manutenção"],
    s6: ["Stage 6 — Saída / mudança", "Reestruturação, migração, indícios de liquidação", "Comparar caminhos de saída"],
    heatmap: "Heatmap macro fiscal/conformidade de 82 países (CDN)",
    dossier: "Payload completo do dossiê (CDN)",
    fallback: "Fallback",
    resources: "Recursos MCP",
    tools: "Ferramentas MCP",
    uri: "URI",
    desc: "Descrição",
    tool: "Ferramenta",
    purpose: "Propósito",
    r1: "Faz proxy do heatmap fiscal e de conformidade de 82 jurisdições a partir do CDN",
    r2: "Retorna stubs DOI Zenodo, Figshare e Harvard Dataverse com orientação de citação",
    t1: "Busca SQL D1 parametrizada em `dossier_catalog` (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "Carrega preguiçosamente um dossiê 6-Stage completo do R2 CDN por `task_id` (+ `lang` opcional)",
    t3: "Comparação concorrente de taxas de constituição, alíquotas e níveis bancários para vários `task_ids`",
    academic: "Persistência acadêmica (DOI)",
    academicBody: "Cite o corpus do GO2ABROAD Registry por qualquer um dos três identificadores permanentes:",
    archive: "Arquivo",
    resolve: "Resolver",
    arch: "Arquitetura",
    highlights: "Destaques do Worker de produção",
    h1: "Preflight global `OPTIONS` → `204` com CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + SSE legado (`event: endpoint`) com afinidade de sessão Durable Object",
    h3: "`POST /messages?sessionId=` — canal de mensagens JSON-RPC para clientes SSE legado",
    h4: "`GET /` — JSON de saúde / descoberta com ferramentas, recursos e deep-link do registro",
    local: "Desenvolvimento local e deploy",
    files: "Arquivos-chave",
    license: "Licença",
    footerOpen: "Abrir o registro ao vivo",
    footerEco: "Hub do ecossistema",
    footerMcp: "Conectar MCP SSE",
  },
  ko: {
    title: "GO2ABROAD Registry MCP 서버",
    subtitle: "글로벌 법정 인텔리전스 및 기업 컴플라이언스를 위한 Model Context Protocol(MCP) 원격 서비스",
    cta: "공식 인터랙티브 레지스트리 — **23,795+** 법정 도시에를 실시간 검색:",
    ctaLink: "https://registry.go2abroad.space 라이브 DB 열기",
    parent: "생태계 허브",
    data: "데이터 매트릭스",
    powered: "GO2ABROAD Registry 제공",
    poweredBody:
      "이 저장소는 [GO2ABROAD Registry](https://registry.go2abroad.space)의 오픈소스 **원격 MCP 서버**를 공개합니다. **80+** 관할권의 국경 간 법인 설립, 다층 세제, 은행 KYC 레일에 대한 법정 인텔리전스를 제공합니다.",
    asset: "자산",
    url: "URL",
    portal: "공식 데이터 레지스트리",
    eco: "생태계 허브",
    gh: "GitHub 데이터 매트릭스",
    sse: "프로덕션 MCP SSE",
    health: "헬스 / 디스커버리",
    cdn: "CDN 루트",
    doiNote:
      "레코드는 [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899), [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)의 영구 DOI로 아카이브되며 Cloudflare **D1**(`transcend-go2abroad` / `dossier_catalog`)과 **R2 CDN**으로 제공됩니다.",
    connect: "원격 MCP 서버 연결(SSE)",
    connectBody:
      "로컬 데이터셋 설치가 필요하지 않습니다. Cursor, Claude Desktop, Cline, Dify, LibreChat 또는 모든 MCP 호환 클라이언트를 엣지 SSE 엔드포인트로 지정하세요.",
    sseEp: "SSE 엔드포인트",
    msgEp: "메시지 엔드포인트",
    healthEp: "헬스 JSON",
    cursor: "Cursor / Claude Desktop(`mcpServers`)",
    legacy: "클라이언트가 원격 SSE를 직접 열 수 없을 때 `mcp-proxy` stdio 브리지:",
    stages: "6-Stage 법정 라이프사이클",
    stagesBody:
      "모든 도시에는 GO2ABROAD 6단계 컴플라이언스 라이프사이클을 따릅니다. 아래 각 단계에서 공식 포털의 인터랙티브 검색으로 이동할 수 있습니다:",
    stageCol: "단계",
    focusCol: "초점",
    openCol: "레지스트리에서 열기",
    s1: ["Stage 1 — 설립", "법인 유형, 주 설립 수수료, 설립 일수", "설립 도시에 검색"],
    s2: ["Stage 2 — 세제 구조", "법인세율, 세제 모델, 조약 포지션", "세금 매트릭스 탐색"],
    s3: ["Stage 3 — 뱅킹 & KYC", "은행 실행 가능성 티어, 온보딩 마찰", "뱅킹 레일 필터"],
    s4: ["Stage 4 — 라이선스", "법정 / 업종 라이선스 플래그", "라이선스 범위 확인"],
    s5: ["Stage 5 — 유지", "연간 비용, 지속 신고, 레드라인 경고", "유지 부담 검토"],
    s6: ["Stage 6 — 종료 / 변경", "구조조정, 이전, 청산 신호", "종료 경로 비교"],
    heatmap: "82개국 거시 세금/컴플라이언스 히트맵(CDN)",
    dossier: "전체 도시에 페이로드(CDN)",
    fallback: "폴백",
    resources: "MCP 리소스",
    tools: "MCP 도구",
    uri: "URI",
    desc: "설명",
    tool: "도구",
    purpose: "목적",
    r1: "CDN의 82개 관할 법인세·컴플라이언스 히트맵을 프록시",
    r2: "Zenodo / Figshare / Harvard Dataverse DOI 스텁과 인용 가이드 반환",
    t1: "`dossier_catalog`에 대한 매개변수화 D1 SQL 검색(`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "`task_id`(선택 `lang`)로 R2 CDN에서 전체 6-Stage 도시에 지연 로드",
    t3: "여러 `task_ids`의 설립 수수료·세율·은행 티어 동시 비교",
    academic: "학술 영속 식별자(DOI)",
    academicBody: "다음 세 영구 식별자 중 하나로 GO2ABROAD Registry 코퍼스를 인용하세요:",
    archive: "아카이브",
    resolve: "해석",
    arch: "아키텍처",
    highlights: "프로덕션 Worker 하이라이트",
    h1: "전역 `OPTIONS` 프리플라이트 → `204`, CORS 포함(`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + 레거시 SSE(`event: endpoint`), Durable Object 세션 어피니티",
    h3: "`POST /messages?sessionId=` — 레거시 SSE 클라이언트용 JSON-RPC 메시지 채널",
    h4: "`GET /` — 도구·리소스·레지스트리 딥링크가 포함된 헬스/디스커버리 JSON",
    local: "로컬 개발 및 배포",
    files: "핵심 파일",
    license: "라이선스",
    footerOpen: "라이브 레지스트리 열기",
    footerEco: "생태계 허브",
    footerMcp: "MCP SSE 연결",
  },
  ar: {
    title: "خادم MCP لسجل GO2ABROAD",
    subtitle: "خدمة Model Context Protocol (MCP) للذكاء النظامي العالمي وامتثال الشركات",
    cta: "السجل التفاعلي الرسمي — ابحث في **أكثر من 23,795** ملفًا نظاميًا مباشرة:",
    ctaLink: "استكشف قاعدة البيانات الحية على https://registry.go2abroad.space",
    parent: "مركز المنظومة",
    data: "مصفوفة البيانات",
    powered: "مدعوم من GO2ABROAD Registry",
    poweredBody:
      "ينشر هذا المستودع **خادم MCP عن بُعد** مفتوح المصدر لـ [GO2ABROAD Registry](https://registry.go2abroad.space) — ذكاء نظامي حول تأسيس الكيانات عبر الحدود، والضرائب متعددة الطبقات، ومسارات KYC المصرفية في **أكثر من 80** ولاية قضائية.",
    asset: "الأصل",
    url: "الرابط",
    portal: "سجل البيانات الرسمي",
    eco: "مركز المنظومة",
    gh: "مصفوفة بيانات GitHub",
    sse: "MCP SSE للإنتاج",
    health: "الصحة / الاكتشاف",
    cdn: "جذر CDN",
    doiNote:
      "تُأرشف السجلات بمعرّفات DOI دائمة على [Zenodo](https://doi.org/10.5281/zenodo.23493470) و[Figshare](https://doi.org/10.6084/m9.figshare.34711899) و[Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL)، وتُقدَّم عبر Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) و**R2 CDN**.",
    connect: "الاتصال بخادم MCP البعيد (SSE)",
    connectBody:
      "لا حاجة لتثبيت مجموعة بيانات محلية. وجّه Cursor أو Claude Desktop أو Cline أو Dify أو LibreChat أو أي عميل متوافق مع MCP إلى نقطة نهاية SSE الطرفية.",
    sseEp: "نقطة نهاية SSE",
    msgEp: "نقطة نهاية الرسائل",
    healthEp: "JSON الصحة",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "جسر stdio قديم عبر `mcp-proxy` (إذا تعذّر فتح SSE البعيد):",
    stages: "دورة الحياة النظامية ذات المراحل الست",
    stagesBody:
      "يتبع كل ملف دورة امتثال GO2ABROAD ذات المراحل الست. افتح أي مرحلة على البوابة الرسمية للبحث التفاعلي:",
    stageCol: "المرحلة",
    focusCol: "التركيز",
    openCol: "افتح في السجل",
    s1: ["Stage 1 — التأسيس", "نوع الكيان، رسوم الإيداع، أيام التأسيس", "ابحث عن ملفات التأسيس"],
    s2: ["Stage 2 — الهيكل الضريبي", "معدل ضريبة الشركات، النموذج الضريبي، موقف المعاهدات", "تصفّح المصفوفة الضريبية"],
    s3: ["Stage 3 — البنوك و KYC", "مستوى قابلية البنوك، احتكاك الإدماج", "صفِّ مسارات البنوك"],
    s4: ["Stage 4 — التراخيص", "أعلام الترخيص النظامي / القطاعي", "افحص تغطية التراخيص"],
    s5: ["Stage 5 — الصيانة", "الرسوم السنوية، الإيداعات المستمرة، تحذيرات الخط الأحمر", "راجع عبء الصيانة"],
    s6: ["Stage 6 — الخروج / التغيير", "إعادة الهيكلة، الهجرة، إشارات التصفية", "قارن مسارات الخروج"],
    heatmap: "خريطة حرارية ضريبية/امتثالية لـ 82 دولة (CDN)",
    dossier: "حمولة الملف الكاملة (CDN)",
    fallback: "احتياطي",
    resources: "موارد MCP",
    tools: "أدوات MCP",
    uri: "URI",
    desc: "الوصف",
    tool: "الأداة",
    purpose: "الغرض",
    r1: "بروكسي لخريطة الحرارة الضريبية والامتثالية لـ 82 ولاية من CDN",
    r2: "يعيد stubs DOI لـ Zenodo وFigshare وHarvard Dataverse مع إرشادات الاقتباس",
    t1: "بحث SQL معلَم على D1 عبر `dossier_catalog` (`jurisdiction`، `entity_type`، `max_tax_rate`، `banking_viability`، `keyword`، `limit`)",
    t2: "تحميل كسول لملف 6-Stage كامل من R2 CDN عبر `task_id` (+ `lang` اختياري)",
    t3: "مقارنة متزامنة لرسوم التأسيس ومعدلات الضريبة ومستويات البنوك لعدة `task_ids`",
    academic: "الثبات الأكاديمي (DOI)",
    academicBody: "اقتبس مدونة GO2ABROAD Registry عبر أي من المعرّفات الثلاثة الدائمة:",
    archive: "الأرشيف",
    resolve: "حلّ",
    arch: "البنية",
    highlights: "أبرز نقاط Worker الإنتاج",
    h1: "فحص مسبق عام `OPTIONS` → `204` مع CORS (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + SSE قديم (`event: endpoint`) مع ألفة جلسة Durable Object",
    h3: "`POST /messages?sessionId=` — قناة رسائل JSON-RPC لعملاء SSE القدامى",
    h4: "`GET /` — JSON صحة / اكتشاف يتضمن الأدوات والموارد ورابطًا عميقًا للسجل",
    local: "التطوير المحلي والنشر",
    files: "الملفات الرئيسية",
    license: "الترخيص",
    footerOpen: "افتح السجل الحي",
    footerEco: "مركز المنظومة",
    footerMcp: "اتصل بـ MCP SSE",
  },
  hi: {
    title: "GO2ABROAD Registry MCP सर्वर",
    subtitle: "वैश्विक वैधानिक इंटेलिजेंस और कॉर्पोरेट अनुपालन के लिए Model Context Protocol (MCP) रिमोट सेवा",
    cta: "आधिकारिक इंटरैक्टिव रजिस्ट्री — **23,795+** वैधानिक डोजियर लाइव खोजें:",
    ctaLink: "https://registry.go2abroad.space पर लाइव डेटाबेस खोलें",
    parent: "इकोसिस्टम हब",
    data: "डेटा मैट्रिक्स",
    powered: "GO2ABROAD Registry द्वारा संचालित",
    poweredBody:
      "यह रिपॉजिटरी [GO2ABROAD Registry](https://registry.go2abroad.space) का ओपन-सोर्स **रिमोट MCP सर्वर** प्रकाशित करती है — **80+** अधिकारक्षेत्रों में सीमा-पार इकाई गठन, बहु-स्तरीय कराधान और बैंकिंग KYC रेल की वैधानिक इंटेलिजेंस।",
    asset: "एसेट",
    url: "URL",
    portal: "आधिकारिक डेटा रजिस्ट्री",
    eco: "इकोसिस्टम हब",
    gh: "GitHub डेटा मैट्रिक्स",
    sse: "प्रोडक्शन MCP SSE",
    health: "हेल्थ / डिस्कवरी",
    cdn: "CDN रूट",
    doiNote:
      "रिकॉर्ड [Zenodo](https://doi.org/10.5281/zenodo.23493470), [Figshare](https://doi.org/10.6084/m9.figshare.34711899) और [Harvard Dataverse](https://doi.org/10.7910/DVN/XUWOHL) पर स्थायी DOI के साथ संग्रहीत हैं, तथा Cloudflare **D1** (`transcend-go2abroad` / `dossier_catalog`) और **R2 CDN** से परोसे जाते हैं।",
    connect: "रिमोट MCP सर्वर कनेक्ट करें (SSE)",
    connectBody:
      "स्थानीय डेटासेट इंस्टॉल करने की आवश्यकता नहीं। Cursor, Claude Desktop, Cline, Dify, LibreChat या किसी भी MCP-संगत क्लाइंट को एज SSE एंडपॉइंट पर पॉइंट करें।",
    sseEp: "SSE एंडपॉइंट",
    msgEp: "मैसेज एंडपॉइंट",
    healthEp: "हेल्थ JSON",
    cursor: "Cursor / Claude Desktop (`mcpServers`)",
    legacy: "यदि क्लाइंट रिमोट SSE नहीं खोल सकता तो `mcp-proxy` के माध्यम से लेगेसी stdio ब्रिज:",
    stages: "6-Stage वैधानिक जीवनचक्र",
    stagesBody:
      "प्रत्येक डोजियर GO2ABROAD 6-Stage अनुपालन जीवनचक्र का पालन करता है। इंटरैक्टिव खोज के लिए आधिकारिक पोर्टल पर कोई भी स्टेज खोलें:",
    stageCol: "स्टेज",
    focusCol: "फोकस",
    openCol: "रजिस्ट्री पर खोलें",
    s1: ["Stage 1 — गठन", "इकाई प्रकार, राज्य फाइलिंग शुल्क, गठन दिन", "गठन डोजियर खोजें"],
    s2: ["Stage 2 — कर संरचना", "कॉर्पोरेट कर दर, कर मॉडल, संधि मुद्रा", "कर मैट्रिक्स देखें"],
    s3: ["Stage 3 — बैंकिंग और KYC", "बैंकिंग व्यवहार्यता टियर, ऑनबोर्डिंग घर्षण", "बैंकिंग रेल फ़िल्टर करें"],
    s4: ["Stage 4 — लाइसेंसिंग", "वैधानिक / क्षेत्रीय लाइसेंस फ्लैग", "लाइसेंस कवरेज जाँचें"],
    s5: ["Stage 5 — रखरखाव", "वार्षिक शुल्क, निरंतर फाइलिंग, रेड-लाइन चेतावनी", "रखरखाव भार समीक्षा"],
    s6: ["Stage 6 — निकास / परिवर्तन", "पुनर्गठन, माइग्रेशन, परिसमापन संकेत", "निकास पथ तुलना"],
    heatmap: "82 देशों का मैक्रो कर/अनुपालन हीटमैप (CDN)",
    dossier: "पूर्ण डोजियर पेलोड (CDN)",
    fallback: "फ़ॉलबैक",
    resources: "MCP संसाधन",
    tools: "MCP टूल",
    uri: "URI",
    desc: "विवरण",
    tool: "टूल",
    purpose: "उद्देश्य",
    r1: "CDN से 82-अधिकारक्षेत्र कॉर्पोरेट कर और अनुपालन हीटमैप का प्रॉक्सी",
    r2: "Zenodo, Figshare और Harvard Dataverse DOI स्टब तथा उद्धरण मार्गदर्शन लौटाता है",
    t1: "`dossier_catalog` पर पैरामीटरयुक्त D1 SQL खोज (`jurisdiction`, `entity_type`, `max_tax_rate`, `banking_viability`, `keyword`, `limit`)",
    t2: "`task_id` (+ वैकल्पिक `lang`) द्वारा R2 CDN से पूर्ण 6-Stage डोजियर लेज़ी-लोड",
    t3: "कई `task_ids` के लिए फाइलिंग शुल्क, कर दर और बैंकिंग टियर की समवर्ती तुलना",
    academic: "शैक्षणिक स्थायित्व (DOI)",
    academicBody: "तीन स्थायी पहचानकर्ताओं में से किसी के माध्यम से GO2ABROAD Registry कॉर्पस उद्धृत करें:",
    archive: "आर्काइव",
    resolve: "रिज़ॉल्व",
    arch: "आर्किटेक्चर",
    highlights: "प्रोडक्शन Worker मुख्य बिंदु",
    h1: "ग्लोबल `OPTIONS` प्रीफ्लाइट → `204` CORS के साथ (`Access-Control-Allow-Origin: *`)",
    h2: "`GET|POST /sse` — Streamable HTTP + लेगेसी SSE (`event: endpoint`) Durable Object सत्र आत्मीयता के साथ",
    h3: "`POST /messages?sessionId=` — लेगेसी SSE क्लाइंट के लिए JSON-RPC मैसेज चैनल",
    h4: "`GET /` — टूल, संसाधन और रजिस्ट्री डीप-लिंक सहित हेल्थ / डिस्कवरी JSON",
    local: "लोकल विकास और डिप्लॉय",
    files: "मुख्य फ़ाइलें",
    license: "लाइसेंस",
    footerOpen: "लाइव रजिस्ट्री खोलें",
    footerEco: "इकोसिस्टम हब",
    footerMcp: "MCP SSE कनेक्ट करें",
  },
};

function render(code, L) {
  const dirAttr = code === "ar" ? '\n<html dir="rtl">' : "";
  const stages = [L.s1, L.s2, L.s3, L.s4, L.s5, L.s6]
    .map(
      ([name, focus, open]) =>
        `| ${name} | ${focus} | [${open}](https://registry.go2abroad.space) |`,
    )
    .join("\n");

  return `<div align="center">${dirAttr}

# ${L.title}

**${L.subtitle}**

[![Official Portal](https://img.shields.io/badge/Official%20Portal-registry.go2abroad.space-2563eb?style=for-the-badge&logo=google-chrome&logoColor=white)](https://registry.go2abroad.space)
[![Ecosystem Hub](https://img.shields.io/badge/Ecosystem%20Hub-go2abroad.space-0f172a?style=for-the-badge&logo=safari&logoColor=white)](https://go2abroad.space)

[![Zenodo DOI](https://img.shields.io/badge/Zenodo-10.5281%2Fzenodo.23493470-blue.svg)](https://doi.org/10.5281/zenodo.23493470)
[![Figshare DOI](https://img.shields.io/badge/Figshare-10.6084%2Fm9.figshare.34711899-brightgreen.svg)](https://doi.org/10.6084/m9.figshare.34711899)
[![Harvard Dataverse](https://img.shields.io/badge/Dataverse-10.7910%2FDVN%2FXUWOHL-orange.svg)](https://doi.org/10.7910/DVN/XUWOHL)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![MCP Endpoint](https://img.shields.io/badge/MCP%20SSE-mcp--registry.go2abroad.space-22c55e?logo=cloudflare&logoColor=white)](https://mcp-registry.go2abroad.space/sse)

<br/>

> **${L.cta}**  
> **[${L.ctaLink}](https://registry.go2abroad.space)**  
> ${L.parent}: **[https://go2abroad.space](https://go2abroad.space)** · ${L.data}: **[go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data)**

<br/>

${nav(code)}

</div>

---

## ${L.powered}

${L.poweredBody}

| ${L.asset} | ${L.url} |
| --- | --- |
| ${L.portal} | [https://registry.go2abroad.space](https://registry.go2abroad.space) |
| ${L.eco} | [https://go2abroad.space](https://go2abroad.space) |
| ${L.gh} | [go2abroad-registry-data](https://github.com/go2abroad-registry/go2abroad-registry-data) |
| ${L.sse} | [https://mcp-registry.go2abroad.space/sse](https://mcp-registry.go2abroad.space/sse) |
| ${L.health} | [https://mcp-registry.go2abroad.space/](https://mcp-registry.go2abroad.space/) |
| ${L.cdn} | [https://cdn.go2abroad.space](https://cdn.go2abroad.space) |

${L.doiNote}

---

## ${L.connect}

${L.connectBody}

* **${L.sseEp}:** \`https://mcp-registry.go2abroad.space/sse\`
* **${L.msgEp}:** \`https://mcp-registry.go2abroad.space/messages?sessionId=<id>\`
* **${L.healthEp}:** \`https://mcp-registry.go2abroad.space/\`

### ${L.cursor}

\`\`\`json
{
  "mcpServers": {
    "go2abroad-registry": {
      "url": "https://mcp-registry.go2abroad.space/sse"
    }
  }
}
\`\`\`

${L.legacy}

\`\`\`json
{
  "mcpServers": {
    "go2abroad-registry": {
      "command": "npx",
      "args": ["-y", "mcp-proxy", "https://mcp-registry.go2abroad.space/sse"]
    }
  }
}
\`\`\`

---

## ${L.stages}

${L.stagesBody}

| ${L.stageCol} | ${L.focusCol} | ${L.openCol} |
| --- | --- | --- |
${stages}

${L.heatmap}:  
\`https://cdn.go2abroad.space/stat/registry/{lang}/heatmap_82_master.json\`

${L.dossier}:  
\`https://cdn.go2abroad.space/dossiers/{task_id}.json\`  
${L.fallback}: \`https://cdn.go2abroad.space/data/registry/{lang}/{task_id}.jsonl\`

---

## ${L.resources}

| ${L.uri} | ${L.desc} |
| --- | --- |
| \`compliance://tax-heatmap\` | ${L.r1} |
| \`compliance://academic-identifiers\` | ${L.r2} |

## ${L.tools}

| ${L.tool} | ${L.purpose} |
| --- | --- |
| \`search_statutory_dossiers\` | ${L.t1} |
| \`get_dossier_detail\` | ${L.t2} |
| \`compare_jurisdictions\` | ${L.t3} |

---

## ${L.academic}

${L.academicBody}

| ${L.archive} | DOI | ${L.resolve} |
| --- | --- | --- |
| Zenodo | \`10.5281/zenodo.23493470\` | [https://doi.org/10.5281/zenodo.23493470](https://doi.org/10.5281/zenodo.23493470) |
| Figshare | \`10.6084/m9.figshare.34711899\` | [https://doi.org/10.6084/m9.figshare.34711899](https://doi.org/10.6084/m9.figshare.34711899) |
| Harvard Dataverse | \`10.7910/DVN/XUWOHL\` | [https://doi.org/10.7910/DVN/XUWOHL](https://doi.org/10.7910/DVN/XUWOHL) |

### BibTeX

\`\`\`bibtex
@misc{go2abroad_registry_2026,
  title        = {GO2ABROAD Registry: Open Statutory Compliance Corpus for Cross-Border Entity Formation},
  author       = {{GO2ABROAD Registry}},
  year         = {2026},
  howpublished = {Zenodo / Figshare / Harvard Dataverse},
  doi          = {10.5281/zenodo.23493470},
  note         = {Also 10.6084/m9.figshare.34711899 and 10.7910/DVN/XUWOHL. Interactive portal: https://registry.go2abroad.space},
  url          = {https://registry.go2abroad.space}
}
\`\`\`

---

## ${L.arch}

\`\`\`
AI Client (Cursor / Claude / …)
        │  SSE / Streamable HTTP
        ▼
https://mcp-registry.go2abroad.space
        │
        ├─ D1  transcend-go2abroad · dossier_catalog (~23,795 rows)
        └─ R2  https://cdn.go2abroad.space  (heatmaps + 6-Stage dossiers)
\`\`\`

${L.highlights}:

* ${L.h1}
* ${L.h2}
* ${L.h3}
* ${L.h4}

---

## ${L.local}

\`\`\`bash
npm install
npm run typecheck
npm run dev
npm run deploy
\`\`\`

${L.files}:

* \`src/index.ts\` — Cloudflare Worker entry (SSE + Streamable HTTP + health)
* \`src/mcp-server.ts\` — MCP resources & tools
* \`src/catalog.ts\` — parameterized D1 queries
* \`src/cdn.ts\` — R2 CDN dossier / heatmap helpers
* \`wrangler.jsonc\` — Worker name, custom route \`mcp-registry.go2abroad.space/*\`, D1 binding \`DB\`

---

## ${L.license}

MIT © 2026 GO2ABROAD Registry

---

<div align="center">

**[${L.footerOpen}](https://registry.go2abroad.space)** · **[${L.footerEco}](https://go2abroad.space)** · **[${L.footerMcp}](https://mcp-registry.go2abroad.space/sse)**

</div>
`;
}

for (const { code } of langs) {
  const body = render(code, t[code]);
  const path = join(outDir, `README.${code}.md`);
  writeFileSync(path, body, "utf8");
  console.log("wrote", path, body.length);
}
