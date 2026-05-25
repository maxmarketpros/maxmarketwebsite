export type BlogCategory =
  | "Web Design"
  | "Google Ads"
  | "Local SEO"
  | "AI Search"
  | "Strategy"
  | "Industry Guides"

export type BlogAuthor = {
  name: string
  role: string
  initial: string
}

export type BlogPost = {
  slug: string
  title: string
  shortTitle?: string
  seoTitle?: string
  description: string
  excerpt: string
  category: BlogCategory
  tags: string[]
  datePublished: string
  dateModified?: string
  readMinutes: number
  wordCount: number
  author: BlogAuthor
  hero: {
    iconId: string
    altText: string
    bgTint: "blue" | "cyan"
  }
  featured?: boolean
  ctaService?: { label: string; href: string }
  related: string[]
}

const JOSEPH: BlogAuthor = {
  name: "Joseph Stirling",
  role: "Founder, Max Market Pros",
  initial: "JS",
}

export const posts: BlogPost[] = [
  {
    slug: "ai-search-optimization-2026",
    title:
      "AI Search Optimization in 2026: How to Get Cited by ChatGPT, Perplexity & Google AI Overviews",
    shortTitle: "How to Get Cited by ChatGPT, Perplexity, and Google AI Overviews",
    seoTitle: "AI Search Optimization (GEO) in 2026: A Playbook",
    description:
      "Get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews in 2026. The schema, content patterns, and on-page moves that earn AI citations — with charts.",
    excerpt:
      "What LLMs actually look for, the schema types that get cited, and the 8-point audit to make your site quotable by ChatGPT, Perplexity, and Google AI Overviews.",
    category: "AI Search",
    tags: [
      "AI Search",
      "GEO",
      "ChatGPT",
      "Perplexity",
      "AI Overviews",
      "Schema",
      "Generative Engine Optimization",
    ],
    datePublished: "2026-05-21",
    dateModified: "2026-05-21",
    readMinutes: 13,
    wordCount: 1950,
    author: JOSEPH,
    hero: {
      iconId: "114322",
      altText: "AI brain illustration representing generative search optimization",
      bgTint: "blue",
    },
    featured: true,
    ctaService: {
      label: "See our AI search service",
      href: "/services/seo/ai-search",
    },
    related: [
      "b2b-saas-seo-irvine-spectrum",
      "google-reviews-conversion-lever-2026",
    ],
  },
  {
    slug: "google-reviews-conversion-lever-2026",
    title:
      "Google Reviews: The #1 Conversion Lever for Service Businesses in 2026",
    shortTitle: "Why Google Reviews Are Your #1 Conversion Lever",
    seoTitle: "Google Reviews in 2026: Service-Business Reputation Playbook",
    description:
      "Why Google reviews now drive both ranking and conversion — the star-rating CTR curve, the velocity rule, and the 5-step Reputation Engine that runs itself.",
    excerpt:
      "The CTR curve at 4.5 stars, why fresh velocity beats total count, and the 5-step Reputation Engine that earns reviews on autopilot.",
    category: "Local SEO",
    tags: [
      "Google Reviews",
      "Reputation",
      "Local SEO",
      "Google Business Profile",
      "GBP",
      "Service Businesses",
    ],
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    readMinutes: 11,
    wordCount: 1650,
    author: JOSEPH,
    hero: {
      iconId: "63692",
      altText: "Five-star rating illustration representing customer reviews",
      bgTint: "cyan",
    },
    ctaService: {
      label: "See our review generation service",
      href: "/services/social-media/review-generation",
    },
    related: [
      "irvine-med-spa-seo-map-pack",
      "dental-seo-irvine-map-pack",
    ],
  },
  {
    slug: "google-ads-irvine-cost-2026",
    title:
      "Google Ads in Irvine, CA: 2026 Cost Benchmarks & Campaign-Type Guide for Home Services",
    shortTitle: "What Google Ads Actually Cost in Irvine (2026)",
    seoTitle: "Google Ads in Irvine, CA (2026): Cost & Campaign Guide",
    description:
      "2026 Google Ads cost benchmarks for Irvine home services — median CPCs by trade, LSA vs Search vs PMax, and the $5K/mo mix that books jobs in Orange County.",
    excerpt:
      "Median CPCs by trade, the right mix for a $5K Irvine budget, and the campaign decisions that decide your cost-per-booked-job.",
    category: "Google Ads",
    tags: ["Irvine", "Google Ads", "Orange County", "Home Services", "PPC", "LSA"],
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    readMinutes: 13,
    wordCount: 1850,
    author: JOSEPH,
    hero: {
      iconId: "13794",
      altText: "Map marker representing local Google Ads targeting in Irvine, CA",
      bgTint: "cyan",
    },
    ctaService: {
      label: "See our Google Ads management",
      href: "/services/paid-ads/google-ads",
    },
    related: [
      "irvine-med-spa-seo-map-pack",
      "restaurant-seo-irvine-uci-spectrum",
    ],
  },
  {
    slug: "custom-coded-vs-wix-squarespace-irvine",
    title:
      "Custom-Coded vs Wix & Squarespace for Irvine Service Businesses: 2026 Speed, SEO & ROI Showdown",
    shortTitle: "Custom-Coded vs Wix & Squarespace, Honestly",
    seoTitle: "Custom-Coded vs Wix & Squarespace (Irvine, CA 2026)",
    description:
      "We pit a custom Next.js build against Wix, Squarespace and WordPress on Lighthouse, Core Web Vitals, SEO control and 3-year TCO — for Irvine, CA service businesses.",
    excerpt:
      "Lighthouse, Core Web Vitals, SEO control and 3-year TCO — head-to-head data for Irvine service businesses choosing a website stack.",
    category: "Web Design",
    tags: [
      "Irvine",
      "Custom Coded",
      "Wix",
      "Squarespace",
      "WordPress",
      "Web Design",
      "Core Web Vitals",
    ],
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    readMinutes: 11,
    wordCount: 1650,
    author: JOSEPH,
    hero: {
      iconId: "15178",
      altText: "Speedometer representing custom-coded website performance",
      bgTint: "blue",
    },
    ctaService: {
      label: "See our custom website plans",
      href: "/plans/custom-website",
    },
    related: [
      "b2b-saas-seo-irvine-spectrum",
      "bilingual-local-seo-irvine",
    ],
  },
  {
    slug: "irvine-med-spa-seo-map-pack",
    title:
      "Irvine Med Spa SEO: The 90-Day Map Pack Playbook That Beats Newport Beach",
    shortTitle: "Why Irvine Med Spas Lose to Newport Beach",
    seoTitle: "Irvine Med Spa SEO: 90-Day Map Pack Playbook (2026)",
    description:
      "How Irvine med spas can claw back Map Pack share from Newport Beach in 90 days. The seven GBP gaps, service-page-per-treatment math, review velocity targets, and a week-by-week rollout.",
    excerpt:
      "Seven GBP fields most Irvine clinics leave empty, the service-page rule that beats one mega page, review-velocity targets, and a 90-day rollout that takes Map Pack share back from Fashion Island.",
    category: "Local SEO",
    tags: [
      "Irvine",
      "Med Spa",
      "Local SEO",
      "Google Business Profile",
      "Map Pack",
      "Aesthetic",
      "Botox",
    ],
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
    readMinutes: 14,
    wordCount: 2280,
    author: JOSEPH,
    hero: {
      iconId: "23042",
      altText: "Flat lotus flower illustration representing med spa local SEO in Irvine",
      bgTint: "cyan",
    },
    ctaService: {
      label: "See our local SEO service",
      href: "/services/seo/local",
    },
    related: [
      "google-reviews-conversion-lever-2026",
      "dental-seo-irvine-map-pack",
    ],
  },
  {
    slug: "dental-seo-irvine-map-pack",
    title:
      "Dental SEO in Irvine: A 6-Month Roadmap to Beat 60+ Practices in the Map Pack",
    shortTitle: "Beating 60+ Irvine Dentists in the Map Pack",
    seoTitle: "Dental SEO in Irvine (2026): 6-Month Map Pack Roadmap",
    description:
      "Sixty-plus dental practices fight for Irvine Map Pack slots. Here is the 6-month plan: neighborhood heat-map, service-page-per-procedure rule, review velocity, and PPC vs SEO economics.",
    excerpt:
      "Where Irvine dental patients actually search from, the five GBP gaps that cost ranking, the service-page rule, review-velocity benchmarks, and the PPC vs SEO math for a busy practice.",
    category: "Local SEO",
    tags: [
      "Irvine",
      "Dental",
      "Local SEO",
      "Google Business Profile",
      "Map Pack",
      "Healthcare",
      "Dentist Marketing",
    ],
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    readMinutes: 13,
    wordCount: 2140,
    author: JOSEPH,
    hero: {
      iconId: "14868",
      altText: "Flat tooth illustration representing dental local SEO in Irvine",
      bgTint: "cyan",
    },
    ctaService: {
      label: "See our local SEO service",
      href: "/services/seo/local",
    },
    related: [
      "irvine-med-spa-seo-map-pack",
      "google-reviews-conversion-lever-2026",
    ],
  },
  {
    slug: "restaurant-seo-irvine-uci-spectrum",
    title:
      "Restaurant SEO in Irvine: The Hyperlocal Playbook for UCI, the Spectrum, and Diamond Jamboree",
    shortTitle: "Ranking for \"Best Korean BBQ in Irvine\"",
    seoTitle: "Restaurant SEO in Irvine (2026): UCI & Spectrum Playbook",
    description:
      "How Irvine restaurants win Google Maps near UCI, the Spectrum, Diamond Jamboree, and UTC. GBP for restaurants, dish-photo strategy, the AI Overview play, and UCI calendar seasonality.",
    excerpt:
      "Why the four Irvine restaurant clusters each fight a different SEO battle, the GBP fields that actually move the needle, and the AI Overview citation tactics restaurants keep missing.",
    category: "Industry Guides",
    tags: [
      "Irvine",
      "Restaurants",
      "Local SEO",
      "Google Business Profile",
      "UCI",
      "Hyperlocal",
      "AI Overviews",
    ],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readMinutes: 12,
    wordCount: 2010,
    author: JOSEPH,
    hero: {
      iconId: "20466",
      altText: "Flat chef hat illustration representing restaurant SEO in Irvine",
      bgTint: "cyan",
    },
    ctaService: {
      label: "See our local SEO service",
      href: "/services/seo/local",
    },
    related: [
      "bilingual-local-seo-irvine",
      "google-reviews-conversion-lever-2026",
    ],
  },
  {
    slug: "bilingual-local-seo-irvine",
    title:
      "Bilingual Local SEO in Irvine: Winning Mandarin, Korean, and Farsi Search in 2026",
    shortTitle: "The Bilingual Search Edge Most Irvine Businesses Miss",
    seoTitle: "Bilingual Local SEO in Irvine (2026): Mandarin, Korean, Farsi",
    description:
      "Half of Irvine speaks a non-English language at home. Here is how to actually rank for Mandarin, Korean, and Farsi search, from GBP language settings to hreflang to bilingual reviews.",
    excerpt:
      "Fifty-one percent of Irvine speaks a non-English language at home. The neighborhood-by-language map, the GBP rules nobody reads, and the hreflang setup that does not tank your English rankings.",
    category: "Local SEO",
    tags: [
      "Irvine",
      "Bilingual",
      "Multilingual SEO",
      "Local SEO",
      "Mandarin",
      "Korean",
      "Farsi",
      "Hreflang",
    ],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readMinutes: 11,
    wordCount: 1920,
    author: JOSEPH,
    hero: {
      iconId: "31016",
      altText: "Flat language and translation illustration representing bilingual local SEO in Irvine",
      bgTint: "blue",
    },
    ctaService: {
      label: "See our local SEO service",
      href: "/services/seo/local",
    },
    related: [
      "irvine-med-spa-seo-map-pack",
      "restaurant-seo-irvine-uci-spectrum",
    ],
  },
  {
    slug: "best-digital-marketing-agencies-irvine",
    title:
      "The Best Digital Marketing Agencies in Irvine: A Fair 2026 Comparison",
    shortTitle: "How Max Market Pros Stacks Up Against Irvine's Top Agencies",
    seoTitle: "Best Digital Marketing Agencies in Irvine (2026) - Honest Comparison",
    description:
      "An honest, sourced comparison of the top digital marketing agencies serving Irvine in 2026, including Max Market Pros, KlientBoost, Ignite Visibility, Coalition Technologies, Thrive, and Lounge Lizard.",
    excerpt:
      "Five agencies show up on every 'best digital marketing agency Irvine' list. Here is the honest, sourced look at each one, who they are built for, and where Max Market Pros fits in the picture.",
    category: "Industry Guides",
    tags: [
      "Irvine",
      "Digital Marketing Agency",
      "Agency Comparison",
      "Orange County",
      "KlientBoost",
      "Ignite Visibility",
      "Coalition Technologies",
    ],
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
    readMinutes: 14,
    wordCount: 3300,
    author: JOSEPH,
    hero: {
      iconId: "12928",
      altText: "Flat scales illustration representing a fair comparison of Irvine digital marketing agencies",
      bgTint: "blue",
    },
    ctaService: {
      label: "Schedule a comparison call",
      href: "/contact",
    },
    related: [
      "irvine-med-spa-seo-map-pack",
      "b2b-saas-seo-irvine-spectrum",
      "google-reviews-conversion-lever-2026",
    ],
  },
  {
    slug: "b2b-saas-seo-irvine-spectrum",
    title:
      "B2B SaaS SEO in Irvine: A Spectrum & IBC Playbook for Series-A Tech Startups in 2026",
    shortTitle: "The Spectrum Playbook for B2B SaaS Search",
    seoTitle: "B2B SaaS SEO in Irvine (2026): The Spectrum & IBC Playbook",
    description:
      "How seed-to-Series-B SaaS startups in Irvine Spectrum and the IBC win B2B search in the zero-click era. Buyer-question content, AEO, programmatic pages, and the 12-month roadmap.",
    excerpt:
      "SEO is splitting in two: keyword search and AI engine optimization. Here is how Irvine Spectrum and IBC SaaS startups should rebuild their content engine for a zero-click world.",
    category: "AI Search",
    tags: [
      "Irvine",
      "B2B SaaS",
      "AI Search",
      "GEO",
      "AEO",
      "Tech Startups",
      "Irvine Spectrum",
      "Content Marketing",
    ],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readMinutes: 15,
    wordCount: 2360,
    author: JOSEPH,
    hero: {
      iconId: "15175",
      altText: "Flat rocket illustration representing B2B SaaS startup SEO in Irvine",
      bgTint: "blue",
    },
    ctaService: {
      label: "See our AI search service",
      href: "/services/seo/ai-search",
    },
    related: [
      "ai-search-optimization-2026",
      "bilingual-local-seo-irvine",
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getFeaturedPost(): BlogPost {
  return posts.find((p) => p.featured) ?? posts[0]
}

export function getOtherPosts(): BlogPost[] {
  const featured = getFeaturedPost()
  return posts.filter((p) => p.slug !== featured.slug)
}

export function getRelated(slug: string, limit = 2): BlogPost[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  return post.related
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit)
}

export function getCategories(): BlogCategory[] {
  return Array.from(new Set(posts.map((p) => p.category)))
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z")
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}
