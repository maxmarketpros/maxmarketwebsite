"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Smartphone, TrendingUp, MapPin } from "lucide-react"
import { MiniQR } from "./mini-qr"

const trustItems = [
  { label: "Custom branded design" },
  { label: "Edit destination anytime" },
  { label: "Full scan analytics" },
]

export function QRCodesHero() {
  return (
    <section aria-labelledby="qr-codes-hero-heading" className="relative overflow-hidden">
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
                <li aria-current="page" style={{ color: "var(--ink)" }}>QR Code Generation</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              QR Codes & Scan Analytics
            </Pill>

            <h1 id="qr-codes-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Bridge offline to online — QR codes that track every{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">scan</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Custom-branded, dynamically editable QR codes with full scan analytics — for yard signs, menus, truck wraps, business cards, and every other physical touchpoint your customers see.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Request a free sample QR
              </PrimaryButton>
              <SecondaryButton asLink href="#qr-codes-features">
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
            <QRStatsMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              </span>
              3 scans this hour
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(22,119,255,0.32)]"
              style={{ background: "#1677FF" }}
            >
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
              +142% vs last week
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QRStatsMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(22,119,255,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* QR code */}
        <div className="shrink-0 flex flex-col items-center">
          <MiniQR color="#1677FF" size={160} />
          <div
            className="mt-2 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <Smartphone className="w-2.5 h-2.5" strokeWidth={2.5} />
            Scannable · Stress-tested
          </div>
        </div>

        {/* Stats panel */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
            <div>
              <div className="text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                QR Scan Analytics
              </div>
              <div className="text-[14px] font-bold" style={{ color: "var(--ink)" }}>
                Yard-Sign Campaign · Spring
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "#22C55E14", color: "#16A34A" }}
            >
              Live
            </span>
          </div>

          {/* KPI tiles */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <KpiTile label="Total scans" value="142" delta="+31% wk" color="#1677FF" />
            <KpiTile label="Unique users" value="118" delta="83% new" color="#22C55E" />
            <KpiTile label="Book rate" value="38%" delta="best yet" color="#F59E0B" />
            <KpiTile label="Revenue" value="$4.2K" delta="↑ climbing" color="#8B5CF6" />
          </div>

          {/* Mini scan log */}
          <div
            className="mt-3 rounded-[var(--radius-md)] border p-3"
            style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--muted)" }}>
              Recent scans
            </div>
            <ul className="space-y-1.5">
              {[
                { time: "2 min ago", city: "Irvine, CA", device: "iPhone" },
                { time: "14 min ago", city: "Tustin, CA", device: "Android" },
                { time: "47 min ago", city: "Orange, CA", device: "iPhone" },
              ].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-[11px]">
                  <MapPin className="w-2.5 h-2.5 shrink-0" style={{ color: "#1677FF" }} strokeWidth={2.5} />
                  <span className="font-semibold truncate" style={{ color: "var(--ink)" }}>{s.city}</span>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span style={{ color: "var(--muted)" }}>{s.device}</span>
                  <span className="ml-auto text-[10px] shrink-0" style={{ color: "var(--muted)" }}>{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiTile({ label, value, delta, color }: { label: string; value: string; delta: string; color: string }) {
  return (
    <div
      className="rounded-[var(--radius-sm)] border p-2.5"
      style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
    >
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-3.5 rounded-full" style={{ background: color }} />
        <div className="text-[9.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          {label}
        </div>
      </div>
      <div className="mt-1 text-[17px] font-bold tracking-[-0.02em] leading-none" style={{ color: "var(--ink)" }}>
        {value}
      </div>
      <div className="mt-0.5 text-[10px] font-bold" style={{ color }}>
        {delta}
      </div>
    </div>
  )
}
