import Link from "next/link"
import { ArrowRight, ArrowLeft, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { serviceproTierStrip } from "@/lib/servicepro-data"

export function ServiceProVsTiers() {
  return (
    <section
      aria-labelledby="servicepro-vs-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Where ServicePro fits"
          heading={
            <span id="servicepro-vs-heading">
              Bigger than LocalMark,{" "}
              <span className="whitespace-nowrap">
                lighter than <span className="accent-underline">Signature</span>.
              </span>
            </span>
          }
          paragraph="ServicePro is the most popular plan because it’s the smallest package that covers the full local-marketing stack — for businesses that have hit a growth wall."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {serviceproTierStrip.map((tier) => {
            const isCurrent = tier.current
            return (
              <div
                key={tier.name}
                className="relative flex flex-col p-7 rounded-[var(--radius-xl)] transition-all duration-200"
                style={{
                  background: isCurrent ? `linear-gradient(180deg, ${tier.accent}0F 0%, var(--surface) 60%)` : "var(--bg)",
                  border: isCurrent ? `2px solid ${tier.accent}` : "1px solid var(--border-color)",
                  boxShadow: isCurrent
                    ? `0 8px 24px ${tier.accent}33, 0 1px 3px var(--shadow-color)`
                    : "0 1px 3px var(--shadow-color)",
                }}
              >
                {isCurrent && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white"
                    style={{
                      background: `linear-gradient(180deg, #FBBF24 0%, ${tier.accent} 60%, #D97706 100%)`,
                      boxShadow: `0 4px 12px ${tier.accent}50`,
                    }}
                  >
                    <Star className="w-3 h-3 fill-current" strokeWidth={2.4} />
                    You’re here
                  </span>
                )}

                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-[24px] sm:text-[26px] font-bold tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {tier.name}
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-[36px] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: isCurrent ? tier.accent : "var(--ink)" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                    {tier.cents}
                  </span>
                </div>

                <p
                  className="mt-4 text-[14.5px] leading-[1.55] flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {tier.unlock}
                </p>

                {!isCurrent && (
                  <Link
                    href={tier.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors hover:opacity-80"
                    style={{ color: tier.accent }}
                  >
                    {tier.name === "LocalMark" ? (
                      <>
                        <ArrowLeft className="w-4 h-4" strokeWidth={2.4} />
                        See {tier.name}
                      </>
                    ) : (
                      <>
                        Talk about {tier.name}
                        <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                      </>
                    )}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
