import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Schedule a Call â€” Max Market Pros",
  description: "Book a free strategy call with our marketing experts.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Schedule a Call"
        description="Book a free strategy call with our marketing experts."
        backHref="/contact"
        backLabel="Back to Contact"
      />
      <Footer />
    </main>
  )
}
