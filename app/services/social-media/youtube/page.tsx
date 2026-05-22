import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { YoutubeHero } from "@/components/social-media/youtube/youtube-hero"
import { YoutubeScope } from "@/components/social-media/youtube/youtube-scope"
import { YoutubeRetentionCurve } from "@/components/social-media/youtube/youtube-retention-curve"
import { YoutubeThumbnailLab } from "@/components/social-media/youtube/youtube-thumbnail-lab"
import { YoutubeSeoBlueprint } from "@/components/social-media/youtube/youtube-seo-blueprint"
import { YoutubeShortsFlywheel } from "@/components/social-media/youtube/youtube-shorts-flywheel"
import { YoutubeMonetizationRoadmap } from "@/components/social-media/youtube/youtube-monetization-roadmap"
import {
  YoutubeFaq,
  YoutubeFaqJsonLd,
} from "@/components/social-media/youtube/youtube-faq"
import { YoutubeFinalCta } from "@/components/social-media/youtube/youtube-final-cta"

export const metadata: Metadata = {
  title:
    "YouTube Marketing",
  description:
    "Done-for-you YouTube marketing services. We script, shoot, edit, and optimize long-form videos plus 30+ Shorts a month — engineered for watch time, CTR, and channel SEO.",
  keywords: [
    "YouTube marketing services",
    "YouTube marketing agency",
    "YouTube channel management",
    "YouTube management services",
    "YouTube content production agency",
    "YouTube growth agency",
    "YouTube SEO services",
    "YouTube Shorts agency",
    "YouTube Shorts services",
    "YouTube video production services",
    "YouTube thumbnail design services",
    "YouTube channel growth services",
    "YouTube marketing for service businesses",
    "YouTube marketing for small business",
    "long-form video marketing",
    "YouTube content strategy",
    "YouTube channel SEO",
    "YouTube watch time optimization",
    "YouTube monetization services",
    "monthly YouTube management",
    "YouTube marketing packages",
    "YouTube marketing plans",
  ],
  alternates: { canonical: "/services/social-media/youtube" },
  openGraph: {
    title:
      "YouTube Marketing",
    description:
      "Full-service YouTube marketing services — channel strategy, long-form production, 30+ Shorts/mo, CTR-tested thumbnails, full channel SEO, and monthly Studio reporting. One team, one monthly invoice.",
    type: "website",
    url: "/services/social-media/youtube",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros YouTube marketing services — done-for-you YouTube channel management for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "YouTube Marketing",
    description:
      "Done-for-you YouTube marketing services. 8–12 long-form/mo, 30+ Shorts/mo, three thumbnails per video, full channel SEO, monthly Studio report.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Channel Strategy & Content Pillars",
    description:
      "Niche framing, four content pillars, competitor channel teardown, and quarterly funnel review built specifically for YouTube marketing services and long-tail search demand.",
  },
  {
    name: "Long-Form Production",
    description:
      "Scripting, on-site monthly shoot day, A/B-roll editing, color grading, and chapter-mapped 8–18 minute uploads engineered for YouTube watch time.",
  },
  {
    name: "YouTube Shorts Engine",
    description:
      "30+ vertical Shorts per month cut from long-form footage plus 10–15 native Shorts, all wired into the same channel SEO and keyword cluster as long-form.",
  },
  {
    name: "Thumbnails & Titles",
    description:
      "Three custom thumbnail variants and three title variants per long-form video, CTR-tested in the first 48 hours and swapped if click-through drops below 4%.",
  },
  {
    name: "Channel SEO & Metadata",
    description:
      "Keyword research, title and description optimization, tags, chapter timestamps, cards, end screens, and playlist architecture for full YouTube SEO coverage.",
  },
  {
    name: "Community Management & Reporting",
    description:
      "Comment and Community-tab response within 24 hours, pinned-comment hook strategy, monthly YouTube Studio dashboard report, and booked-job attribution wired into your CRM.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "YouTube Marketing Services",
    name: "YouTube Marketing Services",
    description:
      "Done-for-you YouTube marketing services for service businesses — channel strategy, long-form production, YouTube Shorts engine, thumbnail and title CTR testing, channel SEO and metadata, community management, and monthly YouTube Studio reporting.",
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
      name: "YouTube Marketing Services",
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
        name: "Social Media",
        item: "https://www.maxmarketpros.com/services/social-media",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "YouTube Marketing Services",
        item: "https://www.maxmarketpros.com/services/social-media/youtube",
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
      <YoutubeFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <YoutubeHero />
      <YoutubeScope />
      <YoutubeRetentionCurve />
      <YoutubeThumbnailLab />
      <YoutubeSeoBlueprint />
      <YoutubeShortsFlywheel />
      <YoutubeMonetizationRoadmap />
      <YoutubeFaq />
      <YoutubeFinalCta />
      <JsonLd />
    </main>
  )
}
