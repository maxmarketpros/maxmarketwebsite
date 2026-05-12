export type PlanSlug = "startermark" | "localmark" | "servicepro" | "signature"

export interface PlanFeature {
  icon: string
  label: string
  detail?: string
}

export interface Plan {
  slug: PlanSlug
  name: string
  tagline: string
  price: string
  priceNumeric: number
  ctaLabel: string
  ctaHref: string
  recommended?: boolean
  accent: string
  iconName: string
  features: PlanFeature[]
}

export const BOOK_HREF = "/contact/schedule"

export const plans: Plan[] = [
  {
    slug: "startermark",
    name: "StarterMark",
    tagline: "Smallest starter package",
    price: "$199",
    priceNumeric: 199,
    ctaLabel: "Start With StarterMark",
    ctaHref: BOOK_HREF,
    accent: "#1677FF",
    iconName: "Rocket",
    features: [
      { icon: "Globe",    label: "5-page custom SEO website" },
      { icon: "Search",   label: "10 local SEO keywords" },
      { icon: "MapPin",   label: "Google Business Profile optimization" },
      { icon: "Compass",  label: "Basic local SEO setup" },
      { icon: "Palette",  label: "Custom logo / basic branding" },
      { icon: "Server",   label: "Basic website hosting & support" },
      { icon: "FileText", label: "Contact / quote form" },
    ],
  },
  {
    slug: "localmark",
    name: "LocalMark",
    tagline: "Local visibility package",
    price: "$499",
    priceNumeric: 499,
    ctaLabel: "Choose LocalMark",
    ctaHref: BOOK_HREF,
    accent: "#22C55E",
    iconName: "MapPin",
    features: [
      { icon: "Globe",       label: "11-page custom SEO website" },
      { icon: "Search",      label: "15 local SEO keywords" },
      { icon: "MapPin",      label: "Google Business Profile optimization" },
      { icon: "List",        label: "40+ directories / maps listings" },
      { icon: "Inbox",       label: "Contact Center" },
      { icon: "MessageCircle", label: "Website chat widget" },
      { icon: "BarChart3",   label: "Dashboard statistics & reporting" },
      { icon: "LineChart",   label: "Basic local SEO reporting" },
    ],
  },
  {
    slug: "servicepro",
    name: "ServicePro",
    tagline: "Main growth package",
    price: "$899",
    priceNumeric: 899,
    ctaLabel: "Choose ServicePro",
    ctaHref: BOOK_HREF,
    recommended: true,
    accent: "#F59E0B",
    iconName: "Star",
    features: [
      { icon: "Globe",         label: "21-page custom SEO website" },
      { icon: "Search",        label: "25 local SEO keywords" },
      { icon: "MapPin",        label: "Google Business Profile optimization" },
      { icon: "List",          label: "70+ directories / maps listings" },
      { icon: "Share2",        label: "Social media publishing" },
      { icon: "ImageIcon",     label: "12 graphics / month for all platforms" },
      { icon: "CreditCard",    label: "Payments & invoicing" },
      { icon: "Star",          label: "Review generation" },
      { icon: "Sparkles",      label: "AI review replies" },
      { icon: "Bot",           label: "AI chatbot" },
      { icon: "PhoneMissed",   label: "Auto missed-call text back" },
      { icon: "Inbox",         label: "Contact Center" },
      { icon: "MessageCircle", label: "Website chat widget" },
      { icon: "BarChart3",     label: "Dashboard statistics & reporting" },
      { icon: "LineChart",     label: "Google Analytics" },
      { icon: "Mic",           label: "Call recording" },
    ],
  },
  {
    slug: "signature",
    name: "Signature",
    tagline: "Top full-service plan",
    price: "$1,499",
    priceNumeric: 1499,
    ctaLabel: "Book a Signature Strategy Call",
    ctaHref: BOOK_HREF,
    accent: "#EC4899",
    iconName: "Crown",
    features: [
      { icon: "Globe",         label: "51-page custom SEO website" },
      { icon: "Search",        label: "50 local SEO keywords" },
      { icon: "MapPin",        label: "Google Business Profile optimization" },
      { icon: "List",          label: "70+ directories / maps listings" },
      { icon: "Link2",         label: "Custom backlinks" },
      { icon: "Newspaper",     label: "Quarterly PR / press release" },
      { icon: "Megaphone",     label: "Google Ads management included" },
      { icon: "Share2",        label: "Full social media management" },
      { icon: "ImageIcon",     label: "12 graphics / month" },
      { icon: "Camera",        label: "6 custom graphics using your content" },
      { icon: "Video",         label: "4 videos / month" },
      { icon: "MessagesSquare", label: "Auto reply to DMs" },
      { icon: "CreditCard",    label: "Payments & invoicing" },
      { icon: "Star",          label: "Review generation" },
      { icon: "Sparkles",      label: "AI review replies" },
      { icon: "Bot",           label: "AI chatbot" },
      { icon: "PhoneMissed",   label: "Auto missed-call text back" },
      { icon: "Inbox",         label: "Contact Center" },
      { icon: "MessageCircle", label: "Website chat widget" },
      { icon: "Send",          label: "Custom SMS campaigns" },
      { icon: "Workflow",      label: "Workflow setup & automation" },
      { icon: "Mail",          label: "Email & SMS marketing" },
      { icon: "BarChart3",     label: "Dashboard statistics & reporting" },
      { icon: "LineChart",     label: "Google Analytics" },
      { icon: "Mic",           label: "Call recording" },
      { icon: "PenLine",       label: "Blog content / SEO blog content" },
    ],
  },
]

