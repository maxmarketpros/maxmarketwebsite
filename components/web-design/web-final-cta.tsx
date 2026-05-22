import { ArrowRight, Sparkles } from "lucide-react"

const relatedServices = [
  { href: "/services/seo", label: "SEO" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/paid-ads", label: "Paid Ads" },
]

export function WebFinalCta() {
  return (
    <section aria-labelledby="web-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #1677FF 0%, #22D3EE 55%, #10B981 100%)",
            boxShadow:
              "0 10px 30px rgba(22,119,255,0.25), 0 30px 80px rgba(16,185,129,0.20)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(11,19,43,0.28) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] text-white"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Ready to launch
              </div>

              <h2
                id="web-final-cta-heading"
                className="mt-5 text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Let&apos;s build your next{" "}
                <span className="whitespace-nowrap">website.</span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Book a free 30-minute design call. We&apos;ll audit your current
                site, map out the new architecture, and give you a fixed quote
                before you commit to anything.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15px] sm:text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                  style={{ color: "var(--accent)" }}
                >
                  Book a free design call
                </a>
                <a
                  href="/plans"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.4)" }}
                >
                  See pricing
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>

              <div
                className="mt-10 pt-8 border-t"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <div
                  className="text-[12.5px] font-semibold uppercase tracking-[0.1em] mb-4"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Also explore
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {relatedServices.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-white/10 hover:bg-white/20 border transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.28)" }}
                    >
                      {r.label}
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: browser mockup */}
            <div className="flex justify-center lg:justify-end">
              <CtaBrowserMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBrowserMockup() {
  return (
    <div
      className="relative w-full max-w-[380px] sm:max-w-[440px] rounded-[22px] overflow-hidden"
      style={{
        background: "rgba(11,19,43,0.55)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow:
          "0 20px 60px rgba(11,19,43,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      {/* chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "rgba(11,19,43,0.55)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.35)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.35)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.35)" }} />
        </div>
        <div
          className="ml-2 flex-1 h-5 rounded-md flex items-center px-2 text-[10px] font-medium"
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full mr-1.5"
            style={{ background: "#10B981" }}
          />
          maxmarketpros.com
        </div>
      </div>

      {/* content */}
      <div
        className="p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(247,250,252,0.95) 100%)",
        }}
      >
        {/* nav */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="h-4 w-[52px] rounded"
            style={{
              background: "linear-gradient(135deg, #1677FF, #22D3EE)",
            }}
          />
          <div className="flex gap-2">
            <span className="h-1.5 w-8 rounded-full" style={{ background: "#DCE4EE" }} />
            <span className="h-1.5 w-8 rounded-full" style={{ background: "#DCE4EE" }} />
            <span
              className="h-4 w-12 rounded-full"
              style={{ background: "#1677FF" }}
            />
          </div>
        </div>

        {/* hero */}
        <div className="h-5 w-[85%] rounded mb-1.5" style={{ background: "#0B132B" }} />
        <div className="h-5 w-[65%] rounded mb-3" style={{ background: "#0B132B" }} />
        <div className="h-1.5 w-full rounded-full mb-1" style={{ background: "#E4EAF2" }} />
        <div className="h-1.5 w-[88%] rounded-full mb-1" style={{ background: "#E4EAF2" }} />
        <div className="h-1.5 w-[75%] rounded-full mb-3" style={{ background: "#E4EAF2" }} />

        <div className="flex gap-2 mb-4">
          <span
            className="h-7 w-[90px] rounded-md"
            style={{ background: "linear-gradient(135deg, #1677FF, #22D3EE)" }}
          />
          <span
            className="h-7 w-[70px] rounded-md border"
            style={{ borderColor: "var(--border-color)", background: "#fff" }}
          />
        </div>

        {/* feature grid */}
        <div className="grid grid-cols-3 gap-2">
          {["#1677FF", "#10B981", "#F59E0B"].map((c, i) => (
            <div
              key={i}
              className="rounded-md p-2 border"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
              }}
            >
              <div className="w-4 h-4 rounded mb-1" style={{ background: `${c}33` }} />
              <div className="h-1 w-full rounded-full mb-1" style={{ background: "#DCE4EE" }} />
              <div className="h-1 w-[70%] rounded-full" style={{ background: "#E8EDF4" }} />
            </div>
          ))}
        </div>
      </div>

      {/* floating badge */}
      <div
        className="absolute top-12 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10.5px] font-bold"
        style={{
          background: "#fff",
          color: "#059669",
          boxShadow: "0 4px 12px rgba(11,19,43,0.2)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#10B981" }}
        />
        98 Lighthouse
      </div>
    </div>
  )
}
