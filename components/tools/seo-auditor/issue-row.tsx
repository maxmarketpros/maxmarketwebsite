"use client"

import { useState } from "react"
import { ChevronDown, AlertCircle, AlertTriangle, Info, CheckCircle2 } from "lucide-react"
import type { Issue } from "@/lib/seo-audit/types"

const SEVERITY_META: Record<
  Issue["severity"],
  { label: string; color: string; bg: string; border: string; Icon: typeof AlertCircle }
> = {
  critical: {
    label: "Critical",
    color: "#B91C1C",
    bg: "rgba(229,62,62,0.10)",
    border: "rgba(229,62,62,0.30)",
    Icon: AlertCircle,
  },
  warning: {
    label: "Warning",
    color: "#B45309",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.30)",
    Icon: AlertTriangle,
  },
  notice: {
    label: "Notice",
    color: "#1E40AF",
    bg: "rgba(22,119,255,0.10)",
    border: "rgba(22,119,255,0.25)",
    Icon: Info,
  },
  passed: {
    label: "Passed",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.10)",
    border: "rgba(22,163,74,0.25)",
    Icon: CheckCircle2,
  },
}

export function IssueRow({ issue }: { issue: Issue }) {
  const [open, setOpen] = useState(false)
  const meta = SEVERITY_META[issue.severity]
  const Icon = meta.Icon
  const expandable = issue.severity !== "passed" && (issue.fix || issue.evidence)

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <button
        type="button"
        onClick={() => expandable && setOpen((v) => !v)}
        disabled={!expandable}
        className="w-full text-left flex items-start gap-3 p-4 sm:p-5"
        style={{ cursor: expandable ? "pointer" : "default" }}
      >
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: meta.bg,
            color: meta.color,
            border: `1px solid ${meta.border}`,
          }}
        >
          <Icon className="w-4 h-4" strokeWidth={2.5} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.10em] px-2 py-0.5 rounded-full"
              style={{
                background: meta.bg,
                color: meta.color,
                border: `1px solid ${meta.border}`,
              }}
            >
              {meta.label}
            </span>
          </div>
          <h4
            className="mt-1.5 text-[15px] sm:text-[16px] font-bold leading-snug"
            style={{ color: "var(--ink)" }}
          >
            {issue.title}
          </h4>
          <p
            className="mt-1 text-[13.5px] sm:text-[14px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {issue.description}
          </p>
        </div>
        {expandable && (
          <ChevronDown
            className="w-5 h-5 shrink-0 mt-1 transition-transform"
            style={{
              color: "var(--muted)",
              transform: open ? "rotate(180deg)" : "rotate(0)",
            }}
            strokeWidth={2}
          />
        )}
      </button>
      {expandable && open && (
        <div
          className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-3"
          style={{ borderTop: "1px dashed var(--border-color)" }}
        >
          {issue.evidence && (
            <div
              className="text-[12.5px] font-mono p-3 rounded-[var(--radius-sm)] whitespace-pre-wrap break-words"
              style={{
                background: "var(--bg)",
                color: "var(--ink)",
                border: "1px solid var(--border-color)",
              }}
            >
              {issue.evidence}
            </div>
          )}
          {issue.fix && (
            <div className="pt-3">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.10em] mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                How to fix
              </div>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                {issue.fix}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
