import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Google Analytics â€” Max Market Pros",
  description: "Track every visitor, conversion, and campaign with detailed analytics.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Google Analytics"
        description="Track every visitor, conversion, and campaign with detailed analytics."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
