import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "About Max Market Pros â€” Max Market Pros",
  description: "Learn about our mission, values, and the team driving results for local businesses.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="About Max Market Pros"
        description="Learn about our mission, values, and the team driving results for local businesses."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
