import type { FaqCategoryId } from "./faq-categories"

export type FaqItem = {
  id: string
  q: string
  a: string
  category: FaqCategoryId
}

export const faqItems: FaqItem[] = [
  // ─────────── 1. Getting started ───────────
  {
    id: "what-does-max-market-pros-do",
    category: "getting-started",
    q: "What does Max Market Pros do?",
    a: "Max Market Pros is a done-for-you local marketing agency for service businesses. We build the website, run the SEO, manage the Google and Meta ads, generate the reviews, and produce the social content — all under one roof, one strategist, and one monthly bill. Trusted by 500+ local service businesses. If you'd rather pick à la carte, our [calculator](/plans/a-la-carte) gives you a real estimate in seconds.",
  },
  {
    id: "who-is-max-market-pros-best-for",
    category: "getting-started",
    q: "Who is Max Market Pros best for?",
    a: "We're built for U.S. and Canadian local service businesses — [contractors](/industries/contractors), [home services](/industries/home-services), [medical practices](/industries/medical), [restaurants](/industries/restaurants), and [automotive shops](/industries/automotive). If you sell to a geographic service area and you need the phone to ring with real, qualified jobs, you're in the right place. If you're a national SaaS or an ecommerce-only brand, we're probably not the right fit.",
  },
  {
    id: "is-the-free-marketing-audit-actually-free",
    category: "getting-started",
    q: "Is the free marketing audit actually free?",
    a: "Yes — fully free, zero commitment, no card required. We pull your current Google Business Profile, ranking grid, site speed, on-page SEO, and ad account performance, then walk you through the gaps on a 20-minute call. The call is run by a senior strategist, not a closer. If we're not the right fit, we'll tell you. [Book the audit](/contact/schedule) and see what's actually moving the needle.",
  },
  {
    id: "how-do-i-get-started-with-max-market-pros",
    category: "getting-started",
    q: "How do I get started with Max Market Pros?",
    a: "Three steps: (1) [book a free 20-minute strategy call](/contact/schedule), (2) we audit your site, GBP, rankings, and ad accounts before the call, (3) we walk you through a 90-day plan and a real quote. If you'd rather skip the call entirely, you can configure your own package with the [à la carte calculator](/plans/a-la-carte) and we'll start on a fixed launch date.",
  },
  {
    id: "where-is-max-market-pros-located",
    category: "getting-started",
    q: "Where is Max Market Pros located and do you work remotely?",
    a: "We're headquartered in Irvine, California, and we work remotely with clients across the United States and Canada. Everything — kickoff, content reviews, monthly reporting, strategy calls — runs over Zoom and shared dashboards, so you get the same senior team whether you're down the street or three time zones away. Office hours are Mon–Fri, 8:30am–3:30pm Pacific, with [support](/contact/support) available outside that window.",
  },

  // ─────────── 2. Plans & pricing ───────────
  {
    id: "how-much-does-it-cost-to-work-with-max-market-pros",
    category: "plans-and-pricing",
    q: "How much does it cost to work with Max Market Pros?",
    a: "Plans start at <strong>$199/mo</strong> with [StarterMark](/plans/startermark) and scale through [LocalMark ($499/mo)](/plans/localmark), [ServicePro ($899/mo)](/plans/servicepro), and [Signature ($1,499/mo)](/plans/signature). Every line item is published — no bundled mystery. If you'd rather pay once, our [à la carte calculator](/plans/a-la-carte) gives you a real estimate in seconds without a sales call, and [custom websites](/plans/custom-website) run from $1,200 to $7,500 depending on page count.",
  },
  {
    id: "what-is-the-difference-between-startermark-localmark-servicepro-signature",
    category: "plans-and-pricing",
    q: "What's the difference between StarterMark, LocalMark, ServicePro, and Signature?",
    a: "[StarterMark](/plans/startermark) is a 5-page site + 10 keywords + GBP setup — the foundation. [LocalMark](/plans/localmark) adds 11 pages, 40+ directories, chat widget, and dashboard reporting. [ServicePro](/plans/servicepro) is our most popular — 21 pages, 70+ directories, review generation, social posting, AI chatbot, and analytics. [Signature](/plans/signature) is the flagship — 51 pages, custom backlinks, quarterly PR, Google Ads included, dedicated team, and full content production every month.",
  },
  {
    id: "which-marketing-plan-is-right-for-a-new-service-business",
    category: "plans-and-pricing",
    q: "Which marketing plan is right for a brand-new service business?",
    a: "Most brand-new service businesses start with [StarterMark](/plans/startermark) at $199/mo or [LocalMark](/plans/localmark) at $499/mo — enough to launch a proper site, claim and optimize your [Google Business Profile](/services/seo/local), and get listed in the directories that actually matter for local rankings. Once your phone starts ringing consistently, upgrading to [ServicePro](/plans/servicepro) adds reviews, social, and analytics. The free strategy call will tell you exactly where to start.",
  },
  {
    id: "can-i-upgrade-downgrade-or-add-services-later",
    category: "plans-and-pricing",
    q: "Can I upgrade, downgrade, or add services later?",
    a: "Yes — every plan is designed to flex. You can move up from [StarterMark](/plans/startermark) to [Signature](/plans/signature) (or anywhere in between) when you're ready, and you can layer in [à la carte add-ons](/plans/a-la-carte) like extra review generation, a video drop, or a Google Ads sprint without re-papering anything. Downgrades are allowed too — just give us a heads-up so we can rebalance the production calendar.",
  },
  {
    id: "are-there-hidden-fees-setup-charges-or-long-contracts",
    category: "plans-and-pricing",
    q: "Are there hidden fees, setup charges, or long contracts?",
    a: "No. Every plan publishes every line item — no setup fees, no surprise charges, no fine print. Pricing on [our plans page](/plans) is what you pay, and the [à la carte calculator](/plans/a-la-carte) gives you a real estimate in seconds without a sales call. Ad spend on Google or Meta is billed separately by the platform (you keep that card on file), so you always know exactly where every dollar goes.",
  },

  // ─────────── 3. Websites ───────────
  {
    id: "how-long-does-it-take-to-build-a-new-website",
    category: "websites",
    q: "How long does it take to build a new website?",
    a: "Fixed launch dates, set on the first call: roughly <strong>2–3 weeks</strong> for a 5-page site, <strong>4–5 weeks</strong> for an 11-page site, <strong>6 weeks</strong> for 21 pages, and <strong>8 weeks</strong> for our 51-page authority build. No 'we'll see' timelines — you get a launch date on day one and weekly progress, not a black box. See full scope and pricing on our [custom website page](/plans/custom-website).",
  },
  {
    id: "will-i-own-my-website-when-you-build-it",
    category: "websites",
    q: "Will I own my website when you build it?",
    a: "Yes — you own the site, the domain, the CMS access, and every asset we produce. We don't lock you into a proprietary builder you can't leave. You can stay on a [plan](/plans) for ongoing SEO, content, and ads, or pay once via [à la carte](/plans/a-la-carte) and take the keys. Either way, you walk away with a real website on a real platform — not a rental.",
  },
  {
    id: "what-website-platforms-do-you-build-on",
    category: "websites",
    q: "What website platforms do you build on — WordPress, Webflow, or custom code?",
    a: "All of them. We design on [WordPress](/services/web-design/wordpress), [Webflow](/services/web-design/webflow), [Squarespace](/services/web-design/squarespace), [Wix](/services/web-design/wix), [GoDaddy](/services/web-design/godaddy), or [fully custom-coded](/services/web-design/custom-coded) — whichever fits your team's comfort level and budget. For most service businesses we recommend WordPress or a custom-designed build for SEO control. The strategy call covers tradeoffs so you don't get talked into a platform you can't maintain.",
  },
  {
    id: "can-you-redesign-my-existing-website-instead-of-starting-over",
    category: "websites",
    q: "Can you redesign my existing website instead of starting over?",
    a: "Often yes — if your existing CMS is solid (WordPress, Webflow, Squarespace) and your domain has earned SEO value, redesigning is usually smarter than starting over. We audit pagespeed, on-page SEO, schema, and conversion paths first, then rebuild the templates and rewire the IA without losing your backlinks. If your current site is on a dead-end builder, we'll be straight about the tradeoffs. [Book the audit](/contact/schedule) to see which path makes sense.",
  },
  {
    id: "are-your-websites-mobile-friendly-and-fast-enough-for-google",
    category: "websites",
    q: "Are your websites mobile-friendly and fast enough for Google?",
    a: "Yes — every site we ship is mobile-first, scores in the green on Core Web Vitals, and loads in <strong>under 1.8 seconds</strong> on mobile. We bake in service-area schema, click-to-call CTAs, trust signals, and review widgets on day one, which is what actually moves [local search rankings](/services/seo/local) and conversion rate together. Speed and mobile UX aren't an afterthought — they're the design constraint we start from.",
  },

  // ─────────── 4. SEO & local search ───────────
  {
    id: "how-long-does-seo-take-to-show-results",
    category: "seo",
    q: "How long does SEO take to show results?",
    a: "Most [local SEO](/services/seo/local) campaigns show measurable movement in <strong>30–60 days</strong> and meaningful Map Pack lift in <strong>90–120 days</strong>. Brand-new sites, hyper-competitive metros, and 'near me' searches dominated by national chains take longer — but you get a realistic 90-day forecast on the free audit. If you need leads in week one, pair SEO with [Google Ads](/services/paid-ads/google-ads) so the pipeline is filling while organic compounds.",
  },
  {
    id: "what-is-the-difference-between-local-seo-and-regular-seo",
    category: "seo",
    q: "What's the difference between local SEO and regular SEO?",
    a: "[Local SEO](/services/seo/local) targets a specific geographic area — the Google Map Pack, 'near me' searches, and city-level service pages. Traditional SEO targets the broader organic results without location intent. For service businesses, local SEO typically drives <strong>5–10× more qualified leads</strong> because the searches are higher-intent and lower-competition. Most of our clients run local SEO as the primary engine with [on-page](/services/seo/on-page) and [technical SEO](/services/seo/technical) supporting it.",
  },
  {
    id: "how-do-you-get-my-business-into-the-google-map-pack",
    category: "seo",
    q: "How do you get my business into the Google Map Pack?",
    a: "Three layers, all running together: a fully optimized [Google Business Profile](/services/seo/local), consistent NAP citations across <strong>70+ directories</strong>, and on-site signals (service-area pages, schema, reviews, location-specific landing pages). We handle all three from [LocalMark](/plans/localmark) up, and we run monthly grid tracking so you can see your top-3 share city-block by city-block — not just a single ranking number.",
  },
  {
    id: "do-you-optimize-for-chatgpt-and-google-ai-overviews",
    category: "seo",
    q: "Do you optimize for AI search engines like ChatGPT and Google AI Overviews?",
    a: "Yes — that's a service line of its own called [AI search optimization](/services/seo/ai-search). AI engines synthesize answers instead of returning links, so they reward structured data, authoritative answers, entity-based SEO, and consistent brand mentions across the web. We tune your site to be cited and recommended inside ChatGPT, Gemini, Perplexity, and Google's AI Overviews. It pairs naturally with [traditional SEO](/services/seo) — most clients run both.",
  },
  {
    id: "do-you-handle-google-business-profile-gbp-optimization",
    category: "seo",
    q: "Do you handle Google Business Profile (GBP) optimization?",
    a: "Yes — full GBP setup, claim, and ongoing optimization are baked into every plan from [StarterMark](/plans/startermark) up. That includes categories, services, products, photo schedule, weekly Google Posts, Q&A seeding, and review response. It's also available [à la carte](/plans/a-la-carte) as a one-time $1,800 GBP optimization if you only need the heavy lift up front. GBP is the #1 ranking lever for [local search](/services/seo/local) — we treat it that way.",
  },

  // ─────────── 5. Paid ads ───────────
  {
    id: "do-you-run-google-ads-facebook-ads-or-both",
    category: "paid-ads",
    q: "Do you run Google Ads, Facebook Ads, or both?",
    a: "Both, plus Instagram and YouTube. We run [Google Ads](/services/paid-ads/google-ads) for high-intent search traffic, [Facebook Ads](/services/paid-ads/facebook-ads) and [Instagram Ads](/services/paid-ads/instagram-ads) for retargeting and awareness, and YouTube for trust-building video. [Signature](/plans/signature) includes Google Ads management. For other plans, ads are an [à la carte](/plans/a-la-carte) add-on so you only pay when you're actually ready to scale spend.",
  },
  {
    id: "how-much-ad-spend-do-i-need-to-see-results",
    category: "paid-ads",
    q: "How much ad spend do I need to see real results?",
    a: "For local service businesses we typically recommend a starting ad budget of <strong>$1,000–$3,000/month</strong> — enough data to actually optimize against. Below that, you'll see clicks but not statistically meaningful patterns. Ad spend is billed by Google or Meta directly (not by us), so you keep the card on file and full visibility. Management on top is included in [Signature](/plans/signature) or available [à la carte](/plans/a-la-carte) for other tiers.",
  },
  {
    id: "who-manages-my-ad-accounts-me-or-you",
    category: "paid-ads",
    q: "Who manages and owns my ad accounts — me or you?",
    a: "You own the [Google Ads](/services/paid-ads/google-ads) and Meta Business accounts, the conversion data, and the billing relationship — always. We get manager-level access so we can build campaigns, write copy, manage bids, and report. If we ever part ways, your account goes with you, history intact. No agency-locked accounts, no holding your historical data hostage. That's the same policy across every tier from [LocalMark](/plans/localmark) up.",
  },
  {
    id: "how-quickly-can-paid-ads-start-generating-leads",
    category: "paid-ads",
    q: "How quickly can paid ads start generating leads?",
    a: "Fast. [Google Ads](/services/paid-ads/google-ads) for high-intent local search typically start filling the pipeline within the <strong>first 14 days</strong> of launch — call-tracking, form submissions, and click-to-call all wired before the campaign goes live. Meta retargeting takes a little longer to build an audience but starts converting browsers in 3–4 weeks. If you also need [SEO](/services/seo), run them together so paid carries the load while organic compounds.",
  },
  {
    id: "how-will-i-know-which-ads-are-working",
    category: "paid-ads",
    q: "How will I know which ads are actually working?",
    a: "Monthly reporting shows clicks, calls, form submissions, cost-per-lead, and — most importantly — revenue attribution by source. Call tracking with whisper messages tags every phone lead, [Google Analytics](/solutions/analytics) ties form submissions to ad campaigns, and your dashboard rolls it up. We don't hide behind 'impressions' — every dollar reports back as a lead or a job. Available on [ServicePro](/plans/servicepro) and [Signature](/plans/signature) by default.",
  },

  // ─────────── 6. Content & reviews ───────────
  {
    id: "how-many-social-media-posts-do-you-do-each-month",
    category: "content-and-reviews",
    q: "How many social media posts do you make each month?",
    a: "Depends on the plan. [ServicePro](/plans/servicepro) ships <strong>12 branded graphics/month</strong> across Facebook and Instagram. [Signature](/plans/signature) adds <strong>4 short-form videos and 6 custom graphics</strong> on top, plus full multi-platform management (Facebook, Instagram, TikTok, YouTube). If you just want a content boost without a full plan, the [à la carte](/plans/a-la-carte) menu includes 4-graphic packs at $100 and 4×1-minute video packs at $400.",
  },
  {
    id: "do-you-write-the-blog-content-or-do-i",
    category: "content-and-reviews",
    q: "Do you write the blog content for me, or do I have to?",
    a: "We write it. [Signature](/plans/signature) includes monthly blog content built around the keywords your site is ranking for, written by humans and optimized for both [traditional SEO](/services/seo/on-page) and [AI search engines](/services/seo/ai-search). You review and approve before anything publishes. If you only want occasional content, blog packs are also available [à la carte](/plans/a-la-carte). No AI slop, no thin pages — just content that actually earns rankings and answers real customer questions.",
  },
  {
    id: "how-does-your-review-generation-system-work",
    category: "content-and-reviews",
    q: "How does your review generation system work?",
    a: "After every completed job, our system automatically sends your customer a personalized SMS and email asking for a review, with one-tap links to Google, Facebook, or wherever you need stars most. Happy customers post publicly; less-happy ones route privately to your inbox so you can fix it. Live on [ServicePro](/plans/servicepro) and [Signature](/plans/signature), or [add it standalone](/plans/a-la-carte) for $199/mo. See the full breakdown on our [review generation page](/services/social-media/review-generation).",
  },
  {
    id: "do-you-produce-video-and-graphics-in-house",
    category: "content-and-reviews",
    q: "Do you produce video and graphics in-house?",
    a: "Yes — every video, graphic, and edit is produced by our in-house team, not subcontracted to freelancers overseas. That includes [video editing](/services/social-media/video-editing), [graphic design](/services/social-media/graphic-design), and even [drone footage](/services/social-media/drone) for trades and exterior projects. [Signature](/plans/signature) clients get a dedicated designer and video producer assigned to their account every month — same people, every drop, so the brand voice never drifts.",
  },
  {
    id: "will-my-social-media-posts-sound-like-my-brand",
    category: "content-and-reviews",
    q: "Will my social media posts actually sound like my brand?",
    a: "Yes — that's the whole point. Onboarding includes a brand voice doc, photo library setup, and color/typography lock-in, and we route every post through approval before it goes live until you tell us to run on autopilot. [Signature](/plans/signature) clients get a dedicated content lead who learns your tone over the first 30 days. No generic 'happy Monday' filler. See examples on our [social media management page](/services/social-media/management).",
  },

  // ─────────── 7. Industries ───────────
  {
    id: "what-industries-do-you-specialize-in",
    category: "industries",
    q: "What industries do you specialize in?",
    a: "Local service businesses, full stop. Our biggest verticals: [contractors and trades](/industries/contractors) (roofing, HVAC, plumbing, electrical, GCs, remodelers, landscaping), [home services](/industries/home-services) (cleaning, pest, pool, appliance repair), [medical practices](/industries/medical), [restaurants and food](/industries/restaurants), and [automotive](/industries/automotive). If you have a service area, you sell jobs (not products), and you need the phone to ring — we know your funnel, your seasonality, and the keywords your customers actually type.",
  },
  {
    id: "do-you-work-with-contractors-and-home-service-businesses",
    category: "industries",
    q: "Do you work with contractors and home service businesses?",
    a: "Yes — they're our biggest category. We handle roofing, siding, gutters, windows, HVAC, plumbing, electrical, generators, EV charger installs, GCs, remodelers, kitchen/bath, landscaping, hardscape, paving, concrete, and fencing crews. We also run [home services](/industries/home-services) accounts for cleaners, pest control, pool, lawn, appliance repair, garage door, and locksmiths. Every site we ship for trades has service-area schema, financing widgets, before/after galleries, and 24/7 AI voice answering wired on day one.",
  },
  {
    id: "can-you-help-a-multi-location-business",
    category: "industries",
    q: "Can you help a multi-location service business?",
    a: "Yes. We build location-specific landing pages, manage separate [Google Business Profiles](/services/seo/local) per address, and grid-rank each location independently so your listings aren't cannibalizing each other. Multi-location accounts typically land on [ServicePro](/plans/servicepro) or [Signature](/plans/signature) depending on how many crews you run. See real multi-location wins in our [case studies](/resources/case-studies), or [book a call](/contact/schedule) for a custom scope.",
  },
  {
    id: "do-you-only-work-with-us-businesses",
    category: "industries",
    q: "Do you only work with U.S. businesses, or international too?",
    a: "Our core focus is U.S. and Canadian local service businesses — that's where our market knowledge, citation network, and ad expertise are deepest. For international engagements (UK, Australia, EU), we take them on a case-by-case basis depending on the vertical and competition. If you're outside North America, [book a call](/contact/schedule) and we'll tell you straight whether we're the right fit or recommend someone who is.",
  },
  {
    id: "do-you-work-with-medical-restaurants-or-automotive",
    category: "industries",
    q: "Do you work with medical practices, restaurants, or auto shops?",
    a: "Yes — all three are dedicated verticals. [Medical practices](/industries/medical) get HIPAA-aware intake, doctor profile schema, and review compliance handling. [Restaurants](/industries/restaurants) get menu schema, reservation integrations, and food-photography-driven social. [Auto shops](/industries/automotive) get service-bay landing pages, fleet-aware ad targeting, and review automation tied to invoice completion. Every vertical gets industry-tuned templates so you're not starting from a generic 'local business' page.",
  },

  // ─────────── 8. Working together ───────────
  {
    id: "when-will-i-see-real-results-from-marketing",
    category: "working-together",
    q: "When can I expect to see real results from marketing?",
    a: "It depends on the channel. [Google Ads](/services/paid-ads/google-ads) typically fills the pipeline in the <strong>first 14 days</strong>. [Local SEO](/services/seo/local) shows movement in 30–60 days and Map Pack lift in 90–120 days. Reviews and social compound over months, not weeks. We set a realistic 90-day forecast on the free audit so you know what to expect month-by-month — no over-promising, no 'wait six months and trust us.'",
  },
  {
    id: "how-often-will-i-hear-from-your-team",
    category: "working-together",
    q: "How often will I hear from your team?",
    a: "Weekly during onboarding and website builds (kickoff, draft reviews, launch). After launch, monthly strategy + reporting calls plus async Slack/email for day-to-day. [Signature](/plans/signature) clients get an assigned strategist who proactively flags wins, drops new content into your inbox each month 'like clockwork,' and runs quarterly strategy reviews. No black box — every dashboard is yours to log into 24/7.",
  },
  {
    id: "will-i-have-a-dedicated-strategist-or-rotate-through-reps",
    category: "working-together",
    q: "Will I have a dedicated strategist, or rotate through reps?",
    a: "[Signature](/plans/signature) clients get a fully dedicated team — strategy lead, designer, video producer, and ads specialist — assigned to your account every month. [ServicePro](/plans/servicepro) gets a dedicated strategist plus a shared production team. [LocalMark](/plans/localmark) and [StarterMark](/plans/startermark) clients work with a named account manager backed by the production pool. Either way, the same human is on your account month after month — not a rotating queue.",
  },
  {
    id: "how-does-monthly-reporting-work",
    category: "working-together",
    q: "How does monthly reporting work?",
    a: "Every month you get a dashboard showing ranking movement, GBP performance, traffic, leads, calls, form submissions, and — most importantly — revenue attribution by source. [ServicePro](/plans/servicepro) and [Signature](/plans/signature) include [Google Analytics](/solutions/analytics) integration and pipeline tracking. On top of the dashboard, your strategist sends a monthly recap with wins, what's underperforming, and what we're testing next month. No 100-page PDFs — just what moved and why.",
  },
  {
    id: "can-i-cancel-or-pause-my-marketing-plan",
    category: "working-together",
    q: "Can I cancel or pause my marketing plan if business slows down?",
    a: "Yes — life happens, seasonality happens, and we'd rather you come back later than feel stuck. Plans don't lock you into a long contract. If you need to pause for a slow season, downgrade to a lower tier, or cancel outright, just give your strategist 30 days' notice so we can wind production down cleanly. You keep your site, your GBP, your ad accounts, and every asset we produced.",
  },
]
