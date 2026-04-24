import Link from "next/link"
import { ArrowRight, Zap, Radio, Calendar } from "lucide-react"

const trustChips = [
  { Icon: Zap,      label: "Go-live in 14 days" },
  { Icon: Radio,    label: "24/7 AI answer service" },
  { Icon: Calendar, label: "No long-term contract" },
]

export function HsFinalCta() {
  return (
    <section id="hs-final-cta" aria-labelledby="hs-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #14B8A6 0%, #1677FF 55%, #EC4899 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.28), 0 30px 80px rgba(20,184,166,0.22)",
          }}
        >
          {/* Service-tag top stripe */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[6px]"
            style={{
              background: "repeating-linear-gradient(100deg, #F59E0B 0px, #F59E0B 14px, #0B132B 14px, #0B132B 24px)",
              opacity: 0.65,
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.38) 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(11,19,43,0.32) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.32)" }}
            >
              Home Services
            </span>

            <h2
              id="hs-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Book the moment.{" "}
              <span className="whitespace-nowrap">
                Keep the <span className="accent-underline">homeowner for life</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[660px] mx-auto"
              style={{ color: "rgba(255,255,255,0.94)" }}
            >
              Tell us the service you run, the zip codes you cover, and your biggest leak today. We&rsquo;ll map the exact website, Google ranking, and AI stack that stops the bleed and compounds the retention.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                Book a home-services consult
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
