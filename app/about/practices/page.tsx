import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Our Practices â€” Max Market Pros",
  description: "Our proven methodologies and frameworks for delivering consistent results.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Practices"
        description="Our proven methodologies and frameworks for delivering consistent results."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
