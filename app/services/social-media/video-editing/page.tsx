import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { VideoEditingHero } from "@/components/social-media/video-editing/video-editing-hero"
import { VideoEditingFormats } from "@/components/social-media/video-editing/video-editing-formats"
import { VideoEditingBeforeAfter } from "@/components/social-media/video-editing/video-editing-before-after"
import { VideoEditingTurnaround } from "@/components/social-media/video-editing/video-editing-turnaround"
import { VideoEditingPlatformRules } from "@/components/social-media/video-editing/video-editing-platform-rules"
import { VideoEditingToolstack } from "@/components/social-media/video-editing/video-editing-toolstack"
import { VideoEditingResults } from "@/components/social-media/video-editing/video-editing-results"
import {
  VideoEditingFaq,
  VideoEditingFaqJsonLd,
} from "@/components/social-media/video-editing/video-editing-faq"
import { VideoEditingFinalCta } from "@/components/social-media/video-editing/video-editing-final-cta"

export const metadata: Metadata = {
  title:
    "Social Media Video Editing",
  description:
    "Professional video editing services for service businesses. We edit Reels, TikToks, YouTube Shorts and ad creative with <48hr turnaround, platform-native exports, captions, color grading, and unlimited revisions.",
  keywords: [
    "video editing",
    "video editing services",
    "social media video editing",
    "Reels editing",
    "TikTok video editing",
    "YouTube Shorts editing",
    "short-form video editing",
    "vertical video editing",
    "Reels editor",
    "TikTok editor",
    "Shorts editor",
    "video editor for small business",
    "outsourced video editing",
    "video editing agency",
    "Instagram Reels editing",
    "Facebook Reels editing",
    "LinkedIn video editing",
    "video editing for service businesses",
    "monthly video editing",
    "video editing subscription",
    "vertical video for ads",
    "social media video editor",
    "Adobe Premiere editing services",
    "After Effects motion graphics",
    "DaVinci Resolve color grading",
    "caption and SRT services",
  ],
  alternates: { canonical: "/services/social-media/video-editing" },
  openGraph: {
    title:
      "Social Media Video Editing",
    description:
      "Done-for-you video editing for service businesses — Reels, TikToks, YouTube Shorts, ad cuts and long-form. <48hr turnaround, platform-native exports, captions, color, sound design, and unlimited revisions.",
    type: "website",
    url: "/services/social-media/video-editing",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Video Editing Services — Reels, TikToks, YouTube Shorts for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Video Editing",
    description:
      "Professional video editing services. Reels, TikToks, YouTube Shorts and ad creative edited in <48hr with platform-native exports, captions and unlimited revisions.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Reels & Shorts Video Editing",
    description:
      "Vertical 9:16 short-form video editing for Instagram Reels, TikTok, YouTube Shorts and Facebook Reels — hook-tested, captioned, and platform-tuned.",
  },
  {
    name: "Long-form YouTube Editing",
    description:
      "Full long-form YouTube video editing with jump cuts, B-roll layering, music ducking, motion graphics, chapters, end-screens and click-optimized thumbnails.",
  },
  {
    name: "Ad Creative Video Editing",
    description:
      "6/15/30s ad cutdowns and hook-test variants for Meta, TikTok, and YouTube Ads — square, vertical, and horizontal exports per platform.",
  },
  {
    name: "Captions & SRT Files",
    description:
      "Burned-in captions tuned for each platform's safe zone plus editable SRT files for YouTube and accessibility.",
  },
  {
    name: "Color Grading & Sound Mix",
    description:
      "DaVinci Resolve color grade and Fairlight sound mix on every video edit — broadcast-quality finishing on social-budget timelines.",
  },
  {
    name: "Motion Graphics & Thumbnails",
    description:
      "After Effects motion graphics, lower-thirds, kinetic captions, and click-optimized YouTube thumbnails for every long-form edit.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Video Editing",
    name: "Video Editing Services",
    description:
      "Professional video editing services for service businesses — Reels, TikToks, YouTube Shorts, ad creative and long-form video edited with <48hr turnaround, platform-native exports, captions, color grading, sound design and unlimited revisions.",
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
      name: "Video Editing Services",
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
        name: "Video Editing",
        item: "https://www.maxmarketpros.com/services/social-media/video-editing",
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
      <VideoEditingFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <VideoEditingHero />
      <VideoEditingFormats />
      <VideoEditingBeforeAfter />
      <VideoEditingTurnaround />
      <VideoEditingPlatformRules />
      <VideoEditingToolstack />
      <VideoEditingResults />
      <VideoEditingFaq />
      <VideoEditingFinalCta />
      <JsonLd />
    </main>
  )
}
