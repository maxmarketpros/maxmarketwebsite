import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Local SEO â€” Max Market Pros",
  description: "Get found by customers in your area. Optimize for Google Maps and local search.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Local SEO"
        description="Get found by customers in your area. Optimize for Google Maps and local search."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
