import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CalendarHero } from "@/components/solutions/calendar/calendar-hero"
import { CalendarStats } from "@/components/solutions/calendar/calendar-stats"
import { CalendarBento } from "@/components/solutions/calendar/calendar-bento"
import { CalendarFlow } from "@/components/solutions/calendar/calendar-flow"
import { CalendarFaq } from "@/components/solutions/calendar/calendar-faq"
import { calendarFaqs } from "@/components/solutions/calendar/calendar-faq-data"
import { CalendarFinalCta } from "@/components/solutions/calendar/calendar-final-cta"

export const metadata: Metadata = {
  title: "Online Appointment Booking Software | Max Market Pros",
  description:
    "24/7 online booking for service businesses — round-robin scheduling, deposit-on-booking, Google & Outlook sync, SMS reminders. Cut no-shows. Fill your calendar.",
  keywords: [
    "online appointment scheduling",
    "online booking software",
    "calendar booking for service business",
    "Calendly alternative",
    "appointment booking widget",
    "round robin scheduling",
    "deposit on booking",
    "SMS appointment reminders",
  ],
  alternates: { canonical: "/solutions/calendar" },
  openGraph: {
    title: "Online Appointment Booking Software | Max Market Pros",
    description:
      "Let clients book you 24/7. Round-robin scheduling, deposit-on-booking, Google & Outlook sync, and automatic reminders that cut no-shows 29%.",
    type: "website",
    url: "/solutions/calendar",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Appointment Booking Software | Max Market Pros",
    description: "24/7 booking, round-robin, deposits, reminders. Built for service businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "Round-Robin Scheduling", description: "Fair distribution of bookings across your team with weighted availability." },
  { name: "Google & Outlook Sync", description: "Two-way sync with Google Calendar, Outlook, iCloud, and Office 365." },
  { name: "SMS + Email Reminders", description: "Automated reminders that reduce no-shows by 29% on average." },
  { name: "Custom Intake Forms", description: "Service-specific intake forms with photo and file uploads." },
  { name: "Deposit on Booking", description: "Require a deposit or no-show fee at the moment of booking." },
  { name: "Embed Anywhere Widget", description: "Single-script embed for Webflow, WordPress, Wix, Squarespace, or custom sites." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Online Appointment Booking Software",
    name: "Calendar Booking",
    description:
      "24/7 online appointment booking for service businesses — round-robin scheduling, deposit-on-booking, calendar sync, and SMS reminders.",
    provider: {
      "@type": "Organization",
      name: "Max Market Pros",
      url: "https://maxmarketpros.com",
      telephone: "+1-949-603-0389",
      address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Calendar Booking Features",
      itemListElement: offerCatalogItems.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: { "@type": "Service", name: item.name, description: item.description },
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://maxmarketpros.com/solutions" },
      { "@type": "ListItem", position: 3, name: "Calendar Booking", item: "https://maxmarketpros.com/solutions/calendar" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calendarFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CalendarHero />
      <CalendarStats />
      <section id="calendar-features">
        <CalendarBento />
      </section>
      <CalendarFlow />
      <CalendarFaq />
      <CalendarFinalCta />
      <JsonLd />
    </main>
  )
}
