import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "19293",
    number: "3–5 yr",
    title: "lifespan of a well-built custom app before it needs a major rewrite.",
    source: "Industry Benchmark",
  },
  {
    iconId: "13561",
    number: "2×",
    title: "total cost of ownership for off-the-shelf SaaS at scale vs. custom.",
    source: "Forrester TEI Study",
  },
  {
    iconId: "12817",
    number: "84%",
    title: "of businesses rely on at least one custom internal tool to operate.",
    source: "MIT Sloan Management Review",
  },
]

export function CustomWebAppsStats() {
  return (
    <section aria-labelledby="custom-web-apps-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Go Custom"
          heading={
            <span id="custom-web-apps-stats-heading">
              Off-the-shelf stops working the day you grow{" "}
              <span className="accent-underline">
                beyond <span className="whitespace-nowrap">it.</span>
              </span>
            </span>
          }
          paragraph="Generic SaaS is a great starting point. But when your workflow becomes your competitive advantage, you need software that bends around you — not the other way."
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
