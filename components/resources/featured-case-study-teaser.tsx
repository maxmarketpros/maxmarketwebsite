import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { caseStudies } from "@/lib/case-studies-data"

export function FeaturedCaseStudyTeaser() {
  const study = caseStudies[0]

  return (
    <section className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Real results"
          heading={
            <>
              Real numbers, real <span className="accent-underline">phone calls.</span>
            </>
          }
          paragraph="A 30-year SoCal concrete contractor with three decades of word-of-mouth wins — and almost zero digital presence. Here's what twelve months of the right work looks like."
        />

        <div
          className="mt-12 card-surface relative overflow-hidden"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/3 -right-20 w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${study.accentSoft} 0%, transparent 70%)`,
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left — meta + quote */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
                  style={{ background: study.accentSoft }}
                >
                  <img
                    src={icons8Url(study.iconId, 96)}
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
                    className="text-[16px] font-bold tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {study.name}
                  </div>
                  <div
                    className="text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {study.industry} • {study.location}
                  </div>
                </div>
              </div>

              <h3
                className="text-[24px] sm:text-[28px] font-bold leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                {study.results}.
              </h3>

              <div
                className="rounded-[var(--radius-md)] p-5 border bg-white relative"
                style={{ borderColor: "var(--border-color)" }}
              >
                <Quote
                  className="absolute -top-3 left-5 w-6 h-6 p-1 rounded-full"
                  style={{
                    background: study.accentColor,
                    color: "white",
                  }}
                />
                <p
                  className="text-[14.5px] leading-[1.6] italic"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;{study.quote.body}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                    style={{ background: study.quote.avatarBg }}
                  >
                    {study.quote.initial}
                  </span>
                  <div>
                    <div
                      className="text-[13.5px] font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {study.quote.name}
                    </div>
                    <div
                      className="text-[12px]"
                      style={{ color: "var(--muted)" }}
                    >
                      {study.quote.title}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform hover:translate-x-0.5 self-start"
                style={{ color: "var(--accent)" }}
              >
                Read the full case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — KPI grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {study.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-[var(--radius-md)] p-5 border bg-white"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                      style={{ background: study.accentSoft }}
                    >
                      <img
                        src={icons8Url(kpi.iconId, 64)}
                        alt=""
                        width={22}
                        height={22}
                        loading="lazy"
                        decoding="async"
                        className="w-[22px] h-[22px] object-contain"
                      />
                    </div>
                    <div
                      className="text-[12px] font-semibold uppercase tracking-[0.05em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {kpi.label}
                    </div>
                  </div>
                  <div
                    className="mt-4 text-[34px] sm:text-[40px] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: study.accentColor }}
                  >
                    {kpi.value}
                  </div>
                  <div
                    className="mt-2 text-[13px] leading-snug"
                    style={{ color: "var(--muted)" }}
                  >
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
