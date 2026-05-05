"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { TrendingUp, Eye, Share2, Clock4 } from "lucide-react"

type Industry = "All" | "Home Services" | "Restaurants" | "Med Spas" | "Contractors"
const industries: Industry[] = ["All", "Home Services", "Restaurants", "Med Spas", "Contractors"]

type Client = {
  name: string
  industry: Exclude<Industry, "All">
  industryColor: string
  watchTime: string
  avgView: string
  shares: string
  spark: number[]
  tags: string[]
}

const clients: Client[] = [
  {
    name: "Atlas HVAC Co.",
    industry: "Home Services",
    industryColor: "#1677FF",
    watchTime: "+312%",
    avgView: "47s",
    shares: "+184%",
    spark: [12, 14, 18, 17, 22, 28, 34, 32, 41, 48, 55, 62],
    tags: ["18 Reels edited", "12 Shorts", "6 ad cuts"],
  },
  {
    name: "Coast Roofing",
    industry: "Home Services",
    industryColor: "#1677FF",
    watchTime: "+248%",
    avgView: "39s",
    shares: "+126%",
    spark: [8, 11, 14, 12, 18, 22, 24, 28, 31, 36, 42, 48],
    tags: ["14 Reels edited", "9 Shorts", "4 ad cuts"],
  },
  {
    name: "Marble Bistro",
    industry: "Restaurants",
    industryColor: "#EC4899",
    watchTime: "+418%",
    avgView: "52s",
    shares: "+412%",
    spark: [6, 8, 12, 18, 24, 32, 41, 52, 64, 72, 84, 96],
    tags: ["22 Reels edited", "16 TikToks", "3 menu launches"],
  },
  {
    name: "Sushi Maru Group",
    industry: "Restaurants",
    industryColor: "#EC4899",
    watchTime: "+288%",
    avgView: "44s",
    shares: "+212%",
    spark: [10, 14, 18, 22, 28, 34, 41, 48, 56, 62, 71, 80],
    tags: ["20 Reels edited", "12 TikToks", "8 chef demos"],
  },
  {
    name: "Lumière Med Spa",
    industry: "Med Spas",
    industryColor: "#A855F7",
    watchTime: "+196%",
    avgView: "41s",
    shares: "+88%",
    spark: [14, 17, 19, 23, 26, 31, 35, 41, 46, 52, 58, 66],
    tags: ["12 Reels edited", "8 Shorts", "10 ad cuts"],
  },
  {
    name: "Rivera Aesthetics",
    industry: "Med Spas",
    industryColor: "#A855F7",
    watchTime: "+224%",
    avgView: "45s",
    shares: "+142%",
    spark: [9, 12, 15, 19, 24, 29, 36, 42, 48, 54, 61, 68],
    tags: ["16 Reels edited", "10 Shorts", "5 ad cuts"],
  },
  {
    name: "Forge Builders",
    industry: "Contractors",
    industryColor: "#22C55E",
    watchTime: "+267%",
    avgView: "54s",
    shares: "+158%",
    spark: [11, 14, 17, 22, 27, 32, 38, 45, 52, 60, 68, 76],
    tags: ["20 Reels edited", "14 Shorts", "8 jobsite walkthroughs"],
  },
  {
    name: "Ridgeline Roofing",
    industry: "Contractors",
    industryColor: "#22C55E",
    watchTime: "+302%",
    avgView: "49s",
    shares: "+196%",
    spark: [10, 13, 16, 19, 24, 30, 36, 42, 50, 58, 65, 74],
    tags: ["18 Reels edited", "12 Shorts", "6 ad cuts"],
  },
]

