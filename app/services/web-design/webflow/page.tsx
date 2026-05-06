import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WebflowHero } from "@/components/web-design/webflow/webflow-hero"
import { WebflowInteractionsTimeline } from "@/components/web-design/webflow/webflow-interactions-timeline"
import { WebflowCmsBlueprint } from "@/components/web-design/webflow/webflow-cms-blueprint"
import { WebflowHostingGlobe } from "@/components/web-design/webflow/webflow-hosting-globe"
import { WebflowEcosystem } from "@/components/web-design/webflow/webflow-ecosystem"
import { WebflowShowcase } from "@/components/web-design/webflow/webflow-showcase"
import { WebflowComparison } from "@/components/web-design/webflow/webflow-comparison"
import { WebflowProcessTimeline } from "@/components/web-design/webflow/webflow-process-timeline"
import {
  WebflowFaq,
  WebflowFaqJsonLd,
} from "@/components/web-design/webflow/webflow-faq"
import { WebflowFinalCta } from "@/components/web-design/webflow/webflow-final-cta"

export const metadata: Metadata = {
  title:
    "Webflow Website Design Services — Custom Webflow Designers | Max Market Pros",
  description:
    "Custom Webflow website design with hand-built Designer layouts, CMS Collections, and managed hosting. Lighthouse 95+, schema on every page, 14-day delivery.",
  keywords: [
    "Webflow website design",
    "Webflow web design",
    "custom Webflow website design",
    "Webflow website designer",
    "Webflow web designer",
    "Webflow developer",
    "Webflow agency",
    "Webflow design services",
    "Webflow Designer build",
    "Webflow CMS setup",
    "Webflow Collections",
    "Webflow Interactions",
    "Webflow hosting",
    "Webflow SEO services",
    "Webflow schema markup",
    "Webflow Core Web Vitals",
    "Webflow ecommerce",
    "Webflow Memberships",
    "Webflow Logic",
    "Webflow migration",
    "Squarespace to Webflow migration",
    "Wix to Webflow migration",
    "WordPress to Webflow migration",
    "small business Webflow design",
    "service business Webflow design",
  ],
  alternates: { canonical: "/services/web-design/webflow" },
  openGraph: {
    title:
      "Webflow Website Design Services — Custom Webflow Designers | Max Market Pros",
    description:
      "Done-for-you Webflow website design with hand-built Designer layouts, CMS Collections, animation engine, schema markup, and Lighthouse 95+ performance. Live in 14 days.",
    type: "website",
    url: "/services/web-design/webflow",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — Webflow website design that moves with you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Webflow Website Design Services — Custom Webflow Designers | Max Market Pros",
    description:
      "Custom Webflow website design with Designer layouts, CMS Collections, and managed hosting. Lighthouse 95+, 14-day delivery.",
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
    name: "Custom Webflow website design",
    description:
      "Bespoke Webflow builds in the Designer canvas — never a stock template. Conversion-first layouts with a custom design system, Symbols, and Variables tuned to your brand.",
  },
  {
    name: "Webflow CMS Collections setup",
    description:
      "Content modeling for services, areas, case studies, blog posts, and authors. Multi-reference fields and dynamic page templates that scale to 100+ URLs without rewrites.",
  },
  {
    name: "Webflow Interactions & animation",
    description:
      "Five interaction layers — on-load, scroll-triggered, hover, click, and mouse-position — wired in the Designer with zero plugins or external JavaScript.",
  },
  {
    name: "Webflow hosting & performance",
    description:
      "Managed hosting on Webflow's Fastly + AWS CDN, automatic SSL, image optimization to WebP, Brotli compression, and a Lighthouse 95+ pass before launch.",
  },
  {
    name: "Webflow SEO services",
    description:
      "On-page SEO, JSON-LD schema (LocalBusiness, Service, FAQ, Breadcrumb), clean URL slugs, alt text, sitemap.xml, and an internal-link topology built around your top commercial keywords.",
  },
  {
    name: "Migration to Webflow",
    description:
      "Migrate from Squarespace, Wix, GoDaddy, or WordPress onto Webflow without losing rankings — full 301 redirect map, content audit, and zero-downtime DNS cutover.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Webflow Website Design",
    name: "Webflow Website Design Services",
    description:
      "Done-for-you Webflow website design with hand-built Designer layouts, CMS Collections, the Webflow Interactions engine, on-page SEO, JSON-LD schema, and managed hosting on Webflow's CDN. Lighthouse 95+ on mobile, schema on every page, and a fixed 14-day delivery for service businesses, ecommerce, and agencies.",
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
      name: "Webflow Website Design Services",
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
        name: "Webflow Website Design",
        item: "https://maxmarketpros.com/services/web-design/webflow",
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
      <WebflowFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <WebflowHero />
      <WebflowShowcase />
      <WebflowInteractionsTimeline />
      <WebflowCmsBlueprint />
      <WebflowHostingGlobe />
      <WebflowEcosystem />
      <WebflowComparison />
      <WebflowProcessTimeline />
      <WebflowFaq />
      <WebflowFinalCta />
      <JsonLd />
    </main>
  )
}
