import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AnalyticsHero } from "@/components/solutions/analytics/analytics-hero"
import { AnalyticsStats } from "@/components/solutions/analytics/analytics-stats"
import { AnalyticsBento } from "@/components/solutions/analytics/analytics-bento"
import { AnalyticsDashboard } from "@/components/solutions/analytics/analytics-dashboard"
import { AnalyticsFaq } from "@/components/solutions/analytics/analytics-faq"
import { analyticsFaqs } from "@/components/solutions/analytics/analytics-faq-data"
import { AnalyticsFinalCta } from "@/components/solutions/analytics/analytics-final-cta"

export const metadata: Metadata = {
  title: "Google Analytics & Reporting for Small Business | Max Market Pros",
  description:
    "Full GA4 setup, dynamic call tracking, CRM-linked attribution, and live Looker Studio dashboards — built for service-business owners who need to know what's working.",
  keywords: [
    "marketing analytics for small business",
    "Google Analytics 4 setup",
    "GA4 setup service",
    "conversion tracking for service business",
    "marketing ROI dashboard",
    "dynamic call tracking",
    "Looker Studio reports",
    "marketing attribution",
  ],
  alternates: { canonical: "/solutions/analytics" },
  openGraph: {
    title: "Google Analytics & Reporting for Small Business | Max Market Pros",
    description:
      "GA4, call tracking, attribution, and live dashboards. Every lead and dollar traced to its source.",
    type: "website",
    url: "/solutions/analytics",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Analytics & Reporting for Small Business | Max Market Pros",
    description: "GA4 setup + call tracking + live dashboards. Service-business analytics done right.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "GA4 Setup & Configuration", description: "Full Google Analytics 4 install with events, cross-domain, and documentation." },
  { name: "Dynamic Call Tracking", description: "Source-specific phone numbers with recording and attribution." },
  { name: "Conversion Attribution", description: "Multi-touch attribution tied to CRM revenue data." },
  { name: "Custom Dashboards", description: "Executive and ops dashboards built in Looker Studio." },
  { name: "Goals & Events", description: "Custom event architecture with consistent naming." },
  { name: "Looker Studio Reports", description: "Automated weekly + monthly branded reports." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketing Analytics & Reporting",
    name: "Google Analytics & Reporting",
    description:
      "Full-funnel marketing analytics for service businesses — GA4, call tracking, CRM-linked attribution, and live Looker Studio dashboards.",
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
      name: "Analytics Features",
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
      { "@type": "ListItem", position: 3, name: "Google Analytics", item: "https://maxmarketpros.com/solutions/analytics" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: analyticsFaqs.map((f) => ({
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
      <AnalyticsHero />
      <AnalyticsStats />
      <section id="analytics-features">
        <AnalyticsBento />
      </section>
      <AnalyticsDashboard />
      <AnalyticsFaq />
      <AnalyticsFinalCta />
      <JsonLd />
    </main>
  )
}
