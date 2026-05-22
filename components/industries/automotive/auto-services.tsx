import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"

type SubLink = { label: string; href: string }
type Service = {
  key: string
  name: string
  pill: string
  accent: string
  icons8Id: string
  href: string
  pitch: string
  bullets: string[]
  subLinks: SubLink[]
}

const services: Service[] = [
  {
    key: "seo",
    name: "Local SEO & Google Business Profile",
    pill: "SEO",
    accent: "#F59E0B",
    icons8Id: "QNjsAGAlpuNW",
    href: "/services/seo",
    pitch:
      "Own the Map Pack for the keywords your city is actually searching — \"detailer near me,\" \"mobile mechanic [city],\" \"tire shop open now.\"",
    bullets: [
      "Google Business Profile optimization + weekly posts",
      "Local citations + automotive-vertical directories",
      "AI search visibility for ChatGPT, Gemini, Perplexity",
      "Review generation tied directly to your GBP",
    ],
    subLinks: [
      { label: "Local SEO",          href: "/services/seo/local" },
      { label: "AI Search",          href: "/services/seo/ai-search" },
      { label: "Technical SEO",      href: "/services/seo/technical" },
    ],
  },
  {
    key: "paid-ads",
    name: "Paid Ads (Google + Meta)",
    pill: "Paid Ads",
    accent: "#EF4444",
    icons8Id: "13757",
    href: "/services/paid-ads",
    pitch:
      "Local Services Ads for repair verticals. Instagram Reels and Facebook retargeting for detailing and rentals. Each dollar tracked to a job.",
    bullets: [
      "Google LSAs + Search + Performance Max campaigns",
      "Meta Reels / Stories / Feed for visual verticals",
      "Geo-fenced targeting tuned to your service radius",
      "4.7× average ROAS across managed accounts",
    ],
    subLinks: [
      { label: "Google Ads",         href: "/services/paid-ads/google-ads" },
      { label: "Facebook Ads",       href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram Ads",      href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    key: "social",
    name: "Social Media + Review Generation",
    pill: "Social",
    accent: "#EC4899",
    icons8Id: "LlgB5a8aAr0G",
    href: "/services/social-media",
    pitch:
      "Before/after transformations, drone walk-arounds, and an automated 5-star review engine — the kind of content that actually books detailing slots.",
    bullets: [
      "Short-form video editing for Reels, TikTok, Shorts",
      "Drone videography of shops, lots, and finished work",
      "Automated SMS + email review asks after every job",
      "Graphic design for promotions, seasonal, and menus",
    ],
    subLinks: [
      { label: "Review Generation", href: "/services/social-media/review-generation" },
      { label: "Management",        href: "/services/social-media/management" },
      { label: "Video Editing",     href: "/services/social-media/video-editing" },
      { label: "Drone",             href: "/services/social-media/drone" },
    ],
  },
  {
    key: "web",
    name: "High-Converting Web Design",
    pill: "Web Design",
    accent: "#1677FF",
    icons8Id: "114334",
    href: "/services/web-design",
    pitch:
      "Fast, mobile-first websites with online booking, quote forms, rental availability, and trade-in calculators wired to your CRM.",
    bullets: [
      "Built on Webflow, WordPress, or custom-coded",
      "Booking + deposit widgets on every service page",
      "Schema markup that helps rankings and rich results",
      "Core Web Vitals-tuned for Google and real customers",
    ],
    subLinks: [
      { label: "Webflow",            href: "/services/web-design/webflow" },
      { label: "WordPress",          href: "/services/web-design/wordpress" },
      { label: "Custom-Coded",       href: "/services/web-design/custom-coded" },
    ],
  },
]

export function AutoServices() {
  return (
    <section id="auto-services" aria-labelledby="auto-services-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[460px] h-[460px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.09) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky left rail */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Pill>Services</Pill>
              <h2
                id="auto-services-heading"
                className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Four services,{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">wired together</span>.
                </span>
              </h2>
              <p className="mt-5 text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                SEO, ads, social, and web don't work siloed — especially in automotive. We run them as one integrated motion so every channel feeds the others.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryButton asLink href="/services">
                  View all services
                </PrimaryButton>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[var(--radius-sm)] text-[14.5px] font-semibold transition-colors"
                  style={{ color: "var(--accent)", border: "1px solid var(--border-color)" }}
                >
                  A la carte
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </Link>
              </div>

              <div
                className="hidden lg:block mt-8 rounded-[var(--radius-md)] p-5"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                  Cross-industry baseline
                </div>
                <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: "var(--ink)" }}>
                  Most auto clients start with <Link href="/services/seo/local" className="font-semibold hover:underline" style={{ color: "var(--accent)" }}>Local SEO</Link> +{" "}
                  <Link href="/solutions/lead-generation" className="font-semibold hover:underline" style={{ color: "var(--accent)" }}>Lead Gen</Link> and layer ads once capture is tight.
                </p>
              </div>
            </div>
          </aside>

          {/* Stacked right column */}
          <div
            className="lg:col-span-8 space-y-5 sm:space-y-6"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            {services.map((s) => (
              <ServiceCard key={s.key} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[55%] h-[70%]"
        style={{ background: `radial-gradient(ellipse 80% 90% at 80% 20%, ${service.accent}1A 0%, transparent 70%)` }}
      />

      <div className="relative flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
        <div
          className="shrink-0 rounded-[var(--radius-md)] p-3 flex items-center justify-center self-start"
          style={{ background: `${service.accent}14`, border: `1px solid ${service.accent}2A` }}
        >
          <img
            src={icons8Url(service.icons8Id, 160)}
            alt=""
            width={72}
            height={72}
            className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px]"
            loading="lazy"
          />
        </div>

        <div className="flex-1 min-w-0">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
            style={{ background: `${service.accent}14`, color: service.accent }}
          >
            {service.pill}
          </span>
          <h3 className="mt-3 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
            {service.name}
          </h3>
          <p className="mt-2.5 text-[15.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
            {service.pitch}
          </p>

          <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14px]" style={{ color: "var(--ink)" }}>
                <span
                  className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={2.8} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            <div className="flex flex-wrap gap-2">
              {service.subLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12.5px] font-semibold transition-colors"
                  style={{
                    background: `${service.accent}10`,
                    color: service.accent,
                    border: `1px solid ${service.accent}26`,
                  }}
                >
                  {sub.label}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              ))}
            </div>
            <Link
              href={service.href}
              className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold"
              style={{ color: service.accent }}
            >
              View {service.pill}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
