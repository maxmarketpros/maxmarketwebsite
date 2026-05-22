"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { ROLES } from "@/lib/careers-data"
import { submitNetlifyForm } from "@/lib/netlify-forms"

const FORM_NAME = "careers-application"

type Status = "idle" | "submitting" | "success" | "error"

interface FormState {
  name: string
  email: string
  phone: string
  role: string
  linkedin: string
  portfolio: string
  message: string
}

export function CareersApply() {
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: "",
    linkedin: "",
    portfolio: "",
    message: "",
  })

  useEffect(() => {
    const applyStored = () => {
      try {
        const stored = sessionStorage.getItem("careersRole")
        if (stored && ROLES.some((r) => r.slug === stored)) {
          setForm((s) => ({ ...s, role: stored }))
        }
      } catch {
        // ignore
      }
    }
    applyStored()
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ slug: string }>).detail
      if (detail?.slug && ROLES.some((r) => r.slug === detail.slug)) {
        setForm((s) => ({ ...s, role: detail.slug }))
      }
    }
    window.addEventListener("careers:select-role", handler)
    return () => window.removeEventListener("careers:select-role", handler)
  }, [])

  const update =
    <K extends keyof FormState>(k: K) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
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
        email: form.email,
        phone: form.phone,
        role: form.role,
        "role-label":
          ROLES.find((r) => r.slug === form.role)?.title ?? form.role,
        linkedin: form.linkedin,
        portfolio: form.portfolio,
        message: form.message,
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
      id="apply"
      aria-labelledby="careers-apply-heading"
      className="relative scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-14 items-start">
          {/* LEFT — intro + office card */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>Step 1 · Apply</Pill>
            <h2
              id="careers-apply-heading"
              className="mt-4 text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Apply in two minutes.
            </h2>
            <p
              className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              Pick a track, drop your details, and link your work. A senior
              operator on the team reads every application — usually we get
              back within 5 business days.
            </p>

            <div
              className="mt-7 rounded-[var(--radius-lg)] p-5 sm:p-6 flex flex-col gap-4"
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.06), 0 8px 24px rgba(17,35,68,0.08)",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  Open positions
                </span>
                <span
                  className="text-[26px] font-extrabold leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {ROLES.length}
                </span>
              </div>
              <div
                className="border-t pt-4 flex items-start gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="w-9 h-9 rounded-full inline-flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <MapPin className="w-4 h-4" strokeWidth={2.4} />
                </span>
                <div>
                  <p
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Office
                  </p>
                  <p
                    className="mt-0.5 text-[14px] leading-[1.5] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    2600 Michelson Dr, 16th Fl
                    <br />
                    Irvine, CA 92612
                  </p>
                  <p
                    className="mt-1 text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    Mon–Fri · 8:30am–5:30pm
                  </p>
                </div>
              </div>
              <div
                className="border-t pt-4 flex items-center gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="w-9 h-9 rounded-full inline-flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Mail className="w-4 h-4" strokeWidth={2.4} />
                </span>
                <div>
                  <p
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Or email us
                  </p>
                  <a
                    href="mailto:careers@maxmarketpros.com"
                    className="text-[14px] font-semibold hover:underline"
                    style={{ color: "var(--ink)" }}
                  >
                    careers@maxmarketpros.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form or success */}
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
              animation: "fadeInUp 0.9s ease-out 0.1s both",
            }}
          >
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-[120px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(22,119,255,0.16) 0%, rgba(116,211,255,0.06) 40%, transparent 70%)",
              }}
            />
            <div className="relative p-6 sm:p-8 lg:p-9">
              {status === "success" ? (
                <div
                  className="rounded-[var(--radius-lg)] p-6 sm:p-8 flex flex-col items-center text-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(34,197,94,0.08) 0%, transparent 100%)",
                    border: "1px solid rgba(34,197,94,0.4)",
                  }}
                >
                  <span
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(180deg, #4ADE80 0%, #22C55E 100%)",
                      color: "#fff",
                      boxShadow: "0 6px 20px rgba(34,197,94,0.4)",
                    }}
                  >
                    <CheckCircle2 className="w-7 h-7" strokeWidth={2.4} />
                  </span>
                  <h3
                    className="text-[22px] sm:text-[24px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    Application received.
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.6] max-w-[420px]"
                    style={{ color: "var(--muted)" }}
                  >
                    Thanks for applying. A senior operator will read your
                    application personally — we'll be in touch within 5
                    business days.
                  </p>
                  <a
                    href="#roles"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14px] transition-all duration-200 hover:translate-y-[-1px]"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-bg)",
                    }}
                  >
                    Back to all roles
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
                  <input
                    type="hidden"
                    name="form-name"
                    value={FORM_NAME}
                  />
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

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <FieldInput
                      label="Full name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      icon={<User className="w-4 h-4" strokeWidth={2.2} />}
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
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-[12.5px] font-semibold mb-1.5"
                        style={{ color: "var(--ink)" }}
                      >
                        Role you're applying for{" "}
                        <span style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <div className="relative">
                        <span
                          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "var(--muted)" }}
                        >
                          <Briefcase className="w-4 h-4" strokeWidth={2.2} />
                        </span>
                        <select
                          id="role"
                          name="role"
                          required
                          value={form.role}
                          onChange={update("role")}
                          className="w-full pl-9 pr-3.5 py-2.5 text-[14px] rounded-[var(--radius-sm)] outline-none transition-colors focus:border-[var(--accent)] appearance-none"
                          style={{
                            background: "var(--bg)",
                            border: "1px solid var(--border-color)",
                            color: "var(--ink)",
                          }}
                        >
                          <option value="">Select a track…</option>
                          {ROLES.map((r) => (
                            <option key={r.slug} value={r.slug}>
                              {r.title}
                            </option>
                          ))}
                          <option value="other">Something else / open</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <FieldInput
                    label="LinkedIn URL"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/…"
                    value={form.linkedin}
                    onChange={update("linkedin")}
                    icon={<Linkedin className="w-4 h-4" strokeWidth={2.2} />}
                  />
                  <FieldInput
                    label="Portfolio / resume link"
                    name="portfolio"
                    type="url"
                    placeholder="Drive, Dropbox, personal site, reel…"
                    value={form.portfolio}
                    onChange={update("portfolio")}
                    icon={<Briefcase className="w-4 h-4" strokeWidth={2.2} />}
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[12.5px] font-semibold mb-1.5"
                      style={{ color: "var(--ink)" }}
                    >
                      Why Max Market Pros?{" "}
                      <span
                        className="font-normal"
                        style={{ color: "var(--muted)" }}
                      >
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="A few sentences on what you're looking for, and what you'd bring to the team."
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-[var(--radius-sm)] outline-none transition-colors focus:border-[var(--accent)] resize-y"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border-color)",
                        color: "var(--ink)",
                      }}
                    />
                  </div>

                  {status === "error" && errorMsg && (
                    <div
                      className="flex items-start gap-2 px-3.5 py-2.5 rounded-[var(--radius-sm)] text-[13px]"
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
                        careers@maxmarketpros.com.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-1 w-full inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15.5px] text-white transition-all duration-200 hover:translate-y-[-1px] disabled:opacity-70 disabled:translate-y-0 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                      boxShadow:
                        "0 1px 2px rgba(17,35,68,0.1), 0 6px 18px rgba(22,119,255,0.32)",
                    }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2
                          className="w-4 h-4 animate-spin"
                          strokeWidth={2.4}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={2.4} />
                        Submit application
                      </>
                    )}
                  </button>

                  <p
                    className="text-[11.5px] leading-[1.5] text-center"
                    style={{ color: "var(--muted)" }}
                  >
                    A senior operator reads every application. We respond within
                    5 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FieldInput({
  label,
  name,
  type,
  required,
  value,
  onChange,
  icon,
  placeholder,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[12.5px] font-semibold mb-1.5"
        style={{ color: "var(--ink)" }}
      >
        {label}{" "}
        {required && <span style={{ color: "var(--accent)" }}>*</span>}
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
          placeholder={placeholder}
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
