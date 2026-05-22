import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  Snowflake,
  Flame,
  Sparkles,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  ArrowRight,
  Eye,
  MousePointerClick,
  ClipboardCheck,
  Clock,
} from "lucide-react"

type Stage = {
  num: number
  label: string
  Icon: typeof Snowflake
  accent: string
  accentSoft: string
  bgGlow: string
  audience: string
  creative: string
  budget: string
  budgetWidth: string
  kpi: { label: string; value: string }
  kpiIcon: typeof Eye
  bullets: string[]
  mockup: "reel" | "carousel" | "leadform"
}

const stages: Stage[] = [
  {
    num: 1,
    label: "Cold prospecting",
    Icon: Snowflake,
    accent: "#0EA5E9",
    accentSoft: "rgba(14,165,233,0.10)",
    bgGlow: "rgba(14,165,233,0.16)",
    audience: "Advantage+ + 1° lookalikes",
    creative: "Reels-first, hook in 1.5s",
    budget: "60% of budget",
    budgetWidth: "60%",
    kpi: { label: "Avg CPL", value: "$48" },
    kpiIcon: Eye,
    bullets: [
      "Advantage+ Audience with seed interests",
      "1% lookalike of last 180 days of booked jobs",
      "Broad geo within service zone, age-tuned",
    ],
    mockup: "reel",
  },
  {
    num: 2,
    label: "Mid-funnel retargeting",
    Icon: Flame,
    accent: "#F59E0B",
    accentSoft: "rgba(245,158,11,0.12)",
    bgGlow: "rgba(245,158,11,0.18)",
    audience: "Engagers + video viewers",
    creative: "Carousel + testimonial",
    budget: "25% of budget",
    budgetWidth: "25%",
    kpi: { label: "Avg CPL", value: "$28" },
    kpiIcon: MousePointerClick,
    bullets: [
      "Video viewers ≥75% from last 30 days",
      "Page + IG profile engagers, 90-day window",
      "Site visitors who didn't convert (Pixel + CAPI)",
    ],
    mockup: "carousel",
  },
  {
    num: 3,
    label: "Warm conversion",
    Icon: Sparkles,
    accent: "#1877F2",
    accentSoft: "rgba(24,119,242,0.12)",
    bgGlow: "rgba(24,119,242,0.20)",
    audience: "Lead-form opens · abandon-quote",
    creative: "Offer + urgency, lead form",
    budget: "15% of budget",
    budgetWidth: "15%",
    kpi: { label: "Avg cost / booked job", value: "$19" },
    kpiIcon: ClipboardCheck,
    bullets: [
      "Lead-form opens that didn't submit",
      "Abandoned online-quote audience (CAPI event)",
      "Pixel ViewContent on /pricing or /contact",
    ],
    mockup: "leadform",
  },
]

