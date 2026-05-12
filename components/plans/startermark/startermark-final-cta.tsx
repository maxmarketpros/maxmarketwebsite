import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"

export function StarterMarkFinalCta() {
  return (
    <section
      id="startermark-final-cta"
      aria-labelledby="startermark-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28 pt-4">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #0D5FD9 45%, #1677FF 75%, #74D3FF 100%)",
            boxShadow:
              "0 10px 30px rgba(22,119,255,0.32), 0 30px 80px rgba(11,19,43,0.25)",
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
              background: "radial-gradient(circle, rgba(116,211,255,0.36) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(22,119,255,0.28) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.22)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.32)",
              }}
            >
              <Rocket className="w-3 h-3 fill-current" strokeWidth={2.4} />
              Foundation plan
            </span>

            <h2
              id="startermark-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Get on Google for{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">$199/mo</span>.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[680px] mx-auto"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              A real custom website, your Google Business Profile dialed in, and the basic local SEO foundations — live in 3 weeks. Let&rsquo;s make sure StarterMark is the right fit on the first call.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "#0D5FD9" }}
              >
                <Rocket className="w-4 h-4 fill-current" strokeWidth={2.4} />
                Start with StarterMark
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
