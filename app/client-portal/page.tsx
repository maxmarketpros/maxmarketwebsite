import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Client Portal",
  description:
    "Access your dashboard, reports, and account management tools.",
  path: "/client-portal",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Client Portal"
        description="Access your dashboard, reports, and account management tools."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
