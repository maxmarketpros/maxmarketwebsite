import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { MedHero } from "@/components/industries/medical/med-hero"
import { MedClinicSelector } from "@/components/industries/medical/med-clinic-selector"
import { MedTreatments } from "@/components/industries/medical/med-treatments"
import { MedServices } from "@/components/industries/medical/med-services"
import { MedSolutions } from "@/components/industries/medical/med-solutions"
import { MedCalendar } from "@/components/industries/medical/med-calendar"
import { MedProof } from "@/components/industries/medical/med-proof"
import { MedFinalCta } from "@/components/industries/medical/med-final-cta"

export const metadata: Metadata = {
  title: "Medical Marketing",
  description:
    "Marketing for med spas, dermatology, dental, chiropractic, and wellness clinics — HIPAA-aware intake, compliant ads, consult booking, AI follow-up, and review generation.",
  alternates: { canonical: "/industries/medical" },
  openGraph: {
    title: "Medical Marketing",
    description:
      "SEO, compliant paid ads, consult booking, AI follow-up, and review generation for med spas, dermatology, dental, chiro, and wellness clinics.",
    type: "website",
    url: "/industries/medical",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Marketing",
    description:
      "One stack for the local medical economy — med spas, derm, dental, chiro, and wellness clinics.",
  },
}

const faq = [
  {
    q: "Do you work with med spas and cosmetic clinics, not just general medical?",
    a: "Yes — med spas are our primary medical focus. We also work deeply with dermatology and plastic surgery, dental and orthodontic, chiropractic and physical therapy, and wellness clinics (IV drips, HRT, GLP-1 weight-loss).",
  },
  {
    q: "How do you handle HIPAA and medical ad-policy compliance?",
    a: "Every intake form and lead route is built with PHI in mind. We pre-flight creative against Google's health category and Meta's before/after rule before launching, and we prep weight-loss and Rx clinics to pass LegitScript monitoring.",
  },
  {
    q: "How long until we see results?",
    a: "Compliant paid ads and missed-consult text-back typically move within the first 14 days. Local SEO, review generation, and retention cadences show meaningful ranking and rebook lift inside 60–90 days.",
  },
  {
    q: "Do you run the ads for us or just give us a dashboard?",
    a: "We run them — full service. You get a Looker Studio dashboard plus weekly reports showing booked consults and revenue, not vanity traffic, but day-to-day ad management is on us.",
  },
  {
    q: "What does it cost?",
    a: "Engagements are scoped to clinic type, service radius, and the treatments you want to grow. A la carte pricing is published on our plans page; bundled medical packages are quoted on the growth consult.",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmarketpros.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.maxmarketpros.com/industries" },
      { "@type": "ListItem", position: 3, name: "Medical", item: "https://www.maxmarketpros.com/industries/medical" },
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
      <MedHero />
      <MedClinicSelector />
      <MedTreatments />
      <MedServices />
      <MedSolutions />
      <MedCalendar />
      <MedProof />
      <MedFinalCta />
      <JsonLd />
    </main>
  )
}
