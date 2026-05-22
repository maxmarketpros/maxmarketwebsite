import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { TestimonialsProofStrip } from "@/components/about/testimonials/testimonials-proof-strip"
import { TestimonialsSpotlight } from "@/components/about/testimonials/testimonials-spotlight"
import { TestimonialsGrid } from "@/components/about/testimonials/testimonials-grid"
import { TestimonialsFinalCta } from "@/components/about/testimonials/testimonials-final-cta"
import {
  REVIEW_COUNT,
  REVIEW_RATING,
  SPOTLIGHT,
  TESTIMONIALS,
} from "@/components/about/testimonials/testimonials-data"

export const metadata: Metadata = {
  title: "Testimonials — 4.7★ on Google",
  description:
    "275 verified Google reviews · 4.7-star average. Read what food trucks, yoga studios, gyms, florists, bookstores and more say about working with Max Market Pros.",
  keywords: [
    "Max Market Pros reviews",
    "Max Market Pros testimonials",
    "marketing agency reviews",
    "small business marketing testimonials",
    "Google reviews",
    "local SEO reviews",
  ],
  alternates: { canonical: "/about/testimonials" },
  openGraph: {
    title: "Testimonials — 4.7★ on Google",
    description:
      "275 verified Google reviews. See unedited testimonials from real small business owners.",
    type: "website",
    url: "/about/testimonials",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials — 4.7★ on Google",
    description:
      "275 verified Google reviews. Real small businesses, real outcomes.",
  },
}

const TODAY_MS = new Date("2026-05-07").getTime()
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

function weeksAgoToIso(weeks: number): string {
  return new Date(TODAY_MS - weeks * WEEK_MS).toISOString().slice(0, 10)
}

function JsonLd() {
  const all = [SPOTLIGHT, ...TESTIMONIALS]
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Max Market Pros",
    url: "https://www.maxmarketpros.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    review: all.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      datePublished: weeksAgoToIso(t.weeksAgo),
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody: t.body,
      publisher: { "@type": "Organization", name: "Google" },
    })),
  }
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.maxmarketpros.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.maxmarketpros.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Testimonials",
        item: "https://www.maxmarketpros.com/about/testimonials",
      },
    ],
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <TestimonialsProofStrip />
      <TestimonialsSpotlight />
      <TestimonialsGrid />
      <TestimonialsFinalCta />
      <JsonLd />
    </main>
  )
}
