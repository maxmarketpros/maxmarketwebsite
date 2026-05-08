import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "A La Carte",
  description: "Pick exactly the services you need. No bundles, no commitments.",
  path: "/plans/a-la-carte",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="A La Carte"
        description="Pick exactly the services you need. No bundles, no commitments."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
