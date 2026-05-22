"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { AlertCircle, Building2, CheckCircle2, Loader2, Mail, Phone, Send, User } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PLAN_LABEL, type PlanChoice } from "@/lib/a-la-carte-catalog"
import { type Totals } from "@/lib/a-la-carte-pricing"
import { submitNetlifyForm } from "@/lib/netlify-forms"

const FORM_NAME = "a-la-carte-estimate"

interface EstimateFormProps {
  plan: PlanChoice
  totals: Totals
}

type Status = "idle" | "submitting" | "success" | "error"

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)
}

export function EstimateForm({ plan, totals }: EstimateFormProps) {
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    notes: "",
  })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg(null)

    try {
      const res = await submitNetlifyForm(FORM_NAME, {
        "page-source": pathname || "",
        name: form.name,
        business: form.business,
        phone: form.phone,
        email: form.email,
        notes: form.notes,
        "current-plan": PLAN_LABEL[plan],
        "monthly-total": totals.monthly.toString(),
        "one-time-total": totals.oneTime.toString(),
        "custom-quote-count": totals.customCount.toString(),
        "selected-items": totals.lines.map((l) => `- ${l.label} — ${l.display}`).join("\n"),
      })
      if (!res.ok) {
        if (process.env.NODE_ENV !== "production") {
          console.log("[dev] Netlify form payload (would submit):", { form: FORM_NAME, ...form, "page-source": pathname })
          setStatus("success")
          return
        }
        throw new Error(`Submission failed (${res.status})`)
      }
      setStatus("success")
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.log("[dev] Netlify form payload (would submit):", { form: FORM_NAME, ...form, "page-source": pathname })
        setStatus("success")
        return
      }
      const message = err instanceof Error ? err.message : "Something went wrong"
      setErrorMsg(message)
      setStatus("error")
    }
  }

  return (
    <section
      id="estimate-form"
      aria-labelledby="estimate-form-heading"
      className="relative scroll-mt-24"
    >
      <div
        className="relative overflow-hidden rounded-[var(--radius-xl)]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
        }}
      >
        {/* Decorative gradient header */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(22,119,255,0.18) 0%, rgba(116,211,255,0.08) 40%, transparent 70%)",
          }}
        />

        <div className="relative p-6 sm:p-8 lg:p-10 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* LEFT — copy & summary preview */}
          <div>
            <Pill>Step 2 · Submit estimate</Pill>
            <h2
              id="estimate-form-heading"
              className="mt-4 text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Send yourself this{" "}
              <span className="accent-underline">estimate</span>.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6]" style={{ color: "var(--muted)" }}>
              Drop your details and we&rsquo;ll email this estimate to you and follow up with any clarifying questions — usually within one business day.
            </p>

            {/* Mini estimate preview */}
            <div
              className="mt-6 rounded-[var(--radius-lg)] p-4 sm:p-5"
              style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                  Your selections
                </span>
                <span className="text-[11.5px] font-semibold" style={{ color: "var(--accent)" }}>
                  {PLAN_LABEL[plan]}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] block" style={{ color: "var(--muted)" }}>
                    Monthly
                  </span>
                  <span className="text-[16px] font-bold tabular-nums" style={{ color: totals.monthly > 0 ? "#22C55E" : "var(--muted)" }}>
                    {totals.monthly > 0 ? formatUSD(totals.monthly) : "—"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] block" style={{ color: "var(--muted)" }}>
                    One-time
                  </span>
                  <span className="text-[16px] font-bold tabular-nums" style={{ color: totals.oneTime > 0 ? "var(--accent)" : "var(--muted)" }}>
                    {totals.oneTime > 0 ? formatUSD(totals.oneTime) : "—"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] block" style={{ color: "var(--muted)" }}>
                    Custom
                  </span>
                  <span className="text-[16px] font-bold tabular-nums" style={{ color: totals.customCount > 0 ? "#7C3AED" : "var(--muted)" }}>
                    {totals.customCount > 0 ? totals.customCount : "—"}
                  </span>
                </div>
              </div>
              {totals.lines.length > 0 ? (
                <ul className="flex flex-col gap-1 max-h-32 overflow-y-auto">
                  {totals.lines.slice(0, 8).map((l) => (
                    <li key={l.id} className="text-[12.5px] flex items-center justify-between gap-2" style={{ color: "var(--ink)" }}>
                      <span className="truncate">{l.label}</span>
                      <span className="font-semibold shrink-0" style={{ color: "var(--muted)" }}>
                        {l.display}
                      </span>
                    </li>
                  ))}
                  {totals.lines.length > 8 && (
                    <li className="text-[11.5px] italic" style={{ color: "var(--muted)" }}>
                      …and {totals.lines.length - 8} more
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-[12.5px]" style={{ color: "var(--muted)" }}>
                  No items selected yet — add some from the calculator above.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT — form OR success state */}
          {status === "success" ? (
            <div
              className="rounded-[var(--radius-lg)] p-6 sm:p-8 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(180deg, rgba(34,197,94,0.08) 0%, transparent 100%)",
                border: "1px solid rgba(34,197,94,0.4)",
              }}
            >
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(180deg, #4ADE80 0%, #22C55E 100%)",
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(34,197,94,0.4)",
                }}
              >
                <CheckCircle2 className="w-7 h-7" strokeWidth={2.4} />
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-bold" style={{ color: "var(--ink)" }}>
                Estimate on the way!
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] max-w-[360px]" style={{ color: "var(--muted)" }}>
                We received your selections. A strategist will reach out shortly — usually within one business day.
              </p>
              <a
                href="/contact/schedule"
                className="mt-5 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14px] text-white transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                  boxShadow: "0 2px 8px rgba(22,119,255,0.32)",
                }}
              >
                Book a call now
              </a>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="flex flex-col gap-3.5"
            >
              {/* Netlify required hidden inputs */}
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="page-source" value={pathname || ""} />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Visible fields */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <FieldInput
                  label="Your name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  icon={<User className="w-4 h-4" strokeWidth={2.2} />}
                />
                <FieldInput
                  label="Business name"
                  name="business"
                  type="text"
                  required
                  value={form.business}
                  onChange={update("business")}
                  icon={<Building2 className="w-4 h-4" strokeWidth={2.2} />}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <FieldInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  icon={<Phone className="w-4 h-4" strokeWidth={2.2} />}
                />
                <FieldInput
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  icon={<Mail className="w-4 h-4" strokeWidth={2.2} />}
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-[12.5px] font-semibold mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  Anything else? <span className="font-normal" style={{ color: "var(--muted)" }}>(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Timeline, custom requirements, questions…"
                  className="w-full px-3.5 py-2.5 text-[14px] rounded-[var(--radius-sm)] outline-none transition-colors focus:border-[var(--accent)] resize-y"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                    color: "var(--ink)",
                  }}
                />
              </div>

              {/* Hidden estimate fields */}
              <input type="hidden" name="current-plan" value={PLAN_LABEL[plan]} />
              <input type="hidden" name="monthly-total" value={totals.monthly} />
              <input type="hidden" name="one-time-total" value={totals.oneTime} />
              <input type="hidden" name="custom-quote-count" value={totals.customCount} />
              <input
                type="hidden"
                name="selected-items"
                value={totals.lines.map((l) => `- ${l.label} — ${l.display}`).join("\n")}
              />

              {/* Error */}
              {status === "error" && errorMsg && (
                <div
                  className="flex items-start gap-2 px-3.5 py-2.5 rounded-[var(--radius-sm)] text-[13px]"
                  style={{
                    background: "rgba(229,62,62,0.08)",
                    border: "1px solid rgba(229,62,62,0.3)",
                    color: "#B91C1C",
                  }}
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <span>{errorMsg}. Please try again, or email info@maxmarketpros.com.</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 w-full inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15.5px] text-white transition-all duration-200 hover:translate-y-[-1px] disabled:opacity-70 disabled:translate-y-0 cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 6px 18px rgba(22,119,255,0.32)",
                }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2.4} />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" strokeWidth={2.4} />
                    Send me this estimate
                  </>
                )}
              </button>

              <p className="text-[11.5px] leading-[1.5] text-center" style={{ color: "var(--muted)" }}>
                We&rsquo;ll never share your info. By submitting, you agree to be contacted about this estimate.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Field input ──
function FieldInput({
  label,
  name,
  type,
  required,
  value,
  onChange,
  icon,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[12.5px] font-semibold mb-1.5"
        style={{ color: "var(--ink)" }}
      >
        {label} {required && <span style={{ color: "var(--accent)" }}>*</span>}
      </label>
      <div className="relative">
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "var(--muted)" }}
        >
          {icon}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full pl-9 pr-3.5 py-2.5 text-[14px] rounded-[var(--radius-sm)] outline-none transition-colors focus:border-[var(--accent)]"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            color: "var(--ink)",
          }}
        />
      </div>
    </div>
  )
}
