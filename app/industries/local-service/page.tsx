import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Local Service Business Marketing â€” Max Market Pros",
  description: "Growth strategies for any local service business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Local Service Business Marketing"
        description="Growth strategies for any local service business."
        backHref="/industries"
        backLabel="Back to Industries"
      />
    </main>
  )
}
