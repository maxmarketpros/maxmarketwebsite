import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PartnerCard } from "./partner-card"
import type { PartnerCategory } from "./partners-data"

interface PartnersCategorySectionProps {
  category: PartnerCategory
  alt?: boolean
}

export function PartnersCategorySection({ category, alt = false }: PartnersCategorySectionProps) {
  return (
    <section
      aria-labelledby={`partners-${category.pill.replace(/\s+/g, "-").toLowerCase()}-heading`}
      className="relative"
      style={
        alt
          ? {
              background:
                "linear-gradient(180deg, transparent 0%, rgba(116,211,255,0.05) 50%, transparent 100%)",
            }
          : undefined
      }
    >
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <SectionHeader
          pill={category.pill}
          heading={
            <span id={`partners-${category.pill.replace(/\s+/g, "-").toLowerCase()}-heading`}>
              {category.heading}
            </span>
          }
          paragraph={category.paragraph}
        />

        <div
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {category.items.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} variant="compact" />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={category.ctaHref}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-pill)] text-[14.5px] font-semibold transition-all duration-200 hover:translate-y-[-1px]"
            style={{
              background: "var(--surface)",
              color: "var(--accent)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 2px var(--shadow-color)",
            }}
          >
            {category.ctaLabel}
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
