import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about our mission, values, and the team driving results for local service businesses.",
  path: "/about",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="About Max Market Pros"
        description="Learn about our mission, values, and the team driving results for local businesses."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
