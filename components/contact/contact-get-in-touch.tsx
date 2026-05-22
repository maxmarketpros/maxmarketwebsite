"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { PrimaryButton } from "@/components/ui/primary-button"
import { submitNetlifyForm } from "@/lib/netlify-forms"
import {
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react"

const FORM_NAME = "contact-global"

const processSteps = [
  { num: "01", label: "You submit" },
  { num: "02", label: "We audit" },
  { num: "03", label: "20-min call" },
  { num: "04", label: "You decide" },
]

const trustBullets = [
  { Icon: Clock, text: "Replies within one business day" },
  { Icon: ShieldCheck, text: "Real strategists, not a call center" },
  { Icon: MapPin, text: "Based in Irvine, CA · serving the U.S." },
]

type Status = "idle" | "submitting" | "success" | "error"

interface FormState {
  name: string
  business: string
  email: string
  phone: string
  website: string
  message: string
}

const EMPTY: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  website: "",
  message: "",
}

export function ContactGetInTouch({
  variant = "page",
}: {
  variant?: "page" | "section"
}) {
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY)
  const submitted = status === "success"
  const isSection = variant === "section"
  const headingId = isSection
    ? "contact-cta-heading"
    : "contact-get-in-touch-heading"

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
        email: form.email,
        phone: form.phone,
        website: form.website,
        message: form.message,
      })
      if (!res.ok) {
        if (process.env.NODE_ENV !== "production") {
          // In local dev (no Netlify), POST /__forms.html may 404 — still show success.
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
      const message =
        err instanceof Error ? err.message : "Something went wrong"
      setErrorMsg(message)
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.16) 0%, transparent 65%), var(--bg)",
        borderTop: isSection ? "1px solid var(--border-color)" : undefined,
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

      <div
        className={`section-container relative z-10 pb-16 sm:pb-20 lg:pb-24 ${
          isSection ? "pt-20 sm:pt-24 lg:pt-28" : "pt-16 sm:pt-20 lg:pt-24"
        }`}
      >
        {!isSection && (
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
              <li aria-current="page" style={{ color: "var(--ink)" }}>
                Contact
              </li>
            </ol>
          </nav>
        )}

        <div
          className={`${
            isSection ? "" : "mt-8"
          } grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start`}
        >
          {/* LEFT — sells the call */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border shadow-sm"
              style={{
                background: "#FFFFFF",
                borderColor: "rgba(22,119,255,0.30)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Contact Max Market Pros
            </span>

            {isSection ? (
              <h2
                id={headingId}
                className="mt-5 text-[32px] xs:text-[36px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Get in touch with
                <br />
                <span className="accent-underline">Max Market Pros</span>
              </h2>
            ) : (
              <h1
                id={headingId}
                className="mt-5 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Get in touch with{" "}
                <span className="accent-underline">Max Market Pros</span>.
              </h1>
            )}

            <p
              className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Send a message and a senior strategist replies within one business
              day.
            </p>

            {/* Mini-process chips — hero-only */}
            {!isSection && (
            <ol className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {processSteps.map((s, i) => (
                <li
                  key={s.num}
                  className="relative flex items-center gap-2 px-3 py-2 rounded-[var(--radius-sm)]"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="text-[10px] font-bold font-mono tracking-[0.06em] px-1.5 py-0.5 rounded"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[12.5px] sm:text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.label}
                  </span>
                  {i < processSteps.length - 1 && (
                    <ArrowRight
                      className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3"
                      style={{ color: "var(--muted)" }}
                      strokeWidth={2.5}
                    />
                  )}
                </li>
              ))}
            </ol>
            )}

            {/* Channel cards — stacked in section mode so the email never truncates */}
            <div
              className={`mt-7 grid gap-3 ${
                isSection ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              <a
                href="tel:+19496030389"
                className="card-surface card-surface-hover group flex items-center gap-3.5 p-4"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <span
                  className="w-11 h-11 rounded-[var(--radius-xs)] inline-flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Phone className="w-5 h-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 leading-tight">
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.10em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Call us
                  </div>
                  <div
                    className="mt-0.5 text-[15px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    (949) 603-0389
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@maxmarketpros.com"
                className="card-surface card-surface-hover group flex items-center gap-3.5 p-4"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <span
                  className="w-11 h-11 rounded-[var(--radius-xs)] inline-flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Mail className="w-5 h-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 leading-tight">
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.10em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Email us
                  </div>
                  <div
                    className="mt-0.5 text-[14px] font-bold break-all sm:break-normal"
                    style={{ color: "var(--ink)" }}
                  >
                    info@maxmarketpros.com
                  </div>
                </div>
              </a>
            </div>

            {/* Trust bullets */}
            <ul className="mt-7 space-y-2.5">
              {trustBullets.map((b) => (
                <li
                  key={b.text}
                  className="flex items-center gap-2.5 text-[14px]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    <b.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — the form (conversion focus) */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            {/* Soft glow behind the card */}
            <div
              aria-hidden
              className="absolute -inset-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 70% at 50% 30%, rgba(22,119,255,0.22) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Gradient border wrapper */}
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
                      className="text-[26px] font-bold tracking-[-0.01em]"
                      style={{ color: "var(--ink)" }}
                    >
                      Got it &mdash; talk soon.
                    </h3>
                    <p
                      className="text-[15.5px] max-w-[380px]"
                      style={{ color: "var(--muted)" }}
                    >
                      A senior strategist will reply with your free audit
                      within one business day. Keep an eye on your inbox.
                    </p>
                    <div
                      className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[13.5px]"
                      style={{ color: "var(--muted)" }}
                    >
                      <span>Need it now?</span>
                      <a
                        href="tel:+19496030389"
                        className="font-semibold hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        Call (949) 603-0389
                      </a>
                    </div>
                  </div>
                ) : (
                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                    className="p-6 sm:p-8 lg:p-9"
                  >
                    {/* Netlify required hidden inputs */}
                    <input type="hidden" name="form-name" value={FORM_NAME} />
                    <input
                      type="hidden"
                      name="page-source"
                      value={pathname || ""}
                    />
                    <p className="hidden">
                      <label>
                        Don&rsquo;t fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    {/* Form header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2
                          className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          Tell us about your business.
                        </h2>
                        <p
                          className="mt-1 text-[13.5px]"
                          style={{ color: "var(--muted)" }}
                        >
                          Free audit + 20-minute strategy call.
                        </p>
                      </div>
                      <span
                        className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{
                          background: "rgba(22,163,74,0.10)",
                          color: "#16A34A",
                          border: "1px solid rgba(22,163,74,0.25)",
                        }}
                      >
                        <span className="relative flex w-1.5 h-1.5">
                          <span
                            className="absolute inline-flex h-full w-full rounded-full opacity-60"
                            style={{
                              background: "#16A34A",
                              animation: "subtlePulse 1.6s ease-in-out infinite",
                            }}
                          />
                          <span
                            className="relative inline-flex rounded-full w-1.5 h-1.5"
                            style={{ background: "#16A34A" }}
                          />
                        </span>
                        Replies in 1 biz day
                      </span>
                    </div>

                    {/* Fields */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Name"
                        name="name"
                        placeholder="John Smith"
                        required
                        value={form.name}
                        onChange={update("name")}
                      />
                      <Field
                        label="Business name"
                        name="business"
                        placeholder="Smith Plumbing"
                        optional
                        value={form.business}
                        onChange={update("business")}
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@smithplumbing.com"
                        required
                        value={form.email}
                        onChange={update("email")}
                      />
                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        value={form.phone}
                        onChange={update("phone")}
                      />
                    </div>
                    <div className="mt-4">
                      <Field
                        label="Website"
                        name="website"
                        placeholder="www.smithplumbing.com"
                        optional
                        value={form.website}
                        onChange={update("website")}
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="message"
                        className="block text-[13px] font-semibold mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        Message{" "}
                        <span
                          className="font-medium"
                          style={{ color: "var(--muted)" }}
                        >
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="What's the goal? More calls, more bookings, a rebuild…"
                        value={form.message}
                        onChange={update("message")}
                        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--ink)",
                        }}
                      />
                    </div>

                    {status === "error" && errorMsg && (
                      <div
                        className="mt-4 flex items-start gap-2 px-3.5 py-2.5 rounded-[var(--radius-sm)] text-[13px]"
                        style={{
                          background: "rgba(229,62,62,0.08)",
                          border: "1px solid rgba(229,62,62,0.3)",
                          color: "#B91C1C",
                        }}
                      >
                        <AlertCircle
                          className="w-4 h-4 mt-0.5 shrink-0"
                          strokeWidth={2.2}
                        />
                        <span>
                          {errorMsg}. Please try again, or email
                          info@maxmarketpros.com.
                        </span>
                      </div>
                    )}

                    <PrimaryButton
                      type="submit"
                      size="lg"
                      className="w-full mt-6"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        "Sending…"
                      ) : (
                        <>
                          Send my message
                          <ArrowRight
                            className="w-4 h-4 ml-2"
                            strokeWidth={2.75}
                          />
                        </>
                      )}
                    </PrimaryButton>

                    <p
                      className="mt-3 text-center text-[12px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      By submitting you agree to be contacted by our team. We
                      don&rsquo;t spam. Ever.
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
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  optional?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label
        htmlFor={name}
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
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
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
