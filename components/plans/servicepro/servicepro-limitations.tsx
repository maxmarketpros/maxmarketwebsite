import Link from "next/link"
import { ArrowRight, Crown } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { limitationsSignatureOnly } from "@/lib/servicepro-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function ServiceProLimitations() {
  return (
    <section
      aria-labelledby="servicepro-limits-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-10%] w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Honest limits"
          heading={
            <span id="servicepro-limits-heading">
              What ServicePro doesn’t include —{" "}
              <span className="whitespace-nowrap">
                only <span className="accent-underline">Signature</span> does.
              </span>
            </span>
          }
          paragraph="ServicePro is the conversion + automation engine. If you need full media production, paid ads management, or marketing-scale automation, that’s Signature territory."
        />

        <div
          className="mt-12 mx-auto max-w-[1000px] rounded-[var(--radius-xl)] p-7 sm:p-9 relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid rgba(236,72,153,0.35)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 32px rgba(236,72,153,0.10)",
          }}
        >
          {/* Aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(180deg, #F472B6 0%, #EC4899 100%)" }}
                >
                  <Crown className="w-3 h-3 fill-current" strokeWidth={2.4} />
                  Available in Signature
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[28px] sm:text-[32px] font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                    Signature
                  </span>
                  <span className="text-[18px] font-semibold" style={{ color: "#EC4899" }}>
                    $1,499/mo
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.55] max-w-[600px]" style={{ color: "var(--muted)" }}>
                  Need any of the below? Signature is the top tier — full marketing engine with ads, video, blogs, custom backlinks, and marketing automation.
                </p>
              </div>
              <Link
                href="/contact/schedule"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(180deg, #F472B6 0%, #EC4899 100%)",
                  boxShadow: "0 4px 14px rgba(236,72,153,0.40)",
                }}
              >
                Talk to us about Signature
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </Link>
            </div>

            <div className="my-6 h-px" style={{ background: "var(--border-color)" }} />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {limitationsSignatureOnly.map((item) => {
                const Icon = getIcon(item.iconName)
                return (
                  <li key={item.label} className="flex items-start gap-3 text-[14px] leading-[1.45]" style={{ color: "var(--ink)" }}>
                    <span
                      className="mt-0.5 w-6 h-6 rounded-[7px] flex items-center justify-center shrink-0"
                      style={{ background: "rgba(236,72,153,0.14)", color: "#EC4899" }}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.3} />
                    </span>
                    {item.label}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-10 rounded-[var(--radius-xl)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
          }}
        >
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold" style={{ color: "var(--ink)" }}>
              ServicePro fits 90% of growing local businesses.
            </h3>
            <p className="mt-1 text-[14.5px]" style={{ color: "var(--muted)" }}>
              Not sure? See the full side-by-side or talk it through with us.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <SecondaryButton asLink href="/plans#compare">
              Compare all plans
            </SecondaryButton>
            <Link
              href="/contact/schedule"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white transition-all hover:translate-y-[-1px]"
              style={{
                background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%)",
                boxShadow: "0 1px 2px rgba(217,119,6,0.25), 0 6px 18px rgba(245,158,11,0.40)",
              }}
            >
              Book a strategy call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
