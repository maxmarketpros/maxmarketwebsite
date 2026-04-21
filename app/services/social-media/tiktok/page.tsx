import { Navbar } from "@/components/navbar"
import { UnderConstruction } from "@/components/under-construction"

export const metadata = {
  title: "TikTok Marketing â€” Max Market Pros",
  description: "Short-form video strategy to grow your brand on TikTok.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <UnderConstruction
        title="TikTok Marketing"
        description="Short-form video strategy to grow your brand on TikTok."
        backHref="/services/social-media"
        backLabel="Back to Social Media"
      />
    </main>
  )
}