export function VideoEditingResults() {
  const [filter, setFilter] = useState<Industry>("All")
  const visible =
    filter === "All" ? clients : clients.filter((c) => c.industry === filter)

  return (
    <section
      aria-labelledby="video-editing-results-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Video editing that moves the right metrics"
          heading={
            <span id="video-editing-results-heading">
              30-day video editing results from{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">real clients</span>
              </span>
            </span>
          }
          paragraph="Watch-time, average view duration, and share rate — the metrics that compound on every algorithm. Here's what professional video editing services look like in numbers."
        />

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {industries.map((ind) => {
            const isActive = filter === ind
            return (
              <button
                key={ind}
                type="button"
                onClick={() => setFilter(ind)}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-all"
                style={{
                  background: isActive ? "var(--accent)" : "var(--surface)",
                  border: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border-color)",
                  color: isActive ? "#fff" : "var(--ink)",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(22,119,255,0.30)"
                    : "0 1px 2px rgba(17,35,68,0.04)",
                }}
                aria-pressed={isActive}
              >
                {ind}
              </button>
            )
          })}
        </div>

        {/* Client rows */}
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((c) => (
            <li
              key={c.name}
              className="rounded-[var(--radius-lg)] p-4 sm:p-5 transition-all hover:translate-y-[-1px]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 2px rgba(17,35,68,0.04), 0 6px 18px rgba(17,35,68,0.05)",
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3
                    className="text-[15.5px] font-bold leading-tight truncate"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.name}
                  </h3>
                  <span
                    className="inline-flex items-center mt-1 text-[10.5px] font-extrabold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
                    style={{
                      background: `${c.industryColor}1A`,
                      color: c.industryColor,
                    }}
                  >
                    {c.industry}
                  </span>
                </div>
                <Sparkline data={c.spark} accent={c.industryColor} />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Stat Icon={TrendingUp} label="Watch-time" value={c.watchTime} accent={c.industryColor} />
                <Stat Icon={Clock4} label="Avg view" value={c.avgView} accent={c.industryColor} />
                <Stat Icon={Share2} label="Shares" value={c.shares} accent={c.industryColor} />
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-semibold"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Aggregate strip */}
        <div
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 rounded-[var(--radius-lg)] p-5 sm:p-6"
          style={{
            background:
              "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            color: "#fff",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.20), 0 14px 36px rgba(17,35,68,0.30)",
          }}
        >
          {[
            { v: "2,400+", l: "Videos edited" },
            { v: "40M+", l: "Video views" },
            { v: "+180%", l: "Avg watch-time lift" },
            { v: "47s", l: "Median avg view duration" },
          ].map((m, i) => (
            <div key={i} className="flex flex-col">
              <span
                className="text-[26px] sm:text-[30px] font-extrabold leading-none tracking-[-0.02em]"
                style={{
                  background:
                    "linear-gradient(90deg, #74D3FF 0%, #FFE066 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {m.v}
              </span>
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em] mt-2"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {m.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({
  Icon,
  label,
  value,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  accent: string
}) {
  return (
    <div
      className="flex flex-col items-start px-2.5 py-2 rounded-[10px]"
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border-color)",
      }}
    >
      <span
        className="inline-flex items-center gap-1 text-[9.5px] font-extrabold uppercase tracking-[0.1em]"
        style={{ color: "var(--muted)" }}
      >
        <Icon className="w-3 h-3" strokeWidth={2.5} />
        {label}
      </span>
      <span
        className="text-[15.5px] font-extrabold mt-0.5"
        style={{ color: accent }}
      >
        {value}
      </span>
    </div>
  )
}

function Sparkline({ data, accent }: { data: number[]; accent: string }) {
  const w = 110
  const h = 36
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = w / (data.length - 1)
  const points = data
    .map((v, i) => {
      const x = i * step
      const y = h - ((v - min) / range) * (h - 4) - 2
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
  const lastIdx = data.length - 1
  const lastX = lastIdx * step
  const lastY = h - ((data[lastIdx] - min) / range) * (h - 4) - 2
  const id = `sparkfill-${accent.replace("#", "")}-${Math.round(data[0])}`

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${h} ${points} ${w},${h}`}
        fill={`url(#${id})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="3" fill={accent} />
      <circle cx={lastX} cy={lastY} r="6" fill={accent} fillOpacity="0.18" />
    </svg>
  )
}
