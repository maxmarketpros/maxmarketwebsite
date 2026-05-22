import Link from "next/link"
import { Snowflake, Leaf, Sun, Gift, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Quarter = {
  key: string
  label: string
  months: string
  Icon: LucideIcon
  accent: string
  theme: string
  body: string
  leanOn: string[]
  targets: string[]
}

const quarters: Quarter[] = [
  {
    key: "q1",
    label: "Q1 New Year",
    months: "Jan \u2013 Mar",
    Icon: Snowflake,
    accent: "#1677FF",
    theme: "New-Year resolutions",
    body: "GLP-1 and weight-loss intake spikes. Botox 'new you' promos. Consults up ~40% in the first 3 weeks.",
    leanOn: ["Paid Ads", "Lead Gen", "Web Design"],
    targets: ["Wellness", "Med Spa"],
  },
  {
    key: "q2",
    label: "Q2 Wedding",
    months: "Apr \u2013 Jun",
    Icon: Leaf,
    accent: "#22C55E",
    theme: "Wedding & prom season",
    body: "Laser hair removal packages, Invisalign timelines, dermal-filler consults. Long-lead planners want a 6-month runway.",
    leanOn: ["Social Media", "Review Gen", "Calendar"],
    targets: ["Med Spa", "Derm", "Dental"],
  },
  {
    key: "q3",
    label: "Q3 Summer Body",
    months: "Jul \u2013 Sep",
    Icon: Sun,
    accent: "#F59E0B",
    theme: "Summer body & back-to-school",
    body: "CoolSculpting, chiro back-pain push, IV drips for athletes. Back-to-school routines bring adults back in.",
    leanOn: ["SEO", "Google Ads", "AI Agents"],
    targets: ["Med Spa", "Chiro", "Wellness"],
  },
  {
    key: "q4",
    label: "Q4 FSA/Holiday",
    months: "Oct \u2013 Dec",
    Icon: Gift,
    accent: "#EC4899",
    theme: "FSA/HSA use-it-or-lose-it + holiday gifting",
    body: "Gift cards, package bundles, deductible-reset consults. Deadline-driven urgency is real.",
    leanOn: ["Email & SMS", "Payments", "Web Design"],
    targets: ["All verticals"],
  },
]

const months = [
  { label: "J", accent: "#1677FF" },
  { label: "F", accent: "#1677FF" },
  { label: "M", accent: "#1677FF" },
  { label: "A", accent: "#22C55E" },
  { label: "M", accent: "#22C55E" },
  { label: "J", accent: "#22C55E" },
  { label: "J", accent: "#F59E0B" },
  { label: "A", accent: "#F59E0B" },
  { label: "S", accent: "#F59E0B" },
  { label: "O", accent: "#EC4899" },
  { label: "N", accent: "#EC4899" },
  { label: "D", accent: "#EC4899" },
]

export function MedCalendar() {
  return (
    <section
      id="med-calendar"
      aria-labelledby="med-calendar-heading"
      className="relative scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Year-Round Rhythm"
          heading={
            <span id="med-calendar-heading">
              Your practice&rsquo;s{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">marketing calendar</span>,
              </span>{" "}
              already planned.
            </span>
          }
          paragraph="Medical demand is seasonal. We build 12 months of campaigns tied to the moments your patients are already primed to buy."
        />

        {/* Year ribbon */}
        <div className="mt-12 sm:mt-14 relative">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {months.map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: m.accent }}
                >
                  {m.label}
                </span>
                <span
                  className="mt-1.5 w-full h-[4px] rounded-full"
                  style={{ background: `${m.accent}44` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {quarters.map((q) => (
            <article
              key={q.key}
              className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse 80% 60% at 15% 10%, ${q.accent}18 0%, transparent 70%)` }}
              />

              <div className="relative flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    {q.months}
                  </span>
                  <h3 className="mt-1 text-[18px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                    {q.label}
                  </h3>
                </div>
                <div
                  className="shrink-0 w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${q.accent}14`, border: `1px solid ${q.accent}33` }}
                >
                  <q.Icon className="w-5 h-5" style={{ color: q.accent }} strokeWidth={2.3} />
                </div>
              </div>

              <p className="relative mt-4 text-[14.5px] font-semibold" style={{ color: q.accent }}>
                {q.theme}
              </p>
              <p className="relative mt-1.5 text-[13.5px] leading-[1.55] flex-1" style={{ color: "var(--muted)" }}>
                {q.body}
              </p>

              <div className="relative mt-5" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "16px" }}>
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    Lean on
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {q.leanOn.map((s) => (
                      <span
                        key={s}
                        className="inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${q.accent}14`, color: q.accent }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    For
                  </span>
                  <p className="mt-0.5 text-[12.5px]" style={{ color: "var(--ink)" }}>
                    {q.targets.join(", ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px]" style={{ color: "var(--muted)" }}>
          Want a 12-month marketing plan for your practice?{" "}
          <Link href="#contact" className="group inline-flex items-center gap-1 font-semibold" style={{ color: "#F43F5E" }}>
            Talk to a strategist
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
        </p>
      </div>
    </section>
  )
}
