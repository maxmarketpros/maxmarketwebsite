import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Our Partners â€” Max Market Pros",
  description: "The technology and agency partners we collaborate with to deliver excellence.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Partners"
        description="The technology and agency partners we collaborate with to deliver excellence."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
