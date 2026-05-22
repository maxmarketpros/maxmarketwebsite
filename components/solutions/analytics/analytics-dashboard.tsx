import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { TrendingUp, ArrowRight } from "lucide-react"

type Channel = { label: string; value: number; color: string; cpl: string }

const channels: Channel[] = [
  { label: "Google Ads", value: 38, color: "#4285F4", cpl: "$27 CPL" },
  { label: "Organic SEO", value: 27, color: "#22C55E", cpl: "$0 CPL" },
  { label: "Meta Ads", value: 18, color: "#1877F2", cpl: "$31 CPL" },
  { label: "Direct / Brand", value: 12, color: "#F59E0B", cpl: "$0 CPL" },
  { label: "Referral", value: 5, color: "#8B5CF6", cpl: "$0 CPL" },
]

type TopPage = { page: string; sessions: number; conversions: number }

const topPages: TopPage[] = [
  { page: "/services/seo", sessions: 2847, conversions: 142 },
  { page: "/", sessions: 1920, conversions: 88 },
  { page: "/services/paid-ads", sessions: 1108, conversions: 64 },
  { page: "/industries/home-services", sessions: 684, conversions: 51 },
]

export function AnalyticsDashboard() {
  return (
    <section aria-labelledby="analytics-dashboard-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.11) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Sample Client Dashboard"
          heading={
            <span id="analytics-dashboard-heading">
              A dashboard that tells you what's{" "}
              <span className="accent-underline">
                actually <span className="whitespace-nowrap">working.</span>
              </span>
            </span>
          }
          paragraph="Live-data excerpt from a home-services client's Looker Studio report. Revenue, channels, top pages — at a glance."
        />

        <div className="mt-14" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <div
            className="card-surface relative overflow-hidden p-5 sm:p-6 lg:p-8"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
                <div>
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    Monthly Executive Report
                  </div>
                  <div className="text-[17px] sm:text-[18px] font-bold" style={{ color: "var(--ink)" }}>
                    March 2026 · Home Services Client
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: "#22C55E14", color: "#16A34A" }}>
                  <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
                  +41% MoM
                </div>
              </div>

              {/* KPI tiles */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <KpiTile label="Sessions" value="11,482" delta="+18%" color="#1677FF" />
                <KpiTile label="Leads" value="312" delta="+41%" color="#22C55E" />
                <KpiTile label="Booked Jobs" value="84" delta="+29%" color="#F59E0B" />
                <KpiTile label="Revenue" value="$47.2K" delta="+52%" color="#8B5CF6" />
              </div>

              {/* Main content grid */}
              <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 sm:gap-5">
                {/* Line chart card */}
                <div
                  className="rounded-[var(--radius-md)] border p-4"
                  style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[11.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      Revenue trend · 12 months
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold" style={{ color: "#16A34A" }}>
                      <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
                      Climbing
                    </div>
                  </div>
                  <svg viewBox="0 0 400 140" className="w-full h-[120px] sm:h-[160px]" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1677FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Gridlines */}
                    {[0, 1, 2, 3].map((i) => (
                      <line key={i} x1="0" x2="400" y1={30 + i * 28} y2={30 + i * 28} stroke="#DCE6F2" strokeWidth="0.5" strokeDasharray="3 3" />
                    ))}
                    {/* Area */}
                    <path
                      d="M0,110 C30,100 60,90 90,95 C120,100 150,80 180,70 C210,60 240,55 270,45 C300,38 330,25 360,20 C380,16 400,12 400,12 L400,140 L0,140 Z"
                      fill="url(#revGrad)"
                    />
                    {/* Line */}
                    <path
                      d="M0,110 C30,100 60,90 90,95 C120,100 150,80 180,70 C210,60 240,55 270,45 C300,38 330,25 360,20 C380,16 400,12 400,12"
                      fill="none"
                      stroke="#1677FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* End point */}
                    <circle cx="400" cy="12" r="4" fill="#1677FF" />
                    <circle cx="400" cy="12" r="7" fill="#1677FF" opacity="0.2" />
                  </svg>
                </div>

                {/* Channel donut */}
                <div
                  className="rounded-[var(--radius-md)] border p-4"
                  style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] mb-3" style={{ color: "var(--muted)" }}>
                    Leads by channel
                  </div>

                  <DonutChart channels={channels} />

                  <ul className="mt-4 space-y-1.5">
                    {channels.map((c) => (
                      <li key={c.label} className="flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                        <span className="flex-1 font-semibold" style={{ color: "var(--ink)" }}>{c.label}</span>
                        <span className="font-bold" style={{ color: "var(--ink)" }}>{c.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top pages table */}
              <div
                className="mt-5 rounded-[var(--radius-md)] border overflow-hidden"
                style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
              >
                <div className="px-4 py-3 border-b" style={{ borderColor: "var(--border-color)" }}>
                  <div className="text-[11.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                    Top converting pages
                  </div>
                </div>
                <div>
                  {topPages.map((p, i) => (
                    <div
                      key={p.page}
                      className="px-4 py-2.5 flex items-center justify-between gap-3"
                      style={{ borderTop: i === 0 ? "none" : "1px solid var(--border-color)" }}
                    >
                      <span className="text-[12px] font-semibold truncate min-w-0 flex-1" style={{ color: "var(--ink)" }}>
                        {p.page}
                      </span>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                          {p.sessions.toLocaleString()} sessions
                        </span>
                        <span className="text-[11px] font-bold" style={{ color: "#16A34A" }}>
                          {p.conversions} conv
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/services/paid-ads">
            Pair with paid ads for attribution
          </SecondaryButton>
          <a href="/services/seo" className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold group" style={{ color: "var(--accent)" }}>
            Or SEO for organic tracking
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function KpiTile({ label, value, delta, color }: { label: string; value: string; delta: string; color: string }) {
  return (
    <div
      className="rounded-[var(--radius-sm)] border p-3"
      style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
    >
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-4 rounded-full" style={{ background: color }} />
        <div className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          {label}
        </div>
      </div>
      <div className="mt-1.5 text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] leading-none" style={{ color: "var(--ink)" }}>
        {value}
      </div>
      <div className="mt-1 text-[11px] font-bold" style={{ color: "#16A34A" }}>
        {delta}
      </div>
    </div>
  )
}

function DonutChart({ channels }: { channels: Channel[] }) {
  const total = channels.reduce((sum, c) => sum + c.value, 0)
  const circumference = 2 * Math.PI * 45
  let offset = 0

  return (
    <div className="relative mx-auto w-[130px] h-[130px]">
      <svg viewBox="0 0 110 110" className="w-full h-full transform -rotate-90">
        {channels.map((c) => {
          const ratio = c.value / total
          const dash = ratio * circumference
          const el = (
            <circle
              key={c.label}
              cx="55"
              cy="55"
              r="45"
              fill="none"
              stroke={c.color}
              strokeWidth="12"
              strokeDasharray={`${dash} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          )
          offset += dash
          return el
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Total
        </div>
        <div className="text-[19px] font-bold" style={{ color: "var(--ink)" }}>
          312
        </div>
        <div className="text-[9px]" style={{ color: "var(--muted)" }}>leads</div>
      </div>
    </div>
  )
}
