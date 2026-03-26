import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "QR Code Generation â€” Max Market Pros",
  description: "Create instant QR codes for marketing materials and campaigns.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="QR Code Generation"
        description="Create instant QR codes for marketing materials and campaigns."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
