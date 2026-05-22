import Link from "next/link"
import { ArrowRight, ArrowLeft, Crown } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { signatureTierStrip } from "@/lib/signature-data"

export function SignatureVsTiers() {
  return (
    <section
      aria-labelledby="signature-vs-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Where Signature fits"
          heading={
            <span id="signature-vs-heading">
              The top of the lineup —{" "}
              <span className="whitespace-nowrap">
                and the only <span className="accent-underline">flagship</span> plan.
              </span>
            </span>
          }
          paragraph="LocalMark gets you found. ServicePro converts. Signature owns the whole marketing function — production, paid, organic, automation, reporting."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {signatureTierStrip.map((tier) => {
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
                      background: "linear-gradient(135deg, #F59E0B 0%, #F472B6 45%, #EC4899 70%, #BE185D 100%)",
                      boxShadow: `0 4px 14px ${tier.accent}55`,
                    }}
                  >
                    <Crown className="w-3 h-3 fill-current" strokeWidth={2.4} />
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
                    <ArrowLeft className="w-4 h-4" strokeWidth={2.4} />
                    See {tier.name}
                  </Link>
                )}

                {isCurrent && (
                  <Link
                    href={tier.href}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px]"
                    style={{
                      background: "linear-gradient(135deg, #F472B6 0%, #EC4899 60%, #BE185D 100%)",
                      boxShadow: `0 4px 14px ${tier.accent}40`,
                    }}
                  >
                    Book a Signature call
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
