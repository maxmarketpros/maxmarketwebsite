import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"

type Feature = {
  iconId: string
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    iconId: "32313",
    title: "Mobile-responsive",
    description:
      "Designed mobile-first and tested on real devices — phone, tablet, desktop. No awkward zoom.",
    color: "#1677FF",
  },
  {
    iconId: "kDqO6kPb3xLj",
    title: "Built for SEO",
    description:
      "Semantic HTML, schema markup, clean URLs, XML sitemap, and optimized metadata on every page.",
    color: "#10B981",
  },
  {
    iconId: "15178",
    title: "Lightning-fast",
    description:
      "Optimized images, modern formats (WebP/AVIF), and lean code for sub-second load times.",
    color: "#F59E0B",
  },
  {
    iconId: "16239",
    title: "Secure hosting",
    description:
      "Free SSL, DDoS protection, automated backups, and plugin updates included with every care plan.",
    color: "#EF4444",
  },
  {
    iconId: "12308",
    title: "Analytics baked in",
    description:
      "GA4, Search Console, and call tracking wired up pre-launch so you measure results from day one.",
    color: "#8B5CF6",
  },
  {
    iconId: "18944",
    title: "Smart forms & capture",
    description:
      "Contact, quote, and booking forms routed to your CRM, email, or SMS — with spam protection.",
    color: "#14B8A6",
  },
  {
    iconId: "19654",
    title: "3rd-party integrations",
    description:
      "Stripe, HighLevel, Google Reviews, calendars, live chat — wired to work, not just embedded.",
    color: "#6366F1",
  },
  {
    iconId: "12313",
    title: "White-glove support",
    description:
      "A real person on email, Slack, or Loom answering in hours — not ticketed queues.",
    color: "#E1306C",
  },
]

export function WebIncluded() {
  return (
    <section
      aria-labelledby="web-included-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What's Included"
          heading={
            <span id="web-included-heading">
              What you get with every{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">website</span>.
              </span>
            </span>
          }
          paragraph="Every build ships with the full stack of modern web essentials — no upsells, no gotchas, no 'that's extra.'"
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {features.map((f) => (
            <article
              key={f.title}
              className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center mb-4"
                style={{ background: `${f.color}14` }}
              >
                <img
                  src={icons8Url(f.iconId, 96)}
                  alt={`${f.title} icon`}
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="w-[32px] h-[32px] object-contain"
                />
              </div>
              <h3
                className="text-[16.5px] sm:text-[17px] font-bold leading-[1.25] tracking-[-0.005em]"
                style={{ color: "var(--ink)" }}
              >
                {f.title}
              </h3>
              <p
                className="mt-2 text-[13.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                {f.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <SecondaryButton asLink href="#contact">
            Get a free website audit
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
