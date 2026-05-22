import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { HelpCircle } from "lucide-react"
import { socialFaqs } from "./social-faq-data"

export function SocialFaq() {
  return (
    <section aria-labelledby="social-faq-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="FAQ"
          heading={
            <span id="social-faq-heading">
              Social media marketing,{" "}
              <span className="accent-underline">demystified</span>.
            </span>
          }
          paragraph="The real questions we get from service businesses before we start working together."
        />

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {socialFaqs.map((faq) => (
            <article
              key={faq.q}
              className="card-surface relative overflow-hidden p-6 flex flex-col"
            >
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <HelpCircle className="w-4 h-4" strokeWidth={2.25} />
                </span>
                <h3
                  className="text-[16px] sm:text-[17px] font-bold leading-[1.35] tracking-[-0.005em] pt-1"
                  style={{ color: "var(--ink)" }}
                >
                  {faq.q}
                </h3>
              </div>
              <p
                className="mt-3 pl-12 text-[14.5px] leading-[1.65]"
                style={{ color: "var(--muted)" }}
              >
                {faq.a}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Still have questions?
          </span>
          <SecondaryButton asLink href="#contact">
            Talk to a social strategist
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
