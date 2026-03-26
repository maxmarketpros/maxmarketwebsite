import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Our Services â€” Max Market Pros",
  description: "Full-service digital marketing: SEO, web design, social media, and paid advertising.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Our Services"
        description="Full-service digital marketing: SEO, web design, social media, and paid advertising."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
