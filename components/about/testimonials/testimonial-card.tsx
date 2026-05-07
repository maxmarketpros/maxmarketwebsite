import { Star } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import type { Testimonial } from "./testimonials-data"

interface TestimonialCardProps {
  t: Testimonial
  className?: string
  /** When true, renders body without line-clamp so long reviews show fully (e.g. 2-col span) */
  expanded?: boolean
}

export function TestimonialCard({ t, className, expanded }: TestimonialCardProps) {
  return (
    <article
      className={`card-surface card-surface-hover p-6 sm:p-7 flex flex-col ${className ?? ""}`}
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      {/* Header: avatar + name + meta */}
      <header className="flex items-start gap-3.5">
        <Avatar t={t} />
        <div className="flex-1 min-w-0">
          <h3
            className="text-[16px] font-bold leading-tight truncate"
            style={{ color: "var(--ink)" }}
          >
            {t.name}
          </h3>
          <div
            className="mt-1 text-[12px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            {formatMeta(t)}
          </div>
        </div>
        <img
          src={icons8Url("17949", 64)}
          alt="Google"
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5"
          title="Posted on Google"
        />
      </header>

      {/* Stars */}
      <div className="mt-4 flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-4 h-4" fill="#FBBF24" strokeWidth={0} />
        ))}
      </div>

      {/* Body */}
      <p
        className={`mt-3 text-[15px] leading-[1.55] font-medium flex-1 ${
          expanded ? "" : "line-clamp-[8]"
        }`}
        style={{ color: "var(--muted)" }}
      >
        &ldquo;{t.body}&rdquo;
      </p>

      {/* Footer: tags */}
      {(t.industry || t.teamMember) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {t.industry && (
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.06em] border"
              style={{
                background: `${t.industryColor ?? "#1677FF"}10`,
                borderColor: `${t.industryColor ?? "#1677FF"}40`,
                color: t.industryColor ?? "#1677FF",
              }}
            >
              {t.industry}
            </span>
          )}
          {t.teamMember && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.06em] border"
              style={{
                background: "rgba(22,119,255,0.06)",
                borderColor: "rgba(22,119,255,0.25)",
                color: "var(--accent)",
              }}
            >
              <Star className="w-2.5 h-2.5" fill="currentColor" strokeWidth={0} />
              {t.teamMember}
            </span>
          )}
        </div>
      )}
    </article>
  )
}

function Avatar({ t }: { t: Testimonial }) {
  if (t.avatar.kind === "photo") {
    return (
      <img
        src={t.avatar.src}
        alt={t.name}
        width={44}
        height={44}
        loading="lazy"
        decoding="async"
        className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        style={{ border: "1px solid var(--border-color)" }}
      />
    )
  }
  return (
    <div
      className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-[17px] font-bold"
      style={{
        background: t.avatar.bg,
        color: t.avatar.fg ?? "#fff",
      }}
      aria-label={t.name}
    >
      {t.avatar.initial}
    </div>
  )
}

function formatMeta(t: Testimonial): string {
  const parts: string[] = []
  if (t.isLocalGuide) parts.push("Local Guide")
  parts.push(`${t.reviewCount} review${t.reviewCount === 1 ? "" : "s"}`)
  if (t.photoCount && t.photoCount > 0) parts.push(`${t.photoCount} photos`)
  parts.push(`${t.weeksAgo} wks ago`)
  return parts.join(" · ")
}