// ---------- Comparison table ----------

export type CellValue =
  | { kind: "yes" }
  | { kind: "no" }
  | { kind: "text"; value: string }

export interface CompareRow {
  label: string
  values: [CellValue, CellValue, CellValue, CellValue] // StarterMark, LocalMark, ServicePro, Signature
}

export interface CompareSection {
  title: string
  iconName: string
  rows: CompareRow[]
}

const yes = (): CellValue => ({ kind: "yes" })
const no = (): CellValue => ({ kind: "no" })
const txt = (value: string): CellValue => ({ kind: "text", value })

export const comparisonSections: CompareSection[] = [
  {
    title: "Website",
    iconName: "Globe",
    rows: [
      { label: "Website pages",          values: [txt("5"), txt("11"), txt("21"), txt("51")] },
      { label: "Local SEO keywords",     values: [txt("10"), txt("15"), txt("25"), txt("50")] },
      { label: "Google Business Profile optimization", values: [yes(), yes(), yes(), yes()] },
      { label: "Custom logo / basic branding",          values: [yes(), yes(), yes(), yes()] },
      { label: "Blog content",           values: [no(), no(), no(), yes()] },
    ],
  },
  {
    title: "Social Media",
    iconName: "Share2",
    rows: [
      { label: "Social media setup",            values: [no(), no(), no(), no()] },
      { label: "Social media publishing",       values: [no(), no(), yes(), yes()] },
      { label: "Monthly graphics",              values: [no(), no(), txt("12"), txt("12")] },
      { label: "Custom client-content graphics", values: [no(), no(), no(), txt("6")] },
      { label: "Video content",                 values: [no(), no(), no(), txt("4 / mo")] },
      { label: "DM auto replies",               values: [no(), no(), no(), yes()] },
    ],
  },
  {
    title: "Maps & Directories",
    iconName: "MapPin",
    rows: [
      { label: "Directories / maps listings", values: [no(), txt("40+"), txt("70+"), txt("70+")] },
      { label: "Custom backlinks",            values: [no(), no(), no(), yes()] },
      { label: "Quarterly PR / press release", values: [no(), no(), no(), yes()] },
    ],
  },
  {
    title: "Customer Interaction & CRM",
    iconName: "MessageCircle",
    rows: [
      { label: "Contact Center",            values: [no(), yes(), yes(), yes()] },
      { label: "Website chat widget",       values: [no(), yes(), yes(), yes()] },
      { label: "Review generation",         values: [no(), no(), yes(), yes()] },
      { label: "AI review replies",         values: [no(), no(), yes(), yes()] },
      { label: "AI chatbot",                values: [no(), no(), yes(), yes()] },
      { label: "Auto missed-call text back", values: [no(), no(), yes(), yes()] },
      { label: "Custom SMS campaigns",      values: [no(), no(), no(), yes()] },
      { label: "Workflow setup & automation", values: [no(), no(), no(), yes()] },
    ],
  },
  {
    title: "Payments, Ads & Analytics",
    iconName: "CreditCard",
    rows: [
      { label: "Payments & invoicing",   values: [no(), no(), yes(), yes()] },
      { label: "Google Ads management",  values: [no(), txt("A la carte"), txt("A la carte"), txt("Included")] },
      { label: "Dashboard statistics",   values: [no(), yes(), yes(), yes()] },
      { label: "Google Analytics",       values: [no(), no(), yes(), yes()] },
      { label: "Call recording",         values: [no(), no(), yes(), yes()] },
    ],
  },
]

