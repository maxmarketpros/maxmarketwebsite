import Link from "next/link"
import { ChevronLeft, MapPin, Globe, Search, List, CheckCircle2 } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { LOCALMARK_ACCENT, LOCALMARK_BOOK_HREF } from "@/lib/localmark-data"

const trustChips = [
  { Icon: Globe,  label: "11-page site" },
  { Icon: Search, label: "15 keywords" },
  { Icon: List,   label: "40+ directories" },
  { Icon: MapPin, label: "GBP optimized" },
]

export function LocalMarkHero() {
  return (
    <section
      aria-labelledby="localmark-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient auras — green-tinted */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] sm:w-[1100px] sm:h-[720px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[24%] left-[8%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[18%] right-[6%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-12 sm:pt-14 lg:pt-20 pb-12 sm:pb-16">
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
          <span style={{ color: "var(--ink)" }}>LocalMark</span>
        </div>

        <div
          className="max-w-[920px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Plan pill — green */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: `${LOCALMARK_ACCENT}14`,
                borderColor: `${LOCALMARK_ACCENT}40`,
                color: LOCALMARK_ACCENT,
              }}
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.4} />
              LocalMark Plan
            </span>
          </div>

          {/* H1 */}
          <h1
            id="localmark-hero-heading"
            className="mt-6 text-[40px] xs:text-[48px] sm:text-[58px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="block">Get found in your</span>
            <span className="block whitespace-nowrap">
              <span className="accent-underline">service area</span>.
            </span>
          </h1>

          {/* Price block */}
          <div className="mt-7 flex items-center justify-center gap-2.5 flex-wrap">
            <span
              className="text-[56px] sm:text-[64px] font-bold leading-none tracking-[-0.025em]"
              style={{ color: "var(--ink)" }}
            >
              $499
            </span>
            <span className="text-[18px] font-medium" style={{ color: "var(--muted)" }}>
              /mo
            </span>
          </div>
          <p
            className="mt-2 inline-flex items-center justify-center gap-1.5 text-[13.5px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.4} style={{ color: LOCALMARK_ACCENT }} />
            Live in 30 days · fully managed in-house
          </p>

          {/* Description */}
          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[680px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Built for the small local service business that wants to dominate Google in their service area before adding social media, paid ads, or full CRM automation.
          </p>

          {/* Dual CTA — primary green */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={LOCALMARK_BOOK_HREF}
              className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: `linear-gradient(180deg, #34D26A 0%, ${LOCALMARK_ACCENT} 100%)`,
                boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 4px 12px ${LOCALMARK_ACCENT}40`,
              }}
            >
              Choose LocalMark
            </Link>
            <SecondaryButton asLink href="#localmark-features">
              See what&rsquo;s included
            </SecondaryButton>
          </div>

          {/* Trust chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {trustChips.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-semibold"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2.3} style={{ color: LOCALMARK_ACCENT }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
