import type { CustomWebsiteTier } from "./plans-data"
import { customWebsiteTiers } from "./plans-data"

export { customWebsiteTiers }
export type { CustomWebsiteTier }

export type TierKey = 5 | 11 | 21 | 51

// ── Configurator ─────────────────────────────────────────────────────

export const idealFor: Record<TierKey, string> = {
  5: "Brand-new businesses · 1–2 services · one location",
  11: "Growing local business · 3–5 services · one service area",
  21: "Multi-service business · 5+ services · several towns covered",
  51: "Established or multi-location · big service catalog · ready to scale",
}

export const timelinePerTier: Record<TierKey, string> = {
  5: "2 weeks",
  11: "3 weeks",
  21: "5 weeks",
  51: "8 weeks",
}

// What pages typically fit at each tier — plain-English labels with lucide icon names
export interface PageChip {
  label: string
  iconName:
    | "Home"
    | "User"
    | "Wrench"
    | "MapPin"
    | "Image"
    | "MessageSquare"
    | "FileText"
    | "Star"
    | "Phone"
    | "DollarSign"
    | "Briefcase"
    | "BookOpen"
}

export const pageAllocations: Record<TierKey, PageChip[]> = {
  5: [
    { label: "Home",         iconName: "Home" },
    { label: "About us",     iconName: "User" },
    { label: "Services",     iconName: "Wrench" },
    { label: "Service A",    iconName: "Wrench" },
    { label: "Contact",      iconName: "Phone" },
  ],
  11: [
    { label: "Home",                  iconName: "Home" },
    { label: "About us",              iconName: "User" },
    { label: "Services hub",          iconName: "Wrench" },
    { label: "Service A",             iconName: "Wrench" },
    { label: "Service B",             iconName: "Wrench" },
    { label: "Service C",             iconName: "Wrench" },
    { label: "Service area",          iconName: "MapPin" },
    { label: "Reviews",               iconName: "Star" },
    { label: "Photo gallery",         iconName: "Image" },
    { label: "FAQ",                   iconName: "MessageSquare" },
    { label: "Contact",               iconName: "Phone" },
  ],
  21: [
    { label: "Home",                  iconName: "Home" },
    { label: "About us",              iconName: "User" },
    { label: "Services hub",          iconName: "Wrench" },
    { label: "Service A",             iconName: "Wrench" },
    { label: "Service B",             iconName: "Wrench" },
    { label: "Service C",             iconName: "Wrench" },
    { label: "Service D",             iconName: "Wrench" },
    { label: "Service E",             iconName: "Wrench" },
    { label: "City: Irvine",          iconName: "MapPin" },
    { label: "City: Tustin",          iconName: "MapPin" },
    { label: "City: Costa Mesa",      iconName: "MapPin" },
    { label: "Service area",          iconName: "MapPin" },
    { label: "Pricing",               iconName: "DollarSign" },
    { label: "Reviews",               iconName: "Star" },
    { label: "FAQ",                   iconName: "MessageSquare" },
    { label: "Photo gallery",         iconName: "Image" },
    { label: "Financing",             iconName: "DollarSign" },
    { label: "Careers",               iconName: "Briefcase" },
    { label: "Blog",                  iconName: "BookOpen" },
    { label: "Privacy",               iconName: "FileText" },
    { label: "Contact",               iconName: "Phone" },
  ],
  51: [
    { label: "Home",                       iconName: "Home" },
    { label: "About us",                   iconName: "User" },
    { label: "Services hub",               iconName: "Wrench" },
    { label: "Service A",                  iconName: "Wrench" },
    { label: "Service B",                  iconName: "Wrench" },
    { label: "Service C",                  iconName: "Wrench" },
    { label: "Service D",                  iconName: "Wrench" },
    { label: "Service E",                  iconName: "Wrench" },
    { label: "Service F",                  iconName: "Wrench" },
    { label: "Service G",                  iconName: "Wrench" },
    { label: "Service H",                  iconName: "Wrench" },
    { label: "Service I",                  iconName: "Wrench" },
    { label: "Service J",                  iconName: "Wrench" },
    { label: "City: Irvine",               iconName: "MapPin" },
    { label: "City: Tustin",               iconName: "MapPin" },
    { label: "City: Costa Mesa",           iconName: "MapPin" },
    { label: "City: Newport Beach",        iconName: "MapPin" },
    { label: "City: Anaheim",              iconName: "MapPin" },
    { label: "City: Santa Ana",            iconName: "MapPin" },
    { label: "City: Huntington Beach",     iconName: "MapPin" },
    { label: "City: Mission Viejo",        iconName: "MapPin" },
    { label: "Service A · Irvine",         iconName: "MapPin" },
    { label: "Service A · Tustin",         iconName: "MapPin" },
    { label: "Service B · Irvine",         iconName: "MapPin" },
    { label: "Service B · Tustin",         iconName: "MapPin" },
    { label: "Service area map",           iconName: "MapPin" },
    { label: "Pricing",                    iconName: "DollarSign" },
    { label: "Financing",                  iconName: "DollarSign" },
    { label: "Reviews",                    iconName: "Star" },
    { label: "Case studies",               iconName: "FileText" },
    { label: "Photo gallery",              iconName: "Image" },
    { label: "Awards",                     iconName: "Star" },
    { label: "Team",                       iconName: "User" },
    { label: "Careers",                    iconName: "Briefcase" },
    { label: "FAQ",                        iconName: "MessageSquare" },
    { label: "Resource hub",               iconName: "BookOpen" },
    { label: "Guide A",                    iconName: "BookOpen" },
    { label: "Guide B",                    iconName: "BookOpen" },
    { label: "Guide C",                    iconName: "BookOpen" },
    { label: "Guide D",                    iconName: "BookOpen" },
    { label: "Blog",                       iconName: "BookOpen" },
    { label: "Blog category",              iconName: "BookOpen" },
    { label: "Blog tag",                   iconName: "BookOpen" },
    { label: "Newsletter signup",          iconName: "MessageSquare" },
    { label: "Press",                      iconName: "FileText" },
    { label: "Partners",                   iconName: "User" },
    { label: "Privacy",                    iconName: "FileText" },
    { label: "Terms",                      iconName: "FileText" },
    { label: "Accessibility",              iconName: "FileText" },
    { label: "Sitemap",                    iconName: "MapPin" },
    { label: "Contact",                    iconName: "Phone" },
  ],
}

