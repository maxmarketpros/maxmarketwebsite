import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Signature Plan",
  description:
    "Premium plan at $1,299/month for maximum growth and dedicated support.",
  path: "/plans/signature",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Signature Plan"
        description="Premium plan at $1,299/month for maximum growth and dedicated support."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
