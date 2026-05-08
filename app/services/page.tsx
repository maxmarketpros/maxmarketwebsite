import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { IndustriesSection } from "@/components/industries-section"
import { ServicesHero } from "@/components/services/hub/services-hero"
import { ServicesFeatured } from "@/components/services/hub/services-featured"
import { ServicesCatalog } from "@/components/services/hub/services-catalog"
import { ServicesProcess } from "@/components/services/hub/services-process"
import { ServicesFaq } from "@/components/services/hub/services-faq"
import { servicesFaqs } from "@/components/services/hub/services-faq-data"
import { ServicesFinalCta } from "@/components/services/hub/services-final-cta"
import { services } from "@/lib/site-map"

export const metadata: Metadata = {
  title: "Marketing Services",
  description:
    "Every marketing service your business needs under one roof. SEO, web design, social media, and paid ads — 24 services across 4 pillars, one in-house team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Marketing Services",
    description:
      "Every marketing service your business needs under one roof. 24 in-house services across SEO, web design, social media, and paid ads.",
    type: "website",
    url: "/services",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Services",
    description:
      "SEO, web design, social media, and paid ads — 24 services across 4 pillars, run by one in-house team.",
  },
}

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://maxmarketpros.com/services" },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marketing services offered by Max Market Pros",
    itemListElement: services.sections!.map((sec, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: sec.label,
      url: `https://maxmarketpros.com${sec.href}`,
    })),
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicesFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesFeatured />
      <ServicesCatalog />
      <ServicesProcess />
      <IndustriesSection />
      <ServicesFaq />
      <ServicesFinalCta />
      <JsonLd />
    </main>
  )
}
