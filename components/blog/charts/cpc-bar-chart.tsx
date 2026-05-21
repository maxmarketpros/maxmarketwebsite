"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts"

// VERIFY: median CPCs by trade in the Irvine / OC Google Ads auction, exact-match
// commercial-intent terms, May 2026 snapshot. Pull fresh from Google Ads Keyword
// Planner before going to print.
const DATA = [
  { trade: "Garage Door Repair", cpc: 36.8, color: "#1677FF" },
  { trade: "HVAC", cpc: 31.5, color: "#1677FF" },
  { trade: "Plumber", cpc: 27.9, color: "#1677FF" },
  { trade: "Roofer", cpc: 24.6, color: "#1677FF" },
  { trade: "Electrician", cpc: 21.4, color: "#1677FF" },
  { trade: "Locksmith", cpc: 19.2, color: "#1677FF" },
  { trade: "Pool Service", cpc: 14.3, color: "#1677FF" },
  { trade: "Pest Control", cpc: 12.7, color: "#1677FF" },
  { trade: "Concrete / Foundation", cpc: 9.4, color: "#1677FF" },
]

export function CpcBarChart() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="mb-5">
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--accent)" }}
        >
          Irvine / Orange County · median CPC
        </div>
        <h3
          className="text-[18px] sm:text-[20px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          What one click costs by trade
        </h3>
      </div>

      <div className="h-[380px] sm:h-[460px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={DATA}
            layout="vertical"
            margin={{ top: 8, right: 56, left: 0, bottom: 8 }}
          >
            <CartesianGrid horizontal={false} stroke="var(--border-color)" />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="category"
              dataKey="trade"
              width={160}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <Bar dataKey="cpc" radius={[0, 8, 8, 0]} barSize={20}>
              {DATA.map((d, i) => (
                <Cell
                  key={i}
                  fill={
                    d.cpc >= 25
                      ? "#E53E3E"
                      : d.cpc >= 18
                      ? "#FFB400"
                      : "#1677FF"
                  }
                />
              ))}
              <LabelList
                dataKey="cpc"
                position="right"
                formatter={(v: number) => `$${v.toFixed(2)}`}
                style={{
                  fill: "var(--ink)",
                  fontWeight: 700,
                  fontSize: 12,
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        <span style={{ color: "#E53E3E", fontWeight: 700 }}>Red</span> = high-pressure trades where slow landing pages bleed budget fastest. Pair these with LSA before pure Search.
      </p>
    </div>
  )
}