// ── Industries served (Icons8 IDs from search) ───────────────────────

export interface IndustryItem {
  name: string
  icons8Id: string
}

export const industriesServed: IndustryItem[] = [
  { name: "Plumbing",       icons8Id: "fJtcL3pXcD0X" },
  { name: "HVAC",           icons8Id: "12384" },
  { name: "Roofing",        icons8Id: "13261" },
  { name: "Landscaping",    icons8Id: "_dUYw8fOY_1u" },
  { name: "Electrical",     icons8Id: "18145" },
  { name: "Painting",       icons8Id: "12951" },
  { name: "Cleaning",       icons8Id: "12850" },
  { name: "Contractors",    icons8Id: "23340" },
]

// ── Showcase (NEW section — stylized mocks bento) ────────────────────

export type ShowcaseVariant =
  | "hero"
  | "services"
  | "reviews"
  | "map"
  | "gallery"
  | "form"
  | "google-result"

export interface ShowcaseCard {
  key: string
  title: string
  body: string
  accent: string
  span: "lg" | "md"
  variant: ShowcaseVariant
}

export const showcaseCards: ShowcaseCard[] = [
  {
    key: "homepage",
    title: "A homepage built around your services",
    body: "Hero, top services, trust pills, and a sticky 'Get a quote' button — designed to turn visitors into calls.",
    accent: "#1677FF",
    span: "lg",
    variant: "services",
  },
  {
    key: "reviews",
    title: "Real reviews, front and center",
    body: "Pull your Google reviews onto the page so visitors trust you before they even pick up the phone.",
    accent: "#F59E0B",
    span: "md",
    variant: "reviews",
  },
  {
    key: "form",
    title: "Easy mobile contact form",
    body: "Most visits come from phones. Yours will be effortless to tap, type, and send.",
    accent: "#22C55E",
    span: "md",
    variant: "form",
  },
  {
    key: "map",
    title: "Your service area — on a map",
    body: "A page for every city you serve, so Google sends you customers from the towns you actually work in.",
    accent: "#7C3AED",
    span: "lg",
    variant: "map",
  },
  {
    key: "gallery",
    title: "Photos that show off your work",
    body: "Before-and-after grids, project galleries, and the kind of trust signals a stock photo can't fake.",
    accent: "#EC4899",
    span: "md",
    variant: "gallery",
  },
  {
    key: "google",
    title: "Show up when locals search Google",
    body: "Your business in the first results — with stars, reviews, and an honest blurb that fits your brand.",
    accent: "#0891B2",
    span: "md",
    variant: "google-result",
  },
]

// ── "What you get" — uses same mock variants where useful ────────────

export interface WhatYouGetCard {
  key: string
  title: string
  body: string
  accent: string
  span: "lg" | "md"
  mock?: ShowcaseVariant
  iconName?: "Camera" | "MapPin" | "Star" | "MessageSquare" | "Search" | "Smartphone"
}

