import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Careers â€” Max Market Pros",
  description: "Join our team and help local businesses grow. See open positions.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Careers"
        description="Join our team and help local businesses grow. See open positions."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
