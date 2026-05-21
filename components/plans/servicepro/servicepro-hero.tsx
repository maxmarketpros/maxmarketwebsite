import Link from "next/link"
import { ChevronLeft, Star, Sparkles, Zap, Globe, Share2, MessageCircle, BarChart3 } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { SERVICEPRO_ACCENT, SERVICEPRO_ACCENT_DARK, SERVICEPRO_BOOK_HREF } from "@/lib/servicepro-data"

const pillarChips = [
  { Icon: Globe,         label: "Website & SEO",       color: "#1677FF" },
  { Icon: Share2,        label: "Social Media",        color: "#EC4899" },
  { Icon: MessageCircle, label: "Reviews & CRM",       color: "#7C3AED" },
  { Icon: BarChart3,     label: "Analytics & Payments", color: "#16A34A" },
]

export function ServiceProHero() {
  return (
    <section
      aria-labelledby="servicepro-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient auras — amber-themed */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[760px] h-[560px] sm:w-[1180px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.26) 0%, rgba(245,158,11,0.08) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[18%] left-[5%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.14) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[22%] right-[5%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)" }}
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
          <span style={{ color: "var(--ink)" }}>ServicePro</span>
        </div>

        <div
          className="max-w-[940px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Most Popular ribbon */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] rounded-full text-white relative"
              style={{
                background: `linear-gradient(135deg, #FCD34D 0%, #FBBF24 35%, ${SERVICEPRO_ACCENT} 70%, ${SERVICEPRO_ACCENT_DARK} 100%)`,
                boxShadow: `0 8px 22px ${SERVICEPRO_ACCENT}55, 0 2px 4px rgba(217,119,6,0.45)`,
              }}
            >
              <Star className="w-3.5 h-3.5 fill-current" strokeWidth={2.6} />
              Most Popular Plan
            </span>
          </div>

          {/* Plan name */}
          <p
            className="mt-5 text-[13px] font-bold uppercase tracking-[0.16em]"
            style={{ color: SERVICEPRO_ACCENT_DARK }}
          >
            ServicePro
          </p>

          {/* H1 */}
          <h1
            id="servicepro-hero-heading"
            className="mt-3 text-[40px] xs:text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-[1.02] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Booked solid.{" "}
            Without <span className="accent-underline">lifting a finger</span>.
          </h1>

          {/* Price block — multi-stop amber gradient with violet hint for richness */}
          <div className="mt-8 flex items-end justify-center gap-2">
            <span
              className="text-[64px] sm:text-[76px] font-bold leading-none tracking-[-0.03em]"
              style={{
                background: `linear-gradient(135deg, #FCD34D 0%, #FBBF24 35%, ${SERVICEPRO_ACCENT} 70%, ${SERVICEPRO_ACCENT_DARK} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $899
            </span>
            <span className="text-[20px] font-semibold pb-2" style={{ color: "var(--muted)" }}>
              /mo
            </span>
          </div>
          <div className="mt-3 flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `${SERVICEPRO_ACCENT}14`,
                border: `1px solid ${SERVICEPRO_ACCENT}33`,
                color: "var(--ink)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.4} style={{ color: SERVICEPRO_ACCENT }} />
              16 features &middot; 4 pillars &middot; one in-house team
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[720px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            The website, the local SEO, the reviews, the AI chatbot, the missed-call recovery, the social posting, the payments, the analytics &mdash; everything a growing local service business needs to scale, in one plan.
          </p>

          {/* Dual CTA — multi-stop amber gradient */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={SERVICEPRO_BOOK_HREF}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: `linear-gradient(135deg, #FCD34D 0%, #FBBF24 35%, ${SERVICEPRO_ACCENT} 70%, ${SERVICEPRO_ACCENT_DARK} 100%)`,
                boxShadow: `0 2px 4px rgba(217,119,6,0.30), 0 14px 32px ${SERVICEPRO_ACCENT}55`,
              }}
            >
              <Zap className="w-4 h-4 fill-current" strokeWidth={2.4} />
              Choose ServicePro
            </Link>
            <SecondaryButton asLink href="#servicepro-pillars">
              See the 16 features
            </SecondaryButton>
          </div>

          {/* Pillar shortcut chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {pillarChips.map(({ Icon, label, color }) => (
              <a
                key={label}
                href={`#pillar-${label.toLowerCase().split(" ")[0]}`}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${color}33`,
                  boxShadow: `0 1px 3px var(--shadow-color), 0 4px 14px ${color}14`,
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${color}14`, color }}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2.3} />
                </span>
                <span className="text-[13px] font-semibold" style={{ color: "var(--ink)" }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
