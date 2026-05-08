import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { DocumentSigningHero } from "@/components/solutions/document-signing/document-signing-hero"
import { DocumentSigningStats } from "@/components/solutions/document-signing/document-signing-stats"
import { DocumentSigningBento } from "@/components/solutions/document-signing/document-signing-bento"
import { DocumentSigningTemplates } from "@/components/solutions/document-signing/document-signing-templates"
import { DocumentSigningFaq } from "@/components/solutions/document-signing/document-signing-faq"
import { docSigningFaqs } from "@/components/solutions/document-signing/document-signing-faq-data"
import { DocumentSigningFinalCta } from "@/components/solutions/document-signing/document-signing-final-cta"

export const metadata: Metadata = {
  title: "E-Signature Software for Small Business",
  description:
    "Legally binding e-signatures for proposals, service agreements, and change orders. ESIGN + UETA compliant. Signed in 90 seconds on any phone.",
  keywords: [
    "e-signature software",
    "digital contracts for contractors",
    "online proposal signing",
    "electronic signature legally binding",
    "service agreement software",
    "e-signature ESIGN UETA",
    "mobile contract signing",
  ],
  alternates: { canonical: "/solutions/document-signing" },
  openGraph: {
    title: "E-Signature Software for Small Business",
    description:
      "Legally binding e-signatures for contracts, proposals, and change orders — signed on any device in 90 seconds.",
    type: "website",
    url: "/solutions/document-signing",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Signature Software for Small Business",
    description: "Legally binding e-signatures. Court-ready audit trail. Built for service businesses.",
  },
}

const offerCatalogItems = [
  { name: "Proposals & Contracts", description: "Branded proposals with one-click signing and deposit." },
  { name: "E-Signature Fields", description: "Signature, initial, date, text, and checkbox fields." },
  { name: "Audit Trail", description: "IP, device, timestamp, and document hash logged for every signature." },
  { name: "Reusable Templates", description: "Unlimited templates with merge fields and version history." },
  { name: "Mobile-Friendly Signing", description: "72% of signatures come from mobile — signed in under 90 seconds." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electronic Signature Software",
    name: "Document Signing",
    description:
      "Legally binding e-signature software for service businesses — proposals, service agreements, change orders, and NDAs with full audit trail.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://maxmarketpros.com",
      telephone: "+1-949-603-0389",
      address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-Signature Features",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: { "@type": "Service", name: item.name, description: item.description },
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://maxmarketpros.com/solutions" },
      { "@type": "ListItem", position: 3, name: "Document Signing", item: "https://maxmarketpros.com/solutions/document-signing" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: docSigningFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <DocumentSigningHero />
      <DocumentSigningStats />
      <section id="doc-signing-features">
        <DocumentSigningBento />
      </section>
      <DocumentSigningTemplates />
      <DocumentSigningFaq />
      <DocumentSigningFinalCta />
      <JsonLd />
    </main>
  )
}
