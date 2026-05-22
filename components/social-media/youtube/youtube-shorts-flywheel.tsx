import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  Scissors,
  Bell,
  PlayCircle,
  Share2,
  Hash,
  Repeat,
} from "lucide-react"

const longToShort = [
  {
    Icon: Scissors,
    label: "Clip extraction",
    sub: "30+ vertical Shorts cut from each long-form upload",
  },
  {
    Icon: Repeat,
    label: "Audience retargeting",
    sub: "Shorts viewers re-served the long-form via suggested",
  },
  {
    Icon: Hash,
    label: "Niche tagging",
    sub: "Same keyword cluster, two surface areas",
  },
]

const shortToLong = [
  {
    Icon: Bell,
    label: "Subscriber lift",
    sub: "Shorts hook the swipe — subs flow back to long-form",
  },
  {
    Icon: PlayCircle,
    label: "Suggested-video pickup",
    sub: "Shorts viewers boost the channel watch-time signal",
  },
  {
    Icon: Share2,
    label: "Algorithm trust",
    sub: "Daily upload cadence on Shorts keeps your channel hot",
  },
]

export function YoutubeShortsFlywheel() {
  return (
    <section
      id="youtube-shorts-flywheel"
      aria-labelledby="youtube-shorts-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-8%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[8%] left-[-8%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="flex justify-center mb-5">
            <Pill>YouTube Shorts × long-form</Pill>
          </div>
          <h2
            id="youtube-shorts-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            One{" "}
            <span className="accent-underline">YouTube Shorts</span> flywheel
            that feeds your long-form channel.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[18.5px] leading-[1.65] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Channels that grow fastest in 2026 run Shorts and long-form as one
            engine, not two. Our YouTube marketing services treat them as a
            single flywheel: long-form fuels the Shorts pipeline, Shorts feeds
            subscribers and watch-time back to long-form. Same hooks compound
            on{" "}
            <a
              href="/services/social-media/tiktok"
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              TikTok
            </a>
            .
          </p>
        </div>

        {/* Flywheel diagram */}
        <div
          className="mt-14 relative"
          style={{ animation: "fadeInUp 0.7s ease-out 0.05s both" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
            {/* Long-form panel */}
            <FlywheelPanel
              kind="long"
              title="Long-form"
              subtitle="8–12 videos / mo · 8–18 min"
              chip="16:9 · YouTube Studio"
              chipColor="#1677FF"
              accent="#1677FF"
            />

            {/* Center loop SVG */}
            <div
              className="relative mx-auto"
              style={{ width: "100%", maxWidth: 220, height: 220 }}
            >
              <svg
                viewBox="0 0 220 220"
                className="absolute inset-0 w-full h-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="flywheelArc1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1677FF" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="flywheelArc2" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#1677FF" />
                  </linearGradient>
                  <marker
                    id="flywheelArrow1"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="#EC4899" />
                  </marker>
                  <marker
                    id="flywheelArrow2"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="#1677FF" />
                  </marker>
                </defs>

                {/* Top arc: long → short */}
                <path
                  d="M 24 70 Q 110 0 196 70"
                  fill="none"
                  stroke="url(#flywheelArc1)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  markerEnd="url(#flywheelArrow1)"
                />
                {/* Bottom arc: short → long */}
                <path
                  d="M 196 150 Q 110 220 24 150"
                  fill="none"
                  stroke="url(#flywheelArc2)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  markerEnd="url(#flywheelArrow2)"
                />

                {/* Center hub */}
                <circle
                  cx="110"
                  cy="110"
                  r="38"
                  fill="#fff"
                  stroke="rgba(22,119,255,0.25)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="28"
                  fill="url(#flywheelArc1)"
                  opacity="0.12"
                />
              </svg>
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Flywheel
                  </div>
                  <div
                    className="mt-0.5 text-[15px] font-extrabold tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    1 channel
                  </div>
                </div>
              </div>

              {/* Arc labels */}
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{
                  background: "rgba(236,72,153,0.10)",
                  color: "#DB2777",
                  border: "1px solid rgba(236,72,153,0.30)",
                }}
              >
                Long → Shorts
              </span>
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{
                  background: "rgba(22,119,255,0.10)",
                  color: "#1677FF",
                  border: "1px solid rgba(22,119,255,0.30)",
                }}
              >
                Shorts → Long
              </span>
            </div>

            {/* Shorts panel */}
            <FlywheelPanel
              kind="short"
              title="YouTube Shorts"
              subtitle="30+ Shorts / mo · 30–60s"
              chip="9:16 · vertical"
              chipColor="#EC4899"
              accent="#EC4899"
            />
          </div>

          {/* Arrow legends — mechanism cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background: "rgba(236,72,153,0.10)",
                  color: "#DB2777",
                }}
              >
                <ArrowRight className="w-3 h-3" strokeWidth={3} />
                How long-form fuels Shorts
              </span>
              <ul className="space-y-2.5">
                {longToShort.map((m) => (
                  <li
                    key={m.label}
                    className="flex items-start gap-3 px-4 py-3 rounded-[var(--radius-md)]"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(236,72,153,0.12)",
                        color: "#DB2777",
                      }}
                    >
                      <m.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                    <div className="min-w-0">
                      <div
                        className="text-[14.5px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="text-[12.5px] mt-0.5 leading-[1.4]"
                        style={{ color: "var(--muted)" }}
                      >
                        {m.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background: "rgba(22,119,255,0.10)",
                  color: "#1677FF",
                }}
              >
                <ArrowRight className="w-3 h-3" strokeWidth={3} />
                How Shorts feed long-form
              </span>
              <ul className="space-y-2.5">
                {shortToLong.map((m) => (
                  <li
                    key={m.label}
                    className="flex items-start gap-3 px-4 py-3 rounded-[var(--radius-md)]"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(22,119,255,0.12)",
                        color: "#1677FF",
                      }}
                    >
                      <m.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                    <div className="min-w-0">
                      <div
                        className="text-[14.5px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="text-[12.5px] mt-0.5 leading-[1.4]"
                        style={{ color: "var(--muted)" }}
                      >
                        {m.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group px-5 py-3 rounded-[var(--radius-sm)]"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
              }}
            >
              Plan your YouTube Shorts engine
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlywheelPanel({
  kind,
  title,
  subtitle,
  chip,
  chipColor,
  accent,
}: {
  kind: "long" | "short"
  title: string
  subtitle: string
  chip: string
  chipColor: string
  accent: string
}) {
  return (
    <article
      className="card-surface card-surface-hover relative overflow-hidden mx-auto w-full"
      style={{ borderRadius: "var(--radius-xl)", maxWidth: 360 }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}1A 0%, transparent 60%)`,
        }}
      />
      <div className="relative px-5 py-6">
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: chipColor }}
          >
            {chip}
          </span>
          {kind === "long" ? (
            <PlayCircle className="w-4 h-4" style={{ color: chipColor }} strokeWidth={2.5} />
          ) : (
            <Scissors className="w-4 h-4" style={{ color: chipColor }} strokeWidth={2.5} />
          )}
        </div>
        <h3
          className="mt-2 text-[20px] font-bold leading-tight tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {title}
        </h3>
        <p
          className="text-[13.5px]"
          style={{ color: "var(--muted)" }}
        >
          {subtitle}
        </p>

        {/* Mock player */}
        {kind === "long" ? (
          <div
            className="mt-4 relative w-full overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #1F2937 0%, #0B132B 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 60% 30%, rgba(22,119,255,0.30) 0%, transparent 60%)",
              }}
            />
            <span
              className="absolute font-extrabold leading-tight uppercase"
              style={{
                left: 14,
                top: 14,
                right: 14,
                color: "#FFD600",
                fontSize: 18,
                textShadow: "0 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              How We Closed
              <br />
              <span style={{ color: "#fff" }}>32 Roof Jobs in 60 Days</span>
            </span>
            <span
              className="absolute font-bold"
              style={{
                right: 8,
                bottom: 8,
                background: "rgba(0,0,0,0.85)",
                color: "#fff",
                fontSize: 10,
                padding: "2px 5px",
                borderRadius: 3,
              }}
            >
              12:08
            </span>
          </div>
        ) : (
          <div className="mt-4 flex justify-center">
            <div
              className="relative overflow-hidden"
              style={{
                width: 130,
                aspectRatio: "9 / 16",
                borderRadius: 14,
                background:
                  "linear-gradient(170deg, #2A0A18 0%, #0F0F0F 100%)",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.06), 0 12px 28px rgba(236,72,153,0.18)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(236,72,153,0.45) 0%, transparent 60%)",
                }}
              />
              <span
                className="absolute font-extrabold leading-[0.95] uppercase tracking-[-0.02em] text-center"
                style={{
                  left: 8,
                  right: 8,
                  top: "38%",
                  color: "#fff",
                  fontSize: 14,
                  textShadow:
                    "0 1px 4px rgba(0,0,0,0.7), 1px 0 0 rgba(236,72,153,0.6)",
                }}
              >
                3 mistakes every roofer makes
              </span>
              <span
                className="absolute left-2 right-2 bottom-1 h-[2px] rounded-full"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: "55%",
                    background:
                      "linear-gradient(90deg, #EC4899 0%, #FF0000 100%)",
                  }}
                />
              </span>
              <span
                className="absolute top-2 left-2 inline-flex items-center px-1.5 py-0.5 rounded text-[8.5px] font-extrabold uppercase tracking-[0.12em]"
                style={{
                  background: "#FF0000",
                  color: "#fff",
                }}
              >
                Shorts
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
