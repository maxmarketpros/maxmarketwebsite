// Signature plan detail page data — single source of truth.
// Keep pricing/features in sync with `lib/plans-data.ts`.

export const SIGNATURE_ACCENT = "#EC4899" // magenta — matches plan accent in plans-data.ts
export const SIGNATURE_ACCENT_DARK = "#BE185D"
export const SIGNATURE_ACCENT_LIGHT = "#F472B6"
export const SIGNATURE_VIOLET = "#7C3AED"
export const SIGNATURE_GOLD = "#F59E0B"
export const SIGNATURE_BOOK_HREF = "/contact/schedule"

// ---------- Mega numbers strip ----------

export interface SignatureNumber {
  value: string
  unit: string
  label: string
  detail: string
  iconName: string // lucide
  accent: string
}

export const signatureNumbers: SignatureNumber[] = [
  {
    value: "51",
    unit: "pages",
    label: "Authority website",
    detail: "Every service × every city — a page for each, all engineered to rank.",
    iconName: "Globe",
    accent: "#1677FF",
  },
  {
    value: "50",
    unit: "keywords",
    label: "Local SEO targets",
    detail: "Tracked, refreshed quarterly, optimized monthly — across all your cities.",
    iconName: "Search",
    accent: "#7C3AED",
  },
  {
    value: "4",
    unit: "/ month",
    label: "Custom videos",
    detail: "Shot, edited, captioned, and optimized for socials + ads.",
    iconName: "Video",
    accent: "#DC2626",
  },
  {
    value: "6",
    unit: "/ month",
    label: "Custom graphics from your footage",
    detail: "Real brand graphics — your trucks, team, jobs — not stock art.",
    iconName: "Camera",
    accent: "#F59E0B",
  },
  {
    value: "12",
    unit: "/ month",
    label: "Brand & promo graphics",
    detail: "Designed in-house for FB, IG, Google, and your ad campaigns.",
    iconName: "Sparkles",
    accent: "#EC4899",
  },
]

// ---------- Monthly Drop (unique creative section) ----------

export interface MonthlyDropRow {
  slug: string
  iconName: string
  label: string
  count: string
  tileType: "video" | "square" | "mini" | "wide" | "weekly" | "quarterly"
  tileLabel: string
  accent: string
  items: { label: string; sub?: string }[]
}

export const monthlyDropRows: MonthlyDropRow[] = [
  {
    slug: "videos",
    iconName: "Video",
    label: "Custom videos",
    count: "4 / mo",
    tileType: "video",
    tileLabel: "0:30 – 0:60",
    accent: "#DC2626",
    items: [
      { label: "Wk 1", sub: "Service spotlight" },
      { label: "Wk 2", sub: "Team / behind the scenes" },
      { label: "Wk 3", sub: "Customer story" },
      { label: "Wk 4", sub: "Offer / seasonal" },
    ],
  },
  {
    slug: "footage-graphics",
    iconName: "Camera",
    label: "Custom graphics from your footage",
    count: "6 / mo",
    tileType: "square",
    tileLabel: "From your shoot",
    accent: "#F59E0B",
    items: [
      { label: "01" },
      { label: "02" },
      { label: "03" },
      { label: "04" },
      { label: "05" },
      { label: "06" },
    ],
  },
  {
    slug: "brand-graphics",
    iconName: "Sparkles",
    label: "Brand & promo graphics",
    count: "12 / mo",
    tileType: "mini",
    tileLabel: "Designed in-house",
    accent: "#EC4899",
    items: Array.from({ length: 12 }, (_, i) => ({ label: String(i + 1).padStart(2, "0") })),
  },
  {
    slug: "blog",
    iconName: "PenLine",
    label: "SEO blog post",
    count: "1 / mo",
    tileType: "wide",
    tileLabel: "1,500 – 2,000 words",
    accent: "#1677FF",
    items: [{ label: "Indexed + interlinked + ranking-tuned" }],
  },
  {
    slug: "social",
    iconName: "Share2",
    label: "Social posts",
    count: "Weekly · FB · IG · Google",
    tileType: "weekly",
    tileLabel: "Posted, not scheduled-and-forgotten",
    accent: "#7C3AED",
    items: [
      { label: "Wk 1" },
      { label: "Wk 2" },
      { label: "Wk 3" },
      { label: "Wk 4" },
    ],
  },
  {
    slug: "pr",
    iconName: "Newspaper",
    label: "Press release + distribution",
    count: "Quarterly",
    tileType: "quarterly",
    tileLabel: "Distributed through wire + local press",
    accent: "#16A34A",
    items: [{ label: "Q1" }, { label: "Q2" }, { label: "Q3" }, { label: "Q4" }],
  },
]

