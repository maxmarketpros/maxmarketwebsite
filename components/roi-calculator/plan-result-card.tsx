"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import type { Plan } from "@/lib/plans-data"
import { getIcon } from "@/components/plans/hub/icon-map"
import { ANNUAL_DISCOUNT } from "@/lib/roi-data"

interface PlanResultCardProps {
  plan: Plan
  profitPerJob: number
  billing: "monthly" | "annual"
  /** Index used to stagger the fadeInUp animation across cards. */
  index?: number
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function PlanResultCard({ plan, profitPerJob, billing, index = 0 }: PlanResultCardProps) {
  const PlanIcon = getIcon(plan.iconName)
  const effectiveMonthlyCost =
    billing === "annual" ? plan.priceNumeric * (1 - ANNUAL_DISCOUNT) : plan.priceNumeric

  const breakEvenJobs = Math.max(1, Math.ceil(effectiveMonthlyCost / Math.max(1, profitPerJob)))
  const [lowJobs, highJobs] = plan.jobEstimateRange
  const avgJobs = (lowJobs + highJobs) / 2
  const netPerMonth = Math.round(avgJobs * profitPerJob - effectiveMonthlyCost)
  const monthsToPayback = Math.max(
    1,
    Math.ceil(effectiveMonthlyCost / Math.max(1, lowJobs * profitPerJob)),
  )

  const accent = plan.accent

  return (
    <div
      id={`plan-result-${plan.slug}`}
      className="relative flex flex-col overflow-hidden transition-all duration-300"
      style={{
        background: "var(--surface)",
        border: plan.recommended ? `2px solid ${accent}` : "1px solid var(--border-color)",
        borderRadius: "var(--radius-xl)",
        boxShadow: plan.recommended
          ? `0 4px 24px ${accent}33, 0 1px 3px var(--shadow-color)`
          : "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
        animation: `fadeInUp 0.5s ease-out ${index * 60}ms both`,
      }}
    >
      {plan.recommended && (
        <div
          className="flex items-center justify-center gap-1 py-2 text-[11.5px] font-bold uppercase tracking-[0.08em] text-white"
          style={{ background: accent }}
        >
          <Sparkles className="w-3.5 h-3.5" strokeWidth={2.6} />
          Most picked
        </div>
      )}

      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-16 w-[260px] h-[260px] rounded-full"
        style={{ background: `radial-gradient(circle, ${accent}1A 0%, transparent 65%)` }}
      />

      <div className="relative p-5 sm:p-6 flex flex-col flex-1">
        {/* Plan header */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
            style={{ background: `${accent}14`, color: accent, border: `1px solid ${accent}33` }}
          >
            <PlanIcon className="w-5 h-5" strokeWidth={2.2} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[17px] font-bold tracking-[-0.01em] leading-tight" style={{ color: "var(--ink)" }}>
              {plan.name}
            </h3>
            <p className="text-[12.5px] font-semibold tabular-nums" style={{ color: "var(--muted)" }}>
              {usd.format(effectiveMonthlyCost)}/mo
              {billing === "annual" && (
                <span className="ml-1 text-[11px] font-bold" style={{ color: "#16A34A" }}>
                  −20%
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Hero metric: break-even */}
        <div
          className="mt-5 rounded-[var(--radius-sm)] px-4 py-4"
          style={{
            background: `${accent}0D`,
            border: `1px solid ${accent}26`,
          }}
        >
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: accent }}
          >
            Break-even
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span
              className="text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em] tabular-nums"
              style={{ color: accent }}
            >
              {breakEvenJobs}
            </span>
            <span className="text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
              {breakEvenJobs === 1 ? "job" : "jobs"} / mo
            </span>
          </div>
          <p className="mt-1 text-[12px] leading-snug" style={{ color: "var(--muted)" }}>
            covers {usd.format(effectiveMonthlyCost)} at {usd.format(profitPerJob)}/job
          </p>
        </div>

        {/* Secondary stats */}
        <dl className="mt-4 space-y-2.5">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <span className="inline-flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.4} style={{ color: accent }} />
                Est. extra jobs / mo
              </span>
            </dt>
            <dd
              className="text-[14.5px] font-bold tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {lowJobs}–{highJobs}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-3">
            <dt className="text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              Net / mo (avg)
            </dt>
            <dd
              className="text-[14.5px] font-bold tabular-nums"
              style={{ color: netPerMonth > 0 ? "#16A34A" : "var(--ink)" }}
            >
              {netPerMonth > 0 ? "+" : ""}
              {usd.format(netPerMonth)}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-3">
            <dt className="text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              Payback (low-end)
            </dt>
            <dd
              className="text-[14.5px] font-bold tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {monthsToPayback === 1 ? "< 1 mo" : `~${monthsToPayback} mo`}
            </dd>
          </div>
        </dl>

        <div className="flex-1" />

        {/* CTA */}
        <Link
          href={`/plans/${plan.slug}`}
          className="mt-5 inline-flex items-center justify-center gap-1.5 w-full px-4 py-3 rounded-[var(--radius-sm)] font-semibold text-[14px] text-white transition-all duration-200 hover:translate-y-[-1px]"
          style={{
            background: `linear-gradient(180deg, ${accent}E6 0%, ${accent} 100%)`,
            boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 6px 18px ${accent}40`,
          }}
        >
          Choose {plan.name}
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  )
}
