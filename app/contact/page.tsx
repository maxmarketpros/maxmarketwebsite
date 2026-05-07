import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ContactGetInTouch } from "@/components/contact/contact-get-in-touch"
import { ContactOffice } from "@/components/contact/contact-office"

export const metadata: Metadata = {
  title: "Contact Max Market Pros — Local SEO, Web Design & Lead Generation",
  description:
    "Talk to a local growth strategist. Call (949) 603-0389, email info@maxmarketpros.com, or send a message for a free 20-minute strategy call. Office in Irvine, CA.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Max Market Pros",
    description:
      "Talk to a local growth strategist. Call, email, or book a free 20-minute strategy call. Irvine, CA.",
    type: "website",
    url: "/contact",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Max Market Pros",
    description:
      "Talk to a local growth strategist. Call, email, or book a free 20-minute strategy call.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Max Market Pros",
    url: "https://maxmarketpros.com",
    image: "https://maxmarketpros.com/brand/logo.png",
    telephone: "+1-949-603-0389",
    email: "info@maxmarketpros.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2600 Michelson Dr, 16th Fl",
      addressLocality: "Irvine",
      addressRegion: "CA",
      postalCode: "92612",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6739,
      longitude: -117.8466,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "15:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/102400538247639",
      "https://www.instagram.com/maxmarketpros/",
      "https://www.linkedin.com/in/joseph-stirling/",
      "https://www.youtube.com/channel/UCUPi3awpe7Hrt5CUID9MLog",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-949-603-0389",
        contactType: "sales",
        email: "info@maxmarketpros.com",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
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
        name: "Contact",
        item: "https://maxmarketpros.com/contact",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
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
      <ContactGetInTouch />
      <ContactOffice />
      <JsonLd />
    </main>
  )
}
