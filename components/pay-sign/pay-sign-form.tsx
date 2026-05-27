"use client"

import { useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { PrimaryButton } from "@/components/ui/primary-button"
import { submitNetlifyForm } from "@/lib/netlify-forms"
import {
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react"

const FORM_NAME = "pay-sign-create-task"

const PLAN_OPTIONS = [
  "LocalMark",
  "ServicePro",
  "Signature",
  "Google Ads",
  "Website Only",
] as const

const TASK_OPTIONS = [
  "New Website",
  "New Logo",
  "Social Media Campaign",
  "Google Verification",
  "Maps & Directories",
  "Payment Integration & Processing Through Website",
] as const

const COMMITMENT_OPTIONS = ["6", "12", "24"] as const

const CLOSER_OPTIONS = [
  "Myles Berniard-Mendez",
  "Dan Carroll",
  "Abel Diaz",
  "Lucas Herman",
  "Pablo Brescia",
  "Brandon Lopez",
  "Joseph Stirling",
  "Lawrence Welsh",
  "Clay Haworth",
]

const OPENER_OPTIONS = [
  "Self",
  "Michael Stirling",
  "EGYPT",
  "Larry Welsh",
  "Brandon Lopez",
  "Myles Berniard-Mendez",
]

type Status = "idle" | "submitting" | "success" | "error"

interface FormState {
  companyName: string
  yearEstablished: string
  ownerContact: string
  businessPhone: string
  contactPhone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  website: string
  services: string
  plan: string
  tasks: string[]
  commitment: string
  closer: string
  opener: string
  setupFee: string
  monthlyFee: string
  todaysDayOfMonth: string
  paymentAuthorized: boolean
}

const EMPTY: FormState = {
  companyName: "",
  yearEstablished: "",
  ownerContact: "",
  businessPhone: "",
  contactPhone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  website: "",
  services: "",
  plan: "",
  tasks: [],
  commitment: "",
  closer: "",
  opener: "",
  setupFee: "",
  monthlyFee: "",
  todaysDayOfMonth: "",
  paymentAuthorized: false,
}

function toNumber(s: string): number {
  const n = parseFloat(s.replace(/[^0-9.\-]/g, ""))
  return Number.isFinite(n) ? n : 0
}

function formatMoney(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  })
}

