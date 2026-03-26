import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Review Generation â€” Max Market Pros",
  description: "Automated systems to generate more 5-star reviews for your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Review Generation"
        description="Automated systems to generate more 5-star reviews for your business."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
      <Footer />
    </main>
  )
}
