"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Check, ChevronLeft, ChevronRight } from "lucide-react"

const trustItems = [
  { label: "Book in 60 seconds" },
  { label: "No-shows drop 29%" },
  { label: "4.9★ on Google" },
]

export function CalendarHero() {
  return (
    <section aria-labelledby="calendar-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] sm:w-[760px] sm:h-[760px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[25%] left-[10%] w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 60%)" }}
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
                <li aria-current="page" style={{ color: "var(--ink)" }}>Calendar Booking</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Online Appointment Booking
            </Pill>

            <h1
              id="calendar-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Let clients book you{" "}
              <span className="accent-underline">24/7</span> — without the phone{" "}
              <span className="whitespace-nowrap">tag.</span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Round-robin scheduling, deposit-on-booking, Google & Outlook sync, and automated reminders — so clients book themselves while you work, and they actually show up.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free booking setup
              </PrimaryButton>
              <SecondaryButton asLink href="#calendar-features">
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
            <BookingMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }}
                />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              </span>
              Booked just now
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(22,119,255,0.32)]"
              style={{ background: "#1677FF" }}
            >
              38% booked after hours
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type BookingSlot = {
  time: string
  name: string
  initials: string
  service: string
  duration: string
  color: string
}

const slots: BookingSlot[] = [
  { time: "9:00 AM", name: "Maria R.", initials: "MR", service: "AC tune-up", duration: "60 min", color: "#1677FF" },
  { time: "10:30 AM", name: "Jordan D.", initials: "JD", service: "Consultation", duration: "30 min", color: "#22C55E" },
  { time: "1:00 PM", name: "Sarah K.", initials: "SK", service: "Emergency visit", duration: "90 min", color: "#F59E0B" },
]

function BookingMockup() {
  const days = [
    { n: 14, booked: false }, { n: 15, booked: true }, { n: 16, booked: true }, { n: 17, booked: false, today: true },
    { n: 18, booked: true }, { n: 19, booked: false }, { n: 20, booked: false },
    { n: 21, booked: false }, { n: 22, booked: true }, { n: 23, booked: false }, { n: 24, booked: true },
    { n: 25, booked: false }, { n: 26, booked: false }, { n: 27, booked: false },
  ]

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
      <div className="relative grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-3 sm:gap-4">
        {/* Calendar month */}
        <div
          className="rounded-[var(--radius-md)] border p-3 sm:p-4"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-1">
              <button className="w-5 h-5 rounded flex items-center justify-center" style={{ color: "var(--muted)" }}>
                <ChevronLeft className="w-3 h-3" strokeWidth={2.5} />
              </button>
              <span className="text-[11.5px] sm:text-[12.5px] font-bold" style={{ color: "var(--ink)" }}>
                April 2026
              </span>
              <button className="w-5 h-5 rounded flex items-center justify-center" style={{ color: "var(--muted)" }}>
                <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((l, i) => (
              <div key={`lbl-${i}`} className="text-center text-[9px] font-semibold" style={{ color: "var(--muted)" }}>
                {l}
              </div>
            ))}
            {days.map((d) => (
              <div
                key={d.n}
                className="aspect-square rounded flex items-center justify-center text-[10.5px] font-bold relative"
                style={{
                  background: d.today ? "#1677FF" : d.booked ? "rgba(22,119,255,0.12)" : "transparent",
                  color: d.today ? "#fff" : d.booked ? "#1677FF" : "var(--ink)",
                  border: d.today ? "none" : d.booked ? "1px solid rgba(22,119,255,0.22)" : "none",
                }}
              >
                {d.n}
                {d.booked && !d.today && (
                  <span
                    className="absolute bottom-0.5 w-1 h-1 rounded-full"
                    style={{ background: "#22C55E" }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 text-[9.5px] font-semibold" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
              Booked
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full border" style={{ borderColor: "var(--border-color)" }} />
              Open
            </span>
          </div>
        </div>

        {/* Time-slot panel */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Friday · Apr 17
            </span>
            <span
              className="inline-flex items-center gap-1 text-[9.5px] font-bold px-1.5 py-0.5 rounded-full"
              style={{ background: "#22C55E14", color: "#22C55E" }}
            >
              3 booked
            </span>
          </div>
          <ul className="space-y-1.5 sm:space-y-2">
            {slots.map((s) => (
              <li
                key={s.time}
                className="rounded-[var(--radius-xs)] border p-2 flex items-center gap-2"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border-color)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <div className="flex flex-col items-center shrink-0 min-w-[36px]">
                  <div className="text-[9.5px] font-semibold" style={{ color: "var(--muted)" }}>
                    {s.time.split(" ")[1]}
                  </div>
                  <div className="text-[11px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                    {s.time.split(" ")[0]}
                  </div>
                </div>
                <div
                  className="w-[1px] h-8 shrink-0"
                  style={{ background: "var(--border-color)" }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[7.5px] font-bold shrink-0"
                      style={{ background: `${s.color}22`, color: s.color }}
                    >
                      {s.initials}
                    </div>
                    <div className="text-[10.5px] font-bold truncate" style={{ color: "var(--ink)" }}>
                      {s.name}
                    </div>
                  </div>
                  <div className="text-[9px] truncate" style={{ color: "var(--muted)" }}>
                    {s.service} · {s.duration}
                  </div>
                </div>
                <Check className="w-3 h-3 shrink-0" style={{ color: "#22C55E" }} strokeWidth={3} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
