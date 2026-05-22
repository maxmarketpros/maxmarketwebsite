import { Sparkles, ArrowRight } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"

export function PartnersFinalCta() {
  return (
    <section aria-labelledby="partners-cta-heading" className="relative">
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <div className="relative max-w-[920px] mx-auto">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(22,119,255,0.10) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -inset-x-12 -top-10 h-40 -z-10 blur-3xl opacity-70"
            style={{
              background:
                "linear-gradient(180deg, rgba(116,211,255,0.32) 0%, transparent 100%)",
            }}
          />

          <div
            className="relative card-surface overflow-hidden text-center px-6 sm:px-12 py-12 sm:py-16"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.08), 0 24px 60px rgba(22,119,255,0.18)",
            }}
          >
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #4285F4 0%, #1677FF 50%, #74D3FF 100%)",
              }}
            />

            <div className="flex justify-center">
              <Pill>
                <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                Ready when you are
              </Pill>
            </div>

            <h2
              id="partners-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Want this stack on{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">your side</span>?
              </span>
            </h2>

            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              We&apos;ll pick the right platforms for your business — not the ones an agency gets a kickback on.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free strategy call
              </PrimaryButton>
              <a
                href="/services"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
                style={{ color: "var(--muted)" }}
              >
                or browse all services
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
