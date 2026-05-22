import { ArrowRight, Sparkles } from "lucide-react"

const guarantees = [
  "Read by a senior operator",
  "Response in 5 business days",
  "In-person interview",
  "Honest comp talk in round 1",
]

export function CareersFinalCta() {
  return (
    <section
      aria-labelledby="careers-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28 pt-4 sm:pt-6">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #11203F 50%, var(--accent) 130%)",
            border: "1px solid rgba(22,119,255,0.30)",
            boxShadow:
              "0 4px 12px rgba(11,19,43,0.20), 0 20px 60px rgba(11,19,43,0.30)",
          }}
        >
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.18]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="careers-cta-dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#careers-cta-dots)" />
          </svg>

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.40) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[460px] h-[460px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.40) 0%, transparent 65%)",
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
                <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                Open application
              </span>
            </div>
            <h2
              id="careers-final-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ color: "#fff" }}
            >
              Don't see your{" "}
              <span className="whitespace-nowrap">
                <span
                  className="relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  exact role
                </span>
                ?
              </span>
            </h2>
            <p
              className="mt-5 mx-auto text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[640px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Tell us anyway. We hire ahead of demand for sharp operators across
              the marketing stack — sales, web, social, video, SEO, design,
              ads, and account work.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #fff 0%, #F0F5FF 100%)",
                  color: "#0B132B",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.18), 0 8px 24px rgba(116,211,255,0.30)",
                }}
              >
                Submit an application
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="mailto:careers@maxmarketpros.com"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[rgba(255,255,255,0.10)]"
                style={{ color: "#fff" }}
              >
                Or email careers@maxmarketpros.com
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
                    style={{ background: "#34D399" }}
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
              <span>More about us:</span>
              <a
                href="/about/our-story"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Our story
              </a>
              <a
                href="/about/team"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Meet the team
              </a>
              <a
                href="/about/practices"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Our practices
              </a>
              <a
                href="/contact"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Contact &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
