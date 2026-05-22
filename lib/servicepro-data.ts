// ServicePro plan detail page data — single source of truth.
// Keep pricing/features in sync with `lib/plans-data.ts`.

export const SERVICEPRO_ACCENT = "#F59E0B" // amber — matches plan accent in plans-data.ts
export const SERVICEPRO_ACCENT_DARK = "#D97706"
export const SERVICEPRO_BOOK_HREF = "/contact/schedule"

// ---------- Output Numbers ("by the numbers") ----------

export interface ServiceProNumber {
  value: string
  unit: string
  label: string
  detail: string
  iconName: string // lucide
  accent: string
}

export const serviceproNumbers: ServiceProNumber[] = [
  {
    value: "21",
    unit: "pages",
    label: "Custom SEO site",
    detail: "Service × city landing pages built to rank across your whole area.",
    iconName: "Globe",
    accent: "#1677FF",
  },
  {
    value: "25",
    unit: "keywords",
    label: "Local SEO targets",
    detail: "Tracked, optimized monthly, refreshed quarterly with real data.",
    iconName: "Search",
    accent: "#7C3AED",
  },
  {
    value: "70+",
    unit: "directories",
    label: "Maps + citations",
    detail: "NAP-consistent listings on every directory Google checks.",
    iconName: "MapPin",
    accent: "#0891B2",
  },
  {
    value: "12",
    unit: "/ month",
    label: "Brand graphics",
    detail: "Designed in-house for FB, IG, Google — promos, seasonal, brand.",
    iconName: "ImageIcon",
    accent: "#EC4899",
  },
  {
    value: "6",
    unit: "always-on",
    label: "Conversion automations",
    detail: "AI chatbot, review gen, AI replies, missed-call text back, chat, Contact Center.",
    iconName: "Bot",
    accent: "#F59E0B",
  },
]

// ---------- Monthly Cadence (production board) ----------

export interface CadenceRow {
  slug: string
  iconName: string
  label: string
  count: string
  tileType: "mini" | "weekly" | "review" | "automation" | "wide"
  tileLabel: string
  accent: string
  items: { label: string; sub?: string }[]
}

export const serviceproCadenceRows: CadenceRow[] = [
  {
    slug: "graphics",
    iconName: "ImageIcon",
    label: "Brand & promo graphics",
    count: "12 / mo",
    tileType: "mini",
    tileLabel: "Designed in-house",
    accent: "#EC4899",
    items: Array.from({ length: 12 }, (_, i) => ({ label: String(i + 1).padStart(2, "0") })),
  },
  {
    slug: "social",
    iconName: "Share2",
    label: "Social posts",
    count: "Weekly · FB · IG · Google",
    tileType: "weekly",
    tileLabel: "Posted in your brand voice",
    accent: "#1677FF",
    items: [
      { label: "Wk 1", sub: "Services + seasonal" },
      { label: "Wk 2", sub: "Behind the scenes" },
      { label: "Wk 3", sub: "Customer wins" },
      { label: "Wk 4", sub: "Offer / promo" },
    ],
  },
  {
    slug: "reviews",
    iconName: "Star",
    label: "Review asks",
    count: "Every closed job",
    tileType: "review",
    tileLabel: "SMS + email, auto-fired the moment the job closes",
    accent: "#22C55E",
    items: [
      { label: "SMS", sub: "Personalized ask" },
      { label: "Email", sub: "Follow-up branded" },
      { label: "AI", sub: "Reply within minutes" },
    ],
  },
  {
    slug: "automation",
    iconName: "Bot",
    label: "Always-on automations",
    count: "24 / 7",
    tileType: "automation",
    tileLabel: "Running while you sleep",
    accent: "#7C3AED",
    items: [
      { label: "AI chatbot", sub: "Books jobs at 2am" },
      { label: "Missed-call SMS", sub: "Fires in seconds" },
      { label: "Chat widget", sub: "Captures text-only leads" },
      { label: "Contact Center", sub: "Every channel, one inbox" },
    ],
  },
  {
    slug: "report",
    iconName: "BarChart3",
    label: "Monthly report",
    count: "1 / mo",
    tileType: "wide",
    tileLabel: "Dashboard updated daily, summary email monthly",
    accent: "#16A34A",
    items: [{ label: "Leads + calls + chats + reviews + rank deltas, attributed by channel" }],
  },
]

// ---------- Upgrade diff — "what you unlock vs LocalMark" ----------

export interface UnlockItem {
  iconName: string
  title: string
  blurb: string
  accent: string
}

