import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real results and growth stories from businesses we've helped scale.",
  path: "/about/case-studies",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Case Studies"
        description="Real results and growth stories from businesses we've helped scale."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
