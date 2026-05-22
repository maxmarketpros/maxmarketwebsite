import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { TrendingUp, Gauge, Search, Eye, ShieldCheck } from "lucide-react"

type Score = { label: string; before: number; after: number }

const scores: Score[] = [
  { label: "Performance", before: 41, after: 94 },
  { label: "SEO", before: 67, after: 98 },
  { label: "Accessibility", before: 72, after: 96 },
  { label: "Best Practices", before: 75, after: 100 },
]

const vitals = [
  { metric: "LCP", before: "4.8s", after: "1.6s", unit: "Largest Contentful Paint" },
  { metric: "CLS", before: "0.28", after: "0.02", unit: "Cumulative Layout Shift" },
  { metric: "INP", before: "412ms", after: "94ms", unit: "Interaction to Next Paint" },
  { metric: "TTFB", before: "1.4s", after: "0.4s", unit: "Time to First Byte" },
]

function scoreColor(n: number) {
  if (n >= 90) return "#10B981"
  if (n >= 50) return "#F59E0B"
  return "#EF4444"
}

function ScoreRing({ value, label }: { value: number; label: string }) {
  const radius = 32
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  const color = scoreColor(value)
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[80px] h-[80px]">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(11,19,43,0.10)"
            strokeWidth="6"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center text-[20px] font-extrabold"
          style={{ color, fontFamily: "Outfit, sans-serif" }}
        >
          {value}
        </div>
      </div>
      <span
        className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-center"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </span>
    </div>
  )
}

function ScorecardCard({
  title,
  subtitle,
  values,
  variant,
}: {
  title: string
  subtitle: string
  values: number[]
  variant: "before" | "after"
}) {
  const isBefore = variant === "before"
  return (
    <div
      className="relative overflow-hidden p-5 sm:p-6"
      style={{
        borderRadius: "var(--radius-lg)",
        background: isBefore
          ? "linear-gradient(180deg, #FFFFFF 0%, #FFF7F4 100%)"
          : "linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)",
        border: `1px solid ${isBefore ? "rgba(239,68,68,0.30)" : "rgba(16,185,129,0.32)"}`,
        boxShadow: isBefore
          ? "0 1px 3px rgba(239,68,68,0.10), 0 12px 32px rgba(239,68,68,0.10)"
          : "0 1px 3px rgba(16,185,129,0.12), 0 12px 32px rgba(16,185,129,0.14)",
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-1">
        <div>
          <div
            className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
            style={{ color: isBefore ? "#B91C1C" : "#047857" }}
          >
            {subtitle}
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.1em]"
          style={{
            background: isBefore ? "rgba(239,68,68,0.10)" : "rgba(16,185,129,0.12)",
            color: isBefore ? "#B91C1C" : "#047857",
            border: `1px solid ${isBefore ? "rgba(239,68,68,0.25)" : "rgba(16,185,129,0.30)"}`,
          }}
        >
          <Gauge className="w-3 h-3" strokeWidth={2.75} />
          Lighthouse
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {scores.map((s, i) => (
          <ScoreRing key={s.label} value={values[i]} label={s.label} />
        ))}
      </div>
    </div>
  )
}

const vitalIcons = [Eye, TrendingUp, Search, ShieldCheck]

export function GoDaddySpeedSeoScorecard() {
  const totalLift =
    scores.reduce((sum, s) => sum + (s.after - s.before), 0) / scores.length
  return (
    <section
      id="godaddy-scorecard"
      aria-labelledby="godaddy-scorecard-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(27,219,219,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Speed & SEO scorecard"
          heading={
            <span id="godaddy-scorecard-heading">
              The numbers behind a real{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">GoDaddy redesign</span>.
              </span>
            </span>
          }
          paragraph="Most stock GoDaddy templates score in the red on mobile Lighthouse — heavy widgets, uncompressed images, blocking scripts. Here's what we ship on a typical Max Market Pros GoDaddy website design build."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ScorecardCard
            title="Stock GoDaddy template"
            subtitle="Before"
            values={scores.map((s) => s.before)}
            variant="before"
          />

          <div className="hidden lg:flex flex-col items-center justify-center px-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-extrabold uppercase tracking-[0.12em]"
              style={{
                background:
                  "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
                color: "#0B132B",
                boxShadow: "0 4px 14px rgba(27,219,219,0.32)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
              +{Math.round(totalLift)} avg
            </span>
            <span
              className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-center max-w-[120px]"
              style={{ color: "var(--muted)" }}
            >
              points lifted across all four
            </span>
          </div>
          <div className="lg:hidden flex items-center justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-extrabold uppercase tracking-[0.12em]"
              style={{
                background:
                  "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
                color: "#0B132B",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />+
              {Math.round(totalLift)} avg points
            </span>
          </div>

          <ScorecardCard
            title="After Max Market Pros"
            subtitle="After"
            values={scores.map((s) => s.after)}
            variant="after"
          />
        </div>

        {/* Core Web Vitals strip */}
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {vitals.map((v, i) => {
            const Icon = vitalIcons[i]
            return (
              <div
                key={v.metric}
                className="card-surface p-4 flex flex-col"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      background: "rgba(27,219,219,0.14)",
                      color: "#0FB3B3",
                    }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {v.metric}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span
                    className="text-[12px] font-bold line-through"
                    style={{ color: "#B91C1C" }}
                  >
                    {v.before}
                  </span>
                  <span
                    className="text-[18px] font-extrabold"
                    style={{ color: "#047857" }}
                  >
                    {v.after}
                  </span>
                </div>
                <div
                  className="mt-1 text-[11px] leading-tight"
                  style={{ color: "var(--muted)" }}
                >
                  {v.unit}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Get a free GoDaddy audit
          </PrimaryButton>
          <a
            href="/services/seo/on-page"
            className="text-[14px] font-semibold inline-flex items-center gap-1 hover:underline"
            style={{ color: "var(--accent)" }}
          >
            See our on-page SEO process →
          </a>
        </div>

        <p
          className="mt-4 text-center text-[12px] max-w-[640px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Sample numbers based on typical service-business GoDaddy redesigns.
          Your actual baseline will be measured during the audit.
        </p>
      </div>
    </section>
  )
}
