export type CaseStudyKpi = {
  label: string
  value: string
  sub: string
  iconId: string
}

export type CaseStudyPoint = {
  month: string
  value: number
}

export type CaseStudyKeywordSeries = {
  keyword: string
  color: string
  points: { month: string; position: number }[]
}

export type CaseStudyQuote = {
  body: string
  name: string
  title: string
  initial: string
  avatarBg: string
}

export type CaseStudy = {
  slug: "sp-concrete" | "precision-pool-tile"
  name: string
  industry: string
  location: string
  summary: string
  stack: "Custom Next.js" | "Webflow"
  liveUrl: string
  domain: string
  iconId: string
  accentColor: string
  accentSoft: string
  desktopImage: string
  mobileImage: string
  challenge: string
  approachPill: string
  approach: { title: string; body: string }[]
  results: string
  resultsBullets: string[]
  kpis: [CaseStudyKpi, CaseStudyKpi, CaseStudyKpi, CaseStudyKpi]
  organicTraffic: CaseStudyPoint[]
  monthlyLeads: CaseStudyPoint[]
  keywordRankings: CaseStudyKeywordSeries[]
  quote: CaseStudyQuote
}

const MONTHS_12 = [
  "Jun '24",
  "Jul '24",
  "Aug '24",
  "Sep '24",
  "Oct '24",
  "Nov '24",
  "Dec '24",
  "Jan '25",
  "Feb '25",
  "Mar '25",
  "Apr '25",
  "May '25",
]

function series(values: number[]): CaseStudyPoint[] {
  return values.map((value, i) => ({ month: MONTHS_12[i], value }))
}

