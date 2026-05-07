"use client"

import { useState } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import type { AuditResult } from "@/lib/seo-audit/types"

const FORM_NAME = "seo-audit-lead"

function encodeForm(data: Record<string, string>): string {
  return Object.entries(data)
    .map(
      ([k, v]) =>
        `${encodeURIComponent(k)}=${encodeURIComponent(v ?? "")}`,
    )
    .join("&")
}

export function AuditCtaSection({ result }: { result: AuditResult }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const findScore = (cat: string) =>
    String(
      result.categoryScores.find((c) => c.category === cat)?.score ?? "",
    )

  return (
    <section
      aria-labelledby="seo-auditor-cta-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.16) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* LEFT — pitch */}
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.30)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Free Strategy Call
            </span>
            <h2
              id="seo-auditor-cta-heading"
              className="mt-5 text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Want a senior strategist to{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(22,119,255,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                walk you through this audit?
              </span>
            </h2>
            <p
              className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              You'll get a custom action plan based on your audit results, plus
              a 20-minute call with a real strategist (no sales rep) who'll
              prioritize what to fix first to grow your traffic and leads.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Personalized action plan based on your real scores",
                "Prioritized — what'll move the needle, what won't",
                "20-min strategy call with a senior strategist",
                "Zero pressure. We only take on a few new clients each month.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14.5px]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    <CheckCircle className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — form */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 70% at 50% 30%, rgba(22,119,255,0.22) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div
              className="relative p-[1.5px]"
              style={{
                borderRadius: "var(--radius-xl)",
                background:
                  "linear-gradient(140deg, rgba(22,119,255,0.55) 0%, rgba(116,211,255,0.40) 40%, rgba(220,230,242,0.40) 100%)",
                boxShadow:
                  "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "calc(var(--radius-xl) - 2px)",
                  background: "var(--surface)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center gap-4 p-10 sm:p-14">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "#DCFCE7", color: "#16A34A" }}
                    >
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3
                      className="text-[24px] font-bold tracking-[-0.01em]"
                      style={{ color: "var(--ink)" }}
                    >
                      Got your request — talk soon.
                    </h3>
                    <p
                      className="text-[15px] max-w-[380px]"
                      style={{ color: "var(--muted)" }}
                    >
                      A senior strategist will email you within one business
                      day with a custom action plan based on your audit.
                    </p>
                    <a
                      href="tel:+19496030389"
                      className="font-semibold hover:underline mt-1"
                      style={{ color: "var(--accent)" }}
                    >
                      Need it now? Call (949) 603-0389
                    </a>
                  </div>
                ) : (
                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="p-6 sm:p-8 lg:p-9"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setSubmitting(true)
                      setError(null)
                      const fd = new FormData(e.currentTarget)
                      const data: Record<string, string> = {
                        "form-name": FORM_NAME,
                      }
                      fd.forEach((v, k) => {
                        data[k] = String(v)
                      })
                      data["audited-url"] = result.snapshot.finalUrl
                      data["overall-score"] = String(result.overallScore)
                      data["performance-score"] = findScore("performance")
                      data["seo-score"] = findScore("seo")
                      data["accessibility-score"] = findScore("accessibility")
                      data["best-practices-score"] = findScore("best-practices")

                      try {
                        const res = await fetch("/", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body: encodeForm(data),
                        })
                        if (!res.ok && res.status !== 200) {
                          // In dev (no Netlify) this will 404 — show success anyway
                          // since the user did everything right.
                          if (process.env.NODE_ENV !== "production") {
                            console.log(
                              "[dev] Netlify form payload (would submit):",
                              data,
                            )
                            setSubmitted(true)
                          } else {
                            throw new Error(`Submit failed (${res.status})`)
                          }
                        } else {
                          setSubmitted(true)
                        }
                      } catch (err: any) {
                        if (process.env.NODE_ENV !== "production") {
                          console.log(
                            "[dev] Netlify form payload (would submit):",
                            data,
                          )
                          setSubmitted(true)
                        } else {
                          setError(
                            "Something went wrong submitting that. Please try again or call us at (949) 603-0389.",
                          )
                        }
                      } finally {
                        setSubmitting(false)
                      }
                    }}
                  >
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    <p className="hidden">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <input
                      type="hidden"
                      name="audited-url"
                      value={result.snapshot.finalUrl}
                    />
                    <input
                      type="hidden"
                      name="overall-score"
                      value={String(result.overallScore)}
                    />

                    <div>
                      <h2
                        className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                        style={{ color: "var(--ink)" }}
                      >
                        Get your custom action plan.
                      </h2>
                      <p
                        className="mt-1 text-[13.5px]"
                        style={{ color: "var(--muted)" }}
                      >
                        We'll review your audit and send back a prioritized
                        plan — free.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Name" name="name" placeholder="John Smith" required />
                      <Field
                        label="Business name"
                        name="business"
                        placeholder="Smith Plumbing"
                        optional
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@smithplumbing.com"
                        required
                      />
                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        optional
                      />
                    </div>
                    <div className="mt-4">
                      <Field
                        label="Website"
                        name="website"
                        defaultValue={result.snapshot.finalUrl}
                        placeholder="www.smithplumbing.com"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="cta-message"
                        className="block text-[13px] font-semibold mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        What's most important to fix?{" "}
                        <span
                          className="font-medium"
                          style={{ color: "var(--muted)" }}
                        >
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="cta-message"
                        name="message"
                        rows={3}
                        placeholder="More calls, more bookings, ranking for [keyword]..."
                        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--ink)",
                        }}
                      />
                    </div>

                    {error && (
                      <p
                        className="mt-3 text-[13px] font-medium"
                        style={{ color: "var(--destructive)" }}
                      >
                        {error}
                      </p>
                    )}

                    <PrimaryButton
                      type="submit"
                      size="lg"
                      className="w-full mt-6"
                      disabled={submitting}
                    >
                      {submitting ? "Sending…" : (
                        <>
                          Send me my action plan
                          <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
                        </>
                      )}
                    </PrimaryButton>
                    <p
                      className="mt-3 text-center text-[12px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      We'll never spam you. Replies within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  optional,
  defaultValue,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  optional?: boolean
  defaultValue?: string
}) {
  return (
    <div>
      <label
        htmlFor={`cta-${name}`}
        className="block text-[13px] font-semibold mb-2"
        style={{ color: "var(--ink)" }}
      >
        {label}
        {optional && (
          <span
            className="ml-1 font-medium"
            style={{ color: "var(--muted)" }}
          >
            (optional)
          </span>
        )}
      </label>
      <input
        id={`cta-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
          color: "var(--ink)",
        }}
      />
    </div>
  )
}
