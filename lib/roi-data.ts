export type IndustryKey =
  | "hvac"
  | "plumbing"
  | "electrical"
  | "roofing"
  | "landscaping"
  | "garage"
  | "painting"
  | "restoration"
  | "custom"

export interface IndustryPreset {
  key: IndustryKey
  label: string
  /** icons8 ID — fetched via icons8Url() */
  icons8Id: string
  /** Realistic average profit per job for a local US service business in this trade */
  defaultProfit: number
}

export const industryPresets: IndustryPreset[] = [
  { key: "hvac",        label: "HVAC",         icons8Id: "12384",        defaultProfit: 450 },
  { key: "plumbing",    label: "Plumbing",     icons8Id: "fJtcL3pXcD0X", defaultProfit: 350 },
  { key: "electrical",  label: "Electrical",   icons8Id: "12088",        defaultProfit: 300 },
  { key: "roofing",     label: "Roofing",      icons8Id: "13261",        defaultProfit: 1500 },
  { key: "landscaping", label: "Landscaping",  icons8Id: "_dUYw8fOY_1u", defaultProfit: 200 },
  { key: "garage",      label: "Garage doors", icons8Id: "20425",        defaultProfit: 400 },
  { key: "painting",    label: "Painting",     icons8Id: "12951",        defaultProfit: 800 },
  { key: "restoration", label: "Restoration",  icons8Id: "85855",        defaultProfit: 1200 },
  { key: "custom",      label: "Custom",       icons8Id: "13027",        defaultProfit: 300 },
]

export const PROFIT_MIN = 50
export const PROFIT_MAX = 2000
export const PROFIT_STEP = 25
export const DEFAULT_PROFIT = 300
export const ANNUAL_DISCOUNT = 0.2

export interface VisibilityPlatform {
  domain: string
  name: string
}

export const visibilityPlatforms: VisibilityPlatform[] = [
  { domain: "google.com",    name: "Google" },
  { domain: "yelp.com",      name: "Yelp" },
  { domain: "facebook.com",  name: "Facebook" },
  { domain: "instagram.com", name: "Instagram" },
  { domain: "bing.com",      name: "Bing" },
  { domain: "nextdoor.com",  name: "Nextdoor" },
  { domain: "angi.com",      name: "Angi" },
  { domain: "thumbtack.com", name: "Thumbtack" },
]

export const honestyDisclosures: { title: string; body: string }[] = [
  {
    title: "Ranges, not guarantees",
    body: "The extra-jobs estimates show what the typical Max Market Pros customer in months 3–6 sees. Your numbers will move with your reviews, service quality, pricing, and market.",
  },
  {
    title: "Organic + activation only",
    body: "We count jobs from organic search, Google Business Profile, directory listings, missed-call text-back, and chat. Paid ads (where included) add on top of this, depending on spend.",
  },
  {
    title: "Excludes seasonality",
    body: "Month-by-month volume swings with your trade's season. We average across a full year for the range — don't extrapolate from a single slow month.",
  },
  {
    title: "Your profit, your math",
    body: "Break-even uses the profit-per-job you entered. We never assume a number for you. If your true margin is different, the result changes — that's the point of the calculator.",
  },
]
