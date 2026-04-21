import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "A La Carte â€” Max Market Pros",
  description: "Pick exactly the services you need. No bundles, no commitments.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="A La Carte"
        description="Pick exactly the services you need. No bundles, no commitments."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
