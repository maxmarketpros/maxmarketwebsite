import { ArrowRight, Sparkles } from "lucide-react"

const guarantees = [
  "In-house team",
  "5-year track record",
  "American team",
  "Senior-only execution",
]

export function TeamFinalCta() {
  return (
    <section
      aria-labelledby="team-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28 pt-16 sm:pt-20 lg:pt-24">
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
          {/* Dot pattern overlay */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.18]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="team-cta-dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-cta-dots)" />
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

          <div className="relative text-center px-6 sm:px-10 lg:px-14 py-20 sm:py-24 lg:py-28 max-w-[820px] mx-auto">
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full"
                style={{
                  background: "rgba(116,211,255,0.18)",
                  color: "#BFE5FF",
                  border: "1px solid rgba(116,211,255,0.45)",
                  boxShadow: "0 0 24px rgba(116,211,255,0.18)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                Work with this team
              </span>
            </div>
            <h2
              id="team-final-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ color: "#fff" }}
            >
              Want this team on{" "}
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
                  your business
                </span>
                ?
              </span>
            </h2>
            <p
              className="mt-5 mx-auto text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[640px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Book a 30-minute strategy call and meet the people who&rsquo;ll
              actually run your account. No sales reps, no junior handoffs
              &mdash; a senior strategist reviews your business and leaves you
              with a clearer plan whether you hire us or not.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #fff 0%, #F0F5FF 100%)",
                  color: "#0B132B",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.18), 0 8px 24px rgba(116,211,255,0.30)",
                }}
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="/about/careers"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[rgba(255,255,255,0.10)]"
                style={{ color: "#fff" }}
              >
                Or join us &rarr;
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
                href="/about/testimonials"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Testimonials
              </a>
              <a
                href="/resources/case-studies"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Case studies
              </a>
              <a
                href="/about/careers"
                className="font-semibold hover:underline"
                style={{ color: "#fff" }}
              >
                Careers &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
