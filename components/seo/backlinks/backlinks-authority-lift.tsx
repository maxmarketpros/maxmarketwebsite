import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  TrendingUp,
  Link2,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"

// ── Sparkline visualizations ──────────────────────────

function AreaSparkline() {
  // Smooth upward trend: 12 points
  const points = [10, 14, 12, 18, 22, 20, 28, 32, 36, 42, 47, 52]
  const max = Math.max(...points)
  const w = 240
  const h = 80
  const padX = 4
  const stepX = (w - padX * 2) / (points.length - 1)
  const coords = points.map((p, i) => [
    padX + i * stepX,
    h - 6 - (p / max) * (h - 12),
  ])
  const linePath =
    "M " +
    coords
      .map(([x, y], i) => {
        if (i === 0) return `${x},${y}`
        const [px, py] = coords[i - 1]
        const cx1 = px + stepX / 2
        const cx2 = x - stepX / 2
        return `C ${cx1},${py} ${cx2},${y} ${x},${y}`
      })
      .join(" ")
  const areaPath = `${linePath} L ${coords[coords.length - 1][0]},${h} L ${coords[0][0]},${h} Z`

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="bk-area-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#bk-area-grad)" />
      <path
        d={linePath}
        fill="none"
        stroke="#14B8A6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {coords.slice(-1).map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#14B8A6" opacity="0.18" />
          <circle cx={x} cy={y} r="3" fill="#14B8A6" />
        </g>
      ))}
    </svg>
  )
}

function BarSparkline() {
  // Stepped DA growth: 8 bars
  const bars = [22, 24, 26, 28, 30, 31, 33, 34]
  const max = Math.max(...bars) + 2
  const w = 240
  const h = 80
  const gap = 6
  const barW = (w - gap * (bars.length - 1)) / bars.length

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="bk-bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => {
        const bh = (b / max) * (h - 8)
        return (
          <rect
            key={i}
            x={i * (barW + gap)}
            y={h - bh}
            width={barW}
            height={bh}
            rx="2"
            fill="url(#bk-bar-grad)"
            opacity={0.4 + (i / bars.length) * 0.6}
          />
        )
      })}
    </svg>
  )
}

function DonutViz() {
  // 4× lift donut — fill 80% to feel like a strong lift
  const r = 32
  const stroke = 8
  const c = 2 * Math.PI * r
  const fill = 0.78
  return (
    <svg
      viewBox="0 0 90 90"
      width="100%"
      height="100%"
      aria-hidden
      style={{ maxWidth: 110, maxHeight: 110 }}
    >
      <defs>
        <linearGradient id="bk-donut-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke="rgba(20,184,166,0.14)"
        strokeWidth={stroke}
      />
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke="url(#bk-donut-grad)"
        strokeWidth={stroke}
        strokeDasharray={`${c * fill} ${c}`}
        strokeDashoffset={c * 0.25}
        strokeLinecap="round"
        transform="rotate(-90 45 45)"
      />
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fill="#0F766E"
        fontFamily="Outfit, sans-serif"
      >
        4×
      </text>
    </svg>
  )
}

