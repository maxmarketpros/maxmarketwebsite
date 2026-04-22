import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SeoHero } from "@/components/seo/seo-hero"
import { SeoStatsStrip } from "@/components/seo/seo-stats-strip"
import { SeoServicesBento } from "@/components/seo/seo-services-bento"
import { SeoProcess } from "@/components/seo/seo-process"
import { SeoResultsStrip } from "@/components/seo/seo-results-strip"
import { SeoIndustries } from "@/components/seo/seo-industries"
import { SeoFaq } from "@/components/seo/seo-faq"
import { seoFaqs } from "@/components/seo/seo-faq-data"
import { SeoFinalCta } from "@/components/seo/seo-final-cta"

export const metadata: Metadata = {
  title: "SEO Services — Rank #1 on Google | Max Market Pros",
  description:
    "Local, technical, on-page, off-page & AI search SEO for service businesses. Done-for-you strategies that drive calls, bookings, and revenue. Free audit.",
  keywords: [
    "SEO services",
    "local SEO",
    "technical SEO",
    "on-page SEO",
    "off-page SEO",
    "AI search optimization",
    "Google rankings",
    "search engine optimization",
    "backlinks",
    "press releases",
  ],
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services — Rank #1 on Google | Max Market Pros",
    description:
      "Local, technical, on-page, off-page, backlinks, AI search and press releases — done-for-you by an SEO agency built for service businesses.",
    type: "website",
    url: "/services/seo",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros SEO services — rank #1 on Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services — Rank #1 on Google | Max Market Pros",
    description:
      "Done-for-you SEO built for local service businesses. Free audit, transparent reporting, measurable ROI.",
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
    name: "Local SEO",
    url: "/services/seo/local",
    description:
      "Rank in the Google Map Pack and local search for your service area.",
  },
  {
    name: "On-Page SEO",
    url: "/services/seo/on-page",
    description:
      "Optimize site content, meta tags, and structure for higher rankings.",
  },
  {
    name: "Technical SEO",
    url: "/services/seo/technical",
    description:
      "Site speed, crawlability, schema markup, and technical optimization.",
  },
  {
    name: "Off-Page SEO",
    url: "/services/seo/off-page",
    description:
      "Strategic link building and brand mentions to grow domain authority.",
  },
  {
    name: "Backlinks & Directories",
    url: "/services/seo/backlinks",
    description:
      "Citation building and directory listings to boost local authority.",
  },
  {
    name: "AI Search Visibility",
    url: "/services/seo/ai-search",
    description:
      "Optimize to be found by ChatGPT, Gemini, Perplexity, and AI Overviews.",
  },
  {
    name: "Press Releases",
    url: "/services/seo/press-releases",
    description:
      "Get featured on news outlets and industry publications for authority.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Search Engine Optimization",
    name: "SEO Services",
    description:
      "Done-for-you local SEO, technical SEO, on-page SEO, off-page SEO, backlinks, AI search optimization, and press releases for service businesses.",
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
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Services",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
          url: `https://maxmarketpros.com${item.url}`,
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
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
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
      <SeoHero />
      <SeoStatsStrip />
      <SeoServicesBento />
      <SeoProcess />
      <SeoResultsStrip />
      <SeoIndustries />
      <SeoFaq />
      <SeoFinalCta />
      <JsonLd />
    </main>
  )
}
