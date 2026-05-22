import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CustomDesignedHero } from "@/components/web-design/custom-designed/custom-designed-hero"
import { CustomDesignedDesignDna } from "@/components/web-design/custom-designed/custom-designed-design-dna"
import { CustomDesignedProgressionTimeline } from "@/components/web-design/custom-designed/custom-designed-progression-timeline"
import { CustomDesignedBento } from "@/components/web-design/custom-designed/custom-designed-bento"
import { CustomDesignedVsAlternatives } from "@/components/web-design/custom-designed/custom-designed-vs-alternatives"
import { CustomDesignedRevisionsCadence } from "@/components/web-design/custom-designed/custom-designed-revisions-cadence"
import { CustomDesignedMotionReel } from "@/components/web-design/custom-designed/custom-designed-motion-reel"
import { CustomDesignedIndustries } from "@/components/web-design/custom-designed/custom-designed-industries"
import {
  CustomDesignedFaq,
  CustomDesignedFaqJsonLd,
} from "@/components/web-design/custom-designed/custom-designed-faq"
import { CustomDesignedFinalCta } from "@/components/web-design/custom-designed/custom-designed-final-cta"

export const metadata: Metadata = {
  title:
    "Custom Website Design",
  description:
    "Custom website design built around your brand — bespoke type, color, motion, and layout systems designed in Figma, then shipped on the platform that fits. Free design audit.",
  keywords: [
    "custom website design",
    "custom web design",
    "custom designed website",
    "bespoke web design",
    "bespoke website design",
    "brand-led web design",
    "custom web design agency",
    "custom website design agency",
    "custom website design services",
    "design system website",
    "Figma to website",
    "Figma to Webflow design",
    "Figma to Next.js design",
    "conversion-focused web design",
    "high-end web design",
    "premium web design",
    "boutique web design",
    "creative web design agency",
    "custom landing page design",
    "custom homepage design",
    "custom UI design website",
    "bespoke UX design",
    "custom mobile web design",
    "brand identity website design",
    "custom website redesign",
  ],
  alternates: { canonical: "/services/web-design/custom-designed" },
  openGraph: {
    title:
      "Custom Website Design",
    description:
      "Bespoke custom website design — type system, color tokens, motion language, and pixel-perfect layouts at every breakpoint. Built in Figma, shipped on the platform that fits.",
    type: "website",
    url: "/services/web-design/custom-designed",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros — custom website design built around your brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Website Design",
    description:
      "Custom website design — bespoke type, color, motion, and layout systems. Designed in Figma, built on the platform that fits your team.",
    images: ["/services/seo-websites.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Custom website design",
    description:
      "Bespoke, brand-led website design — every page hand-designed in Figma at every breakpoint, with a complete type ramp, color tokens, spacing scale, and motion language.",
  },
  {
    name: "Brand identity & design system",
    description:
      "Logo lockups, typography pairings, color stories, voice guidelines, and a Figma design system your team can build on long after launch.",
  },
  {
    name: "Custom illustrations & iconography",
    description:
      "On-brand spot illustrations, custom icon sets, and texture work — so your site doesn't look like every other Heroicons-and-stock-photo template on the internet.",
  },
  {
    name: "Motion & micro-interaction design",
    description:
      "Hover states, scroll reveals, page transitions, and button micro-interactions — designed against a shared easing system and durations across the entire site.",
  },
  {
    name: "Conversion-tuned layout design",
    description:
      "Page layouts engineered around a primary CTA goal — hierarchy, hero structure, scroll path, and sticky elements designed to move visitors toward action.",
  },
  {
    name: "Design + build on your platform",
    description:
      "We design, then build — pixel-matched on the platform that fits your team: Webflow, Squarespace, WordPress, or hand-coded Next.js. You get a working site and the source Figma file.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Website Design",
    name: "Custom Website Design",
    description:
      "Bespoke custom website design — type system, color tokens, motion language, custom illustrations, and pixel-perfect Figma layouts at every breakpoint, then built on the platform that fits the team. Three structured revision rounds, working Figma file at handoff, conversion-tuned layouts, and WCAG 2.2 AA accessibility baked in.",
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
      name: "Custom Website Design Services",
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
        name: "Web Design",
        item: "https://maxmarketpros.com/services/web-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Custom Website Design",
        item: "https://maxmarketpros.com/services/web-design/custom-designed",
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
      <CustomDesignedFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CustomDesignedHero />
      <CustomDesignedDesignDna />
      <CustomDesignedProgressionTimeline />
      <CustomDesignedBento />
      <CustomDesignedVsAlternatives />
      <CustomDesignedRevisionsCadence />
      <CustomDesignedMotionReel />
      <CustomDesignedIndustries />
      <CustomDesignedFaq />
      <CustomDesignedFinalCta />
      <JsonLd />
    </main>
  )
}
