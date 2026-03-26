import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Paid Advertising â€” Max Market Pros",
  description: "Strategic paid ad campaigns on Google, Facebook, and Instagram.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Paid Advertising"
        description="Strategic paid ad campaigns on Google, Facebook, and Instagram."
        backHref="/services"
        backLabel="Back to Services"
      />
      <Footer />
    </main>
  )
}
