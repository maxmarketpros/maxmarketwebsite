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
  LabelList,
} from "recharts"

// VERIFY: 3-year total cost of ownership composition for a 15-page Irvine
// service-business website. Adjust based on actual project quotes.
const DATA = [
  {
    platform: "Wix Business",
    platformFees: 540,
    addons: 720,
    designFixes: 1800,
    lostConversions: 9800,
  },
  {
    platform: "Squarespace",
    platformFees: 720,
    addons: 360,
    designFixes: 1500,
    lostConversions: 8200,
  },
  {
    platform: "WordPress",
    platformFees: 1080,
    addons: 1620,
    designFixes: 3400,
    lostConversions: 6400,
  },
  {
    platform: "Custom Next.js",
    platformFees: 0,
    addons: 240,
    designFixes: 600,
    lostConversions: 800,
  },
]

const SERIES = [
  { key: "platformFees", label: "Platform fees", color: "#FFB400" },
  { key: "addons", label: "Apps & plugins", color: "#74D3FF" },
  { key: "designFixes", label: "Designer fixes", color: "#4A5A75" },
  { key: "lostConversions", label: "Lost-conversion drag", color: "#E53E3E" },
] as const

function fmt(n: number) {
  return `$${n.toLocaleString()}`
}

export function TcoStackedBar() {
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
            3-year total cost of ownership
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            What you actually pay over 36 months
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

      <div className="h-[320px] sm:h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border-color)" />
            <XAxis
              dataKey="platform"
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
              >
                {i === SERIES.length - 1 ? (
                  <LabelList
                    dataKey={((d: (typeof DATA)[number]) =>
                      d.platformFees + d.addons + d.designFixes + d.lostConversions) as never}
                    position="top"
                    formatter={(v: number) => fmt(v)}
                    style={{
                      fill: "var(--ink)",
                      fontWeight: 700,
                      fontSize: 12,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  />
                ) : null}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        Includes platform + apps + designer fixes + estimated lost conversions from slow sites (priced at avg Irvine home-services lead value of $42). Custom builds pay back around month 14.
      </p>
    </div>
  )
}
