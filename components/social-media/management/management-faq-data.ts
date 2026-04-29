export type ManagementFaqCategory =
  | "Onboarding"
  | "Content"
  | "Strategy"
  | "Pricing"
  | "Results"

export type ManagementFaq = {
  q: string
  a: string
  category: ManagementFaqCategory
}

export const managementFaqCategories: ("All" | ManagementFaqCategory)[] = [
  "All",
  "Onboarding",
  "Content",
  "Strategy",
  "Pricing",
  "Results",
]

export const managementFaqs: ManagementFaq[] = [
  {
    category: "Onboarding",
    q: "How is your social media management different from hiring a freelancer?",
    a: "A freelancer is one person doing five jobs badly. Our social media management plans give you a full team — strategist, videographer, video editor, graphic designer, and community manager — for less than the cost of one in-house hire. You get the depth of an agency with the speed of a freelancer.",
  },
  {
    category: "Onboarding",
    q: "What does the social media management onboarding process look like?",
    a: "Week 1 is brand discovery — we interview you, audit your existing accounts, and pull competitor benchmarks. Week 2 we lock the strategy, content pillars, and posting cadence. Week 3 we shoot your first batch of video and design assets. Week 4 we go live with your full content calendar publishing on autopilot.",
  },
  {
    category: "Content",
    q: "Will the content sound like my brand and my voice?",
    a: "Yes. Every social media management client gets a brand voice document signed off in week 1, and a content lead is assigned to your account so the same human is writing every caption. We also run a 7-day approval window on the first month of posts so you can dial in the tone before anything goes live.",
  },
  {
    category: "Content",
    q: "Which social media platforms do you cover?",
    a: 'Standard plans cover 4 platforms — typically Instagram, TikTok, Facebook, and one of LinkedIn/YouTube depending on where your customers are. We can scale to 7 platforms (adding X, Pinterest, Snapchat) on enterprise plans. See our <a href="/services/social-media" style="color:var(--accent);font-weight:600">full social media services</a> for sub-services like <a href="/services/social-media/tiktok" style="color:var(--accent);font-weight:600">TikTok marketing</a> and <a href="/services/social-media/youtube" style="color:var(--accent);font-weight:600">YouTube growth</a>.',
  },
  {
    category: "Content",
    q: "Do you write the captions, hashtags, and SEO descriptions?",
    a: "Every post ships with caption, hashtag set, alt text, and platform-tuned SEO description (especially for YouTube and Pinterest where the description ranks). You don't write a single word unless you want to.",
  },
  {
    category: "Content",
    q: "Can I approve content before it gets published?",
    a: "Yes. You'll get a shared content calendar in Notion or ClickUp where the entire month's posts sit 7-10 days ahead of go-live. You can leave comments, request revisions, or push posts forward. Set-and-forget clients can also opt for fully autonomous posting after month 2.",
  },
  {
    category: "Strategy",
    q: "How long until I see results from social media management?",
    a: "Engagement lifts in week 2-3 (driven by posting consistency alone). Follower growth becomes visible by month 2. Booked-job attribution typically lands by month 3-4 once the funnel from social → DM → call is wired into your CRM. Most of our service-business clients hit 3-5x ROAS by month 6.",
  },
  {
    category: "Strategy",
    q: "Do you handle paid social ads too, or just organic?",
    a: 'Both. Most management plans focus on organic content + community management. If you want paid amplification, our <a href="/services/paid-ads" style="color:var(--accent);font-weight:600">paid ads team</a> runs Meta + TikTok + YouTube ad campaigns alongside the organic engine — same creative, doubled reach.',
  },
  {
    category: "Strategy",
    q: "What if I already have a designer or videographer in-house?",
    a: "We integrate. Plenty of our social media management clients keep their in-house creative and use us as the strategy + posting + community engine. We also do the inverse — pure creative production for clients with their own social manager. Tell us where the gap is on the strategy call.",
  },
  {
    category: "Pricing",
    q: "How much does monthly social media management cost?",
    a: 'Pricing depends on platform count, video volume, and whether community management is included. Plans start in the low four figures monthly and scale up for video-heavy or multi-location service businesses. See <a href="/#pricing" style="color:var(--accent);font-weight:600">plans &amp; pricing</a> on the home page or book a strategy call for a custom quote in 24 hours.',
  },
  {
    category: "Pricing",
    q: "Are there long-term contracts or month-to-month plans?",
    a: "We default to a 90-day initial term so the strategy + content engine has time to compound, then it's month-to-month after that. No multi-year lock-ins, no early termination fees. You own all content, raw footage, and creative assets we produce.",
  },
  {
    category: "Results",
    q: "What does the monthly social media management report include?",
    a: "Reach, impressions, follower growth, engagement rate, top-performing posts, DM volume, booked appointments attributed to social, and a 1-page strategist summary on what's working / what to double down on next month. Delivered as a Loom + PDF on the 3rd of every month.",
  },
  {
    category: "Results",
    q: "Do you guarantee follower growth or specific metrics?",
    a: "We guarantee deliverables — number of posts, reels, stories, ad spend managed, response time on community DMs — because those are inputs we control. We do not guarantee specific follower or revenue numbers because the algorithm changes weekly and dishonest agencies that promise those are the reason this industry has trust issues.",
  },
]
