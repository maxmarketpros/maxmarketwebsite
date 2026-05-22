import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "15693",
    number: "6 hrs",
    title: "saved per team member per week by automating routine workflows.",
    source: "McKinsey Automation Report",
  },
  {
    iconId: "12817",
    number: "45%",
    title: "fewer dropped tasks when workflows handle routing and reminders.",
    source: "Asana Work Innovation",
  },
  {
    iconId: "15152",
    number: "70%",
    title: "of routine admin work is automatable with current workflow tools.",
    source: "McKinsey Global Institute",
  },
]

export function TaskManagementStats() {
  return (
    <section aria-labelledby="task-mgmt-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Automate"
          heading={
            <span id="task-mgmt-stats-heading">
              If you're doing it twice,{" "}
              <span className="accent-underline">
                it should be <span className="whitespace-nowrap">automatic.</span>
              </span>
            </span>
          }
          paragraph="The most profitable service businesses aren't working harder — they're running workflows that handle the busywork for them."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {stats.map((s) => (
            <article key={s.number} className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
              <div className="relative">
                <img src={icons8Url(s.iconId, 128)} alt="" aria-hidden="true" width={52} height={52} loading="lazy" decoding="async" className="w-[52px] h-[52px] object-contain" />
                <div className="mt-5 text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em]" style={{ color: "var(--ink)" }}>
                  <span className="text-gradient">{s.number}</span>
                </div>
                <p className="mt-3 text-[16px] sm:text-[17px] leading-[1.5] font-medium" style={{ color: "var(--ink)" }}>{s.title}</p>
                <p className="mt-3 text-[12.5px] uppercase tracking-[0.08em] font-semibold" style={{ color: "var(--muted)" }}>Source — {s.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
