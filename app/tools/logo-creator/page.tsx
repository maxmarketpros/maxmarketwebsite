import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Logo Creator",
  description: "AI-powered logo generation for your business brand.",
  path: "/tools/logo-creator",
  noindex: true,
})

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Logo Creator"
        description="AI-powered logo generation for your business brand."
        backHref="/tools"
        backLabel="Back to Tools"
      />
    </main>
  )
}
