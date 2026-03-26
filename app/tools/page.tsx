import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Free Marketing Tools â€” Max Market Pros",
  description: "Free tools to audit your online presence and identify growth opportunities.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Free Marketing Tools"
        description="Free tools to audit your online presence and identify growth opportunities."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
