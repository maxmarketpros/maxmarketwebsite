import { Pill } from "@/components/ui/pill"
import { ArrowRight, Gauge, Zap } from "lucide-react"

type Metric = {
  label: string
  value: string
  suffix?: string
  caption: string
  color: string
}

const metrics: Metric[] = [
  { label: "Lighthouse", value: "97", caption: "avg. score", color: "#10B981" },
  { label: "LCP", value: "1.1", suffix: "s", caption: "on 4G mobile", color: "#1677FF" },
  { label: "CLS", value: "0.02", caption: "layout shift", color: "#8B5CF6" },
  { label: "INP", value: "180", suffix: "ms", caption: "interaction delay", color: "#F59E0B" },
]

export function WebPerformance() {
  return (
    <section aria-labelledby="web-performance-heading" className="relative">
      <div className="section-container section-y">
        <div
          className="relative overflow-hidden card-surface p-6 sm:p-10 lg:p-12"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-15%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.12) 0%, rgba(16,185,129,0.08) 40%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-15%] w-[480px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div>
              <Pill>
                <Zap className="w-3.5 h-3.5" />
                Core Web Vitals
              </Pill>

              <h2
                id="web-performance-heading"
                className="mt-5 text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Websites that load in under a{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">second</span>.
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.6] max-w-[480px]"
                style={{ color: "var(--muted)" }}
              >
                Google ranks fast sites higher and customers wait about 3 seconds
                before bouncing. We ship every build with a Lighthouse benchmark
                and iterate until green across the board.
              </p>

              <div className="mt-7">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[15.5px] font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  See a full performance report
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Right: metrics card */}
            <div className="relative">
              <div
                className="relative rounded-[var(--radius-lg)] p-5 sm:p-6 border"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(247,250,252,0.9) 0%, rgba(255,255,255,0.95) 100%)",
                  borderColor: "var(--border-color)",
                  boxShadow: "0 10px 40px rgba(11,19,43,0.08)",
                }}
              >
                {/* header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex items-center gap-2 text-[12.5px] font-semibold"
                    style={{ color: "var(--muted)" }}
                  >
                    <Gauge
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                      strokeWidth={2.25}
                    />
                    Lighthouse score trend
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#059669",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#10B981" }}
                    />
                    +34 avg.
                  </span>
                </div>

                {/* sparkline chart */}
                <Sparkline />

                {/* stats grid */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-[var(--radius-sm)] p-3 border"
                      style={{
                        borderColor: "var(--border-color)",
                        background: "#fff",
                      }}
                    >
                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.08em]"
                        style={{ color: m.color }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="mt-1 text-[26px] sm:text-[28px] font-bold leading-none tracking-[-0.03em]"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.value}
                        {m.suffix && (
                          <span
                            className="text-[15px] font-semibold ml-0.5"
                            style={{ color: "var(--muted)" }}
                          >
                            {m.suffix}
                          </span>
                        )}
                      </div>
                      <div
                        className="mt-1 text-[11.5px] font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        {m.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sparkline() {
  // before/after shape — left low, right high
  const before = [38, 42, 55, 48, 52, 61]
  const after = [62, 70, 85, 88, 93, 97]
  const w = 320
  const h = 110
  const pad = 6

  const toPath = (vals: number[]) => {
    const max = 100
    const step = (w - pad * 2) / (vals.length - 1)
    return vals
      .map((v, i) => {
        const x = pad + i * step
        const y = h - pad - ((v / max) * (h - pad * 2))
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
      })
      .join(" ")
  }

  const afterPath = toPath(after)
  const beforePath = toPath(before)

  const afterArea = `${afterPath} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`

  return (
    <div
      className="relative w-full rounded-[var(--radius-sm)] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(22,119,255,0.04) 0%, rgba(16,185,129,0.03) 100%)",
        border: "1px solid var(--border-color)",
        aspectRatio: `${w} / ${h}`,
      }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={pad}
            y1={pad + (h - pad * 2) * t}
            x2={w - pad}
            y2={pad + (h - pad * 2) * t}
            stroke="rgba(17,35,68,0.06)"
            strokeDasharray="3 3"
          />
        ))}
        {/* before (dashed red-ish) */}
        <path
          d={beforePath}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
        {/* after fill */}
        <path d={afterArea} fill="url(#sparkFill)" />
        {/* after line */}
        <path
          d={afterPath}
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* endpoint dot */}
        <circle
          cx={w - pad}
          cy={h - pad - ((after[after.length - 1] / 100) * (h - pad * 2))}
          r="4"
          fill="#10B981"
        />
        <circle
          cx={w - pad}
          cy={h - pad - ((after[after.length - 1] / 100) * (h - pad * 2))}
          r="8"
          fill="#10B981"
          opacity="0.18"
        />
      </svg>

      {/* legend */}
      <div className="absolute bottom-1.5 left-2 flex items-center gap-3 text-[10.5px] font-semibold">
        <span className="inline-flex items-center gap-1.5" style={{ color: "#B45309" }}>
          <span
            className="w-3 h-[2px] rounded"
            style={{ background: "#F59E0B" }}
          />
          Before
        </span>
        <span className="inline-flex items-center gap-1.5" style={{ color: "#047857" }}>
          <span
            className="w-3 h-[2px] rounded"
            style={{ background: "#10B981" }}
          />
          After Max Market Pros
        </span>
      </div>
    </div>
  )
}
