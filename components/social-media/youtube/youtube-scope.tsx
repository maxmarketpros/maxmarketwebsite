import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  Compass,
  Clapperboard,
  Scissors,
  Image as ImageIcon,
  Search,
  MessageSquare,
} from "lucide-react"

type Card = {
  Icon: typeof Compass
  title: string
  color: string
  bg: string
  bullets: string[]
  span?: "wide" | "tall"
}

const cards: Card[] = [
  {
    Icon: Compass,
    title: "Channel strategy & content pillars",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.10)",
    bullets: [
      "Niche framing + 4 pillars",
      "Competitor channel teardown",
      "Quarterly funnel review",
    ],
    span: "wide",
  },
  {
    Icon: Clapperboard,
    title: "Long-form production",
    color: "#1677FF",
    bg: "rgba(22,119,255,0.10)",
    bullets: [
      "Scripting + chapter outline",
      "On-site shoot day · 4K",
      "A/B-roll editing & color",
    ],
  },
  {
    Icon: Scissors,
    title: "YouTube Shorts engine",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.10)",
    bullets: [
      "30+ Shorts/mo from long-form",
      "Native vertical hooks",
      "Captions, CTA, end-frame loop",
    ],
  },
  {
    Icon: ImageIcon,
    title: "Thumbnails & titles",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    bullets: [
      "3 thumbnail variants per video",
      "CTR-tested title formulas",
      "Title swap if 48h CTR < 4%",
    ],
    span: "tall",
  },
  {
    Icon: Search,
    title: "Channel SEO & metadata",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.10)",
    bullets: [
      "Keyword research + clusters",
      "Tags, descriptions, chapters",
      "Cards, end screens & playlists",
    ],
  },
  {
    Icon: MessageSquare,
    title: "Community & reporting",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.10)",
    bullets: [
      "Comment + Community-tab mgmt",
      "Pinned-comment hook strategy",
      "Monthly Studio dashboard report",
    ],
  },
]

export function YoutubeScope() {
  return (
    <section
      id="youtube-scope"
      aria-labelledby="youtube-scope-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <Pill>What&rsquo;s included</Pill>
            <h2
              id="youtube-scope-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              What&rsquo;s{" "}
              <span className="accent-underline">included</span> in our YouTube
              marketing services.
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[18px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              YouTube marketing services are six jobs at once — strategy,
              writing, filming, editing, packaging, channel SEO. We staff every
              lane so your channel uploads on the same day every week, with
              CTR-tested thumbnails and watch-time-engineered scripts.
            </p>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Want short-form alongside YouTube? Pair this with our{" "}
              <a
                href="/services/social-media/tiktok"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                TikTok marketing services
              </a>{" "}
              so the same hooks repurpose into TikTok and Reels too.
            </p>
            <a
              href="/services/social-media"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              See all social media services
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>

            <div
              className="mt-8 flex flex-wrap gap-2.5"
              aria-label="YouTube capability summary"
            >
              {[
                "8–12 long-form/mo",
                "30+ Shorts/mo",
                "3 thumbnails per video",
                "Monthly shoot day",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-6 gap-4">
              {cards.map((c, idx) => (
                <li
                  key={c.title}
                  className={
                    c.span === "wide"
                      ? "sm:col-span-6"
                      : c.span === "tall"
                        ? "sm:col-span-3 sm:row-span-2"
                        : "sm:col-span-3"
                  }
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                  }}
                >
                  <article
                    className="card-surface card-surface-hover relative overflow-hidden h-full"
                    style={{ borderRadius: "var(--radius-lg)" }}
                  >
                    <div
                      aria-hidden
                      className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${c.bg} 100%)`,
                      }}
                    />
                    <div className="relative px-5 sm:px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0"
                          style={{
                            background: `${c.color}1A`,
                            color: c.color,
                            boxShadow: `inset 0 0 0 1px ${c.color}33`,
                          }}
                        >
                          <c.Icon className="w-5 h-5" strokeWidth={2.25} />
                        </span>
                        <div>
                          <div
                            className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                            style={{ color: "var(--muted)" }}
                          >
                            Lane 0{idx + 1}
                          </div>
                          <h3
                            className="text-[17px] sm:text-[18.5px] font-bold leading-[1.2] tracking-[-0.01em]"
                            style={{ color: "var(--ink)" }}
                          >
                            {c.title}
                          </h3>
                        </div>
                      </div>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {c.bullets.map((b) => (
                          <li
                            key={b}
                            className="inline-flex items-center px-2.5 py-1.5 rounded-full text-[12.5px] font-medium"
                            style={{
                              background: "#fff",
                              border: `1px solid ${c.color}33`,
                              color: "var(--ink)",
                            }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,0,0,0.10) 0%, rgba(22,119,255,0.10) 100%)",
                border: "1px solid rgba(255,0,0,0.25)",
              }}
            >
              <span
                className="text-[14.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                See the full scope mapped to your channel&rsquo;s growth stage.
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
                style={{ color: "var(--accent)" }}
              >
                Get a custom YouTube scope
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
