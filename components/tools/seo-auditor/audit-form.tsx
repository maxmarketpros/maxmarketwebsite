"use client"

import { useState } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Search, ArrowRight } from "lucide-react"

interface AuditFormProps {
  onSubmit: (url: string) => void
  initialUrl?: string
  busy?: boolean
}

export function AuditForm({ onSubmit, initialUrl = "", busy }: AuditFormProps) {
  const [value, setValue] = useState(initialUrl)
  const [error, setError] = useState<string | null>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const trimmed = value.trim()
        if (!trimmed) {
          setError("Enter a website URL to audit.")
          return
        }
        setError(null)
        onSubmit(trimmed)
      }}
      className="w-full"
    >
      <div
        className="flex flex-col sm:flex-row items-stretch gap-2 p-2 rounded-[var(--radius-lg)]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-color)",
          boxShadow:
            "0 1px 3px var(--shadow-color), 0 12px 32px rgba(22,119,255,0.10)",
        }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 px-3 sm:px-4">
          <Search
            className="w-5 h-5 shrink-0"
            style={{ color: "var(--muted)" }}
            strokeWidth={2}
          />
          <input
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yoursite.com"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={busy}
            className="w-full py-3 sm:py-3.5 text-[15px] sm:text-[17px] font-medium bg-transparent focus:outline-none disabled:opacity-50"
            style={{ color: "var(--ink)" }}
          />
        </div>
        <PrimaryButton type="submit" size="lg" disabled={busy} className="shrink-0">
          {busy ? "Auditing…" : (
            <>
              Run Free Audit
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
            </>
          )}
        </PrimaryButton>
      </div>
      {error && (
        <p
          className="mt-2 text-[13px] font-medium"
          style={{ color: "var(--destructive)" }}
        >
          {error}
        </p>
      )}
    </form>
  )
}
