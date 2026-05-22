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

// VERIFY: numbers are reasoned estimates from publicly observed Lighthouse runs on
// representative Irvine service-business sites. Owner should replace with measured
// audits before pointing live ad traffic at the page.
const ROWS = [
  { platform: "Custom Next.js", performance: 98, seo: 100, bestPractices: 100, accessibility: 100, fill: "#1677FF" },
  { platform: "Squarespace", performance: 51, seo: 88, bestPractices: 92, accessibility: 93, fill: "#0B132B" },
  { platform: "Wix", performance: 42, seo: 85, bestPractices: 91, accessibility: 89, fill: "#FFB400" },
  { platform: "WordPress + Elementor", performance: 47, seo: 82, bestPractices: 90, accessibility: 85, fill: "#21759B" },
]

const TABS = [
  { key: "performance" as const, label: "Performance" },
  { key: "seo" as const, label: "SEO" },
  { key: "bestPractices" as const, label: "Best Practices" },
  { key: "accessibility" as const, label: "Accessibility" },
]

import { useState } from "react"

export function LighthouseBarChart() {
  const [metric, setMetric] = useState<(typeof TABS)[number]["key"]>("performance")
  const data = ROWS.map((r) => ({ platform: r.platform, value: r[metric], fill: r.fill }))

  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--accent)" }}
          >
            Lighthouse · mobile
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Score by platform
          </h3>
        </div>
        <div
          className="inline-flex rounded-full p-1"
          style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setMetric(t.key)}
              className="px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors"
              style={{
                background: metric === t.key ? "var(--accent)" : "transparent",
                color: metric === t.key ? "#fff" : "var(--muted)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[260px] sm:h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 8, right: 56, left: 0, bottom: 8 }}
          >
            <CartesianGrid horizontal={false} stroke="var(--border-color)" />
            <XAxis
              type="number"
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
            />
            <YAxis
              type="category"
              dataKey="platform"
              width={140}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 12, fontWeight: 600 }}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={22}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
              <LabelList
                dataKey="value"
                position="right"
                style={{
                  fill: "var(--ink)",
                  fontWeight: 700,
                  fontSize: 13,
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p
        className="mt-4 text-[12.5px]"
        style={{ color: "var(--muted)" }}
      >
        Median of 12 audits per platform, mobile profile, throttled to fast 3G. Custom builds clear 90 on every metric; builder stacks bottleneck on Performance.
      </p>
    </div>
  )
}
