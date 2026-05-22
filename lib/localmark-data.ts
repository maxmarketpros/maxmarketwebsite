// LocalMark plan detail page data — single source of truth.
// Keep pricing/features in sync with `lib/plans-data.ts`.

export const LOCALMARK_ACCENT = "#22C55E" // green — matches plan accent in plans-data.ts
export const LOCALMARK_BOOK_HREF = "/contact/schedule"

// ---------- Features ----------

export interface LocalMarkFeature {
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

export const localmarkFeatures: LocalMarkFeature[] = [
  {
    slug: "website",
    iconId: "114334",
    iconAlt: "Custom website design",
    pillLabel: "Website",
    pillColor: "#1677FF",
    title: "11-page custom SEO website",
    description:
      "A fully custom website built around your services, target cities, and how local customers actually search. No templates, no page-builder bloat — every page is designed to rank and convert.",
    deliverables: [
      "Custom design tailored to your brand",
      "Mobile-optimized & fast (Core Web Vitals tuned)",
      "On-page SEO baked into every page",
      "Lead capture forms on every key page",
    ],
    benefit:
      "Built so every page ranks for the right city + service combo — and turns those visits into booked jobs.",
    flagship: true,
  },
  {
    slug: "keywords",
    iconId: "QNjsAGAlpuNW",
    iconAlt: "Local SEO keyword targeting",
    pillLabel: "Local SEO",
    pillColor: "#22C55E",
    title: "15 local SEO keywords tracked & optimized",
    description:
      "We pick 15 high-intent keywords across your top services and cities, optimize for them, and track ranking changes every month.",
    deliverables: [
      "Keyword research + competitive gap analysis",
      "On-page optimization for each keyword",
      "Monthly rank tracking & reporting",
    ],
    benefit:
      "The right 15 phrases — the ones your customers actually type into Google before booking.",
  },
  {
    slug: "gbp",
    iconId: "DcygmpZqBEd9",
    iconAlt: "Google Business Profile",
    pillLabel: "Google",
    pillColor: "#F59E0B",
    title: "Google Business Profile optimization",
    description:
      "We build out or rebuild your Google Business Profile so it ranks in the Map Pack — categories, services, photos, posts, and Q&A handled.",
    deliverables: [
      "Categories, services & service-area tuning",
      "Photo + post strategy",
      "Q&A and review-ready setup",
    ],
    benefit:
      "Get into the 3-pack for your city — the most valuable real estate on Google for local services.",
  },
  {
    slug: "directories",
    iconId: "13052",
    iconAlt: "Directory and map listings network",
    pillLabel: "Directories",
    pillColor: "#0891B2",
    title: "40+ directories & maps listings",
    description:
      "Consistent NAP (name, address, phone) across the directories and maps platforms Google uses to verify your business is real and local.",
    deliverables: [
      "40+ trusted citations submitted",
      "NAP consistency verified across the web",
      "Major maps + GPS app coverage",
    ],
    benefit:
      "More trust signals Google sees, more places your business shows up when people search nearby.",
  },
  {
    slug: "contact-center",
    iconId: "13820",
    iconAlt: "Unified inbox",
    pillLabel: "Inbox",
    pillColor: "#7C3AED",
    title: "Contact Center",
    description:
      "One unified inbox for every lead — website forms, chat, SMS, and emails land in one place so nothing slips through the cracks.",
    deliverables: [
      "Unified inbox for web + SMS + email",
      "Lead-source tagging",
      "Mobile app for replying on the go",
    ],
    benefit:
      "Stop juggling tools — see and reply to every lead in one feed, from any device.",
  },
  {
    slug: "chat",
    iconId: "108780",
    iconAlt: "Website live chat widget",
    pillLabel: "Live Chat",
    pillColor: "#EC4899",
    title: "Website chat widget",
    description:
      "A live chat widget on your site that converts visitors into leads — and lands the conversation right in your Contact Center inbox.",
    deliverables: [
      "Custom-branded chat widget",
      "Lead capture with name + phone + need",
      "Routed straight to your Contact Center",
    ],
    benefit:
      "Catch the 30%+ of visitors who’d rather text than fill out a form.",
  },
  {
    slug: "dashboard",
    iconId: "XnHBz2LnhELw",
    iconAlt: "Dashboard with statistics",
    pillLabel: "Dashboard",
    pillColor: "#1677FF",
    title: "Dashboard statistics & reporting",
    description:
      "Your own login to a real-time dashboard showing leads, calls, form fills, chats, and search performance — no PDF reports needed.",
    deliverables: [
      "Real-time leads + calls + chats",
      "Source attribution (which channel drove it)",
      "Mobile-friendly login",
    ],
    benefit:
      "Know what’s working without waiting for a monthly report.",
  },
  {
    slug: "reporting",
    iconId: "103981",
    iconAlt: "SEO performance report",
    pillLabel: "Reporting",
    pillColor: "#DC2626",
    title: "Basic local SEO reporting",
    description:
      "Monthly snapshot of your local SEO performance — keyword movement, Map Pack visibility, and directory health, summarized in plain English.",
    deliverables: [
      "Keyword rank movement (15 tracked)",
      "Map Pack visibility for your city",
      "Directory health check",
    ],
    benefit:
      "See whether the work is moving the needle — every single month.",
  },
]

// ---------- Audience profiles ----------

export interface LocalMarkAudience {
  iconId: string
  iconAlt: string
  title: string
  body: string
  accent: string
}

export const localmarkAudience: LocalMarkAudience[] = [
  {
    iconId: "13739",
    iconAlt: "Defined target service area",
    title: "Serves a defined service area",
    body:
      "You serve one or a few cities and want to own Google in those zip codes — not nationwide, not vague, not everywhere at once.",
    accent: "#22C55E",
  },
  {
    iconId: "18901",
    iconAlt: "Small local business",
    title: "Has a Google Business Profile — or needs one",
    body:
      "Whether your GBP is already set up or doesn’t exist yet, we optimize what you have or build it from scratch.",
    accent: "#F59E0B",
  },
  {
    iconId: "63765",
    iconAlt: "Focused growth goal",
    title: "Wants local visibility first",
    body:
      "Not ready for full social media, video, or CRM automation yet — you want budget focused on what moves the needle: ranking locally and showing up everywhere.",
    accent: "#1677FF",
  },
]

// ---------- Process / 30-day rollout ----------

export interface LocalMarkProcessStep {
  week: string
  iconName: string // lucide icon name
  title: string
  body: string
  accent: string
}

export const localmarkProcess: LocalMarkProcessStep[] = [
  {
    week: "Week 1",
    iconName: "ClipboardList",
    title: "Kickoff & audit",
    body:
      "Brand assets, services, target cities, current Google Business Profile, competitor scan — everything we need to start fast.",
    accent: "#22C55E",
  },
  {
    week: "Week 2",
    iconName: "Globe",
    title: "Website build",
    body:
      "11-page custom site designed, content written, on-page SEO baked into every URL, lead forms wired up.",
    accent: "#1677FF",
  },
  {
    week: "Week 3",
    iconName: "MapPin",
    title: "GBP + 40+ directories",
    body:
      "Google Business Profile fully optimized, 40+ directory citations submitted with consistent NAP across the web.",
    accent: "#F59E0B",
  },
  {
    week: "Week 4",
    iconName: "BarChart3",
    title: "Launch + reporting",
    body:
      "Site live, Contact Center connected, chat widget on, dashboard login delivered — and the first monthly report scheduled.",
    accent: "#EC4899",
  },
]

// ---------- Limitations (what's NOT in LocalMark) ----------

export interface LocalMarkLimitation {
  iconName: string
  label: string
}

export const limitationsServicePro: LocalMarkLimitation[] = [
  { iconName: "Share2",       label: "Social media publishing + 12 monthly graphics" },
  { iconName: "Star",         label: "Review generation" },
  { iconName: "Sparkles",     label: "AI review replies" },
  { iconName: "Bot",          label: "AI chatbot" },
  { iconName: "PhoneMissed",  label: "Auto missed-call text back" },
  { iconName: "CreditCard",   label: "Payments & invoicing" },
  { iconName: "LineChart",    label: "Google Analytics" },
  { iconName: "Mic",          label: "Call recording" },
  { iconName: "List",         label: "70+ directories (vs LocalMark’s 40+)" },
  { iconName: "FileText",     label: "21-page site + 25 keywords (vs 11 + 15)" },
]

export const limitationsSignature: LocalMarkLimitation[] = [
  { iconName: "Megaphone",      label: "Google Ads management included" },
  { iconName: "Video",          label: "Full social management + 4 videos/mo" },
  { iconName: "Send",           label: "Custom SMS campaigns" },
  { iconName: "Workflow",       label: "Workflow setup & automation" },
  { iconName: "Mail",           label: "Email & SMS marketing" },
  { iconName: "Link2",          label: "Custom backlinks" },
  { iconName: "Newspaper",      label: "Quarterly PR / press release" },
  { iconName: "PenLine",        label: "Blog content / SEO blog content" },
  { iconName: "FileText",       label: "51-page site + 50 keywords (vs 11 + 15)" },
]

// ---------- vs Tiers ----------

export interface LocalMarkTierCard {
  name: string
  price: string
  cents: string
  unlock: string
  href: string
  accent: string
  current?: boolean
}

export const localmarkTierStrip: LocalMarkTierCard[] = [
  {
    name: "StarterMark",
    price: "$199",
    cents: "/mo",
    unlock:
      "What you’d give up coming back: directories, Contact Center, chat widget, dashboard & reporting.",
    href: "/contact/schedule",
    accent: "#1677FF",
  },
  {
    name: "LocalMark",
    price: "$499",
    cents: "/mo",
    unlock:
      "Most local service businesses start here — built for owning your city on Google.",
    href: LOCALMARK_BOOK_HREF,
    accent: LOCALMARK_ACCENT,
    current: true,
  },
  {
    name: "ServicePro",
    price: "$899",
    cents: "/mo",
    unlock:
      "What you’d unlock: social publishing, review generation, AI chatbot, payments, Google Analytics, 70+ directories.",
    href: "/contact/schedule",
    accent: "#F59E0B",
  },
]
