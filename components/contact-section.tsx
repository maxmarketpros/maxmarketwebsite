"use client"

import { useState } from "react"
import { PrimaryButton } from "./ui/primary-button"
import { Shield, Wrench, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div
        className="section-container relative z-10"
        style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
      >
        <div
          className="card-surface overflow-hidden"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — info */}
            <div
              className="p-10 sm:p-14 flex flex-col justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #0D5FD9 100%)',
              }}
            >
              <h2 className="text-[36px] sm:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Ready to grow your
                <br />
                local market?
              </h2>
              <p className="mt-5 text-[18px] leading-[1.6] text-white/80 max-w-[420px]">
                Book a demo and see how Max Market Pros can help you rank higher,
                convert better, and close more jobs.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "No‑pressure strategy call" },
                  { icon: <Wrench className="w-5 h-5" />, text: "Built for local service businesses" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Done‑for‑you execution" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-[15px] text-white/90">
                    <span className="text-white/60">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="p-10 sm:p-14">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#DCFCE7', color: '#16A34A' }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-[24px] font-bold" style={{ color: 'var(--ink)' }}>
                    Thank you!
                  </h3>
                  <p className="text-[16px]" style={{ color: 'var(--muted)' }}>
                    We&apos;ll be in touch within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-5"
                >
                  <h3
                    className="text-[24px] font-bold mb-6"
                    style={{ color: 'var(--ink)' }}
                  >
                    Book your free demo
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Name" name="name" placeholder="John Smith" required />
                    <InputField label="Business Name" name="business" placeholder="Smith Plumbing" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Email" name="email" type="email" placeholder="john@example.com" required />
                    <InputField label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <InputField label="Website" name="website" placeholder="www.example.com" />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[14px] font-medium mb-2"
                      style={{ color: 'var(--ink)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your business..."
                      className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 resize-none focus:outline-none"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--ink)',
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
        className="block text-[14px] font-medium mb-2"
        style={{ color: 'var(--ink)' }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 text-[15px] rounded-[var(--radius-sm)] transition-all duration-200 focus:outline-none"
        style={{
          background: 'var(--bg)',
          border: '1px solid var(--border-color)',
          color: 'var(--ink)',
        }}
      />
    </div>
  )
}