// ---------- Upgrade from ServicePro ----------

export interface UnlockItem {
  iconName: string
  title: string
  blurb: string
  accent: string
}

export const signatureUnlocks: UnlockItem[] = [
  {
    iconName: "Video",
    title: "4 custom videos / month",
    blurb: "Shot on-site (or with footage you provide), edited, captioned, and ready for socials and ads.",
    accent: "#DC2626",
  },
  {
    iconName: "Camera",
    title: "6 graphics from your footage",
    blurb: "Real brand graphics built from your trucks, your jobs, your team — not stock photos.",
    accent: "#F59E0B",
  },
  {
    iconName: "Megaphone",
    title: "Google Ads management included",
    blurb: "Search + display + LSA strategy and management — included, not à la carte like ServicePro.",
    accent: "#EC4899",
  },
  {
    iconName: "PenLine",
    title: "Monthly SEO blog content",
    blurb: "1 long-form, ranking-tuned blog post every month — indexed and interlinked across the site.",
    accent: "#1677FF",
  },
  {
    iconName: "Link2",
    title: "Custom backlink campaigns",
    blurb: "Authoritative backlinks built each month to drive ranking momentum across your service area.",
    accent: "#0891B2",
  },
  {
    iconName: "Newspaper",
    title: "Quarterly PR / press releases",
    blurb: "A real press release every quarter, distributed through wire and local press contacts.",
    accent: "#16A34A",
  },
  {
    iconName: "MessagesSquare",
    title: "Auto reply to social DMs",
    blurb: "Instagram + Facebook DMs auto-replied and routed straight to your Contact Center.",
    accent: "#7C3AED",
  },
  {
    iconName: "Workflow",
    title: "Custom workflow automation",
    blurb: "We design + build CRM pipelines, lead routing, and follow-up sequences around how you sell.",
    accent: "#6366F1",
  },
]

export interface UpgradeBump {
  label: string
  from: string
  to: string
}

export const signatureBumps: UpgradeBump[] = [
  { label: "Pages on your website", from: "21", to: "51" },
  { label: "Local SEO keywords", from: "25", to: "50" },
  { label: "Google Ads management", from: "À la carte", to: "Included" },
]

// ---------- Audience profiles ----------

export interface SignatureAudience {
  iconId: string
  iconAlt: string
  title: string
  body: string
  accent: string
}

export const signatureAudience: SignatureAudience[] = [
  {
    iconId: "13052",
    iconAlt: "Multi-location operator",
    title: "Multi-location & multi-truck operators",
    body:
      "You run 2+ trucks, 2+ shops, or service multiple metros — and you need a single brand presence that scales across all of them, with consistent content and consistent results.",
    accent: "#EC4899",
  },
  {
    iconId: "59023",
    iconAlt: "Owner stepping out of marketing",
    title: "Owners ready to step out of marketing",
    body:
      "You don’t want to write captions, edit reels, or argue with an ads guy. You want a single team that owns the entire marketing function so you can run the business.",
    accent: "#7C3AED",
  },
  {
    iconId: "13757",
    iconAlt: "Aggressive growth brand",
    title: "Aggressive growth brands chasing $1M+",
    body:
      "Paid ads, organic, social, automation — all coordinated by one team. Signature is the plan when you’ve outgrown “one marketing person” and need a department.",
    accent: "#F59E0B",
  },
]

// ---------- 5 Pillars (26 features) ----------

export interface SignatureFeature {
  slug: string
  iconId: string
  iconAlt: string
  pillLabel: string
  pillColor: string
  title: string
  description: string
  deliverables: string[]
  benefit: string
  flagship?: boolean
}

export interface SignaturePillar {
  slug: string
  number: string
  title: string
  tagline: string
  iconName: string
  accent: string
  features: SignatureFeature[]
}

