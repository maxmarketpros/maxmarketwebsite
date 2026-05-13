import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function FaqClosingCta() {
  return (
    <section
      aria-labelledby="faq-closing-cta-heading"
      className="relative"
    >
      <div className="section-container py-16 sm:py-20 text-center">
        <h2
          id="faq-closing-cta-heading"
          className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
          style={{ color: "var(--ink)" }}
        >
          Still have a{" "}
          <span className="accent-underline">question?</span>
        </h2>
        <p
          className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[620px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Book a free 20-minute strategy call and ask us anything — or read real
          results from local service businesses we've helped grow.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryButton asLink href="/contact/schedule" size="lg">
            Book a free strategy call
          </PrimaryButton>
          <SecondaryButton asLink href="/resources/case-studies">
            See client case studies
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
