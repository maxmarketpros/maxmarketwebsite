import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HsHero } from "@/components/industries/home-services/hs-hero"
import { HsBlueprint } from "@/components/industries/home-services/hs-blueprint"
import { HsZigzag } from "@/components/industries/home-services/hs-zigzag"
import { HsAfterHours } from "@/components/industries/home-services/hs-after-hours"
import { HsSolutionsBento } from "@/components/industries/home-services/hs-solutions-bento"
import { HsProof } from "@/components/industries/home-services/hs-proof"
import { HsFinalCta } from "@/components/industries/home-services/hs-final-cta"

export const metadata: Metadata = {
  title: "Home Services Marketing",
  description:
    "The complete marketing + operations stack for recurring home services — cleaners, pest control, pool, lawn, garage door, locksmiths, and handymen.",
  alternates: { canonical: "/industries/home-services" },
  openGraph: {
    title: "Home Services Marketing",
    description:
      "Own the Google Map Pack, answer every after-hours ring with AI voice, and automate the dispatch-to-review loop for recurring home-service shops.",
    type: "website",
    url: "/industries/home-services",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Marketing",
    description:
      "One stack from the Google search to the Google review \u2014 for cleaners, pest, pool, lawn, appliance, garage, locksmith, chimney, window, and handyman pros.",
  },
}

const faq = [
  {
    q: "Which home-service verticals do you work with?",
    a: "Recurring and lighter-service home businesses: house cleaning, pest control, pool & lawn maintenance, appliance repair, garage-door service, locksmiths, chimney sweeps, window cleaning, handymen, junk removal, and moving help. Heavy trades (HVAC, plumbing, roofing, electrical, GCs) are handled on our /industries/contractors page.",
  },
  {
    q: "Can the AI voice really book a job at 2am?",
    a: "Yes. It picks up in under 2 rings, qualifies the caller in natural speech (50+ languages), offers real calendar slots synced to Google/Outlook, captures a deposit through a texted Stripe link if needed, and hands off to a human only if the caller asks. You wake up to booked jobs already on the route.",
  },
  {
    q: "How fast do map-pack rankings and paid-ads results show up?",
    a: "Google and LSA ads typically fill your pipeline inside the first 14 days. Meaningful movement on the Map Pack and organic local rankings shows inside 30\u201390 days depending on city density and your review velocity.",
  },
  {
    q: "Do I own my website, data, and phone number?",
    a: "Yes. The site is built on Next.js and ships with source you own. Call tracking, CRM data, booking records, payment history, and the AI agent&rsquo;s training are all yours to export. No vendor lock-in.",
  },
  {
    q: "What does it cost?",
    a: "A la carte pricing lives on the plans page. Most home-service shops run a bundle that includes the website, Local SEO, AI voice + chat, and the booking/payments stack \u2014 quoted on the consult call based on service radius and volume.",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://maxmarketpros.com/industries" },
      { "@type": "ListItem", position: 3, name: "Home Services", item: "https://maxmarketpros.com/industries/home-services" },
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
      <HsHero />
      <HsBlueprint />
      <HsZigzag />
      <HsAfterHours />
      <HsSolutionsBento />
      <HsProof />
      <HsFinalCta />
      <JsonLd />
    </main>
  )
}