export const signaturePillars: SignaturePillar[] = [
  {
    slug: "website-authority",
    number: "01",
    title: "Website & Authority SEO",
    tagline: "The biggest, deepest, most authoritative footprint we build.",
    iconName: "Globe",
    accent: "#1677FF",
    features: [
      {
        slug: "website",
        iconId: "114334",
        iconAlt: "51-page authority website",
        pillLabel: "Flagship",
        pillColor: "#1677FF",
        title: "51-page custom SEO website",
        description:
          "An authority site built to dominate. Every service × every city gets its own optimized landing page, plus deep service hubs, location pages, and a blog architecture that compounds over time.",
        deliverables: [
          "51 custom-designed, ranking-tuned pages",
          "Service × city landing matrix",
          "Service hubs + location pages",
          "Blog-ready CMS + interlinking strategy",
          "Core Web Vitals + Lighthouse 90+",
          "Lead capture on every key page",
        ],
        benefit:
          "When every page targets a real intent — “{service} in {city}” — you stop competing for one keyword and start owning a whole map of them.",
        flagship: true,
      },
      {
        slug: "keywords",
        iconId: "QNjsAGAlpuNW",
        iconAlt: "50 local SEO keywords",
        pillLabel: "Local SEO",
        pillColor: "#7C3AED",
        title: "50 local SEO keywords",
        description:
          "Twice the keyword footprint of ServicePro. We track and optimize 50 high-intent, locally-modified keywords across every service and city you serve.",
        deliverables: [
          "50 keywords across services + cities",
          "Monthly rank tracking + reporting",
          "Quarterly keyword refresh based on data",
        ],
        benefit: "More phrases tracked = more booked jobs from search. Simple math.",
      },
      {
        slug: "gbp",
        iconId: "DcygmpZqBEd9",
        iconAlt: "Google Business Profile optimization",
        pillLabel: "Google",
        pillColor: "#F59E0B",
        title: "Google Business Profile optimization",
        description:
          "A fully optimized GBP — categories, services, photos, weekly posts, Q&A, and review-ready setup. The single highest-converting placement in Google.",
        deliverables: [
          "Categories + services tuned for Map Pack",
          "Weekly GBP posts",
          "Q&A and review-ready setup",
        ],
        benefit: "Get into the local 3-pack — the highest-converting spot on Google search.",
      },
      {
        slug: "directories",
        iconId: "13052",
        iconAlt: "Directory citations network",
        pillLabel: "Directories",
        pillColor: "#0891B2",
        title: "70+ directories & maps listings",
        description:
          "Consistent NAP across every directory Google uses to verify your business is real, local, and trustworthy.",
        deliverables: [
          "70+ trusted citations submitted",
          "NAP consistency across the web",
          "Maps, GPS, and voice-search coverage",
        ],
        benefit: "More trust signals → more local rankings → more booked jobs.",
      },
      {
        slug: "backlinks",
        iconId: "13414",
        iconAlt: "Custom backlinks",
        pillLabel: "Authority",
        pillColor: "#16A34A",
        title: "Custom backlink campaigns",
        description:
          "Authoritative backlinks built every month — earned through outreach, partnerships, and on-brand placements. The single biggest off-page ranking lever.",
        deliverables: [
          "Monthly backlink outreach",
          "Real, contextual placements",
          "Anchor-text strategy aligned to keyword targets",
        ],
        benefit: "Backlinks are why your competitor outranks you — until they don’t.",
      },
      {
        slug: "press",
        iconId: "12922",
        iconAlt: "Quarterly press release",
        pillLabel: "PR",
        pillColor: "#DC2626",
        title: "Quarterly PR & press release",
        description:
          "Every quarter we write and distribute a real press release — wire syndication plus local press relationships. Builds authority backlinks and brand visibility.",
        deliverables: [
          "1 press release / quarter",
          "Wire distribution + local press push",
          "“As seen in” logos for your site",
        ],
        benefit: "Authority you can point to — on your homepage, in your ads, and on Google.",
      },
      {
        slug: "blog",
        iconId: "DcygmpZqBEd9",
        iconAlt: "SEO blog content",
        pillLabel: "Content",
        pillColor: "#EC4899",
        title: "Monthly SEO blog content",
        description:
          "One long-form, ranking-tuned blog post every month — written for humans, structured for search, and interlinked across your service pages.",
        deliverables: [
          "1,500–2,000 word post / month",
          "Targeted to your keyword roadmap",
          "Interlinked + image-optimized + indexed",
        ],
        benefit: "Compounding traffic. Each post keeps pulling leads for years after publish.",
      },
    ],
  },
  {
    slug: "media-production",
    number: "02",
    title: "Media & Content Production",
    tagline: "Real video, real photography, real graphics — produced in-house, every month.",
    iconName: "Video",
    accent: "#DC2626",
    features: [
      {
        slug: "videos",
        iconId: "13834",
        iconAlt: "Custom videos every month",
        pillLabel: "Flagship",
        pillColor: "#DC2626",
        title: "4 custom videos / month",
        description:
          "A monthly content shoot — or footage you send us — turned into 4 polished short-form videos. Hook-driven, captioned, and built for socials, ads, and your site.",
        deliverables: [
          "4 short-form videos / month",
          "Captioned + branded + hook-tuned",
          "Multi-format (9:16 + 1:1) export",
          "Used across socials, ads, and YouTube",
        ],
        benefit:
          "Video is the single most-watched format on every platform. Signature is the only plan that produces it for you, every month.",
        flagship: true,
      },
      {
        slug: "footage-graphics",
        iconId: "13414",
        iconAlt: "Graphics from your own footage",
        pillLabel: "From your shoot",
        pillColor: "#F59E0B",
        title: "6 custom graphics from your footage",
        description:
          "Real brand graphics designed from your trucks, your team, your job sites — not stock photos. Built during the same monthly shoot as the videos.",
        deliverables: [
          "6 photo-based graphics / month",
          "From your own brand footage",
          "Sized for FB, IG, Google, and ads",
        ],
        benefit: "Customers can tell the difference between you and a stock photo. So can the algorithm.",
      },
      {
        slug: "brand-graphics",
        iconId: "13414",
        iconAlt: "Brand and promo graphics",
        pillLabel: "Design",
        pillColor: "#EC4899",
        title: "12 brand & promo graphics / month",
        description:
          "Custom social, promo, seasonal, and brand-moment graphics. Designed by an in-house designer in your brand voice — no stock-art shortcuts.",
        deliverables: [
          "12 custom graphics / month",
          "All platforms (FB, IG, Google, Ads)",
          "Editable source files on request",
        ],
        benefit: "A consistent, professional brand presence — without an in-house designer on payroll.",
      },
    ],
  },
  {
    slug: "channels-ads",
    number: "03",
    title: "Social, Ads & Channels",
    tagline: "Every place a customer can find you — staffed, posted, and optimized.",
    iconName: "Megaphone",
    accent: "#EC4899",
    features: [
      {
        slug: "google-ads",
        iconId: "C82qgeDiwIxE",
        iconAlt: "Google Ads management included",
        pillLabel: "Flagship",
        pillColor: "#EC4899",
        title: "Google Ads management — included",
        description:
          "Search, display, and Local Services Ads strategy, build, and ongoing optimization — included in Signature, not à la carte. Ad spend is separate (yours), but management is on us.",
        deliverables: [
          "Full campaign strategy + build",
          "Ongoing bid + creative optimization",
          "LSA setup where eligible",
          "Conversion tracking + monthly reporting",
        ],
        benefit:
          "Paid ads + organic working together — Signature is the only plan where one team runs both, so they actually reinforce each other.",
        flagship: true,
      },
      {
        slug: "social-management",
        iconId: "C82qgeDiwIxE",
        iconAlt: "Full social media management",
        pillLabel: "Social",
        pillColor: "#1677FF",
        title: "Full social media management",
        description:
          "Weekly posts on Facebook, Instagram, and Google in your brand voice — covering services, seasonal moments, behind-the-scenes, customer wins, and offers.",
        deliverables: [
          "Weekly posts on FB + IG + Google",
          "Branded copy in your voice",
          "Holiday + seasonal content",
          "Monthly content calendar shared",
        ],
        benefit: "Customers see you posting → they trust you → they pick you over the quiet competitor.",
      },
      {
        slug: "dm-replies",
        iconId: "13820",
        iconAlt: "Auto reply to DMs",
        pillLabel: "Automation",
        pillColor: "#7C3AED",
        title: "Auto reply to social DMs",
        description:
          "Instagram + Facebook DMs auto-replied with an on-brand greeting and routed straight into your Contact Center so the lead never sits unread.",
        deliverables: [
          "FB + IG DM auto-responder",
          "Lead routed to Contact Center",
          "Customizable message + business hours",
        ],
        benefit: "Stop losing inbound DMs to the inbox black hole.",
      },
      {
        slug: "sms-campaigns",
        iconId: "108780",
        iconAlt: "Custom SMS campaigns",
        pillLabel: "Channels",
        pillColor: "#16A34A",
        title: "Custom SMS campaigns",
        description:
          "Promotional, seasonal, and reactivation SMS campaigns sent to your customer list — built and scheduled by us each month.",
        deliverables: [
          "Monthly campaign build + send",
          "Segmented lists (new / past / lapsed)",
          "Tracked replies in Contact Center",
        ],
        benefit: "SMS gets 98% open rates. Email gets 21%. Use the right channel.",
      },
      {
        slug: "email-marketing",
        iconId: "12379",
        iconAlt: "Email and SMS marketing",
        pillLabel: "Channels",
        pillColor: "#0891B2",
        title: "Email & SMS marketing",
        description:
          "Monthly newsletter + transactional + reactivation email flows. Set up alongside SMS for full-funnel customer messaging.",
        deliverables: [
          "Monthly newsletter design + send",
          "Reactivation + nurture flows",
          "List hygiene + deliverability",
        ],
        benefit: "Your customer list is your second-cheapest acquisition channel — Signature actually uses it.",
      },
    ],
  },
  {
    slug: "reviews-crm",
    number: "04",
    title: "Reviews & CRM Automation",
    tagline: "Every lead captured, every review earned, every follow-up handled.",
    iconName: "MessageCircle",
    accent: "#7C3AED",
    features: [
      {
        slug: "review-gen",
        iconId: "19417",
        iconAlt: "Review generation",
        pillLabel: "Flagship",
        pillColor: "#22C55E",
        title: "Review generation engine",
        description:
          "Every closed job triggers a perfectly-timed SMS + email asking for a 5-star Google review — automatically. Highest-ROI feature in the platform.",
        deliverables: [
          "Auto-trigger after job completion",
          "Personalized SMS + email asks",
          "Direct link to your Google review",
          "Review request analytics in dashboard",
        ],
        benefit:
          "Signature clients see 5× more Google reviews on average — and reviews are the #1 ranking + conversion factor for local services.",
        flagship: true,
      },
      {
        slug: "ai-replies",
        iconId: "13834",
        iconAlt: "AI review replies",
        pillLabel: "AI",
        pillColor: "#F59E0B",
        title: "AI review replies",
        description:
          "Every Google review gets a thoughtful, on-brand reply within minutes. AI drafts, you (optionally) approve, customer sees a responsive business.",
        deliverables: [
          "Auto-drafted replies for every review",
          "Optional approval workflow",
          "Tone-matched to your brand voice",
        ],
        benefit: "Google rewards businesses that reply to reviews. So do future customers reading them.",
      },
      {
        slug: "chatbot",
        iconId: "L3uh0mNuxBXw",
        iconAlt: "24/7 AI chatbot",
        pillLabel: "AI",
        pillColor: "#7C3AED",
        title: "24/7 AI chatbot",
        description:
          "An AI agent trained on your services and FAQs — answers questions, qualifies leads, and books service calls even at 2am.",
        deliverables: [
          "Trained on your services + FAQs",
          "Qualifies + captures lead info",
          "Books service calls live",
          "Routes to Contact Center 24/7",
        ],
        benefit: "Stop losing after-hours visitors to whichever competitor responds first.",
      },
      {
        slug: "missed-call",
        iconId: "12922",
        iconAlt: "Auto missed-call text back",
        pillLabel: "Automation",
        pillColor: "#DC2626",
        title: "Auto missed-call text back",
        description:
          "Miss a call? An SMS goes out instantly: “Hey, sorry we missed you — what can we help with?” Most leads reply within minutes.",
        deliverables: [
          "Instant SMS on every missed call",
          "Customizable message + business hours",
          "Reply lands in your Contact Center",
        ],
        benefit:
          "The #1 reason local businesses lose leads is a missed phone call. Signature catches them.",
      },
      {
        slug: "chat-widget",
        iconId: "108780",
        iconAlt: "Website chat widget",
        pillLabel: "Live Chat",
        pillColor: "#EC4899",
        title: "Website chat widget",
        description:
          "The chat widget on your site — connected to your AI chatbot and Contact Center — captures the 30%+ of visitors who’d rather text than fill a form.",
        deliverables: [
          "Custom-branded chat widget",
          "AI + human handoff",
          "Lead capture with name + need + phone",
        ],
        benefit: "Convert the visitors who never call and never fill a form.",
      },
      {
        slug: "contact-center",
        iconId: "13820",
        iconAlt: "Unified Contact Center",
        pillLabel: "Inbox",
        pillColor: "#0891B2",
        title: "Contact Center",
        description:
          "One unified inbox for every lead — web forms, chat widget, SMS, email, missed-call replies, DM replies. Reply from any device, never lose a thread.",
        deliverables: [
          "Unified inbox: forms + chat + SMS + email + DM",
          "Lead-source tagging on every message",
          "Mobile app for on-the-go replies",
        ],
        benefit: "One feed, one team, every lead — no more juggling 5 inboxes and your phone.",
      },
      {
        slug: "workflows",
        iconId: "59023",
        iconAlt: "Workflow automation",
        pillLabel: "Automation",
        pillColor: "#6366F1",
        title: "Workflow setup & automation",
        description:
          "We design and build custom CRM pipelines, lead routing rules, and follow-up sequences around how your team actually sells.",
        deliverables: [
          "Custom CRM pipelines",
          "Lead routing + assignment rules",
          "Automated follow-up sequences",
          "Trigger-based reminders + tasks",
        ],
        benefit: "Your team stops dropping leads because the system never forgets to follow up.",
      },
    ],
  },
  {
    slug: "analytics-payments",
    number: "05",
    title: "Analytics & Payments",
    tagline: "Know exactly what’s working — and get paid the day the job ends.",
    iconName: "BarChart3",
    accent: "#16A34A",
    features: [
      {
        slug: "payments",
        iconId: "13224",
        iconAlt: "Payments and invoicing",
        pillLabel: "Flagship",
        pillColor: "#16A34A",
        title: "Payments & invoicing",
        description:
          "Take card payments on your site, in your CRM, and over text. Send invoices and deposit requests, accept ACH, save card-on-file for repeats.",
        deliverables: [
          "Card + ACH payments accepted",
          "Invoice + deposit links via SMS / email",
          "Card-on-file for repeat customers",
          "Sync with your accounting workflow",
        ],
        benefit: "Get paid faster, look more professional, and never chase another check.",
        flagship: true,
      },
      {
        slug: "dashboard",
        iconId: "XnHBz2LnhELw",
        iconAlt: "Real-time business dashboard",
        pillLabel: "Dashboard",
        pillColor: "#1677FF",
        title: "Real-time dashboard",
        description:
          "Your own login showing every lead, call, form, chat, review, and search-rank movement — in real time, on any device.",
        deliverables: [
          "Leads + calls + chats + reviews",
          "Source attribution per channel",
          "Mobile-friendly login",
        ],
        benefit: "See exactly what’s working — without waiting for a monthly report.",
      },
      {
        slug: "analytics",
        iconId: "fcKpGwAbxxfP",
        iconAlt: "Google Analytics setup",
        pillLabel: "Analytics",
        pillColor: "#F59E0B",
        title: "Google Analytics",
        description:
          "Full GA4 setup plus conversion tracking — so you know which keywords, channels, and pages are driving booked jobs.",
        deliverables: [
          "GA4 setup + goal tracking",
          "Conversion + lead attribution",
          "Cross-channel reporting",
        ],
        benefit: "Spend more on what works, less on what doesn’t.",
      },
      {
        slug: "call-recording",
        iconId: "12379",
        iconAlt: "Call recording",
        pillLabel: "Calls",
        pillColor: "#DC2626",
        title: "Call recording",
        description:
          "Every call to your tracked numbers is recorded — for QA, training, and lead attribution.",
        deliverables: [
          "Every inbound call recorded",
          "Searchable archive",
          "Lead-source tagging on each call",
        ],
        benefit: "Coach your team with real calls and recover misquoted leads before they go elsewhere.",
      },
    ],
  },
]

