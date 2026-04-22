import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { webDesignFaqs } from "./web-faq-data"

export function WebFaq() {
  return (
    <section aria-labelledby="web-faq-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="FAQ"
          heading={
            <span id="web-faq-heading">
              Web design,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">explained</span>.
              </span>
            </span>
          }
          paragraph="The real questions service businesses ask us before signing off on a new website."
        />

        <div
          className="mt-12 max-w-[780px] mx-auto space-y-3"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {webDesignFaqs.map((faq, idx) => (
            <article
              key={faq.q}
              className="card-surface relative overflow-hidden pl-5 sm:pl-6 pr-5 sm:pr-6 py-5 sm:py-6 flex gap-4 sm:gap-5"
              style={{
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <div
                className="shrink-0 text-[28px] sm:text-[32px] font-bold leading-none tracking-[-0.03em] tabular-nums"
                style={{
                  color: "var(--accent)",
                  fontFamily: "Outfit, sans-serif",
                  opacity: 0.55,
                }}
                aria-hidden
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[16px] sm:text-[17.5px] font-bold leading-[1.3] tracking-[-0.005em]"
                  style={{ color: "var(--ink)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="mt-2 text-[14.5px] leading-[1.65]"
                  style={{ color: "var(--muted)" }}
                >
                  {faq.a}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Still have questions?
          </span>
          <SecondaryButton asLink href="#contact">
            Talk to a designer
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
