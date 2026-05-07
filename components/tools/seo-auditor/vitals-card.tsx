import { Smartphone, Monitor } from "lucide-react"
import type { CoreWebVitals, PageSpeedReport } from "@/lib/seo-audit/types"

const VITAL_LABELS: Record<keyof CoreWebVitals, { label: string; full: string }> = {
  lcp: { label: "LCP", full: "Largest Contentful Paint" },
  cls: { label: "CLS", full: "Cumulative Layout Shift" },
  inp: { label: "INP", full: "Interaction to Next Paint" },
  fcp: { label: "FCP", full: "First Contentful Paint" },
  tbt: { label: "TBT", full: "Total Blocking Time" },
  si: { label: "SI", full: "Speed Index" },
}

const CATEGORY_COLOR = {
  good: "#16A34A",
  "needs-improvement": "#B45309",
  poor: "#B91C1C",
}

const CATEGORY_BG = {
  good: "rgba(22,163,74,0.10)",
  "needs-improvement": "rgba(245,158,11,0.12)",
  poor: "rgba(229,62,62,0.10)",
}

function VitalsRow({ report }: { report: PageSpeedReport }) {
  const order: (keyof CoreWebVitals)[] = ["lcp", "cls", "inp", "fcp", "tbt", "si"]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {order.map((key) => {
        const v = report.vitals[key]
        const meta = VITAL_LABELS[key]
        if (!v) {
          return (
            <div
              key={key}
              className="p-3 rounded-[var(--radius-sm)]"
              style={{
                background: "var(--bg)",
                border: "1px dashed var(--border-color)",
              }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--muted)" }}
              >
                {meta.label}
              </div>
              <div className="text-[14px] font-semibold mt-0.5" style={{ color: "var(--muted)" }}>
                —
              </div>
            </div>
          )
        }
        return (
          <div
            key={key}
            className="p-3 rounded-[var(--radius-sm)]"
            style={{
              background: CATEGORY_BG[v.category],
              border: `1px solid ${CATEGORY_COLOR[v.category]}33`,
            }}
          >
            <div
              className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
              style={{ color: CATEGORY_COLOR[v.category] }}
              title={meta.full}
            >
              {meta.label}
            </div>
            <div
              className="text-[15px] sm:text-[16px] font-bold mt-0.5"
              style={{ color: "var(--ink)" }}
            >
              {v.displayValue}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function VitalsCard({
  mobile,
  desktop,
}: {
  mobile: PageSpeedReport | null
  desktop: PageSpeedReport | null
}) {
  if (!mobile && !desktop) return null
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            Core Web Vitals
          </h3>
          <p className="text-[13.5px] mt-0.5" style={{ color: "var(--muted)" }}>
            Real performance metrics from Google Lighthouse.
          </p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {mobile && (
          <div>
            <div
              className="flex items-center gap-2 mb-3 text-[13px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              <Smartphone className="w-3.5 h-3.5" strokeWidth={2.5} />
              Mobile
            </div>
            <VitalsRow report={mobile} />
          </div>
        )}
        {desktop && (
          <div>
            <div
              className="flex items-center gap-2 mb-3 text-[13px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              <Monitor className="w-3.5 h-3.5" strokeWidth={2.5} />
              Desktop
            </div>
            <VitalsRow report={desktop} />
          </div>
        )}
      </div>
    </div>
  )
}
