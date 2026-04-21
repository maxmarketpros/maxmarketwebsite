import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Logo Creator â€” Max Market Pros",
  description: "AI-powered logo generation for your business brand.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Logo Creator"
        description="AI-powered logo generation for your business brand."
        backHref="/tools"
        backLabel="Back to Tools"
      />
    </main>
  )
}
