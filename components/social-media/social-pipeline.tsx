import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Target,
  PenLine,
  Camera,
  Scissors,
  Send,
  MessageSquare,
  LineChart,
  Rocket,
} from "lucide-react"

const steps = [
  {
    Icon: Target,
    label: "Strategy",
    description:
      "Audit, audience, angles, and a 30/60/90 content calendar aligned to real business goals.",
    color: "#1677FF",
  },
  {
    Icon: PenLine,
    label: "Script",
    description:
      "Hooks, scripts, shot lists, and captions written to match your brand voice across every platform.",
    color: "#8B5CF6",
  },
  {
    Icon: Camera,
    label: "Shoot",
    description:
      "On-site production days — phone, DSLR, and drone — to capture a full month of content in hours.",
    color: "#EF4444",
  },
  {
    Icon: Scissors,
    label: "Edit",
    description:
      "Platform-native editing with captions, motion graphics, and music that stop the scroll.",
    color: "#F59E0B",
  },
  {
    Icon: Send,
    label: "Publish",
    description:
      "Daily scheduled posting, repurposing, and platform-specific formatting handled end-to-end.",
    color: "#0EA5E9",
  },
  {
    Icon: MessageSquare,
    label: "Engage",
    description:
      "Daily community management, comment replies, and DM routing so no lead ever ghosts.",
    color: "#14B8A6",
  },
  {
    Icon: LineChart,
    label: "Analyze",
    description:
      "Monthly reporting across reach, engagement, saves, follows, DMs, and booked jobs attributed to social.",
    color: "#E1306C",
  },
  {
    Icon: Rocket,
    label: "Scale",
    description:
      "Double down on winners, kill losers, and amplify top-performing posts with paid spend.",
    color: "#10B981",
  },
]

export function SocialPipeline() {
  return (
    <section aria-labelledby="social-pipeline-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The Content Pipeline"
          heading={
            <span id="social-pipeline-heading">
              From idea to{" "}
              <span className="accent-underline">viral</span> — in one
              workflow.
            </span>
          }
          paragraph="Our 8-step content pipeline is the exact system we use to ship thousands of posts a year without dropping quality."
        />

        {/* Mobile / tablet: stacked cards. Desktop: horizontal flow */}
        <div
          className="mt-12 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Horizontal scroll container on lg+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.label}
                className="card-surface card-surface-hover relative overflow-hidden p-5 flex flex-col"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-[-30px] top-[-30px] w-[140px] h-[140px]"
                  style={{
                    background: `radial-gradient(ellipse at center, ${step.color}1A 0%, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center"
                      style={{
                        background: `${step.color}14`,
                        color: step.color,
                      }}
                    >
                      <step.Icon className="w-5 h-5" strokeWidth={2.25} />
                    </div>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ color: "var(--muted)" }}
                    >
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-[17px] sm:text-[18px] font-bold leading-[1.2] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.label}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <SecondaryButton asLink href="#contact">
            See the pipeline in action
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
