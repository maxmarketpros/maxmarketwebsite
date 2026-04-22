import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { QRCodesHero } from "@/components/solutions/qr-codes/qr-codes-hero"
import { QRCodesGenerator } from "@/components/solutions/qr-codes/qr-codes-generator"
import { QRCodesStats } from "@/components/solutions/qr-codes/qr-codes-stats"
import { QRCodesBento } from "@/components/solutions/qr-codes/qr-codes-bento"
import { QRCodesUseCases } from "@/components/solutions/qr-codes/qr-codes-use-cases"
import { QRCodesFaq } from "@/components/solutions/qr-codes/qr-codes-faq"
import { qrCodesFaqs } from "@/components/solutions/qr-codes/qr-codes-faq-data"
import { QRCodesFinalCta } from "@/components/solutions/qr-codes/qr-codes-final-cta"

export const metadata: Metadata = {
  title: "Branded QR Code Generator with Scan Analytics | Max Market Pros",
  description:
    "Custom-branded, dynamically editable QR codes with full scan analytics — for yard signs, menus, truck wraps, business cards, and every physical marketing touchpoint.",
  keywords: [
    "custom QR code generator for business",
    "branded QR codes",
    "trackable QR codes with analytics",
    "QR code marketing",
    "dynamic QR code",
    "QR code for yard signs",
    "bulk QR code generator",
  ],
  alternates: { canonical: "/solutions/qr-codes" },
  openGraph: {
    title: "Branded QR Code Generator with Scan Analytics | Max Market Pros",
    description:
      "Custom-branded QR codes + dynamic URL editing + full scan analytics. Built for offline-first service businesses.",
    type: "website",
    url: "/solutions/qr-codes",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded QR Code Generator with Scan Analytics | Max Market Pros",
    description: "Branded, editable, trackable QR codes for service businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "Branded QR Codes", description: "Custom colors, rounded modules, center logo, stress-tested scannability." },
  { name: "Dynamic QR + Real-time Edits", description: "Change the destination URL of a printed QR anytime." },
  { name: "Scan Analytics", description: "Total, unique, location, device, and time-of-day scan data." },
  { name: "UTM Auto-Tagging", description: "Automatic UTM tags for clean GA4 attribution." },
  { name: "Bulk QR Generation", description: "Hundreds of unique QRs from a single CSV import." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "QR Code Generation & Analytics",
    name: "QR Code Generation",
    description:
      "Custom-branded, dynamic QR code creation with full scan analytics — built for offline-to-online marketing attribution.",
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
      name: "QR Code Features",
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
      { "@type": "ListItem", position: 3, name: "QR Code Generation", item: "https://maxmarketpros.com/solutions/qr-codes" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qrCodesFaqs.map((f) => ({
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
      <QRCodesHero />
      <QRCodesGenerator />
      <QRCodesStats />
      <section id="qr-codes-features">
        <QRCodesBento />
      </section>
      <QRCodesUseCases />
      <QRCodesFaq />
      <QRCodesFinalCta />
      <JsonLd />
    </main>
  )
}
