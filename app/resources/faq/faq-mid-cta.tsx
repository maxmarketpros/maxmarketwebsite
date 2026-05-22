import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function FaqMidCta() {
  return (
    <section aria-labelledby="faq-mid-cta-heading" className="relative">
      <div className="section-container py-14 sm:py-16">
        <div
          className="card-surface text-center px-6 py-12 sm:px-12 sm:py-14 max-w-[960px] mx-auto"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,119,255,0.04) 0%, rgba(116,211,255,0.06) 100%)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <h2
            id="faq-mid-cta-heading"
            className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Not sure which{" "}
            <span className="accent-underline">plan fits?</span>
          </h2>
          <p
            className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] max-w-[560px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Compare every tier side-by-side, or get a real recommendation in a
            free 20-minute strategy call.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryButton asLink href="/plans">
              Compare every plan
            </PrimaryButton>
            <SecondaryButton asLink href="/contact/schedule">
              Book a strategy call
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
