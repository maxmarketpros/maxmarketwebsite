import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Service = { label: string; href: string }
type Group = {
  id: string
  title: string
  caption: string
  iconId: string
  accent: string
  services: Service[]
}

const groups: Group[] = [
  {
    id: "beauty",
    title: "Beauty & Grooming",
    caption: "Chair-based, booking-heavy, review-driven",
    iconId: "18371",
    accent: "#EC4899",
    services: [
      { label: "Hair salons",      href: "/services/seo/local" },
      { label: "Barber shops",     href: "/services/seo/local" },
      { label: "Nail studios",     href: "/services/seo/local" },
      { label: "Lash & brow bars", href: "/solutions/calendar" },
      { label: "Spas & waxing",    href: "/solutions/calendar" },
    ],
  },
  {
    id: "fitness",
    title: "Fitness & Wellness",
    caption: "Membership, class packs, session-based",
    iconId: "16887",
    accent: "#22C55E",
    services: [
      { label: "Personal trainers",   href: "/services/seo/local" },
      { label: "Yoga & pilates",      href: "/solutions/calendar" },
      { label: "CrossFit & gyms",     href: "/services/paid-ads/google-ads" },
      { label: "Massage therapy",     href: "/solutions/payments" },
      { label: "Wellness coaches",    href: "/solutions/email-marketing" },
    ],
  },
  {
    id: "events",
    title: "Events & Entertainment",
    caption: "Seasonal, portfolio-led, deposit-first",
    iconId: "17382",
    accent: "#8B5CF6",
    services: [
      { label: "Wedding photographers", href: "/services/web-design/custom-coded" },
      { label: "Videographers",         href: "/services/social-media/video-editing" },
      { label: "DJs & bands",           href: "/services/paid-ads/instagram-ads" },
      { label: "Event planners",        href: "/solutions/document-signing" },
      { label: "Caterers",              href: "/solutions/payments" },
    ],
  },
  {
    id: "pets",
    title: "Pet Services",
    caption: "Recurring appointments, trust-based",
    iconId: "16048",
    accent: "#F59E0B",
    services: [
      { label: "Dog grooming",    href: "/solutions/calendar" },
      { label: "Boarding & daycare", href: "/services/seo/local" },
      { label: "Pet sitting",     href: "/services/social-media/review-generation" },
      { label: "Dog walking",     href: "/services/paid-ads/facebook-ads" },
      { label: "Pet training",    href: "/solutions/ai-agents" },
    ],
  },
  {
    id: "professional",
    title: "Professional Services",
    caption: "High-ticket, consultative, trust-heavy",
    iconId: "13027",
    accent: "#1677FF",
    services: [
      { label: "Attorneys",          href: "/services/seo/on-page" },
      { label: "CPAs & bookkeepers", href: "/services/web-design/custom-coded" },
      { label: "Financial advisors", href: "/services/seo/press-releases" },
      { label: "Notaries",           href: "/services/seo/local" },
      { label: "Insurance agents",   href: "/services/paid-ads/google-ads" },
    ],
  },
  {
    id: "education",
    title: "Education & Arts",
    caption: "Enrollment cycles, parent-driven searches",
    iconId: "12197",
    accent: "#14B8A6",
    services: [
      { label: "Tutors & test prep",    href: "/services/seo/local" },
      { label: "Music lessons",         href: "/solutions/calendar" },
      { label: "Dance studios",         href: "/services/social-media/video-editing" },
      { label: "Art classes",           href: "/services/paid-ads/instagram-ads" },
      { label: "Language schools",      href: "/services/seo/ai-search" },
    ],
  },
]

export function LsvcCategories() {
  return (
    <section aria-labelledby="lsvc-categories-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Who we help rank"
          heading={
            <>
              A directory of{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">local service</span> we&rsquo;ve ranked.
              </span>
            </>
          }
          paragraph={"Six categories, thirty specialties. Every one of them shares the same truth \u2014 a real homepage + a ranked Google listing is the difference between booked and broke."}
        />

        <div className="mt-14 space-y-4">
          {groups.map((group) => (
            <CategoryRow key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryRow({ group }: { group: Group }) {
  const { title, caption, iconId, accent, services } = group
  return (
    <article
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 sm:p-6 overflow-hidden card-surface card-surface-hover"
    >
      {/* Side accent strip */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[4px]"
        style={{ background: `linear-gradient(180deg, ${accent} 0%, ${accent}66 100%)` }}
      />
      {/* Soft aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 w-[220px] h-[160px]"
        style={{
          background: `radial-gradient(ellipse 70% 100% at 20% 30%, ${accent}18 0%, transparent 70%)`,
        }}
      />

      {/* Header side */}
      <div className="relative lg:col-span-4 flex items-center gap-4">
        <span
          className="w-14 h-14 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
          }}
        >
          <img
            src={icons8Url(iconId, 128)}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="w-[44px] h-[44px] object-contain"
          />
        </span>
        <div>
          <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
            {title}
          </h3>
          <p className="mt-1 text-[13px]" style={{ color: accent }}>
            {caption}
          </p>
        </div>
      </div>

      {/* Services side */}
      <div className="relative lg:col-span-8 flex flex-wrap gap-2 items-center">
        {services.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              border: `1px solid ${accent}2A`,
              color: "var(--ink)",
              boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {s.label}
            <ArrowRight
              className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.5}
              style={{ color: accent }}
            />
          </Link>
        ))}
      </div>
    </article>
  )
}
