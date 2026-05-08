import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "Deep dives into how we've helped businesses grow.",
  path: "/resources/case-studies",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Case Studies"
        description="Deep dives into how we've helped businesses grow."
        backHref="/resources"
        backLabel="Back to Resources"
      />
    </main>
  )
}
