import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Local Ranking Checker",
  description:
    "Check how your business ranks on Google Maps across different locations.",
  path: "/tools/ranking-checker",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Local Ranking Checker"
        description="Check how your business ranks on Google Maps across different locations."
        backHref="/tools"
        backLabel="Back to Tools"
      />
    </main>
  )
}
