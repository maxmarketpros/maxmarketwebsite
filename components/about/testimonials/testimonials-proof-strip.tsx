import { Star, ExternalLink } from "lucide-react"
import { GOOGLE_PROFILE_URL, REVIEW_COUNT, REVIEW_RATING } from "./testimonials-data"

export function TestimonialsProofStrip() {
  const fullStars = Math.floor(REVIEW_RATING)
  const partial = REVIEW_RATING - fullStars

  return (
    <section
      aria-labelledby="testimonials-proof-heading"
      className="relative"
    >
      {/* Soft backdrop — extends past the section bottom so it fades naturally into the next */}
      <div className="absolute inset-x-0 -top-20 h-[860px] pointer-events-none -z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-full"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 35%, rgba(245,158,11,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
        {/* Tiny breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[12.5px] font-medium mb-6 sm:mb-8"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
            <li aria-hidden>/</li>
            <li><a href="/about" className="hover:text-[var(--accent)]">About</a></li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>Testimonials</li>
          </ol>
        </nav>

        <h1 id="testimonials-proof-heading" className="sr-only">
          Testimonials — what clients say about Max Market Pros
        </h1>

        {/* The strip */}
        <div
          className="relative mx-auto max-w-[760px]"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}
        >
          <div
            className="relative card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.08), 0 16px 40px rgba(17,35,68,0.12)",
            }}
          >
            {/* Top accent ribbon (Google colors) */}
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #4285F4 0%, #34A853 33%, #FBBC04 66%, #EA4335 100%)",
              }}
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6">
              {/* Google logo */}
              <img
                src="/partners/google-logo.webp"
                alt="Google"
                width={140}
                height={48}
                loading="eager"
                decoding="async"
                className="h-10 sm:h-11 w-auto object-contain shrink-0"
              />

              {/* Divider */}
              <span
                aria-hidden
                className="hidden sm:block w-px h-10"
                style={{ background: "var(--border-color)" }}
              />

              {/* Stars + rating */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => {
                    if (i < fullStars) {
                      return (
                        <Star key={i} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="#FBBF24" strokeWidth={0} />
                      )
                    }
                    if (i === fullStars && partial > 0) {
                      return (
                        <span key={i} className="relative inline-block w-5 h-5 sm:w-[22px] sm:h-[22px]">
                          <Star className="absolute inset-0 w-full h-full" fill="#E5E7EB" strokeWidth={0} />
                          <span
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${partial * 100}%` }}
                          >
                            <Star className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="#FBBF24" strokeWidth={0} />
                          </span>
                        </span>
                      )
                    }
                    return (
                      <Star key={i} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" fill="#E5E7EB" strokeWidth={0} />
                    )
                  })}
                </div>
                <span
                  className="text-[24px] sm:text-[28px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{ color: "var(--ink)" }}
                >
                  {REVIEW_RATING}
                </span>
              </div>

              {/* Divider */}
              <span
                aria-hidden
                className="hidden sm:block w-px h-10"
                style={{ background: "var(--border-color)" }}
              />

              {/* Reviews link */}
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] sm:text-[16px] font-semibold hover:underline whitespace-nowrap"
                style={{ color: "var(--accent)" }}
              >
                {REVIEW_COUNT} reviews
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
