import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Directory Listing Checker â€” Max Market Pros",
  description: "Audit your business listings across 50+ directories.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Directory Listing Checker"
        description="Audit your business listings across 50+ directories."
        backHref="/tools"
        backLabel="Back to Tools"
      />
      <Footer />
    </main>
  )
}
