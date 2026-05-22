import { SectionHeader } from "@/components/ui/section-header"
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Phone,
  Target,
  ShieldCheck,
} from "lucide-react"

type Kpi = {
  Icon: typeof DollarSign
  label: string
  before: string
  after: string
  trend: "up" | "down"
  delta: string
  color: string
}

const kpis: Kpi[] = [
  {
    Icon: DollarSign,
    label: "Cost per lead",
    before: "$87",
    after: "$41",
    trend: "down",
    delta: "−53%",
    color: "#34A853",
  },
  {
    Icon: Target,
    label: "Conversions",
    before: "28",
    after: "112",
    trend: "up",
    delta: "+300%",
    color: "#1A73E8",
  },
  {
    Icon: TrendingUp,
    label: "ROAS",
    before: "2.1×",
    after: "4.9×",
    trend: "up",
    delta: "+133%",
    color: "#9334EA",
  },
  {
    Icon: ShieldCheck,
    label: "LSA leads",
    before: "12",
    after: "64",
    trend: "up",
    delta: "+433%",
    color: "#15803D",
  },
]

const topTerms = [
  { term: "emergency hvac repair near me", cpl: "$36", calls: 28 },
  { term: "ac installation [city]", cpl: "$44", calls: 19 },
  { term: "furnace replacement cost", cpl: "$52", calls: 14 },
  { term: "hvac maintenance plan", cpl: "$31", calls: 22 },
  { term: "24 hour heating repair", cpl: "$29", calls: 17 },
]

// "Leads by source" donut percentages — Search 41, LSA 38, PMax 14, Maps 7
const donut = [
  { label: "Search", value: 41, color: "#1A73E8" },
  { label: "LSA", value: 38, color: "#34A853" },
  { label: "PMax", value: 14, color: "#9334EA" },
  { label: "Maps", value: 7, color: "#EA4335" },
]

function buildDonutSegments() {
  const r = 38
  const cx = 50
  const cy = 50
  let cumulative = 0
  return donut.map((d) => {
    const start = cumulative
    cumulative += d.value
    const end = cumulative
    const startAngle = (start / 100) * Math.PI * 2 - Math.PI / 2
    const endAngle = (end / 100) * Math.PI * 2 - Math.PI / 2
    const x1 = cx + r * Math.cos(startAngle)
    const y1 = cy + r * Math.sin(startAngle)
    const x2 = cx + r * Math.cos(endAngle)
    const y2 = cy + r * Math.sin(endAngle)
    const largeArc = d.value > 50 ? 1 : 0
    const path = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`
    return { ...d, path }
  })
}

export function GoogleAdsResultsDashboard() {
  const segments = buildDonutSegments()

  return (
    <section
      id="google-ads-results"
      aria-labelledby="google-ads-results-heading"
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
              "radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What 90 days looks like"
          heading={
            <span id="google-ads-results-heading">
              An anonymized account,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">90 days</span> in.
              </span>
            </span>
          }
          paragraph="Real account, names redacted. Here&rsquo;s what consistent Google Ads management produces for a typical $4K/month home-services spend &mdash; pulled straight from the dashboard our team checks every Monday."
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
                  Google Ads · Last 90 days · HVAC client
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
                Live · 5 campaigns
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
                        background: `${k.color}14`,
                        color: k.color,
                      }}
                    >
                      <k.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-extrabold"
                      style={{
                        background:
                          k.trend === "up"
                            ? "rgba(34,197,94,0.14)"
                            : "rgba(34,197,94,0.14)",
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

            {/* Charts row */}
            <div
              className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-0 lg:gap-0 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              {/* CPL trend */}
              <div
                className="px-5 sm:px-7 py-5 lg:border-r"
                style={{ borderColor: "var(--border-color)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div
                      className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "var(--muted)" }}
                    >
                      Cost per lead — 12 weeks
                    </div>
                    <div
                      className="mt-0.5 text-[15px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      $87 → $41 trending down
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-extrabold"
                    style={{
                      background: "rgba(34,197,94,0.14)",
                      color: "#15803D",
                    }}
                  >
                    <TrendingDown className="w-3 h-3" strokeWidth={2.75} />
                    −53%
                  </span>
                </div>
                <svg
                  viewBox="0 0 320 110"
                  className="w-full h-[110px]"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="cpl-fill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid */}
                  {[20, 50, 80].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="320"
                      y2={y}
                      stroke="#E6EBF2"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />
                  ))}
                  {/* CPL line trending down (high → low) */}
                  <path
                    d="M0,16 C30,20 50,28 80,38 C110,48 140,52 170,58 C200,64 230,72 260,82 C285,90 305,94 320,96 L320,110 L0,110 Z"
                    fill="url(#cpl-fill)"
                  />
                  <path
                    d="M0,16 C30,20 50,28 80,38 C110,48 140,52 170,58 C200,64 230,72 260,82 C285,90 305,94 320,96"
                    fill="none"
                    stroke="#15803D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* End cap */}
                  <circle cx="320" cy="96" r="3.5" fill="#15803D" />
                  <circle cx="320" cy="96" r="6.5" fill="#15803D" opacity="0.18" />
                </svg>
                <div
                  className="mt-1 flex items-center justify-between text-[10px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  <span>Wk 1</span>
                  <span>Wk 4</span>
                  <span>Wk 8</span>
                  <span>Wk 12</span>
                </div>
              </div>

              {/* Donut — leads by source */}
              <div className="px-5 sm:px-7 py-5">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  Leads by source
                </div>
                <div className="mt-3 flex items-center gap-5">
                  <div className="relative w-[120px] h-[120px] shrink-0">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      aria-hidden
                    >
                      {segments.map((s) => (
                        <path
                          key={s.label}
                          d={s.path}
                          fill={s.color}
                        />
                      ))}
                      <circle cx="50" cy="50" r="22" fill="var(--surface)" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "var(--muted)" }}
                      >
                        Total
                      </span>
                      <span
                        className="text-[18px] font-extrabold leading-none"
                        style={{ color: "var(--ink)" }}
                      >
                        112
                      </span>
                    </div>
                  </div>
                  <ul className="flex-1 space-y-1.5">
                    {donut.map((d) => (
                      <li
                        key={d.label}
                        className="flex items-center gap-2 text-[12px]"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-sm"
                          style={{ background: d.color }}
                        />
                        <span
                          className="font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          {d.label}
                        </span>
                        <span
                          className="ml-auto font-mono"
                          style={{ color: "var(--muted)" }}
                        >
                          {d.value}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Top search terms */}
            <div
              className="px-5 sm:px-7 py-5 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  Top 5 search terms · last 90 days
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold"
                  style={{
                    background: "rgba(22,119,255,0.10)",
                    color: "var(--accent)",
                  }}
                >
                  Quality Score 3 → 8
                </span>
              </div>
              <ul className="space-y-2">
                {topTerms.map((t) => (
                  <li
                    key={t.term}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)]"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="text-[13px] font-mono truncate"
                      style={{ color: "var(--ink)" }}
                    >
                      {t.term}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[12px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      <Phone
                        className="w-3 h-3"
                        strokeWidth={2.5}
                        style={{ color: "var(--muted)" }}
                      />
                      {t.calls}
                    </span>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-extrabold"
                      style={{
                        background: "rgba(34,197,94,0.12)",
                        color: "#15803D",
                      }}
                    >
                      {t.cpl}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Want a curve like this on your account?
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
