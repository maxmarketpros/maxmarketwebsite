export type GoogleAdsFaq = {
  q: string
  a: string
}

export const googleAdsFaqs: GoogleAdsFaq[] = [
  {
    q: "How does Google Ads management pricing work?",
    a: "Our Google Ads management fee is a flat monthly retainer billed separately from your ad spend &mdash; that money goes straight to Google on your card, not ours. Retainers scale with account complexity (number of campaigns, locations, and channels: Search, Local Services Ads, Performance Max, Maps, YouTube). On the free audit call we&rsquo;ll quote a fixed monthly fee with no setup fees, no percentage-of-spend markup, and no long-term contract.",
  },
  {
    q: "What&rsquo;s the minimum monthly ad spend for Google Ads management to make sense?",
    a: "For local service businesses we recommend a minimum of $1,500&ndash;$2,000/month in ad spend across Search and Local Services Ads. Below that, Google&rsquo;s smart bidding doesn&rsquo;t collect enough conversion data to optimize, and the math on a managed retainer rarely works. If you&rsquo;re only ready to spend $500/month, you&rsquo;re better off with our <a href=\"/services/seo/local\" style=\"color:var(--accent);font-weight:600\">Local SEO program</a> until cash flow supports paid.",
  },
  {
    q: "How long does Google Ads management take to show results?",
    a: "Local Services Ads (LSA) typically deliver leads in 7&ndash;14 days once Google Guaranteed verification clears, because LSA bypasses bidding and routes calls directly. Google Search campaigns need 3&ndash;6 weeks to gather enough conversion data for smart bidding to stabilize. Performance Max typically needs 4&ndash;8 weeks before its asset combinations and audiences settle. We share a weekly Loom in the first 60 days so you can watch the optimization happen in real time.",
  },
  {
    q: "Do you run the Google Ads campaigns for us, or train our team to run them?",
    a: "We run them. This is full-service done-for-you Google Ads management &mdash; we handle keyword research, ad copy, negative-keyword sculpting, bid strategy, conversion-tracking setup, weekly optimization, and monthly reporting. We don&rsquo;t do training engagements. If your team wants to learn paid media in parallel, we&rsquo;ll loop them in on calls and explain what we&rsquo;re changing and why, but the execution stays with us.",
  },
  {
    q: "Whose Google Ads account does the campaign live in &mdash; ours or yours?",
    a: "Yours. Always. We open the account in your name (or transfer your existing account into our MCC for centralized management), and you keep 100% admin access. Same for your Google Tag Manager, GA4, and Google Business Profile. If we ever part ways, you keep every campaign, every conversion action, every audience &mdash; nothing is held hostage. This is non-negotiable on every engagement.",
  },
  {
    q: "Can you take over an existing Google Ads account, or do we have to start fresh?",
    a: "We take over existing accounts in roughly 80% of engagements. Our intake includes a full audit of your existing campaigns, search-term reports, conversion tracking, and historical performance data. Mature accounts with real conversion data are gold &mdash; we keep what&rsquo;s working, restructure what&rsquo;s leaking, and seed new campaigns where there are gaps. Starting fresh only makes sense when the existing account is fundamentally broken (typically: tracking never worked, or the account was suspended).",
  },
  {
    q: "Do you set up Google Ads conversion tracking and call tracking?",
    a: "Yes &mdash; this is the #1 thing most accounts get wrong. We install GA4 events, Google Ads conversion actions, CallRail (or a similar dynamic-number-insertion tool) for phone calls, and offline conversion imports if you&rsquo;re tracking booked jobs in a CRM like ServiceTitan, Jobber, or HubSpot. Every form fill, every phone call, and every booked job gets a value attached so smart bidding optimizes for booked revenue, not just clicks.",
  },
  {
    q: "Do you build landing pages for Google Ads campaigns?",
    a: "Landing-page CRO is included in your first month of Google Ads management &mdash; we&rsquo;ll diagnose conversion-rate issues on your existing service pages and recommend a list of fixes. Building a brand-new dedicated landing page is a separate engagement (usually paired with our <a href=\"/services/web-design\" style=\"color:var(--accent);font-weight:600\">web design</a> team) and quoted per page. About half our clients run paid traffic to their main site and never need a dedicated LP; the other half see meaningful CPL drops once we ship one.",
  },
  {
    q: "Is there a contract, or can we cancel Google Ads management anytime?",
    a: "Month-to-month, every engagement. No 6-month or 12-month lock-ins, no cancellation fees, no &ldquo;account fees&rdquo; if you leave. We earn the next month every month, by showing up in your inbox with leads cheaper than the month before. The other side of that is: if you cancel mid-month, your campaigns stay live in your account &mdash; we just stop optimizing them, and you keep everything we built.",
  },
]
