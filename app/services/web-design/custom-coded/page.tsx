import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CustomCodedHero } from "@/components/web-design/custom-coded/custom-coded-hero"
import { CustomCodedLighthouseScorecard } from "@/components/web-design/custom-coded/custom-coded-lighthouse-scorecard"
import { CustomCodedTechStack } from "@/components/web-design/custom-coded/custom-coded-tech-stack"
import { CustomCodedArchitectureBento } from "@/components/web-design/custom-coded/custom-coded-architecture-bento"
import { CustomCodedBuildBreakdown } from "@/components/web-design/custom-coded/custom-coded-build-breakdown"
import { CustomCodedVsBuilders } from "@/components/web-design/custom-coded/custom-coded-vs-builders"
import { CustomCodedPerfBeforeAfter } from "@/components/web-design/custom-coded/custom-coded-perf-before-after"
import { CustomCodedBuildTimeline } from "@/components/web-design/custom-coded/custom-coded-build-timeline"
import {
  CustomCodedFaq,
  CustomCodedFaqJsonLd,
} from "@/components/web-design/custom-coded/custom-coded-faq"
import { CustomCodedFinalCta } from "@/components/web-design/custom-coded/custom-coded-final-cta"

export const metadata: Metadata = {
  title:
    "Custom Coded Websites — Hand-Built Web Design on Next.js & React | Max Market Pros",
  description:
    "Custom coded websites built from scratch on Next.js, React, TypeScript, and Tailwind. Lighthouse 100s, edge-deployed on Vercel, schema on every page, full code ownership. 6-week launches.",
  keywords: [
    "custom coded websites",
    "custom coded website",
    "hand-coded website",
    "custom coded web design",
    "custom website development",
    "Next.js website",
    "Next.js website design",
    "React website",
    "TypeScript website",
    "Tailwind CSS website",
    "Vercel hosted website",
    "headless CMS website",
    "custom web development services",
    "bespoke website design",
    "custom coded landing page",
    "custom coded ecommerce",
    "Lighthouse 100 website",
    "edge-rendered website",
    "server-side rendered website",
    "custom coded migration",
    "WordPress to Next.js migration",
    "Squarespace to custom coded migration",
    "custom coded website agency",
    "custom website builder",
    "owned-code website",
    "no-template website",
  ],
  alternates: { canonical: "/services/web-design/custom-coded" },
  openGraph: {
    title:
      "Custom Coded Websites — Hand-Built Web Design on Next.js & React | Max Market Pros",
    description:
      "Done-for-you custom coded websites with hand-built React components, headless CMS, edge hosting, JSON-LD schema, and Lighthouse 100s. Live in 6 weeks.",
    type: "website",
    url: "/services/web-design/custom-coded",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — custom coded websites built for speed and SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Coded Websites — Hand-Built Web Design on Next.js & React | Max Market Pros",
    description:
      "Custom coded websites built on Next.js, React, and TypeScript. Lighthouse 100s, edge-deployed on Vercel, full code ownership, 6-week launches.",
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
    name: "Custom coded website design",
    description:
      "Hand-coded React components on Next.js with the App Router, RSC, and edge runtime. No templates, no page builders — every line of code written from scratch and tuned to your brand.",
  },
  {
    name: "Headless CMS implementation",
    description:
      "Sanity content models for services, locations, blog posts, case studies, and authors. Editor-friendly UI with live preview, scheduled publishing, and role-based access.",
  },
  {
    name: "Edge hosting on Vercel",
    description:
      "Global CDN, ISR, automatic image optimization, instant rollbacks, and per-branch preview deployments. SSL, redirects, and security headers handled at the edge.",
  },
  {
    name: "Performance & Core Web Vitals",
    description:
      "Lighthouse 100s on mobile across all four categories. Route-level code splitting, AVIF/WebP image pipeline, font subsetting, and a JS bundle under 50 kB on every page.",
  },
  {
    name: "On-page SEO & schema markup",
    description:
      "JSON-LD schema (LocalBusiness, Service, FAQ, Breadcrumb, Article) on every URL, sitemap.xml, robots.txt, OG images, canonicals, alt text, and an internal-link topology mapped to your top commercial keywords.",
  },
  {
    name: "Migration to a custom coded stack",
    description:
      "Migrate from WordPress, Squarespace, Wix, or Webflow to a custom coded Next.js stack — full 301 redirect map, content audit, indexing check, and zero-downtime DNS cutover.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Coded Website Design",
    name: "Custom Coded Websites",
    description:
      "Done-for-you custom coded websites hand-built on Next.js, React, TypeScript, and Tailwind CSS. Headless CMS, edge hosting on Vercel, on-page SEO, JSON-LD schema, and Lighthouse 100s on mobile. Fixed 6-week delivery for service businesses, ecommerce, and agencies — with full code ownership at handoff.",
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
      name: "Custom Coded Website Services",
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
        name: "Custom Coded Websites",
        item: "https://maxmarketpros.com/services/web-design/custom-coded",
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
      <CustomCodedFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CustomCodedHero />
      <CustomCodedLighthouseScorecard />
      <CustomCodedTechStack />
      <CustomCodedArchitectureBento />
      <CustomCodedBuildBreakdown />
      <CustomCodedVsBuilders />
      <CustomCodedPerfBeforeAfter />
      <CustomCodedBuildTimeline />
      <CustomCodedFaq />
      <CustomCodedFinalCta />
      <JsonLd />
    </main>
  )
}
