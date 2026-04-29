import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Check,
  TrendingUp,
  Sparkles,
} from "lucide-react"

type Metric = {
  label: string
  before: number
  after: number
  beforeLabel: string
  afterLabel: string
  unit?: string
  accent: string
}

const metrics: Metric[] = [
  {
    label: "Citation rate",
    before: 12,
    after: 84,
    beforeLabel: "12%",
    afterLabel: "84%",
    unit: "%",
    accent: "#0EA5E9",
  },
  {
    label: "Entity presence",
    before: 40,
    after: 96,
    beforeLabel: "40%",
    afterLabel: "96%",
    unit: "%",
    accent: "#8B5CF6",
  },
  {
    label: "Source authority",
    before: 28,
    after: 71,
    beforeLabel: "DR 28",
    afterLabel: "DR 71",
    accent: "#10B981",
  },
  {
    label: "Schema coverage",
    before: 30,
    after: 100,
    beforeLabel: "30%",
    afterLabel: "100%",
    unit: "%",
    accent: "#F59E0B",
  },
  {
    label: "AI Overviews eligibility",
    before: 0,
    after: 100,
    beforeLabel: "Not eligible",
    afterLabel: "Eligible",
    accent: "#EF4444",
  },
]

const improvements = [
  {
    title: "Schema layered across every page",
    note: "LocalBusiness, Service, FAQ, Review",
    href: "/services/seo/technical",
    label: "Technical SEO",
  },
  {
    title: "Service pages rewritten as citable blocks",
    note: "Pricing, areas, FAQs, expert quotes",
    href: "/services/seo/on-page",
    label: "On-page SEO",
  },
  {
    title: "Brand mentions earned across 200+ outlets",
    note: "Yahoo Finance, AP News, MarketWatch",
    href: "/services/seo/press-releases",
    label: "Press releases",
  },
  {
    title: "Authority backlinks built to DR 71",
    note: "Editorial, directory, citation links",
    href: "/services/seo/backlinks",
    label: "Backlinks",
  },
  {
    title: "Local Map Pack tightened to feed AI Overviews",
    note: "GBP, citations, NAP, reviews",
    href: "/services/seo/local",
    label: "Local SEO",
  },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function AiSearchScorecard() {
  return (
    <section
      aria-labelledby="ai-search-scorecard-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Your AI visibility scorecard"
          heading={
            <span id="ai-search-scorecard-heading">
              From invisible to{" "}
              <span className="accent-underline">cited</span>.
            </span>
          }
          paragraph="The before-and-after we deliver to every client. Five metrics, six engines, one clear scorecard you can show your team — and pin to your Slack."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-start">
          {/* LEFT: Scorecard dashboard mock */}
          <div
            className="relative card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.14)",
              animation: "fadeInUp 0.7s ease-out both",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 sm:px-6 py-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(116,211,255,0.10) 0%, rgba(139,92,246,0.06) 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <span
                className="w-10 h-10 rounded-[10px] overflow-hidden flex items-center justify-center shrink-0"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
                }}
              >
                <img
                  src={favicon("maxmarketpros.com", 128)}
                  alt="Brand"
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                  className="w-[22px] h-[22px] object-contain"
                />
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  AI visibility scorecard
                </div>
                <div
                  className="text-[15px] font-bold truncate"
                  style={{ color: "var(--ink)" }}
                >
                  yourbusiness.com
                </div>
              </div>

              {/* Grade transition */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[18px] font-extrabold"
                  style={{
                    background: "rgba(148,163,184,0.18)",
                    color: "#64748B",
                    border: "1px solid rgba(148,163,184,0.32)",
                  }}
                >
                  B−
                </span>
                <ArrowRight
                  className="w-4 h-4"
                  strokeWidth={2.75}
                  style={{ color: "var(--muted)" }}
                />
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[18px] font-extrabold"
                  style={{
                    background:
                      "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(16,185,129,0.40)",
                  }}
                >
                  A+
                </span>
              </div>
            </div>

            {/* Metric bars */}
            <div className="px-5 sm:px-6 py-5 space-y-5">
              {metrics.map((m, idx) => (
                <div
                  key={m.label}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.06 * idx}s both`,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-[13px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.label}
                    </span>
                    <span className="flex items-center gap-2 text-[12px] font-mono">
                      <span
                        className="px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(148,163,184,0.18)",
                          color: "#64748B",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        {m.beforeLabel}
                      </span>
                      <ArrowRight
                        className="w-3 h-3"
                        strokeWidth={2.75}
                        style={{ color: m.accent }}
                      />
                      <span
                        className="px-1.5 py-0.5 rounded font-bold"
                        style={{
                          background: `${m.accent}1A`,
                          color: m.accent,
                        }}
                      >
                        {m.afterLabel}
                      </span>
                    </span>
                  </div>
                  {/* Stacked bar: muted before bar + filled after bar */}
                  <div
                    className="relative h-2.5 rounded-full overflow-hidden"
                    style={{
                      background: "rgba(148,163,184,0.16)",
                    }}
                  >
                    {/* Before (muted) bar */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${m.before}%`,
                        background: "rgba(148,163,184,0.55)",
                      }}
                    />
                    {/* After (gradient accent) bar overlaid */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${m.after}%`,
                        background: `linear-gradient(90deg, ${m.accent} 0%, ${m.accent}CC 100%)`,
                        boxShadow: `0 0 0 1px ${m.accent}40`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div
              className="px-5 sm:px-6 py-3.5 flex items-center justify-between gap-3 flex-wrap"
              style={{
                background: "var(--bg)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--muted)" }}
              >
                Audited across 6 engines · Updated weekly
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold"
                style={{ color: "#10B981" }}
              >
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
                +312% AI visibility
              </span>
            </div>

            {/* Floating chart icons8 (absolutely positioned tile, decorative) */}
            <div
              aria-hidden
              className="absolute -top-6 -right-6 z-10 hidden lg:block"
              style={{
                filter: "drop-shadow(0 12px 28px rgba(116,211,255,0.40))",
                transform: "rotate(8deg)",
              }}
            >
              <div
                className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(224,242,254,0.98) 100%)",
                  border: "1px solid rgba(116,211,255,0.42)",
                }}
              >
                <img
                  src={icons8Url("11890", 192)}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="w-[44px] h-[44px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: What we improved panel */}
          <aside
            className="card-surface p-6 sm:p-7"
            style={{
              borderRadius: "var(--radius-xl)",
              animation: "fadeInUp 0.8s ease-out 0.15s both",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(116,211,255,0.18) 0%, rgba(139,92,246,0.18) 100%)",
                  color: "#0E7490",
                }}
              >
                <Sparkles className="w-3 h-3" strokeWidth={2.75} />
                What we improved
              </span>
            </div>
            <h3
              className="text-[20px] sm:text-[22px] font-bold leading-[1.25] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              The 5 levers that move the score.
            </h3>
            <p
              className="mt-2.5 text-[14.5px] leading-[1.6]"
              style={{ color: "var(--muted)" }}
            >
              Each lever maps to a sibling service — bundled into one AI search
              program so signals compound, not silo.
            </p>

            <ul className="mt-5 space-y-3.5">
              {improvements.map((imp) => (
                <li key={imp.title} className="flex items-start gap-3">
                  <span
                    className="mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                      color: "#fff",
                      boxShadow: "0 2px 6px rgba(116,211,255,0.35)",
                    }}
                  >
                    <Check className="w-3 h-3" strokeWidth={3.5} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[14.5px] font-bold leading-[1.4]"
                      style={{ color: "var(--ink)" }}
                    >
                      {imp.title}
                    </div>
                    <div
                      className="text-[12.5px] mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {imp.note} ·{" "}
                      <a
                        href={imp.href}
                        className="font-bold"
                        style={{ color: "var(--accent)" }}
                      >
                        {imp.label}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px]"
              style={{
                background:
                  "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                color: "#0B132B",
                boxShadow: "0 8px 24px rgba(116,211,255,0.32)",
              }}
            >
              Get my visibility scorecard
              <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
