import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Web Design Services â€” Max Market Pros",
  description: "Beautiful, conversion-focused websites built on any platform.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Web Design Services"
        description="Beautiful, conversion-focused websites built on any platform."
        backHref="/services"
        backLabel="Back to Services"
      />
      <Footer />
    </main>
  )
}
