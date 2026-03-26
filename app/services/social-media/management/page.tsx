import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Social Media Management â€” Max Market Pros",
  description: "Let us handle your social presence from content to community management.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Social Media Management"
        description="Let us handle your social presence from content to community management."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
      <Footer />
    </main>
  )
}
