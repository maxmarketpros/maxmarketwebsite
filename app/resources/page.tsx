import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Resources â€” Max Market Pros",
  description: "Guides, case studies, and tools to help you grow your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Resources"
        description="Guides, case studies, and tools to help you grow your business."
        backHref="/"
        backLabel="Back to Home"
      />
    </main>
  )
}
