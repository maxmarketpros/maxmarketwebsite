import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PartnerLogos } from "@/components/partner-logos"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { SeoSerpTakeover } from "@/components/seo/seo-serp-takeover"
import { PlatformSection } from "@/components/platform-section"
import { IndustriesSection } from "@/components/industries-section"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnerLogos />
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
      <IndustriesSection />
      <PricingSection />
    </main>
  )
}
