import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Star,
  TrendingUp,
  MapPin,
  MousePointerClick,
  ArrowRight,
  Phone,
  Navigation,
} from "lucide-react"

const ratingPoints: { day: number; rating: number }[] = [
  { day: 0, rating: 3.9 },
  { day: 2, rating: 3.95 },
  { day: 3, rating: 4.05 },
  { day: 5, rating: 4.15 },
  { day: 7, rating: 4.25 },
  { day: 9, rating: 4.5 },
  { day: 11, rating: 4.55 },
  { day: 13, rating: 4.6 },
  { day: 15, rating: 4.65 },
  { day: 17, rating: 4.7 },
  { day: 19, rating: 4.72 },
  { day: 21, rating: 4.74 },
  { day: 23, rating: 4.76 },
  { day: 25, rating: 4.78 },
  { day: 27, rating: 4.79 },
  { day: 30, rating: 4.8 },
]

const milestones = [
  { day: 3, label: "First 8 reviews land", color: "#1677FF" },
  {
    day: 9,
    label: "Crossed 4.5★ — Google shows rich snippet",
    color: "#22C55E",
  },
  { day: 17, label: "Entered Map Pack for 'HVAC near me'", color: "#F59E0B" },
  { day: 30, label: "+62 reviews · +4 page-1 keywords", color: "#EC4899" },
]

const kpis = [
  {
    Icon: Star,
    label: "Avg rating lift",
    value: "+0.9★",
    sub: "3.9 → 4.8",
    color: "#F59E0B",
  },
  {
    Icon: TrendingUp,
    label: "Reviews per month",
    value: "+62",
    sub: "vs. 4 baseline",
    color: "#22C55E",
  },
  {
    Icon: MapPin,
    label: "Map Pack ranking",
    value: "#1",
    sub: "from #11 in 30 days",
    color: "#1677FF",
  },
  {
    Icon: MousePointerClick,
    label: "Listing CTR",
    value: "+87%",
    sub: "vs. last quarter",
    color: "#EC4899",
  },
]

const mapPackResults = [
  {
    name: "Acme HVAC",
    rating: 4.8,
    count: 1284,
    badge: "Open · Responds quickly",
    highlighted: true,
  },
  { name: "Bay Area Heating Co.", rating: 4.2, count: 412, badge: "Open" },
  { name: "Citywide Climate", rating: 3.9, count: 187, badge: "Closes 5 PM" },
]

