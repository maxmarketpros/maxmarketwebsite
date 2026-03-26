import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Payments & Invoicing â€” Max Market Pros",
  description: "Accept payments and send professional invoices with ease.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Payments & Invoicing"
        description="Accept payments and send professional invoices with ease."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
