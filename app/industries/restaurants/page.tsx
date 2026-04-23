import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { RestHero } from "@/components/industries/restaurants/rest-hero"
import { RestMenuPlaybooks } from "@/components/industries/restaurants/rest-menu-playbooks"
import { RestDayparts } from "@/components/industries/restaurants/rest-dayparts"
import { RestServices } from "@/components/industries/restaurants/rest-services"
import { RestStack } from "@/components/industries/restaurants/rest-stack"
import { RestFinalCta } from "@/components/industries/restaurants/rest-final-cta"

export const metadata: Metadata = {
  title: "Restaurant Marketing \u2014 Websites, Reviews, Ordering & Ads | Max Market Pros",
  description:
    "Order-ready restaurant websites, Google/Yelp review engines, daypart-tuned ads, and delivery-stack consolidation for fast-casual, fine dining, cafes, bars, and catering.",
  alternates: { canonical: "/industries/restaurants" },
  openGraph: {
    title: "Restaurant Marketing | Max Market Pros",
    description:
      "Websites that take the order, review engines on autopilot, daypart-tuned ad campaigns, and delivery-stack consolidation for restaurants of every shape.",
    type: "website",
    url: "/industries/restaurants",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing | Max Market Pros",
    description:
      "One stack from the POS to the parking lot \u2014 fast-casual, fine dining, cafes, bars, and catering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const faq = [
  {
    q: "Which restaurant types do you work with?",
    a: "Fast-casual and QSR are our primary focus, but we work deeply with full-service and fine dining, cafes and bakeries, bars and breweries, pizzerias, and catering or private-event operators.",
  },
  {
    q: "Do you build the actual website, or just run the ads?",
    a: "We build the site. Mobile-first, sub-1.8s load, menu in structured data so Google serves dish-level results, and first-party online ordering wired to your POS \u2014 Toast, Square, Clover, Revel, or Lightspeed. Ads, Reels, and reviews are layered on top.",
  },
  {
    q: "How do you handle first-party ordering vs. DoorDash and UberEats?",
    a: "We run both. Delivery-app deep links are tracked for attribution so you can see which channel earns the margin. In parallel, we push repeat customers toward your first-party ordering to recover the 30% the apps take.",
  },
  {
    q: "How long until we see results?",
    a: "Paid ads and review auto-requests typically move within the first 14 days. Local SEO, loyalty retention, and daypart-tuned campaigns show meaningful ranking and repeat-visit lift inside 60\u201390 days.",
  },
  {
    q: "What does it cost?",
    a: "Engagements scope to concept, daypart mix, and how many locations you run. A la carte pricing is published on our plans page; bundled restaurant packages are quoted on the consult call.",
  },
]

function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://maxmarketpros.com/industries" },
      { "@type": "ListItem", position: 3, name: "Restaurants", item: "https://maxmarketpros.com/industries/restaurants" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <RestHero />
      <RestMenuPlaybooks />
      <RestDayparts />
      <RestServices />
      <RestStack />
      <RestFinalCta />
      <JsonLd />
    </main>
  )
}
