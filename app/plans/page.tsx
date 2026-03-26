import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Our Plans â€” Max Market Pros",
  description: "Flexible marketing plans designed for every stage of business growth.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Plans"
        description="Flexible marketing plans designed for every stage of business growth."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
