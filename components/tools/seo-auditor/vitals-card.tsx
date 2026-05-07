import { Smartphone, Monitor, Loader2, AlertCircle } from "lucide-react"
import type { CoreWebVitals, PageSpeedReport } from "@/lib/seo-audit/types"
import type { PsiStatus } from "./auditor-shell"

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

function VitalsSkeleton() {
  const cells = ["LCP", "CLS", "INP", "FCP", "TBT", "SI"]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {cells.map((label) => (
        <div
          key={label}
          className="p-3 rounded-[var(--radius-sm)] relative overflow-hidden"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)" }}
          >
            {label}
          </div>
          <div
            className="h-5 mt-1 rounded"
            style={{
              background:
                "linear-gradient(90deg, var(--border-color) 0%, var(--bg) 50%, var(--border-color) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s ease-in-out infinite",
            }}
          />
        </div>
      ))}
      <style>{`@keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }`}</style>
    </div>
  )
}

function VitalsFailed() {
  return (
    <div
      className="flex items-start gap-2.5 p-4 rounded-[var(--radius-sm)]"
      style={{
        background: "var(--bg)",
        border: "1px dashed var(--border-color)",
      }}
    >
      <AlertCircle
        className="w-4 h-4 mt-0.5 shrink-0"
        style={{ color: "var(--muted)" }}
        strokeWidth={2}
      />
      <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
        Couldn't load Lighthouse for this strategy. The site may have been too
        slow or blocked the request — your other audit results above are still
        accurate.
      </p>
    </div>
  )
}

function StrategyBlock({
  strategy,
  Icon,
  status,
  report,
}: {
  strategy: "Mobile" | "Desktop"
  Icon: typeof Smartphone
  status: PsiStatus
  report: PageSpeedReport | null
}) {
  return (
    <div>
      <div
        className="flex items-center gap-2 mb-3 text-[13px] font-bold uppercase tracking-[0.08em]"
        style={{ color: "var(--muted)" }}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
        {strategy}
        {status === "loading" && (
          <span
            className="inline-flex items-center gap-1 ml-1 normal-case tracking-normal text-[11.5px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            <Loader2 className="w-3 h-3 animate-spin" strokeWidth={2.5} />
            Loading…
          </span>
        )}
      </div>
      {status === "loading" && <VitalsSkeleton />}
      {status === "failed" && <VitalsFailed />}
      {status === "done" && report && <VitalsRow report={report} />}
    </div>
  )
}

export function VitalsCard({
  mobile,
  desktop,
  psiStatus,
}: {
  mobile: PageSpeedReport | null
  desktop: PageSpeedReport | null
  psiStatus: { mobile: PsiStatus; desktop: PsiStatus }
}) {
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
        <StrategyBlock
          strategy="Mobile"
          Icon={Smartphone}
          status={psiStatus.mobile}
          report={mobile}
        />
        <StrategyBlock
          strategy="Desktop"
          Icon={Monitor}
          status={psiStatus.desktop}
          report={desktop}
        />
      </div>
    </div>
  )
}
