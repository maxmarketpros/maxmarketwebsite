import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Practices",
  description:
    "Our proven methodologies and frameworks for delivering consistent results.",
  path: "/about/practices",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Practices"
        description="Our proven methodologies and frameworks for delivering consistent results."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
