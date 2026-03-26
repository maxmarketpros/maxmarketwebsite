import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Industries We Serve â€” Max Market Pros",
  description: "Specialized marketing solutions for service businesses across industries.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Industries We Serve"
        description="Specialized marketing solutions for service businesses across industries."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
