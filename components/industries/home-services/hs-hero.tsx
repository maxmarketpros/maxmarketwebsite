import { Home, Shield, Sparkles, PhoneCall, Search, Calendar, CreditCard, Star } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const trustChips = [
  { Icon: Shield,    label: "24/7 AI voice answers" },
  { Icon: Sparkles,  label: "Text-to-pay invoicing" },
  { Icon: PhoneCall, label: "Dispatcher-ready" },
]

type TimelineStep = {
  time: string
  title: string
  sub: string
  Icon: typeof Search
  accent: string
  delay: string
}

const timeline: TimelineStep[] = [
  {
    time: "11:47 PM",
    title: "\u201Cemergency locksmith near me\u201D",
    sub: "Homeowner locked out. Panicked thumb scroll.",
    Icon: Search,
    accent: "#F59E0B",
    delay: "0.20s",
  },
  {
    time: "11:48 PM",
    title: "AI voice answered \u00b7 qualified \u00b7 booked",
    sub: "Job placed on Miguel\u2019s route. Deposit captured.",
    Icon: PhoneCall,
    accent: "#14B8A6",
    delay: "0.38s",
  },
  {
    time: "11:51 PM",
    title: "Tech ETA texted \u00b7 28 min",
    sub: "Live pin. Two-way SMS. No phone tag.",
    Icon: Calendar,
    accent: "#1677FF",
    delay: "0.56s",
  },
  {
    time: "7:12 AM",
    title: "Invoice paid \u00b7 review auto-requested",
    sub: "Stripe text-to-pay. Google review landed at 7:41.",
    Icon: CreditCard,
    accent: "#22C55E",
    delay: "0.74s",
  },
]

export function HsHero() {
  return (
    <section aria-labelledby="hs-hero-heading" className="relative overflow-hidden">
      {/* Triple ambient aura stack */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[600px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <Home className="w-3.5 h-3.5" strokeWidth={2.4} />
              Home Services
            </Pill>

            <h1
              id="hs-hero-heading"
              className="mt-6 text-[42px] xs:text-[48px] sm:text-[58px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Home services marketing that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">books every call</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[540px]" style={{ color: "var(--muted)" }}>
              The full marketing stack for cleaners, pest control, pool &amp; lawn crews, appliance repair, garage-door pros, locksmiths, chimney sweeps, window washers, and handymen. We own the search, answer the call, and dispatch the truck &mdash; 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a home-services consult
              </PrimaryButton>
              <SecondaryButton asLink href="#hs-blueprint">
                See every service we cover
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustChips.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column &mdash; vertical call-feed card (light) */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.14s both" }}>
            <div
              className="relative mx-auto max-w-[460px] p-5 sm:p-6 overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                background: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)",
                boxShadow: "0 1px 3px var(--shadow-color), 0 20px 40px -16px var(--shadow-color), 0 40px 80px -32px var(--shadow-color)",
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Soft accent wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-12 w-[240px] h-[240px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 65%)" }}
              />

              {/* Top header strip */}
              <div className="relative flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#F59E0B", boxShadow: "0 0 10px rgba(245,158,11,0.5)", animation: "subtlePulse 2.2s ease-in-out infinite" }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
                    After-hours feed
                  </span>
                </div>
                <span className="text-[11px] font-semibold tabular-nums" style={{ color: "var(--muted)" }}>
                  Tue &middot; Night shift
                </span>
              </div>

              {/* Steps */}
              <ol className="relative space-y-3">
                {/* Vertical rail */}
                <div
                  aria-hidden
                  className="absolute left-[18px] top-2 bottom-2 w-[2px] rounded-full"
                  style={{ background: "linear-gradient(180deg, rgba(245,158,11,0.55) 0%, rgba(20,184,166,0.55) 35%, rgba(22,119,255,0.55) 65%, rgba(34,197,94,0.55) 100%)" }}
                />

                {timeline.map(({ time, title, sub, Icon, accent, delay }) => (
                  <li
                    key={time}
                    className="relative pl-11"
                    style={{ animation: `fadeInUp 0.7s ease-out ${delay} both` }}
                  >
                    {/* Node */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: `${accent}18`,
                        boxShadow: `0 0 0 3px #FFFFFF, 0 0 0 4px ${accent}4D, 0 4px 12px ${accent}33`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: accent }} strokeWidth={2.5} />
                    </span>

                    {/* Card */}
                    <div
                      className="rounded-[14px] px-3.5 py-2.5"
                      style={{
                        background: "var(--surface)",
                        border: `1px solid ${accent}22`,
                        boxShadow: `0 1px 2px rgba(17,35,68,0.04), 0 4px 12px ${accent}14`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: accent }}>
                          {time}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                          Auto-logged
                        </span>
                      </div>
                      <div className="mt-1 text-[14px] font-semibold leading-[1.3]" style={{ color: "var(--ink)" }}>
                        {title}
                      </div>
                      <div className="mt-0.5 text-[12.5px] leading-[1.45]" style={{ color: "var(--muted)" }}>
                        {sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Footer summary */}
              <div
                className="relative mt-4 pt-3 flex items-center justify-between text-[12px] font-medium"
                style={{ borderTop: "1px solid var(--border-color)", color: "var(--muted)" }}
              >
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" style={{ color: "#F59E0B", fill: "#F59E0B" }} strokeWidth={2} />
                  <span style={{ color: "var(--ink)" }}>5-star review by 7:41 AM</span>
                </span>
                <span className="font-semibold" style={{ color: "#15803D" }}>+1 booked job</span>
              </div>
            </div>

            {/* Caption below */}
            <div className="mt-3 text-center text-[12.5px] font-medium" style={{ color: "var(--muted)" }}>
              One night. Four touchpoints. Zero staff awake.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
