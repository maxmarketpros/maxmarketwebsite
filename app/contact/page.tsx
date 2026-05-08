import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ContactGetInTouch } from "@/components/contact/contact-get-in-touch"
import { ContactOffice } from "@/components/contact/contact-office"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, jsonLd } from "@/lib/schema"

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to a local growth strategist. Call (949) 603-0389, email info@maxmarketpros.com, or book a free 20-minute strategy call. Office in Irvine, CA.",
  path: "/contact",
})

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
])

export default function Page() {
  return (
    <main>
      <Navbar />
      <ContactGetInTouch />
      <ContactOffice />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />
    </main>
  )
}
