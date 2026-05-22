"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { PrimaryButton } from "@/components/ui/primary-button"
import type { Plan } from "@/lib/plans-data"
import { getIcon } from "./icon-map"

interface PlanCardProps {
  plan: Plan
  className?: string
  isAnnual?: boolean
  annualDiscount?: number
}

const VISIBLE_FEATURES = 8

export function PlanCard({
  plan,
  className,
  isAnnual = false,
  annualDiscount = 0.2,
}: PlanCardProps) {
  const [expanded, setExpanded] = useState(false)
  const PlanIcon = getIcon(plan.iconName)
  const hasMore = plan.features.length > VISIBLE_FEATURES
  const visible = expanded ? plan.features : plan.features.slice(0, VISIBLE_FEATURES)
  const hiddenCount = plan.features.length - VISIBLE_FEATURES
  const displayPrice = isAnnual
    ? `$${Math.round(plan.priceNumeric * (1 - annualDiscount)).toLocaleString()}`
    : plan.price

  return (
    <div
      id={`plan-${plan.slug}`}
      className={cn(
        "relative flex flex-col overflow-hidden transition-all duration-300 scroll-mt-28",
        "rounded-[var(--radius-xl)]",
        plan.recommended ? "lg:scale-[1.03] z-10" : "",
        className,
      )}
      style={{
        background: "var(--surface)",
        border: plan.recommended
          ? "2px solid var(--accent)"
          : "1px solid var(--border-color)",
        boxShadow: plan.recommended
          ? "0 4px 24px rgba(22,119,255,0.18), 0 1px 3px var(--shadow-color)"
          : "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
      }}
    >
      {plan.recommended && (
        <div
          className="absolute top-0 left-0 right-0 text-center py-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-white"
          style={{ background: "var(--accent)" }}
        >
          Most Popular
        </div>
      )}

      <div className={cn("p-7 sm:p-8 flex-1 flex flex-col", plan.recommended ? "pt-12 sm:pt-14" : "")}>
        {/* Plan icon */}
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
          style={{ background: `${plan.accent}14`, color: plan.accent, border: `1px solid ${plan.accent}33` }}
        >
          <PlanIcon className="w-6 h-6" strokeWidth={2.2} />
        </div>

        {/* Name + tagline */}
        <h3 className="mt-5 text-[22px] font-bold tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
          {plan.name}
        </h3>
        <p className="mt-1 text-[14px]" style={{ color: "var(--muted)" }}>
          {plan.tagline}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-baseline gap-1">
          <span
            className="text-[44px] sm:text-[48px] font-bold leading-none tracking-[-0.025em]"
            style={{ color: "var(--ink)" }}
          >
            {displayPrice}
          </span>
          <span className="text-[16px] font-medium" style={{ color: "var(--muted)" }}>
            /mo
          </span>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <PrimaryButton asLink href={plan.ctaHref} className="w-full">
            {plan.ctaLabel}
          </PrimaryButton>
        </div>

        {/* Divider */}
        <div className="my-6 h-px" style={{ background: "var(--border-color)" }} />

        <p
          className="text-[10.5px] font-semibold uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--muted)" }}
        >
          What&rsquo;s included
        </p>

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {visible.map((feature, i) => {
            const Icon = getIcon(feature.icon)
            return (
              <li key={`${plan.slug}-${i}`} className="flex items-start gap-3 text-[14.5px] leading-[1.45]" style={{ color: "var(--ink)" }}>
                <span
                  className="mt-0.5 w-6 h-6 rounded-[8px] flex items-center justify-center shrink-0"
                  style={{ background: `${plan.accent}14`, color: plan.accent }}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
                <span className="flex-1">{feature.label}</span>
              </li>
            )
          })}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-5 inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: plan.accent }}
            aria-expanded={expanded}
          >
            {expanded ? "Show fewer" : `Show all ${plan.features.length} features (+${hiddenCount} more)`}
            <ChevronDown
              className="w-4 h-4 transition-transform"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
              strokeWidth={2.4}
            />
          </button>
        )}
      </div>
    </div>
  )
}
