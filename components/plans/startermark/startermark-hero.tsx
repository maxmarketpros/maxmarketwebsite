import Link from "next/link"
import { ChevronLeft, Rocket, Sparkles } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  STARTERMARK_ACCENT,
  STARTERMARK_ACCENT_DARK,
  STARTERMARK_ACCENT_LIGHT,
  STARTERMARK_BOOK_HREF,
} from "@/lib/startermark-data"

export function StarterMarkHero() {
  return (
    <section
      aria-labelledby="startermark-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient auras — blue/cyan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[760px] h-[560px] sm:w-[1180px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.22) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[22%] left-[8%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[24%] right-[8%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-12 sm:pt-14 lg:pt-20 pb-14 sm:pb-16">
        {/* Breadcrumb */}
        <div
          className="mb-8 flex items-center gap-1.5 text-[13px] font-medium"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}
        >
          <Link
            href="/plans"
            className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: "var(--muted)" }}
          >
            <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.3} />
            All plans
          </Link>
          <span style={{ color: "var(--border-color)" }}>/</span>
          <span style={{ color: "var(--ink)" }}>StarterMark</span>
        </div>

        <div
          className="max-w-[860px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Foundation badge */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] rounded-full text-white relative"
              style={{
                background: `linear-gradient(135deg, ${STARTERMARK_ACCENT_LIGHT} 0%, ${STARTERMARK_ACCENT} 60%, ${STARTERMARK_ACCENT_DARK} 100%)`,
                boxShadow: `0 8px 22px ${STARTERMARK_ACCENT}50, 0 2px 4px rgba(13,95,217,0.4)`,
              }}
            >
              <Rocket className="w-3.5 h-3.5 fill-current" strokeWidth={2.6} />
              Foundation plan
            </span>
          </div>

          {/* Plan name */}
          <p
            className="mt-5 text-[13px] font-bold uppercase tracking-[0.16em]"
            style={{ color: STARTERMARK_ACCENT_DARK }}
          >
            StarterMark
          </p>

          {/* H1 */}
          <h1
            id="startermark-hero-heading"
            className="mt-3 text-[40px] xs:text-[48px] sm:text-[58px] lg:text-[68px] font-bold leading-[1.03] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="block">Your first real website.</span>
            <span className="block whitespace-nowrap">
              Done <span className="accent-underline">right</span>.
            </span>
          </h1>

          {/* Price block */}
          <div className="mt-8 flex items-end justify-center gap-2">
            <span
              className="text-[60px] sm:text-[72px] font-bold leading-none tracking-[-0.03em]"
              style={{
                background: `linear-gradient(135deg, ${STARTERMARK_ACCENT_LIGHT} 0%, ${STARTERMARK_ACCENT} 60%, ${STARTERMARK_ACCENT_DARK} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $199
            </span>
            <span className="text-[20px] font-semibold pb-2" style={{ color: "var(--muted)" }}>
              /mo
            </span>
          </div>
          <div className="mt-3 flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `${STARTERMARK_ACCENT}14`,
                border: `1px solid ${STARTERMARK_ACCENT}33`,
                color: "var(--ink)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.4} style={{ color: STARTERMARK_ACCENT }} />
              7 features &middot; 3-week launch &middot; everything you need to start
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] max-w-[680px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            A real custom website, your Google Business Profile dialed in, and the basic local SEO foundations that actually get you found. The smart first step — not the cheap shortcut.
          </p>

          {/* Dual CTA */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={STARTERMARK_BOOK_HREF}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: `linear-gradient(135deg, ${STARTERMARK_ACCENT_LIGHT} 0%, ${STARTERMARK_ACCENT} 60%, ${STARTERMARK_ACCENT_DARK} 100%)`,
                boxShadow: `0 2px 4px rgba(13,95,217,0.30), 0 14px 32px ${STARTERMARK_ACCENT}55`,
              }}
            >
              <Rocket className="w-4 h-4 fill-current" strokeWidth={2.4} />
              Start with StarterMark
            </Link>
            <SecondaryButton asLink href="#startermark-features">
              See what&rsquo;s included
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
