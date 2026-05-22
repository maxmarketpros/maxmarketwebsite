import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { SeoSerpTakeover } from "@/components/seo/seo-serp-takeover"
import { PlatformSection } from "@/components/platform-section"
import { HomeSolutionsShowcase } from "@/components/home/home-solutions-showcase"
import { IndustriesSection } from "@/components/industries-section"
import { HomeMethod } from "@/components/home/home-method"
import { PricingSection } from "@/components/pricing-section"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, jsonLd } from "@/lib/schema"

const homeMeta = buildMetadata({
  title: "Max Market Pros — Local SEO, Web Design & Lead Gen",
  description:
    "Done-for-you local SEO, web design, and lead generation for service businesses. Track every call, form, and booked job with clear monthly reporting.",
  path: "/",
  ogTitle: "Max Market Pros — Grow on Google. Get more calls and booked jobs.",
})

export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: "Max Market Pros — Local SEO, Web Design & Lead Gen" },
}

const homeBreadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }])

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeBreadcrumb) }}
      />
      <Navbar />
      <HeroSection />
      <InfrastructureSection />
      <SeoSerpTakeover
        heading={
          <>
            Own{" "}
            <span className="whitespace-nowrap">
              <span className="accent-underline">every inch</span>
            </span>{" "}
            of the search page.
          </>
        }
        paragraph="Google shows 6+ placement types on a single results page — AI Overviews, the Map Pack, classic blue links, featured snippets, and more. Every one you own is a competitor you crowd out. Our full marketing stack is engineered to put your brand in as many placements as possible for the searches that drive revenue."
        primaryCta={{ label: "Book a free strategy call", href: "#contact" }}
      />
      <PlatformSection />
      <HomeSolutionsShowcase />
      <IndustriesSection />
      <HomeMethod />
      <PricingSection />
    </main>
  )
}
