import { ArrowRight } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import type { Partner } from "./partners-data"

type Variant = "compact" | "featured"

interface PartnerCardProps {
  partner: Partner
  variant?: Variant
}

export function PartnerCard({ partner, variant = "compact" }: PartnerCardProps) {
  const isFeatured = variant === "featured"

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const className = `card-surface card-surface-hover relative overflow-hidden group block ${
      isFeatured ? "p-7 sm:p-8" : "p-6"
    }`
    if (partner.href) {
      return (
        <a href={partner.href} aria-label={`Learn more about ${partner.name}`} className={className}>
          {children}
        </a>
      )
    }
    return <div className={className}>{children}</div>
  }

  return (
    <Wrapper>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-[-40px] w-[200px] h-[200px]"
        style={{
          background: `radial-gradient(ellipse at center, ${partner.color}1F 0%, transparent 70%)`,
        }}
      />

      <div className={`relative flex ${isFeatured ? "flex-col gap-5" : "flex-col gap-4"}`}>
        <PartnerIcon partner={partner} large={isFeatured} />

        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold tracking-[-0.01em] ${
              isFeatured ? "text-[20px] sm:text-[22px]" : "text-[17px]"
            }`}
            style={{ color: "var(--ink)" }}
          >
            {partner.name}
          </h3>
          <p
            className={`mt-1.5 leading-[1.55] ${
              isFeatured ? "text-[15px]" : "text-[14px]"
            }`}
            style={{ color: "var(--muted)" }}
          >
            {partner.role}
          </p>

          {partner.href && (
            <div
              className={`mt-3.5 inline-flex items-center gap-1 font-semibold ${
                isFeatured ? "text-[14px]" : "text-[13.5px]"
              }`}
              style={{ color: partner.color }}
            >
              Learn more
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

function PartnerIcon({ partner: p, large }: { partner: Partner; large?: boolean }) {
  const sizeClass = large ? "w-[120px] h-[120px]" : "w-[76px] h-[76px]"
  const monogramText = large ? "text-[44px]" : "text-[28px]"

  if (p.iconKind === "icons8" && p.iconId) {
    const imgSize = large ? 76 : 50
    return (
      <div
        className={`${sizeClass} rounded-[var(--radius-md)] flex items-center justify-center shrink-0`}
        style={{ background: `${p.color}14` }}
      >
        <img
          src={icons8Url(p.iconId, 192)}
          alt={`${p.name} logo`}
          width={imgSize}
          height={imgSize}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{ width: imgSize, height: imgSize }}
        />
      </div>
    )
  }

  if (p.iconKind === "asset" && p.asset) {
    const padding = large ? 18 : 12
    return (
      <div
        className={`${sizeClass} rounded-[var(--radius-md)] flex items-center justify-center shrink-0 bg-white`}
        style={{
          border: `1px solid ${p.color}22`,
          padding,
        }}
      >
        <img
          src={p.asset}
          alt={`${p.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className={`${sizeClass} ${monogramText} rounded-[var(--radius-md)] flex items-center justify-center shrink-0 font-bold`}
      style={{
        background: p.monogramBg,
        color: p.monogramColor,
        letterSpacing: "-0.02em",
        fontFamily: "Outfit, sans-serif",
      }}
      aria-label={`${p.name} logo`}
    >
      {p.monogram}
    </div>
  )
}
