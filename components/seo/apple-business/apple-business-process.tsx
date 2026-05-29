"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Reveal } from "@/components/ui/reveal"
import {
  BadgeCheck,
  LayoutGrid,
  Zap,
  Megaphone,
  BarChart3,
  Check,
} from "lucide-react"

type Step = {
  when: string
  short: string
  title: string
  body: string
  bullets: string[]
  Icon: typeof BadgeCheck
}

const steps: Step[] = [
  {
    when: "Week 1",
    short: "Claim",
    title: "Claim & verify your location",
    body: "We claim or re-claim your Apple Business location and pass verification — even if it migrated from old Apple Business Connect. You stay the owner; we handle the paperwork.",
    bullets: ["Ownership claim", "Identity verification", "Migration cleanup"],
    Icon: BadgeCheck,
  },
  {
    when: "Week 1–2",
    short: "Optimize",
    title: "Optimize the whole profile",
    body: "Every field filled, plus NAP reconciled across Google, Yelp, and Tripadvisor so Apple trusts your data over scraped sources.",
    bullets: ["Categories & attributes", "NAP consistency", "Photos + Look Around"],
    Icon: LayoutGrid,
  },
  {
    when: "Week 2",
    short: "Activate",
    title: "Showcases & one-tap Actions",
    body: "We publish your first Showcases and wire Book / Order / Reserve / Pay actions to the tools you already use — all UTM-tagged for GA4.",
    bullets: ["3–5 Showcases", "One-tap actions", "UTM tracking"],
    Icon: Zap,
  },
  {
    when: "Week 3+",
    short: "Launch",
    title: "Launch & tune Apple Maps Ads",
    body: "When ads go live in your market, we launch and tune campaigns to your cost-per-lead and defend the #1 sponsored spot.",
    bullets: ["Campaign setup", "Budget tuning", "Top-spot defense"],
    Icon: Megaphone,
  },
  {
    when: "Monthly",
    short: "Measure",
    title: "Insights & reporting",
    body: "A monthly plain-English report from Apple Business Location Insights — searches, views, direction taps, calls, and action conversions.",
    bullets: ["Location Insights", "Monthly report", "Clear next steps"],
    Icon: BarChart3,
  },
]

export function AppleBusinessProcess() {
  const [active, setActive] = useState(0)
  const userOverride = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      if (userOverride.current) return
      setActive((i) => (i + 1) % steps.length)
    }, 3600)
    return () => clearInterval(t)
  }, [])

  const pick = (i: number) => {
    userOverride.current = true
    setActive(i)
  }

  const fillPct = (active / (steps.length - 1)) * 100
  const step = steps[active]

  return (
    <section aria-labelledby="apple-business-process-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="How we run it"
          heading={
            <span id="apple-business-process-heading">
              From unclaimed to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">first on the map</span>
              </span>{" "}
              — done for you.
            </span>
          }
          paragraph="A transparent, fixed schedule so you always know what we're doing on your behalf and when. No dashboards to learn, no Apple paperwork to wrestle with."
        />

        <Reveal className="mt-14">
          {/* Rail with nodes */}
          <div className="relative">
            {/* track */}
            <div
              aria-hidden
              className="absolute top-[24px] left-[8%] right-[8%] h-[3px] rounded-full"
              style={{ background: "var(--border-color)" }}
            />
            {/* fill */}
            <div
              aria-hidden
              className="absolute top-[24px] left-[8%] h-[3px] rounded-full transition-all duration-500"
              style={{
                width: `calc((100% - 16%) * ${fillPct / 100})`,
                background: "linear-gradient(90deg, #74D3FF 0%, #1677FF 100%)",
              }}
            />

            <ol className="grid grid-cols-5 gap-1 sm:gap-2 relative">
              {steps.map((s, i) => {
                const on = i === active
                const done = i < active
                return (
                  <li key={s.short} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => pick(i)}
                      aria-pressed={on}
                      aria-label={`${s.short}: ${s.title}`}
                      className="w-[48px] h-[48px] rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer"
                      style={{
                        background:
                          on || done
                            ? "linear-gradient(180deg,#2B8AFF,#1677FF)"
                            : "var(--surface)",
                        color: on || done ? "#fff" : "var(--muted)",
                        border: "4px solid #fff",
                        boxShadow: on
                          ? "0 0 0 4px rgba(22,119,255,0.2), 0 6px 16px rgba(22,119,255,0.4)"
                          : "0 1px 4px var(--shadow-color)",
                        transform: on ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {done ? (
                        <Check className="w-5 h-5" strokeWidth={3} />
                      ) : (
                        <s.Icon className="w-5 h-5" strokeWidth={2.25} />
                      )}
                    </button>
                    <span
                      className="mt-2 text-[10.5px] sm:text-[12px] font-bold uppercase tracking-[0.08em] text-center transition-colors"
                      style={{ color: on ? "var(--accent)" : "var(--muted)" }}
                    >
                      {s.short}
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Detail panel */}
          <div
            key={active}
            className="mt-8 card-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-center"
            style={{ borderRadius: "var(--radius-xl)", animation: "fadeInUp 0.45s var(--ease-spring) both" }}
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center text-white shrink-0"
                  style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
                >
                  <step.Icon className="w-[22px] h-[22px]" strokeWidth={2.25} />
                </span>
                <span
                  className="text-[12px] font-extrabold uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent)" }}
                >
                  {step.when}
                </span>
              </div>
              <h3 className="mt-4 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                {step.body}
              </p>
            </div>

            <ul className="space-y-2.5">
              {step.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 px-4 py-3 rounded-[14px]"
                  style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}>
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-semibold" style={{ color: "var(--ink)" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Start with a free audit
          </PrimaryButton>
          <SecondaryButton asLink href="#apple-business-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
