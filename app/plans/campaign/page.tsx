import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Campaign Plan â€” Max Market Pros",
  description: "Project-based marketing campaigns with clear deliverables and timelines.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Campaign Plan"
        description="Project-based marketing campaigns with clear deliverables and timelines."
        backHref="/plans"
        backLabel="Back to Plans"
      />
      <Footer />
    </main>
  )
}
