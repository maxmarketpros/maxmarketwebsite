import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "12184",
    number: "23%",
    title: "faster growth at companies that use analytics to drive decisions.",
    source: "McKinsey & Company",
  },
  {
    iconId: "104073",
    number: "6×",
    title: "higher profitability at data-driven service businesses vs. gut-based peers.",
    source: "Bain & Company",
  },
  {
    iconId: "60037",
    number: "83%",
    title: "of SMBs track conversions incorrectly — missing up to half their true ROI.",
    source: "Think with Google SMB Report",
  },
]

export function AnalyticsStats() {
  return (
    <section aria-labelledby="analytics-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Analytics Matters"
          heading={
            <span id="analytics-stats-heading">
              Gut decisions are expensive.{" "}
              <span className="accent-underline">
                Data is <span className="whitespace-nowrap">cheap.</span>
              </span>
            </span>
          }
          paragraph="You wouldn't run a service truck without a fuel gauge. You shouldn't run a marketing budget without a dashboard."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {stats.map((s) => (
            <article key={s.number} className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]" style={{ background: "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)" }} />
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
