import { Check, X } from "lucide-react"
import type { DetectedTech } from "@/lib/seo-audit/types"

const CATEGORY_LABEL: Record<DetectedTech["category"], string> = {
  analytics: "Analytics",
  "tag-manager": "Tag Manager",
  advertising: "Advertising / Pixels",
  fonts: "Fonts",
  chat: "Chat",
  cms: "CMS / Platform",
  framework: "Framework",
}

const CATEGORY_ORDER: DetectedTech["category"][] = [
  "analytics",
  "tag-manager",
  "advertising",
  "cms",
  "framework",
  "fonts",
  "chat",
]

export function TechStackCard({ tech }: { tech: DetectedTech[] }) {
  const detected = tech.filter((t) => t.detected)
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: tech.filter((t) => t.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            Detected technologies
          </h3>
          <p
            className="mt-0.5 text-[13.5px]"
            style={{ color: "var(--muted)" }}
          >
            What's loaded on your page — and what's missing.
          </p>
        </div>
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
          style={{
            background: "var(--accent-bg)",
            color: "var(--accent)",
            border: "1px solid rgba(22,119,255,0.30)",
          }}
        >
          {detected.length} of {tech.length} found
        </span>
      </div>

      <div className="mt-5 space-y-5">
        {grouped.map(({ cat, items }) => (
          <div key={cat}>
            <div
              className="text-[11px] font-bold uppercase tracking-[0.10em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              {CATEGORY_LABEL[cat]}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => {
                const ok = t.detected
                return (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-sm)] text-[13px] font-semibold"
                    style={{
                      background: ok ? "rgba(22,163,74,0.10)" : "var(--bg)",
                      color: ok ? "#16A34A" : "var(--muted)",
                      border: `1px solid ${ok ? "rgba(22,163,74,0.25)" : "var(--border-color)"}`,
                    }}
                  >
                    {ok ? (
                      <Check className="w-3.5 h-3.5" strokeWidth={2.75} />
                    ) : (
                      <X
                        className="w-3.5 h-3.5"
                        strokeWidth={2.5}
                        style={{ opacity: 0.5 }}
                      />
                    )}
                    {t.name}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
