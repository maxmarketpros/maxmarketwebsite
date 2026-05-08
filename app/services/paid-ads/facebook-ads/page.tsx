import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { FacebookAdsHero } from "@/components/paid-ads/facebook-ads/facebook-ads-hero"
import { FacebookAdsPlacements } from "@/components/paid-ads/facebook-ads/facebook-ads-placements"
import { FacebookAdsLeakAudit } from "@/components/paid-ads/facebook-ads/facebook-ads-leak-audit"
import { FacebookAdsVsAlternatives } from "@/components/paid-ads/facebook-ads/facebook-ads-vs-alternatives"
import { FacebookAdsFunnel } from "@/components/paid-ads/facebook-ads/facebook-ads-funnel"
import { FacebookAdsResultsDashboard } from "@/components/paid-ads/facebook-ads/facebook-ads-results-dashboard"
import {
  FacebookAdsFaq,
  FacebookAdsFaqJsonLd,
} from "@/components/paid-ads/facebook-ads/facebook-ads-faq"
import { FacebookAdsFinalCta } from "@/components/paid-ads/facebook-ads/facebook-ads-final-cta"

export const metadata: Metadata = {
  title:
    "Facebook Ads Management",
  description:
    "Done-for-you Facebook Ads management for local service businesses. Reels, Feed, Stories, lead forms, and retargeting on Meta — managed to your cost-per-booked-job. Free 3-day audit.",
  keywords: [
    "Facebook Ads management",
    "Facebook Ads agency",
    "Meta Ads management",
    "Meta Ads agency",
    "Facebook advertising agency",
    "Facebook Ads for contractors",
    "Facebook Ads for HVAC",
    "Facebook Ads for plumbers",
    "Facebook Ads for service businesses",
    "Reels Ads management",
    "Lead Form Ads",
    "Facebook retargeting agency",
    "Meta Pixel setup",
    "Conversions API agency",
    "Facebook Ads audit",
    "done-for-you Facebook Ads",
    "flat-fee Meta Ads",
    "local Meta Ads agency",
    "Facebook Ads ROAS",
    "Facebook Ads CRO",
  ],
  alternates: { canonical: "/services/paid-ads/facebook-ads" },
  openGraph: {
    title:
      "Facebook Ads Management",
    description:
      "Done-for-you Facebook Ads management for local service businesses. Reels, Feed, Stories, lead forms, and retargeting on Meta — managed to your cost-per-booked-job. Free 3-day audit.",
    type: "website",
    url: "/services/paid-ads/facebook-ads",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Facebook Ads management — Reels, Feed, Stories, lead forms, and retargeting on Meta for local service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Facebook Ads Management",
    description:
      "Done-for-you Facebook Ads management for local service businesses. Reels, Feed, Stories, lead forms & retargeting on Meta. Free 3-day audit, month-to-month.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Facebook Feed Ads",
    description:
      "Sponsored Facebook Feed campaign management with weekly creative refresh, Advantage+ tuning, and audience exclusion logic for service businesses.",
  },
  {
    name: "Reels Ads",
    description:
      "Short-form vertical video Reels ads across Facebook and Instagram, produced in-house and tested weekly against the audience cohort.",
  },
  {
    name: "Stories Ads",
    description:
      "Full-screen 9:16 Stories ad management on Meta with mid-funnel retargeting audiences and tap-up CTA optimization.",
  },
  {
    name: "Lead Form Ads",
    description:
      "Meta Lead Form Ad creation, qualification questions, and real-time CRM sync (ServiceTitan, Jobber, HubSpot, Housecall Pro) so leads hit your sales team in under 5 minutes.",
  },
  {
    name: "Meta Retargeting",
    description:
      "Pixel + Conversions API retargeting across Meta and the Audience Network with funnel-stage audience segmentation and creative tuned per stage.",
  },
  {
    name: "Marketplace Ads",
    description:
      "Targeted Facebook Marketplace ad placements for high-ticket service quotes &mdash; financing, installs, and used-inventory campaigns.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Facebook Ads Management",
    name: "Facebook Ads Management Agency",
    description:
      "Done-for-you Facebook Ads management for local service businesses including Facebook Feed Ads, Reels Ads, Stories Ads, Lead Form Ads, Meta retargeting with Pixel and Conversions API, and Marketplace Ads. Flat monthly retainer, transparent reporting, and no long-term contracts.",
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
      name: "Facebook Ads Services",
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
        name: "Paid Ads",
        item: "https://maxmarketpros.com/services/paid-ads",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Facebook Ads",
        item: "https://maxmarketpros.com/services/paid-ads/facebook-ads",
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
      <FacebookAdsFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <FacebookAdsHero />
      <FacebookAdsPlacements />
      <FacebookAdsLeakAudit />
      <FacebookAdsVsAlternatives />
      <FacebookAdsFunnel />
      <FacebookAdsResultsDashboard />
      <FacebookAdsFaq />
      <FacebookAdsFinalCta />
      <JsonLd />
    </main>
  )
}
