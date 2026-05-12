import { Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function PlansHero() {
  return (
    <section aria-labelledby="plans-hero-heading" className="relative">
      <div className="section-container relative z-10 pt-14 sm:pt-16 lg:pt-20 pb-0">
        <div className="max-w-[920px] mx-auto text-center" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
          <div className="flex justify-center">
            <Pill>
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.4} />
              Marketing plans
            </Pill>
          </div>

          <h1
            id="plans-hero-heading"
            className="mt-6 text-[40px] xs:text-[48px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="block">Marketing plans built for</span>
            <span className="block">
              <span className="accent-underline">local service businesses</span>.
            </span>
          </h1>

          <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[720px] mx-auto" style={{ color: "var(--muted)" }}>
            Choose the right growth package for your website, Google presence, local SEO, social media, reviews, CRM tools, and lead follow-up &mdash; all under one roof, run by one in-house team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="#plans-cards">
              View Plans
            </PrimaryButton>
            <SecondaryButton asLink href="#a-la-carte">
              See A La Carte Add-Ons
            </SecondaryButton>
          </div>
        </div>

      </div>
    </section>
  )
}
