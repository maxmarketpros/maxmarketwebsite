import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  TrendingUp,
  ArrowUp,
  Target,
  Globe2,
  BarChart3,
  LineChart,
} from "lucide-react"

type Ranking = {
  keyword: string
  location: string
  rank: number
  change: number
  volume: string
  volumePct: number
  url: string
}

const rankings: Ranking[] = [
  {
    keyword: "plumber near me",
    location: "Austin, TX",
    rank: 1,
    change: 4,
    volume: "27,100",
    volumePct: 100,
    url: "/",
  },
  {
    keyword: "emergency plumber austin",
    location: "Austin, TX",
    rank: 2,
    change: 6,
    volume: "8,100",
    volumePct: 44,
    url: "/emergency",
  },
  {
    keyword: "water heater repair",
    location: "National",
    rank: 3,
    change: 2,
    volume: "49,500",
    volumePct: 84,
    url: "/water-heater",
  },
  {
    keyword: "24 hour plumber",
    location: "Austin, TX",
    rank: 1,
    change: 7,
    volume: "5,400",
    volumePct: 32,
    url: "/",
  },
  {
    keyword: "tankless water heater install",
    location: "National",
    rank: 5,
    change: 3,
    volume: "12,100",
    volumePct: 52,
    url: "/services/tankless",
  },
  {
    keyword: "clogged drain repair",
    location: "Austin, TX",
    rank: 4,
    change: 1,
    volume: "3,600",
    volumePct: 22,
    url: "/services/drain",
  },
]

const summary = [
  { label: "Keywords tracked", value: "147", Icon: Target, color: "#1677FF" },
  { label: "Page 1 rankings", value: "89", Icon: BarChart3, color: "#10B981" },
  { label: "Avg position", value: "#4.2", Icon: LineChart, color: "#F59E0B" },
  { label: "Domain Authority", value: "54", Icon: Globe2, color: "#8B5CF6" },
]

