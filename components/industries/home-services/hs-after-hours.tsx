import Link from "next/link"
import { ArrowRight, PhoneOff, VoicemailIcon, Clock, XCircle, PhoneCall, Calendar, CreditCard, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Row = { Icon: typeof PhoneOff; text: string }

const without: Row[] = [
  { Icon: PhoneOff,      text: "Ring rolls to a generic voicemail" },
  { Icon: VoicemailIcon, text: "Lead calls the next shop on the list" },
  { Icon: Clock,         text: "Invoice mailed next week \u00b7 maybe" },
  { Icon: XCircle,       text: "Zero follow-up on 'no answer' calls" },
]

const withUs: Row[] = [
  { Icon: PhoneCall,  text: "AI voice answers in under 2 rings" },
  { Icon: Calendar,   text: "Job placed directly on tech route" },
  { Icon: CreditCard, text: "Text-to-pay invoice fires on completion" },
  { Icon: Star,       text: "Review request auto-sends 2hr after job" },
]

export function HsAfterHours() {
  return (
    <section aria-labelledby="hs-after-hours-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="24/7 booking engine"
          heading={
            <>
              The hours your competitors sleep{" "}
              <span className="whitespace-nowrap">
                are <span className="accent-underline">yours to win</span>.
              </span>
            </>
          }
          paragraph={"Roughly 35% of all home-service calls ring after 6pm. Without a stack, they\u2019re missed. With ours, they\u2019re booked, dispatched, and paid \u2014 before your phone line opens."}
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 rounded-[var(--radius-xl)] overflow-hidden border"
          style={{
            borderColor: "var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 20px 40px -16px var(--shadow-color)",
          }}
        >
          {/* Without panel */}
          <div
            className="relative p-7 sm:p-10"
            style={{
              background: "linear-gradient(180deg, #F7FAFC 0%, #EDF2F7 100%)",
              borderRight: "1px solid var(--border-color)",
            }}
          >
            {/* Static grain */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #475569 0, #475569 1px, transparent 1px, transparent 6px)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#94A3B8" }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
                  Without the stack
                </span>
              </div>
              <h3
                className="mt-3 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.015em]"
                style={{ color: "#5B6B84" }}
              >
                Your after-hours pipeline,{" "}
                <span className="whitespace-nowrap">unattended.</span>
              </h3>

              <ul className="mt-6 space-y-3">
                {without.map(({ Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(219,228,240,0.8)",
                    }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#E2E8F0", color: "#94A3B8" }}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.2} />
                    </span>
                    <span
                      className="text-[14px] font-medium line-through decoration-[1.5px]"
                      style={{ color: "#8499B3", textDecorationColor: "#CBD5E1" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "#F1F5F9",
                  color: "#5B6B84",
                  border: "1px solid #DCE6F2",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#94A3B8" }} />
                ~35% of after-hours calls &mdash; never recovered
              </div>
            </div>
          </div>

          {/* With panel */}
          <div
            className="relative p-7 sm:p-10 overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #EBF4FF 0%, #F7FAFC 50%, #E6FCF5 100%)",
            }}
          >
            {/* Aura */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 w-[340px] h-[340px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(22,119,255,0.22) 0%, transparent 65%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-10 w-[280px] h-[280px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)" }}
            />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#1677FF", boxShadow: "0 0 12px rgba(22,119,255,0.7)", animation: "subtlePulse 2s ease-in-out infinite" }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
                  With Max Market Pros
                </span>
              </div>
              <h3
                className="mt-3 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.015em]"
                style={{ color: "var(--ink)" }}
              >
                Every call captured.{" "}
                <span className="whitespace-nowrap">Every job booked.</span>
              </h3>

              <ul className="mt-6 space-y-3">
                {withUs.map(({ Icon, text }, i) => {
                  const accents = ["#1677FF", "#14B8A6", "#22C55E", "#F59E0B"]
                  const accent = accents[i % accents.length]
                  return (
                    <li
                      key={text}
                      className="flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        border: `1px solid ${accent}22`,
                        boxShadow: `0 1px 2px rgba(17,35,68,0.04), 0 4px 14px ${accent}18`,
                      }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${accent}18`, color: accent, boxShadow: `inset 0 0 0 1px ${accent}33` }}
                      >
                        <Icon className="w-4 h-4" strokeWidth={2.4} />
                      </span>
                      <span className="text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
                        {text}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <div
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--surface)",
                  color: "var(--accent)",
                  border: "1px solid #BFDBFE",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
                24/7 capture &middot; zero missed revenue
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px]">
                <Link href="/solutions/ai-agents" className="group inline-flex items-center gap-1 font-semibold" style={{ color: "var(--accent)" }}>
                  AI voice &amp; chat agents
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
                <Link href="/solutions/calendar" className="group inline-flex items-center gap-1 font-semibold" style={{ color: "var(--accent)" }}>
                  Scheduling &amp; booking
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
                <Link href="/solutions/payments" className="group inline-flex items-center gap-1 font-semibold" style={{ color: "var(--accent)" }}>
                  Text-to-pay invoicing
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
