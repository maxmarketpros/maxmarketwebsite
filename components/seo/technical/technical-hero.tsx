import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Wrench, Check, TrendingUp, ArrowRight } from "lucide-react"

const proofPills = [
  { label: "LCP < 1.8s avg." },
  { label: "98% indexation rate" },
  { label: "Schema on every URL" },
  { label: "Mobile-first ready" },
]

type Vital = {
  key: "LCP" | "INP" | "CLS"
  name: string
  value: string
  unit: string
}

const vitals: Vital[] = [
  { key: "LCP", name: "Largest Contentful Paint", value: "1.4", unit: "s" },
  { key: "INP", name: "Interaction to Next Paint", value: "142", unit: "ms" },
  { key: "CLS", name: "Cumulative Layout Shift", value: "0.04", unit: "" },
]

const auditHighlights = [
  "Core Web Vitals passing on mobile",
  "1,181 URLs indexed · 0 crawl errors",
  "Schema validated on every URL",
  "Redirect chains flattened (23 → 0)",
]

export function TechnicalHero() {
  return (
    <section
      aria-labelledby="technical-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Red/orange ambient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.14) 0%, rgba(249,115,22,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[22%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,19,43,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services" className="hover:text-[var(--accent)]">
                Services
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Technical SEO
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(239,68,68,0.1)",
                borderColor: "rgba(239,68,68,0.25)",
                color: "#DC2626",
              }}
            >
              <Wrench className="w-3.5 h-3.5" strokeWidth={2.5} />
              Technical SEO · Speed + crawl + schema
            </span>

            <h1
              id="technical-hero-heading"
              className="mt-6 text-[44px] xs:text-[48px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Technical SEO that gets you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">indexed</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Core Web Vitals, crawl budget, schema markup, and indexation —
              shipped, not audited.{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Pairs with
              </span>{" "}
              <a
                href="/services/seo/on-page"
                className="underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
                style={{ color: "var(--ink)", fontWeight: 600 }}
              >
                on-page SEO
              </a>{" "}
              and{" "}
              <a
                href="/services/seo/off-page"
                className="underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
                style={{ color: "var(--ink)", fontWeight: 600 }}
              >
                off-page SEO
              </a>
              .
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get your free technical audit
              </PrimaryButton>
              <SecondaryButton asLink href="#technical-vitals">
                See the 24-point checklist
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#10B981" }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: unified technical audit card */}
          <div
            className="relative w-full"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <TechnicalAuditCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnicalAuditCard() {
  const score = 98
  const r = 52
  const c = 2 * Math.PI * r
  const offset = c - (score / 100) * c

  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      <div
        className="relative card-surface overflow-hidden"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        {/* Dark header band */}
        <div
          className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3"
          style={{
            background:
              "linear-gradient(180deg, #0B132B 0%, #13203F 100%)",
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                background: "#10B981",
                boxShadow: "0 0 0 3px rgba(16,185,129,0.3)",
              }}
            />
            <span
              className="text-[12px] font-bold truncate"
              style={{ color: "#F3F4F6" }}
            >
              Technical Audit
            </span>
            <span
              className="text-[11px] font-mono truncate hidden sm:inline"
              style={{ color: "rgba(243,244,246,0.5)" }}
            >
              · maxmarketpros.com
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0"
            style={{
              background: "rgba(16,185,129,0.22)",
              color: "#34D399",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            <TrendingUp className="w-2.5 h-2.5" strokeWidth={3} />
            Live
          </span>
        </div>

        {/* Hero score + metrics row */}
        <div
          className="px-4 sm:px-6 py-5 sm:py-6"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFE 100%)",
          }}
        >
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap sm:flex-nowrap">
            {/* Score ring */}
            <div className="relative shrink-0">
              <svg
                width="130"
                height="130"
                viewBox="0 0 130 130"
                className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px]"
              >
                <defs>
                  <linearGradient
                    id="hero-score-grad"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                <circle
                  cx="65"
                  cy="65"
                  r={r}
                  fill="none"
                  stroke="rgba(11,19,43,0.08)"
                  strokeWidth="10"
                />
                <circle
                  cx="65"
                  cy="65"
                  r={r}
                  fill="none"
                  stroke="url(#hero-score-grad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={c}
                  strokeDashoffset={offset}
                  transform="rotate(-90 65 65)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="text-[36px] sm:text-[42px] font-bold leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {score}
                </span>
                <span
                  className="text-[10px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  / 100
                </span>
              </div>
            </div>

            {/* Score meta */}
            <div className="min-w-0 flex-1">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "#DC2626" }}
              >
                Technical Health
              </div>
              <div
                className="mt-0.5 text-[17px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                All systems green
              </div>
              <div
                className="mt-1 text-[13px] leading-[1.45]"
                style={{ color: "var(--muted)" }}
              >
                Shipped fixes across Core Web Vitals, crawl, and schema.
              </div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span
                  className="text-[12px] font-mono line-through"
                  style={{ color: "var(--muted)" }}
                >
                  51
                </span>
                <span style={{ color: "var(--muted)" }}>→</span>
                <span
                  className="text-[14px] font-bold"
                  style={{ color: "#10B981" }}
                >
                  98
                </span>
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] ml-1"
                  style={{ color: "#059669" }}
                >
                  +47
                </span>
              </div>
            </div>
          </div>

          {/* CWV strip */}
          <div
            className="mt-5 grid grid-cols-3 gap-2 p-3 rounded-[var(--radius-sm)]"
            style={{
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.18)",
            }}
          >
            {vitals.map((v) => (
              <div key={v.key} className="flex flex-col items-center text-center">
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="text-[15px] sm:text-[16px] font-bold leading-none"
                    style={{ color: "var(--ink)" }}
                  >
                    {v.value}
                  </span>
                  {v.unit && (
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {v.unit}
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span
                    className="text-[10px] font-bold tracking-[0.08em]"
                    style={{ color: "#059669" }}
                  >
                    {v.key}
                  </span>
                  <Check
                    className="w-2.5 h-2.5"
                    strokeWidth={3}
                    style={{ color: "#10B981" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What we fixed list */}
        <div
          className="px-4 sm:px-6 py-4 border-t"
          style={{
            background: "#FAFBFE",
            borderColor: "var(--border-color)",
          }}
        >
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.1em] mb-2"
            style={{ color: "#DC2626" }}
          >
            What we shipped
          </div>
          <ul className="space-y-1.5">
            {auditHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13px] leading-[1.4]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="mt-[2px] inline-flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
                    color: "#fff",
                  }}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA strip */}
        <a
          href="#technical-vitals"
          className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-t transition-colors hover:bg-[rgba(239,68,68,0.03)]"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          <span
            className="text-[12.5px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Your free audit includes 20 more checks
          </span>
          <span
            className="inline-flex items-center gap-1 text-[12.5px] font-bold"
            style={{ color: "#DC2626" }}
          >
            See all
            <ArrowRight className="w-3 h-3" strokeWidth={2.75} />
          </span>
        </a>
      </div>

      {/* Floating badge */}
      <div
        className="hidden lg:flex absolute -top-3 -right-3 items-center gap-1.5 px-3 py-2 rounded-full text-[11.5px] font-semibold"
        style={{
          background: "linear-gradient(180deg, #10B981 0%, #059669 100%)",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(16,185,129,0.35)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "#fff",
            boxShadow: "0 0 0 3px rgba(255,255,255,0.3)",
          }}
        />
        All checks passing
      </div>
    </div>
  )
}
