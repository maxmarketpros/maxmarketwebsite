export type IconKind = "asset" | "icons8" | "monogram"

export type Partner = {
  name: string
  role: string
  color: string
  iconKind: IconKind
  asset?: string
  iconId?: string
  monogram?: string
  monogramBg?: string
  monogramColor?: string
  href?: string
}

export type PartnerCategory = {
  pill: string
  heading: string
  paragraph: string
  items: Partner[]
  ctaLabel: string
  ctaHref: string
}

// 1. Featured "core stack" — 9 logos already in /public/partners/
export const FEATURED: Partner[] = [
  {
    name: "Google",
    role: "Search, Ads, GA4 — the home base.",
    color: "#4285F4",
    iconKind: "asset",
    asset: "/partners/google-logo.webp",
  },
  {
    name: "Google Business Profile",
    role: "Map Pack, calls, directions.",
    color: "#34A853",
    iconKind: "asset",
    asset: "/partners/google-my-business-logo.webp",
    href: "/services/seo/local",
  },
  {
    name: "Semrush",
    role: "Keyword + competitive intel.",
    color: "#FF642D",
    iconKind: "asset",
    asset: "/partners/semrush-logo.png",
    href: "/services/seo",
  },
  {
    name: "HighLevel",
    role: "Our agency CRM + automations.",
    color: "#0068FF",
    iconKind: "asset",
    asset: "/partners/highlevel-logo.png",
    href: "/solutions/lead-generation",
  },
  {
    name: "Yelp",
    role: "Reviews, local discovery, ads.",
    color: "#D32323",
    iconKind: "asset",
    asset: "/partners/yelp-logo.png",
  },
  {
    name: "Webflow",
    role: "No-code pro builds with CMS.",
    color: "#4353FF",
    iconKind: "asset",
    asset: "/partners/webflow-logo.svg",
    href: "/services/web-design/webflow",
  },
  {
    name: "Wix",
    role: "Wix Studio + Velo development.",
    color: "#0C6EFD",
    iconKind: "asset",
    asset: "/partners/wix-logo.png",
    href: "/services/web-design/wix",
  },
  {
    name: "Netlify",
    role: "Edge hosting for JAMstack sites.",
    color: "#00C7B7",
    iconKind: "asset",
    asset: "/partners/netlify-logo.png",
  },
  {
    name: "Relume",
    role: "AI-powered design system library.",
    color: "#202020",
    iconKind: "asset",
    asset: "/partners/relume-logo.png",
  },
]

// 3. Paid ads
const PAID_ADS: Partner[] = [
  {
    name: "Google Ads",
    role: "Search, PMax, Shopping, LSAs.",
    color: "#4285F4",
    iconKind: "icons8",
    iconId: "17949",
    href: "/services/paid-ads/google-ads",
  },
  {
    name: "Meta Ads",
    role: "Facebook feed, Reels, Stories.",
    color: "#0866FF",
    iconKind: "icons8",
    iconId: "118497",
    href: "/services/paid-ads/facebook-ads",
  },
  {
    name: "Instagram Ads",
    role: "Reels, Stories, Explore placements.",
    color: "#E4405F",
    iconKind: "icons8",
    iconId: "32323",
    href: "/services/paid-ads/instagram-ads",
  },
  {
    name: "YouTube Ads",
    role: "Skippable, bumper, Shorts ads.",
    color: "#FF0000",
    iconKind: "icons8",
    iconId: "19318",
  },
  {
    name: "TikTok Ads",
    role: "Spark Ads, in-feed, TopView.",
    color: "#000000",
    iconKind: "icons8",
    iconId: "118640",
  },
  {
    name: "LinkedIn Ads",
    role: "B2B Sponsored Content + InMail.",
    color: "#0A66C2",
    iconKind: "icons8",
    iconId: "13930",
  },
  {
    name: "Snapchat Ads",
    role: "Snap Ads + AR Lens campaigns.",
    color: "#FFFC00",
    iconKind: "icons8",
    iconId: "23032",
  },
]

