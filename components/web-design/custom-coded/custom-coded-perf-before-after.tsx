import { SectionHeader } from "@/components/ui/section-header"
import { X, Check, ArrowUpRight, ArrowDownRight } from "lucide-react"

const metrics = [
  { label: "LCP", before: "4.2s", after: "0.9s", betterDir: "down" },
  { label: "TTI", before: "6.8s", after: "1.4s", betterDir: "down" },
  { label: "JS bundle", before: "812 kB", after: "38 kB", betterDir: "down" },
  { label: "Lighthouse", before: "54", after: "100", betterDir: "up" },
]

export function CustomCodedPerfBeforeAfter() {
  return (
    <section
      id="custom-coded-before-after"
      aria-labelledby="custom-coded-ba-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Before / after"
          heading={
            <span id="custom-coded-ba-heading">
              A real client moved off{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">a templated build</span>
              </span>
              .
            </span>
          }
          paragraph="Same business, same content, same domain. What changed: every line of code. Here's what shipping a custom coded website did to the metrics that move organic rankings."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <PerfMock variant="before" />
          <PerfMock variant="after" />
        </div>

        {/* Metrics strip */}
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="card-surface p-4 flex flex-col gap-1"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: "var(--muted)" }}
              >
                {m.label}
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[13px] font-mono line-through"
                  style={{ color: "#DC2626" }}
                >
                  {m.before}
                </span>
                {m.betterDir === "down" ? (
                  <ArrowDownRight
                    className="w-3.5 h-3.5"
                    style={{ color: "#10B981" }}
                    strokeWidth={2.5}
                  />
                ) : (
                  <ArrowUpRight
                    className="w-3.5 h-3.5"
                    style={{ color: "#10B981" }}
                    strokeWidth={2.5}
                  />
                )}
                <span
                  className="text-[15px] font-bold font-mono"
                  style={{ color: "var(--ink)" }}
                >
                  {m.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[13.5px]"
          style={{ color: "var(--muted)" }}
        >
          Pair a custom coded website with{" "}
          <a
            href="/services/seo/on-page"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            on-page SEO
          </a>{" "}
          and{" "}
          <a
            href="/services/seo/backlinks"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            authority links
          </a>{" "}
          for compounding lift.
        </p>
      </div>
    </section>
  )
}

function PerfMock({ variant }: { variant: "before" | "after" }) {
  const isAfter = variant === "after"
  const borderColor = isAfter ? "rgba(22,119,255,0.35)" : "rgba(239,68,68,0.35)"
  const ringShadow = isAfter
    ? "0 10px 30px rgba(22,119,255,0.12)"
    : "0 10px 30px rgba(239,68,68,0.06)"

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        background: "#fff",
        border: `2px solid ${borderColor}`,
        boxShadow: ringShadow,
      }}
    >
      {/* Header label */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{
          background: isAfter
            ? "linear-gradient(180deg, #EAF2FF 0%, #F6FAFF 100%)"
            : "linear-gradient(180deg, #FEF2F2 0%, #FFF7F7 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-full"
            style={{
              background: isAfter ? "#1677FF" : "#DC2626",
              color: "#fff",
            }}
          >
            {isAfter ? (
              <Check className="w-3 h-3" strokeWidth={3} />
            ) : (
              <X className="w-3 h-3" strokeWidth={3} />
            )}
          </span>
          <span
            className="text-[12px] font-bold uppercase tracking-[0.1em]"
            style={{ color: isAfter ? "#1677FF" : "#DC2626" }}
          >
            {isAfter ? "After — custom coded Next.js" : "Before — WordPress + plugins"}
          </span>
        </div>
        <span
          className="text-[10.5px] font-mono"
          style={{ color: "var(--muted)" }}
        >
          {isAfter ? "v2.0" : "v1.0"}
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <Row
          variant={variant}
          label="Stack"
          value={isAfter ? "Next.js · React · Tailwind · Vercel edge" : "WordPress + Elementor + 14 plugins"}
        />
        <Row
          variant={variant}
          label="LCP (Largest Contentful Paint)"
          value={isAfter ? "0.9s · passes Core Web Vitals" : "4.2s · fails CWV"}
        />
        <Row
          variant={variant}
          label="TTI (Time to Interactive)"
          value={isAfter ? "1.4s on 4G" : "6.8s on 4G"}
        />
        <Row
          variant={variant}
          label="JS bundle"
          value={isAfter ? "38 kB gzipped, route-split" : "812 kB gzipped, monolithic"}
          isCode
        />
        <Row
          variant={variant}
          label="Total page weight"
          value={isAfter ? "184 kB" : "3.2 MB"}
        />
        <Row
          variant={variant}
          label="Lighthouse mobile"
          value={isAfter ? "100 / 100 / 100 / 100" : "54 / 78 / 83 / 91"}
          isCode
        />
      </div>
    </div>
  )
}

function Row({
  variant,
  label,
  value,
  isCode,
}: {
  variant: "before" | "after"
  label: string
  value: string
  isCode?: boolean
}) {
  const isAfter = variant === "after"
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
        style={{
          background: isAfter ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.1)",
          color: isAfter ? "#059669" : "#DC2626",
        }}
      >
        {isAfter ? (
          <Check className="w-3 h-3" strokeWidth={3} />
        ) : (
          <X className="w-3 h-3" strokeWidth={3} />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <div
          className="text-[10.5px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </div>
        <div
          className={`mt-0.5 text-[13px] leading-[1.45] ${
            isCode ? "font-mono" : ""
          }`}
          style={{
            color: isAfter ? "var(--ink)" : "var(--muted)",
            fontWeight: isAfter ? 600 : 400,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}
