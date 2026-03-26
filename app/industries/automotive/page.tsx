import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Automotive Marketing â€” Max Market Pros",
  description: "Digital marketing for auto shops, dealerships, and automotive businesses.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Automotive Marketing"
        description="Digital marketing for auto shops, dealerships, and automotive businesses."
        backHref="/industries"
        backLabel="Back to Industries"
      />
      <Footer />
    </main>
  )
}
