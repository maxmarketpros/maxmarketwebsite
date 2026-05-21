import Link from "next/link"
import { ArrowRight, Calendar, LayoutGrid } from "lucide-react"

export function RoiClosingCta() {
  return (
    <section
      aria-labelledby="roi-closing-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[820px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.04) 40%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-4 pb-24 sm:pb-28 lg:pb-32 text-center">
        <div
          className="mx-auto max-w-[760px] rounded-[var(--radius-xl)] p-8 sm:p-12"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 16px 48px var(--shadow-color)",
          }}
        >
          <h2
            id="roi-closing-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.1] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Ready to make this <span className="accent-underline">your numbers</span>?
          </h2>
          <p
            className="mt-4 text-[16px] sm:text-[17.5px] leading-[1.6] max-w-[520px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Book a 20-minute strategy call. We&rsquo;ll pressure-test the assumptions above against your actual job size, close rate, and market.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact/schedule"
              className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15.5px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 6px 18px rgba(22,119,255,0.3)",
              }}
            >
              <Calendar className="w-4 h-4" strokeWidth={2.4} />
              Book a strategy call
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-all duration-200 hover:bg-[var(--bg)]"
              style={{
                color: "var(--accent)",
                border: "1px solid var(--border-color)",
                background: "transparent",
              }}
            >
              <LayoutGrid className="w-4 h-4" strokeWidth={2.4} />
              See all plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
