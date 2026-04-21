import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Contractor Marketing â€” Max Market Pros",
  description: "Marketing strategies for general contractors, builders, and remodelers.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Contractor Marketing"
        description="Marketing strategies for general contractors, builders, and remodelers."
        backHref="/industries"
        backLabel="Back to Industries"
      />
    </main>
  )
}
