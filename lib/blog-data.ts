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
    shortTitle: "AI Search Optimization (GEO) 2026",
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
      "google-reviews-conversion-lever-2026",
      "custom-coded-vs-wix-squarespace-irvine",
    ],
  },
  {
    slug: "google-reviews-conversion-lever-2026",
    title:
      "Google Reviews: The #1 Conversion Lever for Service Businesses in 2026",
    shortTitle: "Google Reviews: The #1 conversion lever",
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
      "ai-search-optimization-2026",
      "google-ads-irvine-cost-2026",
    ],
  },
  {
    slug: "google-ads-irvine-cost-2026",
    title:
      "Google Ads in Irvine, CA: 2026 Cost Benchmarks & Campaign-Type Guide for Home Services",
    shortTitle: "Google Ads in Irvine: 2026 cost guide",
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
      "custom-coded-vs-wix-squarespace-irvine",
      "google-reviews-conversion-lever-2026",
    ],
  },
  {
    slug: "custom-coded-vs-wix-squarespace-irvine",
    title:
      "Custom-Coded vs Wix & Squarespace for Irvine Service Businesses: 2026 Speed, SEO & ROI Showdown",
    shortTitle: "Custom-coded vs Wix & Squarespace",
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
      "ai-search-optimization-2026",
      "google-ads-irvine-cost-2026",
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
