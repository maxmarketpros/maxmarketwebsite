"use client"

import { useState } from "react"
import { plans } from "@/lib/plans-data"
import {
  DEFAULT_PROFIT,
  industryPresets,
  type IndustryKey,
} from "@/lib/roi-data"
import { IndustryPresets } from "./industry-presets"
import { ProfitInput } from "./profit-input"
import { PlanResultCard } from "./plan-result-card"
import { HowWeEstimated } from "./how-we-estimated"

const PLAN_ORDER: Array<typeof plans[number]["slug"]> = [
  "startermark",
  "localmark",
  "servicepro",
  "signature",
]

const orderedPlans = PLAN_ORDER.map((slug) => plans.find((p) => p.slug === slug)!).filter(Boolean)

export function RoiCalculator() {
  const [industry, setIndustry] = useState<IndustryKey>("custom")
  const [profitPerJob, setProfitPerJob] = useState<number>(DEFAULT_PROFIT)
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  const handleIndustryChange = (key: IndustryKey) => {
    setIndustry(key)
    const preset = industryPresets.find((p) => p.key === key)
    if (preset) setProfitPerJob(preset.defaultProfit)
  }

  const handleProfitChange = (value: number) => {
    setProfitPerJob(value)
    // If user manually changes profit, switch to custom unless it matches a preset
    const matching = industryPresets.find((p) => p.defaultProfit === value)
    if (!matching || matching.key === "custom") {
      setIndustry("custom")
    } else if (matching.key !== industry) {
      // Only flip to custom if user is moving off an active preset
      if (industry !== "custom") setIndustry("custom")
    }
  }

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="relative scroll-mt-24"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[-6%] w-[480px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-6%] w-[480px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container relative z-10 pb-16 sm:pb-20 lg:pb-24">
        <h2 id="calculator-heading" className="sr-only">
          ROI calculator
        </h2>

        {/* Inputs panel */}
        <div
          className="rounded-[var(--radius-xl)] p-5 sm:p-7 lg:p-8"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
          }}
        >
          {/* Step 1: Industry */}
          <IndustryPresets selected={industry} onSelect={handleIndustryChange} />

          <div className="my-7 h-px" style={{ background: "var(--border-color)" }} />

          {/* Step 2: Profit */}
          <ProfitInput value={profitPerJob} onChange={handleProfitChange} />

          <div className="my-7 h-px" style={{ background: "var(--border-color)" }} />

          {/* Step 3: Billing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold text-white"
                style={{ background: "var(--accent)" }}
              >
                3
              </span>
              <h3
                className="text-[16px] sm:text-[17px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                Billing cadence
              </h3>
            </div>

            <div
              role="radiogroup"
              aria-label="Billing cadence"
              className="inline-flex p-1 rounded-full"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <button
                type="button"
                role="radio"
                aria-checked={billing === "monthly"}
                onClick={() => setBilling("monthly")}
                className="px-5 py-2 rounded-full text-[13.5px] font-bold transition-all duration-200 cursor-pointer"
                style={{
                  background:
                    billing === "monthly"
                      ? "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)"
                      : "transparent",
                  color: billing === "monthly" ? "#fff" : "var(--ink)",
                  boxShadow:
                    billing === "monthly" ? "0 4px 12px rgba(22,119,255,0.35)" : "none",
                }}
              >
                Monthly
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={billing === "annual"}
                onClick={() => setBilling("annual")}
                className="px-5 py-2 rounded-full text-[13.5px] font-bold transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5"
                style={{
                  background:
                    billing === "annual"
                      ? "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)"
                      : "transparent",
                  color: billing === "annual" ? "#fff" : "var(--ink)",
                  boxShadow:
                    billing === "annual" ? "0 4px 12px rgba(22,119,255,0.35)" : "none",
                }}
              >
                Annual
                <span
                  className="text-[10.5px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: billing === "annual" ? "rgba(255,255,255,0.22)" : "#DCFCE7",
                    color: billing === "annual" ? "#fff" : "#16A34A",
                  }}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="mt-8 sm:mt-10">
          <div className="mb-5 flex items-baseline justify-between gap-3 flex-wrap">
            <h3
              className="text-[20px] sm:text-[24px] font-bold tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Your results
            </h3>
            <p className="text-[13px]" style={{ color: "var(--muted)" }}>
              Updates live as you change inputs above.
            </p>
          </div>

          <div
            key={`${profitPerJob}-${billing}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {orderedPlans.map((plan, i) => (
              <PlanResultCard
                key={plan.slug}
                plan={plan}
                profitPerJob={profitPerJob}
                billing={billing}
                index={i}
              />
            ))}
          </div>

          <HowWeEstimated />
        </div>
      </div>
    </section>
  )
}
