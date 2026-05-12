import Link from "next/link"
import { ArrowRight, Zap, Star } from "lucide-react"

export function ServiceProFinalCta() {
  return (
    <section
      id="servicepro-final-cta"
      aria-labelledby="servicepro-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28 pt-4">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #7C3AED 28%, #DC2626 55%, #F59E0B 82%, #FCD34D 100%)",
            boxShadow:
              "0 10px 30px rgba(245,158,11,0.32), 0 30px 80px rgba(11,19,43,0.25)",
          }}
        >
          {/* 4-plan ribbon stripe */}
          <div aria-hidden className="absolute top-0 left-0 right-0 h-[6px] flex">
            {["#1677FF", "#22C55E", "#F59E0B", "#EC4899"].map((c) => (
              <div key={c} className="flex-1" style={{ background: c, opacity: 0.92 }} />
            ))}
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.36) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,0.24) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.22)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.32)",
              }}
            >
              <Star className="w-3 h-3 fill-current" strokeWidth={2.4} />
              Most Popular Plan
            </span>

            <h2
              id="servicepro-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Lock in ServicePro for{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">$899/mo</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[720px] mx-auto"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              16 features. 4 pillars. One in-house team building, automating, and reporting on your local marketing every day. We&rsquo;ll make sure it&rsquo;s the right fit on the first call.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "#D97706" }}
              >
                <Zap className="w-4 h-4 fill-current" strokeWidth={2.4} />
                Choose ServicePro
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                See all plans
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
