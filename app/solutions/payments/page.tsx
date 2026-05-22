import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PaymentsHero } from "@/components/solutions/payments/payments-hero"
import { PaymentsStats } from "@/components/solutions/payments/payments-stats"
import { PaymentsBento } from "@/components/solutions/payments/payments-bento"
import { PaymentsHowItWorks } from "@/components/solutions/payments/payments-how-it-works"
import { PaymentsFaq } from "@/components/solutions/payments/payments-faq"
import { paymentsFaqs } from "@/components/solutions/payments/payments-faq-data"
import { PaymentsFinalCta } from "@/components/solutions/payments/payments-final-cta"

export const metadata: Metadata = {
  title: "Accept Payments & Send Invoices Online",
  description:
    "Text-to-pay invoicing, recurring billing, deposits, and estimates — all powered by Stripe and wired into your CRM. Collect invoices 59% faster.",
  keywords: [
    "accept payments for service business",
    "invoice software for contractors",
    "text to pay invoices",
    "online payment processing for small business",
    "recurring billing software",
    "contractor invoicing software",
    "estimate software for service businesses",
  ],
  alternates: { canonical: "/solutions/payments" },
  openGraph: {
    title: "Accept Payments & Send Invoices Online",
    description:
      "Text-to-pay invoicing, recurring billing, deposits, and estimates — powered by Stripe, wired into your CRM.",
    type: "website",
    url: "/solutions/payments",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accept Payments & Send Invoices Online",
    description: "Text-to-pay, recurring billing, deposits. 59% faster collections.",
  },
}

const offerCatalogItems = [
  { name: "Text-to-Pay Invoicing", description: "Send an invoice by SMS, customer taps to pay with Apple Pay or card." },
  { name: "Online Invoicing", description: "Professional branded invoices with line items, tax, and payment terms." },
  { name: "Recurring Billing", description: "Subscriptions, retainers, payment plans with auto-retry." },
  { name: "Estimates & Proposals", description: "Send estimates that convert to invoices on one-click approval." },
  { name: "Payment Links", description: "Reusable pay links and QR codes for any price or open amount." },
  { name: "Deposits & Partial Payments", description: "Deposits, milestone payments, and customer installment plans." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Payment Processing & Invoicing Software",
    name: "Payments & Invoicing",
    description:
      "Integrated payment processing, invoicing, deposits, and recurring billing for service businesses — Stripe-powered.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://www.maxmarketpros.com",
      telephone: "+1-949-603-0389",
      address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Payments Features",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.maxmarketpros.com/solutions" },
      { "@type": "ListItem", position: 3, name: "Payments & Invoicing", item: "https://www.maxmarketpros.com/solutions/payments" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paymentsFaqs.map((f) => ({
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
      <PaymentsHero />
      <PaymentsStats />
      <section id="payments-features">
        <PaymentsBento />
      </section>
      <PaymentsHowItWorks />
      <PaymentsFaq />
      <PaymentsFinalCta />
      <JsonLd />
    </main>
  )
}
