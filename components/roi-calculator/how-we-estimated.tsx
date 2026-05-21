"use client"

import { useState } from "react"
import { ChevronDown, Info } from "lucide-react"
import { honestyDisclosures } from "@/lib/roi-data"

export function HowWeEstimated() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="mt-10 rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
      >
        <span className="inline-flex items-center gap-2.5">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <Info className="w-3.5 h-3.5" strokeWidth={2.4} />
          </span>
          <span
            className="text-[14.5px] sm:text-[15.5px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            How we estimated this
          </span>
        </span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{
            color: "var(--muted)",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
          strokeWidth={2.4}
        />
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-1 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {honestyDisclosures.map((d) => (
              <div
                key={d.title}
                className="rounded-[var(--radius-sm)] p-4"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="text-[12.5px] font-bold tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {d.title}
                </div>
                <p
                  className="mt-1.5 text-[13px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
