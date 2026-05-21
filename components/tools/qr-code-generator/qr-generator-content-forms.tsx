"use client"

import type { ContentType, ContentValues } from "./lib/payloads"

const labelClass =
  "block mb-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em]"
const helpClass = "mt-1.5 text-[12.5px]"

function inputStyle(): React.CSSProperties {
  return {
    background: "var(--surface)",
    color: "var(--ink)",
    border: "1px solid var(--border-color)",
    boxShadow: "inset 0 1px 2px rgba(17,35,68,0.04)",
  }
}

function focusOn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.border = "1px solid var(--accent)"
  e.currentTarget.style.boxShadow =
    "inset 0 1px 2px rgba(17,35,68,0.04), 0 0 0 3px rgba(22,119,255,0.15)"
}
function focusOff(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.border = "1px solid var(--border-color)"
  e.currentTarget.style.boxShadow = "inset 0 1px 2px rgba(17,35,68,0.04)"
}

const inputClass =
  "w-full rounded-[var(--radius-sm)] px-4 py-3 text-[15px] outline-none transition-shadow"

export function QrGeneratorContentForms<T extends ContentType>({
  type,
  values,
  onChange,
}: {
  type: T
  values: ContentValues
  onChange: <K extends ContentType>(t: K, next: ContentValues[K]) => void
}) {
  switch (type) {
    case "url":
      return (
        <Field label="Destination URL">
          <input
            type="url"
            inputMode="url"
            spellCheck={false}
            placeholder="https://yourwebsite.com"
            className={inputClass}
            style={inputStyle()}
            value={values.url.url}
            onChange={(e) => onChange("url", { url: e.target.value })}
            onFocus={focusOn}
            onBlur={focusOff}
          />
          <p className={helpClass} style={{ color: "var(--muted)" }}>
            We'll auto-add <code>https://</code> if you leave it off.
          </p>
        </Field>
      )

    case "text":
      return (
        <Field label="Plain text">
          <textarea
            rows={4}
            placeholder="Type or paste anything…"
            className={`${inputClass} resize-y min-h-[112px]`}
            style={inputStyle()}
            value={values.text.text}
            onChange={(e) => onChange("text", { text: e.target.value })}
            onFocus={focusOn}
            onBlur={focusOff}
          />
        </Field>
      )

    case "email":
      return (
        <div className="grid grid-cols-1 gap-4">
          <Field label="Send to">
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
              style={inputStyle()}
              value={values.email.to}
              onChange={(e) =>
                onChange("email", { ...values.email, to: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Subject (optional)">
            <input
              type="text"
              placeholder="Quick question"
              className={inputClass}
              style={inputStyle()}
              value={values.email.subject}
              onChange={(e) =>
                onChange("email", { ...values.email, subject: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Message (optional)">
            <textarea
              rows={3}
              placeholder="Pre-filled message body"
              className={`${inputClass} resize-y min-h-[88px]`}
              style={inputStyle()}
              value={values.email.body}
              onChange={(e) =>
                onChange("email", { ...values.email, body: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
        </div>
      )

    case "phone":
      return (
        <Field label="Phone number">
          <input
            type="tel"
            inputMode="tel"
            placeholder="+1 949 603 0389"
            className={inputClass}
            style={inputStyle()}
            value={values.phone.phone}
            onChange={(e) => onChange("phone", { phone: e.target.value })}
            onFocus={focusOn}
            onBlur={focusOff}
          />
          <p className={helpClass} style={{ color: "var(--muted)" }}>
            Scanning the QR opens the dialer with this number pre-filled.
          </p>
        </Field>
      )

    case "sms":
      return (
        <div className="grid grid-cols-1 gap-4">
          <Field label="Phone number">
            <input
              type="tel"
              inputMode="tel"
              placeholder="+1 949 603 0389"
              className={inputClass}
              style={inputStyle()}
              value={values.sms.phone}
              onChange={(e) =>
                onChange("sms", { ...values.sms, phone: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Message (optional)">
            <textarea
              rows={3}
              placeholder="Hi! I saw your QR code…"
              className={`${inputClass} resize-y min-h-[88px]`}
              style={inputStyle()}
              value={values.sms.body}
              onChange={(e) =>
                onChange("sms", { ...values.sms, body: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
        </div>
      )

    case "wifi":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Network name (SSID)" className="sm:col-span-2">
            <input
              type="text"
              placeholder="MyHomeWiFi"
              className={inputClass}
              style={inputStyle()}
              value={values.wifi.ssid}
              onChange={(e) =>
                onChange("wifi", { ...values.wifi, ssid: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Password">
            <input
              type="text"
              autoComplete="off"
              placeholder="•••••••••"
              className={inputClass}
              style={inputStyle()}
              value={values.wifi.password}
              onChange={(e) =>
                onChange("wifi", { ...values.wifi, password: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
              disabled={values.wifi.encryption === "nopass"}
            />
          </Field>
          <Field label="Security">
            <select
              className={inputClass}
              style={inputStyle()}
              value={values.wifi.encryption}
              onChange={(e) =>
                onChange("wifi", {
                  ...values.wifi,
                  encryption: e.target.value as ContentValues["wifi"]["encryption"],
                })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            >
              <option value="WPA">WPA / WPA2 / WPA3</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No password</option>
            </select>
          </Field>
          <label className="sm:col-span-2 flex items-center gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
            <input
              type="checkbox"
              checked={values.wifi.hidden}
              onChange={(e) =>
                onChange("wifi", { ...values.wifi, hidden: e.target.checked })
              }
              className="w-4 h-4 rounded"
              style={{ accentColor: "var(--accent)" }}
            />
            Network is hidden (doesn't broadcast SSID)
          </label>
          <p className="sm:col-span-2 text-[12.5px]" style={{ color: "var(--muted)" }}>
            Scanning auto-joins on iOS 11+ and Android 10+ phones — perfect for cafes,
            offices, and Airbnb welcome cards.
          </p>
        </div>
      )

    case "vcard":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First name">
            <input
              type="text"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.firstName}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, firstName: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Last name">
            <input
              type="text"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.lastName}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, lastName: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Company">
            <input
              type="text"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.org}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, org: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Title">
            <input
              type="text"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.title}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, title: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.phone}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, phone: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.email}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, email: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <Field label="Website" className="sm:col-span-2">
            <input
              type="url"
              className={inputClass}
              style={inputStyle()}
              value={values.vcard.url}
              onChange={(e) =>
                onChange("vcard", { ...values.vcard, url: e.target.value })
              }
              onFocus={focusOn}
              onBlur={focusOff}
            />
          </Field>
          <p className="sm:col-span-2 text-[12.5px]" style={{ color: "var(--muted)" }}>
            Scanning opens "Add to Contacts" on iOS and Android — great for business
            cards, name badges, and trade-show booths.
          </p>
        </div>
      )
  }
}

function Field({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label className={labelClass} style={{ color: "var(--ink)" }}>
        {label}
      </label>
      {children}
    </div>
  )
}
