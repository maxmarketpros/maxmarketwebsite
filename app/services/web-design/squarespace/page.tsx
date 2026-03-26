import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Squarespace Websites â€” Max Market Pros",
  description: "Polished, modern websites built on Squarespace.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Squarespace Websites"
        description="Polished, modern websites built on Squarespace."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
      <Footer />
    </main>
  )
}
