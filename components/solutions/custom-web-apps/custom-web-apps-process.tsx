import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Search, PenTool, Beaker, Hammer, Rocket } from "lucide-react"

type Step = {
  step: number
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  title: string
  duration: string
  caption: string
  deliverable: string
}

const steps: Step[] = [
  {
    step: 1,
    icon: Search,
    color: "#1677FF",
    title: "Discovery",
    duration: "Week 1",
    caption: "We map your workflow, interview the team, and define exactly what success looks like — in writing, before anyone touches code.",
    deliverable: "Scoped spec + fixed bid",
  },
  {
    step: 2,
    icon: PenTool,
    color: "#0EA5E9",
    title: "Design",
    duration: "Week 2–3",
    caption: "Figma wireframes and high-fidelity designs you approve before any dev work starts. No surprises on look, feel, or UX.",
    deliverable: "Figma + clickable prototype",
  },
  {
    step: 3,
    icon: Beaker,
    color: "#F59E0B",
    title: "Prototype",
    duration: "Week 4",
    caption: "Core flows rendered as a working front-end with mock data. You click through and tell us what's wrong before we wire the backend.",
    deliverable: "Live prototype URL",
  },
  {
    step: 4,
    icon: Hammer,
    color: "#22C55E",
    title: "Build",
    duration: "Week 5–10",
    caption: "Full-stack dev in 2-week sprints. Database, auth, APIs, integrations, tests. You see a deployed preview every Friday.",
    deliverable: "Staging environment + tests",
  },
  {
    step: 5,
    icon: Rocket,
    color: "#8B5CF6",
    title: "Launch & Support",
    duration: "Week 11+",
    caption: "Production launch, monitoring setup, and either an ongoing retainer or a clean hand-off package to your in-house team.",
    deliverable: "Production + docs",
  },
]

export function CustomWebAppsProcess() {
  return (
    <section aria-labelledby="custom-web-apps-process-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Our Build Process"
          heading={
            <span id="custom-web-apps-process-heading">
              A predictable path from idea to{" "}
              <span className="accent-underline">
                production-<span className="whitespace-nowrap">ready.</span>
              </span>
            </span>
          }
          paragraph="No scope creep, no mystery-hourly-bills, no black-box status updates. Every week you see what was built and what's next."
        />

        <div className="mt-14 relative" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {/* Desktop connector */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[30px] top-8 bottom-8 w-[2px]"
            style={{
              background: "linear-gradient(180deg, #1677FF 0%, #0EA5E9 25%, #F59E0B 50%, #22C55E 75%, #8B5CF6 100%)",
              opacity: 0.35,
            }}
          />

          <ol className="space-y-5 md:space-y-6">
            {steps.map((s) => <StepRow key={s.title} step={s} />)}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/services/web-design">
            Or just need a website?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function StepRow({ step }: { step: Step }) {
  const Icon = step.icon
  return (
    <li className="flex gap-4 md:gap-6 relative">
      <div className="shrink-0 flex flex-col items-center">
        <div
          className="w-[62px] h-[62px] rounded-full flex items-center justify-center relative z-10"
          style={{
            background: `linear-gradient(180deg, ${step.color}DD 0%, ${step.color} 100%)`,
            boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 8px 22px ${step.color}40`,
          }}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2.25} />
        </div>
        <div className="mt-2 text-center text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: step.color }}>
          {step.duration}
        </div>
      </div>

      <article
        className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex-1 min-w-0"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${step.color}10 0%, transparent 65%)` }}
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: step.color }}>
              Step {step.step}
            </span>
          </div>
          <h3 className="mt-1 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
            {step.title}
          </h3>
          <p className="mt-2 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
            {step.caption}
          </p>
          <div
            className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border"
            style={{
              background: "var(--bg)",
              borderColor: "var(--border-color)",
              color: "var(--ink)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
            Deliverable: {step.deliverable}
          </div>
        </div>
      </article>
    </li>
  )
}
