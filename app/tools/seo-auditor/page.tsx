import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "Website SEO Auditor â€” Max Market Pros",
  description: "Get a free instant SEO audit of your website.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="Website SEO Auditor"
        description="Get a free instant SEO audit of your website."
        backHref="/tools"
        backLabel="Back to Tools"
      />
      <Footer />
    </main>
  )
}
