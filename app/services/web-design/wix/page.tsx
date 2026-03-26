import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Wix Websites â€” Max Market Pros",
  description: "Expert Wix partner support and website guidance for your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Wix Websites"
        description="Expert Wix partner support and website guidance for your business."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
      <Footer />
    </main>
  )
}