// 4. Social
const SOCIAL: Partner[] = [
  {
    name: "Instagram",
    role: "Reels, carousels, Stories.",
    color: "#E4405F",
    iconKind: "icons8",
    iconId: "32323",
  },
  {
    name: "TikTok",
    role: "Short-form video at scale.",
    color: "#000000",
    iconKind: "icons8",
    iconId: "118640",
    href: "/services/social-media/tiktok",
  },
  {
    name: "YouTube",
    role: "Long-form + Shorts production.",
    color: "#FF0000",
    iconKind: "icons8",
    iconId: "19318",
    href: "/services/social-media/youtube",
  },
  {
    name: "Facebook",
    role: "Pages, groups, community.",
    color: "#1877F2",
    iconKind: "icons8",
    iconId: "118497",
  },
  {
    name: "LinkedIn",
    role: "Founder + B2B thought leadership.",
    color: "#0A66C2",
    iconKind: "icons8",
    iconId: "13930",
  },
  {
    name: "X (Twitter)",
    role: "Real-time replies + threads.",
    color: "#000000",
    iconKind: "icons8",
    iconId: "ClbD5JTFM7FA",
  },
  {
    name: "Pinterest",
    role: "Evergreen pins, idea pins.",
    color: "#E60023",
    iconKind: "icons8",
    iconId: "63676",
  },
  {
    name: "Snapchat",
    role: "Local Spotlight + AR Lenses.",
    color: "#FFFC00",
    iconKind: "icons8",
    iconId: "23032",
  },
]

// 5. Web design / CMS / hosting
const WEB: Partner[] = [
  {
    name: "Next.js",
    role: "Custom-coded React with edge speed.",
    color: "#000000",
    iconKind: "icons8",
    iconId: "19294",
    href: "/services/web-design/custom-coded",
  },
  {
    name: "Webflow",
    role: "Premium no-code with visual CMS.",
    color: "#4353FF",
    iconKind: "asset",
    asset: "/partners/webflow-logo.svg",
    href: "/services/web-design/webflow",
  },
  {
    name: "WordPress",
    role: "Plugin ecosystem + WooCommerce.",
    color: "#21759B",
    iconKind: "icons8",
    iconId: "13664",
    href: "/services/web-design/wordpress",
  },
  {
    name: "Wix",
    role: "Wix Studio + Velo custom code.",
    color: "#0C6EFD",
    iconKind: "asset",
    asset: "/partners/wix-logo.png",
    href: "/services/web-design/wix",
  },
  {
    name: "Squarespace",
    role: "Polished template customization.",
    color: "#111111",
    iconKind: "monogram",
    monogram: "Sq",
    monogramBg: "#111111",
    monogramColor: "#FFFFFF",
    href: "/services/web-design/squarespace",
  },
  {
    name: "GoDaddy",
    role: "Domain + hosting + quick builds.",
    color: "#1BDBDB",
    iconKind: "asset",
    asset: "/partners/godaddy-logo.svg",
    href: "/services/web-design/godaddy",
  },
  {
    name: "Sanity",
    role: "Headless CMS for editorial teams.",
    color: "#F03E2F",
    iconKind: "monogram",
    monogram: "S",
    monogramBg: "#F03E2F",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Vercel",
    role: "Edge deployments for Next.js.",
    color: "#000000",
    iconKind: "monogram",
    monogram: "▲",
    monogramBg: "#000000",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Netlify",
    role: "JAMstack hosting + serverless.",
    color: "#00C7B7",
    iconKind: "asset",
    asset: "/partners/netlify-logo.png",
  },
]

// 6. Local + directory platforms
const LOCAL: Partner[] = [
  {
    name: "Google Business Profile",
    role: "Map Pack, calls, photos, posts.",
    color: "#34A853",
    iconKind: "asset",
    asset: "/partners/google-my-business-logo.webp",
    href: "/services/seo/local",
  },
  {
    name: "Yelp",
    role: "Reviews + local discovery + ads.",
    color: "#D32323",
    iconKind: "icons8",
    iconId: "20905",
  },
  {
    name: "Apple Business Connect",
    role: "Apple Maps + Spotlight presence.",
    color: "#000000",
    iconKind: "icons8",
    iconId: "17843",
  },
  {
    name: "Bing Places",
    role: "Microsoft + Copilot map results.",
    color: "#008373",
    iconKind: "icons8",
    iconId: "20416",
  },
  {
    name: "BBB",
    role: "Better Business Bureau accreditation.",
    color: "#0E5C9E",
    iconKind: "monogram",
    monogram: "BBB",
    monogramBg: "#0E5C9E",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Foursquare",
    role: "Geosocial check-in network.",
    color: "#F94877",
    iconKind: "icons8",
    iconId: "13913",
  },
  {
    name: "Angi",
    role: "Home-services lead network.",
    color: "#FF6153",
    iconKind: "monogram",
    monogram: "A",
    monogramBg: "#FF6153",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Houzz",
    role: "Home pros + design directory.",
    color: "#7AC142",
    iconKind: "monogram",
    monogram: "H",
    monogramBg: "#7AC142",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Healthgrades",
    role: "Provider reviews + scheduling.",
    color: "#C8102E",
    iconKind: "monogram",
    monogram: "Hg",
    monogramBg: "#C8102E",
    monogramColor: "#FFFFFF",
  },
]

