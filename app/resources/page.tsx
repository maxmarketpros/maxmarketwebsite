import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Guides, case studies, and tools to help you grow your business.",
  path: "/resources",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Resources"
        description="Guides, case studies, and tools to help you grow your business."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
