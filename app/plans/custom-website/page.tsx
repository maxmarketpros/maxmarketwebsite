import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Custom Website â€” Max Market Pros",
  description: "One-time custom website build tailored to your brand and goals.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Custom Website"
        description="One-time custom website build tailored to your brand and goals."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
