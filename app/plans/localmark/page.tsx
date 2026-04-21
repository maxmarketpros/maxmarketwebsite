import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "LocalMark Plan â€” Max Market Pros",
  description: "Starter plan at $399/month for local visibility and foundational SEO.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="LocalMark Plan"
        description="Starter plan at $399/month for local visibility and foundational SEO."
        backHref="/plans"
        backLabel="Back to Plans"
      />
    </main>
  )
}
