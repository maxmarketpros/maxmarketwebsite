import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "LocalMark Plan",
  description:
    "Starter plan at $399/month for local visibility and foundational SEO.",
  path: "/plans/localmark",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="LocalMark Plan"
        description="Starter plan at $399/month for local visibility and foundational SEO."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
