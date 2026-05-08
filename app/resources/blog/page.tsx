import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Marketing tips, industry guides, and the latest digital marketing news.",
  path: "/resources/blog",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Blog"
        description="Marketing tips, industry guides, and the latest digital marketing news."
        backHref="/resources"
        backLabel="Back to Resources"
      />
    </main>
  )
}
