import { ArrowRight, Mail } from "lucide-react"

export function BlogNewsletterCta() {
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
            <form
              action="/contact"
              method="get"
              className="flex flex-col sm:flex-row gap-2.5"
              aria-label="Subscribe to monthly newsletter"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Work email
              </label>
              <input
                id="newsletter-email"
                name="newsletter"
                type="email"
                required
                placeholder="you@yourshop.com"
                className="flex-1 px-4 py-3 rounded-full text-[15px] font-medium outline-none focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14.5px] font-bold whitespace-nowrap transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #1677FF, #74D3FF)",
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(22,119,255,0.35)",
                }}
              >
                Send me the notes
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
