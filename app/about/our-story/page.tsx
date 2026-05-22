import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OurStoryHero } from "@/components/about/our-story/our-story-hero"
import { OurStoryBeginning } from "@/components/about/our-story/our-story-beginning"
import { OurStoryDecision } from "@/components/about/our-story/our-story-decision"
import { OurStoryBelief } from "@/components/about/our-story/our-story-belief"
import { OurStoryNumbers } from "@/components/about/our-story/our-story-numbers"
import { OurStoryToday } from "@/components/about/our-story/our-story-today"
import { OurStoryTeamBridge } from "@/components/about/our-story/our-story-team-bridge"
import { OurStoryFinalCta } from "@/components/about/our-story/our-story-final-cta"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "How Max Market Pros opened its doors on the same day California closed theirs — and what we learned about building a digital marketing company that's still here, still independent, five years later.",
  path: "/about/our-story",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Our Story",
        item: `${SITE_URL}/about/our-story`,
      },
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Story | Max Market Pros",
    url: `${SITE_URL}/about/our-story`,
    description:
      "How Max Market Pros opened on March 19, 2020 — the same day California shut down — and what we learned about building a digital marketing company that's still here, still independent, five years later.",
    mainEntity: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: SITE_URL,
      foundingDate: "2020-03-19",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      sameAs: BUSINESS.socials,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <OurStoryHero />
      <OurStoryBeginning />
      <OurStoryDecision />
      <OurStoryBelief />
      <OurStoryNumbers />
      <OurStoryToday />
      <OurStoryTeamBridge />
      <OurStoryFinalCta />
      <JsonLd />
    </main>
  )
}
