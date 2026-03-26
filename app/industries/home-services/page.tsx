import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Home Services Marketing â€” Max Market Pros",
  description: "Digital marketing for HVAC, plumbing, electrical, and home service businesses.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Home Services Marketing"
        description="Digital marketing for HVAC, plumbing, electrical, and home service businesses."
        backHref="/industries"
        backLabel="Back to Industries"
      />
      <Footer />
    </main>
  )
}
