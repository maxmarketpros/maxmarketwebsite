import { Construction, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface UnderConstructionProps {
  title: string
  description?: string
  backHref?: string
  backLabel?: string
}

export function UnderConstruction({
  title,
  description = "We're building something great. This page will be available soon.",
  backHref = "/",
  backLabel = "Back to Home",
}: UnderConstructionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background aura */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 45%, var(--glow-blue) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 50% 55% at 50% 50%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 55% at 50% 50%, black 10%, transparent 70%)",
        }}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6">
        <div
          className="card-surface p-10 sm:p-12 text-center"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* Icon */}
          <div
            className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--glow-cyan) 0%, var(--glow-blue) 100%)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Construction
              className="w-7 h-7"
              style={{ color: "var(--accent)" }}
            />
          </div>

          {/* Badge */}
          <span
            className="inline-block mb-5 text-[11px] font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(22,119,255,0.08)",
              color: "var(--accent)",
              border: "1px solid rgba(22,119,255,0.15)",
            }}
          >
            Coming Soon
          </span>

          {/* Title */}
          <h1
            className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="text-[15px] leading-[1.65] max-w-[360px] mx-auto mb-8"
            style={{ color: "var(--muted)" }}
          >
            {description}
          </p>

          {/* Back link */}
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
