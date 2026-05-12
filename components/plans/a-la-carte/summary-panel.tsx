"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ChevronUp, FileText, ListPlus, Receipt, RotateCcw } from "lucide-react"
import { getIcon } from "@/components/plans/hub/icon-map"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  PLAN_ACCENT,
  PLAN_LABEL,
  type PlanChoice,
} from "@/lib/a-la-carte-catalog"
import { type Totals } from "@/lib/a-la-carte-pricing"

interface SummaryPanelProps {
  plan: PlanChoice
  totals: Totals
  onReset: () => void
}

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)
}

function SummaryInner({ plan, totals, onReset }: SummaryPanelProps) {
  const accent = PLAN_ACCENT[plan]
  const empty = totals.lines.length === 0

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-3">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-[10px] flex items-center justify-center"
              style={{
                background: `${accent}14`,
                color: accent,
                border: `1px solid ${accent}33`,
              }}
            >
              <Receipt className="w-4 h-4" strokeWidth={2.3} />
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                Your estimate
              </span>
              <span className="text-[14px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                {PLAN_LABEL[plan]} plan
              </span>
            </div>
          </div>
          {!empty && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1 text-[11.5px] font-semibold transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "var(--muted)" }}
            >
              <RotateCcw className="w-3 h-3" strokeWidth={2.4} />
              Reset
            </button>
          )}
        </div>

        {/* Three bucket totals */}
        <div className="grid grid-cols-3 gap-2">
          <div
            className="rounded-[var(--radius-sm)] p-2.5 sm:p-3 flex flex-col"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Monthly
            </span>
            <span
              className="mt-1 text-[18px] sm:text-[20px] font-bold leading-none tracking-[-0.02em] tabular-nums"
              style={{ color: totals.monthly > 0 ? "#22C55E" : "var(--muted)" }}
            >
              {totals.monthly > 0 ? `${formatUSD(totals.monthly)}` : "—"}
            </span>
            <span className="mt-0.5 text-[10.5px] font-medium" style={{ color: "var(--muted)" }}>
              / month
            </span>
          </div>
          <div
            className="rounded-[var(--radius-sm)] p-2.5 sm:p-3 flex flex-col"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              One-time
            </span>
            <span
              className="mt-1 text-[18px] sm:text-[20px] font-bold leading-none tracking-[-0.02em] tabular-nums"
              style={{ color: totals.oneTime > 0 ? "var(--accent)" : "var(--muted)" }}
            >
              {totals.oneTime > 0 ? `${formatUSD(totals.oneTime)}` : "—"}
            </span>
            <span className="mt-0.5 text-[10.5px] font-medium" style={{ color: "var(--muted)" }}>
              one-time
            </span>
          </div>
          <div
            className="rounded-[var(--radius-sm)] p-2.5 sm:p-3 flex flex-col"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Custom
            </span>
            <span
              className="mt-1 text-[18px] sm:text-[20px] font-bold leading-none tracking-[-0.02em] tabular-nums"
              style={{ color: totals.customCount > 0 ? "#7C3AED" : "var(--muted)" }}
            >
              {totals.customCount > 0 ? totals.customCount : "—"}
            </span>
            <span className="mt-0.5 text-[10.5px] font-medium" style={{ color: "var(--muted)" }}>
              {totals.customCount === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </div>

      {/* Line items */}
      <div
        className="px-5 sm:px-6 py-3 flex-1 overflow-y-auto"
        style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}
      >
        {empty ? (
          <div className="flex flex-col items-center text-center py-8">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
              style={{ background: "var(--bg)", color: "var(--muted)", border: "1px solid var(--border-color)" }}
            >
              <ListPlus className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <p className="text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
              Nothing selected yet
            </p>
            <p className="mt-1 text-[12.5px] leading-[1.5] max-w-[240px]" style={{ color: "var(--muted)" }}>
              Add services on the left — your estimate updates instantly.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {totals.lines.map((line) => {
              const Icon = getIcon(line.iconName)
              const bucketColor =
                line.bucket === "monthly" ? "#22C55E" : line.bucket === "oneTime" ? "var(--accent)" : "#7C3AED"
              return (
                <li
                  key={line.id}
                  className="flex items-center justify-between gap-3 py-1.5"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                      style={{
                        background: `${line.accent}14`,
                        color: line.accent,
                        border: `1px solid ${line.accent}33`,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span
                      className="text-[13px] font-semibold leading-tight truncate"
                      style={{ color: "var(--ink)" }}
                    >
                      {line.label}
                    </span>
                  </div>
                  <span
                    className="text-[12.5px] font-bold tabular-nums whitespace-nowrap"
                    style={{ color: bucketColor }}
                  >
                    {line.display}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* CTAs */}
      <div className="px-5 sm:px-6 pt-4 pb-5">
        <a
          href="#estimate-form"
          className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[14.5px] text-white transition-all duration-200 hover:translate-y-[-1px] cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
            boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(22,119,255,0.25)",
          }}
        >
          <FileText className="w-4 h-4" strokeWidth={2.4} />
          Send me this estimate
        </a>
        <Link
          href="/contact/schedule"
          className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[13.5px] transition-all duration-200 hover:bg-[var(--bg)]"
          style={{ color: "var(--accent)", border: "1px solid var(--border-color)" }}
        >
          <Calendar className="w-4 h-4" strokeWidth={2.4} />
          Book a strategy call
        </Link>

        <p className="mt-3 text-[11px] leading-[1.5] text-center" style={{ color: "var(--muted)" }}>
          Estimate only. Final pricing varies based on business needs, scope, location, content, integrations &amp; custom work.
        </p>
      </div>
    </div>
  )
}

// ── Desktop sticky panel ──
export function SummaryPanelDesktop(props: SummaryPanelProps) {
  return (
    <aside
      aria-label="Estimate summary"
      className="sticky top-24"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 10px 28px var(--shadow-color)",
        maxHeight: "calc(100vh - 8rem)",
        overflow: "hidden",
      }}
    >
      <SummaryInner {...props} />
    </aside>
  )
}

// ── Mobile bottom bar + sheet ──
export function SummaryPanelMobile(props: SummaryPanelProps) {
  const [open, setOpen] = useState(false)
  const { totals } = props
  const empty = totals.lines.length === 0

  const monthlyTxt = totals.monthly > 0 ? `${formatUSD(totals.monthly)}/mo` : null
  const oneTimeTxt = totals.oneTime > 0 ? `${formatUSD(totals.oneTime)} one-time` : null
  const customTxt = totals.customCount > 0 ? `${totals.customCount} custom` : null
  const summaryBits = [monthlyTxt, oneTimeTxt, customTxt].filter(Boolean) as string[]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div
        className="lg:hidden fixed bottom-0 inset-x-0 z-40"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border-color)",
          boxShadow: "0 -4px 20px rgba(11,19,43,0.10)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <SheetTrigger asChild>
          <button
            type="button"
            className="w-full flex items-center justify-between gap-3 px-4 py-3 cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <Receipt className="w-4 h-4" strokeWidth={2.3} />
              </span>
              <div className="flex flex-col items-start min-w-0">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                  Your estimate
                </span>
                {empty ? (
                  <span className="text-[13px] font-semibold" style={{ color: "var(--muted)" }}>
                    Tap to add services
                  </span>
                ) : (
                  <span className="text-[13px] font-bold truncate max-w-[60vw]" style={{ color: "var(--ink)" }}>
                    {summaryBits.join(" · ")}
                  </span>
                )}
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-bold shrink-0"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(22,119,255,0.32)",
              }}
            >
              View details
              <ChevronUp className="w-3 h-3" strokeWidth={2.6} />
            </span>
          </button>
        </SheetTrigger>
      </div>

      <SheetContent side="bottom" className="p-0 max-h-[88vh] rounded-t-[var(--radius-xl)] overflow-hidden">
        <SheetTitle className="sr-only">Estimate summary</SheetTitle>
        <SummaryInner {...props} />
      </SheetContent>
    </Sheet>
  )
}
