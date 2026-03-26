import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Google Ads â€” Max Market Pros",
  description: "Search, display, and local service ad campaigns on Google.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Google Ads"
        description="Search, display, and local service ad campaigns on Google."
        backHref="/services/paid-ads"
        backLabel="Back to Paid Ads"
      />
      <Footer />
    </main>
  )
}