export function SeoRankTracking() {
  return (
    <section
      id="rank-tracking"
      aria-labelledby="rank-tracking-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Transparent Reporting"
          heading={
            <span id="rank-tracking-heading">
              See every keyword move.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Every week</span>.
              </span>
            </span>
          }
          paragraph="Weekly rank tracking for every keyword we target — with position changes, search volume, and the exact URL ranking. No black-box dashboards, no hiding behind 'impressions went up.'"
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <RankingsDashboard />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">
            Get your keyword tracking report
          </PrimaryButton>
          <SecondaryButton asLink href="/services/seo/on-page">
            See on-page SEO
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   Dashboard mockup
   ========================================================================= */

function RankingsDashboard() {
  return (
    <div
      className="card-surface relative overflow-hidden"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[50%] h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 100% 0%, rgba(22,119,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Header bar */}
      <div
        className="relative flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <LineChart className="w-4 h-4" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <div
              className="text-[14px] sm:text-[15px] font-bold leading-tight truncate"
              style={{ color: "var(--ink)" }}
            >
              Rank tracking · yourbusiness.com
            </div>
            <div
              className="text-[11.5px] font-medium truncate"
              style={{ color: "var(--muted)" }}
            >
              Week ending Oct 19 · Updated 12 min ago
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={{ background: "#10B98114", color: "#10B981" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981" }}
            />
            Live
          </div>
          <div
            className="px-2.5 py-1 rounded-[var(--radius-xs)] text-[11px] font-semibold border"
            style={{
              color: "var(--ink)",
              borderColor: "var(--border-color)",
            }}
          >
            7d
          </div>
          <div
            className="px-2.5 py-1 rounded-[var(--radius-xs)] text-[11px] font-semibold"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            30d
          </div>
          <div
            className="px-2.5 py-1 rounded-[var(--radius-xs)] text-[11px] font-semibold border"
            style={{
              color: "var(--ink)",
              borderColor: "var(--border-color)",
            }}
          >
            90d
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div
        className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-5 sm:p-6 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        {summary.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden p-4 rounded-[var(--radius-md)] border"
            style={{
              background: "var(--bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-18px] top-[-18px] w-[80px] h-[80px]"
              style={{
                background: `radial-gradient(ellipse at center, ${s.color}22 0%, transparent 70%)`,
              }}
            />
            <div
              className="relative w-8 h-8 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: `${s.color}14`, color: s.color }}
            >
              <s.Icon className="w-4 h-4" strokeWidth={2.25} />
            </div>
            <div
              className="relative mt-3 text-[11px] font-semibold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              {s.label}
            </div>
            <div
              className="relative mt-1 text-[22px] sm:text-[26px] font-bold leading-none tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="relative">
        {/* Table header */}
        <div
          className="hidden md:grid grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)_minmax(0,0.7fr)_minmax(0,0.8fr)_minmax(0,1.1fr)] gap-4 px-5 sm:px-6 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] border-b"
          style={{
            color: "var(--muted)",
            borderColor: "var(--border-color)",
            background: "var(--bg)",
          }}
        >
          <div>Keyword</div>
          <div>Location</div>
          <div>Rank</div>
          <div>Change (30d)</div>
          <div>Monthly volume</div>
        </div>
        <ul>
          {rankings.map((r, idx) => (
            <RankingRow key={r.keyword} ranking={r} last={idx === rankings.length - 1} />
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        className="relative flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-t"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div
          className="text-[11.5px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          Showing <span className="font-semibold" style={{ color: "var(--ink)" }}>6 of 147</span> keywords
        </div>
        <div
          className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold"
          style={{ color: "#10B981" }}
        >
          <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
          <span>89 keywords climbed this month</span>
        </div>
      </div>
    </div>
  )
}

function RankingRow({ ranking, last }: { ranking: Ranking; last: boolean }) {
  const rankColor =
    ranking.rank === 1
      ? "#10B981"
      : ranking.rank <= 3
        ? "#1677FF"
        : ranking.rank <= 10
          ? "#F59E0B"
          : "#64748B"

  return (
    <li
      className={`grid grid-cols-[minmax(0,1.8fr)_minmax(0,0.8fr)_minmax(0,1fr)] md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)_minmax(0,0.7fr)_minmax(0,0.8fr)_minmax(0,1.1fr)] gap-x-4 gap-y-1 items-center px-5 sm:px-6 py-3.5 ${last ? "" : "border-b"}`}
      style={{ borderColor: "var(--border-color)" }}
    >
      {/* Keyword */}
      <div className="col-span-2 md:col-span-1 min-w-0">
        <div
          className="text-[14px] font-semibold truncate"
          style={{ color: "var(--ink)" }}
        >
          {ranking.keyword}
        </div>
        <div
          className="mt-0.5 text-[11.5px] font-medium truncate"
          style={{ color: "var(--muted)" }}
        >
          yourbusiness.com{ranking.url}
        </div>
      </div>

      {/* Location */}
      <div className="hidden md:block">
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
        >
          {ranking.location}
        </span>
      </div>

      {/* Rank */}
      <div>
        <span
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[var(--radius-xs)] text-[13px] font-bold"
          style={{ background: `${rankColor}14`, color: rankColor }}
        >
          #{ranking.rank}
        </span>
      </div>

      {/* Change */}
      <div className="flex items-center gap-1 text-[13px] font-semibold" style={{ color: "#10B981" }}>
        <ArrowUp className="w-3.5 h-3.5" strokeWidth={2.75} />
        <span>{ranking.change}</span>
      </div>

      {/* Volume */}
      <div className="col-span-3 md:col-span-1 flex items-center gap-2">
        <div
          className="relative flex-1 h-1.5 rounded-full overflow-hidden"
          style={{ background: "#E5EAF2" }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${Math.min(100, Math.max(10, ranking.volumePct))}%`,
              background:
                "linear-gradient(90deg, var(--accent) 0%, var(--cyan) 100%)",
            }}
          />
        </div>
        <div
          className="text-[11.5px] font-semibold tabular-nums shrink-0"
          style={{ color: "var(--ink)" }}
        >
          {ranking.volume}/mo
        </div>
      </div>
    </li>
  )
}
