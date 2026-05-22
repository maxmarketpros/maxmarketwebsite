import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Check,
  Calendar,
  Video,
  Play,
  Scissors,
  Palette,
  Plane,
  Star,
} from "lucide-react"

type Service = {
  href: string
  iconId: string
  pill: string
  pillColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
}

const flagship: Service = {
  href: "/services/social-media/management",
  iconId: "12313",
  pill: "Flagship · Fully managed",
  pillColor: "#1677FF",
  LucideIcon: Calendar,
  title: "Social Media Management",
  description:
    "Your full in-house social team, done-for-you. We handle content strategy, creation, posting, community management, and monthly reporting across every platform you care about.",
  deliverables: [
    "Monthly content calendar",
    "Daily posting & scheduling",
    "Community management & DMs",
    "Platform-specific strategy",
    "Branded graphics & short-form video",
    "Monthly performance reports",
  ],
}

const services: Service[] = [
  {
    href: "/services/social-media/tiktok",
    iconId: "118640",
    pill: "TikTok",
    pillColor: "#010101",
    LucideIcon: Video,
    title: "TikTok Marketing",
    description:
      "Short-form video strategy and content that hooks viewers in seconds and turns trends into booked jobs.",
    deliverables: [
      "Hook-driven video scripting",
      "Trend monitoring & remixing",
      "Weekly short-form uploads",
      "FYP-optimized posting",
    ],
  },
  {
    href: "/services/social-media/youtube",
    iconId: "13983",
    pill: "YouTube",
    pillColor: "#FF0000",
    LucideIcon: Play,
    title: "YouTube Marketing",
    description:
      "Long-form authority content and Shorts that compound an owned, search-ranking audience over time.",
    deliverables: [
      "Channel strategy & SEO",
      "Long-form video production",
      "Shorts repurposing",
      "Thumbnails & titles that earn clicks",
    ],
  },
  {
    href: "/services/social-media/video-editing",
    iconId: "12147",
    pill: "Video",
    pillColor: "#EF4444",
    LucideIcon: Scissors,
    title: "Video Editing",
    description:
      "Scroll-stopping edits for reels, shorts, ads, and brand films — fast turnaround and platform-native formatting.",
    deliverables: [
      "Reels, Shorts & TikToks",
      "Captions & motion graphics",
      "Color grading & sound design",
      "Ad-ready exports",
    ],
  },
  {
    href: "/services/social-media/graphic-design",
    iconId: "Xwqu8cUREfko",
    pill: "Design",
    pillColor: "#8B5CF6",
    LucideIcon: Palette,
    title: "Graphic Design",
    description:
      "On-brand graphics, carousels, and ad creative that look consistent and convert — built for every platform.",
    deliverables: [
      "Post & story templates",
      "Carousel & quote graphics",
      "Ad creative variations",
      "Full brand kits",
    ],
  },
  {
    href: "/services/social-media/drone",
    iconId: "21921",
    pill: "Aerial",
    pillColor: "#0EA5E9",
    LucideIcon: Plane,
    title: "Drone Videography",
    description:
      "FAA-licensed aerial videography for property tours, job-site highlights, and cinematic brand content.",
    deliverables: [
      "4K aerial footage",
      "Property & project showcases",
      "Cinematic brand reels",
      "Edited deliverables",
    ],
  },
  {
    href: "/services/social-media/review-generation",
    iconId: "19417",
    pill: "Reviews",
    pillColor: "#EAB308",
    LucideIcon: Star,
    title: "Review Generation",
    description:
      "Automated systems that ask every customer for a 5-star review at the right moment — and keep your reputation sharp.",
    deliverables: [
      "SMS & email review requests",
      "Google & Facebook review routing",
      "Review response automation",
      "Reputation dashboards",
    ],
  },
]

export function SocialServicesBento() {
  return (
    <section
      aria-labelledby="social-services-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Our Social Services"
          heading={
            <span id="social-services-heading">
              From strategy to posted —{" "}
              <span className="accent-underline">done for you</span>.
            </span>
          }
          paragraph="One partner for everything your social media marketing needs. Click any service to see the full breakdown."
        />

        {/* Flagship banner card */}
        <a
          href={flagship.href}
          aria-label={`Learn more about ${flagship.title}`}
          className="mt-12 sm:mt-14 card-surface card-surface-hover relative overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col group"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 15% 25%, rgba(22,119,255,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-center">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <img
                src={icons8Url(flagship.iconId, 192)}
                alt={`${flagship.title} icon`}
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] object-contain shrink-0"
              />
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                style={{
                  background: `${flagship.pillColor}1A`,
                  color: flagship.pillColor,
                }}
              >
                <flagship.LucideIcon className="w-3 h-3" strokeWidth={2.5} />
                {flagship.pill}
              </span>
            </div>

            <div>
              <h3
                className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                {flagship.title}
              </h3>
              <p
                className="mt-3 text-[15.5px] sm:text-[17px] leading-[1.6] max-w-[640px]"
                style={{ color: "var(--muted)" }}
              >
                {flagship.description}
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                {flagship.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2.5 text-[14.5px]"
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
            </div>

            <div className="flex lg:justify-end">
              <span
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-sm)] text-[14.5px] font-semibold"
                style={{
                  background:
                    "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                  color: "#fff",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(22,119,255,0.25)",
                }}
              >
                Explore Management
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </span>
            </div>
          </div>
        </a>

        {/* 6 sub-service cards */}
        <div
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out 0.05s both" }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free content strategy call
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const { LucideIcon } = service
  return (
    <a
      href={service.href}
      aria-label={`Learn more about ${service.title}`}
      className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col group"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${service.pillColor}14 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(service.iconId, 128)}
            alt={`${service.title} icon`}
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] object-contain shrink-0"
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

        <h3
          className="mt-4 text-[19px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {service.title}
        </h3>

        <p
          className="mt-2 text-[14.5px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {service.description}
        </p>

        <ul className="mt-4 space-y-2">
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

        <div
          className="mt-5 pt-4 flex items-center gap-2 text-[14px] font-semibold border-t"
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
