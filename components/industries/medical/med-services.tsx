import Link from "next/link"
import { Check, ArrowRight, ShieldCheck } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Service = {
  key: string
  name: string
  accent: string
  icons8Id: string
  pitch: string
  bullets: string[]
  compliance: string
  hubHref: string
  hubLabel: string
  subLinks: { label: string; href: string }[]
}

const services: Service[] = [
  {
    key: "seo",
    name: "Local SEO & Google Business Profile",
    accent: "#1677FF",
    icons8Id: "14867",
    pitch: "Own the Map Pack for 'med spa near me', 'Invisalign [city]', and 'back pain walk-in'. GBP content calendars, service-area pages, and AI-search visibility tuned for the way Google ranks health practices.",
    bullets: [
      "Weekly GBP posts, photos, and Q&A",
      "City + service landing pages with schema",
      "AI-search optimization for Perplexity / Gemini",
    ],
    compliance: "GBP for health practices handled the way Google wants it \u2014 with medical schema, correct NAP, and clean category selection.",
    hubHref: "/services/seo",
    hubLabel: "View SEO services",
    subLinks: [
      { label: "Local SEO",  href: "/services/seo/local" },
      { label: "AI Search",  href: "/services/seo/ai-search" },
    ],
  },
  {
    key: "paid",
    name: "Paid Ads (Google + Meta) \u2014 Medical-safe",
    accent: "#4F46E5",
    icons8Id: "108782",
    pitch: "Google Health-category certification, Meta before/after rule compliance, and creative pre-flight so the first thing your account sees isn't a policy flag.",
    bullets: [
      "Health-category verification + LegitScript prep",
      "Creative pre-flight against Meta cosmetic policy",
      "Geo + radius targeting tuned for consult radius",
      "Landing pages that pass ad-policy review",
    ],
    compliance: "We pre-flight creative for before/after rules, health-category certification, and landing-page policy before a dollar is spent.",
    hubHref: "/services/paid-ads",
    hubLabel: "View paid ads",
    subLinks: [
      { label: "Google Ads",    href: "/services/paid-ads/google-ads" },
      { label: "Facebook Ads",  href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram Ads", href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    key: "social",
    name: "Social Media & Review Generation",
    accent: "#0F766E",
    icons8Id: "23042",
    pitch: "Reels, educational carousels, and a 5-star review engine. Content that builds authority and social proof without triggering platform policy flags on cosmetic, weight-loss, or Rx topics.",
    bullets: [
      "Provider-on-camera Reels & educational content",
      "Automated 5-star review ask post-visit",
      "Video editing and drone walk-arounds for clinic",
    ],
    compliance: "Reels that convert without triggering Meta's cosmetic-policy flag \u2014 we build around lifestyle proxies, not before/afters.",
    hubHref: "/services/social-media",
    hubLabel: "View social services",
    subLinks: [
      { label: "Management",        href: "/services/social-media/management" },
      { label: "Review Generation", href: "/services/social-media/review-generation" },
      { label: "Video Editing",     href: "/services/social-media/video-editing" },
    ],
  },
  {
    key: "web",
    name: "High-Converting Web Design",
    accent: "#1677FF",
    icons8Id: "107207",
    pitch: "Consult-first websites with HIPAA-aware intake forms, treatment-specific landing pages, online booking, deposits, and a mobile experience that doesn't leak leads.",
    bullets: [
      "HIPAA-aware intake forms with consent capture",
      "Treatment-specific landing pages with schema",
      "Mobile booking + deposit flow in < 90 seconds",
    ],
    compliance: "HIPAA-aware forms, consent capture, and accessibility that meets the standard your legal team will ask for.",
    hubHref: "/services/web-design",
    hubLabel: "View web design",
    subLinks: [
      { label: "Webflow",       href: "/services/web-design/webflow" },
      { label: "WordPress",     href: "/services/web-design/wordpress" },
      { label: "Custom-Coded",  href: "/services/web-design/custom-coded" },
    ],
  },
]

export function MedServices() {
  return (
    <section
      id="med-services"
      aria-labelledby="med-services-heading"
      className="relative scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Services for Medical"
          heading={
            <span id="med-services-heading">
              Ad platforms are{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">strict with medical</span>.
              </span>{" "}
              We know the playbook.
            </span>
          }
          paragraph="Google's health category, Meta's before/after rule, LegitScript monitoring \u2014 we route your campaigns around them compliantly so your ad accounts stay live."
        />

        <div
          className="mt-12 sm:mt-14 space-y-5 sm:space-y-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {services.map((s, i) => {
            const imageOnRight = i % 2 === 0
            return (
              <article
                key={s.key}
                className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-8 lg:p-10"
                style={{ borderRadius: "28px" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 70% 60% at ${imageOnRight ? "85%" : "15%"} 20%, ${s.accent}15 0%, transparent 70%)`,
                  }}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  {/* Content side */}
                  <div className={`lg:col-span-7 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
                    <span
                      className="inline-flex items-center text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                      style={{ background: `${s.accent}14`, color: s.accent }}
                    >
                      Service
                    </span>
                    <h3 className="mt-3 text-[24px] sm:text-[28px] lg:text-[30px] font-bold leading-[1.15] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
                      {s.name}
                    </h3>
                    <p className="mt-3 text-[15.5px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                      {s.pitch}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.accent }} strokeWidth={2.5} />
                          <span className="text-[14px]" style={{ color: "var(--ink)" }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="mt-5 flex items-start gap-2 p-3 rounded-[var(--radius-sm)]"
                      style={{ background: `${s.accent}0A`, border: `1px solid ${s.accent}22` }}
                    >
                      <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.accent }} strokeWidth={2.4} />
                      <p className="text-[13px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                        {s.compliance}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {s.subLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors"
                          style={{
                            background: `${s.accent}14`,
                            color: s.accent,
                            border: `1px solid ${s.accent}2E`,
                          }}
                        >
                          {l.label}
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={s.hubHref}
                      className="group mt-5 inline-flex items-center gap-1 text-[14px] font-semibold"
                      style={{ color: s.accent }}
                    >
                      {s.hubLabel}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                    </Link>
                  </div>

                  {/* Image side */}
                  <div className={`lg:col-span-5 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      className="relative overflow-hidden rounded-[var(--radius-lg)] p-8 sm:p-10 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${s.accent}14 0%, ${s.accent}05 100%)`,
                        border: `1px solid ${s.accent}2A`,
                        minHeight: "220px",
                      }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{ background: `radial-gradient(ellipse 80% 80% at 50% 30%, ${s.accent}24 0%, transparent 65%)` }}
                      />
                      <img
                        src={icons8Url(s.icons8Id, 256)}
                        alt=""
                        width={128}
                        height={128}
                        className="relative w-[120px] h-[120px] sm:w-[128px] sm:h-[128px]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
