import {
  ArrowRight,
  Check,
  Clock,
  FileText,
  ShieldCheck,
  Phone,
  Repeat,
} from "lucide-react"
import {
  IG_GRADIENT_CSS,
  InstagramLogo,
} from "./instagram-ads-hero"

const guarantees = [
  { Icon: FileText, label: "Free 3-day Instagram Ads audit" },
  { Icon: Clock, label: "Loom walkthrough in 72 hours" },
  { Icon: Repeat, label: "60-day creative refresh, always" },
  { Icon: Phone, label: "Cost-per-booked-job reported weekly" },
]

const siblings = [
  { label: "Facebook Ads", href: "/services/paid-ads/facebook-ads" },
  { label: "Google Ads", href: "/services/paid-ads/google-ads" },
  { label: "All Paid Ads", href: "/services/paid-ads" },
  { label: "Organic IG Management", href: "/services/social-media/management" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Web Design", href: "/services/web-design" },
]

export function InstagramAdsFinalCta() {
  return (
    <section
      aria-labelledby="instagram-ads-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #1A0B1F 0%, #2A0F35 40%, #3D1156 100%)",
            boxShadow:
              "0 10px 30px rgba(15,17,22,0.32), 0 30px 80px rgba(150,47,191,0.32)",
          }}
        >
          {/* Pink-purple glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[620px] h-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(214,41,118,0.45) 0%, transparent 60%)",
            }}
          />
          {/* Amber glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[10%] left-[-12%] w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(250,126,30,0.30) 0%, transparent 60%)",
            }}
          />
          {/* Grid pattern */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ig-cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ig-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy + badge */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    filter:
                      "drop-shadow(0 10px 24px rgba(214,41,118,0.55))",
                  }}
                >
                  <InstagramLogo size={48} />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(214,41,118,0.32)",
                    color: "#FBCFE8",
                  }}
                >
                  <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
                  Free Instagram Ads audit
                </span>
              </div>

              <h2
                id="instagram-ads-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Ready to get serious about{" "}
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Instagram Ads management?
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Send us read-only access to your Meta Business Manager. In 3
                business days you&rsquo;ll get a Loom walkthrough showing
                exactly where your Pixel, Reels creative, and audiences are
                leaking &mdash; and what we&rsquo;d ship in your first 30
                days, with a fixed-fee management quote.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background: IG_GRADIENT_CSS,
                    color: "#fff",
                    boxShadow:
                      "0 1px 2px rgba(214,41,118,0.32), 0 8px 24px rgba(150,47,191,0.55)",
                  }}
                >
                  Book my free audit
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="tel:+19496030389"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  (949) 603-0389
                </a>
              </div>
            </div>

            {/* Right: guarantees + siblings */}
            <div
              className="lg:pl-10 lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                What&rsquo;s promised
              </div>
              <ul className="space-y-3.5">
                {guarantees.map((g) => (
                  <li key={g.label} className="flex items-start gap-3">
                    <span
                      className="mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: IG_GRADIENT_CSS,
                        color: "#fff",
                        boxShadow: "0 2px 6px rgba(214,41,118,0.55)",
                      }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3.5} />
                    </span>
                    <div className="flex items-center gap-2">
                      <g.Icon
                        className="w-4 h-4 shrink-0"
                        strokeWidth={2.25}
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      />
                      <span
                        className="text-[15px] leading-[1.5]"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        {g.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 pt-6 border-t text-[12.5px]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Related services
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1">
                  {siblings.map((s, i) => (
                    <span key={s.href}>
                      <a
                        href={s.href}
                        className="font-semibold hover:text-white transition-colors"
                        style={{ color: "#FBCFE8" }}
                      >
                        {s.label}
                      </a>
                      {i < siblings.length - 1 && (
                        <span
                          className="ml-3"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
