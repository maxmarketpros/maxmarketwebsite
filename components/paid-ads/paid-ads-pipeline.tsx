import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  Search,
  Target,
  Palette,
  Wrench,
  Rocket,
  SlidersHorizontal,
  TrendingUp,
  BarChart3,
} from "lucide-react"

type Step = {
  n: number
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  color: string
}

const steps: Step[] = [
  {
    n: 1,
    Icon: Search,
    title: "Audit",
    description:
      "Dig into your existing accounts, competitors, search terms, and creative to find wasted spend and untapped demand.",
    color: "#1677FF",
  },
  {
    n: 2,
    Icon: Target,
    title: "Strategy",
    description:
      "Map keywords, audiences, offers, and funnels. Forecast ROAS and set a budget that matches your growth target.",
    color: "#10B981",
  },
  {
    n: 3,
    Icon: Palette,
    title: "Creative",
    description:
      "Our in-house team produces ad copy, video, imagery, and landing pages. Nothing outsourced, nothing generic.",
    color: "#F59E0B",
  },
  {
    n: 4,
    Icon: Wrench,
    title: "Build",
    description:
      "Campaign structure, conversion tracking, UTMs, pixels, CAPI, negative lists — the unglamorous work that actually drives ROAS.",
    color: "#8B5CF6",
  },
  {
    n: 5,
    Icon: Rocket,
    title: "Launch",
    description:
      "Campaigns go live with QA checklists and daily monitoring for the first 14 days to catch anything odd fast.",
    color: "#EF4444",
  },
  {
    n: 6,
    Icon: SlidersHorizontal,
    title: "Optimize",
    description:
      "Daily bid, audience, placement, and creative iteration. Kill what loses, double down on what converts.",
    color: "#0EA5E9",
  },
  {
    n: 7,
    Icon: TrendingUp,
    title: "Scale",
    description:
      "Expand winning campaigns across platforms, audiences, and geos without blowing up CPL. Layer retargeting and lookalikes.",
    color: "#14B8A6",
  },
  {
    n: 8,
    Icon: BarChart3,
    title: "Report",
    description:
      "Transparent monthly reports with revenue attribution, ROAS, CPL, and next-step recommendations — no agency jargon.",
    color: "#EC4899",
  },
]

export function PaidAdsPipeline() {
  return (
    <section
      id="paid-ads-pipeline"
      aria-labelledby="paid-ads-pipeline-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[800px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Our Process"
          heading={
            <span id="paid-ads-pipeline-heading">
              From ad audit to{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">scaled ROI</span>
              </span>{" "}
              in 90 days.
            </span>
          }
          paragraph="Every campaign runs through the same 8-step process we've refined across $3.8M+ in managed ad spend. No guesswork, no winging it, no 'set-and-forget.'"
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {steps.map((s) => (
            <StepCard key={s.n} step={s} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Launch my first campaign
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step }: { step: Step }) {
  const { Icon } = step
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col">
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[60%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 100% 100% at 100% 0%, ${step.color}1A 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        {/* Step number + icon */}
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
            style={{ background: `${step.color}14`, color: step.color }}
          >
            <Icon className="w-5 h-5" strokeWidth={2.25} />
          </div>
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Step {step.n.toString().padStart(2, "0")}
          </div>
        </div>

        <h3
          className="mt-4 text-[19px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {step.title}
        </h3>
        <p
          className="mt-2 text-[14px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {step.description}
        </p>
      </div>
    </div>
  )
}
