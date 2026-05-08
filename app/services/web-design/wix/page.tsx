import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WixHero } from "@/components/web-design/wix/wix-hero"
import { WixEditorVsStudio } from "@/components/web-design/wix/wix-editor-vs-studio"
import { WixAppMarket } from "@/components/web-design/wix/wix-app-market"
import { WixBusinessStack } from "@/components/web-design/wix/wix-business-stack"
import { WixSeoAccelerator } from "@/components/web-design/wix/wix-seo-accelerator"
import { WixComparison } from "@/components/web-design/wix/wix-comparison"
import { WixFaq, WixFaqJsonLd } from "@/components/web-design/wix/wix-faq"
import { WixFinalCta } from "@/components/web-design/wix/wix-final-cta"

export const metadata: Metadata = {
  title:
    "Wix Website Design",
  description:
    "Custom Wix website design that ranks on Google. Done-for-you Wix Editor and Wix Studio builds with Velo code, App Market integration, schema markup, Lighthouse 90+ performance, and a 14-day delivery — for service businesses, ecommerce, and agencies.",
  keywords: [
    "Wix website design",
    "Wix web design",
    "custom Wix website design",
    "Wix website designer",
    "Wix designer",
    "Wix web designer",
    "Wix Studio designer",
    "Wix Studio agency",
    "Wix Editor designer",
    "Wix design services",
    "Wix CMS",
    "Velo by Wix",
    "Wix App Market integration",
    "Wix Bookings setup",
    "Wix Stores setup",
    "Wix Members Area",
    "Wix Pricing Plans",
    "Wix SEO services",
    "Wix SEO",
    "Wix schema markup",
    "Wix Lighthouse optimization",
    "Wix Core Web Vitals",
    "Wix migration",
    "WordPress to Wix migration",
    "Squarespace to Wix migration",
    "GoDaddy to Wix migration",
    "Wix redesign",
    "small business Wix design",
    "service business Wix design",
    "Wix designer for hire",
    "Wix ecommerce design",
  ],
  alternates: { canonical: "/services/web-design/wix" },
  openGraph: {
    title:
      "Wix Website Design",
    description:
      "Done-for-you Wix website design with Velo code, App Market integration, schema markup, and Lighthouse 90+ performance. Live in 14 days.",
    type: "website",
    url: "/services/web-design/wix",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — Wix website design that ranks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wix Website Design",
    description:
      "Custom Wix website design that ranks. Lighthouse 90+, schema markup, Velo code — live in 14 days.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Custom Wix website design",
    description:
      "Bespoke Wix Editor and Wix Studio builds with custom typography, color systems, and conversion-first layouts — never a stock template or Wix ADI output.",
  },
  {
    name: "Wix Studio designer-grade builds",
    description:
      "Wix Studio responsive grid + breakpoints, CMS collections, dynamic pages, and designer-grade animation — for portfolios, agencies, and multi-location brands.",
  },
  {
    name: "Velo by Wix custom code",
    description:
      "JavaScript on the front end and back end — custom database collections, third-party API integration, webhooks, scheduled jobs, gated content, and SEO schema injection.",
  },
  {
    name: "Wix App Market integration",
    description:
      "Wix Bookings, Wix Stores, Wix Members, Wix Pricing Plans, Wix Forum, Wix Events, and 3rd-party CRM/payments — wired and tuned, not just installed.",
  },
  {
    name: "Wix SEO services",
    description:
      "12-point Wix SEO accelerator: JSON-LD schema on every page, hand-written meta, image compression, internal-link topology, sitemap tuning, and post-launch indexing audit.",
  },
  {
    name: "Wix migration & redesign",
    description:
      "Migrate from WordPress, Squarespace, GoDaddy, Webflow, or Shopify onto Wix without losing rankings — full 301 redirect map and zero-downtime DNS cutover.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wix Website Design",
    name: "Wix Website Design Services",
    description:
      "Done-for-you Wix website design on Wix Editor and Wix Studio. Velo by Wix custom code, Wix App Market integration, on-page SEO, schema markup, ecommerce, scheduling integrations, and migrations — built for service businesses, ecommerce, and agencies. Lighthouse 90+ on mobile, schema on every page, and a fixed 14-day delivery cycle.",
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
      name: "Wix Website Design Services",
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
        name: "Web Design",
        item: "https://maxmarketpros.com/services/web-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Wix Website Design",
        item: "https://maxmarketpros.com/services/web-design/wix",
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
      <WixFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <WixHero />
      <WixEditorVsStudio />
      <WixAppMarket />
      <WixBusinessStack />
      <WixSeoAccelerator />
      <WixComparison />
      <WixFaq />
      <WixFinalCta />
      <JsonLd />
    </main>
  )
}
