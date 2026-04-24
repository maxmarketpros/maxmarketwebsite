import { SectionHeader } from "@/components/ui/section-header"
import { Zap, MousePointer2, Eye, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Vital = {
  key: "LCP" | "INP" | "CLS"
  Icon: LucideIcon
  name: string
  desc: string
  thresholds: { good: string; ok: string; poor: string }
  fixes: string[]
}

const vitals: Vital[] = [
  {
    key: "LCP",
    Icon: Zap,
    name: "Largest Contentful Paint",
    desc: "How fast the biggest visible element loads — the perceived load speed.",
    thresholds: { good: "≤ 2.5s", ok: "≤ 4.0s", poor: "> 4.0s" },
    fixes: [
      "Preload hero image",
      "Convert to AVIF / WebP",
      "Inline critical CSS",
      "Optimize server TTFB",
    ],
  },
  {
    key: "INP",
    Icon: MousePointer2,
    name: "Interaction to Next Paint",
    desc: "How fast the page reacts when a user taps, clicks, or types.",
    thresholds: { good: "≤ 200ms", ok: "≤ 500ms", poor: "> 500ms" },
    fixes: [
      "Defer non-critical JS",
      "Break up long tasks",
      "Remove unused libraries",
      "Debounce input handlers",
    ],
  },
  {
    key: "CLS",
    Icon: Eye,
    name: "Cumulative Layout Shift",
    desc: "How much things jump around while the page loads.",
    thresholds: { good: "≤ 0.1", ok: "≤ 0.25", poor: "> 0.25" },
    fixes: [
      "Reserve image dimensions",
      "Preload web fonts",
      "Static ad slots",
      "Avoid late injections",
    ],
  },
]

export function TechnicalVitals() {
  return (
    <section
      id="technical-vitals"
      aria-labelledby="technical-vitals-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Core Web Vitals"
          heading={
            <span id="technical-vitals-heading">
              Core Web Vitals,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">fixed</span>.
              </span>
            </span>
          }
          paragraph="Three metrics Google uses to score real user experience. Pass all three and rankings lift. We ship the fixes — they aren't sitting in a PDF."
        />

        <div
          className="mt-12 sm:mt-14 max-w-[980px] mx-auto space-y-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {vitals.map((v) => (
            <VitalRow key={v.key} vital={v} />
          ))}

          {/* Inline section CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span
              className="text-[15px]"
              style={{ color: "var(--muted)" }}
            >
              Want the full 24-point checklist?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
              style={{ color: "#DC2626" }}
            >
              Request your free audit
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <p
          className="mt-10 text-center text-[13.5px] max-w-[620px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Site speed is one leg of the stool. Pair it with{" "}
          <a
            href="/services/seo/on-page"
            className="font-semibold underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
            style={{ color: "var(--ink)" }}
          >
            on-page SEO
          </a>{" "}
          for content + schema and{" "}
          <a
            href="/services/seo/off-page"
            className="font-semibold underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
            style={{ color: "var(--ink)" }}
          >
            off-page SEO
          </a>{" "}
          for authority.
        </p>
      </div>
    </section>
  )
}

function VitalRow({ vital }: { vital: Vital }) {
  return (
    <div
      className="card-surface overflow-hidden"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center">
          {/* Icon + key */}
          <div className="flex items-center gap-3">
            <span
              className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(180deg, #FEE2E2 0%, #FECACA 100%)",
                color: "#DC2626",
              }}
            >
              <vital.Icon
                className="w-[20px] h-[20px]"
                strokeWidth={2.25}
              />
            </span>
            <div>
              <div
                className="text-[12px] font-bold tracking-[0.08em]"
                style={{ color: "#DC2626" }}
              >
                {vital.key}
              </div>
              <div
                className="text-[15px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {vital.name}
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className="text-[13.5px] leading-[1.55] max-w-[380px]"
            style={{ color: "var(--muted)" }}
          >
            {vital.desc}
          </div>

          {/* Threshold chips */}
          <div className="flex items-center gap-1.5">
            <span
              className="inline-flex items-center justify-center px-2 py-1 rounded text-[11px] font-mono font-bold"
              style={{
                background: "rgba(16,185,129,0.12)",
                color: "#059669",
              }}
            >
              {vital.thresholds.good}
            </span>
            <span
              className="inline-flex items-center justify-center px-2 py-1 rounded text-[11px] font-mono font-bold"
              style={{
                background: "rgba(245,158,11,0.12)",
                color: "#B45309",
              }}
            >
              {vital.thresholds.ok}
            </span>
            <span
              className="inline-flex items-center justify-center px-2 py-1 rounded text-[11px] font-mono font-bold"
              style={{
                background: "rgba(239,68,68,0.12)",
                color: "#DC2626",
              }}
            >
              {vital.thresholds.poor}
            </span>
          </div>
        </div>

        {/* Fixes */}
        <div
          className="mt-4 pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            className="text-[10.5px] font-semibold uppercase tracking-[0.1em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            What we ship
          </div>
          <div className="flex flex-wrap gap-2">
            {vital.fixes.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 text-[12px] font-medium px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  color: "var(--ink)",
                  border: "1px solid rgba(239,68,68,0.15)",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#EF4444" }}
                />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