// 7. AI search
const AI: Partner[] = [
  {
    name: "ChatGPT",
    role: "OpenAI's conversational search.",
    color: "#10A37F",
    iconKind: "monogram",
    monogram: "✦",
    monogramBg: "#10A37F",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Gemini",
    role: "Google's flagship AI assistant.",
    color: "#4285F4",
    iconKind: "monogram",
    monogram: "✦",
    monogramBg: "#4285F4",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Perplexity",
    role: "AI answer engine with citations.",
    color: "#20808D",
    iconKind: "monogram",
    monogram: "P",
    monogramBg: "#20808D",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Claude",
    role: "Anthropic's research-grade assistant.",
    color: "#D97757",
    iconKind: "monogram",
    monogram: "C",
    monogramBg: "#D97757",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Microsoft Copilot",
    role: "Bing + Edge + Office AI assistant.",
    color: "#0078D4",
    iconKind: "monogram",
    monogram: "Co",
    monogramBg: "#0078D4",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Google AI Overviews",
    role: "AI-generated answers above search.",
    color: "#4285F4",
    iconKind: "icons8",
    iconId: "17949",
  },
]

// 8. Analytics & reporting
const ANALYTICS: Partner[] = [
  {
    name: "Google Analytics 4",
    role: "Event-based traffic + conversion data.",
    color: "#E37400",
    iconKind: "icons8",
    iconId: "fcKpGwAbxxfP",
  },
  {
    name: "Looker Studio",
    role: "Live dashboards clients actually open.",
    color: "#4285F4",
    iconKind: "icons8",
    iconId: "86E4YHZQawQZ",
  },
  {
    name: "Search Console",
    role: "Real query, click, and rank data.",
    color: "#458CF5",
    iconKind: "icons8",
    iconId: "17949",
  },
  {
    name: "Tag Manager",
    role: "Conversion tracking without devs.",
    color: "#246FDB",
    iconKind: "icons8",
    iconId: "YuG5WvSJbGoq",
  },
  {
    name: "Semrush",
    role: "Keyword, backlink, competitor intel.",
    color: "#FF642D",
    iconKind: "asset",
    asset: "/partners/semrush-logo.png",
  },
  {
    name: "Call Tracking",
    role: "Source-specific phone numbers.",
    color: "#1677FF",
    iconKind: "icons8",
    iconId: "D4xyVOS1pmvV",
  },
  {
    name: "YouTube Studio",
    role: "Watch-time, retention, traffic sources.",
    color: "#FF0000",
    iconKind: "icons8",
    iconId: "19318",
  },
]

// 9. CRM + automation
const CRM: Partner[] = [
  {
    name: "HighLevel",
    role: "Our agency CRM, pipelines, automations.",
    color: "#0068FF",
    iconKind: "asset",
    asset: "/partners/highlevel-logo.png",
    href: "/solutions/lead-generation",
  },
  {
    name: "HubSpot",
    role: "Enterprise CRM + marketing hub.",
    color: "#FF7A59",
    iconKind: "monogram",
    monogram: "H",
    monogramBg: "#FF7A59",
    monogramColor: "#FFFFFF",
  },
  {
    name: "ServiceTitan",
    role: "Field-service operations platform.",
    color: "#1F2A44",
    iconKind: "monogram",
    monogram: "ST",
    monogramBg: "#1F2A44",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Jobber",
    role: "Scheduling + invoicing for trades.",
    color: "#1B7045",
    iconKind: "monogram",
    monogram: "J",
    monogramBg: "#1B7045",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Housecall Pro",
    role: "All-in-one home-service software.",
    color: "#15B0B0",
    iconKind: "monogram",
    monogram: "HP",
    monogramBg: "#15B0B0",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Zapier",
    role: "200+ tool integrations + workflows.",
    color: "#FF4A00",
    iconKind: "icons8",
    iconId: "by7K6EO4PeHT",
  },
  {
    name: "Make",
    role: "Visual no-code automation flows.",
    color: "#6D00CC",
    iconKind: "monogram",
    monogram: "M",
    monogramBg: "#6D00CC",
    monogramColor: "#FFFFFF",
  },
]

