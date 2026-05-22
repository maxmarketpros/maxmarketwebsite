import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function FaqHero() {
  return (
    <section className="relative" aria-labelledby="faq-hero-heading">
      <div className="section-container pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 text-center">
        <div className="flex justify-center mb-5">
          <Pill>FAQ</Pill>
        </div>
        <h1
          id="faq-hero-heading"
          className="text-[36px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-balance"
          style={{ color: "var(--ink)" }}
        >
          Questions,{" "}
          <span className="accent-underline">
            answered straight.
          </span>
        </h1>
        <p
          className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[680px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          40 honest answers about local SEO, websites, Google Ads, plans, pricing,
          and timelines — everything we get asked before a service business books
          a call.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryButton asLink href="/contact/schedule" size="lg">
            Book a free strategy call
          </PrimaryButton>
          <SecondaryButton asLink href="#getting-started">
            Browse questions
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
