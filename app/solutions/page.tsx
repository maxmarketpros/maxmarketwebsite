import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SolutionsHub } from "@/components/solutions/solutions-hub"

export const metadata: Metadata = {
  title: "All Solutions",
  description:
    "The complete stack for modern service businesses: lead generation, AI agents, scheduling, payments, email/SMS marketing, analytics, QR codes, document signing, workflows, and custom web apps.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "All Solutions — The Complete Stack for Service Businesses",
    description:
      "Ten integrated solutions — lead gen, AI, scheduling, payments, marketing, analytics — built to run together.",
    type: "website",
    url: "/solutions",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Solutions",
    description: "Ten integrated solutions for service businesses.",
  },
}

const solutionsList = [
  { slug: "lead-generation", name: "Lead Generation" },
  { slug: "ai-agents", name: "AI Agents" },
  { slug: "calendar", name: "Scheduling & Booking" },
  { slug: "payments", name: "Payments" },
  { slug: "email-marketing", name: "Email & SMS Marketing" },
  { slug: "analytics", name: "Analytics & Attribution" },
  { slug: "qr-codes", name: "QR Code Generation" },
  { slug: "document-signing", name: "Document Signing" },
  { slug: "task-management", name: "Workflows & Automation" },
  { slug: "custom-web-apps", name: "Custom Web Apps" },
]

function JsonLd() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Max Market Pros Solutions",
    itemListElement: solutionsList.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.name,
      url: `https://maxmarketpros.com/solutions/${s.slug}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://maxmarketpros.com/solutions" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <SolutionsHub />
      <JsonLd />
    </main>
  )
}
