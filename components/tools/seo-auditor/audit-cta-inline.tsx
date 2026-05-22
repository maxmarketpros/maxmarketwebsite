import { ArrowRight, Sparkles } from "lucide-react"

interface AuditCtaInlineProps {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  href: string
}

export function AuditCtaInline({
  eyebrow,
  title,
  description,
  ctaLabel,
  href,
}: AuditCtaInlineProps) {
  return (
    <div
      className="relative overflow-hidden p-6 sm:p-8"
      style={{
        borderRadius: "var(--radius-xl)",
        background:
          "linear-gradient(135deg, rgba(22,119,255,0.95) 0%, rgba(11,19,43,0.95) 100%)",
        boxShadow:
          "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
      }}
    >
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(116,211,255,0.40) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.10em]"
            style={{
              background: "rgba(255,255,255,0.18)",
              color: "#FFFFFF",
              backdropFilter: "blur(8px)",
            }}
          >
            <Sparkles className="w-3 h-3" strokeWidth={2.5} />
            {eyebrow}
          </div>
          <h3
            className="mt-3 text-[20px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
            style={{ color: "#FFFFFF" }}
          >
            {title}
          </h3>
          <p
            className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {description}
          </p>
        </div>
        <a
          href={href}
          className="inline-flex items-center justify-center font-bold transition-all duration-200 rounded-[var(--radius-sm)] px-6 py-3 text-[15px] shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:translate-y-[-1px]"
          style={{ background: "#FFFFFF", color: "var(--accent)" }}
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
        </a>
      </div>
    </div>
  )
}
