import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"

type LiveReview = {
  platformId?: string
  faviconDomain?: string
  platformName: string
  brandColor: string
  customerName: string
  city: string
  excerpt: string
}

const liveReviews: LiveReview[] = [
  {
    platformId: "17949",
    platformName: "Google",
    brandColor: "#4285F4",
    customerName: "Sarah K.",
    city: "Irvine, CA",
    excerpt:
      "Marcus showed up on time, was super clean, and walked me through every line of the invoice. Will only call Acme from now on.",
  },
  {
    platformId: "20905",
    platformName: "Yelp",
    brandColor: "#D32323",
    customerName: "Tony R.",
    city: "Long Beach, CA",
    excerpt:
      "Got 3 quotes for brakes. Westside was the only shop that explained why I didn't need rotors yet. Saved me $400.",
  },
  {
    platformId: "118497",
    platformName: "Facebook",
    brandColor: "#1877F2",
    customerName: "Karen M.",
    city: "Newport Beach, CA",
    excerpt:
      "We had Coastal Builders do our entire kitchen reno. The crew showed up early every day and the result is somehow better than the renderings.",
  },
  {
    platformId: "20794",
    platformName: "TripAdvisor",
    brandColor: "#34E0A1",
    customerName: "Mia T.",
    city: "Costa Mesa, CA",
    excerpt:
      "The tasting menu at Third Coast Kitchen is the best meal I've had in OC this year — and Chef Daniel came out to say hi.",
  },
  {
    faviconDomain: "angi.com",
    platformName: "Angi",
    brandColor: "#F23005",
    customerName: "James W.",
    city: "Anaheim, CA",
    excerpt:
      "Booked Acme HVAC through Angi. They were here in 90 minutes on a Saturday. Quoted fairly, fixed the issue, gone in 40 min. 5 stars.",
  },
  {
    platformId: "68aEVTzfHi6F",
    platformName: "Trustpilot",
    brandColor: "#00B67A",
    customerName: "Aisha B.",
    city: "Santa Ana, CA",
    excerpt:
      "Bayside Cleaners has been doing our home for six months. Maria's team is consistent, careful, and the price hasn't moved once.",
  },
]

const guarantees = [
  { Icon: ShieldCheck, label: "Compliant with Google + Yelp policies" },
  { Icon: Star, label: "We never write or buy fake reviews" },
  { Icon: ArrowRight, label: "You own all data + opt-outs" },
]

