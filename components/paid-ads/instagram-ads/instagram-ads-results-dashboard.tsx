import { SectionHeader } from "@/components/ui/section-header"
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  Heart,
  ShieldCheck,
  Play,
  Repeat,
} from "lucide-react"
import { IG_GRADIENT_CSS } from "./instagram-ads-hero"

type Kpi = {
  Icon: typeof DollarSign
  label: string
  before: string
  after: string
  trend: "up" | "down"
  delta: string
}

const kpis: Kpi[] = [
  {
    Icon: DollarSign,
    label: "Cost per lead",
    before: "$84",
    after: "$38",
    trend: "down",
    delta: "−55%",
  },
  {
    Icon: Target,
    label: "Lead volume",
    before: "26",
    after: "142",
    trend: "up",
    delta: "+446%",
  },
  {
    Icon: TrendingUp,
    label: "ROAS",
    before: "1.6×",
    after: "4.2×",
    trend: "up",
    delta: "+162%",
  },
  {
    Icon: Heart,
    label: "Hook rate (3s)",
    before: "12%",
    after: "31%",
    trend: "up",
    delta: "+158%",
  },
]

type CreativeRow = {
  name: string
  type: string
  spend: string
  hookRate: string
  leads: string
  trend: "up" | "down"
}

const topCreatives: CreativeRow[] = [
  {
    name: "&ldquo;AC bill spiked?&rdquo; — vertical hook",
    type: "Reel · 27s",
    spend: "$2,180",
    hookRate: "38%",
    leads: "62",
    trend: "up",
  },
  {
    name: "Sandra UGC whitelist — &ldquo;3 jobs from this Reel&rdquo;",
    type: "Reel · 22s · Whitelist",
    spend: "$1,640",
    hookRate: "34%",
    leads: "47",
    trend: "up",
  },
  {
    name: "Stories: $0 dispatch this week",
    type: "Story · 9:16",
    spend: "$980",
    hookRate: "29%",
    leads: "29",
    trend: "up",
  },
  {
    name: "Before / after bathroom remodel",
    type: "Carousel · 5 cards",
    spend: "$720",
    hookRate: "19%",
    leads: "14",
    trend: "down",
  },
]

const changeLog = [
  { day: "Mon", text: "Swapped 2 fatigued Reels &mdash; CTR was halving week-over-week", color: "#fa7e1e" },
  { day: "Tue", text: "Refreshed retargeting audience window 60d &rarr; 90d", color: "#d62976" },
  { day: "Wed", text: "Shifted 18% spend from Feed &rarr; Reels (CPM 2.1&times; cheaper)", color: "#962fbf" },
  { day: "Fri", text: "Launched whitelist test on @sandra.fixes &mdash; first day CPL $26", color: "#4f5bd5" },
]

