import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { TiktokHero } from "@/components/social-media/tiktok/tiktok-hero"
import { TiktokScope } from "@/components/social-media/tiktok/tiktok-scope"
import { TiktokTrendRadar } from "@/components/social-media/tiktok/tiktok-trend-radar"
import { TiktokFypChecklist } from "@/components/social-media/tiktok/tiktok-fyp-checklist"
import { TiktokContentEngine } from "@/components/social-media/tiktok/tiktok-content-engine"
import { TiktokToolstack } from "@/components/social-media/tiktok/tiktok-toolstack"
import {
  TiktokFaq,
  TiktokFaqJsonLd,
} from "@/components/social-media/tiktok/tiktok-faq"
import { TiktokFinalCta } from "@/components/social-media/tiktok/tiktok-final-cta"

export const metadata: Metadata = {
  title:
    "TikTok Marketing Services — Done-For-You TikTok Management for Service Businesses | Max Market Pros",
  description:
    "Done-for-you TikTok marketing services. We script, shoot, edit, post, and grow your TikTok with weekly trend monitoring and FYP-tuned content — built for service businesses.",
  keywords: [
    "TikTok marketing services",
    "TikTok marketing agency",
    "TikTok management services",
    "TikTok content creation",
    "TikTok growth agency",
    "TikTok content agency",
    "TikTok video production",
    "TikTok strategy",
    "FYP optimization",
    "TikTok marketing for service businesses",
    "TikTok marketing for small business",
    "short-form video marketing",
    "viral TikTok content",
    "TikTok account management",
    "TikTok community management",
    "TikTok content calendar",
    "TikTok hooks",
    "TikTok trends",
    "TikTok analytics",
    "monthly TikTok management",
    "TikTok marketing packages",
    "TikTok marketing plans",
  ],
  alternates: { canonical: "/services/social-media/tiktok" },
  openGraph: {
    title:
      "TikTok Marketing Services — Done-For-You TikTok Management for Service Businesses | Max Market Pros",
    description:
      "Full-service TikTok marketing services — strategy, hook library, on-site filming, vertical editing, daily posting, weekly trend radar, and FYP-tuned content. One team, one monthly invoice.",
    type: "website",
    url: "/services/social-media/tiktok",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros TikTok marketing services — done-for-you TikTok management for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TikTok Marketing Services — Done-For-You TikTok Management for Service Businesses | Max Market Pros",
    description:
      "Done-for-you TikTok marketing services. 20–30 TikToks/mo, weekly trend radar, FYP scoring on every video, monthly performance report.",
    images: ["/services/social-media.png"],
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
    name: "TikTok Strategy & Content Pillars",
    description:
      "Brand voice, four content pillars, competitive teardown, and quarterly funnel review built specifically for TikTok marketing services and FYP placement.",
  },
  {
    name: "Hook & Script Library",
    description:
      "10 fresh hooks per week per pillar, pre-tested in three variants, owned in your shared Notion — the foundation of every TikTok we ship.",
  },
  {
    name: "Filming & On-Set Direction",
    description:
      "Monthly on-site shoot day capturing 30–60 ready-to-edit clips, plus a self-shot phone option with weekly shot lists for tight schedules.",
  },
  {
    name: "Vertical Editing & Captions",
    description:
      "9:16 native cuts, kinetic captions, sound-trend matching, branded overlays, and 18–22 second average runtime tuned for FYP retention.",
  },
  {
    name: "Posting & Trend-Jacking",
    description:
      "5–7 TikToks per week posted at audience-peak times, daily trend radar review, and FYP scoring against seven ranking signals before every post.",
  },
  {
    name: "Community Management & Reporting",
    description:
      "DM and comment response within 24 hours, monthly Loom plus PDF report, and booked-job attribution wired into your CRM.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "TikTok Marketing Services",
    name: "TikTok Marketing Services",
    description:
      "Done-for-you TikTok marketing services for service businesses — strategy, hook library, on-site filming, vertical editing, daily posting, weekly trend monitoring, FYP optimization, community management, and monthly reporting.",
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
      name: "TikTok Marketing Services",
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
        name: "Social Media",
        item: "https://maxmarketpros.com/services/social-media",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "TikTok Marketing Services",
        item: "https://maxmarketpros.com/services/social-media/tiktok",
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
      <TiktokFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <TiktokHero />
      <TiktokScope />
      <TiktokTrendRadar />
      <TiktokFypChecklist />
      <TiktokContentEngine />
      <TiktokToolstack />
      <TiktokFaq />
      <TiktokFinalCta />
      <JsonLd />
    </main>
  )
}
