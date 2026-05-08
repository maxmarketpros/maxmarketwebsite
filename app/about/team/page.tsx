import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Meet The Team",
  description:
    "Get to know the marketers, designers, and strategists behind your success.",
  path: "/about/team",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Meet The Team"
        description="Get to know the marketers, designers, and strategists behind your success."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
