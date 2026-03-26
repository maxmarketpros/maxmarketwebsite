import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Our Story â€” Max Market Pros",
  description: "How Max Market Pros was founded and our journey to becoming a trusted growth partner.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Story"
        description="How Max Market Pros was founded and our journey to becoming a trusted growth partner."
        backHref="/about"
        backLabel="Back to About"
      />
      <Footer />
    </main>
  )
}
