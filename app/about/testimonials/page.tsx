import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Testimonials â€” Max Market Pros",
  description: "Hear directly from our clients about their experience working with us.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Testimonials"
        description="Hear directly from our clients about their experience working with us."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
