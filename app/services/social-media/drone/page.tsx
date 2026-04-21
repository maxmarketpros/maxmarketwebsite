import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Drone Videography â€” Max Market Pros",
  description: "Stunning aerial video and photography for your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Drone Videography"
        description="Stunning aerial video and photography for your business."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
    </main>
  )
}
