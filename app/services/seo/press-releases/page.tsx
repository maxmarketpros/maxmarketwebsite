import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Press Releases â€” Max Market Pros",
  description: "Get your business featured in news outlets and industry publications.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Press Releases"
        description="Get your business featured in news outlets and industry publications."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
