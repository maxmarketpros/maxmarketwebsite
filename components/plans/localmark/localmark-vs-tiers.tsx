import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { localmarkTierStrip } from "@/lib/localmark-data"

export function LocalMarkVsTiers() {
  return (
    <section
      aria-labelledby="localmark-vs-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Where LocalMark fits"
          heading={
            <span id="localmark-vs-heading">
              Step up from StarterMark,{" "}
              <span className="whitespace-nowrap">
                stop short of <span className="accent-underline">ServicePro</span>.
              </span>
            </span>
          }
          paragraph="Most local service businesses outgrow StarterMark fast — and don’t yet need the marketing volume of ServicePro. LocalMark is the sweet spot."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {localmarkTierStrip.map((tier) => {
            const isCurrent = tier.current
            return (
              <div
                key={tier.name}
                className="relative flex flex-col p-7 rounded-[var(--radius-xl)] transition-all duration-200"
                style={{
                  background: isCurrent ? `linear-gradient(180deg, ${tier.accent}0A 0%, var(--surface) 60%)` : "var(--bg)",
                  border: isCurrent ? `2px solid ${tier.accent}` : "1px solid var(--border-color)",
                  boxShadow: isCurrent
                    ? `0 8px 24px ${tier.accent}26, 0 1px 3px var(--shadow-color)`
                    : "0 1px 3px var(--shadow-color)",
                  transform: isCurrent ? undefined : undefined,
                }}
              >
                {isCurrent && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center text-[10.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white"
                    style={{
                      background: `linear-gradient(180deg, #34D26A 0%, ${tier.accent} 100%)`,
                      boxShadow: `0 4px 12px ${tier.accent}40`,
                    }}
                  >
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
                    {tier.name === "StarterMark" ? (
                      <>
                        <ArrowLeft className="w-4 h-4" strokeWidth={2.4} />
                        Talk about {tier.name}
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
