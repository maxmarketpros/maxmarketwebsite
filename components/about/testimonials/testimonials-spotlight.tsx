import { Star, Quote, ShieldCheck, MapPin } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { SPOTLIGHT, GOOGLE_PROFILE_URL } from "./testimonials-data"

export function TestimonialsSpotlight() {
  const t = SPOTLIGHT
  return (
    <section
      aria-labelledby="testimonials-spotlight-heading"
      className="relative"
    >
      <div className="section-container pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20">
        <SectionHeader
          pill="Featured"
          heading={
            <span id="testimonials-spotlight-heading">
              Tony said it <span className="accent-underline">best</span>.
            </span>
          }
          paragraph="A Google Local Guide with 20+ reviews under his belt — and he named the whole team."
        />

        <div className="mt-10 sm:mt-12 max-w-[980px] mx-auto">
          <div className="relative">
            {/* Tilted backdrop */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                transform: "rotate(-1.5deg) translate(-8px, 12px)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.55) 100%)",
                border: "1px solid rgba(245,158,11,0.28)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "0 10px 30px rgba(245,158,11,0.18)",
              }}
            />

            {/* Main card */}
            <article
              className="relative card-surface overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
              }}
            >
              {/* Top status bar */}
              <div
                className="flex items-center justify-between px-5 sm:px-7 py-3.5"
                style={{
                  background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={icons8Url("17949", 64)}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    loading="lazy"
                    decoding="async"
                    className="w-[18px] h-[18px] object-contain"
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "#FCD34D" }}
                  >
                    Posted on Google
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(245,158,11,0.18)",
                    color: "#FCD34D",
                  }}
                >
                  <MapPin className="w-3 h-3" strokeWidth={2.5} />
                  Local Guide
                </span>
              </div>

              {/* Body */}
              <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-8 sm:pb-10 relative">
                {/* Decorative quote glyph */}
                <Quote
                  aria-hidden="true"
                  className="absolute top-6 right-6 sm:top-8 sm:right-10 w-16 h-16 sm:w-24 sm:h-24"
                  fill="rgba(245,158,11,0.10)"
                  strokeWidth={0}
                />

                <div className="flex items-start gap-4 sm:gap-5">
                  <img
                    src={t.avatar.kind === "photo" ? t.avatar.src : ""}
                    alt={t.name}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full object-cover border-2"
                    style={{ borderColor: "rgba(245,158,11,0.40)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-[20px] sm:text-[22px] font-bold leading-none"
                        style={{ color: "var(--ink)" }}
                      >
                        {t.name}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
                        style={{
                          background: "rgba(22,119,255,0.10)",
                          color: "var(--accent)",
                        }}
                      >
                        <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
                        Verified
                      </span>
                    </div>
                    <div
                      className="mt-1.5 text-[13px] font-medium"
                      style={{ color: "var(--muted)" }}
                    >
                      {t.reviewCount} reviews · {t.photoCount} photos · {t.weeksAgo} weeks ago
                    </div>
                    <div className="mt-2 flex items-center gap-0.5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-5 h-5" fill="#FBBF24" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote
                  className="relative mt-6 sm:mt-7 text-[19px] sm:text-[22px] lg:text-[24px] leading-[1.5] font-medium tracking-[-0.005em] text-balance"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;{t.body}&rdquo;
                </blockquote>

                {/* Bottom row: mentioned + source */}
                <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
                  {t.teamMember && (
                    <a
                      href="/about/team"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border hover:translate-y-[-1px] transition-transform"
                      style={{
                        background: "rgba(22,119,255,0.06)",
                        borderColor: "rgba(22,119,255,0.30)",
                        color: "var(--accent)",
                      }}
                    >
                      <Star className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                      Mentioned: {t.teamMember}
                    </a>
                  )}
                  {t.industry && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                      style={{
                        background: `${t.industryColor}14`,
                        borderColor: `${t.industryColor}50`,
                        color: t.industryColor,
                      }}
                    >
                      {t.industry}
                    </span>
                  )}
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] font-semibold hover:underline"
                    style={{ color: "var(--muted)" }}
                  >
                    View on Google ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Floating accent: 5-star halo top-right */}
            <div
              className="absolute -top-6 -right-3 sm:-right-6 z-20 hidden md:flex items-center gap-2 px-3 py-2 rounded-[14px]"
              style={{
                background: "linear-gradient(180deg, #fff 0%, #FEF3C7 100%)",
                border: "1px solid rgba(245,158,11,0.30)",
                boxShadow:
                  "0 2px 6px rgba(245,158,11,0.18), 0 14px 32px rgba(245,158,11,0.18)",
                transform: "rotate(5deg)",
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
                  color: "#fff",
                  boxShadow: "0 2px 4px rgba(245,158,11,0.35)",
                }}
              >
                <Star className="w-4 h-4" strokeWidth={0} fill="#fff" />
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  Rated
                </span>
                <span
                  className="text-[15px] font-extrabold"
                  style={{ color: "var(--ink)" }}
                >
                  5.0 ★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
