import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CalculatorHero } from "@/components/plans/a-la-carte/calculator-hero"
import { CalculatorRoot } from "@/components/plans/a-la-carte/calculator-root"
import { ALaCarteFaq, ALaCarteFaqJsonLd } from "@/components/plans/a-la-carte/a-la-carte-faq"
import { ALaCarteFinalCta } from "@/components/plans/a-la-carte/final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Build Your Custom Marketing Estimate",
  description:
    "Pick your services à la carte — websites, local SEO, automation, video, ads, and more — and get a real estimate in seconds. Plan-aware pricing, no commitment.",
  path: "/plans/a-la-carte",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${SITE_URL}/plans` },
      { "@type": "ListItem", position: 3, name: "À la carte", item: `${SITE_URL}/plans/a-la-carte` },
    ],
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ALaCarteFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main className="pb-24 lg:pb-0">
      <Navbar />
      <CalculatorHero />
      <CalculatorRoot />
      <ALaCarteFaq />
      <ALaCarteFinalCta />
      <JsonLd />
    </main>
  )
}
