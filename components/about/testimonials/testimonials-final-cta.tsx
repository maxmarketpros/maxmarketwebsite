import { Star, ExternalLink, PenSquare } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { GOOGLE_PROFILE_URL, REVIEW_COUNT, WRITE_REVIEW_URL } from "./testimonials-data"

export function TestimonialsFinalCta() {
  return (
    <section aria-labelledby="testimonials-cta-heading" className="relative">
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <div className="relative max-w-[920px] mx-auto">
          {/* Glow halos */}
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
            {/* Top accent bar */}
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #FBBF24 0%, #1677FF 50%, #74D3FF 100%)",
              }}
            />

            <div className="flex justify-center">
              <Pill>
                <PenSquare className="w-3.5 h-3.5" strokeWidth={2.5} />
                Worked with us?
              </Pill>
            </div>

            <h2
              id="testimonials-cta-heading"
              className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Tell us how it{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">went</span>.
              </span>
            </h2>

            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Takes about 30 seconds. Your honest review helps other small businesses find us.
            </p>

            {/* Animated stars */}
            <div className="mt-7 flex items-center justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-7 h-7 sm:w-9 sm:h-9"
                  fill="#FBBF24"
                  strokeWidth={0}
                  style={{
                    animation: `subtlePulse 1.6s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* Primary CTA — using styled <a> so target/rel are wired through cleanly */}
            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href={WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-[17px] font-semibold rounded-[var(--radius-sm)] text-white cursor-pointer transition-all duration-200 hover:translate-y-[-1px] active:translate-y-0"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(22,119,255,0.30), 0 12px 28px rgba(22,119,255,0.20)",
                }}
              >
                <img
                  src="/partners/google-logo.webp"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 0 #fff) brightness(0) invert(1)",
                  }}
                />
                Write a review on Google
              </a>

              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold hover:underline"
                style={{ color: "var(--muted)" }}
              >
                or read all {REVIEW_COUNT} reviews on Google
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
