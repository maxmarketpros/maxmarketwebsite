import Link from "next/link"
import { ArrowRight, Search, Zap, Globe } from "lucide-react"

const trustChips = [
  { Icon: Search, label: "Top-3 Map Pack target" },
  { Icon: Globe,  label: "Custom-coded site" },
  { Icon: Zap,    label: "Go-live in 14 days" },
]

export function LsvcFinalCta() {
  return (
    <section id="lsvc-final-cta" aria-labelledby="lsvc-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #0B132B 0%, #1677FF 55%, #74D3FF 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.30), 0 30px 80px rgba(11,19,43,0.25)",
          }}
        >
          {/* Map-grid top stripe */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[6px]"
            style={{
              background:
                "repeating-linear-gradient(100deg, #74D3FF 0px, #74D3FF 16px, #0B132B 16px, #0B132B 26px)",
              opacity: 0.6,
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[460px] h-[460px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.38) 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.22) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          {/* Subtle map grid background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.32)" }}
            >
              Local Service Businesses
            </span>

            <h2
              id="lsvc-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Rank where your customers{" "}
              <span className="whitespace-nowrap">
                actually <span className="accent-underline">search</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto"
              style={{ color: "rgba(255,255,255,0.94)" }}
            >
              Tell us the service you run and the city you want to own. We&rsquo;ll audit your current Google footprint, spec the site, and show you exactly which slots we can lock down inside 90 days.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                Book a local-service consult
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
