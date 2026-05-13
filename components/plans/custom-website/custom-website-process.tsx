import { PhoneCall, Brush, Wrench, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { processSteps, timelinePerTier } from "@/lib/custom-website-data"

const iconMap = { PhoneCall, Brush, Wrench, Rocket } as const

const stepAccents = ["#1677FF", "#7C3AED", "#F59E0B", "#22C55E"]

export function CustomWebsiteProcess() {
  return (
    <section
      id="custom-website-process"
      aria-labelledby="custom-website-process-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="How it works"
          heading={
            <span id="custom-website-process-heading">
              From first call to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">launch</span>.
              </span>
            </span>
          }
          paragraph="Four steps. Fixed launch date. You see progress every step — no black boxes."
        />

        {/* Timeline-per-tier strip */}
        <ul
          className="mt-9 flex flex-wrap justify-center gap-2"
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
          {Object.entries(timelinePerTier).map(([pages, time]) => (
            <li
              key={pages}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--muted)" }}
              >
                {pages}-page
              </span>
              <span className="tabular-nums">{time}</span>
            </li>
          ))}
        </ul>

        {/* Steps */}
        <ol
          className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 relative"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[10%] right-[10%] top-[44px] h-[2px] z-0"
            style={{
              background:
                "linear-gradient(90deg, #1677FF 0%, #7C3AED 33%, #F59E0B 66%, #22C55E 100%)",
              opacity: 0.25,
            }}
          />

          {processSteps.map((step, idx) => {
            const accent = stepAccents[idx] ?? "#1677FF"
            const Icon = iconMap[step.iconName] ?? Rocket
            return (
              <li
                key={step.n}
                className="relative card-surface p-5 sm:p-6 flex flex-col"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accent}E6 0%, ${accent} 100%)`,
                      color: "#fff",
                      boxShadow: `0 8px 24px ${accent}55`,
                    }}
                  >
                    <Icon className="w-7 h-7" strokeWidth={2.2} />
                  </span>
                  <span
                    className="text-[40px] font-bold leading-none tracking-[-0.03em] tabular-nums"
                    style={{ color: `${accent}22` }}
                  >
                    {String(step.n).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="mt-4 text-[16px] sm:text-[17px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-[1.55] flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