// ---------- Process / 10-week rollout ----------

export interface SignatureProcessStep {
  week: string
  iconName: string
  title: string
  body: string
  accent: string
}

export const signatureProcess: SignatureProcessStep[] = [
  {
    week: "Weeks 1–2",
    iconName: "ClipboardList",
    title: "Discovery & on-site shoot",
    body: "Deep audit, brand voice capture, target city + service mapping, GBP audit, competitor scan — plus our first on-site content shoot (or we ingest footage you send).",
    accent: "#EC4899",
  },
  {
    week: "Weeks 3–4",
    iconName: "Globe",
    title: "Authority site + GBP + directories",
    body: "51-page custom site designed and written, GBP fully optimized, 70+ citations submitted, Analytics + Tag Manager wired up, backlink outreach begins.",
    accent: "#1677FF",
  },
  {
    week: "Weeks 5–6",
    iconName: "Video",
    title: "Media production goes live",
    body: "First batch of 4 videos shot/edited, 6 custom photo graphics built from your footage, 12 brand graphics designed, content calendar published.",
    accent: "#DC2626",
  },
  {
    week: "Weeks 7–8",
    iconName: "Workflow",
    title: "Ads + CRM + automation",
    body: "Google Ads campaigns launched, AI chatbot trained, missed-call text back live, review engine activated, payments wired, DM auto-replies on, workflows built.",
    accent: "#7C3AED",
  },
  {
    week: "Weeks 9–10",
    iconName: "BarChart3",
    title: "Launch + first reporting cycle",
    body: "Site goes live, social publishing kicks off, blog #1 published, first PR release goes out, dashboard login delivered, first monthly report scheduled.",
    accent: "#16A34A",
  },
]

