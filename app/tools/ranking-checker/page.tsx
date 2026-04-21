import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Local Ranking Checker â€” Max Market Pros",
  description: "Check how your business ranks on Google Maps across different locations.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Local Ranking Checker"
        description="Check how your business ranks on Google Maps across different locations."
        backHref="/tools"
        backLabel="Back to Tools"
      />
    </main>
  )
}
