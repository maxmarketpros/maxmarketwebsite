import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Plans & Pricing",
  description:
    "Flexible marketing plans designed for every stage of business growth.",
  path: "/plans",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Plans"
        description="Flexible marketing plans designed for every stage of business growth."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
