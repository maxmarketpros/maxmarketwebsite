import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SignatureHero } from "@/components/plans/signature/signature-hero"
import { SignatureNumbers } from "@/components/plans/signature/signature-numbers"
import { SignatureMonthlyDrop } from "@/components/plans/signature/signature-monthly-drop"
import { SignatureUpgrade } from "@/components/plans/signature/signature-upgrade"
import { SignatureWhoFor } from "@/components/plans/signature/signature-who-for"
import { SignaturePillars } from "@/components/plans/signature/signature-pillars"
import { SignatureProcess } from "@/components/plans/signature/signature-process"
import { SignatureConcierge } from "@/components/plans/signature/signature-concierge"
import { SignatureVsTiers } from "@/components/plans/signature/signature-vs-tiers"
import {
  SignatureFaq,
  SignatureFaqJsonLd,
} from "@/components/plans/signature/signature-faq"
import { SignatureFinalCta } from "@/components/plans/signature/signature-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Signature Plan — $1,499/mo (Flagship)",
  description:
    "Signature is the flagship Max Market Pros plan — 26 features across 5 pillars. 51-page authority website, 50 keywords, 70+ directories, 4 custom videos/mo, 6 graphics from your footage, 12 brand graphics, monthly SEO blog content, custom backlinks, quarterly PR, Google Ads management included, full social management, AI chatbot, review generation, payments, Analytics, and a dedicated strategy + design + video + ads team. $1,499/mo.",
  path: "/plans/signature",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans",     item: `${SITE_URL}/plans` },
      { "@type": "ListItem", position: 3, name: "Signature", item: `${SITE_URL}/plans/signature` },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Signature Plan",
    description:
      "Flagship monthly marketing plan for local service businesses — 51-page custom SEO website, 50 local SEO keywords, GBP optimization, 70+ directories, custom backlinks, quarterly PR, monthly SEO blog content, 4 custom videos/month, 6 custom graphics from your own footage, 12 brand & promo graphics/month, Google Ads management included, full social media management, auto DM replies, custom SMS campaigns, email & SMS marketing, review generation, AI review replies, AI chatbot, auto missed-call text back, Contact Center, website chat widget, workflow automation, payments & invoicing, real-time dashboard, Google Analytics, and call recording.",
    brand: { "@type": "Brand", name: "Max Market Pros" },
    offers: {
      "@type": "Offer",
      price: "1499.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/plans/signature`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1499.00",
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
      <SignatureFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <SignatureHero />
      <SignatureNumbers />
      <SignatureMonthlyDrop />
      <SignatureUpgrade />
      <SignatureWhoFor />
      <SignaturePillars />
      <SignatureProcess />
      <SignatureConcierge />
      <SignatureVsTiers />
      <SignatureFaq />
      <SignatureFinalCta />
      <JsonLd />
    </main>
  )
}
