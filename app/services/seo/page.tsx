import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "SEO Services â€” Max Market Pros",
  description: "Dominate search results with our comprehensive SEO strategies.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="SEO Services"
        description="Dominate search results with our comprehensive SEO strategies."
        backHref="/services"
        backLabel="Back to Services"
      />
    </main>
  )
}
