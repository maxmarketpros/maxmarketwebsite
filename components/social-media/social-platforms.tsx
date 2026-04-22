import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { TrendingUp } from "lucide-react"

type Platform = {
  id: string
  name: string
  color: string
  angle: string
  stat: string
  statLabel: string
}

const platforms: Platform[] = [
  {
    id: "32323",
    name: "Instagram",
    color: "#E1306C",
    angle: "Reels, carousels, and stories that convert browsers into bookings.",
    stat: "+4.1x",
    statLabel: "avg engagement",
  },
  {
    id: "118640",
    name: "TikTok",
    color: "#010101",
    angle: "Short-form video built to hook in the first 3 seconds.",
    stat: "7.2M+",
    statLabel: "views per client",
  },
  {
    id: "13983",
    name: "YouTube",
    color: "#FF0000",
    angle: "Long-form + Shorts strategy that earns you an owned audience.",
    stat: "+312%",
    statLabel: "watch-time lift",
  },
  {
    id: "118497",
    name: "Facebook",
    color: "#1877F2",
    angle: "Local community pages and Meta ads that drive real leads.",
    stat: "3.8x",
    statLabel: "ROAS on boosted",
  },
  {
    id: "13930",
    name: "LinkedIn",
    color: "#0A66C2",
    angle: "B2B thought leadership for founders, agencies, and consultants.",
    stat: "+5.5x",
    statLabel: "inbound DMs",
  },
  {
    id: "ClbD5JTFM7FA",
    name: "X (Twitter)",
    color: "#0F1419",
    angle: "Sharp copy, threads, and real-time engagement at scale.",
    stat: "90K+",
    statLabel: "impressions/mo",
  },
  {
    id: "63676",
    name: "Pinterest",
    color: "#E60023",
    angle: "Evergreen pins that drive traffic to your site for months.",
    stat: "12M+",
    statLabel: "monthly viewers",
  },
  {
    id: "23032",
    name: "Snapchat",
    color: "#FFFC00",
    angle: "Local Spotlight videos and Snap Ads for Gen Z reach.",
    stat: "2.4x",
    statLabel: "CTR vs. benchmark",
  },
]

export function SocialPlatforms() {
  return (
    <section aria-labelledby="social-platforms-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Every Platform, One Team"
          heading={
            <span id="social-platforms-heading">
              We grow your brand on every{" "}
              <span className="accent-underline">social platform</span>.
            </span>
          }
          paragraph="Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, Snapchat — same creator team, one strategy, zero silos."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {platforms.map((p) => (
            <article
              key={p.name}
              className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-40px] top-[-40px] w-[160px] h-[160px]"
                style={{
                  background: `radial-gradient(ellipse at center, ${p.color}1A 0%, transparent 70%)`,
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <img
                    src={icons8Url(p.id, 128)}
                    alt={`${p.name} logo`}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] object-contain shrink-0"
                  />
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
                    Growth
                  </span>
                </div>

                <h3
                  className="mt-4 text-[18px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {p.name}
                </h3>

                <p
                  className="mt-2 text-[14px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.angle}
                </p>

                <div
                  className="mt-4 pt-4 border-t flex items-baseline gap-2"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span
                    className="text-[22px] sm:text-[24px] font-bold tracking-[-0.02em] leading-none"
                    style={{ color: p.color === "#FFFC00" ? "var(--ink)" : p.color }}
                  >
                    {p.stat}
                  </span>
                  <span
                    className="text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.statLabel}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
