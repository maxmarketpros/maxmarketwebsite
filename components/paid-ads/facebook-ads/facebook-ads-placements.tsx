import { SectionHeader } from "@/components/ui/section-header"
import {
  Film,
  CircleDot,
  Store,
  ClipboardList,
  Repeat,
  ArrowRight,
} from "lucide-react"
import { FacebookLogo } from "./facebook-ads-hero"

type Placement = {
  name: string
  Icon?: typeof Film
  customLogo?: "facebook"
  brandColor: string
  description: string
  bestFor: string
  metric: { value: string; label: string }
  badge?: string
}

const placements: Placement[] = [
  {
    name: "Facebook Feed",
    customLogo: "facebook",
    brandColor: "#1877F2",
    description:
      "Sponsored posts in the main Feed &mdash; the highest-volume placement on Meta. Static, video, carousel, and slideshow creative.",
    bestFor: "Local lead-gen volume",
    metric: { value: "$32", label: "Avg cost / lead" },
    badge: "Highest volume",
  },
  {
    name: "Reels Ads",
    Icon: Film,
    brandColor: "#E1306C",
    description:
      "Short-form vertical video that runs across Facebook + Instagram Reels. Lowest CPM on the platform when the hook lands.",
    bestFor: "Cold prospecting",
    metric: { value: "$4.80", label: "Avg CPM" },
  },
  {
    name: "Stories Ads",
    Icon: CircleDot,
    brandColor: "#9334EA",
    description:
      "Full-screen 9:16 placements between organic Stories. Strong for retargeting and time-limited offers with a tap-up CTA.",
    bestFor: "Mid-funnel retargeting",
    metric: { value: "2.1%", label: "Avg tap-up rate" },
  },
  {
    name: "Marketplace Ads",
    Icon: Store,
    brandColor: "#10B981",
    description:
      "Targeted ads inside Facebook Marketplace browsing &mdash; high-intent placement for trades selling installs, financing, or used inventory.",
    bestFor: "High-ticket service quotes",
    metric: { value: "+27%", label: "Quote requests" },
  },
  {
    name: "Lead Form Ads",
    Icon: ClipboardList,
    brandColor: "#F59E0B",
    description:
      "On-platform forms that pre-fill the user&rsquo;s name, email, and phone. We sync every lead to your CRM in real time so your team calls them in under 5 minutes.",
    bestFor: "Service businesses w/ CRM",
    metric: { value: "<5 min", label: "Avg lead-to-call time" },
    badge: "CRM-synced",
  },
  {
    name: "Retargeting",
    Icon: Repeat,
    brandColor: "#0EA5E9",
    description:
      "Pixel + CAPI audiences across Meta and the Audience Network. We rebuild your retargeting tree by intent stage, not just &ldquo;visited the site.&rdquo;",
    bestFor: "Warm conversion",
    metric: { value: "5.8×", label: "Retargeting ROAS" },
  },
]

export function FacebookAdsPlacements() {
  return (
    <section
      id="facebook-ads-placements"
      aria-labelledby="facebook-ads-placements-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,119,242,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,48,108,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What we run"
          heading={
            <span id="facebook-ads-placements-heading">
              Every Meta ad placement,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">one team</span>.
              </span>
            </span>
          }
          paragraph="We don&rsquo;t just boost posts. For local service businesses, the leads come from a stack of Meta placements working together. Our Facebook Ads management covers every surface Meta sells &mdash; with creative shipped weekly to fight ad fatigue."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {placements.map((p) => (
            <article
              key={p.name}
              className="relative card-surface p-6 lg:p-7 flex flex-col"
              style={{
                borderRadius: "var(--radius-lg)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              {/* Aura */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: `radial-gradient(ellipse 90% 60% at 0% 0%, ${p.brandColor}10 0%, transparent 60%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: p.customLogo
                      ? "transparent"
                      : `${p.brandColor}14`,
                    color: p.brandColor,
                    border: p.customLogo
                      ? "none"
                      : `1px solid ${p.brandColor}26`,
                  }}
                >
                  {p.customLogo === "facebook" ? (
                    <FacebookLogo size={44} />
                  ) : p.Icon ? (
                    <p.Icon className="w-5 h-5" strokeWidth={2.25} />
                  ) : null}
                </span>
                {p.badge && (
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      background: `${p.brandColor}14`,
                      color: p.brandColor,
                      border: `1px solid ${p.brandColor}26`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: p.brandColor }}
                    />
                    {p.badge}
                  </span>
                )}
              </div>

              <h3
                className="relative mt-4 text-[20px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {p.name}
              </h3>
              <p
                className="relative mt-2 text-[14.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
                dangerouslySetInnerHTML={{ __html: p.description }}
              />

              <div
                className="relative mt-5 pt-4 border-t flex items-center justify-between gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Best for
                  </div>
                  <div
                    className="mt-0.5 text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.bestFor}
                  </div>
                </div>
                <div
                  className="text-right shrink-0 pl-3 border-l"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div
                    className="text-[18px] sm:text-[20px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: p.brandColor }}
                  >
                    {p.metric.value}
                  </div>
                  <div
                    className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.metric.label}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure which Meta placements fit your service business?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "var(--accent)" }}
          >
            Get a free strategy audit
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
