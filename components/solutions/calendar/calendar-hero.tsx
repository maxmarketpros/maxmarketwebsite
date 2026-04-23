"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Check, ArrowRight, Wrench, Globe } from "lucide-react"

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

type WeekDay = { day: string; date: number; booked?: boolean; selected?: boolean }

const weekDays: WeekDay[] = [
  { day: "Mon", date: 14 },
  { day: "Tue", date: 15, booked: true },
  { day: "Wed", date: 16, booked: true },
  { day: "Thu", date: 17, booked: true },
  { day: "Fri", date: 18, selected: true },
  { day: "Sat", date: 19 },
  { day: "Sun", date: 20 },
]

type SlotState = "open" | "taken" | "selected"
type TimeSlotData = { time: string; state: SlotState }
const timeSlots: TimeSlotData[] = [
  { time: "8:30 AM", state: "taken" },
  { time: "9:00 AM", state: "open" },
  { time: "10:30 AM", state: "selected" },
  { time: "11:15 AM", state: "taken" },
  { time: "1:00 PM", state: "open" },
  { time: "2:30 PM", state: "open" },
]

function BookingMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 65% at 80% 10%, rgba(22,119,255,0.12) 0%, transparent 70%)" }}
      />

      {/* Business header */}
      <div
        className="relative flex items-center gap-3 pb-4 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-11 h-11 rounded-[var(--radius-md)] flex items-center justify-center shrink-0"
          style={{
            background: "linear-gradient(135deg, #1677FF 0%, #3B9FFF 100%)",
            boxShadow: "0 2px 8px rgba(22,119,255,0.28)",
          }}
        >
          <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[14.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            ProForma HVAC
          </div>
          <div className="flex items-center gap-1 text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
            <Star
              className="w-3 h-3"
              style={{ color: "#F59E0B" }}
              fill="currentColor"
              strokeWidth={0}
            />
            <span className="font-semibold" style={{ color: "var(--ink)" }}>
              4.9
            </span>
            <span>·</span>
            <span>892 reviews</span>
          </div>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "#22C55E14", color: "#16A34A" }}
        >
          <Globe className="w-2.5 h-2.5" strokeWidth={2.75} />
          24/7 Booking
        </span>
      </div>

      {/* Step + week range */}
      <div className="relative mt-4 flex items-end justify-between">
        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)" }}
          >
            Step 2 of 3 · Pick a date
          </div>
          <div className="mt-1 text-[14.5px] font-bold" style={{ color: "var(--ink)" }}>
            April 14 – 20, 2026
          </div>
        </div>
        <div
          className="text-[10px] font-semibold"
          style={{ color: "var(--muted)" }}
        >
          12 slots open
        </div>
      </div>

      {/* Week selector */}
      <div className="relative mt-3 grid grid-cols-7 gap-1.5">
        {weekDays.map((d) => (
          <DayChip key={d.date} {...d} />
        ))}
      </div>

      {/* Time slots */}
      <div className="relative mt-5">
        <div className="flex items-center justify-between mb-2">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)" }}
          >
            Fri, Apr 18 · Available times
          </div>
          <div className="text-[10px] font-semibold" style={{ color: "var(--muted)" }}>
            4 left
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {timeSlots.map((t) => (
            <TimeSlotChip key={t.time} time={t.time} state={t.state} />
          ))}
        </div>
      </div>

      {/* Summary + confirm */}
      <div
        className="relative mt-5 pt-4 border-t"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div
              className="text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Your appointment
            </div>
            <div
              className="mt-0.5 text-[13px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              AC Tune-up · 60 min
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>
              Fri, Apr 18 · 10:30 AM
            </div>
          </div>
          <div className="text-right shrink-0">
            <div
              className="text-[22px] font-bold leading-none tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              $180
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
              $50 deposit
            </div>
          </div>
        </div>
        <div
          className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-[var(--radius-sm)] text-[13px] font-bold text-white"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
            boxShadow: "0 4px 12px rgba(22,119,255,0.3)",
          }}
        >
          Confirm booking
          <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
        </div>
      </div>
    </div>
  )
}

function DayChip({ day, date, booked, selected }: WeekDay) {
  const baseStyle: React.CSSProperties = selected
    ? {
        background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
        color: "#fff",
        border: "1px solid var(--accent)",
        boxShadow: "0 4px 12px rgba(22,119,255,0.28)",
      }
    : {
        background: "var(--surface)",
        color: "var(--ink)",
        border: "1px solid var(--border-color)",
        opacity: booked ? 0.55 : 1,
      }

  return (
    <div
      className="rounded-[var(--radius-sm)] flex flex-col items-center justify-center py-2"
      style={baseStyle}
    >
      <div className="text-[9px] font-semibold uppercase tracking-[0.04em]">
        {day}
      </div>
      <div className="mt-0.5 text-[15px] font-bold leading-none tracking-[-0.02em]">
        {date}
      </div>
      <div className="mt-1 h-1">
        {booked && !selected && (
          <span
            className="block w-1 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        )}
        {selected && (
          <span
            className="block w-1 h-1 rounded-full"
            style={{ background: "#fff" }}
          />
        )}
      </div>
    </div>
  )
}

function TimeSlotChip({ time, state }: { time: string; state: SlotState }) {
  const baseStyle: React.CSSProperties =
    state === "selected"
      ? {
          background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
          color: "#fff",
          border: "1px solid var(--accent)",
          boxShadow: "0 2px 8px rgba(22,119,255,0.28)",
        }
      : state === "taken"
      ? {
          background: "var(--bg)",
          color: "var(--muted)",
          border: "1px dashed var(--border-color)",
          textDecoration: "line-through",
        }
      : {
          background: "var(--surface)",
          color: "var(--ink)",
          border: "1px solid var(--border-color)",
        }

  return (
    <div
      className="rounded-[var(--radius-xs)] flex items-center justify-center gap-1 py-2 text-[11.5px] font-bold"
      style={baseStyle}
    >
      {state === "selected" && <Check className="w-3 h-3" strokeWidth={3} />}
      {time}
    </div>
  )
}
