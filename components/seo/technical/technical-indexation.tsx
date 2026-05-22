import { SectionHeader } from "@/components/ui/section-header"
import { Check, ArrowRight, TrendingUp } from "lucide-react"

const states = [
  { label: "Indexed", color: "#10B981" },
  { label: "Submitted, not indexed", color: "#F59E0B" },
  { label: "Duplicate (canonical)", color: "#F59E0B" },
  { label: "Crawled, not indexed", color: "#F59E0B" },
  { label: "Discovered, not indexed", color: "#EF4444" },
  { label: "Blocked by robots.txt", color: "#94A3B8" },
]

type Row = {
  url: string
  status: "Indexed" | "Duplicate" | "Excluded" | "Noindex"
  reason: string
  color: string
}

const sampleRows: Row[] = [
  {
    url: "/services/seo/technical",
    status: "Indexed",
    reason: "Crawled 2d ago · ranked #4",
    color: "#10B981",
  },
  {
    url: "/services/seo/on-page",
    status: "Indexed",
    reason: "Crawled 1d ago · ranked #3",
    color: "#10B981",
  },
  {
    url: "/blog/?utm_source=x",
    status: "Duplicate",
    reason: "Canonical set to /blog/",
    color: "#F59E0B",
  },
  {
    url: "/old-products/widget",
    status: "Excluded",
    reason: "404 · slated for removal",
    color: "#EF4444",
  },
  {
    url: "/admin/settings",
    status: "Noindex",
    reason: "Blocked in robots.txt",
    color: "#94A3B8",
  },
]

export function TechnicalIndexation() {
  return (
    <section
      id="technical-indexation"
      aria-labelledby="technical-indexation-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[-5%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Indexation"
          heading={
            <span id="technical-indexation-heading">
              Indexation,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">under</span>
              </span>{" "}
              control.
            </span>
          }
          paragraph="Every URL Google knows about lives in one of six coverage states. We move the right URLs into 'Indexed' and prune the rest."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: states + copy */}
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Six states. Six fixes.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              GSC tells you what Google sees, not what to do about it. We
              categorize every URL, then ship the right fix per category.
            </p>

            <ul className="mt-6 space-y-2.5">
              {states.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2.5 text-[14px]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full"
                    style={{
                      background: `${s.color}1F`,
                      color: s.color,
                    }}
                  >
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>

            <p
              className="mt-6 text-[14px] leading-[1.6]"
              style={{ color: "var(--muted)" }}
            >
              Indexation problems often trace back to{" "}
              <a
                href="/services/seo/on-page"
                className="font-semibold underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
                style={{ color: "var(--ink)" }}
              >
                on-page SEO
              </a>{" "}
              (thin content) or{" "}
              <a
                href="/services/seo/off-page"
                className="font-semibold underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
                style={{ color: "var(--ink)" }}
              >
                off-page SEO
              </a>{" "}
              (low authority). We triage all three.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
              style={{ color: "#DC2626" }}
            >
              Talk to a tech SEO strategist
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right: indexation dashboard */}
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b"
              style={{
                background:
                  "linear-gradient(180deg, #FEF2F2 0%, #FFF7ED 100%)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#EF4444",
                    boxShadow: "0 0 0 4px rgba(239,68,68,0.18)",
                  }}
                />
                <span
                  className="text-[12px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  GSC Coverage · maxmarketpros.com
                </span>
              </div>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                1,284 URLs
              </span>
            </div>

            {/* Donut + summary */}
            <div className="px-5 sm:px-6 py-5 flex items-center gap-5 flex-wrap sm:flex-nowrap">
              <Donut />
              <div className="flex-1 min-w-[160px] space-y-1.5">
                <DonutLegend
                  color="#10B981"
                  label="Indexed"
                  count="1,181"
                  pct="92%"
                />
                <DonutLegend
                  color="#F59E0B"
                  label="Duplicate / canonical"
                  count="64"
                  pct="5%"
                />
                <DonutLegend color="#EF4444" label="Excluded" count="39" pct="3%" />
              </div>
            </div>

            {/* Table */}
            <div className="border-t" style={{ borderColor: "var(--border-color)" }}>
              <div
                className="px-5 sm:px-6 py-2.5 grid grid-cols-[1fr_auto_1.1fr] gap-3 text-[10.5px] font-semibold uppercase tracking-[0.08em] border-b"
                style={{
                  background: "#FAFBFE",
                  borderColor: "var(--border-color)",
                  color: "var(--muted)",
                }}
              >
                <span>URL</span>
                <span>Status</span>
                <span>Reason</span>
              </div>
              <div className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                {sampleRows.map((r) => (
                  <div
                    key={r.url}
                    className="px-5 sm:px-6 py-3 grid grid-cols-[1fr_auto_1.1fr] gap-3 items-center text-[12.5px]"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <span
                      className="font-mono truncate"
                      style={{ color: "var(--ink)" }}
                    >
                      {r.url}
                    </span>
                    <span
                      className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10.5px] font-bold"
                      style={{
                        background: `${r.color}1F`,
                        color: r.color,
                      }}
                    >
                      {r.status}
                    </span>
                    <span
                      className="truncate"
                      style={{ color: "var(--muted)" }}
                    >
                      {r.reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-5 sm:px-6 py-3 flex items-center justify-between border-t text-[12.5px]"
              style={{
                background: "#FAFBFE",
                borderColor: "var(--border-color)",
              }}
            >
              <span style={{ color: "var(--muted)" }}>
                After our coverage audit
              </span>
              <span
                className="inline-flex items-center gap-1 font-semibold"
                style={{ color: "#059669" }}
              >
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                +47 URLs indexed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Donut() {
  const r = 42
  const c = 2 * Math.PI * r
  const segments = [
    { pct: 92, color: "#10B981" },
    { pct: 5, color: "#F59E0B" },
    { pct: 3, color: "#EF4444" },
  ]
  let offset = 0
  return (
    <div className="relative shrink-0">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle
          cx="65"
          cy="65"
          r={r}
          fill="none"
          stroke="rgba(11,19,43,0.08)"
          strokeWidth="14"
        />
        {segments.map((s, i) => {
          const dash = (s.pct / 100) * c
          const circle = (
            <circle
              key={i}
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 65 65)"
            />
          )
          offset += dash
          return circle
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-[24px] font-bold leading-none"
          style={{ color: "var(--ink)" }}
        >
          92%
        </span>
        <span
          className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          Indexed
        </span>
      </div>
    </div>
  )
}

function DonutLegend({
  color,
  label,
  count,
  pct,
}: {
  color: string
  label: string
  count: string
  pct: string
}) {
  return (
    <div className="flex items-center gap-2 text-[12.5px]">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: color }}
      />
      <span style={{ color: "var(--ink)" }}>{label}</span>
      <span className="ml-auto font-mono" style={{ color: "var(--muted)" }}>
        {count}
      </span>
      <span
        className="text-[10.5px] font-bold font-mono"
        style={{ color }}
      >
        {pct}
      </span>
    </div>
  )
}
