import { PrimaryButton } from "@/components/ui/primary-button"
import { Pill } from "@/components/ui/pill"
import {
  TrendingUp,
  Target,
  DollarSign,
  MousePointerClick,
  Users,
} from "lucide-react"

const metrics = [
  {
    Icon: Target,
    number: "4.7×",
    label: "average return on ad spend across all active campaigns",
    color: "#10B981",
  },
  {
    Icon: DollarSign,
    number: "–38%",
    label: "year-over-year cost-per-lead reduction for retained clients",
    color: "#F59E0B",
  },
  {
    Icon: MousePointerClick,
    number: "6.2%",
    label: "average conversion rate on landing pages we optimize",
    color: "#1677FF",
  },
  {
    Icon: Users,
    number: "12.4k+",
    label: "qualified leads generated across client ad accounts in the last 12 months",
    color: "#E1306C",
  },
]

export function PaidAdsResults() {
  return (
    <section
      id="paid-ads-results"
      aria-labelledby="paid-ads-results-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[50%] translate-x-[-50%] w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div
          className="card-surface relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-[60%] h-full"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(16,185,129,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 w-[50%] h-[60%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 20% 80%, rgba(245,158,11,0.10) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left: copy */}
            <div>
              <Pill>
                <TrendingUp className="w-3.5 h-3.5" />
                Real ROI
              </Pill>
              <h2
                id="paid-ads-results-heading"
                className="mt-5 text-[30px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Ad spend that{" "}
                <span className="text-gradient">pays you back</span>.
              </h2>
              <p
                className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[520px]"
                style={{ color: "var(--muted)" }}
              >
                Clicks are vanity, conversions are strategy, revenue is the
                scoreboard. We optimize every campaign against the one metric
                that matters: qualified revenue from paid ads.
              </p>

              <div className="mt-8">
                <PrimaryButton size="lg" asLink href="#contact">
                  Get your ROAS forecast
                </PrimaryButton>
              </div>
            </div>

            {/* Right: metric cards + dual-line chart */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="relative overflow-hidden rounded-[var(--radius-md)] p-5 border"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-[-20px] top-[-20px] w-[90px] h-[90px]"
                    style={{
                      background: `radial-gradient(ellipse at center, ${m.color}22 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <div
                      className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                      style={{
                        background: `${m.color}14`,
                        color: m.color,
                      }}
                    >
                      <m.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </div>
                    <div
                      className="mt-3 text-[26px] sm:text-[30px] font-bold leading-none tracking-[-0.02em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.number}
                    </div>
                    <p
                      className="mt-2 text-[12.5px] sm:text-[13px] leading-[1.4]"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}

              {/* Dual-line Spend vs. Revenue chart — spans full width */}
              <div
                className="col-span-2 relative overflow-hidden rounded-[var(--radius-md)] p-5 border"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="text-[12.5px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    12-month spend vs. revenue
                  </div>
                  <div
                    className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "#10B98114",
                      color: "#10B981",
                    }}
                  >
                    +312% revenue
                  </div>
                </div>
                <svg
                  viewBox="0 0 320 80"
                  className="w-full h-[68px]"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="revFillFull"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Revenue line (green, climbing) */}
                  <path
                    d="M0,65 C30,62 60,58 90,50 C120,42 150,44 180,30 C210,16 240,18 270,8 C285,5 300,4 320,3 L320,80 L0,80 Z"
                    fill="url(#revFillFull)"
                  />
                  <path
                    d="M0,65 C30,62 60,58 90,50 C120,42 150,44 180,30 C210,16 240,18 270,8 C285,5 300,4 320,3"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Spend line (amber, flat-ish, dashed) */}
                  <path
                    d="M0,70 C30,68 60,68 90,66 C120,64 150,62 180,60 C210,58 240,56 270,55 C285,55 300,54 320,54"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                    strokeLinecap="round"
                  />
                </svg>
                {/* legend */}
                <div className="mt-3 flex items-center gap-4 text-[11.5px] font-semibold">
                  <span className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                    <span
                      className="w-3 h-[2.5px] rounded-full"
                      style={{ background: "#10B981" }}
                    />
                    Revenue
                  </span>
                  <span className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                    <span
                      className="w-3 h-[2px] rounded-full"
                      style={{
                        background:
                          "repeating-linear-gradient(90deg, #F59E0B 0 3px, transparent 3px 6px)",
                      }}
                    />
                    Ad Spend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
