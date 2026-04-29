import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Calendar,
  Sparkles,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Users,
  PenLine,
  Eye,
  Heart,
} from "lucide-react"

const proofPills = [
  { Icon: Calendar, label: "60+ posts a month" },
  { Icon: Users, label: "5-person team" },
  { Icon: MessageSquare, label: "24/7 community mgmt" },
  { Icon: BarChart3, label: "Monthly performance report" },
]

export function ManagementHero() {
  return (
    <section
      aria-labelledby="management-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-6%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.04) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[28%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services" className="hover:text-[var(--accent)]">
                Services
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a
                href="/services/social-media"
                className="hover:text-[var(--accent)]"
              >
                Social Media
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Social Media Management
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(22,119,255,0.10)",
                borderColor: "rgba(22,119,255,0.28)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Social Media Management · Done-for-you
            </span>

            <h1
              id="management-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Social media management,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">handled</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Full-service{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                social media management
              </span>{" "}
              for service businesses — strategy, content production, posting,
              community management, and reporting across Instagram, TikTok,
              Facebook, LinkedIn, YouTube, X, and Pinterest. One team, one
              monthly invoice, zero post-it notes on your laptop.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="#pricing">
                See pricing
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "rgba(22,119,255,0.12)",
                      color: "var(--accent)",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Content Queue showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <ContentQueueShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

const queueItems = [
  {
    platform: "Instagram",
    platformId: "32323",
    color: "#E1306C",
    type: "Reel",
    typeIcon: "🎬",
    title: "Behind-the-scenes of today's roof tear-off — 0:23",
    status: "Scheduled",
    statusColor: "#1677FF",
    time: "Today · 4:30 PM",
    nextUp: true,
  },
  {
    platform: "TikTok",
    platformId: "118640",
    color: "#010101",
    type: "Short",
    typeIcon: "🎬",
    title: "3 questions every homeowner forgets to ask…",
    status: "In Review",
    statusColor: "#F59E0B",
    time: "Tomorrow · 9:00 AM",
    nextUp: false,
  },
  {
    platform: "Facebook",
    platformId: "118497",
    color: "#1877F2",
    type: "Carousel",
    typeIcon: "🖼️",
    title: "5 signs your HVAC unit is on its last leg",
    status: "Drafting",
    statusColor: "#94A3B8",
    time: "Wed · 11:00 AM",
    nextUp: false,
  },
  {
    platform: "LinkedIn",
    platformId: "13930",
    color: "#0A66C2",
    type: "Post",
    typeIcon: "💼",
    title: "Why we hire from the trades, not from college",
    status: "Posted",
    statusColor: "#22C55E",
    time: "Yesterday · 8:15 AM",
    nextUp: false,
  },
]

function ContentQueueShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(235,244,255,0.95) 100%)",
          border: "1px solid rgba(22,119,255,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(22,119,255,0.18)",
        }}
      />

      {/* Main card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Top status bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="relative w-2.5 h-2.5 rounded-full"
              style={{
                background: "#22C55E",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#86EFAC" }}
            >
              Live · Content Queue
            </span>
          </div>
          <span
            className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            7 platforms · synced
          </span>
        </div>

        {/* Week strip */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{
            background: "var(--bg)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
            const active = i === 1
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-1"
                style={{ minWidth: 28 }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: active ? "var(--accent)" : "var(--muted)" }}
                >
                  {d}
                </span>
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[11.5px] font-bold"
                  style={{
                    background: active ? "var(--accent)" : "transparent",
                    color: active ? "#fff" : "var(--ink)",
                    boxShadow: active
                      ? "0 4px 12px rgba(22,119,255,0.35)"
                      : "none",
                  }}
                >
                  {28 + i}
                </span>
                <span
                  className="flex gap-[2px]"
                  style={{ minHeight: 4 }}
                  aria-hidden
                >
                  {Array.from({ length: i === 1 ? 4 : i === 3 ? 3 : 2 }).map(
                    (_, j) => (
                      <span
                        key={j}
                        className="w-[3px] h-[4px] rounded-full"
                        style={{
                          background: ["#E1306C", "#010101", "#1877F2", "#0A66C2"][
                            j % 4
                          ],
                        }}
                      />
                    ),
                  )}
                </span>
              </div>
            )
          })}
        </div>

        {/* Queue list header */}
        <div className="flex items-center justify-between px-4 sm:px-5 pt-4 pb-2">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--muted)" }}
          >
            Today&rsquo;s queue
          </span>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(34,197,94,0.12)",
              color: "#15803D",
            }}
          >
            <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} />
            On schedule
          </span>
        </div>

        {/* Queue items */}
        <ul className="px-3 sm:px-4 pb-4 space-y-1.5">
          {queueItems.map((item, idx) => (
            <li
              key={idx}
              className="relative flex items-center gap-3 px-2.5 py-2.5 rounded-[var(--radius-sm)] transition-colors"
              style={{
                background: item.nextUp
                  ? "linear-gradient(90deg, rgba(22,119,255,0.06) 0%, rgba(22,119,255,0) 100%)"
                  : "transparent",
                border: item.nextUp
                  ? "1px solid rgba(22,119,255,0.20)"
                  : "1px solid transparent",
              }}
            >
              {item.nextUp && (
                <span
                  aria-hidden
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
              <span
                className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
                }}
              >
                <img
                  src={icons8Url(item.platformId, 128)}
                  alt={item.platform}
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                  className="w-[22px] h-[22px] object-contain"
                />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: item.color === "#010101" ? "#0F172A" : item.color }}
                  >
                    {item.platform}
                  </span>
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                    style={{
                      background: "var(--bg)",
                      color: "var(--muted)",
                    }}
                  >
                    {item.type}
                  </span>
                  {item.nextUp && (
                    <span
                      className="text-[9.5px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(22,119,255,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      Next up
                    </span>
                  )}
                </div>
                <div
                  className="text-[12.5px] font-medium leading-[1.35] truncate"
                  style={{ color: "var(--ink)" }}
                >
                  {item.title}
                </div>
                <div
                  className="text-[10.5px] font-mono mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {item.time}
                </div>
              </div>
              <span
                className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{
                  background: `${item.statusColor}1A`,
                  color: item.statusColor,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.statusColor }}
                />
                {item.status}
              </span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="flex -space-x-1.5"
              aria-label="5-person team"
            >
              {[
                "#1677FF",
                "#22C55E",
                "#F59E0B",
                "#EC4899",
                "#0EA5E9",
              ].map((c, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </span>
            <span
              className="text-[11px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Managed by your 5-person team
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            <PenLine className="w-3 h-3" strokeWidth={2.5} />
            Approve · Edit
          </span>
        </div>
      </div>

      {/* Floating accents */}

      {/* Top-left: Posts/mo badge */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.35), 0 14px 32px rgba(22,119,255,0.28)",
          color: "#fff",
          transform: "rotate(-4deg)",
        }}
      >
        <Calendar className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">60+</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            posts/mo
          </span>
        </div>
      </div>

      {/* Top-right: Engagement chip */}
      <div
        className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FDF2F8 100%)",
          border: "1px solid rgba(236,72,153,0.3)",
          boxShadow:
            "0 2px 6px rgba(236,72,153,0.18), 0 14px 32px rgba(236,72,153,0.18)",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #F472B6 0%, #EC4899 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(236,72,153,0.35)",
          }}
        >
          <Heart className="w-3.5 h-3.5" strokeWidth={2.75} fill="#fff" />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Avg engagement
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            4.2%
          </span>
        </div>
      </div>

      {/* Bottom-right: Reach chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0F9FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <Eye className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Reach this month
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +1.2M
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,119,255,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}
