import Link from "next/link"
import { ArrowRight, Check, Globe, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { customWebsiteTiers } from "@/lib/custom-website-data"

const includesByTier: Record<number, string[]> = {
  5: [
    "Custom design for your brand",
    "Works on every phone",
    "Shows up on Google",
    "Lead form to your inbox",
    "We host it — no monthly fee",
  ],
  11: [
    "Service-area page for your towns",
    "A page for each service you offer",
    "Reviews & photo gallery",
    "Lead form + chat-ready",
    "We host + handle updates",
  ],
  21: [
    "Full service menu",
    "City pages for every town you serve",
    "Photo gallery + project pages",
    "Reviews, FAQ, and trust signals",
    "Blog-ready when you want it",
  ],
  51: [
    "Big-business setup",
    "Multi-location ready",
    "Programmatic city + service pages",
    "Photo galleries, blog, resources",
    "Built to scale as you grow",
  ],
}

export function CustomWebsiteTiers() {
  return (
    <section
      id="tiers"
      aria-labelledby="tiers-heading"
      className="relative scroll-mt-24"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Simple pricing"
          heading={
            <span id="tiers-heading">
              Pick the size that fits{" "}
              <span className="whitespace-nowrap">
                your <span className="accent-underline">business</span>.
              </span>
            </span>
          }
          paragraph="Same custom design, same easy handoff — just pick how big your site needs to be."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {customWebsiteTiers.map((tier) => {
            const isPopular = tier.pages === 21
            return (
              <article
                key={tier.pages}
                className="relative flex flex-col rounded-[var(--radius-xl)] overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${isPopular ? `${tier.accent}66` : "var(--border-color)"}`,
                  boxShadow: isPopular
                    ? `0 1px 3px var(--shadow-color), 0 24px 60px ${tier.accent}33`
                    : "0 1px 3px var(--shadow-color), 0 6px 18px var(--shadow-color)",
                  transform: isPopular ? "translateY(-4px)" : undefined,
                }}
              >
                {/* Top accent stripe */}
                <div
                  aria-hidden
                  className="h-1.5 w-full"
                  style={{ background: tier.accent }}
                />

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center"
                      style={{
                        background: `${tier.accent}14`,
                        color: tier.accent,
                        border: `1px solid ${tier.accent}33`,
                      }}
                    >
                      <Globe className="w-6 h-6" strokeWidth={2.2} />
                    </span>
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                      style={{ background: `${tier.accent}14`, color: tier.accent }}
                    >
                      {tier.pages} pages
                    </span>
                  </div>

                  {isPopular && (
                    <div className="mt-4">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em]"
                        style={{
                          background: "rgba(245,158,11,0.14)",
                          color: "#B45309",
                          border: "1px solid rgba(245,158,11,0.40)",
                        }}
                      >
                        <Sparkles className="w-3 h-3" strokeWidth={2.4} />
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span
                      className="text-[42px] font-bold leading-none tracking-[-0.02em] tabular-nums"
                      style={{ color: "var(--ink)" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-[13px] font-semibold" style={{ color: "var(--muted)" }}>
                      one-time
                    </span>
                  </div>

                  <p className="mt-3 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                    {tier.blurb}
                  </p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {includesByTier[tier.pages]?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13.5px]"
                        style={{ color: "var(--ink)" }}
                      >
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${tier.accent}1A`, color: tier.accent }}
                        >
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact/schedule"
                    className="mt-6 inline-flex items-center justify-center gap-1.5 w-full px-4 py-3 rounded-[var(--radius-sm)] font-semibold text-[14.5px] transition-all duration-200 hover:translate-y-[-1px]"
                    style={
                      isPopular
                        ? {
                            background: `linear-gradient(180deg, ${tier.accent}E6 0%, ${tier.accent} 100%)`,
                            color: "#fff",
                            boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 8px 24px ${tier.accent}40`,
                          }
                        : {
                            background: "var(--bg)",
                            color: tier.accent,
                            border: `1px solid ${tier.accent}40`,
                          }
                    }
                  >
                    Get this site
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-9 text-center text-[14px]" style={{ color: "var(--muted)" }}>
          Need a bigger site than 51 pages?{" "}
          <a
            href="#sizing"
            className="font-semibold underline decoration-[var(--cyan)] decoration-2 underline-offset-4 hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--ink)" }}
          >
            Get a custom quote
          </a>
          .
        </p>
      </div>
    </section>
  )
}
