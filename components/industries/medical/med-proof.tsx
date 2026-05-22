import Link from "next/link"
import { ShieldCheck, Lock, Sparkles, BarChart3, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Principle = {
  key: string
  Icon: LucideIcon
  accent: string
  title: string
  body: string
}

const principles: Principle[] = [
  {
    key: "hipaa",
    Icon: ShieldCheck,
    accent: "#1677FF",
    title: "HIPAA-aware intake",
    body: "Every form and lead route treats PHI like PHI. BAAs where they belong; no plain-text PHI in marketing inboxes.",
  },
  {
    key: "policy",
    Icon: Lock,
    accent: "#4F46E5",
    title: "Ad-policy fluency",
    body: "We pre-flight creative for Google's health category and Meta's before/after rule before a dollar is spent.",
  },
  {
    key: "legitscript",
    Icon: Sparkles,
    accent: "#F43F5E",
    title: "LegitScript-ready",
    body: "Weight-loss, GLP-1, and Rx clinics get landing pages and disclosures tuned to pass LegitScript monitoring.",
  },
  {
    key: "measurable",
    Icon: BarChart3,
    accent: "#0F766E",
    title: "Measurable, not vanity",
    body: "Looker Studio dashboards show booked consults and revenue \u2014 not impressions, not bounce rate.",
  },
]

const stats = [
  { value: "+2.4\u00D7", label: "consults / mo" },
  { value: "78%",       label: "no-show drop" },
  { value: "4.9\u2605", label: "avg review" },
  { value: "63%",       label: "of visits rebook" },
]

export function MedProof() {
  return (
    <section aria-labelledby="med-proof-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How We Ship"
          heading={
            <span id="med-proof-heading">
              Compliant. Measurable.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Built for practices</span>.
              </span>
            </span>
          }
          paragraph="Medical marketing isn't small-business marketing. Here's the discipline we bring to every engagement."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: principles */}
          <div className="lg:col-span-5 space-y-4" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
            {principles.map((p) => (
              <div
                key={p.key}
                className="card-surface card-surface-hover relative overflow-hidden p-5 flex items-start gap-4"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(ellipse 60% 40% at 10% 20%, ${p.accent}14 0%, transparent 70%)` }}
                />
                <div
                  className="relative shrink-0 w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}33` }}
                >
                  <p.Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={2.3} />
                </div>
                <div className="relative">
                  <h4 className="text-[16px] sm:text-[17px] font-bold leading-[1.25] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: aspirational playbook */}
          <div className="lg:col-span-7" style={{ animation: "fadeInUp 0.7s ease-out 0.12s both" }}>
            <article
              className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-8 lg:p-10 h-full flex flex-col"
              style={{ borderRadius: "28px" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 80% 10%, rgba(244,63,94,0.10) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(245,158,11,0.10) 0%, transparent 65%)",
                }}
              />

              <div className="relative flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(244,63,94,0.14)", color: "#F43F5E" }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Illustrative playbook
                </span>
              </div>

              <h3 className="relative mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
                A med spa, 90 days in.
              </h3>

              <div className="relative mt-4 space-y-3.5 text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                <p>
                  Week 1. We rebuild the booking flow so consults take under 90 seconds on mobile with a $50 deposit. Meta and Google accounts get health-verified; creative gets pre-flighted against cosmetic policy.
                </p>
                <p>
                  Week 4. Reels are shipping weekly &mdash; provider on camera, lifestyle proxies instead of before/afters. An AI front-desk agent is booking consults from Instagram DMs at 2am. Review requests go out 3 hours after every appointment.
                </p>
                <p>
                  Day 90. Tuesdays and Wednesdays are fully booked. Rebooks come from a 14-day Email/SMS cadence. The Looker dashboard shows which channel brought in the $4,200 CoolSculpting package &mdash; and which neighborhood to advertise to next.
                </p>
              </div>

              <div
                className="relative mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
                style={{ borderTop: "1px solid var(--border-color)", paddingTop: "20px" }}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[var(--radius-sm)] px-3 py-3 text-center"
                    style={{ background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.22)" }}
                  >
                    <div className="text-[22px] sm:text-[24px] font-bold leading-none tracking-[-0.02em]" style={{ color: "#F43F5E" }}>
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#med-services"
                className="group relative mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold self-start"
                style={{ color: "#F43F5E" }}
              >
                See the services behind this
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </article>
          </div>
        </div>

        <p className="mt-6 text-center text-[12.5px] italic" style={{ color: "var(--muted)" }}>
          Example playbook. Results vary by market, spend, offer quality, and operational consistency.
        </p>
      </div>
    </section>
  )
}
