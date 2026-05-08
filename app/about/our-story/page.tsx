import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "How Max Market Pros was founded and our journey to becoming a trusted growth partner.",
  path: "/about/our-story",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Story"
        description="How Max Market Pros was founded and our journey to becoming a trusted growth partner."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
