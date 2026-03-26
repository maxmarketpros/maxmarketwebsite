import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Facebook Ads â€” Max Market Pros",
  description: "Targeted Facebook ad campaigns that drive leads and sales.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Facebook Ads"
        description="Targeted Facebook ad campaigns that drive leads and sales."
        backHref="/services/paid-ads"
        backLabel="Back to Paid Ads"
      />
      <Footer />
    </main>
  )
}
