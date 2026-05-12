import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { InstagramAdsHero } from "@/components/paid-ads/instagram-ads/instagram-ads-hero"
import { InstagramAdsPlacements } from "@/components/paid-ads/instagram-ads/instagram-ads-placements"
import { InstagramAdsCreativeStudio } from "@/components/paid-ads/instagram-ads/instagram-ads-creative-studio"
import { InstagramAdsAudienceTargeting } from "@/components/paid-ads/instagram-ads/instagram-ads-audience-targeting"
import { InstagramAdsFunnel } from "@/components/paid-ads/instagram-ads/instagram-ads-funnel"
import { InstagramAdsResultsDashboard } from "@/components/paid-ads/instagram-ads/instagram-ads-results-dashboard"
import {
  InstagramAdsFaq,
  InstagramAdsFaqJsonLd,
} from "@/components/paid-ads/instagram-ads/instagram-ads-faq"
import { InstagramAdsFinalCta } from "@/components/paid-ads/instagram-ads/instagram-ads-final-cta"

export const metadata: Metadata = {
  title:
    "Instagram Ads Management",
  description:
    "Done-for-you Instagram Ads management for local service businesses. Reels, Stories, Feed, Explore + influencer whitelisting on Meta — managed to your cost-per-booked-job. Free 3-day audit.",
  keywords: [
    "Instagram Ads management",
    "Instagram Ads agency",
    "Instagram advertising",
    "Reels Ads",
    "Stories Ads",
    "Instagram Feed Ads",
    "Explore Ads",
    "influencer whitelisting",
    "Meta Ads management",
    "Instagram Ads for contractors",
    "Instagram Ads for HVAC",
    "Instagram Ads for plumbers",
    "Instagram Ads ROAS",
    "IG retargeting",
    "IG creative production",
    "UGC Instagram Ads",
    "Instagram lead generation",
    "Instagram Ads audit",
    "Reels ad creative",
    "cost per booked job",
  ],
  alternates: { canonical: "/services/paid-ads/instagram-ads" },
  openGraph: {
    title:
      "Instagram Ads Management",
    description:
      "Done-for-you Instagram Ads management for local service businesses. Reels, Stories, Feed, Explore + influencer whitelisting on Meta — managed to your cost-per-booked-job. Free 3-day audit.",
    type: "website",
    url: "/services/paid-ads/instagram-ads",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Instagram Ads management — Reels, Stories, Feed, Explore, and influencer whitelisting on Meta for local service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Instagram Ads Management",
    description:
      "Done-for-you Instagram Ads management for local service businesses. Reels, Stories, Feed, Explore & influencer whitelisting on Meta. Free 3-day audit.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Instagram Reels Ads",
    description:
      "Vertical 9:16 Reels ad management on Instagram with weekly creative refresh, hook A/B testing, and audience tuning &mdash; the cheapest CPM placement on Meta when the first 1.5 seconds work.",
  },
  {
    name: "Instagram Stories Ads",
    description:
      "Full-screen 9:16 Stories ad management with mid-funnel retargeting, time-bound offers, and tap-up CTA optimization between organic Stories.",
  },
  {
    name: "Instagram Feed Ads",
    description:
      "Sponsored 1:1 and 4:5 Feed ad management on Instagram including static, carousel, and 60-second video creative produced in-house and tested weekly against the audience cohort.",
  },
  {
    name: "Instagram Explore Ads",
    description:
      "Discovery placement management in the Instagram Explore grid &mdash; the lowest-CPM surface for net-new audience prospecting at scale.",
  },
  {
    name: "Influencer Whitelisting",
    description:
      "Partner-ad permissions, ad setup from the creator handle, lookalike audiences off creator followers, and per-creator reporting for whitelisted Instagram Ads.",
  },
  {
    name: "Instagram Creative Production",
    description:
      "In-house Reels editing, static and carousel design, UGC sourcing and licensing, and influencer whitelisting &mdash; 4 to 8 fresh creative assets per month with a 60-day refresh cadence.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instagram Ads Management",
    name: "Instagram Ads Management Agency",
    description:
      "Done-for-you Instagram Ads management for local service businesses including Reels Ads, Stories Ads, Feed Ads, Explore Ads, influencer whitelisting, and in-house creative production. Flat monthly retainer with transparent reporting.",
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
      name: "Instagram Ads Services",
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
        name: "Instagram Ads",
        item: "https://maxmarketpros.com/services/paid-ads/instagram-ads",
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
      <InstagramAdsFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <InstagramAdsHero />
      <InstagramAdsPlacements />
      <InstagramAdsCreativeStudio />
      <InstagramAdsAudienceTargeting />
      <InstagramAdsFunnel />
      <InstagramAdsResultsDashboard />
      <InstagramAdsFaq />
      <InstagramAdsFinalCta />
      <JsonLd />
    </main>
  )
}
