import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "On-Page SEO â€” Max Market Pros",
  description: "Optimize your website content, meta tags, and structure for higher rankings.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="On-Page SEO"
        description="Optimize your website content, meta tags, and structure for higher rankings."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
      <Footer />
    </main>
  )
}
