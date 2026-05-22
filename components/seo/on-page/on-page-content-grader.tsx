import { SectionHeader } from "@/components/ui/section-header"
import { Check, TrendingUp } from "lucide-react"

const dimensions = [
  {
    label: "Readability",
    desc: "Flesch score, sentence length, paragraph depth, active voice ratio.",
  },
  {
    label: "Keyword coverage",
    desc: "Primary + semantic siblings + LSI terms against a target query set.",
  },
  {
    label: "E-E-A-T",
    desc: "Author schema, credentials, updated date, trust signals, citations.",
  },
  {
    label: "Internal links",
    desc: "Semantic anchor density, pillar/cluster topology, outbound flow.",
  },
  {
    label: "Semantic completeness",
    desc: "Named-entity coverage vs. top-10 competing pages for the query.",
  },
]

const subScores = [
  { label: "Readability", value: 91, color: "#10B981" },
  { label: "Keyword coverage", value: 78, color: "#1677FF" },
  { label: "E-E-A-T", value: 85, color: "#10B981" },
  { label: "Internal links", value: 72, color: "#F59E0B" },
  { label: "Semantic", value: 84, color: "#1677FF" },
]

type Cov = "full" | "partial" | "missing"
const keywordMatrix: { kw: string; cov: Cov; count: number }[] = [
  { kw: "on-page SEO", cov: "full", count: 18 },
  { kw: "title tag optimization", cov: "full", count: 9 },
  { kw: "meta description", cov: "full", count: 6 },
  { kw: "schema markup", cov: "full", count: 11 },
  { kw: "internal linking", cov: "partial", count: 4 },
  { kw: "heading hierarchy", cov: "partial", count: 3 },
  { kw: "E-E-A-T signals", cov: "partial", count: 2 },
  { kw: "topical authority", cov: "missing", count: 0 },
]

function covColor(cov: Cov) {
  return cov === "full" ? "#10B981" : cov === "partial" ? "#F59E0B" : "#EF4444"
}
function covLabel(cov: Cov) {
  return cov === "full" ? "Covered" : cov === "partial" ? "Partial" : "Missing"
}

export function OnPageContentGrader() {
  return (
    <section
      id="on-page-content-grader"
      aria-labelledby="on-page-grader-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Content grader"
          heading={
            <span id="on-page-grader-heading">
              How we{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">score</span>
              </span>{" "}
              every page before it ships.
            </span>
          }
          paragraph="Every page in an on-page SEO engagement earns a content score against a target query set. If it&rsquo;s below 80, we don&rsquo;t publish — we tune and re-score. Here&rsquo;s what goes in."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: 5 dimensions check list */}
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Five scoring dimensions
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              The grader is opinionated. It rewards pages that cover a query
              fully, cite real expertise, and link semantically — the same
              things Google rewards.
            </p>
            <ul className="mt-6 space-y-4">
              {dimensions.map((d) => (
                <li key={d.label} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                      color: "#fff",
                      boxShadow: "0 2px 6px rgba(22,119,255,0.35)",
                    }}
                  >
                    <Check className="w-3 h-3" strokeWidth={3.5} />
                  </span>
                  <div>
                    <div
                      className="text-[15px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {d.label}
                    </div>
                    <div
                      className="mt-0.5 text-[14px] leading-[1.55]"
                      style={{ color: "var(--muted)" }}
                    >
                      {d.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: dashboard mock */}
          <GraderDashboard />
        </div>
      </div>
    </section>
  )
}

function GraderDashboard() {
  const score = 82
  const radius = 76
  const circumference = 2 * Math.PI * radius
  const strokeOffset = circumference - (score / 100) * circumference

  return (
    <div
      className="card-surface overflow-hidden"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Header */}
      <div
        className="px-5 sm:px-6 py-4 flex items-center justify-between border-b"
        style={{
          background: "linear-gradient(180deg, #F7F9FC 0%, #EEF3FA 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#10B981" }}
          />
          <span
            className="text-[12px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Content Grader · Page: /on-page-seo
          </span>
        </div>
        <span
          className="text-[11px] font-mono"
          style={{ color: "var(--muted)" }}
        >
          Query set: 12
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Gauge */}
        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
          <div className="relative shrink-0">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <defs>
                <linearGradient id="graderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2B8AFF" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="rgba(11,19,43,0.08)"
                strokeWidth="12"
              />
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="url(#graderGrad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                transform="rotate(-90 90 90)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-[44px] font-bold leading-none"
                style={{ color: "var(--ink)" }}
              >
                {score}
              </span>
              <span
                className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "var(--muted)" }}
              >
                Content Score
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-[180px]">
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
              style={{
                background: "rgba(16,185,129,0.12)",
                color: "#059669",
              }}
            >
              <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
              +12 vs. before
            </div>
            <div
              className="mt-3 text-[15px] font-bold"
              style={{ color: "var(--ink)" }}
            >
              Ready to publish
            </div>
            <div
              className="mt-1 text-[13px] leading-[1.5]"
              style={{ color: "var(--muted)" }}
            >
              Crossed 80 — shipped with 2 follow-up tunes flagged for the
              next quarterly refresh.
            </div>
          </div>
        </div>

        {/* Sub-score bars */}
        <div
          className="mt-6 pt-5 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Sub-scores
          </div>
          <div className="mt-3 space-y-2.5">
            {subScores.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className="w-[120px] text-[12.5px] font-medium shrink-0"
                  style={{ color: "var(--ink)" }}
                >
                  {s.label}
                </div>
                <div
                  className="flex-1 h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(11,19,43,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.value}%`,
                      background: s.color,
                      transition: "width 0.6s ease-out",
                    }}
                  />
                </div>
                <div
                  className="w-[30px] text-right text-[12px] font-mono font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword matrix */}
        <div
          className="mt-6 pt-5 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center justify-between">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--muted)" }}
            >
              Keyword coverage
            </div>
            <div className="flex items-center gap-2.5 text-[10.5px]">
              <Legend color="#10B981" label="Covered" />
              <Legend color="#F59E0B" label="Partial" />
              <Legend color="#EF4444" label="Missing" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {keywordMatrix.map((k) => (
              <div
                key={k.kw}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: covColor(k.cov) }}
                    aria-label={covLabel(k.cov)}
                  />
                  <span
                    className="text-[12.5px] truncate"
                    style={{ color: "var(--ink)" }}
                  >
                    {k.kw}
                  </span>
                </div>
                <span
                  className="text-[11px] font-mono shrink-0"
                  style={{ color: "var(--muted)" }}
                >
                  {k.count}×
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 font-medium"
      style={{ color: "var(--muted)" }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  )
}
