import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ContHero } from "@/components/industries/contractors/cont-hero"
import { ContWebGoogle } from "@/components/industries/contractors/cont-web-google"
import { ContTrades } from "@/components/industries/contractors/cont-trades"
import { ContServiceArea } from "@/components/industries/contractors/cont-service-area"
import { ContEmergencyPlanned } from "@/components/industries/contractors/cont-emergency-planned"
import { ContLifecycle } from "@/components/industries/contractors/cont-lifecycle"
import { ContFinalCta } from "@/components/industries/contractors/cont-final-cta"

export const metadata: Metadata = {
  title: "Contractor Marketing",
  description:
    "Lead-capture websites, #1 Google rankings, tuned paid ads, and lead-to-invoice automation for roofing, HVAC, plumbing, electrical, GCs, remodelers, and outdoor-trade contractors.",
  alternates: { canonical: "/industries/contractors" },
  openGraph: {
    title: "Contractor Marketing",
    description:
      "Websites that capture the lead, Google dominance for 'near me' searches, and lead-to-invoice automation for every trade \u2014 roofing, HVAC, plumbing, electrical, GCs, and outdoor crews.",
    type: "website",
    url: "/industries/contractors",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Marketing",
    description:
      "One stack from the Google search to the paid invoice \u2014 for roofers, HVAC, plumbers, electricians, GCs, and outdoor trades.",
  },
}

const faq = [
  {
    q: "Which trades do you work with?",
    a: "Roofing, siding, gutters, windows, and exterior painting; HVAC, plumbing, electrical, generator, and EV-charger installs; general contractors, remodelers, kitchen/bath, additions, and whole-home design-build; landscaping, hardscape, paving, concrete, and fencing crews.",
  },
  {
    q: "Do you build the actual website, or just run Google Ads?",
    a: "We build the site. Mobile-first, sub-1.8s load, service-area schema so Google serves your exact neighborhoods, click-to-call and instant-quote in the sticky header, before/after galleries, financing widgets, and review-score hero wired on day one. Google Ads, local SEO, and Meta retargeting layer on top.",
  },
  {
    q: "Can you handle emergency calls and planned remodels at the same time?",
    a: "Yes. Emergency lanes run on Google call-only ads, GBP call buttons, and an AI after-hours agent so you book the 2am call. Planned-work lanes run on SEO service-area pages, portfolio-led Meta retargeting, and multi-touch email drip tuned to a weeks-long decision.",
  },
  {
    q: "How long until we see map-pack and Google Ads results?",
    a: "Google Ads and call-tracking typically fill the pipeline within the first 14 days. Map-pack top-3 lift and local SEO ranking gains show meaningful movement inside 30\u201390 days depending on your city's competitive density.",
  },
  {
    q: "What does it cost?",
    a: "Engagements scope to trade, service radius, and whether you run emergency, planned, or both. A la carte pricing is published on our plans page; bundled contractor packages are quoted on the consult call.",
  },
]

function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.maxmarketpros.com/industries" },
      { "@type": "ListItem", position: 3, name: "Contractors", item: "https://www.maxmarketpros.com/industries/contractors" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ContHero />
      <ContWebGoogle />
      <ContTrades />
      <ContServiceArea />
      <ContEmergencyPlanned />
      <ContLifecycle />
      <ContFinalCta />
      <JsonLd />
    </main>
  )
}
