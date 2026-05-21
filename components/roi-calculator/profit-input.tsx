"use client"

import { useId } from "react"
import { Slider } from "@/components/ui/slider"
import { PROFIT_MAX, PROFIT_MIN, PROFIT_STEP } from "@/lib/roi-data"

interface ProfitInputProps {
  value: number
  onChange: (value: number) => void
}

function clamp(n: number) {
  if (Number.isNaN(n)) return PROFIT_MIN
  return Math.min(PROFIT_MAX, Math.max(PROFIT_MIN, n))
}

export function ProfitInput({ value, onChange }: ProfitInputProps) {
  const inputId = useId()

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold text-white"
          style={{ background: "var(--accent)" }}
        >
          2
        </span>
        <h3
          className="text-[16px] sm:text-[17px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          Your average profit per job
        </h3>
      </div>

      <div
        className="rounded-[var(--radius-xl)] p-5 sm:p-7"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
        }}
      >
        <label
          htmlFor={inputId}
          className="text-[11px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          Profit per job
        </label>

        <div className="mt-2 flex items-baseline gap-2">
          <span
            className="text-[36px] sm:text-[42px] font-bold leading-none tracking-[-0.025em]"
            style={{ color: "var(--accent)" }}
          >
            $
          </span>
          <input
            id={inputId}
            type="number"
            inputMode="numeric"
            min={PROFIT_MIN}
            max={PROFIT_MAX}
            step={PROFIT_STEP}
            value={value}
            onChange={(e) => onChange(clamp(parseInt(e.target.value || "0", 10)))}
            className="bg-transparent outline-none font-bold leading-none tracking-[-0.025em] tabular-nums w-[180px] sm:w-[220px]"
            style={{
              color: "var(--ink)",
              fontSize: "42px",
              borderBottom: "2px solid transparent",
            }}
            aria-label="Profit per job in dollars"
          />
          <span
            className="text-[14px] sm:text-[15px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            / job
          </span>
        </div>

        <div className="mt-6">
          <Slider
            min={PROFIT_MIN}
            max={PROFIT_MAX}
            step={PROFIT_STEP}
            value={[value]}
            onValueChange={(values) => onChange(clamp(values[0] ?? PROFIT_MIN))}
            aria-label="Profit per job"
          />
          <div className="mt-2 flex items-center justify-between text-[11.5px] font-semibold tabular-nums" style={{ color: "var(--muted)" }}>
            <span>${PROFIT_MIN}</span>
            <span>${PROFIT_MAX.toLocaleString()}</span>
          </div>
        </div>

        <p className="mt-4 text-[12.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          That&rsquo;s your <strong style={{ color: "var(--ink)" }}>net profit</strong> — what you keep after materials, labor, and overhead — not your invoice total.
        </p>
      </div>
    </div>
  )
}
