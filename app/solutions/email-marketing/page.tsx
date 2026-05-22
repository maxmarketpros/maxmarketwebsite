import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { EmailMarketingHero } from "@/components/solutions/email-marketing/email-marketing-hero"
import { EmailMarketingStats } from "@/components/solutions/email-marketing/email-marketing-stats"
import { EmailMarketingBento } from "@/components/solutions/email-marketing/email-marketing-bento"
import { EmailMarketingGallery } from "@/components/solutions/email-marketing/email-marketing-gallery"
import { EmailMarketingFaq } from "@/components/solutions/email-marketing/email-marketing-faq"
import { emailMarketingFaqs } from "@/components/solutions/email-marketing/email-marketing-faq-data"
import { EmailMarketingFinalCta } from "@/components/solutions/email-marketing/email-marketing-final-cta"

export const metadata: Metadata = {
  title: "Email Marketing Automation for Small Business",
  description:
    "Drip campaigns, segmentation, A/B testing, and cross-channel SMS — tied straight to your CRM. Drive 320% more revenue from automated email.",
  keywords: [
    "email marketing automation",
    "drip campaign software",
    "email marketing for small business",
    "email marketing for contractors",
    "automated email sequences",
    "email segmentation",
    "email deliverability",
    "service business email marketing",
  ],
  alternates: { canonical: "/solutions/email-marketing" },
  openGraph: {
    title: "Email Marketing Automation for Small Business",
    description:
      "Drag-and-drop email campaigns, trigger-based drip sequences, and segmentation — hooked straight into your CRM.",
    type: "website",
    url: "/solutions/email-marketing",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Automation for Small Business",
    description: "Drip campaigns, segmentation, A/B testing, cross-channel SMS — built for service businesses.",
  },
}

const offerCatalogItems = [
  { name: "Drip Sequences", description: "Trigger-based multi-step email flows that fire from real customer behavior." },
  { name: "Visual Email Builder", description: "Drag-and-drop email composer with your brand templates." },
  { name: "Segmentation & Tags", description: "Slice lists by service, lifecycle stage, geography, and behavior." },
  { name: "A/B Testing", description: "Test subject lines, creative, and send times; auto-send the winner." },
  { name: "Triggered Automations", description: "50+ trigger types including custom webhooks." },
  { name: "Deliverability Monitoring", description: "SPF, DKIM, DMARC, warmup, and inbox placement tracking." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Email Marketing Automation",
    name: "Email Marketing",
    description:
      "Drag-and-drop email campaigns, drip sequences, segmentation, A/B testing, and deliverability management — purpose-built for service businesses.",
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
      name: "Email Marketing Features",
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
      { "@type": "ListItem", position: 3, name: "Email Marketing", item: "https://maxmarketpros.com/solutions/email-marketing" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: emailMarketingFaqs.map((f) => ({
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
      <EmailMarketingHero />
      <EmailMarketingStats />
      <section id="email-marketing-features">
        <EmailMarketingBento />
      </section>
      <EmailMarketingGallery />
      <EmailMarketingFaq />
      <EmailMarketingFinalCta />
      <JsonLd />
    </main>
  )
}
