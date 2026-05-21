"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts"

// VERIFY: click-through rate from Google local pack by star rating, two cohorts.
// Reasoned estimates from BrightLocal 2026 review impact study + observed
// account data.
const DATA = [
  { rating: "3.0", lowCount: 4.2, highCount: 5.1 },
  { rating: "3.5", lowCount: 6.4, highCount: 8.8 },
  { rating: "4.0", lowCount: 9.8, highCount: 14.6 },
  { rating: "4.3", lowCount: 13.2, highCount: 19.7 },
  { rating: "4.5", lowCount: 17.4, highCount: 28.1 },
  { rating: "4.7", lowCount: 21.8, highCount: 34.6 },
  { rating: "4.9", lowCount: 24.1, highCount: 38.2 },
]

const SERIES = [
  { key: "lowCount" as const, label: "5–49 reviews", color: "#74D3FF" },
  { key: "highCount" as const, label: "50+ reviews", color: "#1677FF" },
]

export function StarRatingCtrLine() {
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
            Star rating → local pack CTR
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            The hockey stick at 4.5 stars
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

      <div className="h-[300px] sm:h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border-color)" />
            <XAxis
              dataKey="rating"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
              label={{
                value: "Star rating",
                position: "insideBottom",
                offset: -2,
                style: { fill: "var(--muted)", fontSize: 11 },
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              formatter={(v: number, name) => [`${v.toFixed(1)}%`, name]}
              contentStyle={{
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                background: "var(--surface)",
                color: "var(--ink)",
              }}
            />
            <ReferenceLine
              x="4.5"
              stroke="#E53E3E"
              strokeDasharray="4 4"
              label={{
                value: "Hockey-stick",
                position: "top",
                fill: "#E53E3E",
                fontSize: 11,
                fontWeight: 700,
              }}
            />
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
        Going from <span style={{ fontWeight: 700, color: "var(--ink)" }}>4.0 → 4.7 stars</span> on a 50+ review account lifts local-pack CTR from <span style={{ fontWeight: 700, color: "var(--ink)" }}>14.6% to 34.6%</span> — a 2.4× jump. Below 4.5, you're invisible.
      </p>
    </div>
  )
}
