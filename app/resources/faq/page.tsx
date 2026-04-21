import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "FAQ â€” Max Market Pros",
  description: "Frequently asked questions about our services, plans, and process.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="FAQ"
        description="Frequently asked questions about our services, plans, and process."
        backHref="/resources"
        backLabel="Back to Resources"
      />
    </main>
  )
}
