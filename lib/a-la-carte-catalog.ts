import type { PlanSlug } from "./plans-data"

export type PlanChoice = PlanSlug | "none"

export const PLAN_RANK: Record<PlanChoice, number> = {
  none: 0,
  startermark: 1,
  localmark: 2,
  servicepro: 3,
  signature: 4,
}

export const PLAN_LABEL: Record<PlanChoice, string> = {
  none: "No plan",
  startermark: "StarterMark",
  localmark: "LocalMark",
  servicepro: "ServicePro",
  signature: "Signature",
}

export const PLAN_ACCENT: Record<PlanChoice, string> = {
  none: "#4A5A75",
  startermark: "#1677FF",
  localmark: "#22C55E",
  servicepro: "#F59E0B",
  signature: "#EC4899",
}

export const PLAN_ICON: Record<PlanChoice, string> = {
  none: "Sparkles",
  startermark: "Rocket",
  localmark: "MapPin",
  servicepro: "Star",
  signature: "Crown",
}

export type Availability =
  | { kind: "always" }
  | { kind: "requires"; minPlan: PlanSlug }
  | { kind: "included"; inPlan: PlanSlug }
  | { kind: "requiresAndIncluded"; minPlan: PlanSlug; inPlan: PlanSlug }

export type ItemPricing =
  | { type: "monthly"; amount: number }
  | { type: "oneTime"; amount: number }
  | { type: "oneTimeQty"; perUnit: number; unitLabel: string; defaultQty: number; maxQty: number }
  | { type: "custom" }

export type SelectionKind = "checkbox" | "quantity" | "radio"

export type CategoryId =
  | "websites"
  | "localSeo"
  | "crmAutomation"
  | "socialCreative"
  | "business"

export interface Category {
  id: CategoryId
  label: string
  blurb: string
  iconName: string
  accent: string
}

export interface ALaCarteItem {
  id: string
  category: CategoryId
  label: string
  description: string
  iconName: string
  accent: string
  pricing: ItemPricing
  availability: Availability
  selectionKind: SelectionKind
  radioGroup?: string
  popular?: boolean
  note?: string
}

export const categories: Category[] = [
  {
    id: "websites",
    label: "Website builds",
    blurb: "One-time website builds — pick the page count that matches your scale. Add monthly support later.",
    iconName: "Globe",
    accent: "#1677FF",
  },
  {
    id: "localSeo",
    label: "Local SEO, Google & maps",
    blurb: "Get found on Google. Reviews, Business Profile, QR codes, backlinks, PR, ads.",
    iconName: "MapPin",
    accent: "#0891B2",
  },
  {
    id: "crmAutomation",
    label: "CRM & automation",
    blurb: "Pipelines, payments, workflows, integrations, AI agents — your CRM, dialed in.",
    iconName: "Workflow",
    accent: "#7C3AED",
  },
  {
    id: "socialCreative",
    label: "Social & creative",
    blurb: "Graphics, short-form video, drone footage, business cards — built in your brand voice.",
    iconName: "Palette",
    accent: "#EC4899",
  },
  {
    id: "business",
    label: "Business services",
    blurb: "Get the business set up the right way — LLC formation and registration.",
    iconName: "Building2",
    accent: "#22C55E",
  },
]

