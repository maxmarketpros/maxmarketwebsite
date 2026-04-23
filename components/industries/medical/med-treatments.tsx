import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Treatment = {
  key: string
  persona: string
  accent: string
  icons8Id: string
  headline: string
  body: string
  links: { label: string; href: string }[]
}

const treatments: Treatment[] = [
  {
    key: "botox",
    persona: "Med Spa",
    accent: "#F43F5E",
    icons8Id: "xw4jzVybHk9z",
    headline: "Botox retention",
    body: "90-day rebook SMS cadence, lifestyle-proxy Meta creatives that clear policy review, and a membership upsell on the 3rd visit.",
    links: [
      { label: "Email & SMS",  href: "/solutions/email-marketing" },
      { label: "AI Agents",    href: "/solutions/ai-agents" },
    ],
  },
  {
    key: "invisalign",
    persona: "Dental",
    accent: "#1677FF",
    icons8Id: "14868",
    headline: "Invisalign consult funnel",
    body: "Quiz \u2192 instant quote \u2192 Calendar hold with deposit. Facebook Ads at $8\u201314 CPL; avg 22% quote-to-consult conversion.",
    links: [
      { label: "Web Design",   href: "/services/web-design" },
      { label: "Facebook Ads", href: "/services/paid-ads/facebook-ads" },
    ],
  },
  {
    key: "iv",
    persona: "Wellness",
    accent: "#22C55E",
    icons8Id: "3AuIQ5jPt28G",
    headline: "IV drip memberships",
    body: "$149/mo unlimited hydration membership on Stripe, with a welcome drip-campaign (pun intended) for 14 days after sign-up.",
    links: [
      { label: "Payments",     href: "/solutions/payments" },
      { label: "Email & SMS",  href: "/solutions/email-marketing" },
    ],
  },
  {
    key: "glp1",
    persona: "Wellness",
    accent: "#F59E0B",
    icons8Id: "sm38rlKXiLSn",
    headline: "GLP-1 weight-loss intake",
    body: "LegitScript-aware landing page, BMI pre-qual form, telehealth-compliant consent, and Rx delivered in under 48h.",
    links: [
      { label: "Web Design",       href: "/services/web-design" },
      { label: "Document Signing", href: "/solutions/document-signing" },
    ],
  },
  {
    key: "laser",
    persona: "Med Spa",
    accent: "#EC4899",
    icons8Id: "12289",
    headline: "Laser hair removal packages",
    body: "6-session package framing beats per-session pricing 3:1. IG DMs \u2192 AI qualifier \u2192 Calendar hold with deposit.",
    links: [
      { label: "Lead Generation", href: "/solutions/lead-generation" },
      { label: "Instagram Ads",   href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    key: "chiro-special",
    persona: "Chiro / PT",
    accent: "#0F766E",
    icons8Id: "ZIiKmAjYlK4S",
    headline: "Chiropractic new-patient special",
    body: "Compliant $49 exam+adjust offer. Local SEO pushes 'back pain near me'; 24/7 booking captures late-night searches.",
    links: [
      { label: "Local SEO", href: "/services/seo/local" },
      { label: "Calendar",  href: "/solutions/calendar" },
    ],
  },
]

export function MedTreatments() {
  return (
    <section aria-labelledby="med-treatments-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Signature Playbooks"
          heading={
            <span id="med-treatments-heading">
              Marketing that fits{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">the treatment you sell</span>.
              </span>
            </span>
          }
          paragraph="Not generic packages. Treatment-level playbooks we build for the exact procedure you want to grow."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {treatments.map((t) => (
            <article
              key={t.key}
              className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse 75% 55% at 15% 10%, ${t.accent}1A 0%, transparent 70%)` }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <div
                  className="shrink-0 rounded-[var(--radius-md)] p-2 flex items-center justify-center"
                  style={{ background: `${t.accent}12`, border: `1px solid ${t.accent}2E` }}
                >
                  <img
                    src={icons8Url(t.icons8Id, 128)}
                    alt=""
                    width={56}
                    height={56}
                    className="w-[56px] h-[56px]"
                    loading="lazy"
                  />
                </div>
                <span
                  className="inline-flex items-center text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full self-start mt-1"
                  style={{ background: `${t.accent}14`, color: t.accent }}
                >
                  {t.persona}
                </span>
              </div>

              <h3 className="relative mt-4 text-[19px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                {t.headline}
              </h3>

              <p className="relative mt-2.5 text-[14.5px] leading-[1.6] flex-1" style={{ color: "var(--muted)" }}>
                {t.body}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {t.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors"
                    style={{
                      background: `${t.accent}14`,
                      color: t.accent,
                      border: `1px solid ${t.accent}2E`,
                    }}
                  >
                    {l.label}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
