import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Technical SEO â€” Max Market Pros",
  description: "Site speed, crawlability, schema markup, and technical optimization.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Technical SEO"
        description="Site speed, crawlability, schema markup, and technical optimization."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
