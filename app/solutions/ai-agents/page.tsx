import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "AI Customer Service Agents â€” Max Market Pros",
  description: "24/7 AI-powered chatbots and support agents for your business.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="AI Customer Service Agents"
        description="24/7 AI-powered chatbots and support agents for your business."
        backHref="/solutions"
        backLabel="Back to Solutions"
      />
      <Footer />
    </main>
  )
}
