import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GraphicDesignHero } from "@/components/social-media/graphic-design/graphic-design-hero"
import { GraphicDesignShowcase } from "@/components/social-media/graphic-design/graphic-design-showcase"
import { GraphicDesignAdLab } from "@/components/social-media/graphic-design/graphic-design-ad-lab"
import { GraphicDesignCarousel } from "@/components/social-media/graphic-design/graphic-design-carousel"
import { GraphicDesignBrandKit } from "@/components/social-media/graphic-design/graphic-design-brand-kit"
import { GraphicDesignPrintWeb } from "@/components/social-media/graphic-design/graphic-design-print-web"
import { GraphicDesignToolstack } from "@/components/social-media/graphic-design/graphic-design-toolstack"
import {
  GraphicDesignFaq,
  GraphicDesignFaqJsonLd,
} from "@/components/social-media/graphic-design/graphic-design-faq"
import { GraphicDesignFinalCta } from "@/components/social-media/graphic-design/graphic-design-final-cta"

export const metadata: Metadata = {
  title:
    "Social Media Graphic Design",
  description:
    "Done-for-you social media graphic design — Instagram and Facebook ad design, carousel design, brand identity, print and web. Scroll-stopping creative for service businesses. 48-hour turnaround, unlimited revisions, source files included.",
  keywords: [
    "social media graphic design",
    "social media graphic design services",
    "graphic design for social media",
    "ad creative design",
    "Instagram ad design",
    "Facebook ad design",
    "Facebook ad creative",
    "Instagram ad creative",
    "carousel design",
    "Instagram carousel design",
    "LinkedIn carousel design",
    "branding for service businesses",
    "brand identity design",
    "logo design service businesses",
    "brand kit design",
    "service business branding",
    "graphic design for HVAC",
    "graphic design for contractors",
    "vehicle wrap design",
    "yard sign design",
    "print design service businesses",
    "presentation deck design",
    "graphic design agency",
  ],
  alternates: { canonical: "/services/social-media/graphic-design" },
  openGraph: {
    title:
      "Social Media Graphic Design",
    description:
      "Done-for-you graphic design for service businesses. Ad creative, carousels, brand kits, vehicle wraps, web banners — designed in pro tools, delivered in 48 hours.",
    type: "website",
    url: "/services/social-media/graphic-design",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/social-media.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros Graphic Design — social media, ad creative, brand identity for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Graphic Design — Ad Creative, Carousels & Branding",
    description:
      "Done-for-you graphic design for service businesses. Ad creative, carousels, brand kits — 48-hour turnaround, unlimited revisions, source files included.",
    images: ["/services/social-media.png"],
  },
}

const offerCatalogItems = [
  {
    name: "Social Media Graphic Design",
    description:
      "Instagram and Facebook posts, stories, reels covers, LinkedIn graphics, YouTube thumbnails, Pinterest pins, and email headers — sized and styled per platform with full source files.",
  },
  {
    name: "Ad Creative Design",
    description:
      "Three-variant ad creative sets (hook-led, offer-led, social-proof) for Instagram and Facebook ad design, sized 1:1, 4:5, and 9:16 with primary text and headline copy ready to upload.",
  },
  {
    name: "Carousel Design",
    description:
      "Save-and-share carousel design for Instagram, LinkedIn, and Facebook — built with a real architecture (hook, value, proof, CTA) and on-brand typography.",
  },
  {
    name: "Brand Identity & Brand Kits",
    description:
      "Branding for service businesses — logo lockups, color systems, typography, iconography, motion guidelines, and pattern libraries packaged as a single source-of-truth brand kit.",
  },
  {
    name: "Print Design",
    description:
      "Vehicle wraps, yard signs, business cards, brochures, flyers, and trade-show signage — print-ready CMYK files with bleed and crop marks.",
  },
  {
    name: "Web & Presentation Design",
    description:
      "Web hero banners, programmatic display ads, sales decks, pitch decks, and investor presentations designed in InDesign, Figma, or PowerPoint.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Graphic Design",
    name: "Social Media Graphic Design Services",
    description:
      "Done-for-you graphic design for service businesses — social media graphic design, Instagram and Facebook ad creative design, carousel design, brand identity, print (vehicle wraps, yard signs, business cards), web banners, and presentation decks. Designed in Photoshop, Illustrator, InDesign, After Effects, Figma, and Canva with 48-hour turnaround, unlimited revisions, and source files on every project.",
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
      name: "Graphic Design Services",
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
        name: "Graphic Design",
        item: "https://maxmarketpros.com/services/social-media/graphic-design",
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
      <GraphicDesignFaqJsonLd />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <GraphicDesignHero />
      <GraphicDesignShowcase />
      <GraphicDesignAdLab />
      <GraphicDesignCarousel />
      <GraphicDesignBrandKit />
      <GraphicDesignPrintWeb />
      <GraphicDesignToolstack />
      <GraphicDesignFaq />
      <GraphicDesignFinalCta />
      <JsonLd />
    </main>
  )
}
