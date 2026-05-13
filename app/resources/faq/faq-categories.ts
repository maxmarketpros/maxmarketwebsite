export type FaqCategoryId =
  | "getting-started"
  | "plans-and-pricing"
  | "websites"
  | "seo"
  | "paid-ads"
  | "content-and-reviews"
  | "industries"
  | "working-together"

export type FaqCategory = {
  id: FaqCategoryId
  label: string
  pill: string
  headingPrefix: string
  headingHighlight: string
  intro: string
  ctaText: string
  ctaHref: string
}

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    label: "Getting started",
    pill: "Getting started",
    headingPrefix: "Getting started, ",
    headingHighlight: "made simple.",
    intro:
      "The basics — who we are, who we work with, and how the first call actually goes.",
    ctaText: "Book a free strategy call",
    ctaHref: "/contact/schedule",
  },
  {
    id: "plans-and-pricing",
    label: "Plans & pricing",
    pill: "Plans & pricing",
    headingPrefix: "Plans, pricing, ",
    headingHighlight: "no fine print.",
    intro:
      "Every line item is published, every tier has a real price, and nothing is hidden inside a bundle.",
    ctaText: "Compare every plan",
    ctaHref: "/plans",
  },
  {
    id: "websites",
    label: "Websites",
    pill: "Websites",
    headingPrefix: "Websites, timelines, ",
    headingHighlight: "and ownership.",
    intro:
      "What we build, how long it takes, and exactly who owns the finished site (spoiler: you do).",
    ctaText: "See web design plans",
    ctaHref: "/services/web-design",
  },
  {
    id: "seo",
    label: "SEO & local",
    pill: "SEO & local search",
    headingPrefix: "SEO and ",
    headingHighlight: "local search.",
    intro:
      "How we rank service businesses in the Map Pack, organic, and the new AI search engines.",
    ctaText: "Explore our SEO services",
    ctaHref: "/services/seo",
  },
  {
    id: "paid-ads",
    label: "Paid ads",
    pill: "Paid ads",
    headingPrefix: "Google Ads ",
    headingHighlight: "and Meta Ads.",
    intro:
      "Budget, attribution, ownership — straight answers on what running paid traffic with us looks like.",
    ctaText: "See paid ads services",
    ctaHref: "/services/paid-ads",
  },
  {
    id: "content-and-reviews",
    label: "Content & reviews",
    pill: "Content & reviews",
    headingPrefix: "Social, reviews, ",
    headingHighlight: "and content.",
    intro:
      "Posts, blogs, video, graphics, and the automated review engine that fills up your Google profile.",
    ctaText: "See social services",
    ctaHref: "/services/social-media/management",
  },
  {
    id: "industries",
    label: "Industries",
    pill: "Industries we serve",
    headingPrefix: "Industries and ",
    headingHighlight: "service areas.",
    intro:
      "We specialize in service businesses — here's exactly which trades and verticals we work with.",
    ctaText: "Browse industries",
    ctaHref: "/industries",
  },
  {
    id: "working-together",
    label: "Working together",
    pill: "Working together",
    headingPrefix: "Reporting, support, ",
    headingHighlight: "and results.",
    intro:
      "Cadence, dedicated team, monthly reporting, and how to pause or cancel if you ever need to.",
    ctaText: "Talk to a strategist",
    ctaHref: "/contact/schedule",
  },
]
