import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, jsonLd, webApplicationSchema } from "@/lib/schema"
import { RoiHero } from "@/components/roi-calculator/roi-hero"
import { RoiCalculator } from "@/components/roi-calculator/roi-calculator"
import { VisibilityStrip } from "@/components/roi-calculator/visibility-strip"
import { RoiClosingCta } from "@/components/roi-calculator/roi-closing-cta"

export const metadata: Metadata = buildMetadata({
  title: "Marketing ROI Calculator — How Many Jobs to Cover Your Marketing",
  description:
    "Enter your average profit per job. See how few jobs it takes to break even on each Max Market Pros plan, plus an honest range of extra work to expect.",
  path: "/resources/roi-calculator",
})

const webAppJsonLd = webApplicationSchema({
  name: "Marketing ROI Calculator",
  description:
    "Calculate how many jobs it takes to cover Max Market Pros plan costs based on your profit per job, with conservative estimates of incremental jobs per plan.",
  path: "/resources/roi-calculator",
  category: "FinanceApplication",
})

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "ROI Calculator", path: "/resources/roi-calculator" },
])

export default function Page() {
  return (
    <main>
      <Navbar />
      <RoiHero />
      <RoiCalculator />
      <VisibilityStrip />
      <RoiClosingCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
    </main>
  )
}
