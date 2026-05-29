"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/reveal"
import {
  Eye,
  Navigation2,
  Phone,
  MousePointerClick,
  TrendingUp,
  BarChart3,
} from "lucide-react"

type Sparkline = number[]

function MiniChart({ points, color }: { points: Sparkline; color: string }) {
  const max = Math.max(...points)
  const bars = points.map((p) => (p / max) * 100)
  return (
    <div className="flex items-end gap-1 h-9 mt-3">
      {bars.map((h, idx) => (
        <div
          key={idx}
          className="flex-1 rounded-t-sm transition-all duration-500"
          style={{
            height: `${h}%`,
            background: idx === bars.length - 1 ? color : `${color}55`,
            minHeight: 4,
          }}
        />
      ))}
    </div>
  )
}

type Metric = {
  Icon: typeof Eye
  label: string
  sub: string
  color: string
  value: string
  spark: Sparkline
}

type Range = "7d" | "30d" | "90d"

const data: Record<Range, Metric[]> = {
  "7d": [
    { Icon: Eye, label: "Place card views", sub: "Discovery on Maps & Spotlight", color: "#1677FF", value: "+62%", spark: [10, 14, 19, 24, 30, 38, 46] },
    { Icon: Navigation2, label: "Direction taps", sub: "Routed to you this week", color: "#16A34A", value: "+210", spark: [18, 36, 60, 92, 130, 172, 210] },
    { Icon: Phone, label: "Calls from Maps", sub: "Inbound calls this week", color: "#2B8AFF", value: "+14", spark: [1, 3, 5, 7, 9, 12, 14] },
    { Icon: MousePointerClick, label: "Action conversions", sub: "Booked & ordered", color: "#7C3AED", value: "+9", spark: [1, 2, 3, 5, 6, 8, 9] },
  ],
  "30d": [
    { Icon: Eye, label: "Place card views", sub: "Discovery on Maps & Spotlight", color: "#1677FF", value: "+150%", spark: [18, 30, 44, 60, 78, 100, 124] },
    { Icon: Navigation2, label: "Direction taps", sub: "Routed to you / mo", color: "#16A34A", value: "+560", spark: [60, 130, 210, 300, 400, 480, 560] },
    { Icon: Phone, label: "Calls from Maps", sub: "Inbound calls / mo", color: "#2B8AFF", value: "+41", spark: [4, 9, 15, 22, 29, 35, 41] },
    { Icon: MousePointerClick, label: "Action conversions", sub: "Booked & ordered / mo", color: "#7C3AED", value: "+26", spark: [2, 5, 9, 13, 18, 22, 26] },
  ],
  "90d": [
    { Icon: Eye, label: "Place card views", sub: "Discovery on Maps & Spotlight", color: "#1677FF", value: "+240%", spark: [22, 38, 51, 70, 92, 118, 150] },
    { Icon: Navigation2, label: "Direction taps", sub: "Routed to you / mo", color: "#16A34A", value: "+1,140", spark: [120, 260, 410, 580, 760, 950, 1140] },
    { Icon: Phone, label: "Calls from Maps", sub: "Inbound calls / mo", color: "#2B8AFF", value: "+86", spark: [8, 18, 29, 41, 55, 70, 86] },
    { Icon: MousePointerClick, label: "Action conversions", sub: "Booked & ordered / mo", color: "#7C3AED", value: "+52", spark: [4, 10, 17, 25, 34, 43, 52] },
  ],
}

const ranges: Range[] = ["7d", "30d", "90d"]

export function AppleBusinessResults() {
  const [range, setRange] = useState<Range>("90d")
  const metrics = data[range]

  return (
    <section
      aria-labelledby="apple-business-results-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Location Insights"
          heading={
            <span id="apple-business-results-heading">
              See exactly how customers{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">find and act</span>
              </span>{" "}
              on your listing.
            </span>
          }
          paragraph="Apple Business reports how people discover and interact with you on Maps. We turn that into a plain-English monthly report — so you see leads, not vanity metrics."
        />

        <Reveal className="mt-12">
          <div className="rounded-[var(--radius-xl)] overflow-hidden card-surface">
            {/* panel header */}
            <div
              className="flex items-center justify-between gap-3 px-5 sm:px-7 py-4 flex-wrap"
              style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                  style={{ background: "rgba(22,119,255,0.12)", color: "var(--accent)" }}
                >
                  <BarChart3 className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <span className="text-[14px] font-bold" style={{ color: "var(--ink)" }}>
                  Location Insights
                </span>
              </div>

              {/* range toggle */}
              <div
                className="inline-flex p-1 rounded-full gap-0.5"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
                role="tablist"
                aria-label="Time range"
              >
                {ranges.map((r) => {
                  const on = r === range
                  return (
                    <button
                      key={r}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setRange(r)}
                      className="px-3.5 py-1.5 rounded-full text-[12.5px] font-bold transition-all duration-200 cursor-pointer"
                      style={{
                        background: on ? "linear-gradient(180deg,#2B8AFF,#1677FF)" : "transparent",
                        color: on ? "#fff" : "var(--muted)",
                      }}
                    >
                      {r}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border-color)" }}>
              {metrics.map((m) => (
                <div key={m.label} className="p-6" style={{ background: "var(--surface)" }}>
                  <div className="flex items-center justify-between">
                    <span
                      className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                      style={{ background: `${m.color}1F`, color: m.color }}
                    >
                      <m.Icon className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                    <TrendingUp className="w-4 h-4" strokeWidth={2.5} style={{ color: "#16A34A" }} />
                  </div>
                  <div className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
                    {m.label}
                  </div>
                  <div
                    key={range}
                    className="mt-1 text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] leading-none"
                    style={{ color: "var(--ink)", animation: "fadeInUp 0.4s var(--ease-spring) both" }}
                  >
                    {m.value}
                  </div>
                  <div className="mt-1 text-[12.5px]" style={{ color: "var(--muted)" }}>
                    {m.sub}
                  </div>
                  <MiniChart points={m.spark} color={m.color} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-[12.5px]" style={{ color: "var(--muted)" }}>
          Illustrative ranges from managed local-service profiles. Your numbers
          depend on category, market, and ad spend.
        </p>
      </div>
    </section>
  )
}
