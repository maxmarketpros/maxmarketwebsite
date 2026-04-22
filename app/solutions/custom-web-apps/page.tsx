import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CustomWebAppsHero } from "@/components/solutions/custom-web-apps/custom-web-apps-hero"
import { CustomWebAppsStats } from "@/components/solutions/custom-web-apps/custom-web-apps-stats"
import { CustomWebAppsBento } from "@/components/solutions/custom-web-apps/custom-web-apps-bento"
import { CustomWebAppsProcess } from "@/components/solutions/custom-web-apps/custom-web-apps-process"
import { CustomWebAppsFaq } from "@/components/solutions/custom-web-apps/custom-web-apps-faq"
import { customWebAppsFaqs } from "@/components/solutions/custom-web-apps/custom-web-apps-faq-data"
import { CustomWebAppsFinalCta } from "@/components/solutions/custom-web-apps/custom-web-apps-final-cta"

export const metadata: Metadata = {
  title: "Custom Web App Development Agency | Max Market Pros",
  description:
    "Custom internal tools, client portals, and white-label SaaS built on modern stacks (Next.js + Postgres). Fixed scopes, live previews, and full code ownership.",
  keywords: [
    "custom web app development",
    "custom business software",
    "internal tool development",
    "custom SaaS development",
    "client portal development",
    "Next.js development agency",
    "custom web app agency",
  ],
  alternates: { canonical: "/solutions/custom-web-apps" },
  openGraph: {
    title: "Custom Web App Development Agency | Max Market Pros",
    description:
      "Custom web apps, admin tools, and client portals built on Next.js + Postgres. Fixed scopes, predictable delivery, full code ownership.",
    type: "website",
    url: "/solutions/custom-web-apps",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web App Development Agency | Max Market Pros",
    description: "Custom web apps, admin tools, and SaaS — Next.js + Postgres. You own the code.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "Custom Internal Tools", description: "Admin panels, operational dashboards, and line-of-business apps." },
  { name: "Client Portals", description: "White-labeled client portals with projects, files, payments, and messaging." },
  { name: "API & Database Integrations", description: "REST + GraphQL APIs, webhooks, and reliable data pipelines." },
  { name: "White-Label SaaS", description: "Multi-tenant products with Stripe billing and team management." },
  { name: "Dashboards & Admin Panels", description: "Live, role-scoped dashboards connected to your live data sources." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Web App Development",
    name: "Custom Web-Apps",
    description:
      "Custom web application development — internal tools, client portals, white-label SaaS, and admin dashboards built on Next.js and Postgres.",
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
      name: "Custom Web App Services",
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
      { "@type": "ListItem", position: 3, name: "Custom Web-Apps", item: "https://maxmarketpros.com/solutions/custom-web-apps" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: customWebAppsFaqs.map((f) => ({
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
      <CustomWebAppsHero />
      <CustomWebAppsStats />
      <section id="custom-web-apps-features">
        <CustomWebAppsBento />
      </section>
      <CustomWebAppsProcess />
      <CustomWebAppsFaq />
      <CustomWebAppsFinalCta />
      <JsonLd />
    </main>
  )
}
