import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { startermarkTierStrip } from "@/lib/startermark-data"

export function StarterMarkVsTiers() {
  return (
    <section
      aria-labelledby="startermark-vs-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Where StarterMark fits"
          heading={
            <span id="startermark-vs-heading">
              Start here.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Grow when you&rsquo;re ready</span>.
              </span>
            </span>
          }
          paragraph="StarterMark gets you on Google. When your phone starts ringing and you need more — directories, social, automation, AI — that's what the bigger plans are for."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {startermarkTierStrip.map((tier) => {
            const isCurrent = tier.current
            return (
              <div
                key={tier.name}
                className="relative flex flex-col p-7 rounded-[var(--radius-xl)] transition-all duration-200"
                style={{
                  background: isCurrent
                    ? `linear-gradient(180deg, ${tier.accent}10 0%, var(--surface) 60%)`
                    : "var(--surface)",
                  border: isCurrent ? `2px solid ${tier.accent}` : "1px solid var(--border-color)",
                  boxShadow: isCurrent
                    ? `0 10px 28px ${tier.accent}33, 0 1px 3px var(--shadow-color)`
                    : "0 1px 3px var(--shadow-color)",
                }}
              >
                {isCurrent && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white"
                    style={{
                      background: `linear-gradient(135deg, #74D3FF 0%, ${tier.accent} 60%, #0D5FD9 100%)`,
                      boxShadow: `0 4px 14px ${tier.accent}55`,
                    }}
                  >
                    <Rocket className="w-3 h-3 fill-current" strokeWidth={2.4} />
                    You&rsquo;re here
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
                    See {tier.name}
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                  </Link>
                )}

                {isCurrent && (
                  <Link
                    href={tier.href}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px]"
                    style={{
                      background: `linear-gradient(135deg, #74D3FF 0%, ${tier.accent} 60%, #0D5FD9 100%)`,
                      boxShadow: `0 4px 14px ${tier.accent}40`,
                    }}
                  >
                    Start with StarterMark
                    <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
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
