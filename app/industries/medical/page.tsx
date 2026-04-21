import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Medical Practice Marketing â€” Max Market Pros",
  description: "Patient acquisition and online presence for doctors, dentists, and clinics.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Medical Practice Marketing"
        description="Patient acquisition and online presence for doctors, dentists, and clinics."
        backHref="/industries"
        backLabel="Back to Industries"
      />
    </main>
  )
}
