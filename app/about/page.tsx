import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AboutHero } from "@/components/about/hub/about-hero"
import { AboutQuickFacts } from "@/components/about/hub/about-quick-facts"
import { AboutStoryPreview } from "@/components/about/hub/about-story-preview"
import { AboutStatsBand } from "@/components/about/hub/about-stats-band"
import { AboutPracticesLoop } from "@/components/about/hub/about-practices-loop"
import { AboutTeamCluster } from "@/components/about/hub/about-team-cluster"
import { AboutNotUs } from "@/components/about/hub/about-not-us"
import { AboutServicesPillars } from "@/components/about/hub/about-services-pillars"
import { AboutIndustries } from "@/components/about/hub/about-industries"
import { AboutFinalCta } from "@/components/about/hub/about-final-cta"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About Max Market Pros — Local SEO, Web Design & Lead Gen Team",
  description:
    "We're a senior, in-house digital marketing team out of Irvine, CA — 10 specialists who've helped 1,000+ service businesses grow on Google since 2020.",
  path: "/about",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About | Max Market Pros",
    url: `${SITE_URL}/about`,
    description:
      "Senior, in-house digital marketing team in Irvine, CA — helping service businesses grow on Google since 2020.",
    mainEntity: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
      foundingDate: "2020-03-19",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      numberOfEmployees: 10,
      areaServed: "United States",
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
      <AboutHero />
      <AboutQuickFacts />
      <AboutStoryPreview />
      <AboutStatsBand />
      <AboutPracticesLoop />
      <AboutTeamCluster />
      <AboutNotUs />
      <AboutServicesPillars />
      <AboutIndustries />
      <AboutFinalCta />
      <JsonLd />
    </main>
  )
}
