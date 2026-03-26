import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Calendar Booking â€” Max Market Pros",
  description: "Let clients book appointments online with automated scheduling.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Calendar Booking"
        description="Let clients book appointments online with automated scheduling."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
