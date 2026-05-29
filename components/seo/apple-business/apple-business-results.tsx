import { SectionHeader } from "@/components/ui/section-header"
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
          className="flex-1 rounded-t-sm"
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

const metrics = [
  {
    Icon: Eye,
    label: "Place card views",
    value: "+240%",
    sub: "Discovery on Maps & Spotlight",
    color: "#1677FF",
    spark: [22, 38, 51, 70, 92, 118, 150],
  },
  {
    Icon: Navigation2,
    label: "Direction taps",
    value: "+1,140",
    sub: "Customers routed to you / mo",
    color: "#16A34A",
    spark: [120, 260, 410, 580, 760, 950, 1140],
  },
  {
    Icon: Phone,
    label: "Calls from Maps",
    value: "+86",
    sub: "Inbound calls / mo",
    color: "#2B8AFF",
    spark: [8, 18, 29, 41, 55, 70, 86],
  },
  {
    Icon: MousePointerClick,
    label: "Action conversions",
    value: "+52",
    sub: "Booked & ordered / mo",
    color: "#7C3AED",
    spark: [4, 10, 17, 25, 34, 43, 52],
  },
]

export function AppleBusinessResults() {
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

        {/* Dashboard panel */}
        <div
          className="mt-12 rounded-[var(--radius-xl)] overflow-hidden card-surface"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* panel header */}
          <div
            className="flex items-center justify-between px-5 sm:px-7 py-4"
            style={{
              background: "var(--bg)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                style={{ background: "rgba(22,119,255,0.12)", color: "var(--accent)" }}
              >
                <BarChart3 className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span
                className="text-[14px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Location Insights
              </span>
            </div>
            <span
              className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full hidden xs:inline"
              style={{ background: "var(--surface)", border: "1px solid var(--border-color)", color: "var(--muted)" }}
            >
              Last 90 days
            </span>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border-color)" }}>
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className="p-6"
                style={{
                  background: "var(--surface)",
                  animation: `fadeInUp 0.6s ease-out ${0.08 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                    style={{ background: `${m.color}1F`, color: m.color }}
                  >
                    <m.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <TrendingUp
                    className="w-4 h-4"
                    strokeWidth={2.5}
                    style={{ color: "#16A34A" }}
                  />
                </div>
                <div
                  className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.06em]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.label}
                </div>
                <div
                  className="mt-1 text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {m.value}
                </div>
                <div
                  className="mt-1 text-[12.5px]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.sub}
                </div>
                <MiniChart points={m.spark} color={m.color} />
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-5 text-center text-[12.5px]"
          style={{ color: "var(--muted)" }}
        >
          Illustrative ranges from managed local-service profiles. Your numbers
          depend on category, market, and ad spend.
        </p>
      </div>
    </section>
  )
}
