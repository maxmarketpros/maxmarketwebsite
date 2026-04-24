import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { LocalHero } from "@/components/seo/local/local-hero"
import { LocalKeywordUniverse } from "@/components/seo/local/local-keyword-universe"
import { LocalGbpAnatomy } from "@/components/seo/local/local-gbp-anatomy"
import { LocalBeforeAfter } from "@/components/seo/local/local-before-after"
import { LocalPromise } from "@/components/seo/local/local-promise"
import { LocalAuditPreview } from "@/components/seo/local/local-audit-preview"
import { LocalFaq } from "@/components/seo/local/local-faq"
import { localFaqs } from "@/components/seo/local/local-faq-data"
import { LocalFinalCta } from "@/components/seo/local/local-final-cta"

export const metadata: Metadata = {
  title:
    "Local SEO Services \u2014 Dominate the Google Map Pack | Max Market Pros",
  description:
    "Local SEO for service businesses. Rank in the Google Map Pack, dominate \u201cnear me\u201d searches, and turn your Google Business Profile into your highest-ROI lead channel. Free audit.",
  keywords: [
    "local SEO",
    "local SEO services",
    "local SEO agency",
    "Google Map Pack",
    "Google Map Pack ranking",
    "Google Business Profile optimization",
    "GBP optimization",
    "GBP SEO",
    "near me SEO",
    "local search ranking",
    "citation building",
    "NAP consistency",
    "service area SEO",
    "multi-location SEO",
    "local pack ranking",
    "Google Maps ranking",
    "local SEO for service businesses",
    "3-pack ranking",
    "review velocity SEO",
    "geo-targeted landing pages",
    "hyperlocal SEO",
  ],
  alternates: { canonical: "/services/seo/local" },
  openGraph: {
    title:
      "Local SEO Services \u2014 Dominate the Google Map Pack | Max Market Pros",
    description:
      "Done-for-you Local SEO, Google Business Profile optimization, review velocity, and multi-city Map Pack rankings for service businesses. Free audit with 90-day forecast.",
    type: "website",
    url: "/services/seo/local",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Local SEO \u2014 own the Google Map Pack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Local SEO Services \u2014 Dominate the Google Map Pack | Max Market Pros",
    description:
      "Local SEO built to rank service businesses in the Google Map Pack. Free audit, real plan, zero pressure.",
    images: ["/services/seo-websites.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const offerCatalogItems = [
  {
    name: "Google Map Pack Ranking",
    description:
      "Rank in the top 3 of the Google Map Pack for every \u201cnear me\u201d search in your service area.",
  },
  {
    name: "Google Business Profile Optimization",
    description:
      "Full GBP optimization \u2014 categories, services, attributes, Q&A, weekly posts, geo-tagged photos.",
  },
  {
    name: "Local Citation Building",
    description:
      "50+ manual local citations, NAP consistency audit, duplicate cleanup, quarterly refresh.",
  },
  {
    name: "Review Generation & Management",
    description:
      "Automated review-request flows, keyword-in-review coaching, 24-hour owner response SLA.",
  },
  {
    name: "Multi-Location & Service-Area SEO",
    description:
      "Per-city geo-landing pages, service-area schema, and multi-GBP management for service businesses.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Local Search Engine Optimization",
    name: "Local SEO Services",
    description:
      "Done-for-you Local SEO, Google Map Pack ranking, Google Business Profile optimization, citation building, review generation, and multi-location local search for service businesses.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://maxmarketpros.com",
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
      name: "Local SEO Services",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://maxmarketpros.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://maxmarketpros.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO",
        item: "https://maxmarketpros.com/services/seo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Local SEO",
        item: "https://maxmarketpros.com/services/seo/local",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <LocalHero />
      <LocalKeywordUniverse />
      <LocalGbpAnatomy />
      <LocalBeforeAfter />
      <LocalPromise />
      <LocalAuditPreview />
      <LocalFaq />
      <LocalFinalCta />
      <JsonLd />
    </main>
  )
}
