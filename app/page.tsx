import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PartnerLogos } from "@/components/partner-logos"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { PlatformSection } from "@/components/platform-section"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <InfrastructureSection />
      <PlatformSection />
      <PricingSection />
    </main>
  )
}
