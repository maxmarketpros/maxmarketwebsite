"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { CaseStudy } from "@/lib/case-studies-data"

interface Props {
  study: CaseStudy
}

const AXIS_TICK = {
  fill: "var(--muted)",
  fontSize: 11,
  fontWeight: 600,
}

export function CaseStudyCharts({ study }: Props) {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
      style={{ animation: "fadeInUp 0.7s ease-out 0.25s both" }}
    >
      <ChartCard
        title="Organic traffic — monthly visits"
        subtitle="Trailing 12 months"
        accent={study.accentColor}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={study.organicTraffic}
            margin={{ top: 10, right: 8, bottom: 0, left: -10 }}
          >
            <defs>
              <linearGradient
                id={`traffic-${study.slug}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={study.accentColor}
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor={study.accentColor}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 4"
              stroke="var(--border-color)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={{ stroke: "var(--border-color)" }}
              interval={1}
            />
            <YAxis
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={false}
              width={42}
            />
            <Tooltip content={<TrafficTooltip accent={study.accentColor} />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={study.accentColor}
              strokeWidth={2.5}
              fill={`url(#traffic-${study.slug})`}
              dot={{
                stroke: study.accentColor,
                strokeWidth: 2,
                fill: "#fff",
                r: 3,
              }}
              activeDot={{
                r: 5,
                stroke: study.accentColor,
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Inbound leads per month"
        subtitle="Form submissions + tracked calls"
        accent={study.accentColor}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={study.monthlyLeads}
            margin={{ top: 10, right: 8, bottom: 0, left: -10 }}
            barCategoryGap="22%"
          >
            <CartesianGrid
              strokeDasharray="3 4"
              stroke="var(--border-color)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={{ stroke: "var(--border-color)" }}
              interval={1}
            />
            <YAxis
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={false}
              width={32}
            />
            <Tooltip
              cursor={{ fill: `${study.accentColor}10` }}
              content={<LeadsTooltip accent={study.accentColor} />}
            />
            <Bar
              dataKey="value"
              fill={study.accentColor}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="lg:col-span-2">
        <ChartCard
          title="Keyword rankings — Google position"
          subtitle="Lower is better — top 10 = page 1"
          accent={study.accentColor}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mergeKeywordSeries(study)}
              margin={{ top: 10, right: 12, bottom: 0, left: -10 }}
            >
              <CartesianGrid
                strokeDasharray="3 4"
                stroke="var(--border-color)"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={AXIS_TICK}
                tickLine={false}
                axisLine={{ stroke: "var(--border-color)" }}
              />
              <YAxis
                tick={AXIS_TICK}
                tickLine={false}
                axisLine={false}
                reversed
                domain={[1, 70]}
                width={32}
                ticks={[1, 10, 30, 50, 70]}
              />
              <Tooltip content={<RankingTooltip study={study} />} />
              {study.keywordRankings.map((kw, i) => (
                <Line
                  key={kw.keyword}
                  type="monotone"
                  dataKey={`kw${i}`}
                  stroke={kw.color}
                  strokeWidth={2.5}
                  dot={{
                    stroke: kw.color,
                    strokeWidth: 2,
                    fill: "#fff",
                    r: 3,
                  }}
                  activeDot={{
                    r: 5,
                    stroke: kw.color,
                    strokeWidth: 2,
                    fill: "#fff",
                  }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Keyword legend */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {study.keywordRankings.map((kw) => (
            <div
              key={kw.keyword}
              className="inline-flex items-center gap-2 text-[12.5px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ background: kw.color }}
              />
              <span className="font-mono">"{kw.keyword}"</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function mergeKeywordSeries(study: CaseStudy) {
  const months = study.keywordRankings[0]?.points.map((p) => p.month) ?? []
  return months.map((month, i) => {
    const row: Record<string, string | number> = { month }
    study.keywordRankings.forEach((kw, k) => {
      row[`kw${k}`] = kw.points[i]?.position ?? 0
    })
    return row
  })
}

function ChartCard({
  title,
  subtitle,
  accent,
  children,
}: {
  title: string
  subtitle: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <div
      className="card-surface p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h4
            className="text-[15px] sm:text-[16px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h4>
          <p
            className="mt-1 text-[12.5px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </p>
        </div>
        <span
          className="inline-block w-2 h-2 rounded-full shrink-0 mt-1.5"
          style={{
            background: accent,
            boxShadow: `0 0 0 4px ${accent}22`,
          }}
        />
      </div>
      <div className="h-[220px] sm:h-[260px]">{children}</div>
    </div>
  )
}

type TooltipItem = { value?: number; payload?: Record<string, unknown> }
type TooltipProps = { active?: boolean; payload?: TooltipItem[]; label?: string }

function TrafficTooltip({ active, payload, label, accent }: TooltipProps & { accent: string }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg border bg-white px-3 py-2 text-xs shadow-lg"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="font-bold mb-1" style={{ color: "var(--ink)" }}>
        {label}
      </div>
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: accent }}
        />
        <span style={{ color: "var(--muted)" }}>Visits:</span>
        <span className="font-mono font-bold tabular-nums" style={{ color: "var(--ink)" }}>
          {(payload[0]?.value ?? 0).toLocaleString()}
        </span>
      </div>
    </div>
  )
}

function LeadsTooltip({ active, payload, label, accent }: TooltipProps & { accent: string }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg border bg-white px-3 py-2 text-xs shadow-lg"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="font-bold mb-1" style={{ color: "var(--ink)" }}>
        {label}
      </div>
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-sm"
          style={{ background: accent }}
        />
        <span style={{ color: "var(--muted)" }}>Leads:</span>
        <span className="font-mono font-bold tabular-nums" style={{ color: "var(--ink)" }}>
          {payload[0]?.value ?? 0}
        </span>
      </div>
    </div>
  )
}

function RankingTooltip({ active, payload, label, study }: TooltipProps & { study: CaseStudy }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg border bg-white px-3 py-2 text-xs shadow-lg max-w-[260px]"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="font-bold mb-1.5" style={{ color: "var(--ink)" }}>
        {label}
      </div>
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => {
          const kw = study.keywordRankings[i]
          if (!kw) return null
          return (
            <div key={kw.keyword} className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ background: kw.color }}
              />
              <span
                className="font-mono text-[10.5px] truncate"
                style={{ color: "var(--muted)" }}
                title={kw.keyword}
              >
                {kw.keyword}
              </span>
              <span
                className="ml-auto font-mono font-bold tabular-nums"
                style={{ color: "var(--ink)" }}
              >
                #{item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
