import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WebHero } from "@/components/web-design/web-hero"
import { WebShowcase } from "@/components/web-design/web-showcase"
import { WebPlatformsBento } from "@/components/web-design/web-platforms-bento"
import { WebIncluded } from "@/components/web-design/web-included"
import { WebPerformance } from "@/components/web-design/web-performance"
import { WebProcess } from "@/components/web-design/web-process"
import { WebIndustries } from "@/components/web-design/web-industries"
import { WebComparison } from "@/components/web-design/web-comparison"
import { WebFaq } from "@/components/web-design/web-faq"
import { WebFinalCta } from "@/components/web-design/web-final-cta"
import { webDesignFaqs } from "@/components/web-design/web-faq-data"

export const metadata: Metadata = {
  title: "Custom Web Design Services | Max Market Pros",
  description:
    "Fast, conversion-focused web design on Webflow, WordPress, Squarespace, Wix & custom code. Built for service businesses that need more leads.",
  keywords: [
    "web design",
    "web design services",
    "custom website design",
    "website development",
    "Webflow web design",
    "WordPress web design",
    "Squarespace web design",
    "responsive web design",
    "conversion-focused web design",
    "fast websites",
    "local business websites",
  ],
  alternates: { canonical: "/services/web-design" },
  openGraph: {
    title: "Custom Web Design Services | Max Market Pros",
    description:
      "Conversion-focused web design on Webflow, WordPress, Squarespace, Wix, or hand-coded — built for service businesses that want phones to ring.",
    type: "website",
    url: "/services/web-design",
    siteName: "Max Market Pros",
    locale: "en_US",
    images: [
      {
        url: "/services/seo-websites.png",
        width: 1200,
        height: 630,
        alt: "Max Market Pros web design services — custom websites that convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design Services | Max Market Pros",
    description:
      "Fast, conversion-focused websites on Webflow, WordPress, Squarespace, Wix & custom code for service businesses.",
    images: ["/services/seo-websites.png"],
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
    name: "Custom-Coded Websites",
    url: "/services/web-design/custom-coded",
    description:
      "Fully bespoke, hand-coded websites built from scratch for maximum performance and flexibility.",
  },
  {
    name: "Custom-Designed Websites",
    url: "/services/web-design/custom-designed",
    description:
      "Tailored website designs crafted from scratch specifically for your brand identity.",
  },
  {
    name: "Webflow Websites",
    url: "/services/web-design/webflow",
    description:
      "Premium no-code websites built on Webflow — fast, flexible, and CMS-powered.",
  },
  {
    name: "WordPress Websites",
    url: "/services/web-design/wordpress",
    description:
      "Professional WordPress development with managed hosting and ongoing support.",
  },
  {
    name: "Squarespace Websites",
    url: "/services/web-design/squarespace",
    description:
      "Polished, modern websites built on Squarespace for a sleek, professional presence.",
  },
  {
    name: "Wix Websites",
    url: "/services/web-design/wix",
    description:
      "Expert Wix Studio development with booking, payments, and Velo integrations.",
  },
  {
    name: "GoDaddy Websites",
    url: "/services/web-design/godaddy",
    description:
      "Personalized GoDaddy website design and support for a fast, affordable launch.",
  },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design",
    name: "Custom Web Design Services",
    description:
      "Conversion-focused web design and development for service businesses — Webflow, WordPress, Squarespace, Wix, GoDaddy, and custom-coded builds with SEO, analytics, and hosting included.",
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
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
          url: `https://maxmarketpros.com${item.url}`,
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
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: webDesignFaqs.map((f) => ({
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
      <WebHero />
      <WebShowcase />
      <WebPlatformsBento />
      <WebIncluded />
      <WebPerformance />
      <WebProcess />
      <WebIndustries />
      <WebComparison />
      <WebFaq />
      <WebFinalCta />
      <JsonLd />
    </main>
  )
}
