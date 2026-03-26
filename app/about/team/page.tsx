import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Meet The Team â€” Max Market Pros",
  description: "Get to know the marketers, designers, and strategists behind your success.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Meet The Team"
        description="Get to know the marketers, designers, and strategists behind your success."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
