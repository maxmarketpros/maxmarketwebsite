export type YoutubeFaqCategory =
  | "Onboarding"
  | "Production"
  | "Strategy"
  | "Shorts"
  | "Monetization"
  | "Pricing"
  | "Results"

export type YoutubeFaq = {
  q: string
  a: string
  category: YoutubeFaqCategory
}

export const youtubeFaqCategories: ("All" | YoutubeFaqCategory)[] = [
  "All",
  "Onboarding",
  "Production",
  "Strategy",
  "Shorts",
  "Monetization",
  "Pricing",
  "Results",
]

export const youtubeFaqs: YoutubeFaq[] = [
  {
    category: "Onboarding",
    q: "What's actually included in your YouTube marketing services?",
    a: 'Full-service done-for-you YouTube marketing services: channel strategy + pillars, scripting and production, on-site monthly filming, long-form editing, 30+ Shorts cut from each long-form, three thumbnail variants per video, full channel SEO (keywords, titles, descriptions, tags, chapters, cards, end screens), community management, and a monthly Studio dashboard report. We replace your in-house YouTube team end-to-end. See <a href="/services/social-media/management" style="color:var(--accent);font-weight:600">full-stack social media management</a> if you want every platform covered, not just YouTube.',
  },
  {
    category: "Onboarding",
    q: "How is this different from hiring a YouTube freelancer?",
    a: "A freelancer is one person doing five jobs at once — strategist, scriptwriter, videographer, editor, thumbnail designer. Output suffers in every lane. Our YouTube marketing services give you a 5-person pod (strategist, shooter, editor, thumbnail designer, channel manager) for less than a single mid-level in-house hire.",
  },
  {
    category: "Onboarding",
    q: "What does the onboarding process look like?",
    a: "Week 1 we run brand discovery, audit your existing YouTube channel and competitors, lock content pillars, and run the first keyword cluster. Week 2 we build the title/thumbnail formula library and chapter-template system specific to your niche. Week 3 we shoot your first batch on-site. Week 4 you go live with weekly long-form uploads plus the Shorts engine running daily.",
  },
  {
    category: "Production",
    q: "Do you actually film the YouTube content or do I have to?",
    a: 'Both options. Our standard YouTube marketing services plan includes one on-site filming day per month where our crew captures 8–12 long-form pieces plus 30+ Shorts angles. If you prefer self-shot, we send a weekly shot list, you film on your phone or DSLR in 30–45 minutes, and we handle every step downstream. Pair it with our <a href="/services/social-media/video-editing" style="color:var(--accent);font-weight:600">video editing services</a> if you only need editing.',
  },
  {
    category: "Production",
    q: "How many YouTube videos do you ship per month?",
    a: "Standard cadence is 8–12 long-form uploads per month (2–3 per week) plus 30+ Shorts cut from the long-form footage. We schedule long-form on Tuesday/Thursday/Saturday and Shorts daily, posting at the time slots your specific audience watches based on YouTube Studio analytics.",
  },
  {
    category: "Production",
    q: "Do you design custom thumbnails or use templates?",
    a: "Custom every time. Every long-form video gets three thumbnail variants designed from scratch and CTR-tested for the first 48 hours. If the live thumbnail&rsquo;s click-through rate comes in under 4%, we swap to a backup variant the same week. No templates, no AI-generic faces, no recycled stock.",
  },
  {
    category: "Strategy",
    q: "How do your YouTube marketing services optimize for watch time?",
    a: "Every script is engineered around four watch-time moments: a 0–8 second hook, a 0:15 reframe, a midpoint pattern interrupt, and an end-card loop hook. We measure these against the YouTube Studio retention curve every week and re-script future videos based on where viewers actually drop off — not where we guessed they would.",
  },
  {
    category: "Strategy",
    q: "How long until I see real YouTube results?",
    a: "Channel SEO lifts in week 4 from metadata alone — older videos start re-surfacing. Watch-time signal compounds by week 8–10 once 6–8 long-form uploads are live. Subscriber growth becomes visible by month 3, and the Shorts flywheel typically kicks in between month 4 and 6. Most service-business channels on our YouTube marketing services hit +280% subs and +24% avg-view-duration by month 9.",
  },
  {
    category: "Strategy",
    q: "Will the videos actually sound like my brand?",
    a: "Yes. Every client gets a brand voice document signed off in week 1, and the same content lead writes every script. We also run a 7-day approval window on the first month so you can dial in the tone before anything goes live, plus you approve every title/thumbnail before publish.",
  },
  {
    category: "Shorts",
    q: "Do you do YouTube Shorts as well, or just long-form?",
    a: 'Both — they&rsquo;re one engine. Every long-form upload generates 3–5 Shorts cut from the same footage, and we also film 10–15 native vertical Shorts per month for trend-jacking. The same hooks compound on <a href="/services/social-media/tiktok" style="color:var(--accent);font-weight:600">TikTok marketing services</a> if you want them repurposed there too.',
  },
  {
    category: "Shorts",
    q: "Why pair YouTube Shorts with long-form instead of running them separately?",
    a: "Because Shorts viewers convert into long-form subscribers at much higher rates when both surfaces share a niche, voice, and keyword cluster. Our YouTube marketing services treat Shorts as the top of the funnel and long-form as the closer — Shorts hook the swipe, long-form earns the subscribe. Run them apart and you&rsquo;re leaving 60–70% of the algorithmic lift on the table.",
  },
  {
    category: "Monetization",
    q: "Will your YouTube marketing services help me get monetized?",
    a: "Yes. Most service-business channels we onboard hit YPP&rsquo;s 1,000-subscriber + 4,000-watch-hour threshold between month 6 and 9. Once you&rsquo;re monetized we layer Super Thanks, Channel Memberships, affiliate stacks, and YouTube Shopping where it fits your offer. Sponsorships typically start at 10K subs in service-business niches.",
  },
  {
    category: "Pricing",
    q: "How much do your YouTube marketing services cost?",
    a: 'Plans start in the low-to-mid four figures monthly and scale based on filming frequency, video volume, thumbnail rounds, and whether community management is included. See <a href="/#pricing" style="color:var(--accent);font-weight:600">plans &amp; pricing</a> on the home page or book a strategy call for a custom quote in 24 hours.',
  },
  {
    category: "Results",
    q: "What does the monthly YouTube marketing services report include?",
    a: "Views, average view duration, watch hours, subscriber growth, top-performing videos and Shorts, average CTR per thumbnail variant, audience-retention trend lines, suggested-video pickup rate, and booked-job attribution where we can wire it. Plus a 1-page strategist summary on what&rsquo;s working and what to double down on next month, delivered as a Loom + PDF on the 3rd of every month.",
  },
  {
    category: "Results",
    q: "Do you guarantee specific subscriber or view counts?",
    a: "No, and any agency that does is lying. We guarantee the deliverables we control — number of long-form uploads, number of Shorts shipped, posting cadence, three thumbnail variants per video, response time on community DMs, retention engineering on every script. The YouTube algorithm changes constantly; promising specific view counts is dishonest.",
  },
]
