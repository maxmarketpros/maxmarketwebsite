import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GoogleAdsHero } from "@/components/paid-ads/google-ads/google-ads-hero"
import { GoogleAdsCampaignTypes } from "@/components/paid-ads/google-ads/google-ads-campaign-types"
import { GoogleAdsLeakAudit } from "@/components/paid-ads/google-ads/google-ads-leak-audit"
import { GoogleAdsVsAlternatives } from "@/components/paid-ads/google-ads/google-ads-vs-alternatives"
import { GoogleAdsLsaShowcase } from "@/components/paid-ads/google-ads/google-ads-lsa-showcase"
import { GoogleAdsResultsDashboard } from "@/components/paid-ads/google-ads/google-ads-results-dashboard"
import {
  GoogleAdsFaq,
  GoogleAdsFaqJsonLd,
} from "@/components/paid-ads/google-ads/google-ads-faq"
import { GoogleAdsFinalCta } from "@/components/paid-ads/google-ads/google-ads-final-cta"

export const metadata: Metadata = {
  title:
    "Google Ads Management",
  description:
    "Done-for-you Google Ads management for local service businesses. Local Services Ads with Google Guaranteed, Search, Performance Max, and Maps — managed to your cost-per-booked-job. Free 3-day audit.",
  keywords: [
    "Google Ads management",
    "Google Ads agency",
    "Local Services Ads",
    "LSA management",
    "Google Guaranteed agency",
    "PPC for contractors",
    "Google Ads for home services",
    "pay-per-click agency",
    "Performance Max management",
    "Google Search ads",
    "Google Maps ads",
    "Google Ads for HVAC",
    "Google Ads for plumbers",
    "Google Ads for roofers",
    "call-only ads",
    "Google Ads conversion tracking",
    "Google Ads audit",
    "done-for-you Google Ads",
    "flat-fee PPC management",
    "local PPC agency",
  ],
  alternates: { canonical: "/services/paid-ads/google-ads" },
  openGraph: {
    title:
      "Google Ads Management",
    description:
      "Done-for-you Google Ads management for local service businesses. Local Services Ads, Google Search, Performance Max — managed to your cost-per-booked-job. Free 3-day audit.",
    type: "website",
    url: "/services/paid-ads/google-ads",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Google Ads management — LSA, Search, Performance Max for local service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Google Ads Management",
    description:
      "Done-for-you Google Ads management for local service businesses. LSA, Search, Performance Max. Free 3-day audit.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Local Services Ads (LSA)",
    description:
      "Google Local Services Ads management with Google Guaranteed verification, lead-quality monitoring, and pay-per-lead dispute handling for service businesses.",
  },
  {
    name: "Google Search Ads",
    description:
      "Google Search campaign management — keyword research, negative-keyword sculpting, ad copy, smart bidding, and weekly Quality Score audits.",
  },
  {
    name: "Performance Max",
    description:
      "Google Performance Max campaign management across Search, Maps, YouTube, Gmail, and Display with asset optimization and audience signaling.",
  },
  {
    name: "Google Maps Ads",
    description:
      "Promoted Map Pack pin placements, business profile optimization, and location-extension management to capture &ldquo;directions&rdquo; intent.",
  },
  {
    name: "Call-Only Ads",
    description:
      "Phone-first mobile Google Ads campaigns built for emergency-service trades like HVAC, plumbing, locksmith, and electrical.",
  },
  {
    name: "YouTube Ads",
    description:
      "Local-targeted YouTube skippable, bumper, and in-feed ad campaigns for brand recall in your service zones.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Google Ads Management",
    name: "Google Ads Management Agency",
    description:
      "Done-for-you Google Ads management for local service businesses including Local Services Ads with Google Guaranteed verification, Google Search, Performance Max, Google Maps Ads, Call-Only Ads, and YouTube Ads. Flat monthly retainer with transparent reporting.",
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
      name: "Google Ads Services",
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
        name: "Paid Ads",
        item: "https://www.maxmarketpros.com/services/paid-ads",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Google Ads",
        item: "https://www.maxmarketpros.com/services/paid-ads/google-ads",
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
      <GoogleAdsFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <GoogleAdsHero />
      <GoogleAdsCampaignTypes />
      <GoogleAdsLeakAudit />
      <GoogleAdsVsAlternatives />
      <GoogleAdsLsaShowcase />
      <GoogleAdsResultsDashboard />
      <GoogleAdsFaq />
      <GoogleAdsFinalCta />
      <JsonLd />
    </main>
  )
}
