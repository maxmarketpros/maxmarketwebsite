export type OnPageFaq = { q: string; a: string }

export const onPageFaqs: OnPageFaq[] = [
  {
    q: "What is On-Page SEO and why does it matter for Google rankings?",
    a: "On-Page SEO is the practice of optimizing everything Google can read directly on a page — title tags, meta descriptions, H1s, heading hierarchy, body content, schema markup, internal linking, URL structure, and image alt text. It's the single biggest lever you fully control. Off-page SEO (backlinks, mentions) and technical SEO (crawl, speed, indexing) both matter, but without solid on-page SEO Google can't understand what each page is about — so even strong backlinks and fast load times won't rank you.",
  },
  {
    q: "What's the difference between on-page SEO, off-page SEO, and technical SEO?",
    a: "On-page SEO is content + HTML structure on a given URL: titles, meta descriptions, headings, body copy, schema, internal links, alt text. Off-page SEO is signals from outside your site — backlinks, brand mentions, citations, reviews. Technical SEO is the plumbing — crawlability, indexability, Core Web Vitals, sitemaps, robots.txt, canonical tags. All three compound. We specialize in making on-page SEO the foundation the other two build on.",
  },
  {
    q: "How long does on-page SEO take to improve rankings?",
    a: "You usually see first movement in 2–4 weeks once optimized titles, meta descriptions, headings, and schema are crawled. Significant ranking gains on competitive queries typically land in 60–120 days because Google re-evaluates relevance as engagement data (CTR from SERP, dwell time, scroll depth) accumulates. Long-tail and lower-competition queries often move inside 30 days. We give every client a rank-tracking dashboard so you can watch it happen.",
  },
  {
    q: "Do I need schema markup, and which types should my site use?",
    a: "Yes — schema markup helps Google classify pages into the right entity types and unlocks rich SERP features (stars, FAQ drawers, breadcrumb trails, site links). At minimum every site should use Organization, LocalBusiness, WebSite, and BreadcrumbList. Service businesses add Service + OfferCatalog. Content pages get Article + FAQPage + HowTo where relevant. Product pages get Product + AggregateRating + Review. We deploy JSON-LD schema on every page we touch and validate it via Google's Rich Results Test.",
  },
  {
    q: "How often should on-page content be updated or refreshed?",
    a: "Core service pages should be reviewed every 90 days and refreshed whenever rankings, CTR, or conversion dips — or when competitors publish better. Blog posts on time-sensitive topics need quarterly refreshes. Evergreen content can go 6–12 months between updates. Google rewards recency on queries with implied freshness intent (pricing, guides, comparisons) and we schedule refreshes accordingly so your on-page SEO doesn't decay.",
  },
  {
    q: "What is E-E-A-T and how do you build it into on-page SEO?",
    a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trust — Google's quality framework, especially weighted for service and health/finance content. We build it on-page via bylined author boxes with credentials, publish-date + last-updated stamps, first-person experience signals in body copy, Organization + Person schema, trust badges, review integrations, citations to authoritative sources, and a visible contact + address block. Strong E-E-A-T is what makes long-form content actually rank past page two.",
  },
  {
    q: "Can you optimize existing pages, or do you rewrite from scratch?",
    a: "Both — we start with an audit. If a page has solid intent match and decent authority signals, we do a surgical on-page SEO pass (titles, meta, schema, headings, internal links, content gaps) and keep the URL. If a page has fundamental intent mismatch, thin content, or keyword cannibalization with another URL, we rewrite from scratch or consolidate URLs with 301 redirects. Our audit output tells you exactly which pages get which treatment before we touch anything.",
  },
  {
    q: "How does on-page SEO support topical authority and content clusters?",
    a: "Topical authority is Google's model of how deeply a site covers a subject. Content clusters (pillar page + supporting cluster pages) are the architectural way to build it. On-page SEO is how you make each cluster legible: consistent entity usage across pages, semantic internal linking between pillar and clusters, schema that declares topical relationships (sameAs, mentions, about), and heading hierarchies that reinforce the topic tree. Done right, every new cluster page lifts the pillar's ranking — and the pillar lifts every cluster.",
  },
]
