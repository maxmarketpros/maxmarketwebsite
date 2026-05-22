import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { LeadGenHero } from "@/components/solutions/lead-generation/lead-gen-hero"
import { LeadGenStats } from "@/components/solutions/lead-generation/lead-gen-stats"
import { LeadGenBento } from "@/components/solutions/lead-generation/lead-gen-bento"
import { LeadGenLifecycle } from "@/components/solutions/lead-generation/lead-gen-lifecycle"
import { LeadGenFaq } from "@/components/solutions/lead-generation/lead-gen-faq"
import { leadGenFaqs } from "@/components/solutions/lead-generation/lead-gen-faq-data"
import { LeadGenFinalCta } from "@/components/solutions/lead-generation/lead-gen-final-cta"

export const metadata: Metadata = {
  title: "Lead Generation & Management Software",
  description:
    "All-in-one lead management for service businesses. Unified inbox, missed-call text-back, lead scoring, and automated follow-up — so no inquiry slips away.",
  keywords: [
    "lead management software",
    "CRM for service business",
    "lead generation software",
    "sales pipeline tool",
    "missed call text back",
    "lead scoring",
    "contractor CRM",
    "home services CRM",
  ],
  alternates: { canonical: "/solutions/lead-generation" },
  openGraph: {
    title: "Lead Generation & Management Software",
    description:
      "Unify every lead channel into one inbox. Automated follow-up, lead scoring, and a real sales pipeline built for service businesses.",
    type: "website",
    url: "/solutions/lead-generation",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation & Management Software",
    description:
      "Unified lead inbox. Automated follow-up. Never miss a deal again.",
  },
}

const offerCatalogItems = [
  { name: "Unified Lead Inbox", description: "Every channel in one inbox — calls, texts, forms, email, Facebook." },
  { name: "Web Forms & Pop-ups", description: "No-code forms and exit-intent pop-ups that drop leads straight into the pipeline." },
  { name: "Missed-Call Text-Back", description: "Automatic text reply within 5 seconds of any missed call." },
  { name: "Lead Scoring", description: "Rules-based and behavioral scoring to prioritize hot leads." },
  { name: "Pipeline Automation", description: "Trigger-based pipeline stages, SLA timers, and follow-up sequences." },
  { name: "Contact Enrichment", description: "Auto-populated contact records with location, property, and social data." },
  { name: "Integrations Hub", description: "Native sync with Google Ads, Facebook Lead Ads, Zapier, and 200+ tools." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Lead Generation & Management Software",
    name: "Lead Generation & Management",
    description:
      "All-in-one lead management platform for service businesses — unified inbox, automated follow-up, lead scoring, and pipeline automation.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://www.maxmarketpros.com",
      telephone: "+1-949-603-0389",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Irvine",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lead Management Features",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
        },
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.maxmarketpros.com/solutions" },
      { "@type": "ListItem", position: 3, name: "Lead Generation", item: "https://www.maxmarketpros.com/solutions/lead-generation" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: leadGenFaqs.map((f) => ({
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
      <LeadGenHero />
      <LeadGenStats />
      <section id="lead-gen-features">
        <LeadGenBento />
      </section>
      <LeadGenLifecycle />
      <LeadGenFaq />
      <LeadGenFinalCta />
      <JsonLd />
    </main>
  )
}
