import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "GoDaddy Websites â€” Max Market Pros",
  description: "Personalized GoDaddy website design and support.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="GoDaddy Websites"
        description="Personalized GoDaddy website design and support."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
    </main>
  )
}