export function PaySignForm() {
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY)
  const submitted = status === "success"

  const setupNum = toNumber(form.setupFee)
  const monthlyNum = toNumber(form.monthlyFee)
  const commitmentNum = toNumber(form.commitment)

  const todaysTotal = useMemo(
    () => setupNum + monthlyNum,
    [setupNum, monthlyNum],
  )
  const commitmentTotal = useMemo(
    () => setupNum + monthlyNum * commitmentNum,
    [setupNum, monthlyNum, commitmentNum],
  )

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }))

  const toggleTask = (task: string) =>
    setForm((s) => ({
      ...s,
      tasks: s.tasks.includes(task)
        ? s.tasks.filter((t) => t !== task)
        : [...s.tasks, task],
    }))

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg(null)

    const payload = {
      "page-source": pathname || "",
      "company-name": form.companyName,
      "year-established": form.yearEstablished,
      "owner-contact": form.ownerContact,
      "business-phone": form.businessPhone,
      "contact-phone": form.contactPhone,
      email: form.email,
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      website: form.website,
      services: form.services,
      "plan-selected": form.plan,
      "tasks-necessary": form.tasks.join(", "),
      "commitment-months": form.commitment,
      closer: form.closer,
      opener: form.opener,
      "setup-fee": form.setupFee,
      "monthly-fee": form.monthlyFee,
      "todays-total": todaysTotal.toFixed(2),
      "todays-day-of-month": form.todaysDayOfMonth,
      "commitment-total": commitmentTotal.toFixed(2),
      "payment-authorized": form.paymentAuthorized ? "Yes" : "No",
    }

    try {
      const res = await submitNetlifyForm(FORM_NAME, payload)
      if (!res.ok) {
        if (process.env.NODE_ENV !== "production") {
          console.log("[dev] Netlify form payload (would submit):", {
            form: FORM_NAME,
            ...payload,
          })
          setStatus("success")
          return
        }
        throw new Error(`Submission failed (${res.status})`)
      }
      setStatus("success")
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.log("[dev] Netlify form payload (would submit):", {
          form: FORM_NAME,
          ...payload,
        })
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
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.16) 0%, transparent 65%), var(--bg)",
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

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="text-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border shadow-sm"
              style={{
                background: "#FFFFFF",
                borderColor: "rgba(22,119,255,0.30)",
                color: "var(--accent)",
              }}
            >
              <Lock className="w-3.5 h-3.5" strokeWidth={2.5} />
              Internal · Sales Team
            </span>

            <h1
              className="mt-5 text-[36px] xs:text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Pay &amp; Sign <span className="accent-underline">Create Task</span>
            </h1>

            <p
              className="mt-4 text-[16.5px] sm:text-[18px] leading-[1.6] max-w-[640px] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Capture the deal details and send them straight to the team.
            </p>
          </div>

          {/* Card */}
          <div
            className="relative mt-10"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            <div
              aria-hidden
              className="absolute -inset-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 70% at 50% 30%, rgba(22,119,255,0.18) 0%, transparent 70%)",
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
                      className="text-[26px] font-bold tracking-[-0.01em]"
                      style={{ color: "var(--ink)" }}
                    >
                      Deal submitted.
                    </h3>
                    <p
                      className="text-[15.5px] max-w-[440px]"
                      style={{ color: "var(--muted)" }}
                    >
                      The team has been emailed with all the deal details.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(EMPTY)
                        setStatus("idle")
                      }}
                      className="mt-2 text-[14px] font-semibold hover:underline"
                      style={{ color: "var(--accent)" }}
                    >
                      Submit another deal
                    </button>
                  </div>
                ) : (
                  <form
                    name={FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                    className="p-6 sm:p-8 lg:p-10"
                  >
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

                    {/* SECTION 1 — Client info */}
                    <SectionHeader
                      step="01"
                      title="Client info"
                      subtitle="Who is the customer?"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Company name (for display on Google, etc.)"
                        name="company-name"
                        placeholder="Smith Plumbing"
                        required
                        value={form.companyName}
                        onChange={(e) => set("companyName", e.target.value)}
                      />
                      <Field
                        label="Year established"
                        name="year-established"
                        optional
                        placeholder="2014"
                        value={form.yearEstablished}
                        onChange={(e) => set("yearEstablished", e.target.value)}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Business owner / primary contact"
                        name="owner-contact"
                        placeholder="John Smith"
                        required
                        value={form.ownerContact}
                        onChange={(e) => set("ownerContact", e.target.value)}
                      />
                      <Field
                        label="Email address (VERIFY)"
                        name="email"
                        type="email"
                        placeholder="john@smithplumbing.com"
                        required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Business (public) phone number"
                        name="business-phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        value={form.businessPhone}
                        onChange={(e) => set("businessPhone", e.target.value)}
                      />
                      <Field
                        label="Contact phone number"
                        name="contact-phone"
                        type="tel"
                        optional
                        placeholder="(555) 987-6543"
                        value={form.contactPhone}
                        onChange={(e) => set("contactPhone", e.target.value)}
                      />
                    </div>

                    {/* SECTION 2 — Address */}
                    <SectionHeader
                      step="02"
                      title="Business address"
                    />

                    <div className="grid grid-cols-1 gap-4">
                      <Field
                        label="Postal address"
                        name="address"
                        placeholder="123 Main St"
                        required
                        value={form.address}
                        onChange={(e) => set("address", e.target.value)}
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Field
                        label="City"
                        name="city"
                        placeholder="Irvine"
                        required
                        value={form.city}
                        onChange={(e) => set("city", e.target.value)}
                      />
                      <Field
                        label="State"
                        name="state"
                        placeholder="CA"
                        required
                        value={form.state}
                        onChange={(e) => set("state", e.target.value)}
                      />
                      <Field
                        label="Zip code"
                        name="zip"
                        placeholder="92614"
                        required
                        value={form.zip}
                        onChange={(e) => set("zip", e.target.value)}
                      />
                    </div>

                    {/* SECTION 3 — Services & website */}
                    <SectionHeader
                      step="03"
                      title="Services & website"
                    />

                    <Field
                      label="Client's website domain"
                      name="website"
                      optional
                      placeholder="www.smithplumbing.com"
                      value={form.website}
                      onChange={(e) => set("website", e.target.value)}
                    />

                    <div className="mt-4">
                      <label
                        htmlFor="services"
                        className="block text-[13px] font-semibold mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        Client&rsquo;s primary services{" "}
                        <span
                          className="font-medium"
                          style={{ color: "var(--muted)" }}
                        >
                          (top three or less, optional)
                        </span>
                      </label>
                      <textarea
                        id="services"
                        name="services"
                        rows={3}
                        placeholder="Drain cleaning, water heater install, leak repair"
                        value={form.services}
                        onChange={(e) => set("services", e.target.value)}
                        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--ink)",
                        }}
                      />
                    </div>

                    {/* SECTION 4 — Plan + tasks + commitment */}
                    <SectionHeader
                      step="04"
                      title="Plan & commitment"
                    />

                    <RadioGroup
                      label="Plan selected"
                      name="plan-selected"
                      options={[...PLAN_OPTIONS]}
                      value={form.plan}
                      onChange={(v) => set("plan", v)}
                      required
                    />

                    <div className="mt-6">
                      <label
                        className="block text-[13px] font-semibold mb-2"
                        style={{ color: "var(--ink)" }}
                      >
                        Tasks necessary{" "}
                        <span
                          className="font-medium"
                          style={{ color: "var(--muted)" }}
                        >
                          (optional, multi-select)
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {TASK_OPTIONS.map((t) => {
                          const checked = form.tasks.includes(t)
                          return (
                            <label
                              key={t}
                              className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-[var(--radius-sm)] cursor-pointer transition-colors"
                              style={{
                                background: checked
                                  ? "var(--accent-bg)"
                                  : "var(--bg)",
                                border: `1px solid ${
                                  checked
                                    ? "rgba(22,119,255,0.45)"
                                    : "var(--border-color)"
                                }`,
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleTask(t)}
                                className="mt-0.5 w-4 h-4 accent-[var(--accent)]"
                              />
                              <span
                                className="text-[14px] font-medium leading-[1.35]"
                                style={{ color: "var(--ink)" }}
                              >
                                {t}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    <RadioGroup
                      className="mt-6"
                      label="Minimum monthly commitment (months)"
                      name="commitment-months"
                      options={[...COMMITMENT_OPTIONS]}
                      value={form.commitment}
                      onChange={(v) => set("commitment", v)}
                      required
                    />

                    {/* SECTION 5 — Attribution */}
                    <SectionHeader
                      step="05"
                      title="Attribution"
                      subtitle="Who closed and opened this deal?"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <SelectField
                        label="Closer"
                        name="closer"
                        required
                        value={form.closer}
                        onChange={(e) => set("closer", e.target.value)}
                        options={CLOSER_OPTIONS}
                      />
                      <SelectField
                        label="Opener"
                        name="opener"
                        required
                        value={form.opener}
                        onChange={(e) => set("opener", e.target.value)}
                        options={OPENER_OPTIONS}
                      />
                    </div>

                    {/* SECTION 6 — Pricing */}
                    <SectionHeader
                      step="06"
                      title="Pricing"
                      subtitle="No dollar signs — numbers only."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Field
                        label="Setup (or annual) fee"
                        name="setup-fee"
                        type="number"
                        inputMode="decimal"
                        placeholder="500"
                        required
                        value={form.setupFee}
                        onChange={(e) => set("setupFee", e.target.value)}
                      />
                      <Field
                        label='Monthly ("N/A" if annual)'
                        name="monthly-fee"
                        type="text"
                        placeholder="300"
                        required
                        value={form.monthlyFee}
                        onChange={(e) => set("monthlyFee", e.target.value)}
                      />
                      <Field
                        label="Today's day of month (N/A for annual)"
                        name="todays-day-of-month"
                        type="text"
                        required
                        placeholder="21st or N/A"
                        value={form.todaysDayOfMonth}
                        onChange={(e) =>
                          set("todaysDayOfMonth", e.target.value)
                        }
                      />
                    </div>

                    {/* Auto-calc totals */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ReadOnlyTotal
                        label="Today's total (setup + monthly)"
                        value={formatMoney(todaysTotal)}
                      />
                      <ReadOnlyTotal
                        label="Total during commitment"
                        value={formatMoney(commitmentTotal)}
                      />
                    </div>

                    {/* SECTION 7 — Authorization */}
                    <div className="mt-8">
                      <label
                        className="flex items-start gap-3 px-4 py-3.5 rounded-[var(--radius-sm)] cursor-pointer transition-colors"
                        style={{
                          background: form.paymentAuthorized
                            ? "rgba(22,163,74,0.08)"
                            : "var(--bg)",
                          border: `1px solid ${
                            form.paymentAuthorized
                              ? "rgba(22,163,74,0.35)"
                              : "var(--border-color)"
                          }`,
                        }}
                      >
                        <input
                          type="checkbox"
                          required
                          checked={form.paymentAuthorized}
                          onChange={(e) =>
                            set("paymentAuthorized", e.target.checked)
                          }
                          className="mt-0.5 w-4 h-4 accent-[var(--accent)]"
                        />
                        <span
                          className="text-[14px] font-semibold leading-[1.4]"
                          style={{ color: "var(--ink)" }}
                        >
                          I confirm client has ALREADY GIVEN PAYMENT METHOD and
                          HAS AUTHORIZED PAYMENT.
                        </span>
                      </label>
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

                    {/* Submit */}
                    <PrimaryButton
                      type="submit"
                      size="lg"
                      className="w-full mt-7"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        "Sending…"
                      ) : (
                        <>
                          Submit deal to team
                          <ArrowRight
                            className="w-4 h-4 ml-2"
                            strokeWidth={2.75}
                          />
                        </>
                      )}
                    </PrimaryButton>

                    <p
                      className="mt-3 text-center text-[12px] leading-[1.5] flex items-center justify-center gap-1.5"
                      style={{ color: "var(--muted)" }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Submission goes to the team via Netlify.
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

/* ---------- helpers ---------- */

function SectionHeader({
  step,
  title,
  subtitle,
}: {
  step: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mt-10 mb-5 first:mt-0 flex items-center gap-3">
      <span
        className="text-[11px] font-bold font-mono tracking-[0.06em] px-2 py-1 rounded"
        style={{
          background: "var(--accent-bg)",
          color: "var(--accent)",
        }}
      >
        {step}
      </span>
      <div>
        <h2
          className="text-[18px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-[13px] mt-0.5"
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
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
  inputMode,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  optional?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
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
        inputMode={inputMode}
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

function SelectField({
  label,
  name,
  required,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[13px] font-semibold mb-2"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
        style={{
          background: `var(--bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23677489' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") right 1rem center / 12px 8px no-repeat`,
          border: "1px solid var(--border-color)",
          color: value ? "var(--ink)" : "var(--muted)",
        }}
      >
        <option value="">SELECT ONE</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required,
  className,
}: {
  label: string
  name: string
  options: string[]
  value: string
  onChange: (v: string) => void
  required?: boolean
  className?: string
}) {
  return (
    <div className={className}>
      <label
        className="block text-[13px] font-semibold mb-2"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-2.5">
        {options.map((o) => {
          const checked = value === o
          return (
            <label
              key={o}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-sm)] cursor-pointer transition-colors text-[14px] font-semibold"
              style={{
                background: checked ? "var(--accent-bg)" : "var(--bg)",
                border: `1px solid ${
                  checked ? "rgba(22,119,255,0.45)" : "var(--border-color)"
                }`,
                color: checked ? "var(--accent)" : "var(--ink)",
              }}
            >
              <input
                type="radio"
                name={name}
                value={o}
                required={required}
                checked={checked}
                onChange={() => onChange(o)}
                className="w-4 h-4 accent-[var(--accent)]"
              />
              {o}
            </label>
          )
        })}
      </div>
    </div>
  )
}

function ReadOnlyTotal({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div
      className="px-4 py-3 rounded-[var(--radius-sm)]"
      style={{
        background: "var(--accent-bg)",
        border: "1px solid rgba(22,119,255,0.30)",
      }}
    >
      <div
        className="text-[11px] font-bold uppercase tracking-[0.10em]"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </div>
      <div
        className="mt-1 text-[24px] font-bold tabular-nums"
        style={{ color: "var(--ink)" }}
      >
        {value}
      </div>
    </div>
  )
}
