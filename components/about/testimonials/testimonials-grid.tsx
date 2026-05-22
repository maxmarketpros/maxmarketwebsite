import { ExternalLink } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS, GOOGLE_PROFILE_URL, REVIEW_COUNT } from "./testimonials-data"

export function TestimonialsGrid() {
  return (
    <section
      aria-labelledby="testimonials-grid-heading"
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(116,211,255,0.06) 50%, transparent 100%)",
      }}
    >
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <SectionHeader
          pill="More from clients"
          heading={
            <span id="testimonials-grid-heading">
              And here&apos;s what <span className="accent-underline">others</span> are saying.
            </span>
          }
          paragraph="Different industries, different cities — same kind of feedback."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const isFeature = t.slug === "edwin-gonzalez"
            return (
              <TestimonialCard
                key={t.slug}
                t={t}
                expanded={isFeature}
                className={`${isFeature ? "lg:col-span-2" : ""}`.trim()}
              />
            )
          })}
        </div>

        {/* Read-all link */}
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Read all {REVIEW_COUNT} reviews on Google
            <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
