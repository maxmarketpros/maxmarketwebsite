import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ServiceProHero } from "@/components/plans/servicepro/servicepro-hero"
import { ServiceProNumbers } from "@/components/plans/servicepro/servicepro-numbers"
import { ServiceProMonthlyCadence } from "@/components/plans/servicepro/servicepro-monthly-cadence"
import { ServiceProUpgrade } from "@/components/plans/servicepro/servicepro-upgrade"
import { ServiceProWhoFor } from "@/components/plans/servicepro/servicepro-who-for"
import { ServiceProPillars } from "@/components/plans/servicepro/servicepro-pillars"
import { ServiceProProcess } from "@/components/plans/servicepro/servicepro-process"
import { ServiceProLimitations } from "@/components/plans/servicepro/servicepro-limitations"
import { ServiceProVsTiers } from "@/components/plans/servicepro/servicepro-vs-tiers"
import {
  ServiceProFaq,
  ServiceProFaqJsonLd,
} from "@/components/plans/servicepro/servicepro-faq"
import { ServiceProFinalCta } from "@/components/plans/servicepro/servicepro-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "ServicePro Plan — $899/mo (Most Popular)",
  description:
    "ServicePro is the most-popular Max Market Pros plan — 16 features across website & SEO, social media, reviews & CRM automation, and analytics & payments. 21-page custom site, 25 keywords, 70+ directories, AI chatbot, review generation, missed-call text back, payments, and more. $899/mo.",
  path: "/plans/servicepro",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans",      item: `${SITE_URL}/plans` },
      { "@type": "ListItem", position: 3, name: "ServicePro", item: `${SITE_URL}/plans/servicepro` },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ServicePro Plan",
    description:
      "Monthly full-service marketing plan for local service businesses ready to scale — 21-page custom website, 25 local SEO keywords, GBP optimization, 70+ directories, social media publishing with 12 monthly graphics, review generation, AI review replies, AI chatbot, auto missed-call text back, Contact Center, payments and invoicing, Google Analytics, and call recording.",
    brand: { "@type": "Brand", name: "Max Market Pros" },
    offers: {
      "@type": "Offer",
      price: "899.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans/servicepro`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "899.00",
        priceCurrency: "USD",
        unitText: "MONTH",
        billingDuration: "P1M",
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ServiceProFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServiceProHero />
      <ServiceProNumbers />
      <ServiceProMonthlyCadence />
      <ServiceProUpgrade />
      <ServiceProWhoFor />
      <ServiceProPillars />
      <ServiceProProcess />
      <ServiceProLimitations />
      <ServiceProVsTiers />
      <ServiceProFaq />
      <ServiceProFinalCta />
      <JsonLd />
    </main>
  )
}
