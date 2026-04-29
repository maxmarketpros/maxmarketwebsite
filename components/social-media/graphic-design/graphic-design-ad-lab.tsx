import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Target,
  ThumbsUp,
  Share2,
  MessageCircle,
} from "lucide-react"

interface Variant {
  id: string
  label: string
  angle: string
  headline: string
  primaryText: string
  bgGradient: string
  accent: string
  ctr: string
  cpm: string
  roas: string
  winning?: boolean
  trend: "up" | "down" | "flat"
}

const variants: Variant[] = [
  {
    id: "A",
    label: "Hook-led",
    angle: "Curiosity",
    headline: "The 3-second AC test every homeowner should know",
    primaryText:
      "If your AC fails this test, you&rsquo;re paying double on power. Here&rsquo;s the fix →",
    bgGradient:
      "linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #FB7185 100%)",
    accent: "#EC4899",
    ctr: "2.41%",
    cpm: "$8.20",
    roas: "3.1×",
    trend: "up",
  },
  {
    id: "B",
    label: "Offer-led",
    angle: "Direct response",
    headline: "$89 spring tune-up — same-week booking, 27 spots left",
    primaryText:
      "Service techs are filling up fast. Lock in your $89 tune-up before Friday.",
    bgGradient:
      "linear-gradient(135deg, #16A34A 0%, #22C55E 60%, #FCD34D 100%)",
    accent: "#16A34A",
    ctr: "3.14%",
    cpm: "$6.70",
    roas: "4.7×",
    winning: true,
    trend: "up",
  },
  {
    id: "C",
    label: "Social proof",
    angle: "Testimonial",
    headline: "&ldquo;On time, super clean — 5 stars all day&rdquo;",
    primaryText:
      "Real review from a real Tuesday call. Read why 1,200+ neighbors call us first.",
    bgGradient:
      "linear-gradient(135deg, #1E293B 0%, #1677FF 60%, #74D3FF 100%)",
    accent: "#1677FF",
    ctr: "1.92%",
    cpm: "$9.40",
    roas: "2.4×",
    trend: "down",
  },
]