export const items: ALaCarteItem[] = [
  // ── Websites (radio group: one website max) ──
  {
    id: "website-5",
    category: "websites",
    label: "5-page website",
    description: "Starter site — home, about, services, contact, plus one. Custom SEO build, hosted and ready.",
    iconName: "Globe",
    accent: "#1677FF",
    pricing: { type: "oneTime", amount: 1200 },
    availability: { kind: "always" },
    selectionKind: "radio",
    radioGroup: "website",
  },
  {
    id: "website-11",
    category: "websites",
    label: "11-page website",
    description: "Local visibility site with service area pages and per-service detail pages.",
    iconName: "Globe",
    accent: "#22C55E",
    pricing: { type: "oneTime", amount: 2100 },
    availability: { kind: "always" },
    selectionKind: "radio",
    radioGroup: "website",
    popular: true,
  },
  {
    id: "website-21",
    category: "websites",
    label: "21-page website",
    description: "Growth site with a full service catalog plus city / landing pages for local SEO.",
    iconName: "Globe",
    accent: "#F59E0B",
    pricing: { type: "oneTime", amount: 3900 },
    availability: { kind: "always" },
    selectionKind: "radio",
    radioGroup: "website",
  },
  {
    id: "website-51",
    category: "websites",
    label: "51-page website",
    description: "Authority site built for SEO scale — modular, blog-ready, and tuned to rank.",
    iconName: "Globe",
    accent: "#EC4899",
    pricing: { type: "oneTime", amount: 7500 },
    availability: { kind: "always" },
    selectionKind: "radio",
    radioGroup: "website",
  },
  {
    id: "website-custom",
    category: "websites",
    label: "Custom website",
    description: "Anything outside the standard tiers — ecommerce, portals, integrations, large catalogs.",
    iconName: "Calculator",
    accent: "#0B132B",
    pricing: { type: "custom" },
    availability: { kind: "always" },
    selectionKind: "radio",
    radioGroup: "website",
  },

  // ── Local SEO / Google / Maps ──
  {
    id: "gmb-optimization",
    category: "localSeo",
    label: "GMB optimization + verification",
    description: "Full Google Business Profile rebuild — categories, services, photos, posts, verification.",
    iconName: "MapPin",
    accent: "#0891B2",
    pricing: { type: "oneTime", amount: 1800 },
    availability: { kind: "always" },
    selectionKind: "checkbox",
    popular: true,
  },
  {
    id: "review-generation",
    category: "localSeo",
    label: "Review generation",
    description: "Automated post-job text & email asks that turn happy customers into 5-star Google reviews.",
    iconName: "Star",
    accent: "#F59E0B",
    pricing: { type: "oneTime", amount: 199 },
    availability: { kind: "always" },
    selectionKind: "checkbox",
    note: "Starting at $199 — final price depends on review volume.",
    popular: true,
  },
  {
    id: "qr-codes",
    category: "localSeo",
    label: "QR code generation",
    description: "Branded, trackable QR codes for trucks, business cards, signage, and door hangers.",
    iconName: "QrCode",
    accent: "#1677FF",
    pricing: { type: "monthly", amount: 29 },
    availability: { kind: "requires", minPlan: "localmark" },
    selectionKind: "checkbox",
  },
  {
    id: "custom-backlinks",
    category: "localSeo",
    label: "Custom backlinks",
    description: "Manually-placed, niche-relevant backlinks built to boost domain authority and rankings.",
    iconName: "Link2",
    accent: "#EC4899",
    pricing: { type: "custom" },
    availability: { kind: "included", inPlan: "signature" },
    selectionKind: "checkbox",
  },
  {
    id: "quarterly-pr",
    category: "localSeo",
    label: "Quarterly PR / press release",
    description: "Press releases distributed to relevant outlets each quarter to grow brand authority.",
    iconName: "Newspaper",
    accent: "#EC4899",
    pricing: { type: "custom" },
    availability: { kind: "included", inPlan: "signature" },
    selectionKind: "checkbox",
  },
  {
    id: "google-ads",
    category: "localSeo",
    label: "Google Ads management",
    description: "Strategy, creative, bidding, and reporting — managed by a paid-search specialist.",
    iconName: "Megaphone",
    accent: "#EC4899",
    pricing: { type: "custom" },
    availability: { kind: "included", inPlan: "signature" },
    selectionKind: "checkbox",
  },

  // ── CRM / Automation ──
  {
    id: "pipeline-creation",
    category: "crmAutomation",
    label: "Pipeline creation",
    description: "Sales pipelines built around how your team actually sells — stages, statuses, and follow-up.",
    iconName: "ListChecks",
    accent: "#7C3AED",
    pricing: { type: "custom" },
    availability: { kind: "always" },
    selectionKind: "checkbox",
  },
  {
    id: "workflow-automation",
    category: "crmAutomation",
    label: "Workflow setup & automation",
    description: "Custom CRM workflows, lead routing, and follow-up sequences built around your team.",
    iconName: "Workflow",
    accent: "#7C3AED",
    pricing: { type: "oneTime", amount: 1000 },
    availability: { kind: "included", inPlan: "signature" },
    selectionKind: "checkbox",
    popular: true,
  },
  {
    id: "zapier-setup",
    category: "crmAutomation",
    label: "Zapier / API integration",
    description: "Connect your CRM to anything — Zapier zaps, webhooks, custom API integrations.",
    iconName: "Zap",
    accent: "#F59E0B",
    pricing: { type: "oneTimeQty", perUnit: 250, unitLabel: "integration", defaultQty: 1, maxQty: 20 },
    availability: { kind: "always" },
    selectionKind: "quantity",
  },
  {
    id: "ai-agents",
    category: "crmAutomation",
    label: "AI agents",
    description: "AI booking, qualification, and follow-up agents tuned to your service, tone, and offers.",
    iconName: "Bot",
    accent: "#1677FF",
    pricing: { type: "custom" },
    availability: { kind: "always" },
    selectionKind: "checkbox",
  },
  {
    id: "payment-setup",
    category: "crmAutomation",
    label: "Payment setup",
    description: "Take cards on your site, in your CRM, and over text — invoices, deposits, recurring.",
    iconName: "CreditCard",
    accent: "#22C55E",
    pricing: { type: "oneTime", amount: 750 },
    availability: { kind: "included", inPlan: "servicepro" },
    selectionKind: "checkbox",
  },
  {
    id: "email-sms-setup",
    category: "crmAutomation",
    label: "Email & SMS marketing setup",
    description: "Compliant SMS / email sender setup, templates, and a starter campaign for your list.",
    iconName: "Mail",
    accent: "#EC4899",
    pricing: { type: "oneTime", amount: 500 },
    availability: { kind: "requiresAndIncluded", minPlan: "localmark", inPlan: "signature" },
    selectionKind: "checkbox",
  },

  // ── Social / Creative ──
  {
    id: "graphic-design",
    category: "socialCreative",
    label: "Graphic design pack",
    description: "4 custom social, ad, or brand graphics + 1 revision — designed in your style.",
    iconName: "Wand2",
    accent: "#EC4899",
    pricing: { type: "oneTimeQty", perUnit: 100, unitLabel: "pack", defaultQty: 1, maxQty: 20 },
    availability: { kind: "always" },
    selectionKind: "quantity",
  },
  {
    id: "video-pack",
    category: "socialCreative",
    label: "Short-form video pack",
    description: "4 one-minute videos — TikTok / Reels / YouTube Shorts edits with hooks and captions.",
    iconName: "Video",
    accent: "#DC2626",
    pricing: { type: "oneTimeQty", perUnit: 400, unitLabel: "pack", defaultQty: 1, maxQty: 20 },
    availability: { kind: "always" },
    selectionKind: "quantity",
  },
  {
    id: "drone-video",
    category: "socialCreative",
    label: "Drone videography",
    description: "Aerial footage of your work, location, or portfolio — edited for ads and socials.",
    iconName: "Plane",
    accent: "#0891B2",
    pricing: { type: "custom" },
    availability: { kind: "always" },
    selectionKind: "checkbox",
  },
  {
    id: "business-cards",
    category: "socialCreative",
    label: "Business card design",
    description: "Custom business card design that matches your brand — print-ready files delivered.",
    iconName: "IdCard",
    accent: "#7C3AED",
    pricing: { type: "oneTime", amount: 200 },
    availability: { kind: "always" },
    selectionKind: "checkbox",
  },

  // ── Business services ──
  {
    id: "llc-formation",
    category: "business",
    label: "Business registration / LLC setup",
    description: "We file your LLC, EIN, and required registrations so you can start operating legally.",
    iconName: "Building2",
    accent: "#22C55E",
    pricing: { type: "oneTime", amount: 599 },
    availability: { kind: "always" },
    selectionKind: "checkbox",
    note: "State filing fees not included in estimate.",
  },
]

export function getItem(id: string): ALaCarteItem | undefined {
  return items.find((i) => i.id === id)
}

export function getItemsByCategory(categoryId: CategoryId): ALaCarteItem[] {
  return items.filter((i) => i.category === categoryId)
}
