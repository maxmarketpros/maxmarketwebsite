import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Marketing ROI Calculator â€” Max Market Pros",
  description: "Calculate the potential return on investment for your marketing spend.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Marketing ROI Calculator"
        description="Calculate the potential return on investment for your marketing spend."
        backHref="/resources"
        backLabel="Back to Resources"
      />
    </main>
  )
}
