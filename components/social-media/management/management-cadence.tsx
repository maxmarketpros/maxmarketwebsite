import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { Calendar, Sparkles, ArrowRight, Clock, Video, Star } from "lucide-react"

type Slot = {
  day: number // 0..6
  time: string
  platform: "Instagram" | "TikTok" | "Facebook" | "LinkedIn" | "YouTube"
  platformId: string
  color: string
  type: "Reel" | "Carousel" | "Story" | "Long-form" | "Post" | "Short"
  angle: string
  flag?: "boosted" | "video"
}

const slots: Slot[] = [
  {
    day: 0,
    time: "9:00 AM",
    platform: "LinkedIn",
    platformId: "13930",
    color: "#0A66C2",
    type: "Post",
    angle: "Why we hire from the trades",
  },
  {
    day: 0,
    time: "5:30 PM",
    platform: "Instagram",
    platformId: "32323",
    color: "#E1306C",
    type: "Reel",
    angle: "Before/after — kitchen reno",
    flag: "video",
  },
  {
    day: 1,
    time: "11:00 AM",
    platform: "TikTok",
    platformId: "118640",
    color: "#010101",
    type: "Short",
    angle: "3 things every homeowner forgets",
    flag: "video",
  },
  {
    day: 1,
    time: "7:00 PM",
    platform: "Facebook",
    platformId: "118497",
    color: "#1877F2",
    type: "Carousel",
    angle: "5 signs your HVAC is dying",
  },
  {
    day: 2,
    time: "10:00 AM",
    platform: "Instagram",
    platformId: "32323",
    color: "#E1306C",
    type: "Story",
    angle: "Job-site Q&A poll",
  },
  {
    day: 2,
    time: "2:00 PM",
    platform: "YouTube",
    platformId: "13983",
    color: "#FF0000",
    type: "Long-form",
    angle: "Full ductwork walkthrough",
    flag: "video",
  },
  {
    day: 3,
    time: "9:30 AM",
    platform: "LinkedIn",
    platformId: "13930",
    color: "#0A66C2",
    type: "Post",
    angle: "Hiring milestone announcement",
  },
  {
    day: 3,
    time: "6:00 PM",
    platform: "Instagram",
    platformId: "32323",
    color: "#E1306C",
    type: "Reel",
    angle: "Service truck reveal",
    flag: "boosted",
  },
  {
    day: 4,
    time: "12:00 PM",
    platform: "TikTok",
    platformId: "118640",
    color: "#010101",
    type: "Short",
    angle: "Tool of the week",
    flag: "video",
  },
  {
    day: 4,
    time: "4:00 PM",
    platform: "Facebook",
    platformId: "118497",
    color: "#1877F2",
    type: "Post",
    angle: "Customer testimonial",
  },
  {
    day: 5,
    time: "10:00 AM",
    platform: "Instagram",
    platformId: "32323",
    color: "#E1306C",
    type: "Carousel",
    angle: "Top 5 jobs of the week",
  },
  {
    day: 6,
    time: "11:00 AM",
    platform: "TikTok",
    platformId: "118640",
    color: "#010101",
    type: "Short",
    angle: "Sunday recap montage",
    flag: "video",
  },
]

const days = [
  { label: "Mon", date: "Apr 27" },
  { label: "Tue", date: "Apr 28" },
  { label: "Wed", date: "Apr 29" },
  { label: "Thu", date: "Apr 30" },
  { label: "Fri", date: "May 1" },
  { label: "Sat", date: "May 2" },
  { label: "Sun", date: "May 3" },
]

const metricTiles = [
  {
    big: "60+",
    label: "posts published",
    sub: "across platforms",
    accent: "#1677FF",
  },
  {
    big: "8–12",
    label: "videos produced",
    sub: "Reels, Shorts, TikToks",
    accent: "#EC4899",
  },
  {
    big: "1",
    label: "strategy call",
    sub: "monthly w/ your lead",
    accent: "#22C55E",
  },
  {
    big: "24/7",
    label: "DM coverage",
    sub: "community managed",
    accent: "#F59E0B",
  },
]

