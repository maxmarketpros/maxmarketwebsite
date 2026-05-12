import { ArrowRight, Globe, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { customWebsiteTiers } from "@/lib/plans-data"

const includesByTier: Record<number, string[]> = {
  5:  ["Custom design", "Mobile-optimized", "On-page SEO", "Hosting available"],
  11: ["Service-area pages", "Service-specific pages", "On-page SEO", "Lead form + tracking"],
  21: ["Full service catalog", "City / landing pages", "Blog-ready", "Schema markup"],
  51: ["Authority-grade IA", "Blog-ready at scale", "Modular page builder", "Programmatic SEO–ready"],
}

export function PlansCustomWebsiteTeaser() {
  return (
    <section id="custom-website" aria-labelledby="custom-website-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Website only"
          heading={
            <span id="custom-website-heading">
              Want a website without a{" "}
              <span className="whitespace-nowrap">
                monthly <span className="accent-underline">plan</span>?
              </span>
            </span>
          }
          paragraph="One-time custom website builds — own the site outright, add the monthly plan later when you&rsquo;re ready to scale."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {customWebsiteTiers.map((tier) => (
            <div
              key={tier.pages}
              className="relative flex flex-col p-6 sm:p-7 rounded-[var(--radius-xl)] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px var(--shadow-color), 0 6px 18px var(--shadow-color)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center"
                  style={{ background: `${tier.accent}14`, color: tier.accent, border: `1px solid ${tier.accent}33` }}
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

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-[34px] font-bold leading-none tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                  {tier.price}
                </span>
                <span className="text-[13px] font-medium" style={{ color: "var(--muted)" }}>
                  one-time
                </span>
              </div>

              <p className="mt-3 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                {tier.blurb}
              </p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {includesByTier[tier.pages]?.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${tier.accent}14`, color: tier.accent }}
                    >
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <PrimaryButton size="lg" asLink href="/plans/custom-website">
            View Custom Website Options
            <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.4} />
          </PrimaryButton>
          <span className="text-[13.5px]" style={{ color: "var(--muted)" }}>
            Includes design, build, on-page SEO setup, and launch.
          </span>
        </div>
      </div>
    </section>
  )
}
