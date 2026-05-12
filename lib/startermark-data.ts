// StarterMark plan detail page data — single source of truth.
// Keep pricing/features in sync with `lib/plans-data.ts`.

export const STARTERMARK_ACCENT = "#1677FF" // blue — matches plan accent in plans-data.ts
export const STARTERMARK_ACCENT_DARK = "#0D5FD9"
export const STARTERMARK_ACCENT_LIGHT = "#74D3FF"
export const STARTERMARK_BOOK_HREF = "/contact/schedule"

// ---------- Features (7 total) ----------

export interface StarterMarkFeature {
  slug: string
  iconId: string
  iconAlt: string
  pillLabel: string
  pillColor: string
  title: string
  description: string
  flagship?: boolean
}

export const startermarkFeatures: StarterMarkFeature[] = [
  {
    slug: "website",
    iconId: "114334",
    iconAlt: "5-page custom SEO website",
    pillLabel: "Flagship",
    pillColor: "#1677FF",
    title: "5-page custom SEO website",
    description:
      "A real, custom-designed website — not a template. Home, About, Services, Contact, plus one extra page tailored to your business. Built to look professional and rank locally.",
    flagship: true,
  },
  {
    slug: "keywords",
    iconId: "QNjsAGAlpuNW",
    iconAlt: "Local SEO keywords",
    pillLabel: "Local SEO",
    pillColor: "#22C55E",
    title: "10 local SEO keywords",
    description:
      "We pick 10 high-intent local keywords across your top services and city, then optimize your site and GBP for them.",
  },
  {
    slug: "gbp",
    iconId: "DcygmpZqBEd9",
    iconAlt: "Google Business Profile",
    pillLabel: "Google",
    pillColor: "#F59E0B",
    title: "Google Business Profile optimization",
    description:
      "Full GBP build or rebuild — categories, services, photos, and review-ready setup so customers find you on Google Maps.",
  },
  {
    slug: "seo-setup",
    iconId: "fcKpGwAbxxfP",
    iconAlt: "Basic local SEO setup",
    pillLabel: "Foundation",
    pillColor: "#7C3AED",
    title: "Basic local SEO setup",
    description:
      "On-page SEO, schema markup, sitemap submission, and Google Search Console wired up so Google can actually find and rank you.",
  },
  {
    slug: "logo",
    iconId: "13414",
    iconAlt: "Custom logo and basic branding",
    pillLabel: "Branding",
    pillColor: "#EC4899",
    title: "Custom logo / basic branding",
    description:
      "A clean, professional logo plus a basic color palette and font system so every customer touchpoint looks like the same business.",
  },
  {
    slug: "hosting",
    iconId: "13052",
    iconAlt: "Website hosting and support",
    pillLabel: "Hosting",
    pillColor: "#0891B2",
    title: "Basic website hosting & support",
    description:
      "Fast, secure hosting included. SSL, daily backups, and support requests handled by our team — you never touch a server.",
  },
  {
    slug: "form",
    iconId: "13820",
    iconAlt: "Contact and quote form",
    pillLabel: "Leads",
    pillColor: "#DC2626",
    title: "Contact / quote form",
    description:
      "A built-in contact form on every page plus a dedicated quote page — submissions land directly in your email so no lead gets lost.",
  },
]

// ---------- Who it's for ----------

export interface StarterMarkAudience {
  iconId: string
  iconAlt: string
  title: string
  body: string
  accent: string
}

export const startermarkAudience: StarterMarkAudience[] = [
  {
    iconId: "4gURKWl6bT1u",
    iconAlt: "Brand new business",
    title: "You're just getting started",
    body:
      "Brand new business, no website yet, maybe just a phone number and a Facebook page. You want to look real, get on Google, and start taking quotes — without overpaying for things you don't need yet.",
    accent: "#1677FF",
  },
  {
    iconId: "59023",
    iconAlt: "Upgrading from DIY",
    title: "You've been winging it",
    body:
      "You built a Wix site five years ago, your logo lives in a Word doc, and you've never claimed your Google Business Profile. StarterMark gets you a proper foundation so you can grow from real ground.",
    accent: "#22C55E",
  },
]

// ---------- Process / 3-week rollout ----------

export interface StarterMarkProcessStep {
  week: string
  iconName: string
  title: string
  body: string
  accent: string
}

export const startermarkProcess: StarterMarkProcessStep[] = [
  {
    week: "Week 1",
    iconName: "ClipboardList",
    title: "Discovery + brand",
    body: "Quick kickoff call, content collection, target keyword + city mapping, and your custom logo + color palette designed.",
    accent: "#1677FF",
  },
  {
    week: "Week 2",
    iconName: "Globe",
    title: "Website + GBP build",
    body: "5-page custom site designed and written, Google Business Profile fully optimized, contact form wired up to your email.",
    accent: "#7C3AED",
  },
  {
    week: "Week 3",
    iconName: "Rocket",
    title: "Launch + SEO setup",
    body: "Site goes live, basic on-page SEO + schema + Search Console configured, hosting active, you're searchable on Google.",
    accent: "#22C55E",
  },
]

// ---------- Vs Tiers ----------

export interface StarterMarkTierCard {
  name: string
  price: string
  cents: string
  unlock: string
  href: string
  accent: string
  current?: boolean
}

export const startermarkTierStrip: StarterMarkTierCard[] = [
  {
    name: "StarterMark",
    price: "$199",
    cents: "/mo",
    unlock:
      "The foundation plan — a real site, GBP optimized, basic SEO live. Designed to look professional and start ranking, nothing more.",
    href: STARTERMARK_BOOK_HREF,
    accent: STARTERMARK_ACCENT,
    current: true,
  },
  {
    name: "LocalMark",
    price: "$499",
    cents: "/mo",
    unlock:
      "What you'd unlock: 11 pages (vs 5), 15 keywords (vs 10), 40+ directories, Contact Center inbox, chat widget, and a real dashboard with monthly reporting.",
    href: "/plans/localmark",
    accent: "#22C55E",
  },
  {
    name: "ServicePro",
    price: "$899",
    cents: "/mo",
    unlock:
      "What you'd unlock: everything in LocalMark plus social publishing, 12 graphics/mo, review generation, AI chatbot, missed-call text back, payments, and full analytics.",
    href: "/plans/servicepro",
    accent: "#F59E0B",
  },
]
