import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { caseStudies } from "@/lib/case-studies-data"

export function CaseStudiesHero() {
  return (
    <section
      aria-labelledby="case-studies-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 480px at 50% -120px, var(--glow-blue), transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 noise-overlay" aria-hidden />
      <div className="relative section-container pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div
          className="flex flex-col items-center text-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <Pill className="mb-6">
            <Sparkles className="w-3 h-3" />
            Case Studies
          </Pill>

          <h1
            id="case-studies-hero-heading"
            className="text-[36px] sm:text-[52px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] max-w-[920px]"
            style={{ color: "var(--ink)" }}
          >
            Real businesses.{" "}
            <span className="accent-underline">Real, measurable</span> growth.
          </h1>

          <p
            className="mt-6 max-w-[680px] text-[17px] sm:text-[19px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            Two stories. Two stacks. One playbook — fast, hand-built sites and
            local SEO that actually moves the phone. Scroll for the
            screenshots, the rankings, and what the owners had to say.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <PrimaryButton asLink href="#sp-concrete" size="lg">
              See the deep dives
              <ArrowDown className="ml-1.5 w-4 h-4" strokeWidth={2.5} />
            </PrimaryButton>
            <SecondaryButton asLink href="/contact">
              Start your case study
            </SecondaryButton>
          </div>

          <div
            className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            aria-label="Case study quick links"
          >
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`#${cs.slug}`}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--ink)",
                  boxShadow: "0 1px 2px var(--shadow-color)",
                }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${cs.domain}&sz=64`}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-sm"
                  loading="lazy"
                  decoding="async"
                />
                <span>{cs.name}</span>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded"
                  style={{
                    background: cs.accentSoft,
                    color: cs.accentColor,
                  }}
                >
                  {cs.stack}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
