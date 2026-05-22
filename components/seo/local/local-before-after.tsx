import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Phone, Navigation, MapPin, LineChart } from "lucide-react"

type Metric = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  before: string
  after: string
  delta: string
}

const metrics: Metric[] = [
  {
    Icon: MapPin,
    label: "Keywords in Map Pack top 3",
    before: "0",
    after: "23",
    delta: "+23",
  },
  {
    Icon: Phone,
    label: "GBP calls per month",
    before: "18",
    after: "147",
    delta: "+717%",
  },
  {
    Icon: Navigation,
    label: "Direction-requests per month",
    before: "7",
    after: "84",
    delta: "+1100%",
  },
  {
    Icon: LineChart,
    label: "Average rank (tracked terms)",
    before: "#17",
    after: "#2.4",
    delta: "−14.6",
  },
]

// Rank chart: Y axis is rank (1 = top), values flipped for chart height
const rankPoints = [17, 14, 11, 7, 4, 2.4]

export function LocalBeforeAfter() {
  return (
    <section
      id="local-before-after"
      aria-labelledby="local-before-after-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[-10%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="90-Day Case Snapshot"
          heading={
            <span id="local-before-after-heading">
              What 90 days of Local SEO actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">looks like</span>.
              </span>
            </span>
          }
          paragraph="Real numbers from a real service-business client. Anonymized, but the metrics are exact. This is the compounding curve we aim for on every engagement."
        />

        <div
          className="mt-12 sm:mt-14 max-w-[1080px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="card-surface relative overflow-hidden p-6 sm:p-8 lg:p-10"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0"
              style={{
                width: "55%",
                height: "55%",
                background:
                  "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(245,158,11,0.10), transparent 65%)",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-center">
              {/* Left: Rank climb chart */}
              <div>
                <div
                  className="text-[11.5px] font-semibold uppercase tracking-[0.1em] mb-3"
                  style={{ color: "#D97706" }}
                >
                  Average Map Pack rank · 6-month climb
                </div>
                <RankChart points={rankPoints} />
              </div>

              {/* Right: Metric rows */}
              <div className="space-y-3.5">
                {metrics.map((m) => (
                  <MetricRow key={m.label} metric={m} />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className="relative mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(245,158,11,0.12)",
                    color: "#B4730E",
                  }}
                >
                  Anonymized client
                </span>
                <span
                  className="text-[12.5px]"
                  style={{ color: "var(--muted)" }}
                >
                  Home-services vertical · 3-city service area
                </span>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Get your forecast
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricRow({ metric }: { metric: Metric }) {
  const { Icon, label, before, after, delta } = metric
  return (
    <div
      className="flex items-center gap-3 p-3.5 rounded-[var(--radius-sm)] border"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <span
        className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
        style={{
          background: "rgba(245,158,11,0.12)",
          color: "#D97706",
        }}
      >
        <Icon className="w-4 h-4" strokeWidth={2.25} />
      </span>
      <div className="min-w-0 flex-1">
        <div
          className="text-[11.5px] font-semibold uppercase tracking-[0.08em] truncate"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span
            className="text-[13.5px] font-medium line-through"
            style={{ color: "var(--muted)", textDecorationColor: "#CBD5E1" }}
          >
            {before}
          </span>
          <ArrowRight
            className="w-3 h-3"
            style={{ color: "var(--muted)" }}
            strokeWidth={2.5}
          />
          <span
            className="text-[17px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            {after}
          </span>
          <span
            className="ml-auto text-[11.5px] font-bold px-1.5 py-0.5 rounded-full"
            style={{
              background: "rgba(16,185,129,0.12)",
              color: "#10B981",
            }}
          >
            {delta}
          </span>
        </div>
      </div>
    </div>
  )
}

function RankChart({ points }: { points: number[] }) {
  const width = 520
  const height = 240
  const padX = 36
  const padY = 28
  const maxRank = 20 // rank 20 = bottom
  const minRank = 1 // rank 1 = top
  const plotW = width - padX * 2
  const plotH = height - padY * 2

  const coords = points.map((rank, i) => {
    const x = padX + (plotW * i) / (points.length - 1)
    const y = padY + plotH * ((rank - minRank) / (maxRank - minRank))
    return { x, y, rank }
  })

  const linePath = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ")

  const areaPath =
    linePath +
    ` L ${padX + plotW} ${padY + plotH} L ${padX} ${padY + plotH} Z`

  return (
    <div
      className="relative rounded-[var(--radius-md)] border overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, #FFFBEB 100%)",
        borderColor: "var(--border-color)",
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto block"
        aria-hidden
      >
        <defs>
          <linearGradient id="local-rank-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="local-rank-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Y axis guide lines */}
        {[1, 5, 10, 15, 20].map((r) => {
          const y = padY + plotH * ((r - minRank) / (maxRank - minRank))
          return (
            <g key={r}>
              <line
                x1={padX}
                x2={width - padX}
                y1={y}
                y2={y}
                stroke="#E5E7EB"
                strokeWidth="1"
                strokeDasharray={r === 1 ? "0" : "4 4"}
              />
              <text
                x={padX - 6}
                y={y + 3}
                textAnchor="end"
                fontSize="10"
                fontFamily="Outfit, sans-serif"
                fontWeight="600"
                fill="#94A3B8"
              >
                #{r}
              </text>
            </g>
          )
        })}

        {/* "Top 3" band */}
        <rect
          x={padX}
          y={padY}
          width={plotW}
          height={plotH * (3 / (maxRank - minRank))}
          fill="#10B981"
          opacity="0.08"
        />
        <text
          x={width - padX - 6}
          y={padY + 14}
          textAnchor="end"
          fontSize="9"
          fontFamily="Outfit, sans-serif"
          fontWeight="700"
          fill="#10B981"
          letterSpacing="0.1em"
        >
          MAP PACK ZONE
        </text>

        {/* Area + line */}
        <path d={areaPath} fill="url(#local-rank-area)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#local-rank-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {coords.map((c, i) => {
          const inPack = c.rank <= 3
          return (
            <g key={i}>
              <circle
                cx={c.x}
                cy={c.y}
                r="5.5"
                fill="#fff"
                stroke={inPack ? "#10B981" : "#F59E0B"}
                strokeWidth="2.5"
              />
              {(i === 0 || i === coords.length - 1) && (
                <text
                  x={c.x}
                  y={c.y - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="700"
                  fill={inPack ? "#10B981" : "#D97706"}
                >
                  #{c.rank}
                </text>
              )}
            </g>
          )
        })}

        {/* X labels */}
        {coords.map((c, i) => (
          <text
            key={i}
            x={c.x}
            y={height - 8}
            textAnchor="middle"
            fontSize="10"
            fontFamily="Outfit, sans-serif"
            fontWeight="600"
            fill="#94A3B8"
          >
            M{i + 1}
          </text>
        ))}
      </svg>
    </div>
  )
}
