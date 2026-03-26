import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Video Editing â€” Max Market Pros",
  description: "Professional video editing for social media, ads, and brand content.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Video Editing"
        description="Professional video editing for social media, ads, and brand content."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
      <Footer />
    </main>
  )
}
