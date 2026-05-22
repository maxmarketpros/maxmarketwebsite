import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight, Calendar as CalIcon, Check, MessageSquare } from "lucide-react"

export function CalendarFlow() {
  return (
    <section aria-labelledby="calendar-flow-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The Booking Experience"
          heading={
            <span id="calendar-flow-heading">
              Frictionless for your clients.{" "}
              <span className="accent-underline">
                Zero work for <span className="whitespace-nowrap">you.</span>
              </span>
            </span>
          }
          paragraph="Three taps from discovery to booked — with reminders and prep info auto-handled in the background."
        />

        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Step 1 — Browse availability */}
          <StepCard
            step={1}
            color="#1677FF"
            title="Browse availability"
            caption="Client lands on your booking widget, sees real-time open slots, and picks the service they need."
          >
            <AvailabilityMiniMockup />
          </StepCard>

          {/* Step 2 — Pick a slot */}
          <StepCard
            step={2}
            color="#22C55E"
            title="Pick a slot + pay"
            caption="They pick the time, fill a short intake form, and drop a deposit — all in one flow that takes under 90 seconds."
          >
            <SlotPickerMiniMockup />
          </StepCard>

          {/* Step 3 — Confirmation */}
          <StepCard
            step={3}
            color="#F59E0B"
            title="Confirmation + reminders"
            caption="Instant confirmation text plus smart reminders 24 hours and 2 hours before. No-shows drop, show-rates climb."
          >
            <ConfirmationMiniMockup />
          </StepCard>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/solutions/ai-agents"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold group"
            style={{ color: "var(--accent)" }}
          >
            Pair with an AI agent that books calls too
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  color,
  title,
  caption,
  children,
}: {
  step: number
  color: string
  title: string
  caption: string
  children: React.ReactNode
}) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${color}10 0%, transparent 60%)` }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-bold"
            style={{ background: `${color}1A`, color }}
          >
            {step}
          </span>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.1em]"
            style={{ color }}
          >
            Step {step}
          </span>
        </div>

        <h3 className="mt-4 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
          {title}
        </h3>

        <p className="mt-2 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {caption}
        </p>

        <div className="mt-5">{children}</div>
      </div>
    </article>
  )
}

function AvailabilityMiniMockup() {
  const days = [
    { n: 15, avail: false, today: false },
    { n: 16, avail: true, today: false },
    { n: 17, avail: true, today: true },
    { n: 18, avail: false, today: false },
    { n: 19, avail: true, today: false },
    { n: 20, avail: true, today: false },
    { n: 21, avail: false, today: false },
  ]

  return (
    <div className="rounded-[var(--radius-md)] border p-3.5" style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] font-bold" style={{ color: "var(--ink)" }}>April 2026</span>
        <CalIcon className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} strokeWidth={2.25} />
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1.5">
        {["M", "T", "W", "T", "F", "S", "S"].map((l, i) => (
          <div key={`l-${i}`} className="text-center text-[9.5px] font-semibold" style={{ color: "var(--muted)" }}>
            {l}
          </div>
        ))}
        {days.map((d) => (
          <div
            key={d.n}
            className="aspect-square rounded flex items-center justify-center text-[11px] font-bold"
            style={{
              background: d.today ? "#1677FF" : d.avail ? "rgba(34,197,94,0.14)" : "transparent",
              color: d.today ? "#fff" : d.avail ? "#16A34A" : "var(--muted)",
              opacity: d.avail || d.today ? 1 : 0.45,
            }}
          >
            {d.n}
          </div>
        ))}
      </div>
    </div>
  )
}

function SlotPickerMiniMockup() {
  const slots = [
    { time: "9:00 AM", open: true },
    { time: "10:30 AM", open: true, selected: true },
    { time: "12:00 PM", open: false },
    { time: "2:00 PM", open: true },
  ]
  return (
    <div className="rounded-[var(--radius-md)] border p-3.5" style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}>
      <div className="text-[11.5px] font-bold mb-2.5" style={{ color: "var(--ink)" }}>
        Friday, April 17
      </div>
      <div className="space-y-1.5">
        {slots.map((s) => (
          <div
            key={s.time}
            className="flex items-center justify-between rounded-[var(--radius-xs)] px-2.5 py-1.5 text-[11px] font-semibold border"
            style={{
              background: s.selected ? "#1677FF" : s.open ? "var(--surface)" : "var(--bg)",
              borderColor: s.selected ? "#1677FF" : "var(--border-color)",
              color: s.selected ? "#fff" : s.open ? "var(--ink)" : "var(--muted)",
              opacity: s.open ? 1 : 0.55,
            }}
          >
            <span>{s.time}</span>
            {s.selected && <Check className="w-3 h-3" strokeWidth={3} />}
          </div>
        ))}
      </div>
    </div>
  )
}

function ConfirmationMiniMockup() {
  return (
    <div
      className="rounded-[var(--radius-md)] border p-3.5"
      style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
    >
      <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "#22C55E", color: "#fff" }}
        >
          <Check className="w-3 h-3" strokeWidth={3} />
        </div>
        <span className="text-[11.5px] font-bold" style={{ color: "var(--ink)" }}>
          Booking confirmed
        </span>
      </div>
      <div
        className="mt-2.5 rounded-[var(--radius-xs)] px-2.5 py-2"
        style={{
          background: "#1677FF14",
          border: "1px solid #1677FF33",
        }}
      >
        <div className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "#1677FF" }}>
          <MessageSquare className="w-3 h-3" strokeWidth={2.5} />
          Reminder · 24h before
        </div>
        <div className="mt-1 text-[10.5px] font-medium leading-tight" style={{ color: "var(--ink)" }}>
          Hey Alex! Reminder: your AC tune-up is tomorrow at 10:30 AM.
        </div>
      </div>
    </div>
  )
}
