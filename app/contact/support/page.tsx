import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description: "Need help? Our support team is here for you.",
  path: "/contact/support",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Support"
        description="Need help? Our support team is here for you."
        backHref="/contact"
        backLabel="Back to Contact"
      />
    </main>
  )
}
