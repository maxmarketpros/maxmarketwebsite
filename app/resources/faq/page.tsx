import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about our services, plans, and process.",
  path: "/resources/faq",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="FAQ"
        description="Frequently asked questions about our services, plans, and process."
        backHref="/resources"
        backLabel="Back to Resources"
      />
    </main>
  )
}
