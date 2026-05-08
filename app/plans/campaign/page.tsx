import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Campaign Plan",
  description:
    "Project-based marketing campaigns with clear deliverables and timelines.",
  path: "/plans/campaign",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Campaign Plan"
        description="Project-based marketing campaigns with clear deliverables and timelines."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
