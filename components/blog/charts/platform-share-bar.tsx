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

// VERIFY: share of "review research" searches by platform for U.S. service
// businesses. Reasoned estimates synthesized from BrightLocal 2026 Local
// Consumer Review Survey + observed referral-traffic patterns.
const DATA = [
  { platform: "Google", share: 81, color: "#1677FF" },
  { platform: "Yelp", share: 7, color: "#E53E3E" },
  { platform: "Facebook", share: 4, color: "#4A5A75" },
  { platform: "BBB", share: 3, color: "#4A5A75" },
  { platform: "Nextdoor", share: 2, color: "#4A5A75" },
  { platform: "Angi", share: 2, color: "#4A5A75" },
  { platform: "Other", share: 1, color: "#A0AEC0" },
]

export function PlatformShareBar() {
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
          Share of reputation searches
        </div>
        <h3
          className="text-[18px] sm:text-[20px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          Google has won. Everything else is rounding error.
        </h3>
      </div>

      <div className="h-[320px] sm:h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={DATA}
            layout="vertical"
            margin={{ top: 8, right: 64, left: 0, bottom: 8 }}
          >
            <CartesianGrid horizontal={false} stroke="var(--border-color)" />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 90]}
            />
            <YAxis
              type="category"
              dataKey="platform"
              width={100}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <Bar dataKey="share" radius={[0, 8, 8, 0]} barSize={22}>
              {DATA.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
              <LabelList
                dataKey="share"
                position="right"
                formatter={(v: number) => `${v}%`}
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
        81% of customers research businesses on Google before calling. Pour energy into Google reviews; leave the other platforms on autopilot.
      </p>
    </div>
  )
}
