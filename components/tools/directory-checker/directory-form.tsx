"use client"

import { useState } from "react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { ArrowRight, Building2 } from "lucide-react"

export interface DirectoryFormValues {
  businessName: string
  streetAddress: string
  city: string
  state: string
  zip: string
  phone: string
}

interface DirectoryFormProps {
  initialValues?: Partial<DirectoryFormValues>
  onSubmit: (values: DirectoryFormValues) => void
  busy?: boolean
}

const EMPTY: DirectoryFormValues = {
  businessName: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
}

export function DirectoryForm({
  initialValues,
  onSubmit,
  busy,
}: DirectoryFormProps) {
  const [values, setValues] = useState<DirectoryFormValues>({
    ...EMPTY,
    ...initialValues,
  })
  const [error, setError] = useState<string | null>(null)

  const set = (key: keyof DirectoryFormValues) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const trimmed: DirectoryFormValues = {
          businessName: values.businessName.trim(),
          streetAddress: values.streetAddress.trim(),
          city: values.city.trim(),
          state: values.state.trim(),
          zip: values.zip.trim(),
          phone: values.phone.trim(),
        }
        if (
          !trimmed.businessName ||
          !trimmed.streetAddress ||
          !trimmed.city ||
          !trimmed.state ||
          !trimmed.zip ||
          !trimmed.phone
        ) {
          setError("Fill in every field so we can scan accurately.")
          return
        }
        setError(null)
        onSubmit(trimmed)
      }}
      className="w-full text-left"
    >
      <div
        className="p-5 sm:p-7 rounded-[var(--radius-xl)]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-color)",
          boxShadow:
            "0 1px 3px var(--shadow-color), 0 16px 40px rgba(22,119,255,0.10)",
        }}
      >
        {/* Business info group */}
        <SectionHeader icon={Building2}>Your business</SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-4">
          <Field
            label="Business name"
            name="businessName"
            placeholder="Smith Plumbing"
            autoComplete="organization"
            value={values.businessName}
            onChange={set("businessName")}
            disabled={busy}
            colSpan="sm:col-span-6"
          />
          <Field
            label="Street address"
            name="streetAddress"
            placeholder="123 Main St"
            autoComplete="street-address"
            value={values.streetAddress}
            onChange={set("streetAddress")}
            disabled={busy}
            colSpan="sm:col-span-6"
          />
          <Field
            label="City"
            name="city"
            placeholder="Newport Beach"
            autoComplete="address-level2"
            value={values.city}
            onChange={set("city")}
            disabled={busy}
            colSpan="sm:col-span-3"
          />
          <Field
            label="State"
            name="state"
            placeholder="CA"
            autoComplete="address-level1"
            maxLength={2}
            uppercase
            value={values.state}
            onChange={set("state")}
            disabled={busy}
            colSpan="sm:col-span-1"
          />
          <Field
            label="ZIP"
            name="zip"
            placeholder="92660"
            autoComplete="postal-code"
            inputMode="numeric"
            value={values.zip}
            onChange={set("zip")}
            disabled={busy}
            colSpan="sm:col-span-2"
          />
          <Field
            label="Business phone"
            name="phone"
            placeholder="(949) 603-0389"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={set("phone")}
            disabled={busy}
            colSpan="sm:col-span-6"
          />
        </div>

        <PrimaryButton
          type="submit"
          size="lg"
          disabled={busy}
          className="w-full mt-7"
        >
          {busy ? "Scanning…" : (
            <>
              Run Free Scan
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
            </>
          )}
        </PrimaryButton>

        <p
          className="mt-3 text-center text-[12px] leading-[1.5]"
          style={{ color: "var(--muted)" }}
        >
          Free scan, no sign-up. We&rsquo;ll never share your info.
        </p>
      </div>

      {error && (
        <p
          className="mt-3 text-[13px] font-medium text-center"
          style={{ color: "var(--destructive)" }}
        >
          {error}
        </p>
      )}
    </form>
  )
}

function SectionHeader({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        className="w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0"
        style={{
          background: "var(--accent-bg)",
          color: "var(--accent)",
        }}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
      </span>
      <h3
        className="text-[14px] font-bold uppercase tracking-[0.06em]"
        style={{ color: "var(--ink)" }}
      >
        {children}
      </h3>
    </div>
  )
}

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: "text" | "tel" | "email" | "numeric" | "url"
  maxLength?: number
  uppercase?: boolean
  disabled?: boolean
  colSpan?: string
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  uppercase,
  disabled,
  colSpan,
}: FieldProps) {
  const id = `dir-${name}`
  return (
    <div className={colSpan}>
      <label
        htmlFor={id}
        className="block text-[12.5px] font-semibold mb-1.5"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3.5 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] disabled:opacity-50 ${uppercase ? "uppercase" : ""}`}
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
          color: "var(--ink)",
        }}
      />
    </div>
  )
}
