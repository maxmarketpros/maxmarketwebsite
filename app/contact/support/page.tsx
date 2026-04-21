import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Support â€” Max Market Pros",
  description: "Need help? Our support team is here for you.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Support"
        description="Need help? Our support team is here for you."
        backHref="/contact"
        backLabel="Back to Contact"
      />
    </main>
  )
}
