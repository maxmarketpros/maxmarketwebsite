import { icons8Url } from "@/lib/icons8"
import { ArrowRight, Newspaper, Check, Clock, Link2, FileText } from "lucide-react"

const guarantees = [
  { Icon: FileText, label: "No-pressure audit" },
  { Icon: Link2, label: "Real dofollow links" },
  { Icon: Clock, label: "48-hr rush available" },
  { Icon: Newspaper, label: "Reporting on every placement" },
]

const siblings = [
  { label: "Off-Page SEO", href: "/services/seo/off-page" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Backlinks", href: "/services/seo/backlinks" },
]

export function PressReleasesFinalCta() {
  return (
    <section
      aria-labelledby="press-releases-final-cta-heading"
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
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[620px] h-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(234,179,8,0.40) 0%, transparent 60%)",
            }}
          />
          {/* Cyan glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.28) 0%, transparent 60%)",
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
                id="pr-cta-grid"
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
            <rect width="100%" height="100%" fill="url(#pr-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy + rocket */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    filter:
                      "drop-shadow(0 10px 24px rgba(234,179,8,0.35))",
                  }}
                >
                  <img
                    src={icons8Url("CNwCliesWEeX", 256)}
                    alt=""
                    width={54}
                    height={54}
                    loading="lazy"
                    decoding="async"
                    className="w-[54px] h-[54px] object-contain"
                  />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(234,179,8,0.22)",
                    color: "#FCD34D",
                  }}
                >
                  <Newspaper className="w-3 h-3" strokeWidth={2.5} />
                  Free PR strategy call
                </span>
              </div>

              <h2
                id="press-releases-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Ready to buy press releases that{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #FCD34D 0%, #74D3FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually rank?
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                A senior strategist will scope your campaign in 20 minutes —
                target outlets, angle, ranking goals, and a fixed-fee quote.
                Real plan, real placements, zero pressure.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
                    color: "#0B132B",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(234,179,8,0.45)",
                  }}
                >
                  Book a free strategy call
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="/services/seo"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
                >
                  See our full SEO program
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
                What&rsquo;s promised
              </div>
              <ul className="space-y-3.5">
                {guarantees.map((g) => (
                  <li key={g.label} className="flex items-start gap-3">
                    <span
                      className="mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
                        color: "#422006",
                        boxShadow: "0 2px 6px rgba(234,179,8,0.35)",
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
                  className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  See also
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1">
                  {siblings.map((s, i) => (
                    <span key={s.href}>
                      <a
                        href={s.href}
                        className="font-semibold hover:text-white transition-colors"
                        style={{ color: "#FCD34D" }}
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
        </div>
      </div>
    </section>
  )
}
