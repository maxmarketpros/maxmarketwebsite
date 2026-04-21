import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Automated Task Management â€” Max Market Pros",
  description: "Streamline workflows with automated task management tools.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Automated Task Management"
        description="Streamline workflows with automated task management tools."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
    </main>
  )
}
