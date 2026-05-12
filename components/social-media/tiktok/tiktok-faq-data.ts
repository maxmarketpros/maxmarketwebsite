export type TiktokFaqCategory =
  | "Onboarding"
  | "Content"
  | "Strategy"
  | "Pricing"
  | "Results"

export type TiktokFaq = {
  q: string
  a: string
  category: TiktokFaqCategory
}

export const tiktokFaqCategories: ("All" | TiktokFaqCategory)[] = [
  "All",
  "Onboarding",
  "Content",
  "Strategy",
  "Pricing",
  "Results",
]

export const tiktokFaqs: TiktokFaq[] = [
  {
    category: "Onboarding",
    q: "What's actually included in your TikTok marketing services?",
    a: 'Full-service organic TikTok marketing services: content strategy + pillars, hook and script library, on-site monthly filming, vertical editing with kinetic captions, daily posting, trend-jacking, community management, and a monthly performance report. We replace your in-house TikTok team end-to-end. See <a href="/services/social-media/management" style="color:var(--accent);font-weight:600">full-stack social media management</a> if you want all platforms covered, not just TikTok.',
  },
  {
    category: "Onboarding",
    q: "How is this different from hiring a TikTok freelancer?",
    a: "A freelancer is one person doing five jobs at once — strategist, videographer, editor, captioner, and community manager — and their output suffers in every lane. Our TikTok marketing services give you a 4-person pod (strategist, shooter, editor, community manager) for less than a single mid-level in-house hire.",
  },
  {
    category: "Onboarding",
    q: "What does the onboarding process look like?",
    a: "Week 1 we run brand discovery, audit your existing TikTok and competitors, and lock content pillars. Week 2 we build the hook library and trend radar specific to your niche. Week 3 we shoot your first batch on-site (or remotely with your phone if you prefer). Week 4 you go live with daily posting and weekly trend reports.",
  },
  {
    category: "Content",
    q: "Do you actually film the TikTok content or do I have to?",
    a: 'Both options. Our standard TikTok marketing services plan includes one on-site filming day per month where our crew captures 30–60 ready-to-edit clips. If you prefer a self-shot model, we send you a weekly shot list, you film on your phone in 20 minutes, and we handle every other step. Ask about our <a href="/services/social-media/video-editing" style="color:var(--accent);font-weight:600">video editing services</a> if you only need the editing piece.',
  },
  {
    category: "Content",
    q: "How many TikToks do you post per month?",
    a: "Standard cadence is 20–30 TikToks per month (5–7 per week). We post Tuesday through Saturday at the time slots your specific audience is most active, based on TikTok analytics. We hold posting on Sundays/Mondays unless a trending sound has a tight half-life that requires immediate publishing.",
  },
  {
    category: "Content",
    q: "How do you decide which TikTok trends to jump on?",
    a: "We monitor the FYP daily and surface 5 candidate trends per week per client. A trend only makes the cut if it (1) aligns with your content pillars, (2) has at least 48 hours of remaining half-life, and (3) can be filmed and posted within 24 hours. Everything else gets archived. Trend-jacking just to chase views is how brands tank their FYP relevance score.",
  },
  {
    category: "Strategy",
    q: "How do your TikTok marketing services optimize for the FYP?",
    a: "We tune for the seven signals that actually move FYP placement: hook completion under 1.5 seconds, watch-time percentage above 65%, re-watches, shares-to-views ratio, comments-to-views ratio, sound trend half-life, and caption keyword density. Every TikTok we ship is scored against these before posting and reviewed against them after.",
  },
  {
    category: "Strategy",
    q: "How long until I see real results from TikTok marketing?",
    a: "Engagement lifts in week 2 from posting consistency alone. Follower growth becomes visible by week 4–6 once the algorithm has enough watch-time data. Viral hits and FYP placement typically land between month 2 and 3. Most service-business clients on our TikTok marketing services hit 4× watch time and a 7× share rate by month 6.",
  },
  {
    category: "Strategy",
    q: "Do you handle TikTok Shop or live shopping too?",
    a: "Not as a core part of these TikTok marketing services. This page is for organic content and FYP growth. If you want TikTok Shop, live shopping, or Spark Ads layered on, we offer those as add-ons after month 3 once your organic engine is producing consistent watch-time.",
  },
  {
    category: "Strategy",
    q: "Will the TikToks actually sound like my brand?",
    a: "Yes. Every client gets a brand voice document signed off in week 1, and the same content lead writes every script and caption. We also run a 7-day approval window on the first month so you can dial in the tone before anything goes live.",
  },
  {
    category: "Pricing",
    q: "How much do your TikTok marketing services cost?",
    a: 'Plans start in the low four figures monthly and scale based on filming frequency, video volume, and whether community management is included. See <a href="/#pricing" style="color:var(--accent);font-weight:600">plans &amp; pricing</a> on the home page or book a strategy call for a custom quote in 24 hours.',
  },
  {
    category: "Results",
    q: "What does the monthly TikTok marketing services report include?",
    a: "Views, average watch time, follower growth, top-performing TikToks, share rate, comment volume, profile visits, and booked-job attribution where we can wire it. Plus a 1-page strategist summary on what's working and what to double down on next month, delivered as a Loom + PDF on the 3rd of every month.",
  },
  {
    category: "Results",
    q: "Do you guarantee viral views or follower numbers?",
    a: "No, and any agency that does is lying. We guarantee deliverables — number of TikToks shipped, posting cadence, response time on community DMs, hook-completion scoring on every video — because those are inputs we control. The FYP algorithm changes weekly; promising specific view counts is dishonest.",
  },
]
