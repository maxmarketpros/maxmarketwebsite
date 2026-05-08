import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Marketing ROI Calculator",
  description:
    "Calculate the potential return on investment for your marketing spend.",
  path: "/resources/roi-calculator",
  noindex: true,
})

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
