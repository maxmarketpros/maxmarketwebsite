import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Blog â€” Max Market Pros",
  description: "Marketing tips, industry guides, and the latest digital marketing news.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Blog"
        description="Marketing tips, industry guides, and the latest digital marketing news."
        backHref="/resources"
        backLabel="Back to Resources"
      />
      <Footer />
    </main>
  )
}
