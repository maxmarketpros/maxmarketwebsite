import { ArrowRight } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

interface PostCtaProps {
  pill?: string
  heading: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export function PostCta({ pill, heading, description, primary, secondary }: PostCtaProps) {
  return (
    <section className="relative" style={{ background: "var(--bg)" }}>
      <div className="section-container py-12 sm:py-16">
        <div
          className="relative overflow-hidden mx-auto max-w-[1040px] px-6 py-10 sm:px-12 sm:py-14 text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "radial-gradient(800px 280px at 50% 0%, rgba(116,211,255,0.22), transparent 65%), linear-gradient(160deg, #0B132B 0%, #122252 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 18px 50px rgba(11,19,43,0.30)",
          }}
        >
          {pill ? (
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(116,211,255,0.16)", color: "#74D3FF" }}
            >
              {pill}
            </span>
          ) : null}
          <h3
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "#fff" }}
          >
            {heading}
          </h3>
          <p
            className="mt-4 text-[15.5px] sm:text-[17px] leading-[1.55] max-w-[640px] mx-auto"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            {description}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryButton asLink href={primary.href} size="lg">
              {primary.label}
              <ArrowRight className="ml-1.5 w-4 h-4" strokeWidth={2.5} />
            </PrimaryButton>
            {secondary ? (
              <SecondaryButton asLink href={secondary.href}>
                {secondary.label}
              </SecondaryButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
