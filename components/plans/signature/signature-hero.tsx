import Link from "next/link"
import {
  ChevronLeft,
  Crown,
  Sparkles,
  Globe,
  Video,
  Megaphone,
  MessageCircle,
  BarChart3,
} from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  SIGNATURE_ACCENT,
  SIGNATURE_ACCENT_DARK,
  SIGNATURE_ACCENT_LIGHT,
  SIGNATURE_GOLD,
  SIGNATURE_BOOK_HREF,
} from "@/lib/signature-data"

const pillarChips = [
  { Icon: Globe,         label: "Website & SEO",      anchor: "website",  color: "#1677FF" },
  { Icon: Video,         label: "Media Production",   anchor: "media",    color: "#DC2626" },
  { Icon: Megaphone,     label: "Social, Ads & Channels", anchor: "channels", color: "#EC4899" },
  { Icon: MessageCircle, label: "Reviews & CRM",      anchor: "reviews",  color: "#7C3AED" },
  { Icon: BarChart3,     label: "Analytics & Payments", anchor: "analytics", color: "#16A34A" },
]

export function SignatureHero() {
  return (
    <section
      aria-labelledby="signature-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient auras — pink + violet + gold for a premium feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[760px] h-[560px] sm:w-[1180px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.22) 0%, rgba(236,72,153,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[18%] left-[5%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[22%] right-[5%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.10) 0%, transparent 70%)" }}
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
          <span style={{ color: "var(--ink)" }}>Signature</span>
        </div>

        <div
          className="max-w-[940px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Flagship crown ribbon */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] rounded-full text-white relative"
              style={{
                background: `linear-gradient(135deg, ${SIGNATURE_GOLD} 0%, ${SIGNATURE_ACCENT_LIGHT} 45%, ${SIGNATURE_ACCENT} 70%, ${SIGNATURE_ACCENT_DARK} 100%)`,
                boxShadow: `0 8px 22px ${SIGNATURE_ACCENT}50, 0 2px 4px rgba(190,24,93,0.4)`,
              }}
            >
              <Crown className="w-3.5 h-3.5 fill-current" strokeWidth={2.6} />
              Flagship tier
            </span>
          </div>

          {/* Plan name */}
          <p
            className="mt-5 text-[13px] font-bold uppercase tracking-[0.16em]"
            style={{ color: SIGNATURE_ACCENT_DARK }}
          >
            Signature
          </p>

          {/* H1 */}
          <h1
            id="signature-hero-heading"
            className="mt-3 text-[40px] xs:text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-[1.02] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Fully booked.{" "}
            <span className="whitespace-nowrap">
              Fully <span className="accent-underline">managed</span>.
            </span>
          </h1>

          {/* Price block — pink/gold gradient text */}
          <div className="mt-8 flex items-end justify-center gap-2">
            <span
              className="text-[64px] sm:text-[76px] font-bold leading-none tracking-[-0.03em]"
              style={{
                background: `linear-gradient(135deg, ${SIGNATURE_GOLD} 0%, ${SIGNATURE_ACCENT_LIGHT} 40%, ${SIGNATURE_ACCENT} 70%, ${SIGNATURE_ACCENT_DARK} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $1,499
            </span>
            <span className="text-[20px] font-semibold pb-2" style={{ color: "var(--muted)" }}>
              /mo
            </span>
          </div>
          <div className="mt-3 flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `${SIGNATURE_ACCENT}14`,
                border: `1px solid ${SIGNATURE_ACCENT}33`,
                color: "var(--ink)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.4} style={{ color: SIGNATURE_ACCENT }} />
              26 features &middot; 5 pillars &middot; in-house production team
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[740px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Everything ServicePro has — plus the media production, paid ads, blog content, and automation a full marketing department would handle. The only plan built for operators ready to <em>stop</em> being the marketing team.
          </p>

          {/* Dual CTA — pink gradient */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={SIGNATURE_BOOK_HREF}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: `linear-gradient(135deg, ${SIGNATURE_GOLD} 0%, ${SIGNATURE_ACCENT_LIGHT} 40%, ${SIGNATURE_ACCENT} 70%, ${SIGNATURE_ACCENT_DARK} 100%)`,
                boxShadow: `0 2px 4px rgba(190,24,93,0.30), 0 14px 32px ${SIGNATURE_ACCENT}55`,
              }}
            >
              <Crown className="w-4 h-4 fill-current" strokeWidth={2.4} />
              Book a Signature strategy call
            </Link>
            <SecondaryButton asLink href="#signature-pillars">
              Tour the 5 pillars
            </SecondaryButton>
          </div>

          {/* Pillar shortcut chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {pillarChips.map(({ Icon, label, anchor, color }) => (
              <a
                key={label}
                href={`#pillar-${anchor}`}
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
