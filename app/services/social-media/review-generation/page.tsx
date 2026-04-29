import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ReviewHero } from "@/components/social-media/review-generation/review-hero"
import { ReviewScorecard } from "@/components/social-media/review-generation/review-scorecard"
import { ReviewFilter } from "@/components/social-media/review-generation/review-filter"
import { ReviewTemplates } from "@/components/social-media/review-generation/review-templates"
import { ReviewLift } from "@/components/social-media/review-generation/review-lift"
import {
  ReviewFaq,
  ReviewFaqJsonLd,
} from "@/components/social-media/review-generation/review-faq"
import { ReviewFinalCta } from "@/components/social-media/review-generation/review-final-cta"

export const metadata: Metadata = {
  title:
    "Review Generation Services — Get More 5-Star Google Reviews on Autopilot | Max Market Pros",
  description:
    "Automate review requests by SMS and email, route happy customers to Google, Yelp & Facebook, and stop bad reviews from going public. Done-for-you review generation for service businesses.",
  keywords: [
    "review generation",
    "review generation services",
    "how to get more 5-star Google reviews",
    "automate review requests",
    "stop bad reviews from going public",
    "Google review automation",
    "SMS review requests",
    "online reputation management",
    "5-star review service",
    "Yelp review generation",
    "Facebook review generation",
    "BBB reviews",
    "Angi reviews",
    "HomeAdvisor reviews",
    "Trustpilot reviews",
    "TripAdvisor reviews",
    "review automation software",
    "review management agency",
    "reputation management for service businesses",
    "Google Map Pack ranking",
    "review response service",
    "private feedback inbox",
  ],
  alternates: { canonical: "/services/social-media/review-generation" },
  openGraph: {
    title:
      "Review Generation — Get More 5-Star Google Reviews on Autopilot | Max Market Pros",
    description:
      "Done-for-you review generation. Automated SMS + email requests, multi-platform routing, private feedback for unhappy customers, and a 30-day Map Pack ranking lift.",
    type: "website",
    url: "/services/social-media/review-generation",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Review Generation — automated 5-star reviews for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Review Generation — Get More 5-Star Google Reviews on Autopilot | Max Market Pros",
    description:
      "Automate review requests, route happy customers to Google/Yelp/Facebook, and stop bad reviews from going public. Done-for-you reputation management.",
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
    name: "Automated SMS Review Requests",
    description:
      "Personalized SMS requests sent 60 seconds after every job, with industry-tuned copy A/B tested across 1,400+ jobs/month for industry-leading reply rates.",
  },
  {
    name: "Email Review Sequences",
    description:
      "Branded email follow-ups at the 24-hour and 72-hour mark for customers who don't reply to SMS — with one-tap deep links to your highest-priority platform.",
  },
  {
    name: "Sentiment-Based Routing",
    description:
      "Compliant smart routing — happy customers get one-tap public review links, unhappy customers reach a private owner inbox so issues are fixed before they go public.",
  },
  {
    name: "Public Response Drafting",
    description:
      "On-brand, empathetic public responses to every review (positive and negative) drafted within 4 business hours and queued for owner approval.",
  },
  {
    name: "Multi-Platform Listing Sync",
    description:
      "Reputation campaigns running in parallel across Google, Yelp, Facebook, BBB, Angi, HomeAdvisor, TripAdvisor, Trustpilot, and industry-specific platforms.",
  },
  {
    name: "Reputation Dashboard & Reporting",
    description:
      "Monthly report with rating velocity, review count growth, response time, sentiment breakdown, Map Pack ranking, and click-through-rate uplift on listings.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Review Generation",
    name: "Review Generation Services",
    description:
      "Done-for-you review generation for service businesses — automated SMS and email review requests, sentiment-based routing to Google, Yelp, Facebook, BBB, Angi, HomeAdvisor, TripAdvisor, and Trustpilot, public response drafting, and a private feedback inbox so unhappy customers reach the owner before they post publicly.",
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
      name: "Review Generation Services",
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
        name: "Review Generation",
        item: "https://maxmarketpros.com/services/social-media/review-generation",
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
      <ReviewFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <ReviewHero />
      <ReviewScorecard />
      <ReviewFilter />
      <ReviewTemplates />
      <ReviewLift />
      <ReviewFaq />
      <ReviewFinalCta />
      <JsonLd />
    </main>
  )
}
