import { icons8Url } from "@/lib/icons8"
import { caseStudiesOverview } from "@/lib/case-studies-data"

export function CaseStudiesOverviewStats() {
  return (
    <section
      aria-labelledby="case-studies-overview-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container py-12 sm:py-16">
        <h2 id="case-studies-overview-heading" className="sr-only">
          Combined results across both case studies
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {caseStudiesOverview.map((stat, i) => (
            <div
              key={stat.label}
              className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3 sm:gap-4"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.7s ease-out ${i * 0.06}s both`,
              }}
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                style={{
                  background: "var(--accent-bg)",
                }}
              >
                <img
                  src={icons8Url(stat.iconId, 96)}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <div
                  className="text-[28px] sm:text-[34px] font-bold leading-[1.05] tracking-[-0.02em] font-mono tabular-nums"
                  style={{ color: "var(--ink)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-[13px] sm:text-[14px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="mt-0.5 text-[12px] sm:text-[13px]"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
