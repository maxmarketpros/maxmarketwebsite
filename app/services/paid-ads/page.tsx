import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PaidAdsHero } from "@/components/paid-ads/paid-ads-hero"
import { PaidAdsResults } from "@/components/paid-ads/paid-ads-results"
import { PaidAdsPlatforms } from "@/components/paid-ads/paid-ads-platforms"
import { PaidAdsFormats } from "@/components/paid-ads/paid-ads-formats"
import { PaidAdsPipeline } from "@/components/paid-ads/paid-ads-pipeline"
import { PaidAdsFunnel } from "@/components/paid-ads/paid-ads-funnel"
import { PaidAdsIndustries } from "@/components/paid-ads/paid-ads-industries"
import { PaidAdsFaq } from "@/components/paid-ads/paid-ads-faq"
import { paidAdsFaqs } from "@/components/paid-ads/paid-ads-faq-data"
import { PaidAdsFinalCta } from "@/components/paid-ads/paid-ads-final-cta"

export const metadata: Metadata = {
  title: "Paid Ads Management",
  description:
    "Done-for-you Google Ads, Facebook Ads, Instagram Ads & retargeting campaigns. Transparent ROAS reporting, 4.7× average return. Free ad audit for local service businesses.",
  keywords: [
    "paid ads management",
    "PPC services",
    "Google Ads agency",
    "Facebook Ads agency",
    "Meta Ads management",
    "Instagram Ads",
    "YouTube Ads",
    "retargeting",
    "local paid advertising",
    "ROAS",
    "done-for-you ads",
    "PPC management",
  ],
  alternates: { canonical: "/services/paid-ads" },
  openGraph: {
    title: "Paid Ads Management",
    description:
      "Google Ads, Facebook Ads, Instagram Ads and retargeting — done-for-you by a PPC agency built for local service businesses. 4.7× average ROAS.",
    type: "website",
    url: "/services/paid-ads",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros paid ads management — Google, Meta, and Instagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads Management",
    description:
      "Done-for-you PPC management built for local service businesses. 4.7× average ROAS. Free ad audit.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Google Ads",
    url: "/services/paid-ads/google-ads",
    description:
      "Google Search, Performance Max, Shopping, YouTube Ads, and Local Services Ads managed to your ROAS target.",
  },
  {
    name: "Facebook Ads",
    url: "/services/paid-ads/facebook-ads",
    description:
      "Feed, Reels, Stories, Marketplace and retargeting campaigns on Meta with full creative and Pixel/CAPI setup.",
  },
  {
    name: "Instagram Ads",
    url: "/services/paid-ads/instagram-ads",
    description:
      "Reels, Stories, Feed, and Explore ad placements with in-house creative and influencer whitelisting.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Paid Advertising Management",
    name: "Paid Ads Management",
    description:
      "Done-for-you Google Ads, Facebook Ads, Instagram Ads, YouTube Ads, and retargeting campaign management for local service businesses. Transparent ROAS reporting.",
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
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paid Advertising Services",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
          url: `https://www.maxmarketpros.com${item.url}`,
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
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paidAdsFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
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
      <PaidAdsHero />
      <PaidAdsResults />
      <PaidAdsPlatforms />
      <PaidAdsFormats />
      <PaidAdsPipeline />
      <PaidAdsFunnel />
      <PaidAdsIndustries />
      <PaidAdsFaq />
      <PaidAdsFinalCta />
      <JsonLd />
    </main>
  )
}