export const serviceproUnlocks: UnlockItem[] = [
  {
    iconName: "Share2",
    title: "Social media publishing",
    blurb: "Posts go out on Facebook, Instagram, and Google every week, in your brand voice.",
    accent: "#EC4899",
  },
  {
    iconName: "Image",
    title: "12 graphics every month",
    blurb: "Custom social, promo, and seasonal graphics designed by an in-house designer.",
    accent: "#1677FF",
  },
  {
    iconName: "Star",
    title: "Review generation",
    blurb: "Every closed job auto-asks for a 5-star review via SMS + email at the right moment.",
    accent: "#22C55E",
  },
  {
    iconName: "Sparkles",
    title: "AI review replies",
    blurb: "Every review gets a thoughtful, on-brand reply within minutes — no hands.",
    accent: "#F59E0B",
  },
  {
    iconName: "Bot",
    title: "24/7 AI chatbot",
    blurb: "An AI agent on your site answers questions, qualifies leads, and books jobs while you sleep.",
    accent: "#7C3AED",
  },
  {
    iconName: "PhoneMissed",
    title: "Auto missed-call text back",
    blurb: "Any missed call instantly gets a friendly SMS so the lead doesn’t call your competitor.",
    accent: "#DC2626",
  },
  {
    iconName: "CreditCard",
    title: "Payments & invoicing",
    blurb: "Take cards on your site, in your CRM, and over text — invoices and deposits handled.",
    accent: "#16A34A",
  },
  {
    iconName: "LineChart",
    title: "Google Analytics + call recording",
    blurb: "Full GA setup plus every call recorded for QA, training, and lead attribution.",
    accent: "#0891B2",
  },
]

// "Bumped up" stats vs LocalMark
export interface UpgradeBump {
  label: string
  from: string
  to: string
}

export const serviceproBumps: UpgradeBump[] = [
  { label: "Pages on your website",    from: "11",  to: "21" },
  { label: "Local SEO keywords",       from: "15",  to: "25" },
  { label: "Directories / maps",       from: "40+", to: "70+" },
]

// ---------- Audience profiles ----------

export interface ServiceProAudience {
  iconId: string
  iconAlt: string
  title: string
  body: string
  accent: string
}

export const serviceproAudience: ServiceProAudience[] = [
  {
    iconId: "4gURKWl6bT1u",
    iconAlt: "Scaling local business",
    title: "You’ve outgrown the basics",
    body:
      "Your website ranks, your phone rings — but you’re leaving money on the table because reviews are sporadic, leads slip when you miss calls, and there’s no time for social.",
    accent: "#F59E0B",
  },
  {
    iconId: "59023",
    iconAlt: "Automation bot",
    title: "You want automation, not more headcount",
    body:
      "You don’t want to hire someone just to send review requests, reply to DMs, and chase missed calls. ServicePro automates all of it so you can focus on closing.",
    accent: "#7C3AED",
  },
  {
    iconId: "13757",
    iconAlt: "Marketing megaphone",
    title: "You need social presence without the agency markup",
    body:
      "Posts going up consistently, branded graphics every month, AI replying to reviews — all the social marketing that builds trust, without the $2k/mo agency.",
    accent: "#EC4899",
  },
]

// ---------- 4 Pillars (16 features grouped) ----------

export interface ServiceProFeature {
  slug: string
  iconId: string
  iconAlt: string
  pillLabel: string
  pillColor: string
  title: string
  description: string
  deliverables: string[]
  benefit: string
  flagship?: boolean // for the top card in each pillar
}

export interface ServiceProPillar {
  slug: string
  number: string
  title: string
  tagline: string
  iconName: string // big lucide for pillar header
  accent: string
  features: ServiceProFeature[]
}

