import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AiSearchHero } from "@/components/seo/ai-search/ai-search-hero"
import { AiSearchEngineCoverage } from "@/components/seo/ai-search/ai-search-engine-coverage"
import { AiSearchVisibilityCheck } from "@/components/seo/ai-search/ai-search-visibility-check"
import { AiSearchSignalStack } from "@/components/seo/ai-search/ai-search-signal-stack"
import { AiSearchScorecard } from "@/components/seo/ai-search/ai-search-scorecard"
import {
  AiSearchFaq,
  AiSearchFaqJsonLd,
} from "@/components/seo/ai-search/ai-search-faq"
import { AiSearchFinalCta } from "@/components/seo/ai-search/ai-search-final-cta"

export const metadata: Metadata = {
  title:
    "AI Search Visibility — Get Cited by ChatGPT & AI Overviews | Max Market Pros",
  description:
    "Be the business AI recommends. Done-for-you AI search optimization (AEO + GEO) so ChatGPT, Gemini, Perplexity, Microsoft Copilot, Claude, and Google AI Overviews cite you when customers ask. Free 25-query visibility audit.",
  keywords: [
    "AI search",
    "AI search visibility",
    "AI search optimization",
    "AEO",
    "answer engine optimization",
    "GEO",
    "generative engine optimization",
    "LLM SEO",
    "ChatGPT SEO",
    "ChatGPT visibility",
    "Perplexity SEO",
    "Perplexity citations",
    "Gemini SEO",
    "Google AI Overviews",
    "AI Overviews optimization",
    "Microsoft Copilot SEO",
    "Claude SEO",
    "AI citations",
    "schema for AI search",
    "entity SEO",
    "knowledge graph SEO",
    "AI visibility audit",
    "AI search agency",
    "AI search for local business",
    "AI search for service business",
  ],
  alternates: { canonical: "/services/seo/ai-search" },
  openGraph: {
    title:
      "AI Search Visibility — Get Cited by ChatGPT & AI Overviews | Max Market Pros",
    description:
      "Done-for-you AI search optimization. Get cited by ChatGPT, Gemini, Perplexity, Copilot, Claude and Google AI Overviews. Free 25-query visibility audit.",
    type: "website",
    url: "/services/seo/ai-search",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros AI Search Visibility — get cited by every major AI engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Search Visibility — Get Cited by ChatGPT & AI Overviews | Max Market Pros",
    description:
      "Be the answer customers see in AI. ChatGPT, Gemini, Perplexity, Copilot, Claude, AI Overviews — covered. Free visibility audit.",
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
    name: "AI Visibility Audit",
    description:
      "25 buyer queries run across ChatGPT, Gemini, Perplexity, Microsoft Copilot, Claude, and Google AI Overviews — with citation rate, sentiment, and competitor share scored against your business.",
  },
  {
    name: "Entity & E-E-A-T Build-out",
    description:
      "Knowledge Graph entry, sameAs link unification, expertise markup, and review-profile work that gets your business recognized as a real, trustworthy entity by every major AI engine.",
  },
  {
    name: "Schema & Structured Data Layer",
    description:
      "LocalBusiness, Service, FAQ, Review, and Article schema deployed across every page — the structured data AI Overviews and Perplexity lift directly into citations.",
  },
  {
    name: "Citable Content Production",
    description:
      "Service pages rewritten as the short, definitive, fact-dense answer blocks AI engines actually quote — pricing tables, service-area lists, FAQ pairs, and expert quotes.",
  },
  {
    name: "AI Overviews Optimization",
    description:
      "Targeted optimization for the 47% of Google searches now showing AI Overviews — combining technical SEO, schema, and citable content into a single Overviews-ready stack.",
  },
  {
    name: "Cross-Engine Citation Reporting",
    description:
      "Weekly visibility scorecard tracking citation rate, entity presence, source authority, schema coverage, and AI Overviews eligibility — so you see exactly where AI is recommending you.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Search Visibility & Generative Engine Optimization",
    name: "AI Search Visibility (AEO + GEO)",
    description:
      "Done-for-you AI search optimization for service businesses. Get cited by ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, Claude, and Google AI Overviews. Free 25-query visibility audit, entity & schema build-out, citable content production, and weekly cross-engine citation reporting.",
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
      name: "AI Search Services",
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
        name: "AI Search Visibility",
        item: "https://maxmarketpros.com/services/seo/ai-search",
      },
    ],
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
      <AiSearchFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <AiSearchHero />
      <AiSearchEngineCoverage />
      <AiSearchVisibilityCheck />
      <AiSearchSignalStack />
      <AiSearchScorecard />
      <AiSearchFaq />
      <AiSearchFinalCta />
      <JsonLd />
    </main>
  )
}
