// Accent palette for the practices page.
// Mirrors the brand system but adds quadrant colors for MethodDial.
export const PRACTICE_BLUE = "#1677FF"
export const PRACTICE_CYAN = "#74D3FF"
export const PRACTICE_VIOLET = "#8B5CF6"
export const PRACTICE_GREEN = "#22C55E"
export const PRACTICE_AMBER = "#F59E0B"
export const PRACTICE_ROSE = "#F43F5E"

// -----------------------------------------------------------------------------
// 1) Methodology — Audit → Strategy → Execute → Optimize
// -----------------------------------------------------------------------------
export type MethodStep = {
  number: string
  iconId: string
  name: string
  accent: string
  whatWeDo: string
  whatYouSee: string
  duration: string
}

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    iconId: "kDqO6kPb3xLj", // Search v2
    name: "Audit",
    accent: PRACTICE_BLUE,
    whatWeDo: "Crawl your site, your top three competitors, and the search demand you're missing.",
    whatYouSee: "A written audit deck — what's working, what's leaking, what to fix first.",
    duration: "Week 1",
  },
  {
    number: "02",
    iconId: "XiOTegRsskoN", // Compass v2
    name: "Strategy",
    accent: PRACTICE_CYAN,
    whatWeDo: "Pick the two or three services that move revenue and bundle them into a 90-day plan.",
    whatYouSee: "A one-page plan with priorities, owners, and a forecast you can hold us to.",
    duration: "Week 2",
  },
  {
    number: "03",
    iconId: "JizgObtyfWS2", // Launched rocket v2
    name: "Execute",
    accent: PRACTICE_VIOLET,
    whatWeDo: "In-house team ships the work — websites, SEO, ads, social, automation.",
    whatYouSee: "Weekly progress, a shared dashboard, and go-live in as little as 14 days.",
    duration: "Weeks 3+",
  },
  {
    number: "04",
    iconId: "1ya3H57M8iU6", // Bar Chart v2
    name: "Optimize",
    accent: PRACTICE_GREEN,
    whatWeDo: "Read the numbers, kill what isn't working, double down on what is.",
    whatYouSee: "A monthly report with rankings, leads, ROI — and the next 30 days of work.",
    duration: "Every month",
  },
]

// -----------------------------------------------------------------------------
// 2) Pillars — what every engagement includes
// -----------------------------------------------------------------------------
export type Pillar = {
  iconId: string
  accent: string
  title: string
  body: string
  chips?: string[]
  span: 4 | 5 | 7 | 12 // lg:col-span
  feature?: boolean
}

export const pillars: Pillar[] = [
  {
    iconId: "rmZANaZDPSOT", // Conference call v2
    accent: PRACTICE_BLUE,
    title: "One strategist. One bill. One team.",
    body:
      "A senior strategist owns your account end-to-end. No revolving account managers, no \"I'll loop in the team\" mystery emails — the person who builds your plan is the person you call.",
    chips: ["Single point of contact", "Owns the roadmap", "Picks up the phone"],
    span: 7,
    feature: true,
  },
  {
    iconId: "12129", // Factory
    accent: PRACTICE_VIOLET,
    title: "In-house production.",
    body:
      "Designers, video producers, ad buyers, and SEOs all sit on the same payroll — not a freelancer network and not an offshore vendor.",
    chips: ["Designer", "Video", "Ads", "SEO"],
    span: 5,
  },
  {
    iconId: "13519", // Businessman
    accent: PRACTICE_AMBER,
    title: "Senior-only. U.S. based.",
    body: "No junior handoffs. No outsourcing your account to a 22-year-old you'll never meet.",
    span: 4,
  },
  {
    iconId: "HiVIFnLq7bjT", // Calendar v2
    accent: PRACTICE_CYAN,
    title: "Transparent timelines.",
    body: "3-week to 10-week rollouts, fixed in writing. You see the build happen in real time.",
    span: 4,
  },
  {
    iconId: "15178", // Speedometer
    accent: PRACTICE_GREEN,
    title: "Quality bars we hit.",
    body: "Lighthouse 95+. Schema on every page. Core Web Vitals pass. Not goals — checklist items.",
    span: 4,
  },
  {
    iconId: "17949", // Google logo
    accent: PRACTICE_ROSE,
    title: "Google-compliant by default.",
    body:
      "Every tactic, link, page, and review pipeline is written to last a decade — not to spike for a quarter and get penalized.",
    span: 12,
  },
]

// -----------------------------------------------------------------------------
// 3) Toolkit — tools we work in every day, grouped by role
// -----------------------------------------------------------------------------
export type Tool = {
  name: string
  domain: string
  /** Optional icons8 ID — when set, we render this instead of the favicon
   *  (used for tools whose domain returns a generic favicon — e.g., the
   *  Google sub-services that all share the same "G" logo). */
  iconId?: string
}
export type ToolGroup = {
  label: string
  accent: string
  summary: string
  tools: Tool[]
}

