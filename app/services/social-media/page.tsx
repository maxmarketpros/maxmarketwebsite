import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Social Media Services â€” Max Market Pros",
  description: "Full-service social media management, content creation, and advertising.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Social Media Services"
        description="Full-service social media management, content creation, and advertising."
        backHref="/services"
        backLabel="Back to Services"
      />
    </main>
  )
}
