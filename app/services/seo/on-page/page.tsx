import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OnPageHero } from "@/components/seo/on-page/on-page-hero"
import { OnPageElements } from "@/components/seo/on-page/on-page-elements"
import { OnPageStack } from "@/components/seo/on-page/on-page-stack"
import { OnPageContentGrader } from "@/components/seo/on-page/on-page-content-grader"
import { OnPageBeforeAfter } from "@/components/seo/on-page/on-page-before-after"
import { OnPageFaq } from "@/components/seo/on-page/on-page-faq"
import { onPageFaqs } from "@/components/seo/on-page/on-page-faq-data"
import { OnPageFinalCta } from "@/components/seo/on-page/on-page-final-cta"

export const metadata: Metadata = {
  title:
    "On-Page SEO Services \u2014 Rank Every Page You Publish | Max Market Pros",
  description:
    "On-page SEO services for service businesses. Title tags, meta descriptions, schema markup, internal linking, and content optimization that make Google understand every page. Free audit.",
  keywords: [
    "on-page SEO",
    "on-page SEO services",
    "on page SEO",
    "on-page optimization",
    "title tag optimization",
    "meta description optimization",
    "schema markup",
    "schema SEO",
    "internal linking SEO",
    "content optimization",
    "semantic SEO",
    "E-E-A-T SEO",
    "topical authority",
    "content clusters",
    "header tag optimization",
    "H1 optimization",
    "keyword placement",
    "on-page audit",
    "on-page SEO agency",
    "on-page ranking factors",
  ],
  alternates: { canonical: "/services/seo/on-page" },
  openGraph: {
    title:
      "On-Page SEO Services \u2014 Rank Every Page You Publish | Max Market Pros",
    description:
      "Done-for-you on-page SEO: title tags, meta descriptions, schema markup, internal linking, and content optimization. Free 10-page audit with content-score snapshots.",
    type: "website",
    url: "/services/seo/on-page",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros On-Page SEO \u2014 rank every page you publish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "On-Page SEO Services \u2014 Rank Every Page You Publish | Max Market Pros",
    description:
      "On-page SEO that makes Google understand every page. Title tags, meta, schema, internal linking, content scoring. Free audit.",
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
    name: "Title & Meta Optimization",
    description:
      "Keyword-led title tags and intent-matched meta descriptions on every URL, tuned to SERP CTR targets.",
  },
  {
    name: "Schema Markup Implementation",
    description:
      "JSON-LD schema on every page \u2014 Article, FAQPage, Service, LocalBusiness, Breadcrumb \u2014 validated in Rich Results Test.",
  },
  {
    name: "Internal Linking Strategy",
    description:
      "Pillar\u2194cluster topology, semantic anchors, and outbound flow engineered for topical authority.",
  },
  {
    name: "Content Optimization & E-E-A-T",
    description:
      "Heading hierarchy, entity depth, byline + credential schema, updated dates, and quarterly refresh cadence.",
  },
  {
    name: "On-Page Audits & Grading",
    description:
      "Content scoring against a target query set, keyword coverage matrix, and prioritized fix lists per page.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "On-Page Search Engine Optimization",
    name: "On-Page SEO Services",
    description:
      "Done-for-you on-page SEO \u2014 title tags, meta descriptions, schema markup, heading hierarchy, internal linking, and content optimization that make Google understand every page you publish.",
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
      name: "On-Page SEO Services",
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
        name: "On-Page SEO",
        item: "https://maxmarketpros.com/services/seo/on-page",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: onPageFaqs.map((f) => ({
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
      <OnPageHero />
      <OnPageElements />
      <OnPageStack />
      <OnPageContentGrader />
      <OnPageBeforeAfter />
      <OnPageFaq />
      <OnPageFinalCta />
      <JsonLd />
    </main>
  )
}
