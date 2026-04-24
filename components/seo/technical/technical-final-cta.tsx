import { ArrowRight, Wrench, Check, MapPin, FileCode2, Share2, Link2 } from "lucide-react"

const guarantees = [
  "24-point technical audit",
  "Prioritized fix list",
  "Ship-ready, not PDF-ware",
  "Delivered in 3 business days",
]

const siblings = [
  { href: "/services/seo/local", Icon: MapPin, label: "Local SEO" },
  { href: "/services/seo/on-page", Icon: FileCode2, label: "On-Page SEO" },
  { href: "/services/seo/off-page", Icon: Share2, label: "Off-Page SEO" },
  { href: "/services/seo/backlinks", Icon: Link2, label: "Backlinks" },
]

export function TechnicalFinalCta() {
  return (
    <section
      aria-labelledby="technical-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #7F1D1D 0%, #DC2626 50%, #F97316 100%)",
            boxShadow:
              "0 10px 30px rgba(220,38,38,0.25), 0 30px 80px rgba(127,29,29,0.2)",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[560px] h-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(254,215,170,0.35) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
            }}
          />
          {/* Hex grid overlay */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="technical-cta-grid"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0 L36 0 L36 36 L0 36 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
                <circle cx="18" cy="18" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#technical-cta-grid)" />
          </svg>

          <div className="relative text-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 max-w-[820px] mx-auto">
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#FED7AA",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Wrench className="w-3 h-3" strokeWidth={2.5} />
                Free technical SEO audit
              </span>
            </div>
            <h2
              id="technical-final-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
            >
              Your site, actually{" "}
              <span
                className="whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(90deg, #FED7AA 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                indexed.
              </span>
            </h2>
            <p
              className="mt-5 mx-auto text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Senior engineer runs Core Web Vitals, a full crawl, an
              indexation coverage report, and a schema audit. You get a
              prioritized ship-ready fix list in 3 days.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FEF2F2 100%)",
                  color: "#991B1B",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(220,38,38,0.45)",
                }}
              >
                Request your free technical audit
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="tel:+19496030389"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
              >
                Or call 949-603-0389
              </a>
            </div>

            {/* Guarantees */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-[12.5px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#FFF7ED",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                  {g}
                </div>
              ))}
            </div>

            {/* Also explore */}
            <div
              className="mt-10 pt-6 border-t"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Also explore
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {siblings.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold transition-all hover:translate-y-[-1px]"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    <s.Icon className="w-3 h-3" strokeWidth={2.5} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
