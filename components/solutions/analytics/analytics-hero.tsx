"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Star, Sparkles, TrendingUp, DollarSign, Target, Users } from "lucide-react"

const trustItems = [
  { label: "GA4 certified setup" },
  { label: "Call tracking included" },
  { label: "Live Looker dashboards" },
]

export function AnalyticsHero() {
  return (
    <section aria-labelledby="analytics-hero-heading" className="relative overflow-hidden">
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

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>Google Analytics</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Google Analytics & Reporting
            </Pill>

            <h1 id="analytics-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Know exactly what's working — and what to{" "}
              <span className="whitespace-nowrap">
                stop <span className="accent-underline">paying for</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Full GA4 setup, dynamic call tracking, CRM-linked attribution, and live Looker Studio dashboards. Every ad dollar, every lead, every booked job — traced back to the source that drove it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Request a free analytics audit
              </PrimaryButton>
              <SecondaryButton asLink href="#analytics-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <HeroDashboard />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              </span>
              Live data
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(22,119,255,0.32)]"
              style={{ background: "#1677FF" }}
            >
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
              ↑41% MoM
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroDashboard() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(22,119,255,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex items-center gap-2">
            <img src={icons8Url("60037", 96)} alt="" width={22} height={22} className="w-[22px] h-[22px] object-contain" />
            <div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                Analytics · Mar 2026
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                Home services client · Live
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
            style={{ background: "#22C55E14", color: "#16A34A" }}
          >
            <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
            +41%
          </div>
        </div>

        {/* KPI tiles */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <KpiTile icon={<Users className="w-3 h-3" strokeWidth={2.5} />} label="Leads" value="312" color="#22C55E" />
          <KpiTile icon={<Target className="w-3 h-3" strokeWidth={2.5} />} label="Booked" value="84" color="#F59E0B" />
          <KpiTile icon={<DollarSign className="w-3 h-3" strokeWidth={2.5} />} label="Revenue" value="$47K" color="#1677FF" />
        </div>

        {/* Mini chart */}
        <div
          className="mt-3 p-3 rounded-[var(--radius-md)] border"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Revenue · 12 months
            </div>
            <div className="text-[10px] font-bold" style={{ color: "#16A34A" }}>↑ Climbing</div>
          </div>
          <svg viewBox="0 0 300 60" className="w-full h-[52px]" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1677FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,50 C25,48 50,45 75,40 C100,35 125,30 150,26 C175,22 200,16 225,12 C250,8 275,5 300,3 L300,60 L0,60 Z" fill="url(#heroGrad)" />
            <path d="M0,50 C25,48 50,45 75,40 C100,35 125,30 150,26 C175,22 200,16 225,12 C250,8 275,5 300,3" fill="none" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="300" cy="3" r="3" fill="#1677FF" />
          </svg>
        </div>

        {/* Channel attribution row */}
        <div
          className="mt-3 p-3 rounded-[var(--radius-md)] border"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--muted)" }}>
            Leads by source
          </div>
          <div className="space-y-1.5">
            {[
              { label: "Google Ads", pct: 38, color: "#4285F4" },
              { label: "Organic SEO", pct: 27, color: "#22C55E" },
              { label: "Meta Ads", pct: 18, color: "#1877F2" },
              { label: "Direct", pct: 17, color: "#F59E0B" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="text-[10px] font-semibold w-[70px] truncate" style={{ color: "var(--ink)" }}>{c.label}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "var(--border-color)" }}>
                  <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
                <span className="text-[10px] font-bold w-8 text-right" style={{ color: "var(--ink)" }}>{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiTile({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border p-2" style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}>
      <div
        className="w-5 h-5 rounded-[var(--radius-xs)] flex items-center justify-center"
        style={{ background: `${color}14`, color }}
      >
        {icon}
      </div>
      <div className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
        {label}
      </div>
      <div className="mt-0.5 text-[15px] sm:text-[17px] font-bold tracking-[-0.02em] leading-none" style={{ color: "var(--ink)" }}>
        {value}
      </div>
    </div>
  )
}
