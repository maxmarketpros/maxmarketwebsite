import { Globe, ShieldCheck, Clock, ArrowUpRight } from "lucide-react"
import type { PageSnapshot } from "@/lib/seo-audit/types"

export function SiteSnapshot({ snapshot }: { snapshot: PageSnapshot }) {
  const host = (() => {
    try {
      return new URL(snapshot.finalUrl).hostname
    } catch {
      return snapshot.finalUrl
    }
  })()

  return (
    <div
      className="card-surface p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div
        className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 overflow-hidden"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        {snapshot.favicon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={snapshot.favicon}
            alt=""
            className="w-8 h-8 object-contain"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
        ) : (
          <Globe
            className="w-6 h-6"
            style={{ color: "var(--muted)" }}
            strokeWidth={2}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <a
          href={snapshot.finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[15px] sm:text-[16px] font-bold hover:underline"
          style={{ color: "var(--ink)" }}
        >
          {host}
          <ArrowUpRight className="w-4 h-4" style={{ color: "var(--muted)" }} strokeWidth={2.5} />
        </a>
        {snapshot.title && (
          <div
            className="mt-0.5 text-[13.5px] line-clamp-1"
            style={{ color: "var(--muted)" }}
          >
            {snapshot.title}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 shrink-0">
        {snapshot.https && (
          <Badge icon={<ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} />} text="HTTPS" tone="success" />
        )}
        <Badge
          icon={<Clock className="w-3.5 h-3.5" strokeWidth={2.5} />}
          text={`${snapshot.responseTimeMs}ms`}
          tone={snapshot.responseTimeMs > 2000 ? "warn" : "neutral"}
        />
        <Badge text={`HTTP ${snapshot.status}`} tone={snapshot.status >= 400 ? "warn" : "neutral"} />
      </div>
    </div>
  )
}

function Badge({
  icon,
  text,
  tone,
}: {
  icon?: React.ReactNode
  text: string
  tone: "success" | "warn" | "neutral"
}) {
  const styles =
    tone === "success"
      ? { bg: "rgba(22,163,74,0.10)", color: "#16A34A", border: "rgba(22,163,74,0.25)" }
      : tone === "warn"
        ? { bg: "rgba(245,158,11,0.12)", color: "#B45309", border: "rgba(245,158,11,0.30)" }
        : { bg: "var(--bg)", color: "var(--muted)", border: "var(--border-color)" }
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
      style={{
        background: styles.bg,
        color: styles.color,
        border: `1px solid ${styles.border}`,
      }}
    >
      {icon}
      {text}
    </span>
  )
}
