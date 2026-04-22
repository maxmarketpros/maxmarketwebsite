import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight, MapPin, FileText, Wrench, Share2, Link2, Bot, Newspaper, Check } from "lucide-react"

type Service = {
  href: string
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
  /** When true, render this card as the wide flagship (2 cols on md, 2 cols on lg). */
  flagship?: boolean
}

const services: Service[] = [
  {
    href: "/services/seo/local",
    iconId: "tXg90mCMJpUq",
    pill: "Flagship · Most popular",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: MapPin,
    title: "Local SEO",
    description:
      "Own the Google Map Pack in your service area. We optimize your Google Business Profile, citations, reviews, and geo-targeted pages so local customers find you first.",
    deliverables: [
      "Google Business Profile optimization",
      "Local citation building (50+ directories)",
      "Geo-targeted landing pages",
      "Review acquisition & management",
      "Map Pack ranking reports",
    ],
    flagship: true,
  },
  {
    href: "/services/seo/on-page",
    iconId: "13620",
    pill: "On-Page",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: FileText,
    title: "On-Page SEO",
    description:
      "Optimize every page — titles, meta tags, headings, internal links, and content — so Google understands exactly what you rank for.",
    deliverables: [
      "Keyword-optimized content",
      "Meta titles & descriptions",
      "Header & schema structure",
      "Internal linking strategy",
    ],
  },
  {
    href: "/services/seo/technical",
    iconId: "13121",
    pill: "Technical",
    pillColor: "#EF4444",
    auraColor: "rgba(239,68,68,0.08)",
    LucideIcon: Wrench,
    title: "Technical SEO",
    description:
      "Fix the crawlability, speed, and structure issues that silently block your rankings. A fast, indexable site ranks — period.",
    deliverables: [
      "Site speed & Core Web Vitals",
      "Crawl & index audits",
      "Schema markup",
      "Mobile & HTTPS optimization",
    ],
  },
  {
    href: "/services/seo/off-page",
    iconId: "qcJIks9mhL4R",
    pill: "Off-Page",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: Share2,
    title: "Off-Page SEO",
    description:
      "Build the domain authority signals Google uses to trust you. We earn real links and brand mentions from relevant sources.",
    deliverables: [
      "Authority link building",
      "Brand mention monitoring",
      "Guest content placements",
      "Digital PR outreach",
    ],
  },
  {
    href: "/services/seo/backlinks",
    iconId: "20444",
    pill: "Backlinks",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: Link2,
    title: "Backlinks & Directories",
    description:
      "Consistent NAP citations and authoritative backlinks that strengthen your local authority and search rankings.",
    deliverables: [
      "NAP citation building",
      "Niche directory listings",
      "High-DA backlink acquisition",
      "Toxic link disavowal",
    ],
  },
  {
    href: "/services/seo/ai-search",
    iconId: "9inONWn9EvfI",
    pill: "AI · New",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.09)",
    LucideIcon: Bot,
    title: "AI Search Visibility",
    description:
      "Optimize for ChatGPT, Gemini, Perplexity, and Google's AI Overviews. Be the answer AI recommends to your future customers.",
    deliverables: [
      "LLM-optimized content",
      "Answer engine schema",
      "AI citation tracking",
      "Conversational keyword mapping",
    ],
  },
  {
    href: "/services/seo/press-releases",
    iconId: "tgRqDvvOOuEF",
    pill: "Press",
    pillColor: "#EAB308",
    auraColor: "rgba(234,179,8,0.10)",
    LucideIcon: Newspaper,
    title: "Press Releases",
    description:
      "Get featured on news sites and industry publications. Earn high-authority links and brand credibility at once.",
    deliverables: [
      "Distribution to 200+ outlets",
      "News & industry placements",
      "Authority link building",
      "Brand credibility boost",
    ],
  },
]

export function SeoServicesBento() {
  return (
    <section
      aria-labelledby="seo-services-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Our SEO Services"
          heading={
            <span id="seo-services-heading">
              Every kind of SEO,{" "}
              <span className="accent-underline">
                done for <span className="whitespace-nowrap">you.</span>
              </span>
            </span>
          }
          paragraph="One partner for every part of your search strategy. Click any service to see the full breakdown."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free SEO strategy call
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const { LucideIcon, flagship } = service

  const spanClass = flagship ? "md:col-span-2 lg:col-span-2" : ""

  return (
    <a
      href={service.href}
      className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col group`}
      aria-label={`Learn more about ${service.title}`}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${service.auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex-1 flex flex-col">
        {/* Icon + pill */}
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(service.iconId, flagship ? 192 : 128)}
            alt={`${service.title} icon`}
            width={flagship ? 68 : 52}
            height={flagship ? 68 : 52}
            loading="lazy"
            decoding="async"
            className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`}
          />
          <span
            className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{
              background: `${service.pillColor}1A`,
              color: service.pillColor,
            }}
          >
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {service.pill}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`}
          style={{ color: "var(--ink)" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`}
          style={{ color: "var(--muted)" }}
        >
          {service.description}
        </p>

        {/* Deliverables */}
        <ul className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}>
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-[14px]"
              style={{ color: "var(--ink)" }}
            >
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>

        {/* Explore link */}
        <div
          className="mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--accent)",
          }}
        >
          <span>Explore {service.title}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </a>
  )
}
