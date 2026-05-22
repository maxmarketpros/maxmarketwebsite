import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PressReleasesHero } from "@/components/seo/press-releases/press-releases-hero"
import { PressReleasesFeaturedIn } from "@/components/seo/press-releases/press-releases-featured-in"
import { PressReleasesWhatsIncluded } from "@/components/seo/press-releases/press-releases-whats-included"
import { PressReleasesTierPyramid } from "@/components/seo/press-releases/press-releases-tier-pyramid"
import { PressReleasesTimeline } from "@/components/seo/press-releases/press-releases-timeline"
import {
  PressReleasesFaq,
  PressReleasesFaqJsonLd,
} from "@/components/seo/press-releases/press-releases-faq"
import { PressReleasesFinalCta } from "@/components/seo/press-releases/press-releases-final-cta"

export const metadata: Metadata = {
  title:
    "Press Release Distribution",
  description:
    "Done-for-you press release distribution to 200+ real outlets — Yahoo Finance, AP News, MarketWatch, Business Insider — with dofollow backlinks and 48-hour turnaround.",
  keywords: [
    "press releases",
    "buy press releases",
    "press release distribution",
    "press release distribution service",
    "press release writing service",
    "digital PR",
    "press release SEO",
    "authority press releases",
    "news distribution service",
    "Yahoo Finance press release",
    "AP News press release",
    "MarketWatch press release",
    "Business Insider press release",
    "newswire distribution",
    "PR distribution",
    "PR agency",
    "media placement",
    "earned media",
    "brand credibility",
    "dofollow backlinks",
    "authority link building",
    "tier 1 press release",
    "PR for SEO",
  ],
  alternates: { canonical: "/services/seo/press-releases" },
  openGraph: {
    title:
      "Press Release Distribution",
    description:
      "Done-for-you press release writing and distribution to 200+ real outlets. Yahoo Finance, AP News, MarketWatch, Business Insider. Real dofollow links, placement reporting, 48-hour turnaround.",
    type: "website",
    url: "/services/seo/press-releases",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Press Releases — land your brand in real news outlets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Press Release Distribution",
    description:
      "Buy press releases that actually rank. 200+ real outlets, real dofollow links, placement reporting, 48-hour turnaround.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Press Release Writing",
    description:
      "Senior PR writers craft a newsworthy angle, a pickup-ready headline, and SEO-tuned copy journalists actually quote.",
  },
  {
    name: "Press Release Distribution",
    description:
      "Distribution across 200+ real newsrooms — Yahoo Finance, AP News, MarketWatch, Business Insider, Benzinga, Digital Journal and more.",
  },
  {
    name: "Tier 1 Media Placement",
    description:
      "Targeted placement on DR 90+ national newsrooms to earn authority backlinks and brand credibility assets.",
  },
  {
    name: "Syndication Management",
    description:
      "Secondary pickups across NBC, CBS, ABC affiliates, industry trade publications, and Google News indexing.",
  },
  {
    name: "Placement Reporting",
    description:
      "A full report with every URL, domain rating, referral traffic, and the keyword positions your release moved.",
  },
  {
    name: "Compliance + Legal Review",
    description:
      "FTC-aligned claim review, disclosures, and legal-safe phrasing so every release clears newsroom editorial gates.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Press Release Distribution and Digital PR",
    name: "Press Release Distribution Service",
    description:
      "Done-for-you press release writing and distribution to 200+ real news outlets including Yahoo Finance, AP News, MarketWatch, Business Insider, Benzinga, and Digital Journal. Real dofollow backlinks, placement reporting, and 48-hour turnaround for businesses buying authority press releases.",
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
      name: "Press Release Services",
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
        name: "SEO",
        item: "https://www.maxmarketpros.com/services/seo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Press Releases",
        item: "https://www.maxmarketpros.com/services/seo/press-releases",
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
      <PressReleasesFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <PressReleasesHero />
      <PressReleasesFeaturedIn />
      <PressReleasesWhatsIncluded />
      <PressReleasesTierPyramid />
      <PressReleasesTimeline />
      <PressReleasesFaq />
      <PressReleasesFinalCta />
      <JsonLd />
    </main>
  )
}
