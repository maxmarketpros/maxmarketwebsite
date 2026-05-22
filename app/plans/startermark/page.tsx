import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { StarterMarkHero } from "@/components/plans/startermark/startermark-hero"
import { StarterMarkFeatures } from "@/components/plans/startermark/startermark-features"
import { StarterMarkWhoFor } from "@/components/plans/startermark/startermark-who-for"
import { StarterMarkProcess } from "@/components/plans/startermark/startermark-process"
import { StarterMarkVsTiers } from "@/components/plans/startermark/startermark-vs-tiers"
import {
  StarterMarkFaq,
  StarterMarkFaqJsonLd,
} from "@/components/plans/startermark/startermark-faq"
import { StarterMarkFinalCta } from "@/components/plans/startermark/startermark-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "StarterMark Plan — $199/mo (Foundation)",
  description:
    "StarterMark is the foundation Max Market Pros plan — a 5-page custom SEO website, Google Business Profile optimization, basic local SEO setup, custom logo and branding, hosting and support, and a contact / quote form. Live in 3 weeks. $199/mo.",
  path: "/plans/startermark",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",        item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans",       item: `${SITE_URL}/plans` },
      { "@type": "ListItem", position: 3, name: "StarterMark", item: `${SITE_URL}/plans/startermark` },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "StarterMark Plan",
    description:
      "Foundation monthly marketing plan for local service businesses just getting started — 5-page custom SEO website, 10 local SEO keywords, Google Business Profile optimization, basic local SEO setup, custom logo and basic branding, basic website hosting and support, and a contact / quote form.",
    brand: { "@type": "Brand", name: "Max Market Pros" },
    offers: {
      "@type": "Offer",
      price: "199.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans/startermark`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199.00",
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
      <StarterMarkFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <StarterMarkHero />
      <StarterMarkFeatures />
      <StarterMarkWhoFor />
      <StarterMarkProcess />
      <StarterMarkVsTiers />
      <StarterMarkFaq />
      <StarterMarkFinalCta />
      <JsonLd />
    </main>
  )
}
