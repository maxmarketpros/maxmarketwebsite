"use client"

import { useState } from "react"
import { AlertTriangle, RefreshCw, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { AuditForm } from "./audit-form"
import { AuditLoading } from "./audit-loading"
import { AuditResults } from "./audit-results"
import { AuditCtaSection } from "./audit-cta-section"
import { AuditorIdleSections } from "./auditor-idle-sections"
import type { AuditResult, AuditError } from "@/lib/seo-audit/types"

type State =
  | { kind: "idle" }
  | { kind: "loading"; url: string }
  | { kind: "result"; url: string; result: AuditResult }
  | { kind: "error"; url: string; message: string }

const TRUST_BULLETS = [
  "100+ on-page checks",
  "Heading outline · readability · security headers",
  "100% free, no sign-up",
]

export function AuditorShell() {
  const [state, setState] = useState<State>({ kind: "idle" })

  async function runAudit(url: string) {
    setState({ kind: "loading", url })
    setTimeout(() => {
      document
        .getElementById("audit-results-anchor")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)

    // Run the API call in parallel with a minimum loading time so the
    // staged loading UI has time to play through (~8s).
    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 7500))
    const auditCall = (async () => {
      try {
        const res = await fetch("/api/seo-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        })
        if (!res.ok) {
          const errPayload = (await res.json().catch(() => null)) as
            | AuditError
            | null
          return {
            ok: false as const,
            message:
              errPayload?.error ||
              `The audit failed (HTTP ${res.status}). Try again in a moment.`,
          }
        }
        return { ok: true as const, result: (await res.json()) as AuditResult }
      } catch {
        return {
          ok: false as const,
          message:
            "Something went wrong reaching the audit service. Check your connection and try again.",
        }
      }
    })()

    const [outcome] = await Promise.all([auditCall, minLoadingTime])
    if (!outcome.ok) {
      setState({ kind: "error", url, message: outcome.message })
      return
    }
    setState({ kind: "result", url, result: outcome.result })
  }

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="seo-auditor-heading"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.18) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.18) 0%, transparent 65%), var(--bg)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(116,211,255,0.06) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.20) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <a href="/" className="hover:text-[var(--accent)]">
                  Home
                </a>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/tools" className="hover:text-[var(--accent)]">
                  Tools
                </a>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" style={{ color: "var(--ink)" }}>
                SEO Auditor
              </li>
            </ol>
          </nav>

          <div
            className="mt-8 max-w-[820px] mx-auto text-center"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            <Pill>
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Free SEO Audit Tool
            </Pill>
            <h1
              id="seo-auditor-heading"
              className="mt-5 text-[40px] xs:text-[44px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Get an instant{" "}
              <span className="accent-underline">SEO audit</span> of your
              website.
            </h1>
            <p
              className="mt-5 text-[16.5px] sm:text-[19px] leading-[1.55] max-w-[640px] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Enter your URL and get a full Lighthouse-powered report on your
              site's SEO, speed, accessibility, and best practices — in under
              30 seconds.
            </p>

            <div className="mt-8 max-w-[640px] mx-auto">
              <AuditForm
                initialUrl={state.kind !== "idle" ? state.url : ""}
                onSubmit={runAudit}
                busy={state.kind === "loading"}
              />
              <ul
                className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13.5px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {TRUST_BULLETS.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loading / Results / Error */}
      {state.kind !== "idle" && (
        <section className="section-container py-12 sm:py-16 lg:py-20">
          <div
            id="audit-results-anchor"
            style={{ scrollMarginTop: 160 }}
          />
          {state.kind === "loading" && <AuditLoading url={state.url} />}
          {state.kind === "error" && (
            <ErrorCard
              url={state.url}
              message={state.message}
              onRetry={() => runAudit(state.url)}
            />
          )}
          {state.kind === "result" && (
            <AuditResults result={state.result} />
          )}
        </section>
      )}

      {/* Idle-only marketing sections */}
      {state.kind === "idle" && <AuditorIdleSections />}

      {/* CTA section after results */}
      {state.kind === "result" && <AuditCtaSection result={state.result} />}
    </>
  )
}

function ErrorCard({
  url,
  message,
  onRetry,
}: {
  url: string
  message: string
  onRetry: () => void
}) {
  return (
    <div
      className="card-surface p-6 sm:p-10"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: "rgba(229,62,62,0.10)",
            color: "#B91C1C",
            border: "1px solid rgba(229,62,62,0.25)",
          }}
        >
          <AlertTriangle className="w-6 h-6" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3
            className="text-[20px] sm:text-[24px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            We couldn't audit that URL.
          </h3>
          <p
            className="mt-2 text-[14.5px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {message}
          </p>
          <div
            className="mt-4 text-[13px] font-mono p-3 rounded-[var(--radius-sm)] break-all"
            style={{
              background: "var(--bg)",
              color: "var(--ink)",
              border: "1px solid var(--border-color)",
            }}
          >
            {url}
          </div>
          <button
            type="button"
            onClick={onRetry}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14.5px] transition-all hover:translate-y-[-1px]"
            style={{
              background: "var(--accent-bg)",
              color: "var(--accent)",
              border: "1px solid rgba(22,119,255,0.30)",
            }}
          >
            <RefreshCw className="w-4 h-4" strokeWidth={2.5} />
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
