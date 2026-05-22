import { SectionHeader } from "@/components/ui/section-header"
import { Check, TrendingUp } from "lucide-react"

type Milestone = {
  month: number
  label: string
  detail: string
}

const milestones: Milestone[] = [
  { month: 1, label: "Month 1", detail: "Audit + link-gap analysis + Tier 3 foundation cleanup" },
  { month: 3, label: "Month 3", detail: "First Tier 1 editorial placement + HARO cycles begin" },
  { month: 6, label: "Month 6", detail: "Referring-domain velocity overtakes top competitor" },
  { month: 12, label: "Month 12", detail: "DR compounds — new links rank faster, rankings stack" },
]

const metrics = [
  { label: "Domain Rating", before: "42", after: "68", delta: "+26" },
  { label: "Referring domains", before: "84", after: "312", delta: "+228" },
  { label: "Editorial links", before: "0", after: "31", delta: "+31" },
  { label: "Toxic disavowed", before: "—", after: "24", delta: "audit" },
]

const months = ["M1", "M2", "M3", "M4", "M5", "M6"]
const drY = [220, 189, 143, 97, 58, 20]
const rdY = [220, 195, 157, 111, 59, 20]
const xCoord = (i: number) => 40 + i * (544 / 5)

function pathFrom(ys: number[]) {
  return ys.map((y, i) => `${i === 0 ? "M" : "L"}${xCoord(i)} ${y}`).join(" ")
}

