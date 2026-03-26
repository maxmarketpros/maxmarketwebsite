import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Lead Generation & Management â€” Max Market Pros",
  description: "Capture, track, and nurture every lead through your pipeline.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Lead Generation & Management"
        description="Capture, track, and nurture every lead through your pipeline."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
