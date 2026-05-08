import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OffPageHero } from "@/components/seo/off-page/off-page-hero"
import { OffPageSignals } from "@/components/seo/off-page/off-page-signals"
import { OffPageLinkTiers } from "@/components/seo/off-page/off-page-link-tiers"
import { OffPageAuthorityGrowth } from "@/components/seo/off-page/off-page-authority-growth"
import { OffPageChannels } from "@/components/seo/off-page/off-page-channels"
import { OffPageFaq } from "@/components/seo/off-page/off-page-faq"
import { offPageFaqs } from "@/components/seo/off-page/off-page-faq-data"
import { OffPageFinalCta } from "@/components/seo/off-page/off-page-final-cta"

export const metadata: Metadata = {
  title:
    "Off-Page SEO Services",
  description:
    "Off-page SEO services: authority link building, digital PR, brand mentions, and citation foundation that grow your domain rating and referring domains. Free audit.",
  keywords: [
    "off-page SEO",
    "off-page SEO services",
    "off-page optimization",
    "link building",
    "backlinks",
    "authority link building",
    "domain authority",
    "domain rating",
    "referring domains",
    "digital PR SEO",
    "brand mentions",
    "HARO link building",
    "guest post SEO",
    "editorial backlinks",
    "anchor text diversity",
    "link velocity",
    "off-page audit",
    "off-page SEO agency",
    "off-page ranking factors",
    "E-E-A-T signals",
  ],
  alternates: { canonical: "/services/seo/off-page" },
  openGraph: {
    title:
      "Off-Page SEO Services",
    description:
      "Done-for-you off-page SEO: digital PR, authority link building, HARO, brand-mention monitoring, and citation foundation that compound into domain-rating growth.",
    type: "website",
    url: "/services/seo/off-page",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Off-Page SEO \u2014 authority + earned links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Off-Page SEO Services",
    description:
      "Off-page SEO that earns links Google actually trusts. Digital PR, authority link building, brand mentions, and citations. Free audit.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Authority Link Building",
    description:
      "Editorial backlinks from DR 70+ publications \u2014 Forbes, Inc, Entrepreneur, HubSpot, industry flagships.",
  },
  {
    name: "Digital PR & Earned Media",
    description:
      "Newsroom-quality pitches placed with journalists for dofollow editorial links + branded mentions.",
  },
  {
    name: "HARO & Expert Sourcing",
    description:
      "Daily journalist-query cycles answered with expert commentary for quote-based editorial links.",
  },
  {
    name: "Brand Mention Monitoring",
    description:
      "Unlinked brand mentions detected daily and converted to dofollow links via editor outreach.",
  },
  {
    name: "Citation Foundation",
    description:
      "50+ NAP-consistent citations across general, geo, and niche directories \u2014 the base of the link pyramid.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Off-Page Search Engine Optimization",
    name: "Off-Page SEO Services",
    description:
      "Done-for-you off-page SEO \u2014 authority link building, digital PR, HARO expert sourcing, brand mention monitoring, and citation foundation. We earn editorial backlinks that grow domain rating and referring domains.",
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
      name: "Off-Page SEO Services",
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
        name: "Off-Page SEO",
        item: "https://maxmarketpros.com/services/seo/off-page",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offPageFaqs.map((f) => ({
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
      <OffPageHero />
      <OffPageSignals />
      <OffPageLinkTiers />
      <OffPageAuthorityGrowth />
      <OffPageChannels />
      <OffPageFaq />
      <OffPageFinalCta />
      <JsonLd />
    </main>
  )
}
