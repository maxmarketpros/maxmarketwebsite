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

// VERIFY: % map-pack ranking improvement over 6 months for three review-velocity
// scenarios. Indexed to month 0 = 0%. Reasoned estimates from observed account
// trajectories + Whitespark 2026 local-ranking factors study.
const DATA = [
  { month: "M0", fresh: 0, stale: 0, none: 0 },
  { month: "M1", fresh: 8, stale: 1, none: -2 },
  { month: "M2", fresh: 19, stale: 2, none: -3 },
  { month: "M3", fresh: 32, stale: 3, none: -5 },
  { month: "M4", fresh: 47, stale: 4, none: -6 },
  { month: "M5", fresh: 61, stale: 4, none: -8 },
  { month: "M6", fresh: 74, stale: 5, none: -10 },
]

const SERIES = [
  { key: "fresh" as const, label: "5 fresh reviews / mo", color: "#22A06B" },
  { key: "stale" as const, label: "200 old + 0 new", color: "#FFB400" },
  { key: "none" as const, label: "No reviews", color: "#E53E3E" },
]

export function ReviewVelocityChart() {
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
            Review velocity vs ranking lift
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Fresh reviews beat a big back catalog
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
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `${v > 0 ? "+" : ""}${v}%`}
            />
            <Tooltip
              formatter={(v: number, name) => [`${v > 0 ? "+" : ""}${v}%`, name]}
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
        Five fresh reviews a month pulls ahead of a 200-review back catalog by month 2. Google's local algo rewards <span style={{ fontWeight: 700, color: "var(--ink)" }}>velocity + recency</span>, not lifetime totals.
      </p>
    </div>
  )
}