export function InstagramAdsResultsDashboard() {
  return (
    <section
      id="instagram-ads-results"
      aria-labelledby="instagram-ads-results-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,41,118,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Reporting"
          heading={
            <span id="instagram-ads-results-heading">
              Reporting you can{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually read
                </span>
                .
              </span>
            </span>
          }
          paragraph="Real account, names redacted. This is what 90 days of consistent Instagram Ads management looks like for a $5K/month home-services Meta spend &mdash; pulled from the live dashboard our team checks every Monday morning."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 16px 40px var(--shadow-color)",
            }}
          >
            {/* IG gradient header bar */}
            <div
              aria-hidden
              className="h-[3px] w-full"
              style={{ background: IG_GRADIENT_CSS }}
            />

            {/* Header */}
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
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "#F87171" }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "#FBBF24" }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "#34D399" }}
                  />
                </div>
                <span
                  className="text-[12.5px] font-semibold ml-2"
                  style={{ color: "var(--ink)" }}
                >
                  IG Ads Manager · Last 90 days · Plumbing client
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
                Live · 4 campaigns
              </span>
            </div>

            {/* KPI tiles */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5 sm:p-7"
              style={{ background: "var(--bg)" }}
            >
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="relative overflow-hidden p-4 rounded-[var(--radius-md)]"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 1px 3px rgba(17,35,68,0.04)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: IG_GRADIENT_CSS,
                        color: "#fff",
                        boxShadow: "0 2px 6px rgba(214,41,118,0.32)",
                      }}
                    >
                      <k.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-extrabold"
                      style={{
                        background: "rgba(34,197,94,0.14)",
                        color: "#15803D",
                      }}
                    >
                      {k.trend === "up" ? (
                        <TrendingUp className="w-3 h-3" strokeWidth={2.75} />
                      ) : (
                        <TrendingDown className="w-3 h-3" strokeWidth={2.75} />
                      )}
                      {k.delta}
                    </span>
                  </div>
                  <div
                    className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {k.label}
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span
                      className="text-[11px] font-mono line-through"
                      style={{ color: "var(--muted)" }}
                    >
                      {k.before}
                    </span>
                    <span
                      className="text-[22px] sm:text-[24px] font-extrabold leading-none tracking-[-0.02em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {k.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Top creative leaderboard */}
            <div
              className="px-5 sm:px-7 py-5 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  Top creative · this week
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(250,126,30,0.10) 0%, rgba(214,41,118,0.10) 100%)",
                    color: "#B83265",
                  }}
                >
                  Frequency capped at 2.4
                </span>
              </div>
              <ul className="space-y-2">
                {topCreatives.map((c) => (
                  <li
                    key={c.name}
                    className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1.6fr_1fr_auto_auto_auto] items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)]"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div className="min-w-0 flex items-center gap-2.5">
                      {/* Story-ring thumb */}
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: IG_GRADIENT_CSS,
                          padding: 1.5,
                        }}
                      >
                        <span
                          className="w-full h-full rounded-full flex items-center justify-center"
                          style={{ background: "#0F1116" }}
                        >
                          <Play
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        </span>
                      </span>
                      <span
                        className="text-[13px] font-semibold truncate"
                        style={{ color: "var(--ink)" }}
                        dangerouslySetInnerHTML={{ __html: c.name }}
                      />
                    </div>
                    <span
                      className="hidden sm:inline-flex text-[11px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.type}
                    </span>
                    <span
                      className="text-[12px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.spend}
                    </span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.hookRate}
                    </span>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-extrabold"
                      style={{
                        background:
                          c.trend === "up"
                            ? "rgba(34,197,94,0.12)"
                            : "rgba(239,68,68,0.10)",
                        color: c.trend === "up" ? "#15803D" : "#B91C1C",
                      }}
                    >
                      {c.leads} leads
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Change log */}
            <div
              className="px-5 sm:px-7 py-5 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Repeat
                  className="w-4 h-4"
                  strokeWidth={2.25}
                  style={{ color: "#B83265" }}
                />
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  What we changed this week
                </span>
              </div>
              <ul className="space-y-2">
                {changeLog.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-start gap-3 text-[13px] leading-[1.5]"
                  >
                    <span
                      className="shrink-0 w-9 px-1 py-0.5 rounded text-[10px] font-bold uppercase tracking-[0.06em] text-center text-white"
                      style={{ background: row.color }}
                    >
                      {row.day}
                    </span>
                    <span
                      style={{ color: "var(--ink)" }}
                      dangerouslySetInnerHTML={{ __html: row.text }}
                    />
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 pt-3 border-t flex items-center justify-between text-[11.5px]"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--muted)",
                }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck
                    className="w-3.5 h-3.5"
                    strokeWidth={2.25}
                    style={{ color: "#15803D" }}
                  />
                  Pixel + CAPI events firing &middot; EMQ 8.7
                </span>
                <a
                  href="/services/paid-ads"
                  className="font-semibold inline-flex items-center gap-1"
                  style={{ color: "#B83265" }}
                >
                  All paid programs
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Want a curve like this on your Instagram Ads account?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#B83265" }}
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
