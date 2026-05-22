import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SquarespaceHero } from "@/components/web-design/squarespace/squarespace-hero"
import { SquarespaceFeaturesBento } from "@/components/web-design/squarespace/squarespace-features-bento"
import { SquarespaceCapabilitiesStack } from "@/components/web-design/squarespace/squarespace-capabilities-stack"
import { SquarespaceComparison } from "@/components/web-design/squarespace/squarespace-comparison"
import { SquarespaceProcessTimeline } from "@/components/web-design/squarespace/squarespace-process-timeline"
import {
  SquarespaceFaq,
  SquarespaceFaqJsonLd,
} from "@/components/web-design/squarespace/squarespace-faq"
import { SquarespaceFinalCta } from "@/components/web-design/squarespace/squarespace-final-cta"

export const metadata: Metadata = {
  title:
    "Squarespace Website Design",
  description:
    "Custom Squarespace website design that converts. Done-for-you Squarespace 7.1 + Fluid Engine builds with custom CSS, on-page SEO, schema markup, Lighthouse 90+ performance, and a 14-day delivery — for service businesses, ecommerce, and agencies.",
  keywords: [
    "Squarespace website design",
    "Squarespace web design",
    "custom Squarespace website design",
    "Squarespace website designer",
    "Squarespace web designer",
    "Squarespace developer",
    "Squarespace agency",
    "Squarespace design services",
    "Squarespace 7.1 design",
    "Squarespace Fluid Engine",
    "Squarespace template customization",
    "Squarespace custom CSS",
    "Squarespace code injection",
    "Squarespace SEO services",
    "Squarespace SEO",
    "Squarespace ecommerce",
    "Squarespace commerce setup",
    "Squarespace Acuity scheduling",
    "Squarespace migration",
    "WordPress to Squarespace migration",
    "Wix to Squarespace migration",
    "Squarespace redesign",
    "Squarespace website builder agency",
    "small business Squarespace design",
    "service business Squarespace design",
    "Squarespace site speed optimization",
    "Squarespace schema markup",
  ],
  alternates: { canonical: "/services/web-design/squarespace" },
  openGraph: {
    title:
      "Squarespace Website Design",
    description:
      "Done-for-you Squarespace website design with custom CSS, on-page SEO, schema markup, and Lighthouse 90+ performance. Live in 14 days.",
    type: "website",
    url: "/services/web-design/squarespace",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — Squarespace website design that actually converts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Squarespace Website Design",
    description:
      "Custom Squarespace website design that converts. Lighthouse 90+, schema markup, custom CSS — live in 14 days.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Custom Squarespace website design",
    description:
      "Bespoke Squarespace 7.1 + Fluid Engine builds with custom typography, color systems, and conversion-first layouts — never a stock template.",
  },
  {
    name: "Squarespace template customization",
    description:
      "Heavy template customization with custom CSS, code injection, and developer-mode work where defaults stop short.",
  },
  {
    name: "Squarespace SEO services",
    description:
      "On-page SEO, JSON-LD schema, image compression, internal-link topology, and clean URL slugs across every page of your Squarespace website design.",
  },
  {
    name: "Squarespace ecommerce setup",
    description:
      "Squarespace Commerce builds — product catalog, payments, inventory, taxes, shipping, abandoned-cart recovery, and conversion-tuned product templates.",
  },
  {
    name: "Custom CSS + code injection",
    description:
      "Hand-written CSS, header/footer code injection, and per-page custom code blocks that push past the Squarespace default look-and-feel.",
  },
  {
    name: "Migration & redesign",
    description:
      "Migrate from WordPress, Wix, GoDaddy, Webflow, or Shopify onto Squarespace without losing rankings — full 301 redirect map and zero-downtime DNS cutover.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Squarespace Website Design",
    name: "Squarespace Website Design Services",
    description:
      "Done-for-you Squarespace website design on Squarespace 7.1 + Fluid Engine. Custom CSS, code injection, on-page SEO, schema markup, ecommerce, scheduling integrations, and migrations — built for service businesses, ecommerce, and agencies. Lighthouse 90+ on mobile, schema on every page, and a fixed 14-day delivery cycle.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://www.maxmarketpros.com",
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
      name: "Squarespace Website Design Services",
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
        item: "https://www.maxmarketpros.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.maxmarketpros.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Design",
        item: "https://www.maxmarketpros.com/services/web-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Squarespace Website Design",
        item: "https://www.maxmarketpros.com/services/web-design/squarespace",
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
      <SquarespaceFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <SquarespaceHero />
      <SquarespaceFeaturesBento />
      <SquarespaceCapabilitiesStack />
      <SquarespaceComparison />
      <SquarespaceProcessTimeline />
      <SquarespaceFaq />
      <SquarespaceFinalCta />
      <JsonLd />
    </main>
  )
}
