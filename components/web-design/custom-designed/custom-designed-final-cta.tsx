import { ArrowRight, Brush } from "lucide-react"

const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"

const guarantees = [
  "Bespoke brand system",
  "3 revision rounds",
  "Working Figma file",
  "Pixel-perfect build",
]

export function CustomDesignedFinalCta() {
  return (
    <section
      aria-labelledby="custom-designed-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background: `linear-gradient(135deg, #0B132B 0%, #2A1B47 50%, ${CD_ROSE} 130%)`,
            border: "1px solid rgba(244,63,94,0.30)",
            boxShadow:
              "0 4px 12px rgba(11,19,43,0.20), 0 20px 60px rgba(11,19,43,0.30)",
          }}
        >
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.10]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="custom-designed-cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#custom-designed-cta-grid)" />
          </svg>

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(244,63,94,0.45) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[460px] h-[460px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.40) 0%, transparent 65%)",
            }}
          />

          <div className="relative text-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 max-w-[820px] mx-auto">
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <Brush className="w-3 h-3" strokeWidth={2.5} />
                Free design audit
              </span>
            </div>
            <h2
              id="custom-designed-final-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ color: "#fff" }}
            >
              Ready for a custom website design that{" "}
              <span className="whitespace-nowrap">
                <span
                  className="relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(251,191,36,0.55) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  feels like you
                </span>
                ?
              </span>
            </h2>
            <p
              className="mt-5 mx-auto text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[640px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              A senior designer audits your current site, sketches the
              direction, and gives you a fixed scope and timeline for the
              custom-designed rebuild. Free.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #fff 0%, #FFF1F4 100%)",
                  color: "#0B132B",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.18), 0 8px 24px rgba(244,63,94,0.30)",
                }}
              >
                Book a 20-min design call
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="tel:+19496030389"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[rgba(255,255,255,0.10)]"
                style={{ color: "#fff" }}
              >
                Or call 949-603-0389
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-[12.5px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#FBBF24" }}
                  />
                  {g}
                </div>
              ))}
            </div>

            <div
              className="mt-10 pt-6 border-t text-[12.5px] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span>Pair custom design with:</span>
              <a
                href="/services/web-design/custom-coded"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Custom-coded build
              </a>
              <a
                href="/services/web-design/webflow"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Webflow build
              </a>
              <a
                href="/services/web-design/squarespace"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Squarespace build
              </a>
            </div>

            <div
              className="mt-4 text-[12.5px] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <span>Need ongoing growth after launch?</span>
              <a
                href="/services/seo"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                SEO services
              </a>
              <span>·</span>
              <a
                href="/services/paid-ads"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Paid ads
              </a>
              <span>·</span>
              <a
                href="/services/social-media"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Social media
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
