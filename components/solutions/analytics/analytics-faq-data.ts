export type AnalyticsFaq = {
  q: string
  a: string
}

export const analyticsFaqs: AnalyticsFaq[] = [
  {
    q: "Is this just GA4, or something more?",
    a: "GA4 is the foundation — but most service businesses' data stops there. We extend GA4 with call tracking (dynamic numbers that tie phone calls to Google Ads keywords), CRM-linked conversion attribution (so we know which channel drove which revenue), and custom dashboards that report in language you care about — leads, booked jobs, revenue — not pageviews.",
  },
  {
    q: "What if I already have GA4 set up?",
    a: "We audit it first. In our experience, 80% of small-business GA4 setups are missing critical events (form submissions, phone clicks, booking confirmations) or have conversions tracked wrong. We fix what's there before adding anything new.",
  },
  {
    q: "Do you track phone calls to specific marketing sources?",
    a: "Yes — dynamic call tracking swaps in unique numbers based on how a visitor arrived. A caller from Google Ads gets Number A, a caller from your Facebook ad gets Number B, organic gets Number C. You see exactly which campaign drove the call, how long it lasted, and — with recording — what it was about.",
  },
  {
    q: "Can you tie analytics data back to our CRM?",
    a: "That's the whole point. Every lead, call, or booking that lands in the CRM carries its source, campaign, and keyword as metadata — so you can see revenue by channel, not just clicks by channel. That's what actually informs budget decisions.",
  },
  {
    q: "What kind of dashboards do I get?",
    a: "A monthly executive dashboard (leads, booked jobs, revenue by channel, cost per lead, ROAS) and an ops dashboard (live funnel, top landing pages, conversion-rate trends, keyword rankings). Both live, both automated, both built in Looker Studio so you can share with partners or lenders.",
  },
  {
    q: "How do I know you set it up correctly?",
    a: "We run every event through GA4's DebugView and Tag Assistant before handing off, then document every tag, trigger, and variable in a shared spreadsheet. You (or a future agency) can audit the whole setup from day one.",
  },
]
