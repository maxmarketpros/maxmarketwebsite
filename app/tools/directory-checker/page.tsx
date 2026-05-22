import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { DirectoryShell } from "@/components/tools/directory-checker/directory-shell"

export const metadata: Metadata = {
  title:
    "Directory Listing Checker",
  description:
    "Free instant scan of your business listings across 50+ directories, GPS apps, and voice assistants. Find missing, wrong, and duplicate listings in seconds — no sign-up required.",
  alternates: { canonical: "/tools/directory-checker" },
  openGraph: {
    title: "Directory Listing Checker",
    description:
      "Audit your business listings across Google, Apple Maps, Yelp, Bing, Alexa, and 50+ more sources in seconds. Powered by Max Market Pros.",
    type: "website",
    url: "/tools/directory-checker",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Directory Listing Checker",
    description:
      "Audit your business listings across 50+ directories, GPS apps, and voice assistants in seconds.",
  },
}

function JsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Max Market Pros Directory Listing Checker",
    url: "https://www.maxmarketpros.com/tools/directory-checker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Free instant scan of business listings across 50+ directories, GPS apps, voice assistants, and review sites. Spot missing, wrong, and duplicate listings.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://www.maxmarketpros.com",
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
        item: "https://www.maxmarketpros.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://www.maxmarketpros.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Directory Listing Checker",
        item: "https://www.maxmarketpros.com/tools/directory-checker",
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
      <DirectoryShell />
      <JsonLd />
    </main>
  )
}
