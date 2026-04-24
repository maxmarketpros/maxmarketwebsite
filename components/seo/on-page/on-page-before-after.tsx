import { SectionHeader } from "@/components/ui/section-header"
import { X, Check, ArrowUpRight } from "lucide-react"

const metrics = [
  { label: "Title length", before: "12 chars", after: "58 chars" },
  { label: "Word count", before: "320", after: "1,820" },
  { label: "Schema types", before: "0", after: "3" },
  { label: "Internal links", before: "0", after: "6" },
]

export function OnPageBeforeAfter() {
  return (
    <section
      id="on-page-before-after"
      aria-labelledby="on-page-ba-heading"
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
            <span id="on-page-ba-heading">
              A real page,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">rebuilt</span>
              </span>{" "}
              the right way.
            </span>
          }
          paragraph="Same business, same intent, same URL. What changed is what Google saw — on-page SEO done end-to-end, from title tag through internal linking."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <PageMock variant="before" />
          <PageMock variant="after" />
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
                <ArrowUpRight
                  className="w-3.5 h-3.5"
                  style={{ color: "#10B981" }}
                  strokeWidth={2.5}
                />
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
      </div>
    </section>
  )
}

function PageMock({ variant }: { variant: "before" | "after" }) {
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
            {isAfter ? "After — optimized" : "Before — unoptimized"}
          </span>
        </div>
        <span
          className="text-[10.5px] font-mono"
          style={{ color: "var(--muted)" }}
        >
          /services/plumbing
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Title */}
        <Row
          variant={variant}
          label="Title tag"
          value={
            isAfter
              ? "Emergency Plumber in Irvine | 24/7 Service — Max Market Pros"
              : "Services - Home"
          }
        />
        {/* Meta */}
        <Row
          variant={variant}
          label="Meta description"
          value={
            isAfter
              ? "24/7 emergency plumbing in Irvine, CA. Licensed, insured, 4.9★ on 214 reviews. Call for same-day service."
              : "(missing)"
          }
        />
        {/* H1 */}
        <Row
          variant={variant}
          label="H1"
          value={
            isAfter
              ? "Emergency plumbing in Irvine — 24/7, licensed, fast."
              : "Welcome!"
          }
        />
        {/* Content */}
        <Row
          variant={variant}
          label="Content"
          value={
            isAfter
              ? "1,820 words · 34 entities · 9 H2s"
              : "320 words · 1 H2"
          }
        />
        {/* Schema */}
        <Row
          variant={variant}
          label="Schema"
          value={
            isAfter ? "LocalBusiness · Service · FAQPage" : "— (none)"
          }
          isCode
        />
        {/* Internal links */}
        <Row
          variant={variant}
          label="Internal links"
          value={isAfter ? "6 semantic anchors" : "0"}
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