export const CATEGORIES: PartnerCategory[] = [
  {
    pill: "Paid Ads",
    heading: "Where we run paid ads.",
    paragraph:
      "Performance Max, Reels, Spark Ads, lead forms — wired to real conversion tracking, not vanity clicks.",
    items: PAID_ADS,
    ctaLabel: "See paid ads plans",
    ctaHref: "/services/paid-ads",
  },
  {
    pill: "Social Media",
    heading: "Where we publish content.",
    paragraph:
      "Native posting, short-form video, community replies — handled in-house so the brand voice stays one voice.",
    items: SOCIAL,
    ctaLabel: "See social management",
    ctaHref: "/services/social-media",
  },
  {
    pill: "Web Design",
    heading: "Where we build sites.",
    paragraph:
      "Pick the platform that fits your team — we have a deep-dive page for each one, no platform bias.",
    items: WEB,
    ctaLabel: "See web design options",
    ctaHref: "/services/web-design",
  },
  {
    pill: "Local & Directory",
    heading: "Where we get you found.",
    paragraph:
      "The Map Pack matters more than blue links for local businesses. We're listed, optimized, and reviewed everywhere that ships leads.",
    items: LOCAL,
    ctaLabel: "See local SEO",
    ctaHref: "/services/seo/local",
  },
  {
    pill: "AI Search",
    heading: "Where AI sends people.",
    paragraph:
      "ChatGPT, Gemini, Perplexity, Copilot, AI Overviews — half of search traffic is shifting here. We make sure your business gets cited.",
    items: AI,
    ctaLabel: "See AI search SEO",
    ctaHref: "/services/seo/ai-search",
  },
  {
    pill: "Analytics",
    heading: "How we measure everything.",
    paragraph:
      "Live dashboards. Source-specific phone numbers. Event-based conversion tracking. No spreadsheets emailed once a quarter.",
    items: ANALYTICS,
    ctaLabel: "See analytics setup",
    ctaHref: "/solutions/analytics",
  },
  {
    pill: "CRM & Automation",
    heading: "Where leads land and grow.",
    paragraph:
      "Every lead flows into a CRM with auto-replies, missed-call texts, review requests, and pipeline stages — no lead falls through.",
    items: CRM,
    ctaLabel: "See lead generation",
    ctaHref: "/solutions/lead-generation",
  },
]

// 10. Tools we design and ship in (chip strip)
export const TOOLS: Partner[] = [
  {
    name: "Figma",
    role: "Design systems + prototyping.",
    color: "#F24E1E",
    iconKind: "icons8",
    iconId: "zfHRZ6i1Wg0U",
  },
  {
    name: "Photoshop",
    role: "Image editing + retouching.",
    color: "#31A8FF",
    iconKind: "icons8",
    iconId: "13677",
  },
  {
    name: "Illustrator",
    role: "Vector logos + brand marks.",
    color: "#FF9A00",
    iconKind: "icons8",
    iconId: "13631",
  },
  {
    name: "After Effects",
    role: "Motion graphics + video.",
    color: "#9999FF",
    iconKind: "icons8",
    iconId: "108781",
  },
  {
    name: "Canva",
    role: "Quick-turn social creative.",
    color: "#00C4CC",
    iconKind: "icons8",
    iconId: "lAWjO4LexGga",
  },
  {
    name: "Loom",
    role: "Async video walkthroughs.",
    color: "#625DF5",
    iconKind: "monogram",
    monogram: "L",
    monogramBg: "#625DF5",
    monogramColor: "#FFFFFF",
  },
  {
    name: "Cursor",
    role: "AI-paired engineering.",
    color: "#000000",
    iconKind: "monogram",
    monogram: "▶",
    monogramBg: "#000000",
    monogramColor: "#FFFFFF",
  },
  {
    name: "ChatGPT",
    role: "Research, drafts, refactors.",
    color: "#10A37F",
    iconKind: "monogram",
    monogram: "✦",
    monogramBg: "#10A37F",
    monogramColor: "#FFFFFF",
  },
]
