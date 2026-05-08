import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { LsvcHero } from "@/components/industries/local-service/lsvc-hero"
import { LsvcWebsite } from "@/components/industries/local-service/lsvc-website"
import { LsvcSerpAnatomy } from "@/components/industries/local-service/lsvc-serp-anatomy"
import { LsvcCategories } from "@/components/industries/local-service/lsvc-categories"
import { LsvcRankClimb } from "@/components/industries/local-service/lsvc-rank-climb"
import { LsvcSolutions } from "@/components/industries/local-service/lsvc-solutions"
import { LsvcFinalCta } from "@/components/industries/local-service/lsvc-final-cta"

export const metadata: Metadata = {
  title: "Local Service Marketing",
  description:
    "Rank on Google and convert on your own site. Local SEO, Map Pack dominance, and custom-coded websites for salons, fitness, events, pets, professional services, and education \u2014 every local service business that lives on 'near me' searches.",
  alternates: { canonical: "/industries/local-service" },
  openGraph: {
    title: "Local Service Marketing",
    description:
      "Own every Google slot \u2014 Ads, AI Overview, Map Pack, Featured Snippet, Organic #1 \u2014 on a custom-coded site built to convert. Six verticals, thirty service types.",
    type: "website",
    url: "/industries/local-service",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Service Marketing",
    description:
      "Rank on Google. Convert on your site. One stack for every local service business.",
  },
}

const faq = [
  {
    q: "What counts as a 'local service business'?",
    a: "Any business that serves a specific city or region and competes on 'near me' or city-name searches: beauty & grooming (salons, barbers, nails, spas), fitness & wellness (gyms, trainers, yoga), events & entertainment (photographers, DJs, planners, caterers), pet services (grooming, boarding, sitters), professional services (attorneys, CPAs, financial advisors, notaries), and education & arts (tutors, music, dance, language). Home-service verticals live on /industries/home-services, trades on /industries/contractors.",
  },
  {
    q: "Why focus on Google Map Pack specifically?",
    a: "On 'near me' searches, the Map Pack sits at the top of the results and drives the majority of calls and direction-requests. Owning the top-3 local positions is the single highest-ROI SEO move for a local-service business. We tune Google Business Profile, citations, review velocity, and geo-tagged photos to lock that real estate.",
  },
  {
    q: "Do you build the website from scratch?",
    a: "Yes. The default is a custom-coded Next.js + Postgres build \u2014 sub-2-second loads, sticky click-to-call, booking widgets on every service page, Lighthouse scores in the high 90s, and SEO schema so Google knows exactly what you sell. We also build on Webflow, WordPress, or Squarespace if you prefer a platform.",
  },
  {
    q: "How long until we see ranking improvements?",
    a: "Paid Ads and Local Services Ads fill the pipeline inside 14 days. Map-pack movement shows inside 30\u201360 days. Sustained organic climbs on high-intent terms typically land inside 90 days \u2014 the six-month cohort on our rank-climb chart reflects averages across recent clients.",
  },
  {
    q: "What does a local-service engagement cost?",
    a: "A la carte pricing is published on the /plans page. Most local-service shops run a bundle that includes the website, Local SEO + GBP, Google Ads or LSA, the booking/payments stack, and review generation \u2014 scoped on the consult call based on service radius and competitive density.",
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
      { "@type": "ListItem", position: 3, name: "Local Service Businesses", item: "https://maxmarketpros.com/industries/local-service" },
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
      <LsvcHero />
      <LsvcWebsite />
      <LsvcSerpAnatomy />
      <LsvcCategories />
      <LsvcRankClimb />
      <LsvcSolutions />
      <LsvcFinalCta />
      <JsonLd />
    </main>
  )
}