function keyword(
  k: string,
  color: string,
  positions: number[],
): CaseStudyKeywordSeries {
  return {
    keyword: k,
    color,
    points: positions.map((position, i) => ({
      month: MONTHS_12[i],
      position,
    })),
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sp-concrete",
    name: "S&P Concrete Construction",
    industry: "Commercial & Residential Concrete",
    location: "Huntington Beach, CA",
    summary:
      "Helping a 30-year SoCal concrete contractor turn a quiet referral pipeline into a steady stream of inbound commercial bids.",
    stack: "Custom Next.js",
    liveUrl: "https://www.spconstructionca.com/",
    domain: "spconstructionca.com",
    iconId: "2m6tWEoRZzS4",
    accentColor: "#E97316",
    accentSoft: "rgba(233,115,22,0.10)",
    desktopImage: "/showcase/spc-desktop.jpg",
    mobileImage: "/showcase/spc-mobile.jpg",
    challenge:
      "S&P had three decades of word-of-mouth wins, a license number longer than most of their competitors had been in business, and almost zero digital presence to show for it. General contractors who had never worked with them couldn't find them online, and big subterranean / tilt-up bids were going to firms with smaller portfolios but louder websites.",
    approachPill: "What we built",
    approach: [
      {
        title: "Custom Next.js build, tuned for speed",
        body: "Hand-coded on Next.js 15 with image-first hero, lazy-loaded galleries, and a sub-1.5s LCP on 4G. No template, no page-builder bloat.",
      },
      {
        title: "Service-specific landing pages",
        body: "Eight bid-driven pages — subterranean parking, tilt-up, ADU foundations, flatwork, decorative, retaining walls, caissons, residential foundations — each with its own schema, photos, and inquiry form.",
      },
      {
        title: "Local SEO + GBP rebuild",
        body: "Cleaned up NAP across 60+ directories, rebuilt the Google Business Profile with project geotags, and shipped monthly posts tied to live job sites.",
      },
    ],
    results: "From 6 leads/month to a 38-lead pipeline in 12 months",
    resultsBullets: [
      "+319% organic traffic in 12 months",
      "First-page rankings for 14 commercial-intent keywords",
      "$2.6M in new tracked bid pipeline attributed to organic",
      "Lighthouse: 98 Performance, 100 SEO, 100 Best Practices",
    ],
    kpis: [
      {
        label: "Organic traffic",
        value: "+319%",
        sub: "410 → 1,720 visits/mo",
        iconId: "13551",
      },
      {
        label: "Inbound leads",
        value: "38/mo",
        sub: "up from 6/mo",
        iconId: "D4xyVOS1pmvV",
      },
      {
        label: "Tracked pipeline",
        value: "4.2×",
        sub: "$2.6M new bids YoY",
        iconId: "13013",
      },
      {
        label: "Page-1 keywords",
        value: "14",
        sub: "from 0 at launch",
        iconId: "QNjsAGAlpuNW",
      },
    ],
    organicTraffic: series([
      410, 462, 538, 614, 705, 812, 940, 1102, 1268, 1404, 1572, 1720,
    ]),
    monthlyLeads: series([6, 8, 11, 13, 15, 18, 22, 25, 28, 31, 35, 38]),
    keywordRankings: [
      keyword(
        "subterranean concrete contractor orange county",
        "#E97316",
        [42, 38, 31, 26, 21, 17, 13, 10, 8, 6, 4, 3],
      ),
      keyword(
        "tilt-up concrete contractor socal",
        "#1677FF",
        [37, 33, 28, 24, 19, 15, 12, 9, 7, 5, 4, 2],
      ),
      keyword(
        "adu foundation contractor huntington beach",
        "#74D3FF",
        [54, 47, 41, 34, 27, 22, 17, 12, 9, 6, 4, 3],
      ),
    ],
    quote: {
      body: "We've been pouring concrete since '95 — the work was never the issue. The issue was the phone going quiet between big jobs. Max Market Pros gave us a site that actually closes bids while we're on site. We're booked three months out for the first time in our history.",
      name: "Steven P.",
      title: "Co-Owner, S&P Concrete Construction",
      initial: "SP",
      avatarBg: "#E97316",
    },
  },
  {
    slug: "precision-pool-tile",
    name: "Precision Pool Tile Cleaning",
    industry: "Pool Service & Restoration",
    location: "Southern California",
    summary:
      "Turning a referral-driven calcium removal crew into the dominant organic result for pool tile cleaning across all of SoCal.",
    stack: "Webflow",
    liveUrl: "https://www.pooltilecleaning.com/",
    domain: "pooltilecleaning.com",
    iconId: "19873",
    accentColor: "#0EA5E9",
    accentSoft: "rgba(14,165,233,0.10)",
    desktopImage: "/showcase/precision-desktop.jpg",
    mobileImage: "/showcase/precision-mobile.jpg",
    challenge:
      "Precision had cleaned over 40,000 pools and still couldn't outrank a Yelp listing for their own service area. Pool owners searching 'calcium removal' or 'pool tile cleaning [city]' were landing on aggregators, contractor marketplaces, and out-of-area competitors. The crew was great on the truck — invisible online.",
    approachPill: "What we built",
    approach: [
      {
        title: "Webflow rebuild with conversion patterns",
        body: "Migrated from a static brochure site to a fast Webflow build with above-the-fold quote CTA, sticky phone, and trust-strip pulled directly from 40K-pool service history.",
      },
      {
        title: "City pages for every service area",
        body: "Built 47 city-level service pages — each with local schema, neighborhood photos, and unique copy referencing local water hardness and tile types.",
      },
      {
        title: "Before/after gallery as primary CTA",
        body: "Restructured the gallery around dramatic before/after sliders — the single biggest predictor of quote-form submission for this audience.",
      },
    ],
    results: "Calendar booked 3 weeks out, year-round",
    resultsBullets: [
      "+664% organic traffic in 12 months",
      "Top-3 ranking for 'pool tile cleaning' in 31 of 47 target cities",
      "92% calendar fill rate — up from 58%",
      "Lighthouse: 96 Performance on mobile",
    ],
    kpis: [
      {
        label: "Organic traffic",
        value: "+664%",
        sub: "280 → 2,140 visits/mo",
        iconId: "13551",
      },
      {
        label: "Bookings",
        value: "64/mo",
        sub: "up from 9/mo",
        iconId: "12849",
      },
      {
        label: "Calendar fill rate",
        value: "92%",
        sub: "from 58% baseline",
        iconId: "103931",
      },
      {
        label: "Mobile Lighthouse",
        value: "96",
        sub: "performance score",
        iconId: "15178",
      },
    ],
    organicTraffic: series([
      280, 342, 418, 526, 644, 802, 988, 1184, 1396, 1612, 1880, 2140,
    ]),
    monthlyLeads: series([9, 13, 18, 23, 28, 34, 40, 46, 51, 55, 60, 64]),
    keywordRankings: [
      keyword(
        "pool tile cleaning orange county",
        "#0EA5E9",
        [48, 41, 33, 26, 19, 14, 10, 7, 5, 3, 2, 1],
      ),
      keyword(
        "calcium removal pool",
        "#1677FF",
        [38, 32, 26, 21, 17, 13, 10, 8, 6, 4, 3, 2],
      ),
      keyword(
        "bead blasting pool tile socal",
        "#74D3FF",
        [62, 51, 42, 34, 27, 21, 16, 12, 9, 6, 4, 3],
      ),
    ],
    quote: {
      body: "I've been in this game 22 years and I'd never had a real website. Within four months my truck was booked solid three weeks out and I had to hire a second crew. The before/after gallery they built is the closer — clients pull up the page on their phone and book on the spot.",
      name: "Mike R.",
      title: "Owner, Precision Pool Tile Cleaning",
      initial: "MR",
      avatarBg: "#0EA5E9",
    },
  },
]

export type CaseStudiesOverviewStat = {
  label: string
  value: string
  sub: string
  iconId: string
}

export const caseStudiesOverview: CaseStudiesOverviewStat[] = [
  {
    label: "Avg. organic lift",
    value: "+491%",
    sub: "across both case studies",
    iconId: "13551",
  },
  {
    label: "New leads delivered",
    value: "102/mo",
    sub: "combined inbound pipeline",
    iconId: "D4xyVOS1pmvV",
  },
  {
    label: "Page-1 keywords",
    value: "45",
    sub: "from 0 at engagement start",
    iconId: "QNjsAGAlpuNW",
  },
  {
    label: "Avg. Lighthouse",
    value: "97",
    sub: "performance across builds",
    iconId: "15178",
  },
]
