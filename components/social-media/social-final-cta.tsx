import { icons8Url } from "@/lib/icons8"
import { ArrowRight, Heart, MessageCircle, Bookmark, Play } from "lucide-react"

const relatedServices = [
  { href: "/services/seo", label: "SEO" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/paid-ads", label: "Paid Ads" },
]

const platformLogos = [
  { id: "32323", name: "Instagram" },
  { id: "118640", name: "TikTok" },
  { id: "13983", name: "YouTube" },
  { id: "118497", name: "Facebook" },
]

export function SocialFinalCta() {
  return (
    <section aria-labelledby="social-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #1677FF 0%, #8B5CF6 55%, #E1306C 100%)",
            boxShadow:
              "0 10px 30px rgba(22,119,255,0.25), 0 30px 80px rgba(139,92,246,0.22)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(11,19,43,0.28) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] text-white"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <Play className="w-3 h-3" fill="white" strokeWidth={0} />
                Ready when you are
              </div>

              <h2
                id="social-final-cta-heading"
                className="mt-5 text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Let's make your brand impossible to scroll past.
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                Book a free 30-minute content strategy call. We'll audit your
                accounts, show you the angles we'd run, and give you a sample
                calendar — no pressure, no pitch deck.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15px] sm:text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                  style={{ color: "var(--accent)" }}
                >
                  Book a free strategy call
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  See pricing
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>

              <div
                className="mt-10 pt-8 border-t"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <div
                  className="text-[12.5px] font-semibold uppercase tracking-[0.1em] mb-4"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Also explore
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {relatedServices.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-white/10 hover:bg-white/20 border transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.25)" }}
                    >
                      {r.label}
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div
      className="relative w-[240px] sm:w-[280px] lg:w-[300px] aspect-[9/18] rounded-[36px] p-3"
      style={{
        background: "rgba(11,19,43,0.55)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow:
          "0 10px 40px rgba(11,19,43,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="relative w-full h-full rounded-[24px] overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,119,255,0.15) 0%, rgba(225,48,108,0.15) 100%)",
        }}
      >
        {/* top bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <div
            className="text-[10px] font-bold text-white tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            maxmarketpros
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <div className="w-1 h-1 rounded-full bg-white/70" />
          </div>
        </div>

        {/* content post area */}
        <div className="flex-1 relative m-3 rounded-[14px] overflow-hidden bg-gradient-to-br from-white/90 to-white/60">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play
                className="w-5 h-5"
                fill="#1677FF"
                strokeWidth={0}
                style={{ color: "#1677FF", marginLeft: 2 }}
              />
            </div>
          </div>
          {/* platform logo corner */}
          <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center p-1">
            <img
              src={icons8Url(platformLogos[0].id, 64)}
              alt="Instagram"
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              className="w-[18px] h-[18px] object-contain"
            />
          </div>
          {/* reaction strip */}
          <div className="absolute right-2 bottom-2 flex flex-col gap-2">
            {[Heart, MessageCircle, Bookmark].map((Icon, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center"
              >
                <Icon
                  className="w-3.5 h-3.5"
                  style={{ color: "#1677FF" }}
                  strokeWidth={2.25}
                />
              </div>
            ))}
          </div>
        </div>

        {/* platform dock */}
        <div
          className="mx-3 mb-3 px-3 py-2 rounded-full flex items-center justify-between gap-2"
          style={{ background: "rgba(255,255,255,0.9)" }}
        >
          {platformLogos.map((p) => (
            <img
              key={p.id}
              src={icons8Url(p.id, 64)}
              alt={p.name}
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              className="w-[18px] h-[18px] object-contain"
            />
          ))}
        </div>
      </div>

      {/* notch */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-5 rounded-b-xl"
        style={{ background: "rgba(11,19,43,0.95)" }}
      />
    </div>
  )
}
