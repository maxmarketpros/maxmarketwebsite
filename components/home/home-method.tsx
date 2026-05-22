"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { MethodDial } from "@/components/about/practices/method-dial"

type Step = {
  key: string
  label: string
  accent: string
  title: string
  description: string
  linkLabel: string
}

const STEPS: Step[] = [
  {
    key: "audit",
    label: "Audit",
    accent: "#1677FF",
    title: "We start by finding the leaks",
    description:
      "Full visibility audit — Lighthouse, GBP, citations, ad accounts, and CRM hygiene — so we know exactly where revenue is leaking.",
    linkLabel: "How we audit",
  },
  {
    key: "strategy",
    label: "Strategy",
    accent: "#74D3FF",
    title: "Then we build the playbook",
    description:
      "City-by-city keyword map, ad budget split, and content calendar tied to your real margins and seasonality.",
    linkLabel: "How we plan strategy",
  },
  {
    key: "execute",
    label: "Execute",
    accent: "#8B5CF6",
    title: "Our in-house Irvine team ships",
    description:
      "Designers, engineers, SEOs, and ad buyers all under one roof — no offshore handoffs, no agency-of-agencies markup.",
    linkLabel: "How we execute",
  },
  {
    key: "optimize",
    label: "Optimize",
    accent: "#22C55E",
    title: "Then we tune every month",
    description:
      "Monthly cohort reports, A/B tests on the highest-traffic pages, and ad-spend rebalancing based on booked-job ROI.",
    linkLabel: "How we optimize",
  },
]

export function HomeMethod() {
  // Sync-highlight: rotate the active step every 3.5s
  const [activeIdx, setActiveIdx] = useState(0)
  const userOverride = useRef(false)

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const tick = setInterval(() => {
      if (userOverride.current) return
      setActiveIdx((i) => (i + 1) % STEPS.length)
    }, 3500)
    return () => clearInterval(tick)
  }, [])

  const handlePick = (i: number) => {
    userOverride.current = true
    setActiveIdx(i)
  }

  return (
    <section
      aria-labelledby="method-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How we work"
          heading={
            <span id="method-heading">
              How Max Market Pros{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">works</span>
              </span>
            </span>
          }
          paragraph="A four-stage loop, repeated every month. The dial spins because the work never stops — audit, plan, execute, optimize, then back to the top."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Method dial */}
          <div className="flex justify-center">
            <MethodDial />
          </div>

          {/* Step cards */}
          <ol className="space-y-3">
            {STEPS.map((s, i) => {
              const on = i === activeIdx
              return (
                <li key={s.key}>
                  <button
                    onClick={() => handlePick(i)}
                    aria-pressed={on}
                    className="w-full text-left relative rounded-[var(--radius-md)] border p-4 sm:p-5 transition-all"
                    style={
                      on
                        ? {
                            background: `${s.accent}0F`,
                            borderColor: `${s.accent}55`,
                            boxShadow: `0 4px 18px ${s.accent}26`,
                          }
                        : {
                            background: "var(--surface)",
                            borderColor: "var(--border-color)",
                          }
                    }
                  >
                    {on && (
                      <span
                        aria-hidden
                        className="absolute top-0 bottom-0 left-0 w-1 rounded-l-[var(--radius-md)]"
                        style={{ background: s.accent }}
                      />
                    )}

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <span
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] tabular-nums transition-all"
                          style={{
                            background: on ? s.accent : "var(--bg)",
                            color: on ? "#fff" : "var(--muted)",
                            boxShadow: on ? `0 4px 14px ${s.accent}55` : "none",
                          }}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: on ? s.accent : "var(--muted)" }}
                        >
                          {s.label}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-[16px] sm:text-[18px] font-bold leading-tight tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="mt-1.5 text-[13.5px] leading-[1.5]"
                          style={{ color: "var(--muted)" }}
                        >
                          {s.description}
                        </p>
                        <Link
                          href="/about/practices"
                          className="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-semibold group/link"
                          style={{ color: s.accent }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {s.linkLabel}
                          <ArrowRight
                            className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                            strokeWidth={2.5}
                          />
                        </Link>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/about/practices"
            className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            See our full process
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
