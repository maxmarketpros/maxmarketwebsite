import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BacklinksHero } from "@/components/seo/backlinks/backlinks-hero"
import { BacklinksDirectoryNetwork } from "@/components/seo/backlinks/backlinks-directory-network"
import { BacklinksAnatomy } from "@/components/seo/backlinks/backlinks-anatomy"
import { BacklinksCoverageMatrix } from "@/components/seo/backlinks/backlinks-coverage-matrix"
import { BacklinksAuthorityLift } from "@/components/seo/backlinks/backlinks-authority-lift"
import {
  BacklinksFaq,
  BacklinksFaqJsonLd,
} from "@/components/seo/backlinks/backlinks-faq"
import { BacklinksFinalCta } from "@/components/seo/backlinks/backlinks-final-cta"

export const metadata: Metadata = {
  title:
    "Backlinks & Link Building",
  description:
    "Buy backlinks the right way. Editorial backlinks on DR 40+ publishers, 50+ NAP-consistent local citations, niche edits, and digital-PR placements. Real reporting, zero PBNs, 90-day lift you can measure.",
  keywords: [
    "buy backlinks",
    "buy directory submissions",
    "link building service",
    "citation building service",
    "directory submission service",
    "local citations",
    "NAP citations",
    "editorial backlinks",
    "white-hat link building",
    "niche edits",
    "guest posts",
    "guest post service",
    "backlink packages",
    "buy citations",
    "local SEO citations",
    "high DA backlinks",
    "dofollow backlinks",
    "directory listing service",
    "Yelp citation",
    "Google Business Profile citation",
    "BBB listing service",
    "Apple Business Connect",
    "industry directory submission",
  ],
  alternates: { canonical: "/services/seo/backlinks" },
  openGraph: {
    title:
      "Backlinks & Link Building",
    description:
      "Editorial backlinks on DR 40+ publishers, 50+ local citations, niche edits, digital-PR placements. Real reporting, zero PBNs, measurable 90-day lift.",
    type: "website",
    url: "/services/seo/backlinks",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Backlinks & Directories — editorial link building and citation service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Backlinks & Link Building",
    description:
      "Editorial backlinks, 50+ NAP-consistent citations, real reporting, zero PBNs. The link plan that actually moves rankings.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Editorial Backlinks",
    description:
      "Earned editorial backlinks on DR 40+ publishers. Branded and natural anchor text, in-content placement, dofollow on every Tier 1 placement.",
  },
  {
    name: "Local Citation Building",
    description:
      "50+ NAP-consistent citations on Google Business Profile, Yelp, BBB, Apple Business Connect, Bing Places, Foursquare, Yellow Pages, and the directories your local buyers actually use.",
  },
  {
    name: "Industry Directory Submissions",
    description:
      "Vertical-specific directory placements — Angi, HomeAdvisor, Houzz, Avvo, Healthgrades, Cars.com, OpenTable, Booksy, and 200+ niche industry hubs.",
  },
  {
    name: "Niche Edits",
    description:
      "Insertions of your branded link into existing high-authority articles on relevant publisher domains — fast indexation, instant link equity.",
  },
  {
    name: "Guest Post Outreach",
    description:
      "Editorial guest posts placed on industry blogs and trade publications, written by senior editors and signed off by you before publish.",
  },
  {
    name: "NAP Consistency Audit",
    description:
      "Full audit of every existing citation, duplicate cleanup, and quarterly NAP refresh so your business name, address, and phone match across every directory Google indexes.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Backlink Building and Directory Citation Service",
    name: "Backlinks & Directory Listings Service",
    description:
      "Done-for-you editorial backlinks on DR 40+ publishers and 50+ NAP-consistent local citation listings across Google Business Profile, Yelp, BBB, Apple Business Connect, Bing Places, Foursquare, and 200+ industry directories. Real placements, real reporting, zero PBNs or link farms.",
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
      name: "Backlink and Directory Services",
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
        name: "Backlinks & Directories",
        item: "https://www.maxmarketpros.com/services/seo/backlinks",
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
      <BacklinksFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <BacklinksHero />
      <BacklinksDirectoryNetwork />
      <BacklinksAnatomy />
      <BacklinksCoverageMatrix />
      <BacklinksAuthorityLift />
      <BacklinksFaq />
      <BacklinksFinalCta />
      <JsonLd />
    </main>
  )
}
