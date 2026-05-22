import { ArrowRight, Calendar } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function CaseStudiesFinalCta() {
  return (
    <section
      aria-labelledby="case-studies-final-cta-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="relative section-container section-y">
        <div
          className="relative card-surface overflow-hidden p-8 sm:p-12 lg:p-16"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, var(--surface) 0%, var(--accent-bg) 100%)",
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          {/* Decorative aurae */}
          <div
            className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(closest-side, var(--glow-blue), transparent)",
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(closest-side, var(--glow-cyan), transparent)",
            }}
          />

          <div className="relative max-w-[760px]">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{
                background: "var(--surface)",
                color: "var(--accent)",
                border: "1px solid var(--border-color)",
              }}
            >
              <Calendar className="w-3 h-3" strokeWidth={2.5} />
              Your turn
            </span>

            <h2
              id="case-studies-final-cta-heading"
              className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.025em]"
              style={{ color: "var(--ink)" }}
            >
              Want to be the{" "}
              <span className="accent-underline">next case study?</span>
            </h2>

            <p
              className="mt-5 max-w-[620px] text-[17px] sm:text-[19px] leading-[1.6]"
              style={{ color: "var(--muted)" }}
            >
              Free 30-minute audit, zero pressure. We'll show you exactly what
              we'd do for your site — the same playbook that took S&P from 6
              leads/month to 38 and Precision from a quiet calendar to a
              three-week waitlist.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <PrimaryButton asLink href="/contact" size="lg">
                Book your free audit
                <ArrowRight className="ml-1.5 w-4 h-4" strokeWidth={2.5} />
              </PrimaryButton>
              <SecondaryButton asLink href="/plans/custom-website">
                See our website plans
              </SecondaryButton>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                30-minute call
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                Custom plan delivered
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                No commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
