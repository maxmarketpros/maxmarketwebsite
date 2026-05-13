import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CustomWebsiteFinalCta() {
  return (
    <section
      id="custom-website-final-cta"
      aria-labelledby="custom-website-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-16 sm:pb-20 lg:pb-24">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #0B132B 0%, #1677FF 55%, #74D3FF 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.28), 0 30px 80px rgba(11,19,43,0.25)",
          }}
        >
          {/* Tier-accent ribbon */}
          <div aria-hidden className="absolute top-0 left-0 right-0 h-[6px] flex">
            {["#1677FF", "#22C55E", "#F59E0B", "#EC4899"].map((c) => (
              <div key={c} className="flex-1" style={{ background: c, opacity: 0.95 }} />
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
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.18)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.32)",
              }}
            >
              From $1,200 · one-time
            </span>

            <h2
              id="custom-website-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Get a site that books{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">jobs</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[660px] mx-auto"
              style={{ color: "rgba(255,255,255,0.94)" }}
            >
              Pick a size, jump on a free call, and get a fixed launch date.
              You handle the calls — we handle everything else.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#tiers"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                See pricing
              </Link>
              <Link
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                Book a free call
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>

            <p
              className="mt-8 text-[13px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Or grow alongside a{" "}
              <a
                href="/plans"
                className="underline hover:text-white transition-colors font-semibold"
              >
                monthly marketing plan
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
