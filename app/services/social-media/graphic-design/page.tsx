import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Graphic Design â€” Max Market Pros",
  description: "Scroll-stopping graphics and visual content for your brand.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Graphic Design"
        description="Scroll-stopping graphics and visual content for your brand."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
    </main>
  )
}
