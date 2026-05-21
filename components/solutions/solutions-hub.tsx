import Link from "next/link"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { SectionHeader } from "@/components/ui/section-header"

import { ChatTranscriptMockup } from "@/components/solutions/ai-agents/ai-agents-hero"
import { HeroDashboard } from "@/components/solutions/analytics/analytics-hero"
import { BookingMockup } from "@/components/solutions/calendar/calendar-hero"
import { AdminMockup } from "@/components/solutions/custom-web-apps/custom-web-apps-hero"
import { ContractMockup } from "@/components/solutions/document-signing/document-signing-hero"
import { InboxSequenceMockup } from "@/components/solutions/email-marketing/email-marketing-hero"
import { PipelineMockup } from "@/components/solutions/lead-generation/lead-gen-hero"
import { InvoiceMockup } from "@/components/solutions/payments/payments-hero"
import { QRStatsMockup } from "@/components/solutions/qr-codes/qr-codes-hero"
import { WorkflowMockup } from "@/components/solutions/task-management/task-management-hero"

type Solution = {
  slug: string
  name: string
  accent: string
  Mockup: React.ComponentType
  description: string
}

const solutions: Solution[] = [
  // Row 1 — capture + measure (both medium)
  { slug: "lead-generation",  name: "Lead Generation",         accent: "#1677FF", Mockup: PipelineMockup,       description: "Unify every call, text, form, and Facebook lead into one auto-tagged, auto-assigned inbox." },
  { slug: "analytics",        name: "Analytics & Attribution", accent: "#0EA5E9", Mockup: HeroDashboard,        description: "GA4, call tracking, and Looker Studio dashboards that trace every lead back to the source." },

  // Row 2 — automate (both tall)
  { slug: "ai-agents",        name: "AI Agents",               accent: "#8B5CF6", Mockup: ChatTranscriptMockup, description: "A 24/7 AI receptionist that answers chats, calls, SMS, and DMs — and books real appointments." },
  { slug: "task-management",  name: "Workflows & Automation",  accent: "#EF4444", Mockup: WorkflowMockup,       description: "Trigger-based workflows that route leads, send follow-ups, and chase payments automatically." },

  // Row 3 — engage (tall + medium-tall)
  { slug: "calendar",         name: "Scheduling & Booking",    accent: "#22C55E", Mockup: BookingMockup,        description: "Let clients book themselves 24/7 with deposits, reminders, and Google/Outlook sync." },
  { slug: "email-marketing",  name: "Email & SMS Marketing",   accent: "#F59E0B", Mockup: InboxSequenceMockup,  description: "Drag-and-drop campaigns, drip sequences, and smart segmentation hooked into your CRM." },

  // Row 4 — transact + bridge (both short)
  { slug: "payments",         name: "Payments",                accent: "#10B981", Mockup: InvoiceMockup,        description: "Text-to-pay invoicing, deposits, and recurring billing — powered by Stripe, zero app downloads." },
  { slug: "qr-codes",         name: "QR Code Generation",      accent: "#1677FF", Mockup: QRStatsMockup,        description: "Branded, editable QR codes with full scan analytics for every offline touchpoint." },

  // Row 5 — formalize + extend (medium + medium)
  { slug: "document-signing", name: "Document Signing",        accent: "#6366F1", Mockup: ContractMockup,       description: "Legally binding e-signatures for proposals, contracts, and NDAs — signed from any phone." },
  { slug: "custom-web-apps",  name: "Custom Web Apps",         accent: "#8B5CF6", Mockup: AdminMockup,          description: "Internal tools, client portals, and white-label SaaS — built on Next.js + Postgres you fully own." },
]

const trustItems = [
  "10 integrated solutions",
  "Built to run together",
  "Own your data + code",
]

export function SolutionsHub() {
  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsFinalCta />
    </>
  )
}

function SolutionsHero() {
  return (
    <section aria-labelledby="solutions-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 lg:pb-20">
        <div className="max-w-[820px] mx-auto text-center" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
          <div className="flex justify-center">
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Solutions
            </Pill>
          </div>

          <h1
            id="solutions-hero-heading"
            className="mt-6 text-[40px] xs:text-[44px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Every tool your service business needs to{" "}
            <span className="whitespace-nowrap">
              <span className="accent-underline">grow</span>.
            </span>
          </h1>

          <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto" style={{ color: "var(--muted)" }}>
            Ten integrated tools — lead gen, AI, scheduling, payments, marketing, analytics — built to run together so nothing falls through the cracks.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              Book a strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="#solutions-grid">
              Explore solutions
            </SecondaryButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustItems.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                <Star className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" strokeWidth={0} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SolutionsGrid() {
  return (
    <section id="solutions-grid" aria-labelledby="solutions-grid-heading" className="relative scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="What we build"
          heading={
            <span id="solutions-grid-heading">
              Every tool your business needs —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">in one place.</span>
              </span>
            </span>
          }
          paragraph="Click any card to dive deeper. Each solution is a standalone product — and they all share one CRM, one analytics layer, and one brand."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {solutions.map((s) => (
            <SolutionCard key={s.slug} solution={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionCard({ solution }: { solution: Solution }) {
  const { Mockup } = solution
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group card-surface card-surface-hover relative block overflow-hidden transition-all"
    >
      <div
        className="relative flex items-center justify-center overflow-hidden border-b px-5 py-8 sm:px-7 sm:py-10"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${solution.accent}14 0%, transparent 70%)` }}
        />
        <div className="pointer-events-none relative w-full max-w-[440px]">
          <Mockup />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${solution.accent}14`, color: solution.accent }}
        >
          {solution.name}
        </span>
        <h3
          className="mt-3 text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {solution.name}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {solution.description}
        </p>
        <div
          className="mt-5 flex items-center gap-2 text-[14.5px] font-semibold"
          style={{ color: "var(--accent)" }}
        >
          <span>Explore {solution.name}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  )
}

function SolutionsFinalCta() {
  return (
    <section aria-labelledby="solutions-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #1677FF 0%, #2B8AFF 45%, #74D3FF 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.25), 0 30px 80px rgba(22,119,255,0.22)",
          }}
        >
          <div aria-hidden className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(11,19,43,0.22) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <h2 id="solutions-final-cta-heading" className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white">
              Let's map your stack —{" "}
              <span className="whitespace-nowrap">in 30 minutes.</span>
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[620px] mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
              Book a free strategy call. We'll audit what you have, flag what's leaking revenue, and show you exactly which of these solutions would move the needle first.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                Book a free strategy call
              </a>
              <a
                href="/plans/a-la-carte"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                See A La Carte pricing
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
