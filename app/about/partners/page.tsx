import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PartnersHero } from "@/components/about/partners/partners-hero"
import { PartnersFilterable } from "@/components/about/partners/partners-filterable"
import { PartnersToolsStrip } from "@/components/about/partners/partners-tools-strip"
import { PartnersFinalCta } from "@/components/about/partners/partners-final-cta"

export const metadata: Metadata = {
  title: "Partners & Platforms — The Stack We Build With",
  description:
    "Google, Meta, TikTok, Webflow, WordPress, HighLevel, GA4 and 70+ more — every platform we use to build, run, and measure marketing for small businesses.",
  keywords: [
    "marketing agency platforms",
    "marketing tech stack",
    "agency partners",
    "Max Market Pros stack",
    "Google Ads agency",
    "Meta Ads agency",
    "Webflow agency",
    "WordPress agency",
    "HighLevel agency",
  ],
  alternates: { canonical: "/about/partners" },
  openGraph: {
    title: "Partners & Platforms — The Stack We Build With",
    description:
      "70+ platforms behind every campaign, site, and report we ship. No platform bias, no upsells.",
    type: "website",
    url: "/about/partners",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners & Platforms — The Stack We Build With",
    description:
      "Every platform we use to build, run, and measure marketing for small businesses.",
  },
}

function JsonLd() {
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
        name: "Partners",
        item: "https://www.maxmarketpros.com/about/partners",
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <PartnersHero />
      <PartnersFilterable />
      <PartnersToolsStrip />
      <PartnersFinalCta />
      <JsonLd />
    </main>
  )
}
