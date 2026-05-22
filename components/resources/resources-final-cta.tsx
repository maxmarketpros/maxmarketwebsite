import { Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"

export function ResourcesFinalCta() {
  return (
    <section className="relative">
      <div className="section-container section-y">
        <div
          className="relative overflow-hidden card-surface text-center p-8 sm:p-12 lg:p-16"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-1/3 -right-20 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative max-w-[680px] mx-auto">
            <div className="flex justify-center">
              <Pill>
                <Sparkles className="w-3.5 h-3.5" />
                Free strategy call
              </Pill>
            </div>
            <h2
              className="mt-6 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Ready to put this to{" "}
              <span className="accent-underline">work?</span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] mx-auto max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              20 minutes with a senior strategist. We'll pull your Google
              Business Profile, ranking grid, site speed, and ad performance
              before the call and walk you through a 90-day plan. Zero
              commitment, no card required.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton size="lg" asLink href="/contact/schedule">
                Book my free strategy call
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
