"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowRight, CheckCircle2, Mail } from "lucide-react"
import { submitNetlifyForm } from "@/lib/netlify-forms"

const FORM_NAME = "blog-newsletter"

type Status = "idle" | "submitting" | "success" | "error"

export function BlogNewsletterCta() {
  const pathname = usePathname()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "submitting") return
    const trimmed = email.trim()
    if (!trimmed) return
    setStatus("submitting")
    try {
      const res = await submitNetlifyForm(FORM_NAME, {
        email: trimmed,
        "page-source": pathname || "",
      })
      if (!res.ok) {
        if (process.env.NODE_ENV !== "production") {
          console.log("[dev] Netlify form payload (would submit):", { form: FORM_NAME, email: trimmed, "page-source": pathname })
          setStatus("success")
          return
        }
        throw new Error(`Submission failed (${res.status})`)
      }
      setStatus("success")
    } catch {
      if (process.env.NODE_ENV !== "production") {
        console.log("[dev] Netlify form payload (would submit):", { form: FORM_NAME, email: trimmed, "page-source": pathname })
        setStatus("success")
        return
      }
      setStatus("error")
    }
  }

  return (
    <section className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container py-14 sm:py-20">
        <div
          className="relative mx-auto max-w-[960px] overflow-hidden px-6 py-10 sm:px-12 sm:py-14"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "radial-gradient(700px 240px at 100% 0%, rgba(116,211,255,0.20), transparent 65%), linear-gradient(160deg, #0B132B 0%, #122252 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 18px 50px rgba(11,19,43,0.30)",
          }}
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-7 lg:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: "rgba(116,211,255,0.18)", color: "#74D3FF" }}
                >
                  <Mail className="w-4 h-4" />
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#74D3FF" }}
                >
                  Field notes · 1× a month
                </span>
              </div>
              <h2
                className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "#fff" }}
              >
                One service-business growth note in your inbox each month.
              </h2>
              <p
                className="mt-3 text-[15px] sm:text-[16px] leading-[1.55] max-w-[480px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                The benchmarks, plays, and platform changes owners and operators should care about. No fluff, no daily noise.
              </p>
            </div>
            {status === "success" ? (
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.14)",
                  border: "1px solid rgba(34,197,94,0.45)",
                  color: "#BBF7D0",
                }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(34,197,94,0.25)", color: "#86EFAC" }}
                >
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.4} />
                </span>
                <div className="text-[14.5px] font-semibold leading-tight">
                  You&rsquo;re on the list.
                  <span
                    className="block mt-0.5 text-[12.5px] font-medium"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Next field note hits your inbox next month.
                  </span>
                </div>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                className="flex flex-col gap-2.5"
                aria-label="Subscribe to monthly newsletter"
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
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <label className="sr-only" htmlFor="newsletter-email">
                    Work email
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "submitting"}
                    placeholder="you@yourshop.com"
                    className="flex-1 px-4 py-3 rounded-full text-[15px] font-medium outline-none focus:ring-2 disabled:opacity-60"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14.5px] font-bold whitespace-nowrap transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0"
                    style={{
                      background: "linear-gradient(135deg, #1677FF, #74D3FF)",
                      color: "#fff",
                      boxShadow: "0 8px 24px rgba(22,119,255,0.35)",
                    }}
                  >
                    {status === "submitting" ? "Sending…" : (
                      <>
                        Send me the notes
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p
                    className="text-[12.5px] font-medium"
                    style={{ color: "#FCA5A5" }}
                  >
                    Something went wrong. Please try again, or email info@maxmarketpros.com.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
