import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, jsonLd } from "@/lib/schema"
import { caseStudies } from "@/lib/case-studies-data"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesOverviewStats } from "@/components/case-studies/case-studies-overview-stats"
import { CaseStudyFeature } from "@/components/case-studies/case-study-feature"
import { CaseStudiesFinalCta } from "@/components/case-studies/case-studies-final-cta"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Real SEO & Web Results for Service Businesses",
  description:
    "Two deep dives into how Max Market Pros took a 30-year SoCal concrete contractor and a 22-year pool tile cleaning crew from quiet phones to fully booked calendars — screenshots, rankings, and owner quotes.",
  path: "/resources/case-studies",
})

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Case Studies", path: "/resources/case-studies" },
])

export default function Page() {
  return (
    <main>
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesOverviewStats />
      {caseStudies.map((study, i) => (
        <CaseStudyFeature key={study.slug} study={study} index={i} />
      ))}
      <CaseStudiesFinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
    </main>
  )
}
