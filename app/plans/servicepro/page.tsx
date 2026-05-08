import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "ServicePro Plan",
  description:
    "Growth plan at $699/month for full-service marketing and lead generation.",
  path: "/plans/servicepro",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="ServicePro Plan"
        description="Growth plan at $699/month for full-service marketing and lead generation."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
