export type TechnicalFaq = {
  q: string
  a: string
}

// Answers contain inline sibling-service links (HTML anchor tags kept as markdown-style tokens
// rendered verbatim; components turn them into real <a> via dangerouslySetInnerHTML for the FAQ page).
// Here we use plain <a href="...">text</a> HTML so the accordion can render with dangerouslySetInnerHTML
// AND the JSON-LD FAQPage exports clean text.

export const technicalFaqs: TechnicalFaq[] = [
  {
    q: "What is technical SEO and how does it differ from on-page SEO?",
    a: 'Technical SEO is the foundation layer — site speed, Core Web Vitals, crawlability, indexation, schema markup, robots.txt, sitemaps, redirects, and mobile-first readiness. <a href="/services/seo/on-page">On-page SEO</a> sits on top of that foundation, tuning the content + HTML Google reads on each URL (titles, meta, headings, internal links). Technical SEO makes the site indexable; on-page SEO makes each indexed page rankable. You need both.',
  },
  {
    q: "How do Core Web Vitals affect Google rankings?",
    a: "Core Web Vitals — LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift) — are confirmed Google ranking factors. They measure real user experience: load speed, responsiveness, and visual stability. Pages that pass all three get a small ranking boost and, more importantly, better user engagement (lower bounce, higher dwell), which compounds into sustained ranking gains. Targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.",
  },
  {
    q: "What is crawl budget and does my site have it?",
    a: "Crawl budget is the number of URLs Googlebot will crawl on your site in a given time window. Smaller sites (under 1,000 pages) rarely hit crawl-budget limits. But once you pass a few thousand URLs — or have heavy JavaScript, faceted search, infinite scroll, or lots of redirect chains — crawl budget starts getting wasted on low-value pages. Technical SEO fixes that: pruning low-quality URLs, flattening redirects, cleaning robots.txt, and pushing priority URLs via your sitemap.",
  },
  {
    q: "Do I need schema markup on every page?",
    a: 'Every important page, yes. At minimum: Organization + WebSite on the homepage, BreadcrumbList sitewide, Article on blog posts, Service on service pages, LocalBusiness for geo-targeted pages, FAQPage where you have FAQs, and Product + Review on commerce. Schema unlocks SERP rich features (stars, FAQ dropdowns, sitelinks) and feeds Google\'s knowledge graph. We deploy JSON-LD schema on every URL we touch and validate it with the Rich Results Test. See also <a href="/services/seo/on-page">on-page SEO</a> for how we pair schema with content optimization.',
  },
  {
    q: "How do I fix indexation issues in Google Search Console?",
    a: "Start by categorizing the issue in the GSC Pages report: Indexed / Duplicate / Crawled-not-indexed / Discovered-not-indexed / Excluded by noindex / Blocked by robots. Each has a different fix. Duplicate content usually needs canonical tags. Crawled-not-indexed often means thin or low-quality content — upgrade the page or noindex it. Discovered-not-indexed usually points to crawl-budget or authority issues (where good <a href=\"/services/seo/off-page\">off-page SEO</a> helps). We run a full coverage audit as part of every technical SEO engagement.",
  },
  {
    q: "What's the difference between robots.txt and the noindex tag?",
    a: "robots.txt controls crawl — it tells Googlebot which URLs not to crawl. noindex controls index — it tells Google not to include the page in search results. Critical distinction: if you block a page in robots.txt, Google can't crawl it to see the noindex tag, so the page can remain indexed indefinitely. For pages you want removed from Google, use noindex (and let Google crawl the page) — not robots.txt disallow. Save robots.txt for truly crawl-wasteful URLs (admin, faceted search, internal search).",
  },
  {
    q: "How fast does my site need to be?",
    a: "LCP under 2.5s on mobile is the Google threshold; we target under 1.8s as a healthy margin. INP under 200ms, CLS under 0.1. But speed beyond thresholds still matters — every 100ms of faster LCP typically lifts conversion by 1–2% on service-business pages. We optimize images to AVIF, preload hero assets, defer non-critical JS, inline critical CSS, and tune Core Web Vitals on mobile (where most searches happen).",
  },
  {
    q: "How does technical SEO support AI search visibility?",
    a: 'Generative AI crawlers (GPT-Bot, Google-Extended, Claude-Web, Perplexity) need the same clean fundamentals: fast pages, crawlable HTML, clear semantic structure, schema markup, and consistent entity signals. Technical SEO gets you cited in AI answers by making your content parseable. We also tune robots.txt for AI crawler policy (allow/block per bot) and reinforce schema so AI systems can extract facts cleanly. See also <a href="/services/seo/ai-search">AI search optimization</a>.',
  },
]
