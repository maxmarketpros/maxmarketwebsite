"use client"

import { Minus, Plus } from "lucide-react"

interface QuantityStepperProps {
  value: number
  min?: number
  max?: number
  onChange: (next: number) => void
  accent?: string
  unitLabel?: string
}

export function QuantityStepper({
  value,
  min = 0,
  max = 20,
  onChange,
  accent = "#1677FF",
  unitLabel,
}: QuantityStepperProps) {
  const dec = () => onChange(Math.max(min, value - 1))
  const inc = () => onChange(Math.min(max, value + 1))

  const tone = accent

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full p-1"
      style={{
        background: value > 0 ? `${tone}10` : "var(--bg)",
        border: `1px solid ${value > 0 ? `${tone}33` : "var(--border-color)"}`,
      }}
    >
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "var(--surface)",
          color: tone,
          border: `1px solid ${tone}33`,
        }}
      >
        <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
      </button>
      <div className="min-w-[44px] text-center">
        <span className="text-[14px] font-bold tabular-nums" style={{ color: "var(--ink)" }}>
          {value}
        </span>
        {unitLabel && (
          <span className="ml-1 text-[11px]" style={{ color: "var(--muted)" }}>
            {unitLabel}
            {value === 1 ? "" : "s"}
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: tone,
          color: "#fff",
          boxShadow: `0 2px 8px ${tone}40`,
        }}
      >
        <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
      </button>
    </div>
  )
}
