import { ArrowUpRight, MapPin } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import type { CaseStudy } from "@/lib/case-studies-data"
import { CaseStudyScreenshots } from "./case-study-screenshots"
import { CaseStudyKpis } from "./case-study-kpis"
import { CaseStudyNarrative } from "./case-study-narrative"
import { CaseStudyCharts } from "./case-study-charts"
import { CaseStudyQuote } from "./case-study-quote"

interface Props {
  study: CaseStudy
  index: number
}

export function CaseStudyFeature({ study, index }: Props) {
  const isAlt = index % 2 === 1
  return (
    <section
      id={study.slug}
      aria-labelledby={`${study.slug}-heading`}
      className="relative scroll-mt-24"
      style={{
        background: isAlt ? "var(--bg)" : "var(--surface)",
      }}
    >
      {/* Section accent strip top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden
        style={{
          background: `linear-gradient(90deg, transparent, ${study.accentColor}80, transparent)`,
        }}
      />
      <div className="section-container section-y">
        {/* Header */}
        <header
          className="max-w-[920px]"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: study.accentSoft,
                color: study.accentColor,
                border: `1px solid ${study.accentColor}33`,
              }}
            >
              Case study {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: "var(--surface)",
                color: "var(--ink)",
                border: "1px solid var(--border-color)",
              }}
            >
              <img
                src={icons8Url(study.iconId, 64)}
                alt=""
                width={14}
                height={14}
                loading="lazy"
                decoding="async"
                className="w-3.5 h-3.5 object-contain"
              />
              {study.industry}
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-medium"
              style={{
                background: "var(--surface)",
                color: "var(--muted)",
                border: "1px solid var(--border-color)",
              }}
            >
              <MapPin className="w-3 h-3" strokeWidth={2.5} />
              {study.location}
            </span>
          </div>

          <h2
            id={`${study.slug}-heading`}
            className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em]"
            style={{ color: "var(--ink)" }}
          >
            {study.name}
          </h2>

          <p
            className="mt-4 max-w-[720px] text-[17px] sm:text-[19px] leading-[1.55]"
            style={{ color: "var(--muted)" }}
          >
            {study.summary}
          </p>

          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-sm)] text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              color: "var(--ink)",
              boxShadow: "0 1px 2px var(--shadow-color)",
            }}
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${study.domain}&sz=64`}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 rounded-sm"
              loading="lazy"
              decoding="async"
            />
            <span>{study.domain}</span>
            <span
              className="mx-1 inline-block w-px h-3"
              style={{ background: "var(--border-color)" }}
              aria-hidden
            />
            <span style={{ color: study.accentColor }}>View live site</span>
            <ArrowUpRight
              className="w-4 h-4"
              strokeWidth={2.5}
              style={{ color: study.accentColor }}
            />
          </a>
        </header>

        {/* Screenshots */}
        <div className="mt-12 sm:mt-14">
          <CaseStudyScreenshots study={study} />
        </div>

        {/* KPIs */}
        <div className="mt-10 sm:mt-12">
          <CaseStudyKpis study={study} />
        </div>

        {/* Challenge / Approach / Results */}
        <div className="mt-10 sm:mt-12">
          <CaseStudyNarrative study={study} />
        </div>

        {/* Charts */}
        <div className="mt-10 sm:mt-12">
          <CaseStudyCharts study={study} />
        </div>

        {/* Quote */}
        <div className="mt-10 sm:mt-12">
          <CaseStudyQuote study={study} />
        </div>
      </div>
    </section>
  )
}
