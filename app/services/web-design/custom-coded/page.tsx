import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Custom Coded Websites â€” Max Market Pros",
  description: "Fully bespoke, hand-coded websites for maximum performance.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Custom Coded Websites"
        description="Fully bespoke, hand-coded websites for maximum performance."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
      <Footer />
    </main>
  )
}
