export type ReviewFaqCategory =
  | "Compliance"
  | "Speed"
  | "Platforms"
  | "Setup"
  | "Pricing"

export type ReviewFaq = {
  q: string
  a: string
  category: ReviewFaqCategory
}

export const reviewFaqCategories: ("All" | ReviewFaqCategory)[] = [
  "All",
  "Compliance",
  "Speed",
  "Platforms",
  "Setup",
  "Pricing",
]

export const reviewFaqs: ReviewFaq[] = [
  {
    category: "Speed",
    q: "How do you get more 5-star Google reviews — and how fast?",
    a: 'We trigger a personalized SMS + email request 60 seconds after every job is marked complete in your CRM. Our service-business clients see 8–15 new 5-star Google reviews in the first 7 days and an average rating lift of <strong>0.4–0.9 stars within 30 days</strong>. Pair this with <a href="/services/seo/local" style="color:var(--accent);font-weight:600">Local SEO</a> and you usually crack the Google Map Pack inside 60 days.',
  },
  {
    category: "Compliance",
    q: "Is filtering bad reviews against Google's policy?",
    a: "No — and we don't filter, gate, or block anyone from leaving a public review. What we do is <strong>time the ask intelligently</strong> and <strong>offer every customer a private feedback channel</strong> alongside the public one. Happy customers naturally pick the public path; unhappy ones often choose to message you privately first so you can fix the issue. Google, Yelp, and BBB all explicitly allow soliciting reviews from real customers — what they prohibit is review gating (only sending happy customers to public sites) or paying for reviews. We do neither.",
  },
  {
    category: "Compliance",
    q: "Do you ever write fake reviews or pay for reviews?",
    a: "Never. Every review that hits a public platform is from a real customer who completed a real job. Fake reviews violate FTC guidelines, get accounts suspended, and tank trust the second they're caught. Our entire moat is helping you collect real reviews at 5–10x the volume of competitors who are doing nothing.",
  },
  {
    category: "Speed",
    q: "How do you automate review requests without sounding like a robot?",
    a: "Templates are written for your industry and personalized with the customer's first name, the technician's first name, the job type, and the date. We A/B test copy across 1,400+ jobs/month so the messages that ship are the ones with the highest reply rates — not generic 'leave us a review!' nags. Reply rates average 38–48% (industry standard is 12–18%).",
  },
  {
    category: "Platforms",
    q: "Which review platforms do you cover?",
    a: 'Google Business Profile, Yelp, Facebook, BBB, Angi, HomeAdvisor, TripAdvisor, and Trustpilot — plus industry-specific platforms (Healthgrades for medical, OpenTable for restaurants, DealerRater for auto). We weight your campaign toward the 2–3 platforms your customers actually check, which we determine on the strategy call.',
  },
  {
    category: "Platforms",
    q: "Can you respond to existing 1-star and 2-star reviews?",
    a: 'Yes. Response automation is included on every plan — we draft on-brand, empathetic, public responses to every review (positive and negative) within 4 business hours and queue them for your approval. Public response to a negative review with a clear path to resolution is one of the highest-leverage things you can do for your reputation, and it weights heavily in <a href="/services/seo/local" style="color:var(--accent);font-weight:600">local SEO ranking</a>.',
  },
  {
    category: "Setup",
    q: "How does this integrate with our CRM or job-management software?",
    a: "We integrate natively with ServiceTitan, Housecall Pro, Jobber, Workiz, FieldEdge, ServiceFusion, Salesforce, HubSpot, and most major CRMs. If you don't have a CRM, we can trigger requests from a simple shared spreadsheet, a Zapier webhook, or your invoicing software. Setup takes 20 minutes on a screen-share call.",
  },
  {
    category: "Setup",
    q: "What if a customer never replies to the first request?",
    a: "We send a single, gentle follow-up at day 3 (different copy than the original — usually a question rather than a request, which lifts reply rates ~22%). If they still don't reply, we stop. No nagging, no day-7 / day-14 / day-30 spam — that's how you generate complaints, not reviews.",
  },
  {
    category: "Setup",
    q: "Do we own the review data and customer opt-outs?",
    a: "Yes. You own the customer list, every reply, every private feedback message, and all opt-outs. If you ever leave, we hand it all over and disconnect — no hostage data, no rebuild fee.",
  },
  {
    category: "Pricing",
    q: "What's the difference between this and Birdeye, Podium, or NiceJob?",
    a: 'Those are software-only — you pay $300–600/mo and you still have to write the templates, monitor responses, and chase platform issues yourself. We do all of that for you for a similar monthly fee, plus copywriting, A/B testing, response drafting, and platform troubleshooting (Google review removal disputes, Yelp filter battles, BBB profile claims). You get software <em>plus</em> a team that runs it.',
  },
  {
    category: "Pricing",
    q: "How much does Review Generation cost?",
    a: 'Plans start at a fixed monthly fee that includes unlimited request volume, response drafting on every review, monthly reporting, and platform troubleshooting. There are no per-message charges and no SMS-cost surprises. See <a href="/#pricing" style="color:var(--accent);font-weight:600">plans &amp; pricing</a> or book a free reputation audit for a custom quote.',
  },
  {
    category: "Pricing",
    q: "Is there a long-term contract?",
    a: "We default to a 90-day initial term so the system has time to compound (most clients see meaningful rating lift between days 21–60). After that it's month-to-month with no early-termination fee. You own all your data and review history.",
  },
]
