import Link from "next/link"
import { ArrowRight, Zap, Target } from "lucide-react"

const trustChips = [
  { Icon: Zap,    label: "Go-live in 14 days" },
  { Icon: Target, label: "Vertical-tuned playbook" },
]

export function HubFinalCta() {
  return (
    <section id="hub-final-cta" aria-labelledby="hub-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #0B132B 0%, #1677FF 45%, #8B5CF6 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.28), 0 30px 80px rgba(11,19,43,0.25)",
          }}
        >
          {/* Six-color ribbon stripe (reps each industry vertical) */}
          <div aria-hidden className="absolute top-0 left-0 right-0 h-[6px] flex">
            {["#EF4444", "#14B8A6", "#1677FF", "#EC4899", "#22C55E", "#F59E0B"].map((c) => (
              <div key={c} className="flex-1" style={{ background: c, opacity: 0.92 }} />
            ))}
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[460px] h-[460px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.36) 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.26) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.32)" }}
            >
              Industries &middot; Every vertical
            </span>

            <h2
              id="hub-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Pick your vertical.{" "}
              <span className="whitespace-nowrap">
                We&rsquo;ll map <span className="accent-underline">the rest</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[680px] mx-auto"
              style={{ color: "rgba(255,255,255,0.94)" }}
            >
              Tell us your industry, your service radius, and the one metric you wish moved faster. We&rsquo;ll come back with the exact website, SEO, ads, and booking stack that industry runs on &mdash; priced a la carte or bundled.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                Book a strategy call
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                See a la carte plans
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustChips.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-[13.5px] font-medium"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  <Icon className="w-4 h-4" strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
