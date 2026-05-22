import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WordpressHero } from "@/components/web-design/wordpress/wordpress-hero"
import { WordpressArchitectureStack } from "@/components/web-design/wordpress/wordpress-architecture-stack"
import { WordpressPageBuilders } from "@/components/web-design/wordpress/wordpress-page-builders"
import { WordpressPluginStack } from "@/components/web-design/wordpress/wordpress-plugin-stack"
import { WordpressThemeTiers } from "@/components/web-design/wordpress/wordpress-theme-tiers"
import { WordpressLighthouseStrip } from "@/components/web-design/wordpress/wordpress-lighthouse-strip"
import { WordpressComparison } from "@/components/web-design/wordpress/wordpress-comparison"
import { WordpressProcessTimeline } from "@/components/web-design/wordpress/wordpress-process-timeline"
import { WordpressMigrationStrip } from "@/components/web-design/wordpress/wordpress-migration-strip"
import {
  WordpressFaq,
  WordpressFaqJsonLd,
} from "@/components/web-design/wordpress/wordpress-faq"
import { WordpressFinalCta } from "@/components/web-design/wordpress/wordpress-final-cta"

export const metadata: Metadata = {
  title:
    "WordPress Website Design",
  description:
    "Custom WordPress website design that ranks. Done-for-you Gutenberg, Elementor, or Divi builds with Yoast / Rank Math, WP Rocket, Wordfence, schema markup, Lighthouse 90+, and a 14-day delivery — for service businesses, ecommerce, and agencies.",
  keywords: [
    "WordPress website design",
    "WordPress web design",
    "custom WordPress website design",
    "WordPress website designer",
    "WordPress web designer",
    "WordPress developer",
    "WordPress agency",
    "WordPress design services",
    "Gutenberg block editor design",
    "Elementor design services",
    "Divi design services",
    "Beaver Builder design",
    "WordPress SEO services",
    "Yoast SEO setup",
    "Rank Math setup",
    "WordPress speed optimization",
    "WP Rocket setup",
    "WordPress Core Web Vitals",
    "Wordfence security",
    "WordPress security hardening",
    "WooCommerce design",
    "WordPress migration",
    "Squarespace to WordPress migration",
    "Wix to WordPress migration",
    "GoDaddy to WordPress migration",
    "WordPress redesign",
    "small business WordPress design",
    "service business WordPress design",
  ],
  alternates: { canonical: "/services/web-design/wordpress" },
  openGraph: {
    title:
      "WordPress Website Design",
    description:
      "Done-for-you WordPress website design with Gutenberg or Elementor, Yoast / Rank Math, WP Rocket, schema markup, and Lighthouse 90+ performance. Live in 14 days.",
    type: "website",
    url: "/services/web-design/wordpress",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — WordPress website design that's wired right",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WordPress Website Design",
    description:
      "Custom WordPress website design that ranks. Lighthouse 90+, schema, Yoast / Rank Math, WP Rocket — live in 14 days.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Custom WordPress website design",
    description:
      "Bespoke WordPress builds on Gutenberg, Elementor, Divi, Beaver Builder, Bricks, or a hand-coded child theme — never a stock template. Conversion-first layouts with custom typography and color systems.",
  },
  {
    name: "Plugin & theme architecture",
    description:
      "Curated plugin stack (Yoast / Rank Math, WP Rocket, Wordfence, Gravity Forms, ACF) and a tier-matched theme (block theme, premium framework, or custom child theme) — bloat audited out.",
  },
  {
    name: "WordPress SEO services",
    description:
      "On-page SEO, JSON-LD schema, breadcrumbs, internal-link topology, image compression, and clean URL slugs across every page of your WordPress website design.",
  },
  {
    name: "WooCommerce setup",
    description:
      "WooCommerce builds — product catalog, variants, payments, taxes, shipping, abandoned-cart recovery, and conversion-tuned product templates with GA4 e-commerce tracking.",
  },
  {
    name: "Performance & security hardening",
    description:
      "WP Rocket caching, Cloudflare CDN, image compression to WebP, hardened wp-config, Wordfence WAF, 2FA, brute-force lockouts, and nightly off-host backups.",
  },
  {
    name: "Migration & redesign",
    description:
      "Migrate from Squarespace, Wix, GoDaddy, Webflow, or Shopify onto self-hosted WordPress without losing rankings — full 301 redirect map and zero-downtime DNS cutover.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "WordPress Website Design",
    name: "WordPress Website Design Services",
    description:
      "Done-for-you WordPress website design on Gutenberg, Elementor, Divi, Beaver Builder, Bricks, or a custom child theme. Curated plugin stack with Yoast / Rank Math, WP Rocket, and Wordfence. On-page SEO, schema markup, ecommerce, and migrations — built for service businesses, ecommerce, and agencies. Lighthouse 90+ on mobile, schema on every page, and a fixed 14-day delivery cycle.",
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
      name: "WordPress Website Design Services",
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
        name: "WordPress Website Design",
        item: "https://maxmarketpros.com/services/web-design/wordpress",
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
      <WordpressFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <WordpressHero />
      <WordpressArchitectureStack />
      <WordpressPageBuilders />
      <WordpressPluginStack />
      <WordpressThemeTiers />
      <WordpressLighthouseStrip />
      <WordpressComparison />
      <WordpressProcessTimeline />
      <WordpressMigrationStrip />
      <WordpressFaq />
      <WordpressFinalCta />
      <JsonLd />
    </main>
  )
}