function ProgressRing() {
  const r = 32
  const stroke = 8
  const c = 2 * Math.PI * r
  return (
    <svg
      viewBox="0 0 90 90"
      width="100%"
      height="100%"
      aria-hidden
      style={{ maxWidth: 110, maxHeight: 110 }}
    >
      <defs>
        <linearGradient id="bk-ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke="rgba(20,184,166,0.14)"
        strokeWidth={stroke}
      />
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke="url(#bk-ring-grad)"
        strokeWidth={stroke}
        strokeDasharray={`${c} ${c}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform="rotate(-90 45 45)"
      />
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#0F766E"
        fontFamily="Outfit, sans-serif"
      >
        100%
      </text>
    </svg>
  )
}

// ── Tile data ──────────────────────────

type Tile = {
  metric: string
  metricSuffix?: string
  label: string
  Icon: typeof TrendingUp
  Viz: () => React.ReactElement
  vizFull: boolean // donut/ring should fill cell, sparkline should be banded bottom
  trend: string
}

const tiles: Tile[] = [
  {
    metric: "+47",
    label: "Referring Domains / 90d",
    Icon: Link2,
    Viz: AreaSparkline,
    vizFull: false,
    trend: "vs. baseline of 14 RDs",
  },
  {
    metric: "+12",
    metricSuffix: "pts",
    label: "Domain Authority Points",
    Icon: TrendingUp,
    Viz: BarSparkline,
    vizFull: false,
    trend: "DA 22 → DA 34 in 6 mo",
  },
  {
    metric: "4×",
    label: "Map-Pack Visibility",
    Icon: MapPin,
    Viz: DonutViz,
    vizFull: true,
    trend: "across tracked geos",
  },
  {
    metric: "100%",
    label: "NAP Consistency Score",
    Icon: CheckCircle2,
    Viz: ProgressRing,
    vizFull: true,
    trend: "across 50+ citations",
  },
]

const caseRows = [
  {
    industry: "Roofing co · Phoenix",
    metric: "DR +14",
    period: "in 90 days",
    color: "#14B8A6",
  },
  {
    industry: "Med spa · Austin",
    metric: "3.2×",
    period: "organic calls",
    color: "#0EA5E9",
  },
  {
    industry: "HVAC · Atlanta",
    metric: "+62 RDs",
    period: "in 6 months",
    color: "#1677FF",
  },
  {
    industry: "Restaurant · Miami",
    metric: "#1 Map Pack",
    period: "for 14 keywords",
    color: "#F59E0B",
  },
]

function StatTile({ tile, index }: { tile: Tile; index: number }) {
  const { Viz } = tile
  return (
    <div
      className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col"
      style={{
        animation: `fadeInUp 0.7s ease-out ${0.05 * index}s both`,
        minHeight: 240,
      }}
    >
      {/* Corner aura */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 w-[200px] h-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
          style={{
            background: "rgba(20,184,166,0.12)",
            color: "#0F766E",
            border: "1px solid rgba(20,184,166,0.20)",
          }}
        >
          <tile.Icon className="w-5 h-5" strokeWidth={2.25} />
        </span>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em] shrink-0"
          style={{
            background: "rgba(20,184,166,0.12)",
            color: "#0F766E",
          }}
        >
          <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={2.75} />
          Lift
        </span>
      </div>

      <div className="relative mt-5">
        <div
          className="text-[44px] sm:text-[52px] font-extrabold leading-[1] tracking-[-0.03em] tabular-nums"
          style={{
            background: "linear-gradient(180deg, #0F766E 0%, #14B8A6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {tile.metric}
          {tile.metricSuffix && (
            <span
              className="ml-1 text-[18px] sm:text-[20px] align-baseline font-bold"
              style={{
                background: "linear-gradient(180deg, #0F766E 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {tile.metricSuffix}
            </span>
          )}
        </div>
        <div
          className="mt-1 text-[13.5px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          {tile.label}
        </div>
        <div
          className="mt-0.5 text-[11.5px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          {tile.trend}
        </div>
      </div>

      {/* Viz */}
      <div
        className={`relative mt-auto ${
          tile.vizFull ? "self-center pt-4" : "pt-4"
        }`}
        style={{
          height: tile.vizFull ? 110 : 80,
          width: tile.vizFull ? 110 : "auto",
        }}
      >
        <Viz />
      </div>
    </div>
  )
}

export function BacklinksAuthorityLift() {
  return (
    <section
      id="backlinks-lift"
      aria-labelledby="backlinks-lift-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Authority lift"
          heading={
            <span id="backlinks-lift-heading">
              Authority lift you can measure in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">90 days</span>.
              </span>
            </span>
          }
          paragraph="The numbers we report monthly. Real metrics, real movement — from the first 30 citations going live to the editorial backlinks that actually shift keyword positions."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t, i) => (
            <StatTile key={t.label} tile={t} index={i} />
          ))}
        </div>

        {/* Client lift strip */}
        <div
          className="mt-10 card-surface relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            border: "1px solid rgba(20,184,166,0.30)",
          }}
        >
          <span
            aria-hidden
            className="absolute -top-20 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(20,184,166,0.32) 0%, transparent 60%)",
            }}
          />

          <div className="relative px-5 sm:px-7 py-6">
            <div className="flex items-center gap-2.5 mb-5">
              <span
                className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)",
                  color: "#042F2E",
                  boxShadow: "0 4px 14px rgba(20,184,166,0.45)",
                }}
              >
                <TrendingUp className="w-4.5 h-4.5" strokeWidth={2.5} />
              </span>
              <div
                className="text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#5EEAD4" }}
              >
                Recent client lift
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {caseRows.map((c) => (
                <li
                  key={c.industry}
                  className="flex items-center gap-3 px-4 py-3 rounded-[14px]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: c.color,
                      boxShadow: `0 0 0 3px ${c.color}33`,
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-white truncate">
                      {c.industry}
                    </div>
                    <div
                      className="text-[10.5px] font-medium"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {c.period}
                    </div>
                  </div>
                  <span
                    className="text-[14px] font-extrabold tabular-nums tracking-[-0.01em]"
                    style={{ color: c.color }}
                  >
                    {c.metric}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 pt-5 flex flex-col sm:flex-row items-center gap-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <p
                className="flex-1 text-[14px] font-medium text-center sm:text-left"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Want a forecast on what this looks like for your domain?
              </p>
              <PrimaryButton size="default" asLink href="#contact">
                Forecast my lift
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
