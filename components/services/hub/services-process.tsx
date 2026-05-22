import { Compass, Map, Rocket, TrendingUp, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Step = {
  n: string
  Icon: typeof Compass
  title: string
  body: string
  bullets: string[]
  accent: string
}

const steps: Step[] = [
  {
    n: "01",
    Icon: Compass,
    title: "Discover",
    body: "We audit your current marketing, your competitors, and the search demand in your service area.",
    bullets: ["Free site & GBP audit", "Competitor gap analysis", "Keyword & demand research"],
    accent: "#1677FF",
  },
  {
    n: "02",
    Icon: Map,
    title: "Strategy",
    body: "We pick the 2–3 services that will move your number fastest and bundle them into a 90-day plan.",
    bullets: ["Service mix recommendation", "90-day milestone plan", "Budget & ROI projections"],
    accent: "#22C55E",
  },
  {
    n: "03",
    Icon: Rocket,
    title: "Execute",
    body: "Our in-house team ships the work — websites, SEO fixes, ad campaigns, social posts — fast.",
    bullets: ["Go-live in 14 days", "Weekly delivery updates", "Direct Slack with your team"],
    accent: "#F59E0B",
  },
  {
    n: "04",
    Icon: TrendingUp,
    title: "Optimize",
    body: "We track the metrics that matter, double down on what's working, and kill what's not — every month.",
    bullets: ["Monthly performance reports", "Rank-climb cohort tracking", "Quarterly strategy reviews"],
    accent: "#EC4899",
  },
]

export function ServicesProcess() {
  return (
    <section aria-labelledby="services-process-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="How we work"
          heading={
            <>
              Four steps from{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">audit</span> to growth.
              </span>
            </>
          }
          paragraph={"No 6-month strategy decks. No mystery deliverables. Just a tight loop of audit, plan, ship, measure — repeat."}
        />

        <div className="relative mt-14">
          {/* Horizontal connecting line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[58px] left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #DCE6F2 10%, #DCE6F2 90%, transparent 100%)",
            }}
          />

          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <li
                key={step.n}
                className="relative card-surface card-surface-hover p-6 sm:p-7 flex flex-col"
                style={{ animation: `fadeInUp 0.7s ease-out ${0.08 + idx * 0.08}s both` }}
              >
                {/* Step number badge — overlaps the connecting line on desktop */}
                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: "var(--surface)",
                      border: `2px solid ${step.accent}`,
                      boxShadow: `0 4px 14px ${step.accent}33, inset 0 0 0 4px ${step.accent}10`,
                    }}
                  >
                    <step.Icon className="w-6 h-6" style={{ color: step.accent }} strokeWidth={2.1} />
                  </span>
                  <span
                    className="text-[36px] font-bold leading-none tabular-nums opacity-15"
                    style={{ color: step.accent }}
                  >
                    {step.n}
                  </span>
                </div>

                <div className="mt-1.5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                    style={{ background: `${step.accent}14`, color: step.accent }}
                  >
                    Step {step.n}
                  </span>
                </div>

                <h3
                  className="mt-3 text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                  {step.body}
                </p>

                <ul className="mt-4 space-y-1.5 flex-1">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[12.5px] leading-snug"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                        style={{ background: step.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Inter-step arrow (desktop only, hidden on last step) */}
                {idx < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:flex absolute -right-[18px] top-[52px] w-9 h-9 items-center justify-center rounded-full z-20"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 1px 3px rgba(17,35,68,0.06)",
                    }}
                  >
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--muted)" }} strokeWidth={2.4} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
