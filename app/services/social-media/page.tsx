import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SocialHero } from "@/components/social-media/social-hero"
import { SocialPlatforms } from "@/components/social-media/social-platforms"
import { SocialServicesBento } from "@/components/social-media/social-services-bento"
import { SocialContentTypes } from "@/components/social-media/social-content-types"
import { SocialPipeline } from "@/components/social-media/social-pipeline"
import { SocialGrowthNumbers } from "@/components/social-media/social-growth-numbers"
import { SocialTeam } from "@/components/social-media/social-team"
import { SocialFaq } from "@/components/social-media/social-faq"
import { SocialFinalCta } from "@/components/social-media/social-final-cta"
import { socialFaqs } from "@/components/social-media/social-faq-data"

export const metadata: Metadata = {
  title: "Social Media Marketing Services",
  description:
    "Done-for-you Instagram, TikTok & YouTube marketing for service businesses. Content creation, social media management, video editing, and drone videography.",
  keywords: [
    "social media marketing",
    "Instagram marketing",
    "TikTok marketing",
    "YouTube marketing",
    "social media management",
    "content creation",
    "video editing",
    "graphic design",
    "drone videography",
    "review generation",
  ],
  alternates: { canonical: "/services/social-media" },
  openGraph: {
    title: "Social Media Marketing Services",
    description:
      "Done-for-you Instagram, TikTok, YouTube content creation, management, video editing, graphic design, and drone videography for service businesses.",
    type: "website",
    url: "/services/social-media",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros social media marketing — Instagram, TikTok, YouTube",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services",
    description:
      "Grow on Instagram, TikTok, YouTube & more. Full-service content creation and social media management for service businesses.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Social Media Management",
    url: "/services/social-media/management",
    description:
      "Full-service social media management — content, posting, community, and reporting across every platform.",
  },
  {
    name: "TikTok Marketing",
    url: "/services/social-media/tiktok",
    description:
      "Short-form video strategy and TikTok content creation to grow your brand.",
  },
  {
    name: "YouTube Marketing",
    url: "/services/social-media/youtube",
    description:
      "Long-form and Shorts YouTube strategy to build an owned audience.",
  },
  {
    name: "Video Editing",
    url: "/services/social-media/video-editing",
    description:
      "Platform-native video editing for Reels, TikTok, Shorts, and ads.",
  },
  {
    name: "Graphic Design",
    url: "/services/social-media/graphic-design",
    description:
      "On-brand social media graphics, carousels, and ad creative.",
  },
  {
    name: "Drone Videography",
    url: "/services/social-media/drone",
    description:
      "FAA-licensed drone videography for property tours, job sites, and brand content.",
  },
  {
    name: "Review Generation",
    url: "/services/social-media/review-generation",
    description:
      "Automated SMS and email systems to generate 5-star Google and Facebook reviews.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Marketing",
    name: "Social Media Marketing Services",
    description:
      "Done-for-you social media marketing — Instagram, TikTok, YouTube, Facebook, LinkedIn content creation, management, video editing, graphic design, drone videography, and review generation for service businesses.",
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
      name: "Social Media Services",
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
        name: "Social Media",
        item: "https://www.maxmarketpros.com/services/social-media",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: socialFaqs.map((f) => ({
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
      <SocialHero />
      <SocialPlatforms />
      <SocialServicesBento />
      <SocialContentTypes />
      <SocialPipeline />
      <SocialGrowthNumbers />
      <SocialTeam />
      <SocialFaq />
      <SocialFinalCta />
      <JsonLd />
    </main>
  )
}
