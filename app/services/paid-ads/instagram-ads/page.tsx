import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Instagram Ads â€” Max Market Pros",
  description: "Visual Instagram advertising to reach your ideal customers.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Instagram Ads"
        description="Visual Instagram advertising to reach your ideal customers."
        backHref="/services/paid-ads"
        backLabel="Back to Paid Ads"
      />
      <Footer />
    </main>
  )
}
