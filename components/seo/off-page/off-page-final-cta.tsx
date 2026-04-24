import { ArrowRight, Share2, Newspaper, Award, Link2, Radio, Check } from "lucide-react"

const guarantees = [
  "Referring-domain profile audit",
  "Competitor link-gap analysis",
  "20 prioritized link targets",
  "Delivered as branded PDF in 3 days",
]

const badges = [
  { Icon: Newspaper, label: "Digital PR" },
  { Icon: Award, label: "Authority links" },
  { Icon: Link2, label: "Citations" },
  { Icon: Radio, label: "Mentions" },
]

export function OffPageFinalCta() {
  return (
    <section
      aria-labelledby="off-page-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #2E1065 0%, #5B21B6 45%, #7C3AED 100%)",
            boxShadow:
              "0 10px 30px rgba(46,16,101,0.28), 0 30px 80px rgba(46,16,101,0.22)",
          }}
        >
          {/* Radial glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[560px] h-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.25) 0%, transparent 60%)",
            }}
          />
          {/* Chevron grid overlay */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="off-page-cta-grid"
                width="44"
                height="44"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M22 8 L34 22 L22 36 L10 22 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#off-page-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.7fr_0.9fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#EDE9FE",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Share2 className="w-3 h-3" strokeWidth={2.5} />
                Free off-page SEO audit
              </span>
              <h2
                id="off-page-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Ready for off-page SEO that{" "}
                <span
                  className="whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(90deg, #C4B5FD 0%, #F0ABFC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  compounds?
                </span>
              </h2>
              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                A senior strategist audits your referring-domain profile,
                benchmarks your link gap against top competitors, and hands
                you 20 prioritized link targets you can act on today — with
                or without us.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)",
                    color: "#4C1D95",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(167,139,250,0.45)",
                  }}
                >
                  Request your free off-page audit
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

            {/* Middle: badge stack */}
            <div className="hidden lg:flex flex-col gap-3 items-center justify-center">
              {badges.map((b, idx) => (
                <div
                  key={b.label}
                  className="relative w-full max-w-[180px] flex items-center gap-3 px-4 py-3 rounded-[var(--radius-sm)]"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(4px)",
                    transform: `translateX(${idx % 2 === 0 ? "-8px" : "8px"})`,
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-xs)] shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #C4B5FD 0%, #A78BFA 100%)",
                      color: "#2E1065",
                    }}
                  >
                    <b.Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: "#F5F3FF" }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: guarantees */}
            <div
              className="lg:pl-8 lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
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
                          "linear-gradient(180deg, #C4B5FD 0%, #A78BFA 100%)",
                        color: "#2E1065",
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
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Compare the full SEO stack?{" "}
                <a
                  href="/services/seo"
                  className="font-semibold hover:text-white transition-colors"
                  style={{ color: "#C4B5FD" }}
                >
                  See our SEO program →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