export function FacebookAdsFunnel() {
  return (
    <section
      id="facebook-ads-funnel"
      aria-labelledby="facebook-ads-funnel-heading"
      className="relative"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-[40%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-5%] right-[5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,119,242,0.16) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Our signature system"
          heading={
            <span id="facebook-ads-funnel-heading">
              Cold &rarr; mid &rarr; warm. The{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Facebook Ads funnel</span>
              </span>{" "}
              that books jobs.
            </span>
          }
          paragraph="Every Meta account we run has the same three-stage backbone: cold prospecting that fills the top, mid-funnel retargeting that warms the audience up, and warm conversion ad sets that close booked jobs. Same creative library, three different jobs to do."
        />

        <div
          className="mt-14 sm:mt-16 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Connector flow line — desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] -z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,165,233,0.5) 0%, rgba(245,158,11,0.5) 50%, rgba(24,119,242,0.7) 100%)",
              maskImage:
                "linear-gradient(180deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
            }}
          />

          {/* Stages */}
          <ol className="space-y-10 lg:space-y-12">
            {stages.map((stage, idx) => (
              <li key={stage.num} className="relative">
                {/* Connector arrow between stages — desktop */}
                {idx > 0 && (
                  <div
                    aria-hidden
                    className="hidden lg:flex absolute -top-10 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full items-center justify-center z-10"
                    style={{
                      background:
                        "linear-gradient(180deg, #fff 0%, #F7FAFC 100%)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 4px 14px rgba(17,35,68,0.10)",
                      color: stage.accent,
                    }}
                  >
                    <ArrowRight
                      className="w-4 h-4 rotate-90"
                      strokeWidth={2.75}
                    />
                  </div>
                )}

                <div
                  className="relative overflow-hidden rounded-[var(--radius-xl)]"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    boxShadow:
                      "0 1px 3px var(--shadow-color), 0 14px 36px var(--shadow-color)",
                  }}
                >
                  {/* Side glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${stage.bgGlow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top ribbon: number + stage label + budget bar */}
                  <div
                    className="relative px-5 sm:px-7 py-4 flex items-center gap-4 border-b"
                    style={{
                      borderColor: "var(--border-color)",
                      background:
                        "linear-gradient(180deg, #FAFBFD 0%, #F4F7FB 100%)",
                    }}
                  >
                    <span
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[16px] font-extrabold"
                      style={{
                        background: stage.accent,
                        color: "#fff",
                        boxShadow: `0 4px 12px ${stage.accent}55`,
                      }}
                    >
                      {stage.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <stage.Icon
                          className="w-4 h-4"
                          strokeWidth={2.5}
                          style={{ color: stage.accent }}
                        />
                        <span
                          className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: stage.accent }}
                        >
                          Stage {stage.num}
                        </span>
                      </div>
                      <h3
                        className="mt-0.5 text-[20px] sm:text-[24px] font-bold leading-tight tracking-[-0.01em]"
                        style={{ color: "var(--ink)" }}
                      >
                        {stage.label}
                      </h3>
                    </div>
                    {/* Budget allocation bar */}
                    <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0">
                      <span
                        className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {stage.budget}
                      </span>
                      <div
                        className="w-[140px] h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--bg)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: stage.budgetWidth,
                            background: `linear-gradient(90deg, ${stage.accent} 0%, ${stage.accent}aa 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-0">
                    {/* Left: details */}
                    <div className="px-5 sm:px-7 py-6 lg:py-7 lg:pr-7">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Tag
                          icon="audience"
                          color={stage.accent}
                          softColor={stage.accentSoft}
                          label="Audience"
                          value={stage.audience}
                        />
                        <Tag
                          icon="creative"
                          color={stage.accent}
                          softColor={stage.accentSoft}
                          label="Creative"
                          value={stage.creative}
                        />
                      </div>

                      <ul className="space-y-2.5">
                        {stage.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[14.5px] leading-[1.55]"
                            style={{ color: "var(--ink)" }}
                          >
                            <span
                              className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full"
                              style={{ background: stage.accent }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* KPI strip */}
                      <div
                        className="mt-5 pt-5 border-t flex items-center justify-between gap-3"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-9 h-9 rounded-full flex items-center justify-center"
                            style={{
                              background: stage.accentSoft,
                              color: stage.accent,
                            }}
                          >
                            <stage.kpiIcon
                              className="w-4 h-4"
                              strokeWidth={2.25}
                            />
                          </span>
                          <div>
                            <div
                              className="text-[10px] font-bold uppercase tracking-[0.12em]"
                              style={{ color: "var(--muted)" }}
                            >
                              Primary KPI
                            </div>
                            <div
                              className="text-[13px] font-semibold"
                              style={{ color: "var(--ink)" }}
                            >
                              {stage.kpi.label}
                            </div>
                          </div>
                        </div>
                        <div
                          className="text-[24px] sm:text-[28px] font-extrabold leading-none tracking-[-0.02em]"
                          style={{ color: stage.accent }}
                        >
                          {stage.kpi.value}
                        </div>
                      </div>
                    </div>

                    {/* Right: creative mockup */}
                    <div
                      className="relative px-5 sm:px-7 py-6 lg:py-7 lg:pl-7 lg:border-l flex items-center justify-center"
                      style={{
                        borderColor: "var(--border-color)",
                        background:
                          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
                      }}
                    >
                      {stage.mockup === "reel" && <ReelMockup />}
                      {stage.mockup === "carousel" && <CarouselMockup />}
                      {stage.mockup === "leadform" && <LeadFormMockup />}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Aggregate metric strip */}
          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[860px] mx-auto px-5 sm:px-7 py-5 rounded-[var(--radius-lg)]"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,165,233,0.06) 0%, rgba(245,158,11,0.06) 50%, rgba(24,119,242,0.08) 100%)",
              border: "1px solid var(--border-color)",
            }}
          >
            {[
              { v: "$48", l: "Avg cold-stage CPL", c: "#0284C7" },
              { v: "$28", l: "Avg mid-stage CPL", c: "#A16207" },
              { v: "$19", l: "Avg warm-stage CPL", c: "#1877F2" },
            ].map((m) => (
              <div key={m.l} className="text-center">
                <div
                  className="text-[24px] sm:text-[30px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{ color: m.c }}
                >
                  {m.v}
                </div>
                <div
                  className="mt-1.5 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <PrimaryButton size="lg" asLink href="#contact">
              Get this funnel built for your business
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tag({
  color,
  softColor,
  label,
  value,
}: {
  icon: "audience" | "creative"
  color: string
  softColor: string
  label: string
  value: string
}) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold border"
      style={{
        background: softColor,
        borderColor: `${color}33`,
        color: "var(--ink)",
      }}
    >
      <span
        className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
        style={{ color }}
      >
        {label}
      </span>
      <span style={{ color: "var(--ink)" }}>{value}</span>
    </span>
  )
}

/** Vertical 9:16 Reels-style ad mockup */
function ReelMockup() {
  return (
    <div
      className="relative w-[180px] aspect-[9/16] rounded-[20px] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0EA5E9 0%, #1E3A8A 70%, #0F172A 100%)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.10), 0 18px 40px rgba(14,165,233,0.32)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Faux scene texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(116,211,255,0.28) 0%, transparent 55%)",
        }}
      />
      {/* Top bar */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-white/85">
        <div className="flex items-center gap-1.5">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-extrabold"
            style={{
              background: "linear-gradient(135deg, #4A90F5 0%, #1877F2 100%)",
            }}
          >
            A
          </span>
          <span className="text-[9.5px] font-semibold">acme.hvac</span>
          <span
            className="text-[8.5px] font-medium px-1 py-0.5 rounded"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Sponsored
          </span>
        </div>
      </div>
      {/* Hook overlay */}
      <div className="absolute left-2.5 right-2.5 bottom-[68px] text-white">
        <div
          className="text-[14.5px] font-extrabold leading-[1.15] tracking-[-0.01em]"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
        >
          Why your AC bill spiked &mdash; in 27 seconds.
        </div>
      </div>
      {/* CTA */}
      <div className="absolute left-2.5 right-2.5 bottom-2 flex items-center gap-2">
        <button
          type="button"
          className="flex-1 px-3 py-1.5 rounded-md text-[10px] font-bold"
          style={{
            background: "rgba(255,255,255,0.92)",
            color: "#0F172A",
          }}
          aria-label="Book now"
        >
          Book Now
        </button>
        <span
          className="px-2 py-1 rounded-md text-[8.5px] font-bold uppercase tracking-[0.06em]"
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "#fff",
          }}
        >
          0:08
        </span>
      </div>
      {/* Right side icons */}
      <div className="absolute right-1.5 bottom-[80px] flex flex-col items-center gap-2.5 text-white/85">
        <Heart className="w-4 h-4" strokeWidth={2.25} fill="currentColor" />
        <MessageCircle className="w-4 h-4" strokeWidth={2.25} />
        <Send className="w-4 h-4" strokeWidth={2.25} />
        <Bookmark className="w-4 h-4" strokeWidth={2.25} />
      </div>
    </div>
  )
}

/** Carousel-style ad mockup */
function CarouselMockup() {
  return (
    <div
      className="relative w-[260px] rounded-[16px] overflow-hidden"
      style={{
        background: "#fff",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.10), 0 18px 40px rgba(245,158,11,0.22)",
        border: "1px solid var(--border-color)",
      }}
    >
      {/* Page header */}
      <div
        className="px-3 py-2 flex items-center gap-2 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-white"
          style={{
            background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
          }}
        >
          A
        </span>
        <div className="leading-tight">
          <div
            className="text-[11px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Acme HVAC
          </div>
          <div
            className="text-[9.5px]"
            style={{ color: "var(--muted)" }}
          >
            Sponsored · <span style={{ color: "#1877F2" }}>Follow</span>
          </div>
        </div>
      </div>
      {/* Carousel body */}
      <div className="px-2 pt-2 pb-1.5 flex gap-1.5 overflow-hidden">
        {[
          { hue: "#FBBF24", label: "Before" },
          { hue: "#34D399", label: "After" },
          { hue: "#60A5FA", label: "Before" },
        ].map((c, i) => (
          <div
            key={i}
            className="relative w-[78px] h-[100px] rounded-[10px] overflow-hidden shrink-0"
            style={{
              background: `linear-gradient(160deg, ${c.hue}33 0%, ${c.hue}88 100%)`,
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 70%, rgba(0,0,0,0.18) 0%, transparent 65%)",
              }}
            />
            <span
              className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-[0.04em]"
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "var(--ink)",
              }}
            >
              {c.label}
            </span>
          </div>
        ))}
      </div>
      {/* Caption */}
      <div className="px-3 pt-1 pb-2">
        <div
          className="text-[11.5px] font-semibold leading-[1.35]"
          style={{ color: "var(--ink)" }}
        >
          Real bathrooms we remodeled in Irvine &mdash; swipe through.
        </div>
      </div>
      {/* CTA strip */}
      <div
        className="px-3 py-2 flex items-center justify-between border-t"
        style={{
          borderColor: "var(--border-color)",
          background: "var(--bg)",
        }}
      >
        <span
          className="text-[10px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          acmehvac.com
        </span>
        <span
          className="text-[10px] font-bold px-2 py-1 rounded"
          style={{
            background: "linear-gradient(180deg, #4A90F5 0%, #1877F2 100%)",
            color: "#fff",
          }}
        >
          Get Quote
        </span>
      </div>
    </div>
  )
}

/** Lead Form ad mockup */
function LeadFormMockup() {
  return (
    <div
      className="relative w-[220px] rounded-[16px] overflow-hidden"
      style={{
        background: "#fff",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.10), 0 18px 40px rgba(24,119,242,0.32)",
        border: "1px solid rgba(24,119,242,0.18)",
      }}
    >
      {/* Form header */}
      <div
        className="px-3 py-3 text-white"
        style={{
          background:
            "linear-gradient(180deg, #4A90F5 0%, #1877F2 100%)",
        }}
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-85">
          Lead form &middot; Step 1 of 2
        </div>
        <div className="mt-1 text-[14px] font-bold leading-tight">
          Book today &mdash; save $50 on your first repair.
        </div>
      </div>
      {/* Form fields (faked) */}
      <div className="px-3 py-3 space-y-2">
        {[
          { label: "Full name", value: "Jordan A." },
          { label: "Phone", value: "+1 (949) ••• ••32" },
          { label: "Service", value: "AC repair" },
        ].map((f) => (
          <div
            key={f.label}
            className="px-2.5 py-1.5 rounded-md border"
            style={{ borderColor: "var(--border-color)", background: "var(--bg)" }}
          >
            <div
              className="text-[8.5px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              {f.label}
            </div>
            <div
              className="text-[11.5px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              {f.value}
            </div>
          </div>
        ))}
        <button
          type="button"
          className="w-full px-3 py-2 rounded-md text-[11px] font-bold"
          style={{
            background:
              "linear-gradient(180deg, #4A90F5 0%, #1877F2 100%)",
            color: "#fff",
            boxShadow: "0 2px 6px rgba(24,119,242,0.45)",
          }}
        >
          Submit &amp; book
        </button>
      </div>
      {/* CRM ping */}
      <div
        className="px-3 py-2 flex items-center gap-2 border-t text-[10px]"
        style={{
          borderColor: "var(--border-color)",
          background:
            "linear-gradient(90deg, rgba(34,197,94,0.10) 0%, transparent 100%)",
        }}
      >
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(34,197,94,0.18)",
            color: "#15803D",
          }}
        >
          <Clock className="w-3 h-3" strokeWidth={2.5} />
        </span>
        <span
          className="font-semibold"
          style={{ color: "#15803D" }}
        >
          Synced to CRM &middot; 3.2s
        </span>
      </div>
    </div>
  )
}
