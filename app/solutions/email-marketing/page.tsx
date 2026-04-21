import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Email Marketing â€” Max Market Pros",
  description: "Automated email campaigns that convert subscribers into customers.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Email Marketing"
        description="Automated email campaigns that convert subscribers into customers."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
    </main>
  )
}
