import Link from "next/link"
import { ArrowRight, Zap, Smartphone, BarChart3 } from "lucide-react"

const trustChips = [
  { Icon: Zap,        label: "14-day launch" },
  { Icon: Smartphone, label: "POS-agnostic" },
  { Icon: BarChart3,  label: "Weekly reporting" },
]

export function RestFinalCta() {
  return (
    <section aria-labelledby="rest-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #F97316 0%, #DC2626 50%, #EC4899 100%)",
            boxShadow: "0 10px 30px rgba(249,115,22,0.28), 0 30px 80px rgba(220,38,38,0.22)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(254,243,199,0.30) 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(11,19,43,0.22) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Restaurants
            </span>

            <h2
              id="rest-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              More orders, more tables,{" "}
              <span className="whitespace-nowrap">more regulars.</span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Tell us your concept and your busiest and slowest dayparts; we&rsquo;ll map the exact site, ads, and review motion that move the needle first.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "#DC2626" }}
              >
                Book a restaurant consult
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
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
