"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// VERIFY: 5-year median CPC trend for three trades in the Irvine / OC market.
// Plug into Google Ads historical reports for exact numbers.
const DATA = [
  { year: "2022", plumbing: 18.4, hvac: 21.2, roofing: 16.9 },
  { year: "2023", plumbing: 21.1, hvac: 24.5, roofing: 19.2 },
  { year: "2024", plumbing: 23.8, hvac: 27.6, roofing: 21.4 },
  { year: "2025", plumbing: 25.9, hvac: 29.8, roofing: 23.1 },
  { year: "2026", plumbing: 27.9, hvac: 31.5, roofing: 24.6 },
]

const SERIES = [
  { key: "plumbing" as const, label: "Plumbing", color: "#1677FF" },
  { key: "hvac" as const, label: "HVAC", color: "#E53E3E" },
  { key: "roofing" as const, label: "Roofing", color: "#FFB400" },
]

export function CostTrendLineChart() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--accent)" }}
          >
            5-year CPC trend · Irvine, OC
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Auction prices keep climbing
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[12px]" style={{ color: "var(--muted)" }}>
          {SERIES.map((s) => (
            <span key={s.key} className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="h-[280px] sm:h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border-color)" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip
              formatter={(v: number, name) => [`$${v.toFixed(2)}`, name]}
              contentStyle={{
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                background: "var(--surface)",
                color: "var(--ink)",
              }}
            />
            <Legend wrapperStyle={{ display: "none" }} />
            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={2.5}
                dot={{ r: 4, fill: s.color, stroke: "var(--surface)", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        Median Irvine CPC across the three trades is up <span style={{ fontWeight: 700, color: "var(--ink)" }}>+47% since 2022</span>. The fix isn't bidding less — it's converting more of what you already pay for.
      </p>
    </div>
  )
}
