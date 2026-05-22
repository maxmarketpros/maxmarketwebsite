import { SectionHeader } from "@/components/ui/section-header"
import { startermarkProcess } from "@/lib/startermark-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function StarterMarkProcess() {
  return (
    <section
      aria-labelledby="startermark-process-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="3-week launch"
          heading={
            <span id="startermark-process-heading">
              Live on Google in{" "}
              <span className="whitespace-nowrap">
                3 <span className="accent-underline">weeks</span>.
              </span>
            </span>
          }
          paragraph="StarterMark is the smallest plan, so we move quickly. One week to brand, one to build, one to launch — and you're searchable."
        />

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-[28px] left-[14%] right-[14%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--border-color) 20%, var(--border-color) 80%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative max-w-[960px] mx-auto">
            {startermarkProcess.map((step, i) => {
              const Icon = getIcon(step.iconName)
              const num = String(i + 1).padStart(2, "0")
              return (
                <div
                  key={step.week}
                  className="relative flex flex-col items-center text-center"
                  style={{ animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both` }}
                >
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

                  <span
                    className="mt-5 w-10 h-10 rounded-[10px] flex items-center justify-center"
                    style={{ background: `${step.accent}14`, color: step.accent }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.3} />
                  </span>

                  <span
                    className="mt-4 inline-block text-[10.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                    style={{ background: `${step.accent}14`, color: step.accent }}
                  >
                    {step.week}
                  </span>

                  <h3
                    className="mt-3 text-[18px] sm:text-[19px] font-bold leading-[1.25] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-2 text-[14.5px] leading-[1.6] max-w-[280px]"
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