// ---------- Concierge / Your team ----------

export interface SignatureTeamMember {
  iconId: string
  iconAlt: string
  role: string
  owns: string
  accent: string
}

export const signatureTeam: SignatureTeamMember[] = [
  {
    iconId: "4gURKWl6bT1u",
    iconAlt: "Strategy lead",
    role: "Strategy lead",
    owns: "Your single point of contact — owns the roadmap, the monthly review, and the relationship.",
    accent: "#EC4899",
  },
  {
    iconId: "13414",
    iconAlt: "In-house designer",
    role: "In-house designer",
    owns: "Designs your 12 monthly graphics, ad creative, brand updates, and on-brand assets.",
    accent: "#F59E0B",
  },
  {
    iconId: "13834",
    iconAlt: "Video producer and editor",
    role: "Video producer + editor",
    owns: "Runs the monthly shoot, edits your 4 videos and 6 footage graphics, captions and exports for every platform.",
    accent: "#DC2626",
  },
  {
    iconId: "59023",
    iconAlt: "Ads and automation specialist",
    role: "Ads + automation specialist",
    owns: "Builds and optimizes Google Ads, designs your CRM workflows, and tunes the lead-routing logic.",
    accent: "#7C3AED",
  },
]

// ---------- vs Tiers ----------

export interface SignatureTierCard {
  name: string
  price: string
  cents: string
  unlock: string
  href: string
  accent: string
  current?: boolean
}

export const signatureTierStrip: SignatureTierCard[] = [
  {
    name: "LocalMark",
    price: "$499",
    cents: "/mo",
    unlock:
      "What you’d give up: every Signature feature plus the entire ServicePro stack — social publishing, review generation, AI chatbot, missed-call text back, payments, Analytics. LocalMark is rankings-and-listings only.",
    href: "/plans/localmark",
    accent: "#22C55E",
  },
  {
    name: "ServicePro",
    price: "$899",
    cents: "/mo",
    unlock:
      "What you’d give up: 4 videos/mo, 6 custom graphics, Google Ads management, blog content, backlinks, PR, custom SMS, workflows, DM auto-replies, 30 more pages, 25 more keywords.",
    href: "/plans/servicepro",
    accent: "#F59E0B",
  },
  {
    name: "Signature",
    price: "$1,499",
    cents: "/mo",
    unlock:
      "The full marketing department in one plan — site, SEO, content production, ads, reviews, CRM, automation, analytics. Built for operators ready to step out of marketing entirely.",
    href: SIGNATURE_BOOK_HREF,
    accent: SIGNATURE_ACCENT,
    current: true,
  },
]
