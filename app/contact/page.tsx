import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Contact Us â€” Max Market Pros",
  description: "Get in touch with our team for a free consultation or support.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Contact Us"
        description="Get in touch with our team for a free consultation or support."
        backHref="/"
        backLabel="Back to Home"
      />
      <Footer />
    </main>
  )
}
