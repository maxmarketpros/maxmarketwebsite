import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Document Signing â€” Max Market Pros",
  description: "Digital document signing to close deals faster.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Document Signing"
        description="Digital document signing to close deals faster."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
    </main>
  )
}
