import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Business Solutions â€” Max Market Pros",
  description: "Powerful tools and integrations to streamline your business operations.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Business Solutions"
        description="Powerful tools and integrations to streamline your business operations."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
