"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Stage = {
  n: number
  title: string
  desc: string
  icons8Id: string
  accent: string
  links: { label: string; href: string }[]
}

const stages: Stage[] = [
  {
    n: 1,
    title: "Find you",
    desc: "Google Map Pack, AI answers, and local pages rank your shop for every \"near me\" variant.",
    icons8Id: "13778",
    accent: "#F59E0B",
    links: [
      { label: "Local SEO", href: "/services/seo/local" },
      { label: "AI Search", href: "/services/seo/ai-search" },
    ],
  },
  {
    n: 2,
    title: "Click through",
    desc: "A fast, mobile-first site that loads instantly and shows the service, the price, and the phone.",
    icons8Id: "114334",
    accent: "#1677FF",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Paid Ads",   href: "/services/paid-ads" },
    ],
  },
  {
    n: 3,
    title: "Reach out",
    desc: "Every call, form, text, and DM drops into one inbox — and an AI agent handles after-hours.",
    icons8Id: "108791",
    accent: "#8B5CF6",
    links: [
      { label: "Lead Gen",   href: "/solutions/lead-generation" },
      { label: "AI Agents",  href: "/solutions/ai-agents" },
    ],
  },
  {
    n: 4,
    title: "Book the job",
    desc: "Customer picks a slot, leaves a deposit, gets SMS reminders — no-show rate drops.",
    icons8Id: "12776",
    accent: "#22C55E",
    links: [
      { label: "Calendar",   href: "/solutions/calendar" },
      { label: "Payments",   href: "/solutions/payments" },
    ],
  },
  {
    n: 5,
    title: "Show up & pay",
    desc: "Rental contracts, service authorizations, and text-to-pay invoices — all from any phone.",
    icons8Id: "13007",
    accent: "#10B981",
    links: [
      { label: "Document Signing", href: "/solutions/document-signing" },
      { label: "Payments",         href: "/solutions/payments" },
    ],
  },
  {
    n: 6,
    title: "Come back & refer",
    desc: "Reminder sequences, 5-star review asks, and win-back flows turn one job into three.",
    icons8Id: "LlgB5a8aAr0G",
    accent: "#EC4899",
    links: [
      { label: "Email & SMS",      href: "/solutions/email-marketing" },
      { label: "Review Gen",       href: "/services/social-media/review-generation" },
    ],
  },
]

export function AutoJourney() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const delta = dir === "left" ? -el.clientWidth * 0.7 : el.clientWidth * 0.7
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <section id="journey" aria-labelledby="auto-journey-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Customer journey"
          heading={
            <span id="auto-journey-heading">
              From{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">&ldquo;near me&rdquo;</span>
              </span>{" "}
              to booked, paid, and back again.
            </span>
          }
          paragraph="Six stages — six pieces of your stack. Every auto customer runs this path, whether they know it or not."
        />

        <div className="mt-12 sm:mt-14 relative" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {/* Mobile/tablet chevrons */}
          <div className="flex lg:hidden items-center justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>

          {/* Horizontal scroll strip / desktop grid */}
          <div
            ref={scrollRef}
            className="relative grid grid-flow-col auto-cols-[85%] sm:auto-cols-[55%] md:auto-cols-[40%] lg:grid-flow-row lg:grid-cols-6 lg:auto-cols-auto gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            {/* Connecting line (desktop only) */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-[2px] -z-0"
              style={{ background: "var(--border-color)" }}
            />
            <div
              aria-hidden
              className="hidden lg:block absolute top-[26px] left-[6%] h-[2px] -z-0"
              style={{
                width: "88%",
                background: "linear-gradient(90deg, rgba(22,119,255,0) 0%, #1677FF 35%, #74D3FF 70%, rgba(116,211,255,0) 100%)",
                animation: "fadeInUp 1.2s ease-out 0.2s both",
              }}
            />

            {stages.map((stage) => (
              <StageCard key={stage.n} stage={stage} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Map your own journey on a 30-minute call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="relative snap-start lg:snap-none">
      <div className="flex flex-col items-center text-center">
        {/* Number disc with icon overlay */}
        <div
          className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center text-white font-bold text-[18px] shadow-[0_6px_16px_rgba(22,119,255,0.28)]"
          style={{
            background: `linear-gradient(180deg, ${stage.accent} 0%, ${darken(stage.accent)} 100%)`,
          }}
        >
          {stage.n}
        </div>

        <div
          className="mt-4 card-surface card-surface-hover relative overflow-hidden p-5 w-full flex flex-col"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 80% 70% at 50% 0%, ${stage.accent}14 0%, transparent 70%)` }}
          />

          <div className="relative flex items-center justify-center">
            <img
              src={icons8Url(stage.icons8Id, 128)}
              alt=""
              width={56}
              height={56}
              className="w-[56px] h-[56px]"
              loading="lazy"
            />
          </div>

          <h3 className="relative mt-3 text-[17px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
            {stage.title}
          </h3>
          <p className="relative mt-1.5 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
            {stage.desc}
          </p>

          <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
            {stage.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11.5px] font-semibold transition-colors"
                style={{
                  background: `${stage.accent}14`,
                  color: stage.accent,
                  border: `1px solid ${stage.accent}2E`,
                }}
              >
                {l.label}
                <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.6} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function darken(hex: string) {
  // simple client-side darken for gradient bottom stop
  const h = hex.replace("#", "")
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const f = (v: number) => Math.max(0, Math.round(v * 0.8))
  return `#${[f(r), f(g), f(b)].map((v) => v.toString(16).padStart(2, "0")).join("")}`
}
