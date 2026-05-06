import { SectionHeader } from "@/components/ui/section-header"
import { Check, Gauge, Search, ShieldCheck, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WP_BLUE = "#00749C"

type Row = {
  Icon: LucideIcon
  category: string
  metric: string
  detail: string
}

const rows: Row[] = [
  {
    Icon: Gauge,
    category: "Performance",
    metric: "Lighthouse 94 mobile",
    detail: "Compressed images, deferred JS, critical CSS inlined.",
  },
  {
    Icon: Search,
    category: "SEO",
    metric: "Yoast green on every page",
    detail: "Title, meta, schema, focus-keyword density audited at QA.",
  },
  {
    Icon: ShieldCheck,
    category: "Security",
    metric: "Wordfence active · 0 issues",
    detail: "WAF on, brute-force lockout, 2FA on admin, file integrity scans.",
  },
  {
    Icon: Zap,
    category: "Caching",
    metric: "WP Rocket + Cloudflare CDN",
    detail: "Page cache, object cache, image CDN, preloaded routes.",
  },
]

type Vital = { label: string; value: string; target: string; spark: number[] }

const vitals: Vital[] = [
  {
    label: "LCP",
    value: "1.6s",
    target: "< 2.5s",
    spark: [2.8, 2.6, 2.3, 2.1, 1.9, 1.7, 1.6],
  },
  {
    label: "INP",
    value: "112ms",
    target: "< 200ms",
    spark: [240, 220, 200, 180, 150, 130, 112],
  },
  {
    label: "CLS",
    value: "0.04",
    target: "< 0.10",
    spark: [0.18, 0.15, 0.12, 0.10, 0.08, 0.06, 0.04],
  },
]

export function WordpressLighthouseStrip() {
  return (
    <section
      id="wordpress-site-health"
      aria-labelledby="wordpress-site-health-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What every build ships with"
          heading={
            <span id="wordpress-site-health-heading">
              Speed, SEO, security{" "}
              <span className="whitespace-nowrap">—{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(34,197,94,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  green
                </span>
                .
              </span>
            </span>
          }
          paragraph="Every WordPress website design we deliver passes the same Site Health checklist before launch. Below is the actual report card we hand off — not a marketing graphic."
        />

        <div
          className="mt-12 max-w-[920px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Site Health admin panel */}
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            {/* WP admin chrome header */}
            <div
              className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b"
              style={{
                background: "#1D2327",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-extrabold"
                style={{ background: WP_BLUE, color: "#fff" }}
              >
                W
              </span>
              <span className="text-[12px] font-semibold text-white">
                Tools
              </span>
              <span className="text-[12px] text-white/40">›</span>
              <span className="text-[12px] font-semibold text-white">
                Site Health
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.16)",
                  color: "#86EFAC",
                  border: "1px solid rgba(34,197,94,0.30)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#34D399" }}
                />
                All passing
              </span>
            </div>

            <ul className="divide-y" style={{ background: "#fff" }}>
              {rows.map((r, idx) => (
                <li
                  key={r.category}
                  className="flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5"
                  style={{
                    borderColor: "var(--border-color)",
                    animation: `fadeInUp 0.5s ease-out ${0.05 * idx}s both`,
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(34,197,94,0.14)",
                      color: "#15803D",
                    }}
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 hidden sm:flex"
                    style={{
                      background: "rgba(0,116,156,0.10)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <r.Icon
                      className="w-4 h-4"
                      strokeWidth={2.25}
                      style={{ color: WP_BLUE }}
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: WP_BLUE }}
                    >
                      {r.category}
                    </p>
                    <h3
                      className="text-[15px] sm:text-[16px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {r.metric}
                    </h3>
                    <p
                      className="mt-1 text-[12.5px] sm:text-[13px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      {r.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Web Vitals row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {vitals.map((v, idx) => (
              <div
                key={v.label}
                className="card-surface p-4"
                style={{
                  borderRadius: "var(--radius-md)",
                  animation: `fadeInUp 0.5s ease-out ${0.06 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {v.label}
                  </span>
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(34,197,94,0.14)",
                      color: "#15803D",
                    }}
                  >
                    Target {v.target}
                  </span>
                </div>
                <div
                  className="mt-1.5 text-[24px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{ color: WP_BLUE }}
                >
                  {v.value}
                </div>
                <Sparkline values={v.spark} />
              </div>
            ))}
          </div>

          {/* Internal links */}
          <p
            className="mt-8 text-[14px] sm:text-[15px] leading-[1.6] text-center max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Pair WordPress website design with{" "}
            <a
              href="/services/seo/on-page"
              className="font-semibold hover:underline"
              style={{ color: WP_BLUE }}
            >
              On-Page SEO
            </a>
            ,{" "}
            <a
              href="/services/seo/technical"
              className="font-semibold hover:underline"
              style={{ color: WP_BLUE }}
            >
              Technical SEO
            </a>
            , and{" "}
            <a
              href="/services/seo/backlinks"
              className="font-semibold hover:underline"
              style={{ color: WP_BLUE }}
            >
              Backlinks
            </a>{" "}
            for the full ranking stack.
          </p>
        </div>
      </div>
    </section>
  )
}

function Sparkline({ values }: { values: number[] }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  return (
    <div className="mt-3 flex items-end gap-1 h-[28px]">
      {values.map((v, i) => {
        const norm = (v - min) / range
        // Lower is better in our metrics — invert visually so latest bar is shortest = best
        const height = Math.max(20, norm * 100)
        return (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${height}%`,
              background:
                i === values.length - 1 ? "#15803D" : "rgba(0,116,156,0.35)",
            }}
          />
        )
      })}
    </div>
  )
}
