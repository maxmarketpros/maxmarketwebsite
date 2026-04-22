import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  CalendarClock,
  RefreshCw,
  Bell,
  FileText,
  CreditCard,
  Code2,
  Check,
} from "lucide-react"

type Feature = {
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
  flagship?: boolean
}

const features: Feature[] = [
  {
    iconId: "15685",
    pill: "Flagship · Most Popular",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.11)",
    LucideIcon: CalendarClock,
    title: "Round-Robin Scheduling",
    description:
      "Let clients book any available rep across your team without phone tag. Round-robin distribution spreads the load, weighted availability surfaces your top closers, and service-specific durations stop back-to-back bottlenecks.",
    deliverables: [
      "Round-robin rep assignment",
      "Weighted availability rules",
      "Service-specific durations",
      "Buffer time before & after",
      "Team-based scheduling",
    ],
    flagship: true,
  },
  {
    iconId: "60037",
    pill: "Sync",
    pillColor: "#EF4444",
    auraColor: "rgba(239,68,68,0.08)",
    LucideIcon: RefreshCw,
    title: "Google & Outlook Sync",
    description:
      "Two-way sync with Google Calendar, Outlook, iCloud, and Office 365 — so personal blocks, recurring events, and team availability stay perfectly aligned.",
    deliverables: [
      "Two-way calendar sync",
      "Multi-calendar support",
      "Time-zone intelligent",
      "Block personal events",
    ],
  },
  {
    iconId: "12920",
    pill: "Reduce No-Shows",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: Bell,
    title: "SMS + Email Reminders",
    description:
      "Automatic confirmation, reminder, and follow-up messages — so 9 out of 10 bookings actually show up.",
    deliverables: [
      "24h, 2h & custom reminders",
      "SMS + email combo",
      "Rescheduling links",
      "Post-appointment follow-up",
    ],
  },
  {
    iconId: "18944",
    pill: "Intake",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: FileText,
    title: "Custom Intake Forms",
    description:
      "Collect exactly what you need before the appointment — photos, property details, service preferences — so reps show up prepared.",
    deliverables: [
      "Service-specific fields",
      "Conditional questions",
      "File & photo uploads",
      "Auto-attach to contact",
    ],
  },
  {
    iconId: "13013",
    pill: "Monetize",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: CreditCard,
    title: "Deposit on Booking",
    description:
      "Require a deposit or full payment at the moment of booking to filter tire-kickers and lock in commitment.",
    deliverables: [
      "Full or partial deposit",
      "No-show fee options",
      "Stripe-powered payments",
      "Auto-refund on cancel",
    ],
  },
  {
    iconId: "12782",
    pill: "Embed",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Code2,
    title: "Embed Anywhere Widget",
    description:
      "One script tag drops your booking widget into any website — Webflow, WordPress, Wix, Squarespace, or custom HTML.",
    deliverables: [
      "Single-script embed",
      "Mobile-optimized widget",
      "Direct booking links",
      "Service-specific pages",
    ],
  },
]

export function CalendarBento() {
  return (
    <section
      aria-labelledby="calendar-features-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Online Booking Features"
          heading={
            <span id="calendar-features-heading">
              Everything you need to get{" "}
              <span className="accent-underline">
                fully <span className="whitespace-nowrap">booked.</span>
              </span>
            </span>
          }
          paragraph="A complete online scheduling stack built for service businesses. Every feature is tuned to kill phone tag and reduce no-shows."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">
            Get a free booking setup
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { LucideIcon, flagship } = feature
  const spanClass = flagship ? "md:col-span-2 lg:col-span-2" : ""

  return (
    <article className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col`}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{ background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.auraColor} 0%, transparent 70%)` }}
      />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(feature.iconId, flagship ? 192 : 128)}
            alt=""
            width={flagship ? 68 : 52}
            height={flagship ? 68 : 52}
            loading="lazy"
            decoding="async"
            className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`}
          />
          <span
            className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{ background: `${feature.pillColor}1A`, color: feature.pillColor }}
          >
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {feature.pill}
          </span>
        </div>
        <h3
          className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`}
          style={{ color: "var(--ink)" }}
        >
          {feature.title}
        </h3>
        <p
          className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`}
          style={{ color: "var(--muted)" }}
        >
          {feature.description}
        </p>
        <ul className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}>
          {feature.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-[14px]" style={{ color: "var(--ink)" }}>
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
          style={{ borderColor: "var(--border-color)", color: "var(--accent)" }}
        >
          <span>See it in action</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}
