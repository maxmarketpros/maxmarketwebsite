export type FacebookAdsFaq = {
  q: string
  a: string
}

export const facebookAdsFaqs: FacebookAdsFaq[] = [
  {
    q: "How does Facebook Ads management pricing work?",
    a: "Our Facebook Ads management fee is a flat monthly retainer billed separately from your ad spend &mdash; that money goes straight to Meta on your card, not ours. Retainers scale with the number of campaigns, creative assets we ship per month, and Pixel/CAPI complexity. On the free audit call we&rsquo;ll quote a fixed monthly fee with no setup fees, no percentage-of-spend markup, and no long-term contract.",
  },
  {
    q: "What&rsquo;s the minimum monthly ad spend for Facebook Ads management to make sense?",
    a: "For local service businesses we recommend a minimum of $1,500&ndash;$2,500/month in Meta ad spend. Below that, the Meta auction doesn&rsquo;t collect enough conversion data for Advantage+ to optimize and creative testing stalls out. If you&rsquo;re only ready to spend $500/month on paid, you&rsquo;re better off with our <a href=\"/services/seo/local\" style=\"color:var(--accent);font-weight:600\">Local SEO program</a> until cash flow supports paid social.",
  },
  {
    q: "How long until Facebook Ads start booking jobs?",
    a: "Most accounts see meaningful lead-form fills in week 2&ndash;3 once the Pixel + Conversions API are firing clean events and the first creative batch finishes its learning phase (~50 conversions per ad set). Cost-per-booked-job typically settles by day 60. We share a weekly Loom in the first 60 days so you can watch the optimization happen in real time and approve creative as it ships.",
  },
  {
    q: "Do you build the Reels and creative, or do we?",
    a: "We do. Every retainer includes 4&ndash;8 fresh creative assets per month &mdash; a mix of vertical Reels, static feed posts, and carousels &mdash; produced by our in-house design and video team. We&rsquo;ll request raw clips and photos from your phone or jobsite, then ship hooks, captions, and CTA variants tuned for service-business intent. If you have an in-house creator, we loop them into the brief and run their work alongside ours.",
  },
  {
    q: "Whose Facebook ad account and Pixel is it &mdash; ours or yours?",
    a: "Yours. Always. We work inside your Meta Business Manager (or set one up in your name if you don&rsquo;t have one), and you keep 100% admin access to the ad account, Pixel, Page, and Conversions API dataset. If we ever part ways, you keep every campaign, every audience, every creative file, and every conversion event &mdash; nothing is held hostage. This is non-negotiable on every engagement.",
  },
  {
    q: "Can you take over an existing Meta ad account?",
    a: "Yes &mdash; we take over existing accounts in roughly 75% of engagements. Our intake includes a full audit of your current campaigns, Pixel match quality, audience structure, creative library, and historical performance. Mature accounts with real conversion data are gold &mdash; we keep what&rsquo;s working, restructure what&rsquo;s leaking, and seed new creative where you&rsquo;ve gone stale. Starting fresh only makes sense when the existing account is fundamentally broken (typically: Pixel never fired, or the account caught a policy strike).",
  },
  {
    q: "How does iOS 14.5 / ATT affect Facebook Ads tracking, and how do you handle it?",
    a: "Apple&rsquo;s App Tracking Transparency framework cut roughly 30&ndash;50% of in-browser Pixel signal on iOS. We rebuild that signal three ways: server-side Conversions API for every key event, offline conversion uploads from your CRM (ServiceTitan, Jobber, HubSpot, Housecall Pro), and Aggregated Event Measurement domain priorities tuned for booked-job value. Most accounts we audit have Event Match Quality below 7/10 &mdash; we get it to 8.5+ in the first 30 days, which is what restores Advantage+ performance.",
  },
  {
    q: "Do you set up Pixel, CAPI, and offline conversion uploads?",
    a: "Yes &mdash; this is the #1 thing most Meta accounts get wrong. We install the Meta Pixel via Google Tag Manager, deploy Conversions API server-side (Stape, Make, or direct depending on your stack), and wire offline conversion imports if you&rsquo;re tracking booked jobs in a CRM. Every form fill, every phone call, and every booked job gets a value attached so Advantage+ optimizes for booked revenue, not just lead-form opens.",
  },
  {
    q: "Is there a contract, or can we cancel Facebook Ads management anytime?",
    a: "Month-to-month, every engagement. No 6-month or 12-month lock-ins, no cancellation fees, no &ldquo;account fees&rdquo; if you leave. We earn the next month every month, by showing up in your inbox with leads cheaper than the month before. The other side of that is: if you cancel mid-month, your campaigns stay live in your account &mdash; we just stop optimizing them, and you keep everything we built (creative, audiences, Pixel events).",
  },
]
