import { SectionHeader } from "@/components/ui/section-header"
import { PartnerCard } from "./partner-card"
import { FEATURED } from "./partners-data"

export function PartnersFeatured() {
  return (
    <section
      id="core-stack"
      aria-labelledby="partners-featured-heading"
      className="relative scroll-mt-24"
    >
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <SectionHeader
          pill="Core Stack"
          heading={
            <span id="partners-featured-heading">
              Where we live{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">every day</span>.
              </span>
            </span>
          }
          paragraph="Nine platforms power 80% of what we ship. These are the ones our team is in before coffee."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {FEATURED.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  )
}
