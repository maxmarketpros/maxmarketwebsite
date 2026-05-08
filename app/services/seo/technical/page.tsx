import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { TechnicalHero } from "@/components/seo/technical/technical-hero"
import { TechnicalVitals } from "@/components/seo/technical/technical-vitals"
import { TechnicalCrawlTree } from "@/components/seo/technical/technical-crawl-tree"
import { TechnicalRobotsSitemap } from "@/components/seo/technical/technical-robots-sitemap"
import { TechnicalIndexation } from "@/components/seo/technical/technical-indexation"
import { TechnicalFaq } from "@/components/seo/technical/technical-faq"
import { technicalFaqs } from "@/components/seo/technical/technical-faq-data"
import { TechnicalFinalCta } from "@/components/seo/technical/technical-final-cta"

export const metadata: Metadata = {
  title:
    "Technical SEO Services",
  description:
    "Technical SEO audits and fixes: Core Web Vitals, crawl budget, indexation, schema markup, robots.txt, and sitemaps. Free technical SEO audit with ship-ready fix list.",
  keywords: [
    "technical SEO",
    "technical SEO services",
    "technical SEO audit",
    "Core Web Vitals",
    "LCP optimization",
    "INP optimization",
    "CLS fix",
    "site speed SEO",
    "page speed SEO",
    "crawl budget",
    "crawl errors",
    "indexation",
    "Google Search Console",
    "robots.txt",
    "sitemap.xml",
    "schema markup",
    "structured data SEO",
    "canonical tags",
    "redirect chains",
    "mobile-first indexing",
    "technical SEO agency",
  ],
  alternates: { canonical: "/services/seo/technical" },
  openGraph: {
    title:
      "Technical SEO Services",
    description:
      "Done-for-you technical SEO: Core Web Vitals, crawl audits, indexation, schema, robots.txt + sitemap.xml. Free technical SEO audit with ship-ready fix list.",
    type: "website",
    url: "/services/seo/technical",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Technical SEO \u2014 Core Web Vitals, crawl, indexation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Technical SEO Services",
    description:
      "Technical SEO that gets you indexed. Core Web Vitals, crawl, indexation, schema. Free audit.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Core Web Vitals Optimization",
    description:
      "Ship LCP, INP, and CLS fixes that move PageSpeed scores and real user metrics into green.",
  },
  {
    name: "Crawl & Index Audits",
    description:
      "Full-site crawl, redirect-chain flattening, orphan discovery, canonical audit, and indexation cleanup.",
  },
  {
    name: "Schema Markup Implementation",
    description:
      "JSON-LD across every URL \u2014 Organization, LocalBusiness, Service, Article, FAQPage, BreadcrumbList, validated in the Rich Results Test.",
  },
  {
    name: "Site Architecture & Redirects",
    description:
      "URL structure, internal linking, redirect hygiene, hreflang, and canonical tag strategy.",
  },
  {
    name: "Mobile-First Optimization",
    description:
      "Mobile-first readiness: responsive design, tap-target sizing, mobile Core Web Vitals, viewport config.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Technical Search Engine Optimization",
    name: "Technical SEO Services",
    description:
      "Done-for-you technical SEO \u2014 Core Web Vitals optimization, crawl and index audits, schema markup, site architecture, and mobile-first readiness. We ship fixes, not PDF audits.",
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
      name: "Technical SEO Services",
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
        name: "Technical SEO",
        item: "https://maxmarketpros.com/services/seo/technical",
      },
    ],
  }

  const stripHtml = (s: string) => s.replace(/<[^>]+>/g, "")

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: technicalFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
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
      <TechnicalHero />
      <TechnicalVitals />
      <TechnicalCrawlTree />
      <TechnicalRobotsSitemap />
      <TechnicalIndexation />
      <TechnicalFaq />
      <TechnicalFinalCta />
      <JsonLd />
    </main>
  )
}
