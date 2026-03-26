import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "YouTube Marketing â€” Max Market Pros",
  description: "Grow your YouTube channel with optimized content and strategy.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="YouTube Marketing"
        description="Grow your YouTube channel with optimized content and strategy."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
      <Footer />
    </main>
  )
}
