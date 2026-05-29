import {
  ArrowRight,
  MapPin,
  Check,
  BadgeCheck,
  Zap,
  Megaphone,
  BarChart3,
} from "lucide-react"

const guarantees = [
  { Icon: BadgeCheck, label: "Claim & verification handled for you" },
  { Icon: Zap, label: "Showcases + one-tap Actions set up" },
  { Icon: Megaphone, label: "Apple Maps Ads launch-ready" },
  { Icon: BarChart3, label: "Monthly Location Insights reporting" },
]

const siblings = [
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "On-Page SEO", href: "/services/seo/on-page" },
  { label: "Backlinks & Directories", href: "/services/seo/backlinks" },
  { label: "Review Generation", href: "/services/social-media/review-generation" },
  { label: "Google Ads", href: "/services/paid-ads/google-ads" },
  { label: "All SEO", href: "/services/seo" },
]

export function AppleBusinessFinalCta() {
  return (
    <section
      aria-labelledby="apple-business-final-cta-heading"
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
          {/* Blue glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[620px] h-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.42) 0%, transparent 60%)",
            }}
          />
          {/* Cyan glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.3) 0%, transparent 60%)",
            }}
          />
          {/* Grid pattern */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ab-cta-grid"
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
            <rect width="100%" height="100%" fill="url(#ab-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    filter: "drop-shadow(0 10px 24px rgba(22,119,255,0.4))",
                  }}
                >
                  <MapPin className="w-8 h-8 text-white" strokeWidth={2.25} />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{ background: "rgba(22,119,255,0.25)", color: "#9DCBFF" }}
                >
                  <MapPin className="w-3 h-3" strokeWidth={2.5} />
                  Free Apple Maps audit
                </span>
              </div>

              <h2
                id="apple-business-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Ready to own the map on{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #74D3FF 0%, #2B8AFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  every iPhone?
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                We&rsquo;ll audit your Apple Business listing free, show you where
                you&rsquo;re losing iPhone customers, and map out a plan to claim
                the top spot — including Apple Maps Ads. No pressure, no jargon.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background: "#fff",
                    color: "var(--accent)",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(22,119,255,0.4)",
                  }}
                >
                  Get my free Apple Maps audit
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                >
                  See pricing
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Right: guarantees */}
            <div
              className="lg:pl-10 lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                What&rsquo;s included
              </div>
              <ul className="space-y-3.5">
                {guarantees.map((g) => (
                  <li key={g.label} className="flex items-start gap-3">
                    <span
                      className="mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                        color: "#fff",
                        boxShadow: "0 2px 6px rgba(22,119,255,0.4)",
                      }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3.5} />
                    </span>
                    <div className="flex items-center gap-2">
                      <g.Icon
                        className="w-4 h-4 shrink-0"
                        strokeWidth={2.25}
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      />
                      <span
                        className="text-[15px] leading-[1.5]"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        {g.label}
                      </span>
                    </div>
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
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Also explore
                </span>
                <span className="flex flex-wrap gap-2">
                  {siblings.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12.5px] font-semibold transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        color: "#9DCBFF",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
