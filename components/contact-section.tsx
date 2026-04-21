"use client"

import { useState } from "react"
import { PrimaryButton } from "./ui/primary-button"
import { Check, CheckCircle, Shield, Wrench } from "lucide-react"
import { icons8Url } from "@/lib/icons8"

const contactInfo = [
  {
    iconId: "D4xyVOS1pmvV",
    label: "Call us",
    value: "(949) 603-0389",
    href: "tel:+19496030389",
  },
  {
    iconId: "19408",
    label: "Email us",
    value: "info@maxmarketpros.com",
    href: "mailto:info@maxmarketpros.com",
  },
  {
    iconId: "tXg90mCMJpUq",
    label: "Based in",
    value: "Irvine, CA",
    href: null as string | null,
  },
]

const trustBullets = [
  { icon: <Shield className="w-4 h-4" />, text: "No‑pressure strategy call" },
  { icon: <Wrench className="w-4 h-4" />, text: "Built for local service businesses" },
  { icon: <CheckCircle className="w-4 h-4" />, text: "Done‑for‑you execution" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div
        className="section-container relative z-10"
        style={{
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
        }}
      >
        <div
          className="card-surface card-surface-hover relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* Soft aura behind the pill/info column */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 20% 20%, rgba(22,119,255,0.10) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            {/* Left — info */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col">
              {/* Pill */}
              <span
                className="self-start inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(22,119,255,0.10)",
                  color: "var(--accent)",
                }}
              >
                Get in Touch
              </span>

              {/* Heading */}
              <h2
                className="mt-5 text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                Ready to grow your
                <br />
                <span className="accent-underline">local market</span>?
              </h2>

              {/* Description */}
              <p
                className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] max-w-[460px]"
                style={{ color: "var(--muted)" }}
              >
                Book a demo and see how Max Market Pros can help you rank higher,
                convert better, and close more jobs.
              </p>

              {/* Contact info */}
              <div className="mt-8 space-y-3">
                {contactInfo.map((item) => {
                  const inner = (
                    <div
                      className="flex items-center gap-3.5 rounded-[var(--radius-sm)] p-3 transition-colors"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                        style={{ background: "var(--accent-bg)" }}
                      >
                        <img
                          src={icons8Url(item.iconId, 64)}
                          alt=""
                          width={24}
                          height={24}
                          loading="lazy"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div className="min-w-0 leading-tight">
                        <div
                          className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="mt-0.5 text-[15px] font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block group"
                      style={{ color: "inherit" }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  )
                })}
              </div>

              {/* Trust bullets */}
              <ul className="mt-8 space-y-2.5">
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
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div
              className="p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l"
              style={{ borderColor: "var(--border-color)", background: "var(--bg)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "#DCFCE7", color: "#16A34A" }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-[24px] font-bold" style={{ color: "var(--ink)" }}>
                    Thank you!
                  </h3>
                  <p className="text-[16px]" style={{ color: "var(--muted)" }}>
                    We&apos;ll be in touch within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <h3
                    className="text-[22px] sm:text-[24px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    Book your free demo
                  </h3>
                  <p className="text-[14px]" style={{ color: "var(--muted)" }}>
                    We reply within 24 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Name" name="name" placeholder="John Smith" required />
                    <InputField label="Business Name" name="business" placeholder="Smith Plumbing" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Email" name="email" type="email" placeholder="john@example.com" required />
                    <InputField label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <InputField label="Website" name="website" placeholder="www.example.com" />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold mb-2"
                      style={{ color: "var(--ink)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your business..."
                      className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 resize-none focus:outline-none focus:ring-2"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        color: "var(--ink)",
                      }}
                    />
                  </div>

                  <PrimaryButton type="submit" size="lg" className="w-full">
                    Book My Demo
                  </PrimaryButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 focus:outline-none focus:ring-2"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-color)",
          color: "var(--ink)",
        }}
      />
    </div>
  )
}
