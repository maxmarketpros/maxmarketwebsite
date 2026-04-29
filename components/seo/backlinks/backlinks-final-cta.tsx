import { icons8Url } from "@/lib/icons8"
import { ArrowRight, Network, Link2, ShieldCheck, BarChart3 } from "lucide-react"

const stats = [
  {
    Icon: Network,
    value: "200+",
    label: "Directories on file",
    color: "#5EEAD4",
  },
  {
    Icon: Link2,
    value: "DR 40+",
    label: "Minimum publisher floor",
    color: "#67E8F9",
  },
  {
    Icon: BarChart3,
    value: "90-day",
    label: "Lift reporting cadence",
    color: "#A5F3FC",
  },
]

const siblings = [
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Off-Page SEO", href: "/services/seo/off-page" },
  { label: "Press Releases", href: "/services/seo/press-releases" },
]

export function BacklinksFinalCta() {
  return (
    <section
      aria-labelledby="backlinks-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #0F2B30 55%, #0B132B 100%)",
            boxShadow:
              "0 10px 30px rgba(11,19,43,0.22), 0 30px 80px rgba(11,19,43,0.18)",
          }}
        >
          {/* Teal glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[620px] h-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(20,184,166,0.42) 0%, transparent 60%)",
            }}
          />
          {/* Cyan glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.30) 0%, transparent 60%)",
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
                id="bk-cta-grid"
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
            <rect width="100%" height="100%" fill="url(#bk-cta-grid)" />
          </svg>

          {/* Top: centered headline + CTAs */}
          <div className="relative px-6 sm:px-10 lg:px-14 pt-14 sm:pt-16 lg:pt-20 pb-10 lg:pb-12 text-center">
            <div className="flex justify-center">
              <div
                className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
                  border: "1px solid rgba(20,184,166,0.30)",
                  filter:
                    "drop-shadow(0 10px 24px rgba(20,184,166,0.40))",
                }}
              >
                <img
                  src={icons8Url("y9hxr8weXKKt", 256)}
                  alt=""
                  width={54}
                  height={54}
                  loading="lazy"
                  decoding="async"
                  className="w-[54px] h-[54px] object-contain"
                />
              </div>
            </div>

            <span
              className="inline-flex items-center gap-1.5 mt-5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
              style={{
                background: "rgba(20,184,166,0.22)",
                color: "#5EEAD4",
              }}
            >
              <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
              Free link strategy call
            </span>

            <h2
              id="backlinks-final-cta-heading"
              className="mt-5 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white max-w-[820px] mx-auto"
            >
              Ready to build links that{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #5EEAD4 0%, #74D3FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually rank?
                </span>
              </span>
            </h2>

            <p
              className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[600px] mx-auto"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              A senior strategist will map your citation gaps, vet your link
              profile, and quote a fixed-fee plan in 20 minutes. Real placements,
              real reporting, zero PBNs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)",
                  color: "#042F2E",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.20), 0 8px 24px rgba(20,184,166,0.50)",
                }}
              >
                Build my link plan
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="#backlinks-faq"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
              >
                See the FAQ
              </a>
            </div>
          </div>

          {/* Bottom: 3-col stat strip */}
          <div
            className="relative grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
              borderColor: "rgba(255,255,255,0.10)",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.20) 100%)",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-6"
                style={{ borderColor: "rgba(255,255,255,0.10)" }}
              >
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(20,184,166,0.16)",
                    border: "1px solid rgba(20,184,166,0.28)",
                    color: s.color,
                  }}
                >
                  <s.Icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <div className="min-w-0">
                  <div
                    className="text-[22px] sm:text-[24px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{
                      background:
                        "linear-gradient(90deg, #5EEAD4 0%, #67E8F9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-[12px] font-bold uppercase tracking-[0.10em]"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See also strip */}
          <div
            className="relative px-6 sm:px-10 lg:px-14 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[12.5px]"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              See also
            </span>
            <span className="flex flex-wrap gap-x-3 gap-y-1 justify-center sm:justify-start">
              {siblings.map((s, i) => (
                <span key={s.href}>
                  <a
                    href={s.href}
                    className="font-semibold hover:text-white transition-colors"
                    style={{ color: "#5EEAD4" }}
                  >
                    {s.label}
                  </a>
                  {i < siblings.length - 1 && (
                    <span
                      className="ml-3"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
