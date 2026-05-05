import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { DroneHero } from "@/components/social-media/drone/drone-hero"
import { DroneIndustries } from "@/components/social-media/drone/drone-industries"
import { DroneShots } from "@/components/social-media/drone/drone-shots"
import { DroneEquipment } from "@/components/social-media/drone/drone-equipment"
import { DroneProcess } from "@/components/social-media/drone/drone-process"
import {
  DroneFaq,
  DroneFaqJsonLd,
} from "@/components/social-media/drone/drone-faq"
import { DroneFinalCta } from "@/components/social-media/drone/drone-final-cta"

export const metadata: Metadata = {
  title:
    "Drone Videography Services — FAA Part 107 Aerial Production | Max Market Pros",
  description:
    "FAA-licensed drone videography and aerial photography for real estate, construction, weddings, hospitality, and brand films. Cinematic 5.1K footage edited for Reels, Shorts, and YouTube and delivered in 48 hours.",
  keywords: [
    "drone videography",
    "drone videography services",
    "aerial videography",
    "drone photography",
    "real estate drone videography",
    "real estate drone services",
    "aerial drone photography",
    "drone services near me",
    "FAA Part 107 drone pilot",
    "construction drone videography",
    "wedding drone videography",
    "drone footage for real estate",
    "commercial drone services",
    "drone video production",
    "cinematic drone videography",
    "drone marketing videos",
    "5K drone footage",
    "drone reels",
    "drone YouTube shorts",
    "Orange County drone videographer",
    "drone photographer",
  ],
  alternates: { canonical: "/services/social-media/drone" },
  openGraph: {
    title:
      "Drone Videography Services — FAA Part 107 Aerial Production | Max Market Pros",
    description:
      "Cinematic drone videography that sells the property in 30 seconds. 5.1K aerial footage, edited for Reels/Shorts/YouTube, delivered in 48 hours.",
    type: "website",
    url: "/services/social-media/drone",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Drone Videography — FAA Part 107 aerial production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Drone Videography Services — FAA Part 107 Aerial Production | Max Market Pros",
    description:
      "Cinematic 5.1K drone videography for real estate, construction, weddings & brand films. Edited & delivered in 48 hours.",
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
    name: "Real Estate Drone Videography",
    description:
      "FAA-licensed aerial drone videography and photography for residential and commercial listings — reveal pull-up, neighborhood context, top-down lot survey, edited for MLS, Reels, and YouTube Shorts.",
  },
  {
    name: "Construction Progress Drone Captures",
    description:
      "Monthly aerial drone videography from fixed waypoints to document jobsite progress for investors, developers, and project managers.",
  },
  {
    name: "Hospitality & Resort Brand Films",
    description:
      "Cinematic 5.1K drone videography of pools, beaches, golf courses, and resort grounds for hotels, STRs, and hospitality brands.",
  },
  {
    name: "Wedding & Event Drone Videography",
    description:
      "Discreet aerial drone videography of venues, ceremonies, and overhead shots edited into a 60-second highlight reel.",
  },
  {
    name: "Roof & Solar Drone Inspections",
    description:
      "High-resolution aerial drone photography of roof condition with annotated reports — no ladder, no liability.",
  },
  {
    name: "Brand Films & Aerial B-Roll",
    description:
      "Cinematic drone videography for concerts, dealerships, golf tournaments, and brand campaigns — same-week turnaround on b-roll.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Drone Videography",
    name: "Drone Videography Services",
    description:
      "FAA Part 107-licensed drone videography and aerial photography for real estate, construction, weddings, hospitality, and brand films. Cinematic 5.1K footage edited for Reels, Shorts, and YouTube and delivered in 48 hours.",
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
      name: "Drone Videography Services",
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
        name: "Drone Videography",
        item: "https://maxmarketpros.com/services/social-media/drone",
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
      <DroneFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <DroneHero />
      <DroneIndustries />
      <DroneShots />
      <DroneEquipment />
      <DroneProcess />
      <DroneFaq />
      <DroneFinalCta />
      <JsonLd />
    </main>
  )
}
