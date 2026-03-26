import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "ServicePro Plan â€” Max Market Pros",
  description: "Growth plan at $699/month for full-service marketing and lead generation.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="ServicePro Plan"
        description="Growth plan at $699/month for full-service marketing and lead generation."
        backHref="/plans"
        backLabel="Back to Plans"
      />
      <Footer />
    </main>
  )
}