export function ManagementCadence() {
  return (
    <section
      id="management-cadence"
      aria-labelledby="management-cadence-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Your Posting Cadence"
          heading={
            <span id="management-cadence-heading">
              60+ posts a month. Without you lifting{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">a finger</span>.
              </span>
            </span>
          }
          paragraph="A real social media management plan looks like a real publishing calendar. Here&rsquo;s a sample week from a home-services account — every cell is a real production slot we cover end-to-end."
        />

        {/* Calendar mockup */}
        <div
          className="mt-12 sm:mt-14 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 16px 40px var(--shadow-color)",
            }}
          >
            {/* Calendar header bar */}
            <div
              className="flex items-center justify-between px-5 sm:px-7 py-4"
              style={{
                background:
                  "linear-gradient(180deg, #FAFBFD 0%, #F4F7FB 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Calendar className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div>
                  <div
                    className="text-[15.5px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    Sample Week · Apr 27 – May 3
                  </div>
                  <div
                    className="text-[12px] font-medium"
                    style={{ color: "var(--muted)" }}
                  >
                    12 posts · 4 platforms · 5 videos · 1 boosted
                  </div>
                </div>
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#15803D",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                Auto-publishing
              </span>
            </div>

            {/* Calendar grid: scrolls horizontally on small screens */}
            <div className="overflow-x-auto">
              <div
                className="grid min-w-[760px]"
                style={{
                  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                {days.map((d) => (
                  <div
                    key={d.label}
                    className="px-3 py-3 text-center"
                    style={{
                      borderRight: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.1em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {d.label}
                    </div>
                    <div
                      className="text-[14px] font-bold mt-0.5"
                      style={{ color: "var(--ink)" }}
                    >
                      {d.date}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="grid min-w-[760px]"
                style={{
                  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                }}
              >
                {days.map((_, dayIdx) => {
                  const daySlots = slots.filter((s) => s.day === dayIdx)
                  return (
                    <div
                      key={dayIdx}
                      className="px-2 py-3 space-y-2 min-h-[260px]"
                      style={{
                        borderRight: "1px solid var(--border-color)",
                        background:
                          dayIdx % 2 === 0
                            ? "var(--surface)"
                            : "rgba(247,250,252,0.6)",
                      }}
                    >
                      {daySlots.map((s, i) => (
                        <div
                          key={i}
                          className="rounded-[var(--radius-sm)] p-2.5"
                          style={{
                            background: "#fff",
                            border: `1px solid ${s.color}33`,
                            boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                          }}
                        >
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="inline-flex items-center gap-1 min-w-0">
                              <img
                                src={icons8Url(s.platformId, 64)}
                                alt={s.platform}
                                width={14}
                                height={14}
                                loading="lazy"
                                decoding="async"
                                className="w-[14px] h-[14px] object-contain shrink-0"
                              />
                              <span
                                className="text-[10.5px] font-bold uppercase tracking-[0.06em] truncate"
                                style={{
                                  color:
                                    s.color === "#010101"
                                      ? "var(--ink)"
                                      : s.color,
                                }}
                              >
                                {s.type}
                              </span>
                            </span>
                            {s.flag === "video" && (
                              <Video
                                className="w-3 h-3 shrink-0"
                                strokeWidth={2.5}
                                style={{ color: s.color }}
                              />
                            )}
                            {s.flag === "boosted" && (
                              <Star
                                className="w-3 h-3 shrink-0"
                                strokeWidth={2.5}
                                fill={s.color}
                                style={{ color: s.color }}
                              />
                            )}
                          </div>
                          <div
                            className="mt-1.5 text-[11.5px] font-semibold leading-[1.3] line-clamp-2"
                            style={{ color: "var(--ink)" }}
                          >
                            {s.angle}
                          </div>
                          <div
                            className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono"
                            style={{ color: "var(--muted)" }}
                          >
                            <Clock className="w-2.5 h-2.5" strokeWidth={2.5} />
                            {s.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom strip with legend */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 sm:px-7 py-3"
              style={{
                background: "var(--bg)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Legend
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold" style={{ color: "var(--ink)" }}>
                <Video className="w-3 h-3" strokeWidth={2.5} style={{ color: "var(--accent)" }} />
                Video produced by us
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold" style={{ color: "var(--ink)" }}>
                <Star className="w-3 h-3" strokeWidth={2.5} fill="#F59E0B" style={{ color: "#F59E0B" }} />
                Paid boost
              </span>
              <span className="ml-auto text-[11.5px] font-medium" style={{ color: "var(--muted)" }}>
                Calendar shared in Notion or ClickUp · 7-day approval window
              </span>
            </div>
          </div>
        </div>

        {/* Metric tiles */}
        <div
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out 0.15s both" }}
        >
          {metricTiles.map((t) => (
            <div
              key={t.label}
              className="card-surface relative overflow-hidden p-5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-30px] top-[-30px] w-[140px] h-[140px]"
                style={{
                  background: `radial-gradient(ellipse at center, ${t.accent}1A 0%, transparent 70%)`,
                }}
              />
              <div className="relative">
                <div
                  className="text-[36px] sm:text-[40px] font-extrabold leading-none tracking-[-0.025em]"
                  style={{ color: t.accent }}
                >
                  {t.big}
                </div>
                <div
                  className="mt-2 text-[14px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {t.label}
                </div>
                <div
                  className="text-[12.5px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {t.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 text-[15.5px]" style={{ color: "var(--muted)" }}>
            <Sparkles className="w-4 h-4" strokeWidth={2.5} style={{ color: "var(--accent)" }} />
            Want this calendar built for your business?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "var(--accent)" }}
          >
            Get your custom calendar
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
