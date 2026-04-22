import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AIAgentsHero } from "@/components/solutions/ai-agents/ai-agents-hero"
import { AIAgentsStats } from "@/components/solutions/ai-agents/ai-agents-stats"
import { AIAgentsBento } from "@/components/solutions/ai-agents/ai-agents-bento"
import { AIAgentsConversations } from "@/components/solutions/ai-agents/ai-agents-conversations"
import { AIAgentsFaq } from "@/components/solutions/ai-agents/ai-agents-faq"
import { aiAgentsFaqs } from "@/components/solutions/ai-agents/ai-agents-faq-data"
import { AIAgentsFinalCta } from "@/components/solutions/ai-agents/ai-agents-final-cta"

export const metadata: Metadata = {
  title: "AI Customer Service Agents for Small Business | Max Market Pros",
  description:
    "24/7 AI chat and voice agents that qualify leads, book appointments, and hand off to humans when it matters — trained specifically for service businesses.",
  keywords: [
    "AI chatbot for small business",
    "AI receptionist",
    "conversational AI for service business",
    "AI voice agent",
    "24/7 customer service AI",
    "AI appointment booking",
    "chatbot for contractors",
  ],
  alternates: { canonical: "/solutions/ai-agents" },
  openGraph: {
    title: "AI Customer Service Agents for Small Business | Max Market Pros",
    description:
      "A trained AI agent that answers chats, calls, SMS, and DMs — qualifies leads and books jobs 24/7.",
    type: "website",
    url: "/solutions/ai-agents",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Service Agents for Small Business | Max Market Pros",
    description: "24/7 AI chat + voice. Qualifies leads, books jobs, hands off to humans.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const offerCatalogItems = [
  { name: "AI Chat Assistant", description: "Always-on chat across web, SMS, Facebook Messenger, and Instagram DMs." },
  { name: "AI Voice Receptionist", description: "Natural-sounding voice AI that answers every call." },
  { name: "Appointment Booking AI", description: "Reads live calendar availability and books jobs end-to-end." },
  { name: "Multi-language Support", description: "50+ languages with auto language detection." },
  { name: "Seamless Human Handoff", description: "Custom escalation rules with live transcript handoff." },
  { name: "Trained On Your Business", description: "Custom knowledge base locked to your FAQs and policies." },
]

function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Customer Service Agents",
    name: "AI Customer Service Agents",
    description:
      "24/7 AI chat and voice agents that qualify leads, book jobs, and hand off to humans — trained on your business specifics.",
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
      name: "AI Agent Features",
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
      { "@type": "ListItem", position: 3, name: "AI Customer Service", item: "https://maxmarketpros.com/solutions/ai-agents" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiAgentsFaqs.map((f) => ({
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
      <AIAgentsHero />
      <AIAgentsStats />
      <section id="ai-agents-features">
        <AIAgentsBento />
      </section>
      <AIAgentsConversations />
      <AIAgentsFaq />
      <AIAgentsFinalCta />
      <JsonLd />
    </main>
  )
}
