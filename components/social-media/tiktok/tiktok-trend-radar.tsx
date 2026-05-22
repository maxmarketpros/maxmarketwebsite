import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Music2,
  Hash,
  Sparkles,
  Flame,
  Eye,
  Clock,
  TrendingUp,
} from "lucide-react"

type Blip = {
  Icon: typeof Music2
  label: string
  meta: string
  // polar coords on the radar (0-100, %)
  top: string
  left: string
  // visual ring (1=closest/strongest, 4=outer/weakest)
  ring: 1 | 2 | 3 | 4
  color: string
  delay: string
}

const blips: Blip[] = [
  {
    Icon: Music2,
    label: "Sound · 'Lay-Outs Remix'",
    meta: "Half-life 71h · 4.2M uses",
    top: "26%",
    left: "62%",
    ring: 1,
    color: "#FE2C55",
    delay: "0s",
  },
  {
    Icon: Hash,
    label: "#contractortok",
    meta: "+412% wk-over-wk",
    top: "44%",
    left: "78%",
    ring: 2,
    color: "#22D3EE",
    delay: "0.4s",
  },
  {
    Icon: Sparkles,
    label: "Format · Green-screen reaction",
    meta: "Avg watch-time 71%",
    top: "62%",
    left: "30%",
    ring: 1,
    color: "#A855F7",
    delay: "0.8s",
  },
  {
    Icon: Flame,
    label: "Hook · 'Nobody told me…'",
    meta: "Saves +3.1× baseline",
    top: "18%",
    left: "32%",
    ring: 3,
    color: "#F59E0B",
    delay: "1.2s",
  },
  {
    Icon: Hash,
    label: "#hometips",
    meta: "Niche fit 9/10",
    top: "72%",
    left: "66%",
    ring: 2,
    color: "#22C55E",
    delay: "1.6s",
  },
  {
    Icon: Music2,
    label: "Sound · ambient piano",
    meta: "Half-life 12h · skip",
    top: "82%",
    left: "18%",
    ring: 4,
    color: "#94A3B8",
    delay: "2.0s",
  },
]

const sidebar = [
  {
    label: "Trends scanned this week",
    value: "1,840",
    Icon: Eye,
    color: "#22D3EE",
  },
  {
    label: "Surfaced for your brand",
    value: "5",
    Icon: Sparkles,
    color: "#EC4899",
  },
  {
    label: "Acted on (filmed + posted)",
    value: "3",
    Icon: TrendingUp,
    color: "#22C55E",
  },
  {
    label: "Avg time-to-post",
    value: "23h",
    Icon: Clock,
    color: "#F59E0B",
  },
]

