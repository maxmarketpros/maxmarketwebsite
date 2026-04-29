import { Pill } from "@/components/ui/pill"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  PenLine,
  MessageSquare,
  BarChart3,
  Compass,
} from "lucide-react"

const platforms = [
  { id: "32323", name: "Instagram", color: "#E1306C" },
  { id: "118640", name: "TikTok", color: "#010101" },
  { id: "13983", name: "YouTube", color: "#FF0000" },
  { id: "118497", name: "Facebook", color: "#1877F2" },
  { id: "13930", name: "LinkedIn", color: "#0A66C2" },
  { id: "ClbD5JTFM7FA", name: "X", color: "#0F1419" },
  { id: "63676", name: "Pinterest", color: "#E60023" },
]

type Lane = {
  Icon: typeof PenLine
  title: string
  color: string
  bg: string
  deliverables: string[]
}

const lanes: Lane[] = [
  {
    Icon: Compass,
    title: "Strategy",
    color: "#1677FF",
    bg: "rgba(22,119,255,0.08)",
    deliverables: [
      "Brand voice + content pillars",
      "Competitive teardown",
      "Monthly strategy call",
      "Quarterly funnel review",
    ],
  },
  {
    Icon: PenLine,
    title: "Content",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    deliverables: [
      "Reels, Shorts & TikToks",
      "Carousels + static design",
      "Captions + hashtag SEO",
      "On-site monthly shoot",
    ],
  },
  {
    Icon: MessageSquare,
    title: "Engagement",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    deliverables: [
      "DM + comment response",
      "Story interactions",
      "UGC + influencer outreach",
      "Crisis response protocol",
    ],
  },
  {
    Icon: BarChart3,
    title: "Analytics",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    deliverables: [
      "Reach + engagement reports",
      "Booked-job attribution",
      "Top post breakdown",
      "Next-month playbook",
    ],
  },
]

export function ManagementScope() {
  return (
    <section
      id="management-scope"
      aria-labelledby="management-scope-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: copy (sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <Pill>What&rsquo;s Included</Pill>
            <h2
              id="management-scope-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Everything one social media manager{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">can&rsquo;t</span> do alone.
              </span>
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[18px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Real social media management is four jobs at once — strategy,
              production, engagement, and analytics. We staff every lane so
              your brand never goes quiet, even on the weeks you&rsquo;re
              underwater on real work.
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

            {/* Trust strip */}
            <div
              className="mt-8 flex flex-wrap gap-2.5"
              aria-label="Capability summary"
            >
              {[
                "60+ posts/mo",
                "8–12 videos/mo",
                "1 strategy call/mo",
                "24/7 community",
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

          {/* Right: flow diagram */}
          <div
            className="lg:col-span-7"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            {/* Platforms row */}
            <div className="relative">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Inputs · 7 platforms
              </div>
              <div
                className="rounded-[var(--radius-lg)] p-4 sm:p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(247,250,252,0.85) 100%)",
                  border: "1px solid var(--border-color)",
                  boxShadow:
                    "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                }}
              >
                <ul className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
                  {platforms.map((p) => (
                    <li
                      key={p.name}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-[12px] flex items-center justify-center"
                        style={{
                          background: "#fff",
                          border: "1px solid var(--border-color)",
                          boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
                        }}
                      >
                        <img
                          src={icons8Url(p.id, 128)}
                          alt={p.name}
                          width={28}
                          height={28}
                          loading="lazy"
                          decoding="async"
                          className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] object-contain"
                        />
                      </span>
                      <span
                        className="text-[10.5px] font-semibold tracking-[0.02em]"
                        style={{
                          color:
                            p.color === "#010101" || p.color === "#0F1419"
                              ? "var(--ink)"
                              : p.color,
                        }}
                      >
                        {p.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SVG connector lines */}
            <div
              aria-hidden
              className="relative h-10 sm:h-12 my-1"
              style={{ overflow: "visible" }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="management-flow-grad"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(22,119,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(22,119,255,0.06)" />
                  </linearGradient>
                </defs>
                {[15, 35, 50, 65, 85].map((x, i) => (
                  <path
                    key={i}
                    d={`M ${x} 0 Q ${x} 50 50 100`}
                    stroke="url(#management-flow-grad)"
                    strokeWidth="0.6"
                    fill="none"
                  />
                ))}
              </svg>
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                  border: "1px solid rgba(22,119,255,0.25)",
                }}
              >
                ↓ Managed by your team
              </span>
            </div>

            {/* Production lanes */}
            <div className="space-y-3 sm:space-y-4">
              {lanes.map((lane, idx) => (
                <article
                  key={lane.title}
                  className="card-surface card-surface-hover relative overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${lane.bg} 100%)`,
                    }}
                  />
                  <div className="relative grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 sm:gap-5 items-center px-5 sm:px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0"
                        style={{
                          background: `${lane.color}1A`,
                          color: lane.color,
                          boxShadow: `inset 0 0 0 1px ${lane.color}26`,
                        }}
                      >
                        <lane.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                        />
                      </span>
                      <div>
                        <div
                          className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: "var(--muted)" }}
                        >
                          Lane 0{idx + 1}
                        </div>
                        <h3
                          className="text-[18px] sm:text-[20px] font-bold leading-[1.15] tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {lane.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {lane.deliverables.map((d) => (
                        <li
                          key={d}
                          className="inline-flex items-center px-2.5 py-1.5 rounded-full text-[12.5px] font-medium"
                          style={{
                            background: "#fff",
                            border: `1px solid ${lane.color}33`,
                            color: "var(--ink)",
                          }}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)]"
              style={{
                background: "var(--accent-bg)",
                border: "1px solid rgba(22,119,255,0.25)",
              }}
            >
              <span
                className="text-[14.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                See exactly what your monthly scope looks like.
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
                style={{ color: "var(--accent)" }}
              >
                Get a custom scope
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
