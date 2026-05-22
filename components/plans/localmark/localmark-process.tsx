import { ClipboardList, Globe, MapPin, BarChart3 } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { localmarkProcess } from "@/lib/localmark-data"
import type { LucideIcon } from "lucide-react"

const lucideMap: Record<string, LucideIcon> = {
  ClipboardList,
  Globe,
  MapPin,
  BarChart3,
}

export function LocalMarkProcess() {
  return (
    <section
      aria-labelledby="localmark-process-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="30-day rollout"
          heading={
            <span id="localmark-process-heading">
              Live in 30 days.{" "}
              <span className="whitespace-nowrap">
                Here’s <span className="accent-underline">how</span>.
              </span>
            </span>
          }
          paragraph="A predictable four-week sprint. By day 30 your site is live, your GBP is optimized, citations are in motion, and your dashboard is delivered."
        />

        <div className="mt-14 relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--border-color) 20%, var(--border-color) 80%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {localmarkProcess.map((step, i) => {
              const Icon = lucideMap[step.iconName] ?? Globe
              const num = String(i + 1).padStart(2, "0")
              return (
                <div key={step.week} className="relative flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div className="relative">
                    <span
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-[16px] relative z-10"
                      style={{
                        background: `linear-gradient(180deg, ${step.accent}E6 0%, ${step.accent} 100%)`,
                        boxShadow: `0 6px 18px ${step.accent}40`,
                        border: "3px solid var(--surface)",
                      }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Icon */}
                  <span
                    className="mt-5 w-10 h-10 rounded-[10px] flex items-center justify-center"
                    style={{ background: `${step.accent}14`, color: step.accent }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.3} />
                  </span>

                  {/* Week label */}
                  <span
                    className="mt-4 inline-block text-[10.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                    style={{ background: `${step.accent}14`, color: step.accent }}
                  >
                    {step.week}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-3 text-[17px] sm:text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="mt-2 text-[14px] leading-[1.6] max-w-[260px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
