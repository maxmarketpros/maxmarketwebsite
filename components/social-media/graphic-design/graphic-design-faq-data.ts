export type GraphicDesignFaqCategory =
  | "Scope"
  | "Turnaround"
  | "Revisions"
  | "Files & Ownership"
  | "Brand Identity"
  | "Pricing"

export const graphicDesignFaqCategories: Array<
  "All" | GraphicDesignFaqCategory
> = [
  "All",
  "Scope",
  "Turnaround",
  "Revisions",
  "Files & Ownership",
  "Brand Identity",
  "Pricing",
]

export const graphicDesignFaqs: Array<{
  category: GraphicDesignFaqCategory
  q: string
  a: string
}> = [
  {
    category: "Scope",
    q: "What's included in your social media graphic design service?",
    a: 'Every format your channels need — Instagram and Facebook posts, stories, reels covers, carousels, ad creative, YouTube thumbnails, LinkedIn graphics, email headers, and Pinterest pins. We also cover print and web (vehicle wraps, flyers, signage, web banners, decks). Pair it with <a href="/services/social-media/management">monthly social media management</a> if you also need posting and community work.',
  },
  {
    category: "Scope",
    q: "Do you design Instagram and Facebook ad creative?",
    a: 'Yes — Instagram ad design and Facebook ad creative are a core part of our work. Every campaign ships with at least three creative variants (hook, offer, and social proof) so your media buyer can A/B test from day one. Most clients run paid amplification through <a href="/services/social-media/management">our management team</a>, but we\'ll gladly hand off ready-to-upload assets to your in-house buyer too.',
  },
  {
    category: "Scope",
    q: "Do you do carousel design for Instagram and LinkedIn?",
    a: "Carousel design is one of our highest-leverage formats. We build save-and-share carousels with a real architecture — hook slide, value slides, proof slide, CTA slide — sized for Instagram, LinkedIn, and Facebook. Each carousel comes with on-brand typography, custom illustrations or icons, and source files in case your team wants to remix slides later.",
  },
  {
    category: "Brand Identity",
    q: "Do you handle full branding for service businesses?",
    a: 'Yes — branding for service businesses is one of the most common reasons clients hire us. We build a brand kit with logo lockups, a color system, typography, iconography, motion guidelines, and pattern libraries — then apply it consistently across social, ads, print, and web. See our broader <a href="/services">services</a> page for how it ties into the rest of your marketing.',
  },
  {
    category: "Turnaround",
    q: "How fast is your design turnaround?",
    a: "Standard turnaround on a single asset is 48 hours from approved brief. Multi-asset campaigns and full brand kits run 5–7 business days. We share a timeline upfront on every project so you always know when concept, revisions, and final files will land.",
  },
  {
    category: "Turnaround",
    q: "Can you handle ongoing design at scale?",
    a: 'We design for clients producing 60–200+ social assets per month. The workflow is built into the same content engine we use for <a href="/services/social-media/management">social media management</a> — designers, strategists, and editors share one calendar so nothing falls between roles.',
  },
  {
    category: "Revisions",
    q: "How many revisions do I get?",
    a: "Unlimited revisions on every project until the design hits the brief. We don't cap revisions because we'd rather get it right than cap creative back-and-forth. The only thing we don't redo for free is changing the brief mid-project — that gets logged as a new request so the timeline stays honest.",
  },
  {
    category: "Files & Ownership",
    q: "Do I get the source files?",
    a: "Yes — every deliverable ships with editable source files (PSD, AI, INDD, AEP, Figma, or Canva, depending on the tool). You own 100% of the artwork and can hand it to any future designer without licensing headaches.",
  },
  {
    category: "Files & Ownership",
    q: "What file formats do you deliver?",
    a: "PNG and JPG for upload-ready social, MP4 for animated assets, PDF for print, source files for editing, and a packaged brand kit folder with everything organized. Print pieces ship with bleed, crop marks, and CMYK profiles ready for any local print shop.",
  },
  {
    category: "Pricing",
    q: "How is graphic design priced?",
    a: 'Pricing is project- or retainer-based depending on volume. One-off projects (a brand kit, a campaign, a deck) are quoted by scope. Ongoing work (monthly social design, ad creative production) runs as a flat retainer with a set deliverable count. <a href="/contact">Send us a brief</a> and we\'ll send a fixed quote within one business day.',
  },
  {
    category: "Pricing",
    q: "Can I add design to an existing service?",
    a: 'Yes — most clients bundle design with <a href="/services/social-media/management">social media management</a>, <a href="/services/social-media/review-generation">review generation</a>, or <a href="/services/seo">SEO</a>. Bundled clients get priority turnaround and shared design hours that flow between channels each month.',
  },
  {
    category: "Scope",
    q: "Do you only design for social, or also print and web?",
    a: 'Both. Beyond social media graphic design we cover print (vehicle wraps, yard signs, business cards, flyers, brochures), web banners, presentation decks, and pitch documents. The same design team builds a service business&rsquo;s entire visual stack — see our <a href="/services">full services list</a> for adjacent work.',
  },
]
