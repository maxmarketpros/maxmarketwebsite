import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Lane = {
  slug: string
  name: string
  short: string
  accent: string
  icons8Id: string
  pitch: string
  chips: string[]
}

const lanes: Lane[] = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    short: "Capture",
    accent: "#1677FF",
    icons8Id: "12144", // conversion funnel
    pitch:
      "Every call, text, form, and Facebook message into one unified auto-shop inbox — and a 5-second text-back on every missed call.",
    chips: ["Missed-call text-back", "Unified inbox", "Web forms"],
  },
  {
    slug: "ai-agents",
    name: "AI Chat & Voice",
    short: "Qualify",
    accent: "#8B5CF6",
    icons8Id: "59023", // Bot
    pitch:
      "A 24/7 AI agent that answers repair questions, qualifies the vehicle, and drops the appointment straight onto your calendar.",
    chips: ["24/7 receptionist", "Books appointments", "Qualifies leads"],
  },
  {
    slug: "calendar",
    name: "Calendar & Booking",
    short: "Book",
    accent: "#22C55E",
    icons8Id: "12776",
    pitch:
      "Customers book themselves online, pay a deposit, and get SMS reminders — no-shows down, booked bays up.",
    chips: ["Deposits on booking", "SMS reminders", "Google + Outlook sync"],
  },
  {
    slug: "analytics",
    name: "Analytics & Calls",
    short: "Measure",
    accent: "#0EA5E9",
    icons8Id: "SROvvC91x7DL",
    pitch:
      "Source-specific phone numbers + GA4 + Looker dashboards so you know exactly which channel filled which bay this week.",
    chips: ["Dynamic call tracking", "GA4 attribution", "Weekly reports"],
  },
  {
    slug: "email-marketing",
    name: "Email & SMS",
    short: "Re-engage",
    accent: "#EC4899",
    icons8Id: "71474",
    pitch:
      "Service reminders, seasonal promos, and win-back sequences that bring last year's customers back for this year's oil change or detail.",
    chips: ["Service reminders", "Seasonal promos", "Win-back flows"],
  },
]

const alsoHelpful = [
  { slug: "payments",        label: "Payments",        note: "Deposits + text-to-pay invoicing." },
  { slug: "document-signing", label: "Document Signing", note: "Rental agreements signed in 90 seconds." },
  { slug: "qr-codes",        label: "QR Codes",        note: "Trackable truck wraps and yard signs." },
  { slug: "task-management", label: "Workflows",       note: "Auto-route every new lead to a tech." },
]

export function AutoSolutions() {
  return (
    <section id="auto-solutions" aria-labelledby="auto-solutions-heading" className="relative scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[460px] h-[460px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Operations stack"
          heading={
            <span id="auto-solutions-heading">
              Your shop's{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">operational OS.</span>
              </span>
            </span>
          }
          paragraph="Five tools that run as one loop — capture, qualify, book, measure, re-engage — so no lead, no review, and no follow-up ever leaks out."
        />

        {/* Five-lane panel */}
        <div
          className="mt-12 sm:mt-14 card-surface relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)", animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(22,119,255,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 50%, rgba(236,72,153,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {lanes.map((lane, idx) => (
              <LaneCard key={lane.slug} lane={lane} isLast={idx === lanes.length - 1} />
            ))}
          </div>
        </div>

        {/* Also helpful row */}
        <div
          className="mt-10 rounded-[var(--radius-lg)] px-6 py-5 sm:px-8 sm:py-6"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
              Also helpful for auto
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {alsoHelpful.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="group inline-flex items-baseline gap-2 text-[14px] transition-colors"
                >
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>
                    {item.label}
                  </span>
                  <span style={{ color: "var(--muted)" }}>— {item.note}</span>
                  <ArrowRight className="w-3.5 h-3.5 translate-y-[1px] transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} style={{ color: "var(--accent)" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Browse all 10 solutions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function LaneCard({ lane, isLast }: { lane: Lane; isLast: boolean }) {
  return (
    <Link
      href={`/solutions/${lane.slug}`}
      className="group relative block p-6 sm:p-7 transition-colors hover:bg-[rgba(22,119,255,0.02)]"
      style={{
        borderRight: isLast ? "none" : "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[80%] h-[50%]"
        style={{ background: `radial-gradient(ellipse 80% 100% at 25% 20%, ${lane.accent}14 0%, transparent 70%)` }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <img
            src={icons8Url(lane.icons8Id, 128)}
            alt=""
            width={52}
            height={52}
            className="w-[52px] h-[52px]"
            loading="lazy"
          />
          <span
            className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
            style={{ background: `${lane.accent}14`, color: lane.accent }}
          >
            {lane.short}
          </span>
        </div>

        <h3 className="mt-4 text-[19px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
          {lane.name}
        </h3>
        <p className="mt-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {lane.pitch}
        </p>

        <ul className="mt-4 space-y-1.5">
          {lane.chips.map((chip) => (
            <li key={chip} className="text-[12.5px] font-medium flex items-center gap-1.5" style={{ color: "var(--ink)" }}>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: lane.accent }}
              />
              {chip}
            </li>
          ))}
        </ul>

        <div
          className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold"
          style={{ color: lane.accent }}
        >
          Open {lane.name}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  )
}