export const serviceproPillars: ServiceProPillar[] = [
  {
    slug: "website-seo",
    number: "01",
    title: "Website & SEO",
    tagline: "The foundation — bigger, deeper, more authoritative than LocalMark.",
    iconName: "Globe",
    accent: "#1677FF",
    features: [
      {
        slug: "website",
        iconId: "114334",
        iconAlt: "21-page custom website",
        pillLabel: "Flagship",
        pillColor: "#1677FF",
        title: "21-page custom SEO website",
        description:
          "A bigger custom site than LocalMark — built for service-area domination across multiple cities and services. Every page is hand-designed to rank and convert.",
        deliverables: [
          "21 custom-designed pages",
          "City + service combo landing pages",
          "Core Web Vitals tuned for speed",
          "Lead capture on every key page",
        ],
        benefit:
          "Rank for every {service} in {city} combination across your service area — not just the top 5.",
        flagship: true,
      },
      {
        slug: "keywords",
        iconId: "QNjsAGAlpuNW",
        iconAlt: "Local SEO keyword targeting",
        pillLabel: "Local SEO",
        pillColor: "#22C55E",
        title: "25 local SEO keywords",
        description:
          "25 high-intent local keywords tracked, optimized, and reported — covering more services and cities than LocalMark’s 15.",
        deliverables: [
          "25 keywords across services + cities",
          "Monthly rank tracking",
          "Quarterly keyword refresh",
        ],
        benefit: "More phrases tracked = more booked jobs from search.",
      },
      {
        slug: "gbp",
        iconId: "DcygmpZqBEd9",
        iconAlt: "Google Business Profile",
        pillLabel: "Google",
        pillColor: "#F59E0B",
        title: "Google Business Profile optimization",
        description:
          "Full GBP build-out or rebuild — categories, services, photos, posts, Q&A, and review-ready setup so you rank in the Map Pack.",
        deliverables: [
          "Categories + services tuned for Map Pack",
          "Weekly GBP posts",
          "Q&A and review-ready setup",
        ],
        benefit: "Get into the local 3-pack — the highest-converting spot on Google.",
      },
      {
        slug: "directories",
        iconId: "13052",
        iconAlt: "Directory citations network",
        pillLabel: "Directories",
        pillColor: "#0891B2",
        title: "70+ directories & maps listings",
        description:
          "Almost double LocalMark’s 40+. Consistent NAP across every directory Google uses to verify your business is real, local, and trustworthy.",
        deliverables: [
          "70+ trusted citations submitted",
          "NAP consistency across the web",
          "Maps, GPS, and voice-search coverage",
        ],
        benefit: "More trust signals → more local rankings → more booked jobs.",
      },
    ],
  },
  {
    slug: "social-media",
    number: "02",
    title: "Social Media",
    tagline: "Show up everywhere — without lifting a finger.",
    iconName: "Share2",
    accent: "#EC4899",
    features: [
      {
        slug: "publishing",
        iconId: "C82qgeDiwIxE",
        iconAlt: "Social media publishing",
        pillLabel: "Flagship",
        pillColor: "#EC4899",
        title: "Social media publishing",
        description:
          "Posts go out consistently on Facebook, Instagram, and Google in your brand voice — covering services, seasonal moments, behind-the-scenes, and offers.",
        deliverables: [
          "Weekly posts on FB + IG + Google",
          "Branded copy in your voice",
          "Holiday + seasonal content",
          "Content calendar shared monthly",
        ],
        benefit: "Customers see you posting → they trust you → they pick you.",
        flagship: true,
      },
      {
        slug: "graphics",
        iconId: "13414",
        iconAlt: "Monthly graphic design",
        pillLabel: "Design",
        pillColor: "#1677FF",
        title: "12 graphics every month",
        description:
          "An in-house designer creates 12 custom graphics each month — promos, service highlights, seasonal, and brand moments. No stock-art shortcuts.",
        deliverables: [
          "12 custom graphics / month",
          "All platforms (FB, IG, Google, Ads)",
          "Editable source files on request",
        ],
        benefit: "A consistent, professional brand presence — without the in-house designer payroll.",
      },
    ],
  },
  {
    slug: "reviews-crm",
    number: "03",
    title: "Reviews & CRM Automation",
    tagline: "The lead-conversion engine. Every interaction captured, every review earned.",
    iconName: "MessageCircle",
    accent: "#7C3AED",
    features: [
      {
        slug: "review-gen",
        iconId: "19417",
        iconAlt: "Automated review generation",
        pillLabel: "Flagship",
        pillColor: "#22C55E",
        title: "Review generation engine",
        description:
          "The single highest-ROI feature in ServicePro. Every closed job triggers a perfectly-timed SMS + email asking for a 5-star Google review — automatically.",
        deliverables: [
          "Auto-trigger after job completion",
          "Personalized SMS + email asks",
          "Direct link to your Google review",
          "Review request analytics in dashboard",
        ],
        benefit:
          "ServicePro clients see 5× more Google reviews on average — and reviews are the #1 ranking + conversion factor for local services.",
        flagship: true,
      },
      {
        slug: "ai-replies",
        iconId: "13834",
        iconAlt: "AI-powered review replies",
        pillLabel: "AI",
        pillColor: "#F59E0B",
        title: "AI review replies",
        description:
          "Every Google review — positive or negative — gets a thoughtful, on-brand reply within minutes. AI drafts, you (optionally) approve, customer sees a responsive business.",
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
          "An AI agent on your site that answers FAQs, qualifies leads, and books service calls — even at 2am. Hands every captured lead to your Contact Center.",
        deliverables: [
          "Trained on your services + FAQs",
          "Qualifies + captures lead info",
          "Books service calls live",
          "Routes to Contact Center 24/7",
        ],
        benefit: "Stop losing after-hours visitors to competitors with faster response times.",
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
          "The #1 reason local businesses lose leads is a missed phone call. ServicePro catches them.",
      },
      {
        slug: "contact-center",
        iconId: "13820",
        iconAlt: "Unified Contact Center inbox",
        pillLabel: "Inbox",
        pillColor: "#7C3AED",
        title: "Contact Center",
        description:
          "One unified inbox for every lead: web forms, chat widget, SMS, email, missed-call text-back replies. Reply from any device, never lose a thread.",
        deliverables: [
          "Unified inbox: forms + chat + SMS + email",
          "Lead-source tagging on every message",
          "Mobile app for on-the-go replies",
        ],
        benefit: "One feed, one team, every lead — no more juggling Gmail + your phone + form notifications.",
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
          "Handoff between AI + your team",
          "Lead capture with name + need + phone",
        ],
        benefit: "Convert the visitors who never call and never fill a form.",
      },
    ],
  },
  {
    slug: "analytics-payments",
    number: "04",
    title: "Analytics & Payments",
    tagline: "Run the business and know exactly what’s working.",
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
          "Your own login showing every lead, call, form fill, chat, review, and search-rank movement — in real time, on any device.",
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
          "Full GA4 setup plus conversion tracking — so you know which keywords, channels, and pages are actually driving booked jobs.",
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
        iconAlt: "Call recording for QA and training",
        pillLabel: "Calls",
        pillColor: "#DC2626",
        title: "Call recording",
        description:
          "Every call to your tracked numbers is recorded for QA, training, and lead attribution — so you can hear exactly how your team is converting (or losing) leads.",
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

// ---------- Process / 60-day rollout ----------

export interface ServiceProProcessStep {
  week: string
  iconName: string
  title: string
  body: string
  accent: string
}

export const serviceproProcess: ServiceProProcessStep[] = [
  {
    week: "Weeks 1–2",
    iconName: "ClipboardList",
    title: "Discovery & strategy",
    body: "Deep audit, brand voice capture, target city + service mapping, GBP audit, competitor scan, and review strategy planning.",
    accent: "#F59E0B",
  },
  {
    week: "Weeks 3–4",
    iconName: "Globe",
    title: "Website + GBP build",
    body: "21-page custom site designed and written, GBP optimized, 70+ citations submitted, Google Analytics + Tag Manager wired up.",
    accent: "#1677FF",
  },
  {
    week: "Weeks 5–6",
    iconName: "Bot",
    title: "Automation + CRM wired",
    body: "AI chatbot trained on your services, Contact Center connected, chat widget on, missed-call text back live, review generation + AI replies activated, payments wired up.",
    accent: "#7C3AED",
  },
  {
    week: "Weeks 7–8",
    iconName: "BarChart3",
    title: "Launch + social",
    body: "Site goes live, social publishing kicks off (FB + IG + Google), 12 graphics delivered, dashboard login delivered, first monthly report scheduled.",
    accent: "#EC4899",
  },
]

// ---------- Limitations (what's NOT in ServicePro, only Signature) ----------

export interface ServiceProLimitation {
  iconName: string
  label: string
}

export const limitationsSignatureOnly: ServiceProLimitation[] = [
  { iconName: "Megaphone",  label: "Google Ads management included (Signature includes it; on ServicePro it’s à la carte)" },
  { iconName: "Video",      label: "4 custom videos / month" },
  { iconName: "Camera",     label: "6 custom graphics built from your own footage" },
  { iconName: "MessagesSquare", label: "Auto reply to social media DMs" },
  { iconName: "Send",       label: "Custom SMS marketing campaigns" },
  { iconName: "Workflow",   label: "Workflow setup & automation builds" },
  { iconName: "Mail",       label: "Email & SMS marketing" },
  { iconName: "Link2",      label: "Custom backlink campaigns" },
  { iconName: "Newspaper",  label: "Quarterly PR / press releases" },
  { iconName: "PenLine",    label: "Blog content / SEO blog content" },
  { iconName: "FileText",   label: "51-page website + 50 keywords (vs 21 + 25)" },
]

// ---------- vs Tiers ----------

export interface ServiceProTierCard {
  name: string
  price: string
  cents: string
  unlock: string
  href: string
  accent: string
  current?: boolean
}

export const serviceproTierStrip: ServiceProTierCard[] = [
  {
    name: "LocalMark",
    price: "$499",
    cents: "/mo",
    unlock:
      "What you’d give up coming back: social publishing, review generation, AI chatbot, missed-call text back, payments, Analytics, call recording, 30 more directories.",
    href: "/plans/localmark",
    accent: "#22C55E",
  },
  {
    name: "ServicePro",
    price: "$899",
    cents: "/mo",
    unlock:
      "Most popular for a reason — the full conversion engine for local service businesses ready to scale.",
    href: SERVICEPRO_BOOK_HREF,
    accent: SERVICEPRO_ACCENT,
    current: true,
  },
  {
    name: "Signature",
    price: "$1,499",
    cents: "/mo",
    unlock:
      "What you’d unlock: Google Ads management included, 4 videos/mo, full social management, custom SMS campaigns, workflow automation, blog content.",
    href: "/contact/schedule",
    accent: "#EC4899",
  },
]
