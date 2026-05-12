"use client"

import { getIcon } from "@/components/plans/hub/icon-map"
import {
  type PlanChoice,
  PLAN_ACCENT,
  PLAN_LABEL,
  PLAN_ICON,
} from "@/lib/a-la-carte-catalog"

const PLAN_ORDER: PlanChoice[] = ["none", "startermark", "localmark", "servicepro", "signature"]

const PLAN_PRICE: Record<PlanChoice, string> = {
  none: "Pay-as-you-go",
  startermark: "$199/mo",
  localmark: "$499/mo",
  servicepro: "$899/mo",
  signature: "$1,499/mo",
}

interface PlanPickerProps {
  value: PlanChoice
  onChange: (next: PlanChoice) => void
}

export function PlanPicker({ value, onChange }: PlanPickerProps) {
  return (
    <div
      className="rounded-[var(--radius-xl)] p-5 sm:p-6"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 4px 20px var(--shadow-color)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
        <h3
          className="text-[18px] sm:text-[19px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          Step 1 · Current or desired plan
        </h3>
        <p className="text-[13.5px]" style={{ color: "var(--muted)" }}>
          Pricing & availability adjust based on your plan.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Current or desired plan"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
      >
        {PLAN_ORDER.map((p) => {
          const Icon = getIcon(PLAN_ICON[p])
          const isActive = value === p
          const accent = PLAN_ACCENT[p]
          return (
            <button
              key={p}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(p)}
              className={`group relative flex flex-col items-start gap-1.5 px-3.5 py-3 rounded-[var(--radius-sm)] text-left transition-all cursor-pointer ${
                isActive ? "" : "hover:-translate-y-0.5"
              }`}
              style={{
                background: isActive ? `${accent}10` : "var(--bg)",
                border: `${isActive ? "2px" : "1px"} solid ${isActive ? accent : "var(--border-color)"}`,
                boxShadow: isActive ? `0 4px 14px ${accent}22` : "none",
              }}
            >
              <span
                className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                style={{
                  background: `${accent}14`,
                  color: accent,
                  border: `1px solid ${accent}33`,
                }}
              >
                <Icon className="w-4 h-4" strokeWidth={2.2} />
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[13.5px] font-bold leading-tight"
                  style={{ color: isActive ? accent : "var(--ink)" }}
                >
                  {PLAN_LABEL[p]}
                </span>
                <span className="text-[11.5px] font-medium" style={{ color: "var(--muted)" }}>
                  {PLAN_PRICE[p]}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
