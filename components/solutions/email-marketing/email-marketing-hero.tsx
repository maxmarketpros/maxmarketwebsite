"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Mail, ArrowRight, Clock, Zap } from "lucide-react"

const trustItems = [
  { label: "96%+ inbox placement" },
  { label: "Cross-channel SMS" },
  { label: "Revenue attribution" },
]

export function EmailMarketingHero() {
  return (
    <section aria-labelledby="email-marketing-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[420px] h-[420px] sm:w-[760px] sm:h-[760px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[25%] left-[5%] w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>Email Marketing</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Email Marketing Automation
            </Pill>

            <h1 id="email-marketing-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Automated email that feels{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">personal</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Drag-and-drop email campaigns, trigger-based drip sequences, smart segmentation, and cross-channel SMS — all hooked into your CRM so every message drives real revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free email audit
              </PrimaryButton>
              <SecondaryButton asLink href="#email-marketing-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#0EA5E9" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <InboxSequenceMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              </span>
              Sending now
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(14,165,233,0.32)]"
              style={{ background: "#0EA5E9" }}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2.75} fill="currentColor" />
              +27% reply rate
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InboxSequenceMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(14,165,233,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between px-1 pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: "rgba(14,165,233,0.14)", color: "#0EA5E9" }}
            >
              <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                Welcome Series · Live
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                247 active contacts
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
            style={{ background: "#0EA5E914", color: "#0EA5E9" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#0EA5E9", animation: "subtlePulse 2s ease-in-out infinite" }}
            />
            Running
          </div>
        </div>

        {/* Top: inbox thread preview */}
        <div className="mt-3 space-y-2">
          <InboxRow
            from="Jordan D."
            subject="Re: Welcome to Max Market Pros"
            snippet="Thanks for the quick reply! I'll book in..."
            time="9:14 AM"
            unread
          />
          <InboxRow
            from="Welcome Email · Automated"
            subject="👋 Welcome to Max Market Pros"
            snippet="Here's what happens next + what to expect..."
            time="9:02 AM"
            isOutbound
          />
          <div className="flex items-center justify-between px-1 py-1.5 text-[10.5px] font-semibold" style={{ color: "var(--muted)" }}>
            <span>Opens: 96 · Clicks: 31 · Replies: 8</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full" style={{ background: "#22C55E14", color: "#16A34A" }}>
              38% open rate
            </span>
          </div>
        </div>

        {/* Bottom: sequence flow */}
        <div
          className="mt-3 p-3.5 rounded-[var(--radius-md)] border"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Drip Sequence
            </div>
            <div className="text-[10.5px] font-semibold" style={{ color: "var(--muted)" }}>
              3 emails · 7 days
            </div>
          </div>
          <div className="flex items-stretch gap-1.5 sm:gap-2">
            <SequenceStep label="Day 0" title="Welcome" color="#0EA5E9" />
            <SequenceArrow label="2d" />
            <SequenceStep label="Day 2" title="How we work" color="#1677FF" />
            <SequenceArrow label="5d" />
            <SequenceStep label="Day 7" title="Book a call" color="#22C55E" active />
          </div>
        </div>
      </div>
    </div>
  )
}

function InboxRow({
  from,
  subject,
  snippet,
  time,
  unread,
  isOutbound,
}: {
  from: string
  subject: string
  snippet: string
  time: string
  unread?: boolean
  isOutbound?: boolean
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-[var(--radius-xs)] p-2 border"
      style={{
        background: unread ? "var(--accent-bg)" : "var(--surface)",
        borderColor: unread ? "rgba(22,119,255,0.22)" : "var(--border-color)",
      }}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: isOutbound ? "#0EA5E9" : "#1677FF",
          color: "#fff",
        }}
      >
        <Mail className="w-3 h-3" strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-[11.5px] font-bold truncate" style={{ color: "var(--ink)" }}>
            {from}
          </span>
          {unread && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1677FF" }} />}
        </div>
        <div className="text-[10.5px] font-semibold truncate" style={{ color: "var(--ink)" }}>
          {subject}
        </div>
        <div className="text-[10px] truncate" style={{ color: "var(--muted)" }}>
          {snippet}
        </div>
      </div>
      <span className="text-[9.5px] font-semibold shrink-0" style={{ color: "var(--muted)" }}>
        {time}
      </span>
    </div>
  )
}

function SequenceStep({ label, title, color, active }: { label: string; title: string; color: string; active?: boolean }) {
  return (
    <div className="flex-1 min-w-0">
      <div
        className={`rounded-[var(--radius-xs)] border p-2 text-center`}
        style={{
          background: active ? "var(--surface)" : "var(--surface)",
          borderColor: active ? `${color}66` : "var(--border-color)",
          boxShadow: active ? `0 0 0 1px ${color}33, 0 2px 8px ${color}22` : "0 1px 2px rgba(17,35,68,0.04)",
        }}
      >
        <div
          className="text-[8.5px] font-bold uppercase tracking-[0.08em]"
          style={{ color }}
        >
          {label}
        </div>
        <div
          className="mt-0.5 text-[10.5px] font-bold leading-tight truncate"
          style={{ color: "var(--ink)" }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}

function SequenceArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
      <Clock className="w-2.5 h-2.5" style={{ color: "var(--muted)" }} strokeWidth={2.5} />
      <span className="text-[8.5px] font-semibold leading-none mt-0.5" style={{ color: "var(--muted)" }}>
        {label}
      </span>
      <ArrowRight className="w-3 h-3 mt-0.5" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
    </div>
  )
}
