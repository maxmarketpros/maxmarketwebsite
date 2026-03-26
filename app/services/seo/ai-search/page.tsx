import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "AI Search Visibility â€” Max Market Pros",
  description: "Optimize your business to be found by AI assistants and AI-powered search.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="AI Search Visibility"
        description="Optimize your business to be found by AI assistants and AI-powered search."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
