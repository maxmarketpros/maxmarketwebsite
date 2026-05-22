import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ManagementHero } from "@/components/social-media/management/management-hero"
import { ManagementVsAlternatives } from "@/components/social-media/management/management-vs-alternatives"
import { ManagementScope } from "@/components/social-media/management/management-scope"
import { ManagementCadence } from "@/components/social-media/management/management-cadence"
import { ManagementResultsDashboard } from "@/components/social-media/management/management-results-dashboard"
import {
  ManagementFaq,
  ManagementFaqJsonLd,
} from "@/components/social-media/management/management-faq"
import { ManagementFinalCta } from "@/components/social-media/management/management-final-cta"

export const metadata: Metadata = {
  title:
    "Social Media Management",
  description:
    "Done-for-you social media management for service businesses. We plan, create, post, engage and analyze across Instagram, TikTok, Facebook, LinkedIn, YouTube, X and Pinterest — replacing your in-house team for a fraction of the cost.",
  keywords: [
    "social media management",
    "social media management services",
    "social media management agency",
    "monthly social media management",
    "social media manager",
    "hire a social media manager",
    "outsourced social media manager",
    "social media management for small business",
    "social media management for service businesses",
    "full-service social media management",
    "social media management packages",
    "social media management plans",
    "Instagram management",
    "TikTok management",
    "Facebook management",
    "LinkedIn management",
    "YouTube management",
    "social media content creation",
    "social media community management",
    "social media reporting",
    "social media strategy",
    "social media marketing agency",
  ],
  alternates: { canonical: "/services/social-media/management" },
  openGraph: {
    title:
      "Social Media Management",
    description:
      "Full-service social media management — strategy, content, posting, community, and reporting across every major platform. One team, one monthly invoice.",
    type: "website",
    url: "/services/social-media/management",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Social Media Management — done-for-you for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Management",
    description:
      "Done-for-you social media management. 60+ posts/mo, full content production, community management, monthly reporting.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Social Media Strategy",
    description:
      "Brand voice, content pillars, posting cadence, and quarterly funnel reviews — built around what actually books jobs in your industry.",
  },
  {
    name: "Content Production",
    description:
      "Reels, Shorts, TikToks, carousels, static graphics, captions and hashtag-SEO — produced in-house with a monthly on-site shoot.",
  },
  {
    name: "Multi-Platform Posting",
    description:
      "Daily publishing on Instagram, TikTok, Facebook, LinkedIn, YouTube, X, and Pinterest with a 7-day approval window.",
  },
  {
    name: "Community Management",
    description:
      "DM and comment response within 24 hours, story interactions, UGC outreach, and a documented crisis protocol.",
  },
  {
    name: "Paid Boost Management",
    description:
      "Smart paid amplification on top-performing organic posts to extend reach without separate ad-creative production.",
  },
  {
    name: "Monthly Reporting",
    description:
      "Reach, engagement, follower growth, top posts, DM volume, and booked-job attribution — delivered as a Loom + PDF on the 3rd of every month.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Management",
    name: "Social Media Management Services",
    description:
      "Done-for-you social media management for service businesses — strategy, content production, multi-platform posting, community management, and monthly reporting across Instagram, TikTok, Facebook, LinkedIn, YouTube, X, and Pinterest.",
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
      name: "Social Media Management Services",
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
        name: "Social Media Management",
        item: "https://www.maxmarketpros.com/services/social-media/management",
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
      <ManagementFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ManagementHero />
      <ManagementVsAlternatives />
      <ManagementScope />
      <ManagementCadence />
      <ManagementResultsDashboard />
      <ManagementFaq />
      <ManagementFinalCta />
      <JsonLd />
    </main>
  )
}
