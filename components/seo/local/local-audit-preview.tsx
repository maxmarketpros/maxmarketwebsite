import Link from "next/link"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Check, FileText, Circle, ArrowRight } from "lucide-react"

type Line = {
  title: string
  note: string
}

const lines: Line[] = [
  {
    title: "Google Business Profile health score",
    note: "42-point audit across every GBP surface",
  },
  {
    title: "Map Pack rank grid",
    note: "Current rank for your top 20 keywords across your service area",
  },
  {
    title: "Top 3 competitor teardown",
    note: "What they have that you don\u2019t — and how to close the gap",
  },
  {
    title: "Citation & NAP consistency scan",
    note: "Every directory you\u2019re on, ranked by impact on local rank",
  },
  {
    title: "Review velocity + rating trend",
    note: "Count, velocity, keyword coverage, and response rate",
  },
  {
    title: "Geo-landing page audit",
    note: "Per-city page quality, schema, and keyword depth",
  },
  {
    title: "Service-area schema check",
    note: "LocalBusiness + areaServed JSON-LD tuned for your footprint",
  },
  {
    title: "Site speed + Core Web Vitals",
    note: "Mobile LCP, CLS, INP — all local-ranking signals",
  },
  {
    title: "Backlink profile snapshot",
    note: "Local authority score, toxic-link flags, chamber + press gaps",
  },
  {
    title: "90-day ranking forecast",
    note: "A realistic Map Pack projection, not a sales pitch",
  },
  {
    title: "Prioritized punch list",
    note: "The exact 15 fixes we\u2019d ship first, ranked by impact",
  },
  {
    title: "Walk-through call (optional)",
    note: "30-min review with a senior strategist. Ask anything.",
  },
]

export function LocalAuditPreview() {
  return (
    <section
      id="local-audit-preview"
      aria-labelledby="local-audit-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Pill>The free audit</Pill>
            <h2
              id="local-audit-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              A Local SEO audit you&rsquo;d{" "}
              <span className="whitespace-nowrap">
                pay <span className="accent-underline">$1,500</span> for.
              </span>
            </h2>
            <p
              className="mt-6 text-[17px] sm:text-[18px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              We ship this exact audit to every prospect before we ever quote
              work. It takes about 4 hours to produce. You walk away with a
              real plan whether we end up working together or not.
            </p>

            <div className="mt-8">
              <PrimaryButton size="lg" asLink href="#contact">
                Request your free audit
              </PrimaryButton>
              <div
                className="mt-4 flex items-center gap-2 text-[13px]"
                style={{ color: "var(--muted)" }}
              >
                <Check
                  className="w-4 h-4"
                  style={{ color: "#10B981" }}
                  strokeWidth={3}
                />
                Delivered in 3 business days
                <span className="mx-1">·</span>
                <Check
                  className="w-4 h-4"
                  style={{ color: "#10B981" }}
                  strokeWidth={3}
                />
                Zero sales pressure
              </div>
            </div>
          </div>

          {/* Right document */}
          <div className="lg:col-span-7">
            <AuditDocument lines={lines} />
          </div>
        </div>
      </div>
    </section>
  )
}

function AuditDocument({ lines }: { lines: Line[] }) {
  return (
    <div
      className="card-surface relative overflow-hidden"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Document browser chrome */}
      <div
        className="flex items-center gap-2 px-5 py-3 border-b"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <Circle
            className="w-2.5 h-2.5"
            fill="#FF5F57"
            strokeWidth={0}
            style={{ color: "#FF5F57" }}
          />
          <Circle
            className="w-2.5 h-2.5"
            fill="#FEBC2E"
            strokeWidth={0}
            style={{ color: "#FEBC2E" }}
          />
          <Circle
            className="w-2.5 h-2.5"
            fill="#28C840"
            strokeWidth={0}
            style={{ color: "#28C840" }}
          />
        </div>
        <div
          className="flex-1 text-center text-[12px] font-medium truncate"
          style={{ color: "var(--muted)" }}
        >
          Local-SEO-Audit · Your-Business.pdf
        </div>
        <FileText
          className="w-3.5 h-3.5"
          style={{ color: "var(--muted)" }}
          strokeWidth={2}
        />
      </div>

      {/* Document body */}
      <div className="p-6 sm:p-8">
        <div
          className="text-[10.5px] font-semibold uppercase tracking-[0.1em]"
          style={{ color: "#D97706" }}
        >
          Max Market Pros · Local SEO Audit
        </div>
        <h3
          className="mt-2 text-[22px] sm:text-[26px] font-bold tracking-[-0.015em] leading-[1.2]"
          style={{ color: "var(--ink)" }}
        >
          Your Local SEO punch list.
        </h3>
        <div
          className="mt-1 text-[12.5px]"
          style={{ color: "var(--muted)" }}
        >
          12 sections · 90-day ranking forecast · Delivered PDF + Loom
          walk-through
        </div>

        {/* Checklist */}
        <ul
          className="mt-5 pt-5 border-t divide-y"
          style={{ borderColor: "var(--border-color)" }}
        >
          {lines.map((line, i) => (
            <li
              key={line.title}
              className="flex items-start gap-3 py-3"
              style={{ borderColor: "var(--border-color)" }}
            >
              <span
                className="mt-[3px] w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
                  color: "#fff",
                  boxShadow: "0 1px 2px rgba(16,185,129,0.3)",
                }}
                aria-hidden
              >
                <Check className="w-3 h-3" strokeWidth={3.5} />
              </span>
              <div className="min-w-0 flex-1">
                <div
                  className="text-[14px] sm:text-[14.5px] font-semibold leading-[1.3]"
                  style={{ color: "var(--ink)" }}
                >
                  {line.title}
                </div>
                <div
                  className="mt-0.5 text-[12.5px] leading-[1.4]"
                  style={{ color: "var(--muted)" }}
                >
                  {line.note}
                </div>
              </div>
              <span
                className="mt-[3px] text-[10.5px] font-semibold uppercase tracking-[0.08em] shrink-0"
                style={{ color: "var(--muted)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="mt-5 pt-5 border-t flex items-center justify-between gap-3"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            className="text-[11.5px]"
            style={{ color: "var(--muted)" }}
          >
            Prepared by Max Market Pros · All work Google-compliant
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Get yours
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
