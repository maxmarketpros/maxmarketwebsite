import { Check, PhoneCall } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const trustItems = ["Senior-owned", "Fixed scope", "Cancel anytime"]

export function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-final-cta-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 0% 0%, rgba(22,119,255,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, rgba(116,211,255,0.12) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[20%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[15%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <div
          className="max-w-[820px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderColor: "rgba(22,119,255,0.35)",
              color: "var(--accent)",
            }}
          >
            <PhoneCall className="w-3.5 h-3.5" strokeWidth={2.5} />
            Ready when you are
          </span>

          <h2
            id="about-final-cta-heading"
            className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Talk to the people{" "}
            <span className="accent-underline">doing the work</span>.
          </h2>

          <p
            className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            No SDR funnel. No 5-step gatekeeper script. The strategist
            you&rsquo;d work with is the one who picks up the phone.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="/contact">
              Book a strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="/plans">
              Browse plans &amp; pricing
            </SecondaryButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                <Check
                  className="w-3.5 h-3.5"
                  strokeWidth={3}
                  style={{ color: "var(--accent)" }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
