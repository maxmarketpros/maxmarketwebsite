import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Custom Web-Apps â€” Max Market Pros",
  description: "Bespoke web applications built for your specific business needs.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Custom Web-Apps"
        description="Bespoke web applications built for your specific business needs."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
    </main>
  )
}
