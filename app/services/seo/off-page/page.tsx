import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Off-Page SEO â€” Max Market Pros",
  description: "Build domain authority with strategic link building and brand mentions.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Off-Page SEO"
        description="Build domain authority with strategic link building and brand mentions."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
