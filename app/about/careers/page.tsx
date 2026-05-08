import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join our team and help local businesses grow. See open positions.",
  path: "/about/careers",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Careers"
        description="Join our team and help local businesses grow. See open positions."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
