import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Case Studies â€” Max Market Pros",
  description: "Real results and growth stories from businesses we've helped scale.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Case Studies"
        description="Real results and growth stories from businesses we've helped scale."
        backHref="/about"
        backLabel="Back to About"
      />
    </main>
  )
}
