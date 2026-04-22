import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { TaskManagementHero } from "@/components/solutions/task-management/task-management-hero"
import { TaskManagementStats } from "@/components/solutions/task-management/task-management-stats"
import { TaskManagementBento } from "@/components/solutions/task-management/task-management-bento"
import { TaskManagementRecipes } from "@/components/solutions/task-management/task-management-recipes"
import { TaskManagementFaq } from "@/components/solutions/task-management/task-management-faq"
import { taskMgmtFaqs } from "@/components/solutions/task-management/task-management-faq-data"
import { TaskManagementFinalCta } from "@/components/solutions/task-management/task-management-final-cta"

export const metadata: Metadata = {
  title: "Workflow Automation Software for Small Business | Max Market Pros",
  description:
    "No-code workflow builder for service businesses. Automate lead follow-up, missed-call text-backs, task routing, and approval chains. Save 6+ hours per person per week.",
  keywords: [
    "workflow automation software",
    "business process automation",
    "marketing automation tool",
    "trigger-based automation for small business",
    "missed call automation",
    "task automation software",
    "no-code automation builder",
  ],
  alternates: { canonical: "/solutions/task-management" },
  openGraph: {
    title: "Workflow Automation Software for Small Business | Max Market Pros",
    description:
      "Build trigger-based workflows that handle the 10,000 small things your team does manually every month.",
    type: "website",
    url: "/solutions/task-management",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation Software for Small Business | Max Market Pros",
    description: "Workflows, triggers, approvals, SMS + email automation — all no-code.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "Trigger-Based Workflows", description: "Multi-step workflows with 50+ triggers and unlimited actions." },
  { name: "SMS + Email Automation", description: "Two-way SMS and branded email inside any workflow step." },
  { name: "Internal Task Assignments", description: "Auto-route tasks to reps with SLAs and escalation rules." },
  { name: "Follow-up Sequences", description: "Multi-channel cadences with auto-exit on reply." },
  { name: "Integration Hub", description: "Native integrations plus 6,000+ via Zapier/Make and custom webhooks." },
  { name: "Approval Chains", description: "Rule-based routing for quotes, refunds, and sensitive approvals." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Workflow Automation Software",
    name: "Automated Task Management",
    description:
      "No-code workflow automation for service businesses — trigger-based flows, internal task assignments, follow-up sequences, and approval chains.",
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
      name: "Automation Features",
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
      { "@type": "ListItem", position: 3, name: "Task Management", item: "https://maxmarketpros.com/solutions/task-management" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: taskMgmtFaqs.map((f) => ({
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
      <TaskManagementHero />
      <TaskManagementStats />
      <section id="task-mgmt-features">
        <TaskManagementBento />
      </section>
      <TaskManagementRecipes />
      <TaskManagementFaq />
      <TaskManagementFinalCta />
      <JsonLd />
    </main>
  )
}