export function OffPageAuthorityGrowth() {
  const drPath = pathFrom(drY)
  const rdPath = pathFrom(rdY)

  return (
    <section
      id="off-page-authority-growth"
      aria-labelledby="off-page-growth-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Authority growth"
          heading={
            <span id="off-page-growth-heading">
              Domain authority that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">compounds</span>
              </span>{" "}
              quarter over quarter.
            </span>
          }
          paragraph="Off-page SEO doesn&rsquo;t produce linear growth — it compounds. Every new editorial link makes the next one rank faster, because your site already has more perceived trust."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: milestones */}
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              12 months of compounding authority
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Most off-page SEO programs quit at month 3, right before returns
              start compounding. Here&rsquo;s what the trajectory actually
              looks like when you don&rsquo;t quit.
            </p>

            <ol className="mt-6 space-y-3">
              {milestones.map((m) => (
                <li
                  key={m.label}
                  className="flex items-start gap-3 p-4 rounded-[var(--radius-lg)]"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{
                      background:
                        "linear-gradient(180deg, #A78BFA 0%, #6D28D9 100%)",
                      color: "#fff",
                      boxShadow:
                        "0 1px 2px rgba(17,35,68,0.1), 0 6px 14px rgba(109,40,217,0.22)",
                    }}
                  >
                    M{m.month}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div
                      className="text-[14.5px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.label}
                    </div>
                    <div
                      className="mt-0.5 text-[13.5px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: dashboard */}
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b"
              style={{
                background:
                  "linear-gradient(180deg, #F7F2FF 0%, #EEF0FF 100%)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#8B5CF6",
                    boxShadow: "0 0 0 4px rgba(139,92,246,0.18)",
                  }}
                />
                <span
                  className="text-[12px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Authority Dashboard · 6-month view
                </span>
              </div>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Updated: today
              </span>
            </div>

            {/* Legend */}
            <div className="px-5 sm:px-6 pt-4 flex items-center gap-4 flex-wrap">
              <LegendItem color="#6D28D9" label="Domain Rating" solid />
              <LegendItem color="#A78BFA" label="Referring domains" />
              <span
                className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  color: "#059669",
                }}
              >
                <TrendingUp className="w-2.5 h-2.5" strokeWidth={3} />
                Up and to the right
              </span>
            </div>

            {/* Chart */}
            <div className="px-3 sm:px-4 pt-3">
              <svg
                viewBox="0 0 600 260"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Line chart showing Domain Rating and referring domains climbing over 6 months"
              >
                <defs>
                  <linearGradient id="drArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[60, 120, 180].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    x2="584"
                    y1={y}
                    y2={y}
                    stroke="rgba(11,19,43,0.06)"
                    strokeDasharray="2 3"
                  />
                ))}
                {/* Area under DR */}
                <path
                  d={`${drPath} L ${xCoord(5)} 220 L 40 220 Z`}
                  fill="url(#drArea)"
                />
                {/* Referring domains (dashed lighter) */}
                <path
                  d={rdPath}
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />
                {/* DR line (solid) */}
                <path
                  d={drPath}
                  fill="none"
                  stroke="#6D28D9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Data points */}
                {drY.map((y, i) => (
                  <circle
                    key={`dr-${i}`}
                    cx={xCoord(i)}
                    cy={y}
                    r="4"
                    fill="#fff"
                    stroke="#6D28D9"
                    strokeWidth="2.5"
                  />
                ))}
                {/* Milestone: M3 */}
                <g>
                  <circle
                    cx={xCoord(2)}
                    cy={drY[2]}
                    r="9"
                    fill="rgba(139,92,246,0.2)"
                  />
                  <circle
                    cx={xCoord(2)}
                    cy={drY[2]}
                    r="5"
                    fill="#6D28D9"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <rect
                    x={xCoord(2) - 58}
                    y={drY[2] - 38}
                    width="116"
                    height="22"
                    rx="6"
                    fill="#0B132B"
                  />
                  <text
                    x={xCoord(2)}
                    y={drY[2] - 23}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="10"
                    fontWeight="600"
                  >
                    Forbes placement
                  </text>
                </g>
                {/* Milestone: M5 */}
                <g>
                  <circle
                    cx={xCoord(4)}
                    cy={drY[4]}
                    r="9"
                    fill="rgba(139,92,246,0.2)"
                  />
                  <circle
                    cx={xCoord(4)}
                    cy={drY[4]}
                    r="5"
                    fill="#6D28D9"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <rect
                    x={xCoord(4) - 66}
                    y={drY[4] - 38}
                    width="132"
                    height="22"
                    rx="6"
                    fill="#0B132B"
                  />
                  <text
                    x={xCoord(4)}
                    y={drY[4] - 23}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="10"
                    fontWeight="600"
                  >
                    HARO quote in Inc.
                  </text>
                </g>
                {/* Y-axis labels (DR) */}
                <text x="8" y="24" fontSize="10" fill="#94a3b8">
                  70
                </text>
                <text x="8" y="124" fontSize="10" fill="#94a3b8">
                  55
                </text>
                <text x="8" y="224" fontSize="10" fill="#94a3b8">
                  40
                </text>
                {/* X-axis labels */}
                {months.map((m, i) => (
                  <text
                    key={m}
                    x={xCoord(i)}
                    y="248"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#6B7280"
                    fontWeight="600"
                  >
                    {m}
                  </text>
                ))}
              </svg>
            </div>

            {/* Metric cards */}
            <div
              className="px-5 sm:px-6 pb-5 pt-2 grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-[var(--radius-sm)]"
                  style={{
                    background: "rgba(139,92,246,0.05)",
                    border: "1px solid rgba(139,92,246,0.15)",
                  }}
                >
                  <div
                    className="text-[10.5px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.label}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span
                      className="text-[11.5px] font-mono line-through"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.before}
                    </span>
                    <span
                      className="text-[11.5px]"
                      style={{ color: "var(--muted)" }}
                    >
                      →
                    </span>
                    <span
                      className="text-[17px] font-bold font-mono"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.after}
                    </span>
                  </div>
                  <div
                    className="mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-semibold"
                    style={{ color: "#059669" }}
                  >
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LegendItem({
  color,
  label,
  solid,
}: {
  color: string
  label: string
  solid?: boolean
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="inline-block w-6 h-[3px] rounded-full"
        style={{
          background: color,
          borderTop: solid ? "none" : `2px dashed ${color}`,
          height: solid ? 3 : 0,
        }}
      />
      <span
        className="text-[11.5px] font-semibold"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </span>
    </div>
  )
}
