import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ToolsHub } from "@/components/tools/tools-hub"

export const metadata: Metadata = {
  title: "Free Marketing Tools",
  description:
    "A free toolkit for service businesses: instant SEO audits, 50+ directory listing scans, and a branded QR code generator — no signup required.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Marketing Tools — The Max Market Pros Toolkit",
    description:
      "Three free, instant tools to audit your online presence: SEO Auditor, Directory Checker, and QR Code Generator.",
    type: "website",
    url: "/tools",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marketing Tools",
    description: "Free SEO, directory, and QR tools for service businesses.",
  },
}

const toolsList = [
  { slug: "seo-auditor", name: "SEO Auditor" },
  { slug: "directory-checker", name: "Directory Checker" },
  { slug: "qr-code-generator", name: "QR Code Generator" },
]

function JsonLd() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Max Market Pros Free Tools",
    itemListElement: toolsList.map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: t.name,
      url: `https://www.maxmarketpros.com/tools/${t.slug}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.maxmarketpros.com/tools" },
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
      <ToolsHub />
      <JsonLd />
    </main>
  )
}
