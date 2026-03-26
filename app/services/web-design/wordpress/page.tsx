import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "WordPress Websites â€” Max Market Pros",
  description: "Professional WordPress development and ongoing support for your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="WordPress Websites"
        description="Professional WordPress development and ongoing support for your business."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
      <Footer />
    </main>
  )
}
