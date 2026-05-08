import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AuditorShell } from "@/components/tools/seo-auditor/auditor-shell"

export const metadata: Metadata = {
  title:
    "Free SEO Auditor",
  description:
    "Get a free, instant SEO audit of your website. 100+ on-page checks plus Lighthouse-powered Core Web Vitals — no sign-up required.",
  alternates: { canonical: "/tools/seo-auditor" },
  openGraph: {
    title: "Free SEO Auditor",
    description:
      "100+ on-page checks plus Google Lighthouse scores in under 30 seconds. Powered by Max Market Pros.",
    type: "website",
    url: "/tools/seo-auditor",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Auditor",
    description:
      "100+ on-page checks plus Google Lighthouse scores in under 30 seconds.",
  },
}

function JsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Max Market Pros SEO Auditor",
    url: "https://maxmarketpros.com/tools/seo-auditor",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Free instant SEO audit tool. Analyzes title tags, meta descriptions, headings, images, structured data, Open Graph, Core Web Vitals, and more.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://maxmarketpros.com",
    },
  }

  const breadcrumb = {
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
        name: "Tools",
        item: "https://maxmarketpros.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Auditor",
        item: "https://maxmarketpros.com/tools/seo-auditor",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <AuditorShell />
      <JsonLd />
    </main>
  )
}
