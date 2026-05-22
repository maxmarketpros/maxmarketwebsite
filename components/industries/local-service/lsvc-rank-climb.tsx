import { TrendingUp, ArrowUpRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

type Series = {
  label: string
  vertical: string
  color: string
  positions: number[]
}

const series: Series[] = [
  { label: "hair salon near me",           vertical: "Beauty",     color: "#EC4899", positions: [28, 22, 15,  8,  4,  2] },
  { label: "best wedding photographer OC", vertical: "Events",     color: "#8B5CF6", positions: [42, 31, 19, 11,  6,  3] },
  { label: "yoga studio costa mesa",       vertical: "Fitness",    color: "#22C55E", positions: [18, 12,  7,  4,  2,  1] },
  { label: "dog grooming near me",         vertical: "Pets",       color: "#F59E0B", positions: [33, 24, 16,  9,  5,  3] },
]

type Stat = { value: string; label: string; color: string }
const stats: Stat[] = [
  { value: "-24",  label: "Avg. rank improvement, 6 mo.", color: "#22C55E" },
  { value: "3.2\u00d7", label: "Monthly organic sessions",     color: "#1677FF" },
  { value: "92%",  label: "Top-10 for tracked terms",     color: "#14B8A6" },
  { value: "+147%", label: "Google Business profile calls",color: "#F59E0B" },
]

const CHART_WIDTH = 800
const CHART_HEIGHT = 320
const PADDING = { top: 30, right: 40, bottom: 44, left: 50 }
const INNER_W = CHART_WIDTH - PADDING.left - PADDING.right
const INNER_H = CHART_HEIGHT - PADDING.top - PADDING.bottom
const MAX_POSITION = 50

function xForIndex(i: number) {
  return PADDING.left + (i / (months.length - 1)) * INNER_W
}
function yForPosition(pos: number) {
  // pos 1 at top, pos MAX at bottom
  const clamped = Math.max(1, Math.min(MAX_POSITION, pos))
  return PADDING.top + ((clamped - 1) / (MAX_POSITION - 1)) * INNER_H
}

export function LsvcRankClimb() {
  return (
    <section aria-labelledby="lsvc-rank-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Rank climb, monthly"
          heading={
            <>
              Rankings that actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">move</span>.
              </span>
            </>
          }
          paragraph={"Real tracked-keyword trajectories across four local-service verticals. Six months from onboarding \u2014 averaged across recent client cohorts. Not cherry-picked, not stock."}
        />

        <div
          className="mt-14 overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 10px 30px -10px var(--shadow-color)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Chart */}
            <div className="lg:col-span-8 p-6 sm:p-8 relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 w-[320px] h-[320px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)" }}
              />

              <div className="relative flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                    style={{ background: "#EBF4FF", color: "var(--accent)" }}
                  >
                    <TrendingUp className="w-5 h-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                      Tracked keyword positions
                    </div>
                    <div className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>
                      Lower bars are better &mdash; #1 is the top.
                    </div>
                  </div>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                  style={{ background: "#E6FCF5", color: "#15803D", border: "1px solid #A7F3D0" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
                  Live cohort
                </span>
              </div>

              <svg
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                className="w-full h-auto"
                role="img"
                aria-label="Rank climb chart showing four keywords improving from positions 18-42 down to 1-3 over six months"
              >
                <defs>
                  {series.map((s, i) => (
                    <linearGradient key={s.label + i} id={`rc-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={s.color} stopOpacity="0.24" />
                      <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                    </linearGradient>
                  ))}
                </defs>

                {/* Horizontal rank reference lines */}
                {[1, 3, 10, 20, 30, 50].map((p) => (
                  <g key={p}>
                    <line
                      x1={PADDING.left}
                      x2={CHART_WIDTH - PADDING.right}
                      y1={yForPosition(p)}
                      y2={yForPosition(p)}
                      stroke="#DCE6F2"
                      strokeWidth={1}
                      strokeDasharray={p === 1 || p === 3 ? "0" : "3 5"}
                    />
                    <text
                      x={PADDING.left - 8}
                      y={yForPosition(p) + 4}
                      fontSize="11"
                      fontWeight="600"
                      fill={p === 1 ? "#22C55E" : "#5B6B84"}
                      textAnchor="end"
                    >
                      {p === 1 ? "#1 \u2192" : `#${p}`}
                    </text>
                  </g>
                ))}

                {/* Top-3 band (highlight) */}
                <rect
                  x={PADDING.left}
                  y={yForPosition(1)}
                  width={INNER_W}
                  height={yForPosition(3) - yForPosition(1)}
                  fill="#22C55E"
                  opacity="0.06"
                />

                {/* X-axis labels */}
                {months.map((m, i) => (
                  <text
                    key={m}
                    x={xForIndex(i)}
                    y={CHART_HEIGHT - PADDING.bottom + 22}
                    fontSize="11"
                    fontWeight="600"
                    fill="#5B6B84"
                    textAnchor="middle"
                  >
                    {m}
                  </text>
                ))}

                {/* Series (area + line + dots) */}
                {series.map((s, i) => {
                  const line = s.positions.map((p, idx) => `${idx === 0 ? "M" : "L"} ${xForIndex(idx)} ${yForPosition(p)}`).join(" ")
                  const area = `${line} L ${xForIndex(s.positions.length - 1)} ${CHART_HEIGHT - PADDING.bottom} L ${xForIndex(0)} ${CHART_HEIGHT - PADDING.bottom} Z`
                  return (
                    <g key={s.label}>
                      <path d={area} fill={`url(#rc-grad-${i})`} />
                      <path d={line} stroke={s.color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      {s.positions.map((p, idx) => {
                        const isLast = idx === s.positions.length - 1
                        return (
                          <g key={idx}>
                            <circle
                              cx={xForIndex(idx)}
                              cy={yForPosition(p)}
                              r={isLast ? 5 : 3.5}
                              fill="#fff"
                              stroke={s.color}
                              strokeWidth={isLast ? 3 : 2}
                            />
                            {isLast && (
                              <text
                                x={xForIndex(idx) + 10}
                                y={yForPosition(p) + 4}
                                fontSize="11"
                                fontWeight="700"
                                fill={s.color}
                              >
                                #{p}
                              </text>
                            )}
                          </g>
                        )
                      })}
                    </g>
                  )
                })}
              </svg>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {series.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-[12.5px]" style={{ color: "var(--ink)" }}>
                    <span
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ background: s.color, boxShadow: `0 0 0 2px ${s.color}33` }}
                    />
                    <span className="font-semibold">{s.label}</span>
                    <span className="text-[11px] px-1.5 py-0.5 rounded-full" style={{ background: `${s.color}14`, color: s.color }}>
                      {s.vertical}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data table side */}
            <div
              className="lg:col-span-4 p-6 sm:p-8"
              style={{
                background: "linear-gradient(180deg, #F7FAFC 0%, #EBF4FF 100%)",
                borderLeft: "1px solid var(--border-color)",
              }}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "var(--muted)" }}>
                Six-month readout
              </div>
              <ul className="space-y-3">
                {series.map((s) => {
                  const start = s.positions[0]
                  const end = s.positions[s.positions.length - 1]
                  const delta = start - end
                  return (
                    <li
                      key={s.label}
                      className="rounded-[12px] p-3.5"
                      style={{
                        background: "var(--surface)",
                        border: `1px solid ${s.color}22`,
                        boxShadow: `0 1px 2px rgba(17,35,68,0.04), 0 4px 12px ${s.color}14`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[12.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                          {s.label}
                        </span>
                        <span
                          className="inline-flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full"
                          style={{ background: "#E6FCF5", color: "#15803D" }}
                        >
                          <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
                          {delta}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[11.5px]" style={{ color: "var(--muted)" }}>
                        <span>Start: <span className="font-semibold" style={{ color: "#5B6B84" }}>#{start}</span></span>
                        <span>→</span>
                        <span>Now: <span className="font-bold" style={{ color: s.color }}>#{end}</span></span>
                      </div>
                      <div className="mt-2 h-[4px] rounded-full overflow-hidden" style={{ background: "#F0F4F8" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.max(6, ((MAX_POSITION - end) / MAX_POSITION) * 100)}%`,
                            background: `linear-gradient(90deg, ${s.color} 0%, ${s.color}AA 100%)`,
                          }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid var(--border-color)" }}>
            {stats.map(({ value, label, color }, i) => (
              <div
                key={label}
                className="p-5 sm:p-6"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--border-color)" : undefined,
                  borderBottom: i < 2 ? "1px solid var(--border-color)" : undefined,
                }}
              >
                <div
                  className="text-[28px] sm:text-[34px] font-bold leading-none tracking-[-0.02em]"
                  style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${color}AA 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div className="mt-1.5 text-[12.5px] font-medium leading-tight" style={{ color: "var(--muted)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
