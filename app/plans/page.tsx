import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PlansHero } from "@/components/plans/hub/plans-hero"
import { PlansCards } from "@/components/plans/hub/plans-cards"
import { PlansComparison } from "@/components/plans/hub/plans-comparison"
import { PlansALaCarteTeaser } from "@/components/plans/hub/plans-a-la-carte-teaser"
import { PlansCustomWebsiteTeaser } from "@/components/plans/hub/plans-custom-website-teaser"
import { PlansFaq, PlansFaqJsonLd } from "@/components/plans/hub/plans-faq"
import { PlansFinalCta } from "@/components/plans/hub/plans-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"
import { plans } from "@/lib/plans-data"

export const metadata: Metadata = buildMetadata({
  title: "Plans & Pricing",
  description:
    "Marketing plans built for local service businesses — pick the right package for your website, Google presence, local SEO, social media, reviews, CRM, and lead follow-up. Four tiers from $199 to $1,499/mo.",
  path: "/plans",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${SITE_URL}/plans` },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marketing plans by Max Market Pros",
    itemListElement: plans.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/plans#plan-${p.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <PlansFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      {/* Shared backdrop: hero + plan cards share one continuous ambient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-6%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] sm:w-[1100px] sm:h-[760px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
          />
          <div
            className="absolute top-[18%] left-[8%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 60%)" }}
          />
          <div
            className="absolute top-[14%] right-[6%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[820px] h-[420px] sm:w-[1200px] sm:h-[560px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>
        <PlansHero />
        <PlansCards />
      </div>
      <PlansComparison />
      <PlansALaCarteTeaser />
      <PlansCustomWebsiteTeaser />
      <PlansFaq />
      <PlansFinalCta />
      <JsonLd />
    </main>
  )
}
