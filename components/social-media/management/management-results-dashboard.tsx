"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, TrendingUp, Wrench, Stethoscope, UtensilsCrossed, HardHat, Sparkles } from "lucide-react"

type Industry = "All" | "Home Services" | "Medical" | "Restaurants" | "Contractors"

const industries: { name: Industry; Icon: typeof Wrench; color: string }[] = [
  { name: "All", Icon: Sparkles, color: "#1677FF" },
  { name: "Home Services", Icon: Wrench, color: "#F59E0B" },
  { name: "Medical", Icon: Stethoscope, color: "#22C55E" },
  { name: "Restaurants", Icon: UtensilsCrossed, color: "#EC4899" },
  { name: "Contractors", Icon: HardHat, color: "#EF4444" },
]

type ClientRow = {
  industry: Industry
  industryColor: string
  Icon: typeof Wrench
  name: string
  handle: string
  followersBefore: number
  followersAfter: number
  spark: number[] // 12 points, 0-100
  stats: { label: string; value: string }[]
}

const clients: ClientRow[] = [
  {
    industry: "Home Services",
    industryColor: "#F59E0B",
    Icon: Wrench,
    name: "Home Services Co.",
    handle: "@hvac.daily",
    followersBefore: 4_200,
    followersAfter: 86_400,
    spark: [12, 14, 18, 22, 28, 34, 41, 48, 56, 68, 79, 92],
    stats: [
      { label: "New followers", value: "+82K" },
      { label: "Reach lift", value: "+340%" },
      { label: "Booked jobs/mo", value: "47" },
    ],
  },
  {
    industry: "Medical",
    industryColor: "#22C55E",
    Icon: Stethoscope,
    name: "Wellness Practice",
    handle: "@drsamantha.dpm",
    followersBefore: 1_800,
    followersAfter: 26_100,
    spark: [10, 13, 16, 20, 24, 30, 36, 42, 50, 58, 68, 78],
    stats: [
      { label: "New followers", value: "+24K" },
      { label: "Engagement lift", value: "+180%" },
      { label: "ROAS", value: "3.2x" },
    ],
  },
  {
    industry: "Restaurants",
    industryColor: "#EC4899",
    Icon: UtensilsCrossed,
    name: "Local Restaurant",
    handle: "@thirdcoast.kitchen",
    followersBefore: 6_900,
    followersAfter: 45_300,
    spark: [18, 22, 24, 28, 32, 40, 50, 62, 71, 78, 84, 94],
    stats: [
      { label: "New followers", value: "+38K" },
      { label: "Viral posts", value: "6" },
      { label: "Foot traffic", value: "+22%" },
    ],
  },
  {
    industry: "Contractors",
    industryColor: "#EF4444",
    Icon: HardHat,
    name: "Coastal Builders",
    handle: "@coastal.builders",
    followersBefore: 3_500,
    followersAfter: 38_900,
    spark: [14, 17, 21, 25, 31, 36, 42, 50, 58, 66, 72, 86],
    stats: [
      { label: "New followers", value: "+35K" },
      { label: "Inbound leads/mo", value: "62" },
      { label: "Avg. job size", value: "$48K" },
    ],
  },
]