export function ReviewLift() {
  // Build the SVG line + area
  const chartW = 880
  const chartH = 240
  const padL = 40
  const padR = 24
  const padT = 24
  const padB = 36
  const innerW = chartW - padL - padR
  const innerH = chartH - padT - padB
  const minR = 3.8
  const maxR = 5.0
  const xFor = (day: number) => padL + (day / 30) * innerW
  const yFor = (r: number) => padT + (1 - (r - minR) / (maxR - minR)) * innerH

  const linePath = ratingPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(p.day)} ${yFor(p.rating)}`)
    .join(" ")
  const areaPath = `${linePath} L ${xFor(30)} ${padT + innerH} L ${padL} ${
    padT + innerH
  } Z`

  return (
    <section
      id="review-lift"
      aria-labelledby="review-lift-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="30-Day Star Lift"
          heading={
            <span id="review-lift-heading">
              From 4.0 to 4.8 — and a{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Map Pack you actually rank in</span>.
              </span>
            </span>
          }
          paragraph="Rating doesn't just look better — it ranks better. Google weights review count, recency, and rating heavily for local search. Here's what 30 days of consistent review generation does to a real home-services account."
        />

        {/* Star lift chart */}
        <div
          className="mt-14 card-surface relative overflow-hidden p-6 sm:p-8"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
            <div>
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Google rating · daily
              </div>
              <div className="flex items-baseline gap-3 mt-1">
                <span
                  className="text-[36px] font-extrabold leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  4.80
                </span>
                <span
                  className="inline-flex items-center gap-1 text-[13px] font-bold"
                  style={{ color: "#15803D" }}
                >
                  <TrendingUp className="w-4 h-4" strokeWidth={2.75} />
                  +0.9 in 30 days
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {milestones.map((m) => (
                <span
                  key={m.day}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
                  style={{
                    background: `${m.color}14`,
                    color: m.color,
                    border: `1px solid ${m.color}33`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: m.color }}
                  />
                  Day {m.day}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto -mx-2 px-2">
            <svg
              viewBox={`0 0 ${chartW} ${chartH}`}
              className="w-full"
              style={{ minWidth: 640, height: "auto" }}
            >
              <defs>
                <linearGradient id="liftFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Y-axis grid */}
              {[3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5.0].map((r) => (
                <g key={r}>
                  <line
                    x1={padL}
                    x2={chartW - padR}
                    y1={yFor(r)}
                    y2={yFor(r)}
                    stroke="rgba(11,19,43,0.06)"
                    strokeWidth={1}
                    strokeDasharray={r === 4.5 ? "4 4" : ""}
                  />
                  <text
                    x={padL - 6}
                    y={yFor(r) + 4}
                    textAnchor="end"
                    fontSize={10}
                    fontFamily="ui-monospace, monospace"
                    fill="var(--muted)"
                  >
                    {r.toFixed(1)}★
                  </text>
                </g>
              ))}

              {/* Area + line */}
              <path d={areaPath} fill="url(#liftFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="#F59E0B"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Milestone markers */}
              {milestones.map((m) => {
                const point = ratingPoints.find((p) => p.day === m.day)
                if (!point) return null
                const cx = xFor(m.day)
                const cy = yFor(point.rating)
                return (
                  <g key={m.day}>
                    <line
                      x1={cx}
                      x2={cx}
                      y1={cy}
                      y2={padT + innerH}
                      stroke={m.color}
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      opacity={0.45}
                    />
                    <circle
                      cx={cx}
                      cy={cy}
                      r={6}
                      fill="#fff"
                      stroke={m.color}
                      strokeWidth={2.5}
                    />
                    <circle cx={cx} cy={cy} r={2} fill={m.color} />
                  </g>
                )
              })}

              {/* X-axis day labels */}
              {[0, 7, 14, 21, 30].map((d) => (
                <text
                  key={d}
                  x={xFor(d)}
                  y={chartH - 12}
                  textAnchor="middle"
                  fontSize={10}
                  fontFamily="ui-monospace, monospace"
                  fill="var(--muted)"
                >
                  Day {d}
                </text>
              ))}
            </svg>
          </div>

          {/* Milestone legend */}
          <ul
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            {milestones.map((m) => (
              <li
                key={m.day}
                className="flex items-center gap-2.5 text-[13px]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[10.5px] font-bold"
                  style={{
                    background: `${m.color}1A`,
                    color: m.color,
                  }}
                >
                  D{m.day}
                </span>
                <span className="font-medium">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* KPI band */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="card-surface p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                  style={{
                    background: `${k.color}14`,
                    color: k.color,
                  }}
                >
                  <k.Icon className="w-4.5 h-4.5" strokeWidth={2.25} />
                </span>
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  {k.label}
                </span>
              </div>
              <div
                className="text-[28px] font-extrabold leading-none"
                style={{ color: k.color }}
              >
                {k.value}
              </div>
              <div
                className="text-[12.5px] font-medium mt-1"
                style={{ color: "var(--muted)" }}
              >
                {k.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Map pack mockup + impact stats */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
          {/* Map pack mockup */}
          <div
            className="card-surface relative overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{
                background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <img
                src={icons8Url("17949", 96)}
                alt="Google"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                className="w-5 h-5 object-contain"
              />
              <span
                className="text-[12px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                hvac repair near me
              </span>
              <span
                className="ml-auto inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-md"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#15803D",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                Live result
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Map Pack — top 3 results
              </div>
              <ul className="space-y-2">
                {mapPackResults.map((r, i) => (
                  <li
                    key={r.name}
                    className="relative flex items-center gap-3 px-3 py-3 rounded-[12px]"
                    style={{
                      background: r.highlighted
                        ? "linear-gradient(90deg, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0.02) 100%)"
                        : "var(--surface)",
                      border: r.highlighted
                        ? "1px solid rgba(245,158,11,0.40)"
                        : "1px solid var(--border-color)",
                    }}
                  >
                    {r.highlighted && (
                      <span
                        aria-hidden
                        className="absolute -left-1 top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-full"
                        style={{ background: "#F59E0B" }}
                      />
                    )}
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                      style={{
                        background: r.highlighted ? "#F59E0B" : "var(--bg)",
                        color: r.highlighted ? "#fff" : "var(--ink)",
                        boxShadow: r.highlighted
                          ? "0 4px 10px rgba(245,158,11,0.30)"
                          : "none",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-[14px] font-bold"
                          style={{ color: "var(--ink)" }}
                        >
                          {r.name}
                        </span>
                        {r.highlighted && (
                          <span
                            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                            style={{
                              background: "rgba(34,197,94,0.16)",
                              color: "#15803D",
                            }}
                          >
                            <TrendingUp className="w-2.5 h-2.5" strokeWidth={2.75} />
                            Up from #11
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="inline-flex items-center gap-1 text-[12px] font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          <span
                            className="text-[13px] font-bold"
                            style={{
                              color:
                                r.rating >= 4.5
                                  ? "#F59E0B"
                                  : r.rating >= 4.0
                                  ? "#0EA5E9"
                                  : "#94A3B8",
                            }}
                          >
                            {r.rating.toFixed(1)}
                          </span>
                          <Star
                            className="w-3 h-3"
                            fill={
                              r.rating >= 4.5
                                ? "#F59E0B"
                                : r.rating >= 4.0
                                ? "#0EA5E9"
                                : "#94A3B8"
                            }
                            strokeWidth={0}
                          />
                          <span
                            className="text-[11.5px]"
                            style={{ color: "var(--muted)" }}
                          >
                            ({r.count})
                          </span>
                        </span>
                        <span
                          className="text-[11.5px]"
                          style={{ color: "var(--muted)" }}
                        >
                          · {r.badge}
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <Phone
                          className="w-3.5 h-3.5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      </span>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <Navigation
                          className="w-3.5 h-3.5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact stats */}
          <div className="flex flex-col gap-4">
            <div
              className="p-5 rounded-[var(--radius-lg)]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)",
                border: "1px solid rgba(245,158,11,0.30)",
              }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: "#B45309" }}
              >
                Why ranking #1 matters
              </div>
              <div
                className="text-[22px] font-extrabold leading-none"
                style={{ color: "var(--ink)" }}
              >
                76%
              </div>
              <div
                className="text-[13.5px] font-medium mt-1"
                style={{ color: "var(--muted)" }}
              >
                of homeowners read reviews <em>before</em> picking a service
                business to call.
              </div>
            </div>

            <div
              className="p-5 rounded-[var(--radius-lg)]"
              style={{
                background:
                  "linear-gradient(180deg, #F0F9FF 0%, #DBEAFE 100%)",
                border: "1px solid rgba(22,119,255,0.30)",
              }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                CTR uplift on listings
              </div>
              <div
                className="text-[22px] font-extrabold leading-none"
                style={{ color: "var(--ink)" }}
              >
                87%
              </div>
              <div
                className="text-[13.5px] font-medium mt-1"
                style={{ color: "var(--muted)" }}
              >
                more clicks for listings showing 4.5★+ vs. those under 4.0★
                (Google internal data, 2024).
              </div>
            </div>

            <PrimaryButton size="lg" asLink href="#contact">
              Get my 30-day projection
            </PrimaryButton>
          </div>
        </div>

        {/* Inline siblings strip */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
          style={{ color: "var(--muted)" }}
        >
          <span className="text-[14px] font-semibold">Pair with →</span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {[
              { label: "Local SEO", href: "/services/seo/local" },
              {
                label: "Social Media Management",
                href: "/services/social-media/management",
              },
              { label: "On-Page SEO", href: "/services/seo/on-page" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12.5px] font-semibold transition-all hover:translate-y-[-1px]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                }}
              >
                {s.label}
                <ArrowRight
                  className="w-3 h-3"
                  strokeWidth={2.5}
                  style={{ color: "var(--accent)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