export function TiktokTrendRadar() {
  return (
    <section
      id="tiktok-trend-radar"
      aria-labelledby="tiktok-trend-radar-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Trend radar"
          heading={
            <span id="tiktok-trend-radar-heading">
              We watch the FYP{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">so you don&rsquo;t have to</span>.
              </span>
            </span>
          }
          paragraph="Every TikTok marketing services account gets its own weekly trend radar — sounds, hashtags, formats, and hooks scored against your brand pillars. Only the trends that actually fit make it into your content slate."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-stretch">
          {/* Radar visual */}
          <div
            className="relative rounded-[var(--radius-xl)] overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #050510 0%, #0E0E1F 60%, #1A0825 100%)",
              border: "1px solid #2A2A36",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.30), 0 24px 60px rgba(0,0,0,0.30)",
              minHeight: 460,
              animation: "fadeInUp 0.7s ease-out both",
            }}
          >
            {/* Top status bar */}
            <div
              className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 sm:px-5 py-3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="relative w-2 h-2 rounded-full"
                  style={{
                    background: "#25F4EE",
                    boxShadow: "0 0 0 3px rgba(37,244,238,0.22)",
                    animation: "subtlePulse 1.4s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: "#7DEBE8" }}
                >
                  Scanning · For You feed
                </span>
              </div>
              <span
                className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                T-minus 04:12
              </span>
            </div>

            {/* Radar concentric rings */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="relative"
                style={{
                  width: "88%",
                  aspectRatio: "1 / 1",
                  maxWidth: 420,
                }}
              >
                {/* Rings */}
                {[100, 75, 50, 25].map((sz, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${sz}%`,
                      height: `${sz}%`,
                      top: `${(100 - sz) / 2}%`,
                      left: `${(100 - sz) / 2}%`,
                      border: `1px solid rgba(37,244,238,${0.10 + i * 0.06})`,
                      boxShadow: `inset 0 0 40px rgba(37,244,238,${0.04 + i * 0.02})`,
                    }}
                  />
                ))}

                {/* Pulsing center */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "12%",
                    height: "12%",
                    top: "44%",
                    left: "44%",
                    background:
                      "radial-gradient(circle, rgba(37,244,238,0.85) 0%, rgba(37,244,238,0) 70%)",
                    animation: "subtlePulse 2.2s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "5%",
                    height: "5%",
                    top: "47.5%",
                    left: "47.5%",
                    background:
                      "linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%)",
                    boxShadow:
                      "0 0 18px rgba(37,244,238,0.6), 0 0 28px rgba(254,44,85,0.5)",
                  }}
                />

                {/* Sweep arm — conic gradient */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(37,244,238,0.45) 0deg, rgba(37,244,238,0.18) 30deg, transparent 60deg, transparent 360deg)",
                    animation: "tiktokRadarSweep 6s linear infinite",
                    mixBlendMode: "screen",
                  }}
                />

                {/* Crosshair lines */}
                <div
                  className="absolute"
                  style={{
                    top: "0",
                    left: "50%",
                    height: "100%",
                    width: "1px",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "0",
                    height: "1px",
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              </div>
            </div>

            {/* Blips overlay */}
            <ul className="absolute inset-0 z-20" aria-label="Trend candidates">
              {blips.map((b, i) => (
                <li
                  key={i}
                  className="absolute"
                  style={{
                    top: b.top,
                    left: b.left,
                    transform: "translate(-50%, -50%)",
                    animation: `blipPing 3.6s ease-out ${b.delay} infinite`,
                  }}
                >
                  <div className="relative flex items-center gap-2">
                    <span
                      className="absolute"
                      aria-hidden
                      style={{
                        width: 28,
                        height: 28,
                        left: -2,
                        top: -2,
                        borderRadius: "50%",
                        border: `1.5px solid ${b.color}`,
                        opacity: 0,
                        animation: `blipRing 3.6s ease-out ${b.delay} infinite`,
                      }}
                    />
                    <span
                      className="relative w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(180deg, ${b.color}DD 0%, ${b.color} 100%)`,
                        color: "#fff",
                        boxShadow: `0 0 0 2px rgba(11,11,15,0.9), 0 0 14px ${b.color}88`,
                      }}
                    >
                      <b.Icon className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {/* Label chip — only the first 3 strongest blips */}
                    {b.ring <= 2 && (
                      <span
                        className="hidden sm:inline-flex flex-col items-start px-2 py-1 rounded-md text-[10px] font-bold leading-tight whitespace-nowrap"
                        style={{
                          background: "rgba(11,11,15,0.85)",
                          border: `1px solid ${b.color}55`,
                          color: "#fff",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <span style={{ color: b.color }}>{b.label}</span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontWeight: 500,
                            fontSize: 9.5,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {b.meta}
                        </span>
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom legend */}
            <div
              className="absolute bottom-0 inset-x-0 z-30 flex items-center justify-between px-4 sm:px-5 py-3"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#FE2C55" }}
                  />
                  Sound
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#22D3EE" }}
                  />
                  Hashtag
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#A855F7" }}
                  />
                  Format
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#F59E0B" }}
                  />
                  Hook
                </span>
              </div>
              <span
                className="text-[10px] font-mono"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Niche · home services
              </span>
            </div>

            <style>{`
              @keyframes tiktokRadarSweep {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes blipPing {
                0% { transform: translate(-50%, -50%) scale(0.85); }
                40% { transform: translate(-50%, -50%) scale(1); }
                100% { transform: translate(-50%, -50%) scale(0.85); }
              }
              @keyframes blipRing {
                0% { opacity: 0.7; transform: scale(0.6); }
                70% { opacity: 0; transform: scale(2.4); }
                100% { opacity: 0; transform: scale(2.4); }
              }
            `}</style>
          </div>

          {/* Sidebar copy + stats */}
          <div className="flex flex-col">
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Five surfaced trends a week. Three actioned. The rest archived
              for a reason.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              We don&rsquo;t trend-jack for views. A trend only ships if it (1)
              fits your brand pillars, (2) has at least 48h of half-life left,
              and (3) can be filmed and posted within 24 hours. Everything else
              gets logged, scored, and parked.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {sidebar.map((s) => (
                <li
                  key={s.label}
                  className="card-surface p-4"
                  style={{
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: `${s.color}1A`,
                        color: s.color,
                      }}
                    >
                      <s.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                  </div>
                  <div
                    className="mt-3 text-[11.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mt-1 text-[24px] sm:text-[26px] font-extrabold tracking-[-0.02em] leading-none"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.value}
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 px-5 py-4 rounded-[var(--radius-lg)] flex flex-col sm:flex-row items-center justify-between gap-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(34,211,238,0.10) 0%, rgba(236,72,153,0.10) 100%)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <span
                className="text-[14.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                Get this week&rsquo;s trend report for your niche.
              </span>
              <SecondaryButton asLink href="#contact">
                Get this week&rsquo;s trends
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
