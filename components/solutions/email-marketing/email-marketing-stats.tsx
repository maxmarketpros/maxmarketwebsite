import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "13826",
    number: "$42",
    title: "average return for every $1 spent on email marketing.",
    source: "Litmus State of Email",
  },
  {
    iconId: "13466",
    number: "3×",
    title: "more opens on segmented vs. generic broadcast campaigns.",
    source: "Mailchimp Benchmarks",
  },
  {
    iconId: "12817",
    number: "320%",
    title: "more revenue from automated emails than untriggered broadcasts.",
    source: "Campaign Monitor",
  },
]

export function EmailMarketingStats() {
  return (
    <section aria-labelledby="email-marketing-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Email Still Wins"
          heading={
            <span id="email-marketing-stats-heading">
              No channel has a higher{" "}
              <span className="accent-underline">
                ROI than <span className="whitespace-nowrap">email.</span>
              </span>
            </span>
          }
          paragraph="Social dies. Ads get more expensive. Email compounds — you own the list, you own the relationship."
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