export function GraphicDesignAdLab() {
  return (
    <section
      aria-labelledby="graphic-design-ad-lab-heading"
      className="relative"
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Ad Creative"
          heading={
            <span id="graphic-design-ad-lab-heading">
              Ad creative built to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">test</span>.
              </span>
            </span>
          }
          paragraph="Every campaign ships with three ad-creative variants — hook, offer, and social proof — sized for Instagram and Facebook ad design. Your media buyer A/B tests from day one, and we iterate on whichever angle wins."
        />

        <div className="mt-10 max-w-[1080px] mx-auto" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {/* Ads Manager mockup panel */}
          <div
            className="card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.14)",
            }}
          >
            {/* Top chrome */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 py-3"
              style={{
                background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center"
                  style={{ background: "#1677FF" }}
                >
                  <Target className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </span>
                <div className="flex flex-col leading-tight">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Ads Manager
                  </span>
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: "#fff" }}
                  >
                    Spring HVAC · Creative test 04
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span>Spend · $4,820</span>
                <span>Impressions · 1.2M</span>
                <span>Conversions · 312</span>
              </div>
            </div>

            {/* Column header */}
            <div
              className="hidden md:grid grid-cols-3 gap-4 px-4 sm:px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{
                background: "var(--bg)",
                borderBottom: "1px solid var(--border-color)",
                color: "var(--muted)",
              }}
            >
              <div>Variant A · Hook</div>
              <div>Variant B · Offer</div>
              <div>Variant C · Proof</div>
            </div>

            {/* Variants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-6">
              {variants.map((v) => (
                <VariantCard key={v.id} v={v} />
              ))}
            </div>

            {/* Footer winner banner */}
            <div
              className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(34,197,94,0.10) 0%, rgba(34,197,94,0) 60%)",
                borderTop: "1px solid rgba(34,197,94,0.25)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
                  }}
                >
                  <Trophy className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div>
                  <div
                    className="text-[12.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "#15803D" }}
                  >
                    Winning variant · B (Offer-led)
                  </div>
                  <div
                    className="text-[12.5px] font-medium leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    +30% CTR vs control. Scaling spend 3× into next test cycle.
                  </div>
                </div>
              </div>
              <SecondaryButton asLink href="/contact">
                Get ad creative variants
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VariantCard({ v }: { v: Variant }) {
  const TrendIcon = v.trend === "up" ? TrendingUp : v.trend === "down" ? TrendingDown : TrendingUp
  const trendColor = v.trend === "up" ? "#16A34A" : v.trend === "down" ? "#DC2626" : "#64748B"
  return (
    <article
      className="relative flex flex-col rounded-[var(--radius-lg)] overflow-hidden border bg-white"
      style={{
        borderColor: v.winning ? `${v.accent}66` : "var(--border-color)",
        boxShadow: v.winning
          ? `0 4px 18px ${v.accent}22, 0 0 0 2px ${v.accent}33`
          : "0 1px 3px rgba(17,35,68,0.06)",
      }}
    >
      {v.winning && (
        <span
          className="absolute -top-2 left-3 px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-[0.12em] z-10"
          style={{
            background: `linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)`,
            color: "#fff",
            boxShadow: "0 4px 12px rgba(34,197,94,0.35)",
          }}
        >
          Winner
        </span>
      )}

      {/* IG/FB ad shell */}
      <div className="px-3 pt-3 pb-2 flex items-center gap-2" style={{ borderBottom: "1px solid var(--border-color)" }}>
        <span
          className="w-7 h-7 rounded-full"
          style={{ background: v.bgGradient }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-[11.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            Acme HVAC
          </div>
          <div className="text-[10px]" style={{ color: "var(--muted)" }}>
            Sponsored · Variant {v.id}
          </div>
        </div>
        <span
          className="text-[8.5px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
          style={{ background: `${v.accent}1A`, color: v.accent }}
        >
          {v.angle}
        </span>
      </div>

      <div
        className="px-3 py-2.5 text-[12.5px] leading-[1.4]"
        style={{ color: "var(--ink)" }}
        dangerouslySetInnerHTML={{ __html: v.primaryText }}
      />

      {/* Creative */}
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ background: v.bgGradient }}
      >
        <div
          aria-hidden
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-3 bottom-3 z-10">
          <div
            className="text-[14px] sm:text-[16px] font-extrabold leading-[1.05] tracking-[-0.01em]"
            style={{ color: "#fff" }}
            dangerouslySetInnerHTML={{ __html: v.headline }}
          />
        </div>
        <span
          className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "rgba(255,255,255,0.92)", color: v.accent }}
        >
          {v.label}
        </span>
      </div>

      {/* Reactions row */}
      <div
        className="flex items-center justify-between px-3 py-2 text-[10.5px] font-semibold"
        style={{ background: "#fff", color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
      >
        <span className="inline-flex items-center gap-1">
          <ThumbsUp className="w-3 h-3" strokeWidth={2.5} />
          1.2K
        </span>
        <span className="inline-flex items-center gap-1">
          <MessageCircle className="w-3 h-3" strokeWidth={2.5} />
          84
        </span>
        <span className="inline-flex items-center gap-1">
          <Share2 className="w-3 h-3" strokeWidth={2.5} />
          37
        </span>
      </div>

      {/* CTA */}
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border-color)" }}
      >
        <div>
          <div
            className="text-[8.5px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--muted)" }}
          >
            ACMEHVAC.COM
          </div>
          <div
            className="text-[10.5px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Same-day booking
          </div>
        </div>
        <span
          className="px-2.5 py-1 rounded-md text-[9.5px] font-bold uppercase tracking-[0.08em]"
          style={{ background: v.accent, color: "#fff" }}
        >
          Learn more
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 divide-x" style={{ borderTop: "1px solid var(--border-color)" }}>
        {[
          { label: "CTR", value: v.ctr, badge: v.trend === "up" },
          { label: "CPM", value: v.cpm, badge: false },
          { label: "ROAS", value: v.roas, badge: v.trend === "up" },
        ].map((s, i) => (
          <div key={i} className="px-3 py-2.5 flex flex-col gap-0.5" style={{ borderColor: "var(--border-color)" }}>
            <span
              className="text-[8.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              {s.label}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[14px] font-extrabold" style={{ color: "var(--ink)" }}>
                {s.value}
              </span>
              {s.badge && (
                <TrendIcon className="w-3 h-3" strokeWidth={2.75} style={{ color: trendColor }} />
              )}
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}
