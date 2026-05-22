import { ArrowRight, MapPin, Check } from "lucide-react"

const guarantees = [
  "Delivered in 3 business days",
  "Zero sales pressure",
  "Real plan, even if we never work together",
]

export function LocalFinalCta() {
  return (
    <section
      aria-labelledby="local-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #1F2937 55%, #0B132B 100%)",
            boxShadow:
              "0 10px 30px rgba(11,19,43,0.22), 0 30px 80px rgba(11,19,43,0.18)",
          }}
        >
          {/* Amber glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[560px] h-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.25) 0%, transparent 60%)",
            }}
          />
          {/* Grid pattern overlay */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="local-cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#local-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.18)",
                  color: "#FCD34D",
                }}
              >
                <MapPin className="w-3 h-3" strokeWidth={2.5} />
                Free Local SEO audit
              </span>
              <h2
                id="local-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Get your Local SEO punch list.{" "}
                <span
                  className="whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Free.
                </span>
              </h2>
              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                A senior strategist spends about 4 hours on your business —
                GBP audit, Map Pack rank grid, competitor teardown, and the
                exact 15 fixes we&rsquo;d ship first. You get a real plan you
                can act on today, with or without us.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
                    color: "#0B132B",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(245,158,11,0.45)",
                  }}
                >
                  Request your free audit
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="tel:+19496030389"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
                >
                  Or call 949-603-0389
                </a>
              </div>
            </div>

            {/* Right: guarantees */}
            <div className="lg:pl-10 lg:border-l" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                What you get
              </div>
              <ul className="space-y-3.5">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <span
                      className="mt-[3px] w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
                        color: "#fff",
                        boxShadow: "0 2px 6px rgba(16,185,129,0.35)",
                      }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3.5} />
                    </span>
                    <span
                      className="text-[15px] leading-[1.5]"
                      style={{ color: "rgba(255,255,255,0.92)" }}
                    >
                      {g}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 pt-6 border-t text-[12.5px]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Prefer to browse first?{" "}
                <a
                  href="/services/seo"
                  className="font-semibold hover:text-white transition-colors"
                  style={{ color: "#FCD34D" }}
                >
                  See our full SEO program
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
