import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Backlinks & Directories â€” Max Market Pros",
  description: "Build citations and directory listings to boost local authority.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Backlinks & Directories"
        description="Build citations and directory listings to boost local authority."
        backHref="/services/seo"
        backLabel="Back to Seo"
      />
    </main>
  )
}
