import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PracticesHero } from "@/components/about/practices/practices-hero"
import { PracticesMethod } from "@/components/about/practices/practices-method"
import { PracticesPillars } from "@/components/about/practices/practices-pillars"
import { PracticesToolkit } from "@/components/about/practices/practices-toolkit"
import { PracticesAntiPlaybook } from "@/components/about/practices/practices-anti-playbook"
import { PracticesGuarantees } from "@/components/about/practices/practices-guarantees"
import { PracticesTeamModel } from "@/components/about/practices/practices-team-model"
import { PracticesFinalCta } from "@/components/about/practices/practices-final-cta"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Practices",
  description:
    "How Max Market Pros works — our audit → strategy → execute → optimize methodology, in-house team model, the quality bars we guarantee, and the tools we work in every day.",
  path: "/about/practices",
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
        name: "Practices",
        item: `${SITE_URL}/about/practices`,
      },
    ],
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Practices | Max Market Pros",
    url: `${SITE_URL}/about/practices`,
    description:
      "How Max Market Pros works — methodology, principles, quality bars, and the tools we use every day.",
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
      <PracticesHero />
      <PracticesMethod />
      <PracticesPillars />
      <PracticesToolkit />
      <PracticesAntiPlaybook />
      <PracticesGuarantees />
      <PracticesTeamModel />
      <PracticesFinalCta />
      <JsonLd />
    </main>
  )
}
