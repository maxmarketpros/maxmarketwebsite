import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HubHero } from "@/components/industries/hub/hub-hero"
import { HubFeatured } from "@/components/industries/hub/hub-featured"
import { HubOneStack } from "@/components/industries/hub/hub-one-stack"
import { HubCatalog } from "@/components/industries/hub/hub-catalog"
import { HubFinalCta } from "@/components/industries/hub/hub-final-cta"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Marketing stacks tuned to your vertical. Contractors, home services, local service, restaurants, medical, automotive \u2014 and every service business in between.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve",
    description:
      "One marketing stack \u2014 tuned to your industry. Six flagship vertical playbooks and 80+ specific business types across trades, home services, local service, food, medical, and automotive.",
    type: "website",
    url: "/industries",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve",
    description:
      "Six vertical playbooks. 80+ business types. One marketing stack tuned to the way your industry actually books work.",
  },
}

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.maxmarketpros.com/industries" },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Max Market Pros serves",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Contractors",                 url: "https://www.maxmarketpros.com/industries/contractors" },
      { "@type": "ListItem", position: 2, name: "Home Services",               url: "https://www.maxmarketpros.com/industries/home-services" },
      { "@type": "ListItem", position: 3, name: "Local Service Businesses",    url: "https://www.maxmarketpros.com/industries/local-service" },
      { "@type": "ListItem", position: 4, name: "Restaurants",                 url: "https://www.maxmarketpros.com/industries/restaurants" },
      { "@type": "ListItem", position: 5, name: "Medical",                     url: "https://www.maxmarketpros.com/industries/medical" },
      { "@type": "ListItem", position: 6, name: "Automotive",                  url: "https://www.maxmarketpros.com/industries/automotive" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <HubHero />
      <HubFeatured />
      <HubOneStack />
      <HubCatalog />
      <HubFinalCta />
      <JsonLd />
    </main>
  )
}
