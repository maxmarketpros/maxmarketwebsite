import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Custom Designed Websites â€” Max Market Pros",
  description: "Tailored website designs crafted from scratch for your brand.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Custom Designed Websites"
        description="Tailored website designs crafted from scratch for your brand."
        backHref="/services/web-design"
        backLabel="Back to Web Design"
      />
    </main>
  )
}
