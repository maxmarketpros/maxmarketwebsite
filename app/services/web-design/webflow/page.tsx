import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Webflow Websites â€” Max Market Pros",
  description: "Premium no-code websites built on Webflow for speed and flexibility.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Webflow Websites"
        description="Premium no-code websites built on Webflow for speed and flexibility."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
      <Footer />
    </main>
  )
}
