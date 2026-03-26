import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Case Studies â€” Max Market Pros",
  description: "Deep dives into how we've helped businesses grow.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Case Studies"
        description="Deep dives into how we've helped businesses grow."
        backHref="/resources"
        backLabel="Back to Resources"
      />
      <Footer />
    </main>
  )
}
