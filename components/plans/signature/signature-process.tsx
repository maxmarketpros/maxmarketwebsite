import { SectionHeader } from "@/components/ui/section-header"
import { signatureProcess } from "@/lib/signature-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function SignatureProcess() {
  return (
    <section
      aria-labelledby="signature-process-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="10-week white-glove rollout"
          heading={
            <span id="signature-process-heading">
              Fully launched in 10 weeks.{" "}
              <span className="whitespace-nowrap">
                Here&rsquo;s the <span className="accent-underline">plan</span>.
              </span>
            </span>
          }
          paragraph="Signature is the deepest plan we build, so we take 10 weeks instead of 8. Every two weeks unlocks a new layer of the system, and your strategy lead walks you through each one."
        />

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--border-color) 15%, var(--border-color) 85%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5 relative">
            {signatureProcess.map((step, i) => {
              const Icon = getIcon(step.iconName)
              const num = String(i + 1).padStart(2, "0")
              return (
                <div
                  key={step.week}
                  className="relative flex flex-col items-center text-center"
                  style={{ animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.06}s both` }}
                >
                  <div className="relative">
                    <span
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-[16px] relative z-10"
                      style={{
                        background: `linear-gradient(180deg, ${step.accent}E6 0%, ${step.accent} 100%)`,
                        boxShadow: `0 6px 18px ${step.accent}40`,
                        border: "3px solid var(--bg)",
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
                    className="mt-3 text-[17px] sm:text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>

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
