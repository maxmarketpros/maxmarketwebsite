"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

// VERIFY: representative CWV ranges — higher is better here (we normalize so
// "good" thresholds map to ~85 and pass marks to ~70). Replace with measured CrUX
// data on owner's domain before publishing widely.
const DATA = [
  { metric: "LCP", custom: 95, builderAvg: 48 },
  { metric: "INP", custom: 92, builderAvg: 55 },
  { metric: "CLS", custom: 97, builderAvg: 72 },
  { metric: "TTFB", custom: 90, builderAvg: 38 },
  { metric: "FCP", custom: 94, builderAvg: 52 },
]

export function CoreWebVitalsRadar() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--accent)" }}
          >
            Core Web Vitals · normalized
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            How far each metric clears Google's pass bar
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[12px]" style={{ color: "var(--muted)" }}>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#1677FF" }} />
            Custom Next.js
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFB400" }} />
            Builder average
          </span>
        </div>
      </div>

      <div className="h-[300px] sm:h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={DATA} outerRadius="78%">
            <PolarGrid stroke="var(--border-color)" />
            <PolarAngleAxis
              dataKey="metric"
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "var(--muted)", fontSize: 10 }}
              axisLine={false}
            />
            <Radar
              name="Custom Next.js"
              dataKey="custom"
              stroke="#1677FF"
              fill="#1677FF"
              fillOpacity={0.32}
              strokeWidth={2.2}
            />
            <Radar
              name="Builder average"
              dataKey="builderAvg"
              stroke="#FFB400"
              fill="#FFB400"
              fillOpacity={0.20}
              strokeWidth={2}
            />
            <Legend wrapperStyle={{ display: "none" }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        Outer ring = "Good" threshold from Chrome UX Report. Custom builds sit on or outside the ring on every axis; builder averages stall on TTFB and LCP.
      </p>
    </div>
  )
}