const siblings = [
  { label: "Social Media Management", href: "/services/social-media/management" },
  { label: "TikTok Marketing", href: "/services/social-media/tiktok" },
  { label: "YouTube Growth", href: "/services/social-media/youtube" },
  { label: "Video Editing", href: "/services/social-media/video-editing" },
  { label: "Graphic Design", href: "/services/social-media/graphic-design" },
  { label: "Drone Videography", href: "/services/social-media/drone" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Web Design", href: "/services/web-design" },
]

function logoUrl(r: LiveReview, size: number) {
  if (r.platformId) return icons8Url(r.platformId, size)
  return `https://www.google.com/s2/favicons?domain=${r.faviconDomain}&sz=${size}`
}

export function ReviewFinalCta() {
  return (
    <section
      aria-labelledby="review-final-cta-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container pb-20 sm:pb-24 lg:pb-28 relative z-10">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #0B132B 0%, #111B3A 50%, #0B132B 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.06), 0 30px 80px rgba(17,35,68,0.30)",
          }}
        >
          {/* Soft corner auras */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0"
            style={{
              width: "55%",
              height: "70%",
              background:
                "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(245,158,11,0.28), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0"
            style={{
              width: "55%",
              height: "70%",
              background:
                "radial-gradient(ellipse 80% 100% at 15% 100%, rgba(34,197,94,0.20), transparent 65%)",
            }}
          />
          {/* Subtle grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy + CTAs + guarantees */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(245,158,11,0.14)",
                    color: "#FCD34D",
                    border: "1px solid rgba(245,158,11,0.30)",
                  }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Free reputation audit · 25 min
                </span>
              </div>

              <h2
                id="review-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ color: "#fff" }}
              >
                Hand off your reputation.{" "}
                <span className="whitespace-nowrap">
                  <span
                    className="relative"
                    style={{
                      background:
                        "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Stop checking
                  </span>
                </span>{" "}
                Google every Monday.
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[540px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                A reputation strategist will audit your current review velocity,
                rating spread across platforms, and Map Pack ranking — then map
                out a 30-day plan to fix the gaps. Real plan, fixed monthly fee.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
                    color: "#0B132B",
                    boxShadow:
                      "0 1px 2px rgba(0,0,0,0.20), 0 8px 24px rgba(245,158,11,0.45)",
                  }}
                >
                  Book a free reputation audit
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-white/10"
                  style={{ color: "#FCD34D" }}
                >
                  See pricing
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>

              {/* Guarantees */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[540px]">
                {guarantees.map((g) => (
                  <li
                    key={g.label}
                    className="flex items-center gap-2.5 text-[13.5px] font-medium"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    <span
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(34,197,94,0.18)",
                        color: "#86EFAC",
                      }}
                    >
                      <g.Icon className="w-3 h-3" strokeWidth={2.75} />
                    </span>
                    {g.label}
                  </li>
                ))}
              </ul>

              {/* Trust copy + phone */}
              <div
                className="mt-8 pt-6 flex items-center gap-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex flex-col">
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Or call us directly
                  </span>
                  <a
                    href="tel:+19496030389"
                    className="text-[18px] font-bold"
                    style={{ color: "#fff" }}
                  >
                    (949) 603-0389
                  </a>
                </div>
              </div>
            </div>

            {/* Right: live review feed */}
            <div className="relative">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3 flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <span
                  className="relative w-2 h-2 rounded-full"
                  style={{
                    background: "#22C55E",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.30)",
                    animation: "subtlePulse 1.4s ease-in-out infinite",
                  }}
                />
                Live · reviews from our clients
              </div>

              <div
                className="relative overflow-hidden rounded-[var(--radius-lg)]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  height: 420,
                }}
              >
                <div
                  className="absolute inset-x-0 px-3 py-3 flex flex-col gap-3"
                  style={{
                    animation: "reviewFeedScroll 28s linear infinite",
                  }}
                >
                  {[...liveReviews, ...liveReviews].map((r, i) => (
                    <div
                      key={`${r.platformName}-${i}`}
                      className="p-4 rounded-[12px]"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span
                          className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                          style={{
                            background: "#fff",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.20)",
                          }}
                        >
                          <img
                            src={logoUrl(r, 96)}
                            alt={r.platformName}
                            width={16}
                            height={16}
                            loading="lazy"
                            decoding="async"
                            className="w-4 h-4 object-contain"
                          />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[12.5px] font-bold leading-tight"
                            style={{ color: "#fff" }}
                          >
                            {r.customerName}
                          </div>
                          <div
                            className="text-[10.5px]"
                            style={{ color: "rgba(255,255,255,0.55)" }}
                          >
                            {r.city} · via {r.platformName}
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Star
                              key={i}
                              className="w-3 h-3"
                              fill="#FCD34D"
                              strokeWidth={0}
                            />
                          ))}
                        </div>
                      </div>
                      <div
                        className="text-[12.5px] leading-[1.5]"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      >
                        &ldquo;{r.excerpt}&rdquo;
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top + bottom fade masks */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-12 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11,19,43,1) 0%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(11,19,43,1) 0%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sibling-services strip */}
          <div
            className="relative px-6 sm:px-10 lg:px-14 py-6"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(0,0,0,0.20)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] shrink-0"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Also explore
              </span>
              <div className="flex flex-wrap gap-1.5">
                {siblings.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold transition-all hover:translate-y-[-1px]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes reviewFeedScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}
      </style>
    </section>
  )
}
