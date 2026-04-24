import { Star, ShieldCheck, Quote } from "lucide-react"

type Stat = { value: string; label: string; accent: string }

const stats: Stat[] = [
  { value: "2.3\u00d7",   label: "Booked jobs YoY",            accent: "#1677FF" },
  { value: "<90s",       label: "Avg. answer time, 24/7",     accent: "#14B8A6" },
  { value: "4.9\u2605",  label: "Avg. Google rating",         accent: "#F59E0B" },
  { value: "-31%",       label: "No-show rate reduction",     accent: "#22C55E" },
]

export function HsProof() {
  return (
    <section aria-labelledby="hs-proof-heading" className="relative">
      <div className="section-container section-y">
        {/* Stats strip */}
        <div
          className="relative overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10 lg:p-12"
          style={{
            background: "linear-gradient(135deg, #F7FAFC 0%, #EBF4FF 100%)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 20px 40px -16px var(--shadow-color)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-10 w-[360px] h-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.24) 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 w-[320px] h-[320px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(22,119,255,0.12) 0%, transparent 60%)" }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div className="max-w-[560px]">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                style={{ background: "var(--surface)", color: "var(--accent)", border: "1px solid var(--border-color)" }}
              >
                <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
                Rolling 90-day cohort
              </span>
              <h2
                id="hs-proof-heading"
                className="mt-4 text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Numbers that move when we{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">answer the ring</span>.
                </span>
              </h2>
            </div>
            <p
              className="text-[15px] leading-[1.55] max-w-[420px]"
              style={{ color: "var(--muted)" }}
            >
              Averaged across recurring home-service shops after 90 days on the full Max Market Pros stack. Actual results vary by service radius &amp; ticket size.
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ value, label, accent }) => (
              <div
                key={label}
                className="relative rounded-[var(--radius-lg)] p-5 sm:p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute left-5 right-5 top-0 h-[3px] rounded-b-full"
                  style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accent}55 100%)` }}
                />
                <div
                  className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-none tracking-[-0.02em]"
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, ${accent}99 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div
                  className="mt-2 text-[13px] sm:text-[14px] font-medium leading-[1.35]"
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial card */}
        <div
          className="relative mt-8 overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 10px 30px -10px var(--shadow-color)",
          }}
        >
          {/* Quote watermark */}
          <Quote
            className="absolute -top-3 -left-2 w-32 h-32 -rotate-6"
            style={{ color: "#EBF4FF" }}
            strokeWidth={1.2}
            aria-hidden
          />

          <div className="relative shrink-0 flex items-center gap-4 lg:flex-col lg:items-start">
            {/* Initials avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-[20px] font-bold"
              style={{
                background: "linear-gradient(135deg, #14B8A6 0%, #1677FF 100%)",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(20,184,166,0.28)",
              }}
            >
              RG
            </div>
            <div>
              <div className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>Rosa G.</div>
              <div className="text-[12.5px] font-medium" style={{ color: "var(--muted)" }}>
                Owner &middot; PristinePaws Home &amp; Pet Cleaning
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} strokeWidth={2.5} />
                <Star className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} strokeWidth={2.5} />
                <Star className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} strokeWidth={2.5} />
                <Star className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} strokeWidth={2.5} />
                <Star className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <blockquote
            className="relative text-[18px] sm:text-[21px] leading-[1.55] font-medium max-w-[740px]"
            style={{ color: "var(--ink)" }}
          >
            &ldquo;We used to lose a third of our Sunday-night calls. Since the AI voice went live, every ring ends with a booked slot on Monday&rsquo;s route &mdash; and the review request fires before my techs have even left the driveway.&rdquo;
          </blockquote>

          <div className="relative lg:ml-auto flex flex-col gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full whitespace-nowrap"
              style={{ background: "#EBF4FF", color: "var(--accent)", border: "1px solid #BFDBFE" }}
            >
              <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
              Verified client
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full whitespace-nowrap"
              style={{ background: "rgba(20,184,166,0.12)", color: "#0F766E", border: "1px solid rgba(20,184,166,0.3)" }}
            >
              Home cleaning
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
