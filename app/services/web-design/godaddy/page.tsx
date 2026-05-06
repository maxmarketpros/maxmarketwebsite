import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GoDaddyHero } from "@/components/web-design/godaddy/godaddy-hero"
import { GoDaddyServicesBento } from "@/components/web-design/godaddy/godaddy-services-bento"
import { GoDaddySpeedSeoScorecard } from "@/components/web-design/godaddy/godaddy-speed-seo-scorecard"
import { GoDaddyComparison } from "@/components/web-design/godaddy/godaddy-comparison"
import { GoDaddyProcessTimeline } from "@/components/web-design/godaddy/godaddy-process-timeline"
import { GoDaddyMigrationStrip } from "@/components/web-design/godaddy/godaddy-migration-strip"
import {
  GoDaddyFaq,
  GoDaddyFaqJsonLd,
} from "@/components/web-design/godaddy/godaddy-faq"
import { GoDaddyFinalCta } from "@/components/web-design/godaddy/godaddy-final-cta"

export const metadata: Metadata = {
  title:
    "GoDaddy Website Design Services — Custom GoDaddy Designers | Max Market Pros",
  description:
    "Custom GoDaddy website design that converts. Done-for-you Websites + Marketing and Managed WordPress builds with mobile-first layouts, on-page SEO, schema markup, Lighthouse 90+ performance, and a 14-day delivery — for service businesses that want to keep their GoDaddy domain, email, and Payments.",
  keywords: [
    "GoDaddy website design",
    "GoDaddy web design",
    "custom GoDaddy website design",
    "GoDaddy website designer",
    "GoDaddy web designer",
    "GoDaddy website redesign",
    "GoDaddy website builder design",
    "GoDaddy Websites + Marketing design",
    "GoDaddy Managed WordPress design",
    "GoDaddy template customization",
    "GoDaddy SEO services",
    "GoDaddy SEO",
    "GoDaddy site speed optimization",
    "GoDaddy schema markup",
    "GoDaddy Commerce design",
    "GoDaddy site migration",
    "small business GoDaddy design",
    "service business GoDaddy design",
    "GoDaddy designer for hire",
    "GoDaddy website agency",
  ],
  alternates: { canonical: "/services/web-design/godaddy" },
  openGraph: {
    title:
      "GoDaddy Website Design Services — Custom GoDaddy Designers | Max Market Pros",
    description:
      "Done-for-you GoDaddy website design with mobile-first layouts, on-page SEO, schema markup, and Lighthouse 90+ performance. Live in 14 days.",
    type: "website",
    url: "/services/web-design/godaddy",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — GoDaddy website design that actually converts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GoDaddy Website Design Services — Custom GoDaddy Designers | Max Market Pros",
    description:
      "Custom GoDaddy website design that converts. Lighthouse 90+, schema markup, mobile-first layouts — live in 14 days.",
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
    name: "Custom GoDaddy website design",
    description:
      "Bespoke GoDaddy website design inside Websites + Marketing or Managed WordPress — custom typography, color systems, and conversion-first layouts. No stock template.",
  },
  {
    name: "GoDaddy Websites + Marketing design",
    description:
      "Personalized design inside GoDaddy's drag-and-drop builder — custom theme blocks, sticky tap-to-call, conversion-tuned hero, and lead-capture forms.",
  },
  {
    name: "GoDaddy Managed WordPress design",
    description:
      "Custom WordPress builds on GoDaddy's Managed WordPress hosting — themes, plugins, custom post types, and deep on-page SEO control.",
  },
  {
    name: "GoDaddy SEO services",
    description:
      "On-page SEO, JSON-LD schema, image compression, internal-link topology, and clean URL slugs across every page of your GoDaddy website design.",
  },
  {
    name: "GoDaddy speed & Core Web Vitals tuning",
    description:
      "Image and font compression, third-party script audit, and Lighthouse 90+ delivery on real Android devices — Performance, SEO, Accessibility, and Best Practices.",
  },
  {
    name: "GoDaddy redesign & migration",
    description:
      "Redesign your existing GoDaddy site in place, or migrate from another platform onto GoDaddy without losing rankings — full 301 redirect plan included.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "GoDaddy Website Design",
    name: "GoDaddy Website Design Services",
    description:
      "Done-for-you GoDaddy website design on Websites + Marketing and Managed WordPress. Custom design, on-page SEO, schema markup, mobile-first layouts, and Lighthouse 90+ performance — built for service businesses that want to keep their GoDaddy domain, email, and Payments. Fixed 14-day delivery.",
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
      name: "GoDaddy Website Design Services",
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
        name: "GoDaddy Website Design",
        item: "https://maxmarketpros.com/services/web-design/godaddy",
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
      <GoDaddyFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <GoDaddyHero />
      <GoDaddyServicesBento />
      <GoDaddySpeedSeoScorecard />
      <GoDaddyComparison />
      <GoDaddyProcessTimeline />
      <GoDaddyMigrationStrip />
      <GoDaddyFaq />
      <GoDaddyFinalCta />
      <JsonLd />
    </main>
  )
}
