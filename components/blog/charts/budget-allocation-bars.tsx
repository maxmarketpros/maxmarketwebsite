"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// VERIFY: 6-month ramp shape for a new $5K/mo Irvine home-services account.
// Real-world drift will depend on the trade and Quality Score trajectory.
const DATA = [
  { month: "M1", lsa: 2500, search: 1500, pmax: 600, display: 400, note: "Learning phase" },
  { month: "M2", lsa: 2200, search: 1700, pmax: 700, display: 400, note: "First wins" },
  { month: "M3", lsa: 2000, search: 1850, pmax: 750, display: 400, note: "Tighten negatives" },
  { month: "M4", lsa: 1900, search: 2000, pmax: 700, display: 400, note: "Scale search" },
  { month: "M5", lsa: 1800, search: 2100, pmax: 700, display: 400, note: "Add remarketing" },
  { month: "M6", lsa: 1750, search: 2000, pmax: 750, display: 500, note: "Steady state" },
]

const SERIES = [
  { key: "lsa", label: "LSA", color: "#1677FF" },
  { key: "search", label: "Search", color: "#74D3FF" },
  { key: "pmax", label: "PMax", color: "#FFB400" },
  { key: "display", label: "YouTube / Display", color: "#4A5A75" },
] as const

function fmt(n: number) {
  return `$${n.toLocaleString()}`
}

export function BudgetAllocationBars() {
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
            New-account ramp · $5K / mo
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            How budget should shift over the first 6 months
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[12px]" style={{ color: "var(--muted)" }}>
          {SERIES.map((s) => (
            <span key={s.key} className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="h-[280px] sm:h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
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
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              cursor={{ fill: "rgba(22,119,255,0.06)" }}
              formatter={(v: number, name) => [fmt(v), name]}
              contentStyle={{
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                background: "var(--surface)",
                color: "var(--ink)",
              }}
            />
            <Legend wrapperStyle={{ display: "none" }} />
            {SERIES.map((s, i) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                stackId="a"
                fill={s.color}
                radius={i === SERIES.length - 1 ? [8, 8, 0, 0] : 0}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        LSA starts heavy because the badge stacks above paid Search. As Quality Score builds, Search takes the lead. Total spend stays flat — only the mix changes.
      </p>
    </div>
  )
}
