import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { buildMetadata, SITE_URL } from "@/lib/seo"
import { CustomWebsiteHero } from "@/components/plans/custom-website/custom-website-hero"
import { CustomWebsiteIndustries } from "@/components/plans/custom-website/custom-website-industries"
import { CustomWebsiteShowcase } from "@/components/plans/custom-website/custom-website-showcase"
import { CustomWebsiteConfigurator } from "@/components/plans/custom-website/custom-website-configurator"
import { CustomWebsiteTiers } from "@/components/plans/custom-website/custom-website-tiers"
import { CustomWebsiteIncluded } from "@/components/plans/custom-website/custom-website-included"
import { CustomWebsiteVsBuilders } from "@/components/plans/custom-website/custom-website-vs-builders"
import { CustomWebsiteProcess } from "@/components/plans/custom-website/custom-website-process"
import {
  CustomWebsiteFaq,
  CustomWebsiteFaqJsonLd,
} from "@/components/plans/custom-website/custom-website-faq"
import { CustomWebsiteFinalCta } from "@/components/plans/custom-website/custom-website-final-cta"
import { customWebsiteTiers } from "@/lib/plans-data"

export const metadata: Metadata = buildMetadata({
  title: "Custom Website",
  description:
    "Get a custom-designed website that books more jobs. 5-page, 11-page, 21-page, or 51-page builds for local service businesses, from $1,200 one-time.",
  path: "/plans/custom-website",
  noindex: true,
})

function JsonLd() {
  const offers = customWebsiteTiers.map((t) => ({
    "@type": "Offer",
    name: `${t.pages}-page custom website`,
    priceCurrency: "USD",
    price: Number(t.price.replace(/[^0-9.]/g, "")),
    description: t.blurb,
    category: "Custom website build",
  }))

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Website Build",
    name: "Custom Websites for Local Service Businesses",
    description:
      "One-time custom-designed websites for local service businesses — plumbers, HVAC, roofers, landscapers, electricians, and more. Built to bring in calls, easy to maintain, and ready to grow with you.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    offers,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${SITE_URL}/plans` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Website",
        item: `${SITE_URL}/plans/custom-website`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CustomWebsiteFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CustomWebsiteHero />
      <CustomWebsiteIndustries />
      <CustomWebsiteShowcase />
      <CustomWebsiteConfigurator />
      <CustomWebsiteTiers />
      <CustomWebsiteIncluded />
      <CustomWebsiteVsBuilders />
      <CustomWebsiteProcess />
      <CustomWebsiteFaq />
      <CustomWebsiteFinalCta />
      <JsonLd />
    </main>
  )
}
