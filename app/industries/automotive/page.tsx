import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AutoHero } from "@/components/industries/automotive/auto-hero"
import { AutoPersonas } from "@/components/industries/automotive/auto-personas"
import { AutoServices } from "@/components/industries/automotive/auto-services"
import { AutoSolutions } from "@/components/industries/automotive/auto-solutions"
import { AutoJourney } from "@/components/industries/automotive/auto-journey"
import { AutoPlaybook } from "@/components/industries/automotive/auto-playbook"
import { AutoFinalCta } from "@/components/industries/automotive/auto-final-cta"

export const metadata: Metadata = {
  title: "Automotive Marketing",
  description:
    "Marketing built for auto detailing, mobile mechanics, repair shops, tire/body/glass specialty, and car rentals — SEO, ads, booking, AI agents, and review generation in one stack.",
  alternates: { canonical: "/industries/automotive" },
  openGraph: {
    title: "Automotive Marketing",
    description:
      "SEO, ads, booking, AI agents, and review generation tuned for auto detailing, mobile repair, service shops, specialty, and rentals.",
    type: "website",
    url: "/industries/automotive",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Marketing",
    description:
      "One stack for the local auto economy — detailing, mobile repair, shops, tire/body/glass, and rentals.",
  },
}

const faq = [
  {
    q: "Do you work with auto detailing studios and mobile mechanics, not just dealerships?",
    a: "Yes — our automotive focus is on the local auto economy. Detailing studios, mobile auto repair, mechanic and repair shops, tire/body/windshield/glass specialty, and car rental operators are our core audience.",
  },
  {
    q: "What does a typical engagement include?",
    a: "Most automotive clients start with local SEO, Google Business Profile management, and lead-gen software (unified inbox plus missed-call text-back). Many layer Google Ads, Meta Ads, and an AI voice/chat agent for after-hours coverage. Every engagement includes weekly reporting.",
  },
  {
    q: "How long until we see results?",
    a: "Paid ads and missed-call text-back typically move inside the first 14 days. Local SEO and review-generation compounding show meaningful ranking and booking lift inside 60–90 days.",
  },
  {
    q: "Do you run the ads for us or give us a dashboard?",
    a: "We run them — full service. You get a Looker Studio dashboard plus weekly reports so you see exactly what the spend is doing, but day-to-day ad management is on us.",
  },
  {
    q: "What does it cost?",
    a: "Engagements are scoped to vertical and service radius. A la carte pricing is published on our plans page; bundled automotive packages are quoted on the strategy call.",
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
      { "@type": "ListItem", position: 3, name: "Automotive", item: "https://www.maxmarketpros.com/industries/automotive" },
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
      <AutoHero />
      <AutoPersonas />
      <AutoServices />
      <AutoSolutions />
      <AutoJourney />
      <AutoPlaybook />
      <AutoFinalCta />
      <JsonLd />
    </main>
  )
}
