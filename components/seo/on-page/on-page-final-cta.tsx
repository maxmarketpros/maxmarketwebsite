import { ArrowRight, FileCode2 } from "lucide-react"

const guarantees = [
  "10-page audit",
  "Delivered in 3 days",
  "Zero sales pressure",
  "Real plan regardless",
]

export function OnPageFinalCta() {
  return (
    <section
      aria-labelledby="on-page-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #F6FAFF 0%, #EAF2FF 55%, #F6FAFF 100%)",
            border: "1px solid rgba(22,119,255,0.18)",
            boxShadow:
              "0 4px 12px rgba(22,119,255,0.06), 0 20px 60px rgba(22,119,255,0.08)",
          }}
        >
          {/* Dot pattern overlay */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.35]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="on-page-cta-dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="rgba(22,119,255,0.15)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#on-page-cta-dots)" />
          </svg>

          {/* Cyan glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.35) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[460px] h-[460px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
            }}
          />

          <div className="relative text-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 max-w-[820px] mx-auto">
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(22,119,255,0.12)",
                  color: "#1677FF",
                }}
              >
                <FileCode2 className="w-3 h-3" strokeWidth={2.5} />
                Free on-page SEO audit
              </span>
            </div>
            <h2
              id="on-page-final-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Ready for on-page SEO that actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ranks</span>?
              </span>
            </h2>
            <p
              className="mt-5 mx-auto text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              A senior strategist hand-audits your 10 most important pages —
              title tags, meta descriptions, schema, heading hierarchy,
              content score, and internal link topology. You get a
              prioritized fix list, with or without us.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] text-white transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.1), 0 8px 24px rgba(22,119,255,0.35)",
                }}
              >
                Request your free on-page audit
                <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
              </a>
              <a
                href="tel:+19496030389"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[rgba(22,119,255,0.08)]"
                style={{ color: "var(--ink)" }}
              >
                Or call 949-603-0389
              </a>
            </div>

            {/* Micro-guarantees */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-[12.5px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    color: "var(--ink)",
                    border: "1px solid rgba(22,119,255,0.18)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#10B981" }}
                  />
                  {g}
                </div>
              ))}
            </div>

            <div
              className="mt-10 pt-6 border-t text-[12.5px]"
              style={{
                borderColor: "rgba(22,119,255,0.15)",
                color: "var(--muted)",
              }}
            >
              Prefer to browse first?{" "}
              <a
                href="/services/seo"
                className="font-semibold transition-colors hover:text-[var(--ink)]"
                style={{ color: "#1677FF" }}
              >
                See our full SEO program →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
