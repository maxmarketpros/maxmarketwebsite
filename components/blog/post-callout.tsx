import { MapPin, Sparkles, Quote } from "lucide-react"

type Variant = "tldr" | "quote" | "insight"

interface PostCalloutProps {
  variant?: Variant
  label?: string
  title?: string
  children: React.ReactNode
  attribution?: { name: string; title: string }
  showIrvinePin?: boolean
}

export function PostCallout({
  variant = "insight",
  label,
  title,
  children,
  attribution,
  showIrvinePin,
}: PostCalloutProps) {
  const isQuote = variant === "quote"
  const accent = variant === "quote" ? "var(--cyan)" : "var(--accent)"
  const IconComp = variant === "tldr" ? Sparkles : variant === "quote" ? Quote : MapPin
  const resolvedLabel =
    label ?? (variant === "tldr" ? "TL;DR" : variant === "quote" ? "From the field" : "Local insight")

  return (
    <aside
      className="relative my-8 sm:my-10"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 8px 28px var(--shadow-color)",
      }}
    >
      <div
        aria-hidden
        className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full"
        style={{ background: accent }}
      />
      <div className="px-5 sm:px-7 py-5 sm:py-6">
        <div className="flex items-center gap-2 mb-2.5">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ background: "var(--accent-bg)", color: accent }}
          >
            <IconComp className="w-4 h-4" strokeWidth={2.2} />
          </span>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: accent }}
          >
            {resolvedLabel}
          </span>
          {showIrvinePin ? (
            <span
              className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: "var(--muted)" }}
            >
              <MapPin className="w-3 h-3" />
              Written from 2600 Michelson Dr, Irvine, CA
            </span>
          ) : null}
        </div>
        {title ? (
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-snug mb-2"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h3>
        ) : null}
        <div
          className={`${isQuote ? "italic text-[17px] sm:text-[18.5px] leading-[1.55]" : "text-[15.5px] sm:text-[16.5px] leading-[1.6]"}`}
          style={{ color: isQuote ? "var(--ink)" : "var(--muted)" }}
        >
          {children}
        </div>
        {attribution ? (
          <div className="mt-3 text-[13px]" style={{ color: "var(--muted)" }}>
            — <span className="font-semibold" style={{ color: "var(--ink)" }}>{attribution.name}</span>, {attribution.title}
          </div>
        ) : null}
      </div>
    </aside>
  )
}
