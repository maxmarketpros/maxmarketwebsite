import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { LocalMarkHero } from "@/components/plans/localmark/localmark-hero"
import { LocalMarkWhoFor } from "@/components/plans/localmark/localmark-who-for"
import { LocalMarkFeatures } from "@/components/plans/localmark/localmark-features"
import { LocalMarkProcess } from "@/components/plans/localmark/localmark-process"
import { LocalMarkLimitations } from "@/components/plans/localmark/localmark-limitations"
import { LocalMarkVsTiers } from "@/components/plans/localmark/localmark-vs-tiers"
import {
  LocalMarkFaq,
  LocalMarkFaqJsonLd,
} from "@/components/plans/localmark/localmark-faq"
import { LocalMarkFinalCta } from "@/components/plans/localmark/localmark-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "LocalMark Plan — $499/mo",
  description:
    "LocalMark is the local-visibility plan for service businesses ready to own Google in their service area. 11-page custom website, 15 SEO keywords, GBP optimization, 40+ directories, Contact Center, chat widget, and dashboard reporting — $499/mo, fully managed in-house.",
  path: "/plans/localmark",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans",     item: `${SITE_URL}/plans` },
      { "@type": "ListItem", position: 3, name: "LocalMark", item: `${SITE_URL}/plans/localmark` },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LocalMark Plan",
    description:
      "Monthly local-marketing plan for service businesses — custom 11-page website, 15 local SEO keywords, Google Business Profile optimization, 40+ directories, Contact Center, website chat widget, and dashboard reporting.",
    brand: { "@type": "Brand", name: "Max Market Pros" },
    offers: {
      "@type": "Offer",
      price: "499.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans/localmark`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "499.00",
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
      <LocalMarkFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <LocalMarkHero />
      <LocalMarkWhoFor />
      <LocalMarkFeatures />
      <LocalMarkProcess />
      <LocalMarkLimitations />
      <LocalMarkVsTiers />
      <LocalMarkFaq />
      <LocalMarkFinalCta />
      <JsonLd />
    </main>
  )
}