export const toolGroups: ToolGroup[] = [
  {
    label: "Search & SEO",
    accent: PRACTICE_BLUE,
    summary: "Rankings, citations, analytics, and the GBP — the channels that make local searches happen.",
    tools: [
      { name: "Google", domain: "google.com" },
      { name: "Google Business Profile", domain: "business.google.com", iconId: "4y5FyfJdxJ3h" },
      { name: "Search Console", domain: "search.google.com", iconId: "kDqO6kPb3xLj" },
      { name: "Google Analytics", domain: "analytics.google.com", iconId: "fcKpGwAbxxfP" },
      { name: "Tag Manager", domain: "tagmanager.google.com", iconId: "YuG5WvSJbGoq" },
      { name: "Semrush", domain: "semrush.com" },
      { name: "Ahrefs", domain: "ahrefs.com" },
      { name: "Yelp", domain: "yelp.com" },
    ],
  },
  {
    label: "Build & Design",
    accent: PRACTICE_VIOLET,
    summary: "Every platform our clients are on — and the ones we recommend they move to.",
    tools: [
      { name: "Webflow", domain: "webflow.com" },
      { name: "Wix", domain: "wix.com" },
      { name: "Squarespace", domain: "squarespace.com" },
      { name: "WordPress", domain: "wordpress.com" },
      { name: "GoDaddy", domain: "godaddy.com" },
      { name: "Netlify", domain: "netlify.com" },
      { name: "Figma", domain: "figma.com" },
      { name: "Relume", domain: "relume.io" },
    ],
  },
  {
    label: "Ads, CRM & Ops",
    accent: PRACTICE_GREEN,
    summary: "The paid, social, automation, and payments stack we wire into every engagement.",
    tools: [
      { name: "Google Ads", domain: "ads.google.com", iconId: "ui4CTPMMDCFh" },
      { name: "Meta", domain: "facebook.com" },
      { name: "Instagram", domain: "instagram.com" },
      { name: "YouTube", domain: "youtube.com" },
      { name: "TikTok", domain: "tiktok.com" },
      { name: "HighLevel", domain: "gohighlevel.com" },
      { name: "Stripe", domain: "stripe.com" },
      { name: "Mailchimp", domain: "mailchimp.com" },
    ],
  },
]

// -----------------------------------------------------------------------------
// 4) Anti-Playbook — what we refuse to do
// -----------------------------------------------------------------------------
export type Refusal = { title: string; reason: string }

export const refusals: Refusal[] = [
  {
    title: "No PBNs or paid backlinks",
    reason:
      "Private blog networks and paid link schemes get deindexed in waves. We build real authority — chamber, press, niche directories, community sponsorships.",
  },
  {
    title: "No review gating",
    reason:
      "Filtering negative reviews before they reach Google violates Google's terms. One violation can suspend your Google Business Profile.",
  },
  {
    title: "No copy-paste geo or service pages",
    reason:
      "Thin templated pages don't rank and Google's helpful-content system actively demotes them. Every page gets unique copy.",
  },
  {
    title: "No keyword stuffing",
    reason:
      "Reads terrible to real buyers and has been a ranking penalty since 2011. We write for the customer first, then check keyword coverage.",
  },
  {
    title: "No offshoring or junior handoffs",
    reason:
      "The strategist who writes your plan is the strategist who runs it. No outsourced content mills, no juniors shadowing your account.",
  },
  {
    title: "No “set it and forget it.”",
    reason:
      "Every account gets a monthly read-out, a kill-list, and a next-30-days plan. If something stops working we change it, not double down on it.",
  },
]

// -----------------------------------------------------------------------------
// 5) Guarantees — quality bars in writing
// -----------------------------------------------------------------------------
export type Guarantee = { iconId: string; value: string; explainer: string }

export const guarantees: Guarantee[] = [
  { iconId: "EIn9Yb82LfeM", value: "Lighthouse 95+", explainer: "Mobile performance pass on every build." },
  { iconId: "19294",        value: "Schema everywhere", explainer: "JSON-LD on every page we publish." },
  { iconId: "crX4uqprHPro", value: "Core Web Vitals pass", explainer: "LCP, INP, CLS — green before launch." },
  { iconId: "11966",        value: "Zero-downtime migrations", explainer: "Full 301 map. DNS cutover overnight." },
  { iconId: "11947",        value: "30-day post-launch support", explainer: "Bugs, tweaks, content fixes — included." },
  { iconId: "13540",        value: "Senior strategist on every call", explainer: "Not a junior. Not a sales rep." },
]

// -----------------------------------------------------------------------------
// 6) Team model — hub-and-spoke specialists
// -----------------------------------------------------------------------------
export type Specialist = { iconId: string; role: string; owns: string; accent: string }

export const specialists: Specialist[] = [
  { iconId: "Xwqu8cUREfko", role: "Designer", owns: "Brand, graphics, ad creative", accent: PRACTICE_ROSE },
  { iconId: "13070", role: "Video producer", owns: "Shoots + edits, footage graphics", accent: PRACTICE_AMBER },
  { iconId: "13757", role: "Ads & automation", owns: "Google + Meta, CRM, workflows", accent: PRACTICE_GREEN },
  { iconId: "kDqO6kPb3xLj", role: "SEO & content", owns: "Rankings, citations, copy", accent: PRACTICE_BLUE },
]

// -----------------------------------------------------------------------------
// 7) Hero proof pills (reuse icons from above)
// -----------------------------------------------------------------------------
export const heroProofPills = [
  { iconId: "13519", label: "Senior strategists only" },
  { iconId: "rmZANaZDPSOT", label: "In-house team" },
  { iconId: "EIn9Yb82LfeM", label: "Lighthouse 95+ standard" },
  { iconId: "17949", label: "Google-compliant" },
] as const