// ---------- À la carte highlights ----------

export interface ALaCarteItem {
  iconName: string
  label: string
  description: string
  price: string
  priceUnit?: string
  accent: string
  popular?: boolean
}

export const aLaCarteHighlights: ALaCarteItem[] = [
  {
    iconName: "Star",
    label: "Review generation",
    description: "Automated post-job text & email asks that turn happy customers into 5-star Google reviews.",
    price: "$199",
    priceUnit: "one-time",
    accent: "#F59E0B",
    popular: true,
  },
  {
    iconName: "Workflow",
    label: "Workflow setup & automation",
    description: "Custom CRM pipelines, lead routing, and follow-up sequences built around how your team sells.",
    price: "$1,000",
    priceUnit: "one-time",
    accent: "#7C3AED",
    popular: true,
  },
  {
    iconName: "MapPin",
    label: "GMB optimization + verification",
    description: "Full Google Business Profile rebuild — categories, services, photos, posts, and verification handled.",
    price: "$1,800",
    priceUnit: "one-time",
    accent: "#0891B2",
    popular: true,
  },
  {
    iconName: "Globe",
    label: "Custom websites",
    description: "One-time builds from 5 to 51 pages — own the site outright, add a plan later when you scale.",
    price: "from $1,200",
    accent: "#1677FF",
  },
  {
    iconName: "Palette",
    label: "Graphic design",
    description: "Custom social, ad, and brand graphics designed in your style by an in-house designer.",
    price: "$100",
    priceUnit: "/ 4 graphics",
    accent: "#EC4899",
  },
  {
    iconName: "Video",
    label: "Custom video / video editing",
    description: "Short-form vertical edits, drone footage cuts, and hook-driven reels for socials & ads.",
    price: "$400",
    priceUnit: "/ 4 × 1-min",
    accent: "#DC2626",
  },
  {
    iconName: "CreditCard",
    label: "Payment setup",
    description: "Take cards on your site, in your CRM, and over text — invoices, deposits, and recurring payments.",
    price: "$750",
    priceUnit: "one-time",
    accent: "#22C55E",
  },
  {
    iconName: "QrCode",
    label: "QR code generation",
    description: "Branded, trackable QR codes for trucks, business cards, signage, and door hangers.",
    price: "$29",
    priceUnit: "/mo",
    accent: "#1677FF",
  },
]

// ---------- Custom website tiers ----------

export interface CustomWebsiteTier {
  pages: number
  price: string
  blurb: string
  accent: string
}

export const customWebsiteTiers: CustomWebsiteTier[] = [
  { pages: 5,  price: "$1,200", blurb: "Starter site — home, about, services, contact, one extra.",  accent: "#1677FF" },
  { pages: 11, price: "$2,100", blurb: "Local visibility site with service area + service-specific pages.", accent: "#22C55E" },
  { pages: 21, price: "$3,900", blurb: "Growth site with full service catalog and city/landing pages.", accent: "#F59E0B" },
  { pages: 51, price: "$7,500", blurb: "Authority site built for SEO scale, blog-ready and modular.",   accent: "#EC4899" },
]