export const whatYouGetCards: WhatYouGetCard[] = [
  {
    key: "homepage",
    title: "A site built around your services",
    body: "Not a template. We design pages that highlight what makes your business worth calling.",
    accent: "#1677FF",
    span: "lg",
    mock: "services",
  },
  {
    key: "google",
    title: "Found when locals search Google",
    body: "Set up to rank when people in your area search for what you offer.",
    accent: "#0891B2",
    span: "md",
    mock: "google-result",
  },
  {
    key: "gallery",
    title: "Photos that show off your work",
    body: "Project galleries, before-and-after grids, and clean image layouts that load fast.",
    accent: "#EC4899",
    span: "md",
    mock: "gallery",
  },
  {
    key: "map",
    title: "A page for every town you serve",
    body: "Each city you cover gets its own page so Google shows you to locals there.",
    accent: "#7C3AED",
    span: "lg",
    mock: "map",
  },
  {
    key: "reviews",
    title: "Reviews from real customers",
    body: "Star ratings and review snippets right on the page — trust before they call.",
    accent: "#F59E0B",
    span: "md",
    mock: "reviews",
  },
  {
    key: "form",
    title: "Easy contact form to your inbox",
    body: "Every lead lands in your email, so you can respond before competitors do.",
    accent: "#22C55E",
    span: "md",
    mock: "form",
  },
]

// ── "Every tier includes" (plain English) ────────────────────────────

export interface IncludedItem {
  iconName: string
  label: string
  body: string
  accent: string
}

export const everyTierIncludes: IncludedItem[] = [
  { iconName: "Brush",        label: "Custom design",          body: "Designed for your brand — not a template every other business uses.", accent: "#F43F5E" },
  { iconName: "Smartphone",   label: "Works on every phone",   body: "Looks great and works perfectly on phones, tablets, and desktops.",   accent: "#FBBF24" },
  { iconName: "Search",       label: "Shows up on Google",     body: "Built to rank when locals search for what you offer.",                 accent: "#1677FF" },
  { iconName: "MessageSquare",label: "Easy contact form",      body: "Leads land straight in your inbox — and text you if you want.",       accent: "#22C55E" },
  { iconName: "Image",        label: "Photo-ready layouts",    body: "Drop in your project photos. We make them look great with no effort.",accent: "#EC4899" },
  { iconName: "Star",         label: "Reviews on the page",    body: "Pull in your Google reviews so customers see trust before they call.",accent: "#F59E0B" },
  { iconName: "Server",       label: "We host it",             body: "Hosting, SSL, and a fast domain setup — all handled for you.",         accent: "#14B8A6" },
  { iconName: "Wrench",       label: "We handle updates",      body: "Add a page, swap a photo, fix a typo — text or email and it's done.", accent: "#7C3AED" },
]

// ── vs DIY builders (plain English) ──────────────────────────────────

export interface VsBuilder {
  name: string
  domain: string
  caveat: string
}

export const vsBuilders: VsBuilder[] = [
  { name: "GoDaddy",    domain: "godaddy.com",    caveat: "Looks like every other site" },
  { name: "Wix",        domain: "wix.com",        caveat: "Slow on phones" },
  { name: "Squarespace",domain: "squarespace.com",caveat: "Boxed-in templates" },
]

export type VsCell = "yes" | "partial" | "no"

export interface VsRow {
  feature: string
  custom: VsCell
  godaddy: VsCell
  wix: VsCell
  squarespace: VsCell
}

export const vsBuildersRows: VsRow[] = [
  { feature: "Stands out from every other local business",  custom: "yes", godaddy: "no",      wix: "no",      squarespace: "partial" },
  { feature: "Built around YOUR services + service area",   custom: "yes", godaddy: "no",      wix: "partial", squarespace: "no"      },
  { feature: "Loads fast on a phone",                       custom: "yes", godaddy: "no",      wix: "no",      squarespace: "partial" },
  { feature: "Shows up when locals search Google",          custom: "yes", godaddy: "partial", wix: "partial", squarespace: "partial" },
  { feature: "Easy to add pages as you grow",               custom: "yes", godaddy: "partial", wix: "partial", squarespace: "no"      },
  { feature: "Real human helping you when you need a change", custom: "yes", godaddy: "no",    wix: "no",      squarespace: "no"      },
]

// ── Process (4 steps, plain English) ─────────────────────────────────

export interface ProcessStep {
  n: number
  title: string
  body: string
  iconName: "PhoneCall" | "Brush" | "Wrench" | "Rocket"
}

export const processSteps: ProcessStep[] = [
  {
    n: 1,
    title: "Free strategy call",
    body: "30 minutes. You tell us about your services, your service area, and your competitors. We map out a sitemap and a fixed launch date.",
    iconName: "PhoneCall",
  },
  {
    n: 2,
    title: "Design + content",
    body: "We design the site and write every page from your service expertise. You approve everything before we write a single line of code.",
    iconName: "Brush",
  },
  {
    n: 3,
    title: "Build + photos",
    body: "We build the site and drop in your photos. You get a daily preview link so you watch progress, not promises.",
    iconName: "Wrench",
  },
  {
    n: 4,
    title: "Launch + handoff",
    body: "Site goes live, leads start coming in, and we hand you the keys. Want help keeping it fresh? Add a monthly plan whenever.",
    iconName: "Rocket",
  },
]
