import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Restaurant Marketing â€” Max Market Pros",
  description: "Online ordering, reviews, and marketing for restaurants and food service.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Restaurant Marketing"
        description="Online ordering, reviews, and marketing for restaurants and food service."
        backHref="/industries"
        backLabel="Back to Industries"
      />
      <Footer />
    </main>
  )
}
