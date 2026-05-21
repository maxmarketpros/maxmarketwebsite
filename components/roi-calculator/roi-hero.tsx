import Link from "next/link"
import { Calculator, Check, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"

export function RoiHero() {
  return (
    <section
      id="roi-hero"
      aria-labelledby="roi-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[820px] h-[600px] sm:w-[1100px] sm:h-[760px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[18%] left-[6%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[18%] right-[4%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 text-center">
        <Pill>
          <Sparkles className="w-3.5 h-3.5 mr-1" strokeWidth={2.4} />
          ROI calculator
        </Pill>

        <h1
          id="roi-hero-heading"
          className="mt-6 text-[40px] xs:text-[46px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance max-w-[920px] mx-auto"
          style={{ color: "var(--ink)" }}
        >
          How many jobs to{" "}
          <span className="whitespace-nowrap">
            <span className="accent-underline">cover</span> your marketing?
          </span>
        </h1>

        <p
          className="mt-5 sm:mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Tell us your average profit per job. We&rsquo;ll show — honestly — how few jobs it takes to break even on each plan, plus a real range of extra work to expect.
        </p>

        {/* Trust strip */}
        <div
          className="mt-7 mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-medium px-5 py-2.5 rounded-full max-w-fit"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
            color: "var(--ink)",
          }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            Your numbers
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            No sales call
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            Honest ranges
          </span>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-1.5 px-7 sm:px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15.5px] sm:text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
            style={{
              background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
              boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 6px 18px rgba(22,119,255,0.3)",
            }}
          >
            <Calculator className="w-4 h-4" strokeWidth={2.4} />
            Run the numbers
          </a>
        </div>

        {/* Breadcrumb */}
        <div className="mt-8 text-[12.5px]" style={{ color: "var(--muted)" }}>
          <Link href="/resources" className="hover:underline" style={{ color: "var(--accent)" }}>
            Resources
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span>ROI Calculator</span>
        </div>
      </div>
    </section>
  )
}
