"use client"

import { useEffect, useState } from "react"
import { Check, Loader2 } from "lucide-react"

const STEPS = [
  { label: "Fetching your homepage", duration: 1200 },
  { label: "Parsing HTML & meta tags", duration: 800 },
  { label: "Checking robots.txt and sitemap", duration: 800 },
  { label: "Compiling your report", duration: 1000 },
]

export function AuditLoading({ url }: { url: string }) {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    let cancelled = false
    let i = 0
    const advance = () => {
      if (cancelled || i >= STEPS.length - 1) return
      const dur = STEPS[i].duration
      setTimeout(() => {
        if (cancelled) return
        i += 1
        setActiveStep(i)
        advance()
      }, dur)
    }
    advance()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      className="card-surface p-6 sm:p-10"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full inline-flex items-center justify-center"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
        >
          <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
        </div>
        <div>
          <div
            className="text-[12px] font-bold uppercase tracking-[0.10em]"
            style={{ color: "var(--muted)" }}
          >
            Auditing
          </div>
          <div
            className="text-[16px] sm:text-[18px] font-bold truncate max-w-[60vw] sm:max-w-none"
            style={{ color: "var(--ink)" }}
          >
            {url}
          </div>
        </div>
      </div>

      <ol className="mt-6 sm:mt-8 space-y-3">
        {STEPS.map((step, i) => {
          const done = i < activeStep
          const active = i === activeStep
          return (
            <li
              key={step.label}
              className="flex items-center gap-3 text-[14.5px] sm:text-[15px]"
              style={{
                color: done
                  ? "var(--ink)"
                  : active
                    ? "var(--ink)"
                    : "var(--muted)",
                opacity: done || active ? 1 : 0.7,
              }}
            >
              <span
                className="w-6 h-6 rounded-full inline-flex items-center justify-center shrink-0"
                style={{
                  background: done
                    ? "#DCFCE7"
                    : active
                      ? "var(--accent-bg)"
                      : "var(--bg)",
                  color: done
                    ? "#16A34A"
                    : active
                      ? "var(--accent)"
                      : "var(--muted)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {done ? (
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                ) : active ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={2.5} />
                ) : (
                  <span className="text-[10px] font-bold">{i + 1}</span>
                )}
              </span>
              <span className={done || active ? "font-semibold" : "font-medium"}>
                {step.label}
              </span>
            </li>
          )
        })}
      </ol>

      <p
        className="mt-6 sm:mt-8 text-[13px] sm:text-[13.5px]"
        style={{ color: "var(--muted)" }}
      >
        First results land in seconds — Lighthouse scores fill in right after.
      </p>
    </div>
  )
}
