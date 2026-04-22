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
              <PrimaryButton size="lg" asLink href="#qr-generator">
                Generate a Free QR Code
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

const topLocations = [
  { city: "Irvine, CA", count: 48, pct: 100 },
  { city: "Tustin, CA", count: 32, pct: 67 },
  { city: "Orange, CA", count: 28, pct: 58 },
]

function QRStatsMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 75% 65% at 85% 15%, rgba(22,119,255,0.12) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
        <div>
          <div className="text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
            QR Scan Analytics
          </div>
          <div className="mt-0.5 text-[14.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            Yard-Sign Campaign · Spring
          </div>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "#22C55E14", color: "#16A34A" }}
        >
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full opacity-70" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
            <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
          </span>
          Live
        </span>
      </div>

      {/* Main grid: QR + stats */}
      <div className="relative mt-5 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 sm:gap-6 items-start">
        {/* QR column */}
        <div className="flex flex-col items-center justify-self-center sm:justify-self-start">
          <MiniQR color="#1677FF" size={160} />
          <div
            className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <Smartphone className="w-2.5 h-2.5" strokeWidth={2.5} />
            Scannable · Stress-tested
          </div>
        </div>

        {/* Stats column */}
        <div className="min-w-0 w-full">
          {/* Hero stat */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Scans · Last 7 days
            </div>
            <div className="mt-1 flex items-baseline gap-2.5">
              <div
                className="text-[40px] sm:text-[44px] font-bold leading-none tracking-[-0.03em]"
                style={{
                  background: "linear-gradient(180deg, var(--ink) 0%, var(--accent) 130%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                142
              </div>
              <div className="inline-flex items-center gap-1 text-[12px] font-bold" style={{ color: "#16A34A" }}>
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
                +31%
              </div>
            </div>
          </div>

          {/* Sparkline */}
          <svg
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
            className="mt-2 w-full h-[36px] block"
            aria-hidden
          >
            <defs>
              <linearGradient id="qr-hero-spark-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1677FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 22 L 12 18 L 24 21 L 36 14 L 48 16 L 60 10 L 72 12 L 84 6 L 100 3 L 100 30 L 0 30 Z"
              fill="url(#qr-hero-spark-fill)"
            />
            <path
              d="M 0 22 L 12 18 L 24 21 L 36 14 L 48 16 L 60 10 L 72 12 L 84 6 L 100 3"
              stroke="#1677FF"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="100" cy="3" r="2.4" fill="#fff" stroke="#1677FF" strokeWidth="1.5" />
          </svg>

          {/* Top locations */}
          <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
            <div className="text-[10px] font-bold uppercase tracking-[0.08em] mb-2.5" style={{ color: "var(--muted)" }}>
              Top locations
            </div>
            <ul className="space-y-2">
              {topLocations.map((s) => (
                <li key={s.city} className="flex items-center gap-2.5 text-[11.5px]">
                  <MapPin className="w-3 h-3 shrink-0" style={{ color: "#1677FF" }} strokeWidth={2.75} />
                  <span
                    className="font-semibold shrink-0"
                    style={{ color: "var(--ink)", minWidth: 78 }}
                  >
                    {s.city}
                  </span>
                  <div
                    className="flex-1 h-1.5 rounded-full overflow-hidden"
                    style={{ background: "var(--border-color)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #1677FF, #3B9FFF)",
                        width: `${s.pct}%`,
                      }}
                    />
                  </div>
                  <span
                    className="font-bold tabular-nums shrink-0"
                    style={{ color: "var(--ink)", minWidth: 22, textAlign: "right" }}
                  >
                    {s.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
