import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Client Portal â€” Max Market Pros",
  description: "Access your dashboard, reports, and account management tools.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Client Portal"
        description="Access your dashboard, reports, and account management tools."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
