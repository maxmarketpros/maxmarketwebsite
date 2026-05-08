import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Free Marketing Tools",
  description:
    "Free tools to audit your online presence and identify growth opportunities.",
  path: "/tools",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Free Marketing Tools"
        description="Free tools to audit your online presence and identify growth opportunities."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
