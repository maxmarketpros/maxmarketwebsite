import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Custom Website",
  description: "One-time custom website build tailored to your brand and goals.",
  path: "/plans/custom-website",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Custom Website"
        description="One-time custom website build tailored to your brand and goals."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