function formatK(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`
  return `${n}`
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 220
  const h = 50
  const stepX = w / (points.length - 1)
  const coords = points.map((p, i) => {
    const x = i * stepX
    const y = h - ((p - min) / range) * (h - 4) - 2
    return [x, y] as const
  })
  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ")
  const areaPath = `${linePath} L ${w} ${h} L 0 ${h} Z`
  const gradId = `spark-grad-${color.replace("#", "")}`
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="w-full h-[50px]"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End cap */}
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r="3.2"
        fill={color}
      />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r="6"
        fill={color}
        opacity="0.18"
      />
    </svg>
  )
}

export function ManagementResultsDashboard() {
  const [active, setActive] = useState<Industry>("All")
  const visible = clients.filter(
    (c) => active === "All" || c.industry === active,
  )

  return (
    <section
      id="management-results"
      aria-labelledby="management-results-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Real Client Results"
          heading={
            <span id="management-results-heading">
              Real growth, in real{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">industries</span>.
              </span>
            </span>
          }
          paragraph="A live look at the dashboard our team checks every Monday. Anonymized, but the curves are real — pulled from accounts we&rsquo;ve managed end-to-end for 6+ months."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Industry filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {industries.map((ind) => {
              const isActive = active === ind.name
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActive(ind.name)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-all"
                  style={{
                    background: isActive
                      ? `${ind.color}1A`
                      : "var(--surface)",
                    border: isActive
                      ? `1px solid ${ind.color}`
                      : "1px solid var(--border-color)",
                    color: isActive ? ind.color : "var(--ink)",
                    boxShadow: isActive
                      ? `0 4px 14px ${ind.color}33`
                      : "0 1px 2px rgba(17,35,68,0.04)",
                  }}
                  aria-pressed={isActive}
                >
                  <ind.Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
                  {ind.name}
                </button>
              )
            })}
          </div>

          {/* Dashboard panel */}
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 16px 40px var(--shadow-color)",
            }}
          >
            {/* Header bar */}
            <div
              className="flex items-center justify-between px-5 sm:px-7 py-4"
              style={{
                background:
                  "linear-gradient(180deg, #FAFBFD 0%, #F4F7FB 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FBBF24" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#34D399" }} />
                </div>
                <span
                  className="text-[12.5px] font-semibold ml-2"
                  style={{ color: "var(--ink)" }}
                >
                  Client Results · Last 12 months
                </span>
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#15803D",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                {visible.length} active accounts
              </span>
            </div>

            {/* Column header (desktop) */}
            <div
              className="hidden lg:grid items-center px-7 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{
                gridTemplateColumns: "1.6fr 1.2fr 2fr 2.4fr",
                gap: 24,
                color: "var(--muted)",
                background: "var(--bg)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div>Account</div>
              <div>Followers</div>
              <div>12-Month Growth</div>
              <div>Key Metrics</div>
            </div>

            {/* Rows */}
            <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
              {visible.map((c) => (
                <li
                  key={c.name}
                  className="grid items-center gap-5 px-5 sm:px-7 py-5 transition-colors hover:bg-[var(--bg)]"
                  style={{
                    gridTemplateColumns: "1fr",
                  }}
                >
                  <div
                    className="grid items-center gap-4 lg:gap-6"
                    style={{
                      gridTemplateColumns:
                        "minmax(0, 1.6fr) minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 2.4fr)",
                    }}
                  >
                    {/* Account */}
                    <div className="flex items-center gap-3 col-span-full lg:col-span-1">
                      <span
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: `${c.industryColor}1A`,
                          color: c.industryColor,
                          boxShadow: `inset 0 0 0 1px ${c.industryColor}33`,
                        }}
                      >
                        <c.Icon className="w-4.5 h-4.5" strokeWidth={2.25} />
                      </span>
                      <div className="min-w-0">
                        <div
                          className="text-[14.5px] font-bold leading-tight truncate"
                          style={{ color: "var(--ink)" }}
                        >
                          {c.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.08em]"
                            style={{
                              background: `${c.industryColor}1A`,
                              color: c.industryColor,
                            }}
                          >
                            {c.industry}
                          </span>
                          <span
                            className="text-[11px] font-mono truncate"
                            style={{ color: "var(--muted)" }}
                          >
                            {c.handle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Followers */}
                    <div className="hidden lg:block">
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="text-[10.5px] font-mono"
                          style={{ color: "var(--muted)" }}
                        >
                          {formatK(c.followersBefore)}
                        </span>
                        <ArrowRight
                          className="w-3 h-3"
                          strokeWidth={2.5}
                          style={{ color: "var(--muted)" }}
                        />
                        <span
                          className="text-[20px] font-extrabold leading-none"
                          style={{ color: "var(--ink)" }}
                        >
                          {formatK(c.followersAfter)}
                        </span>
                      </div>
                      <div
                        className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold"
                        style={{ color: "#15803D" }}
                      >
                        <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
                        +{(((c.followersAfter - c.followersBefore) / c.followersBefore) * 100).toFixed(0)}%
                      </div>
                    </div>

                    {/* Sparkline */}
                    <div className="col-span-full lg:col-span-1">
                      <Sparkline points={c.spark} color={c.industryColor} />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 col-span-full lg:col-span-1">
                      {c.stats.map((s) => (
                        <div
                          key={s.label}
                          className="px-2.5 py-2 rounded-[var(--radius-sm)]"
                          style={{
                            background: "var(--bg)",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          <div
                            className="text-[14.5px] font-extrabold leading-none"
                            style={{ color: "var(--ink)" }}
                          >
                            {s.value}
                          </div>
                          <div
                            className="text-[10.5px] font-medium mt-1 leading-tight"
                            style={{ color: "var(--muted)" }}
                          >
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Aggregate band */}
            <div
              className="px-5 sm:px-7 py-4 grid grid-cols-3 gap-3 sm:gap-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(22,119,255,0.06) 0%, rgba(22,119,255,0.02) 100%)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              {[
                { v: "180M+", l: "Impressions" },
                { v: "+127K", l: "New followers" },
                { v: "4.2%", l: "Avg engagement" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div
                    className="text-[18px] sm:text-[22px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {m.v}
                  </div>
                  <div
                    className="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em] mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span
              className="text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Want a curve like these on your account?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              Get this for your business
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
