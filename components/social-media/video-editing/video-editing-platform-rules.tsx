"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import {
  Youtube,
  Linkedin,
  Pin,
  CheckCircle2,
  XCircle,
  Volume2,
  Type,
  Maximize2,
  Clock4,
} from "lucide-react"

type Platform = {
  key: string
  name: string
  brand: string
  iconId?: string
  Lucide?: React.ComponentType<{ className?: string; fill?: string; strokeWidth?: number }>
  ratio: string
  resolution: string
  hookWindow: string
  caption: string
  audio: string
  length: string
  avoid: string[]
  win: string[]
}

const platforms: Platform[] = [
  {
    key: "ig",
    name: "Instagram Reels",
    brand: "#E1306C",
    iconId: "32323",
    ratio: "9:16",
    resolution: "1080×1920 · H.264 · 30fps",
    hookWindow: "Hook ≤ 2s · payoff visible by 0:04",
    caption: "Burned-in captions · Aeonik Bold · max 5 words/line · 14% top safe-zone",
    audio: "-14 LUFS · trending audio under 60s · VO ducked -8db",
    length: "7–60s sweet spot · 15s for completion rate",
    avoid: ["TikTok watermarks", "16:9 letterbox", "Static intros >1s", "Outline-only captions"],
    win: ["Vertical text overlay", "Pattern interrupt cuts", "Native trending audio", "Engagement bait CTA"],
  },
  {
    key: "tt",
    name: "TikTok",
    brand: "#0B132B",
    iconId: "118640",
    ratio: "9:16",
    resolution: "1080×1920 · H.264 · 30fps",
    hookWindow: "Hook ≤ 1.5s · drop the visual reveal in frame 1",
    caption: "Native sticker captions · TikTok-default font · centered · 25% bottom safe-zone",
    audio: "Trending sound under 30 days old · -16 LUFS · keep voiceover up-front",
    length: "21–34s converts highest in 2026 · short = re-watch loops",
    avoid: ["Brand logo in first 1s", "IG-watermark exports", "Slow zooms", "External link CTAs"],
    win: ["Loop-back ending", "Comment-bait hook", "POV B-roll", "Native CapCut effects"],
  },
  {
    key: "yt",
    name: "YouTube Shorts",
    brand: "#FF0000",
    Lucide: Youtube,
    ratio: "9:16",
    resolution: "1080×1920 · H.264 · 60fps preferred",
    hookWindow: "Hook ≤ 3s · payoff promise stated by 0:05",
    caption: "Burned-in + SRT upload · ARIAL BOLD · 40% top safe-zone for title chip",
    audio: "Original audio preferred · -14 LUFS · music bed < dialog",
    length: "30–58s · 60s cap · YouTube prefers higher avg view duration",
    avoid: ["TikTok watermarks", "Vertical text in safe zone", "Black bars", "Trending audio without rights"],
    win: ["Title overlay top", "End-screen subscribe", "Cliff-hanger to long-form", "Searchable description"],
  },
  {
    key: "fb",
    name: "Facebook Reels",
    brand: "#1877F2",
    iconId: "118497",
    ratio: "9:16",
    resolution: "1080×1920 · H.264 · 30fps",
    hookWindow: "Hook ≤ 2.5s · skewed older audience prefers context first",
    caption: "Burned-in · larger type · high contrast · max 4 words/line",
    audio: "Stock-licensed music safe · -14 LUFS · clear VO mix",
    length: "30–90s converts higher than 7–15s on Facebook",
    avoid: ["Tiny text", "Trend-only humor", "Aggressive jump cuts", "Sub-clip stitches"],
    win: ["Direct CTA caption", "Local geo tags", "Recognizable people", "Reaction-driven hooks"],
  },
  {
    key: "li",
    name: "LinkedIn Video",
    brand: "#0A66C2",
    iconId: "13930",
    ratio: "1:1 or 16:9",
    resolution: "1920×1080 or 1080×1080 · H.264 · 30fps",
    hookWindow: "Hook ≤ 5s · LinkedIn auto-plays muted — visual hook critical",
    caption: "Burned-in mandatory · 80% of LinkedIn video plays muted",
    audio: "VO-led · -16 LUFS · minimal music bed · lots of room tone",
    length: "30–90s for high engagement · 3–10min for thought leadership",
    avoid: ["TikTok-style edits", "Influencer tone", "Vertical-only crops", "Loud music"],
    win: ["Personal story hook", "Data overlay", "Frame.io-style B-roll", "Document carousel pairing"],
  },
  {
    key: "pin",
    name: "Pinterest Idea Pins",
    brand: "#E60023",
    Lucide: Pin,
    ratio: "9:16",
    resolution: "1080×1920 · H.264 · 30fps",
    hookWindow: "Hook ≤ 2s · static-frame thumbnail must be designed",
    caption: "Searchable on-screen text · Pinterest sans · large type",
    audio: "Music optional · most Pinterest users browse muted",
    length: "15–60s · multi-page idea pin format",
    avoid: ["Watermarks", "Tiny text", "Music-only edits", "Square crops"],
    win: ["Step-by-step format", "SEO description", "Branded thumbnail", "Saveable how-tos"],
  },
]

export function VideoEditingPlatformRules() {
  const [active, setActive] = useState(platforms[0].key)
  const p = platforms.find((x) => x.key === active) ?? platforms[0]

  return (
    <section
      aria-labelledby="video-editing-platform-rules-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Algorithm-aware editing"
          heading={
            <span id="video-editing-platform-rules-heading">
              Platform-native video editing rules,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">tuned per algorithm</span>
              </span>
            </span>
          }
          paragraph="Generic vertical video doesn't win on every feed. Our video editing process tunes hook timing, caption style, audio levels, and length per platform — so the same shoot performs natively everywhere."
        />

        {/* Tabs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Video editing platform rules"
        >
          {platforms.map((pl) => {
            const isActive = pl.key === active
            return (
              <button
                key={pl.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(pl.key)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[12.5px] font-semibold transition-all"
                style={{
                  background: isActive ? `${pl.brand}1A` : "var(--surface)",
                  border: isActive
                    ? `1px solid ${pl.brand}`
                    : "1px solid var(--border-color)",
                  color: isActive ? pl.brand : "var(--ink)",
                  boxShadow: isActive
                    ? `0 4px 14px ${pl.brand}33`
                    : "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center"
                  style={{
                    background: pl.iconId ? "var(--bg)" : pl.brand,
                    color: "#fff",
                    border: pl.iconId ? "1px solid var(--border-color)" : "none",
                  }}
                >
                  {pl.iconId ? (
                    <img
                      src={icons8Url(pl.iconId, 64)}
                      alt={`${pl.name} video editing logo`}
                      width={14}
                      height={14}
                      loading="lazy"
                      decoding="async"
                      className="w-[14px] h-[14px] object-contain"
                    />
                  ) : pl.Lucide ? (
                    <pl.Lucide
                      className="w-3 h-3"
                      strokeWidth={pl.name.includes("Pinterest") ? 2.5 : 0}
                      fill={pl.name.includes("Pinterest") ? undefined : "#fff"}
                    />
                  ) : null}
                </span>
                {pl.name}
              </button>
            )
          })}
        </div>

        {/* Active panel */}
        <div
          key={p.key}
          className="mt-10 rounded-[var(--radius-xl)] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)",
            border: "1px solid var(--border-color)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.06), 0 16px 40px rgba(17,35,68,0.08)",
            animation: "fadeInUp 0.4s ease-out both",
          }}
        >
          {/* Brand-color accent bar */}
          <div className="h-1.5 w-full" style={{ background: p.brand }} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0">
            {/* Left: identity */}
            <div
              className="p-6 sm:p-8 flex flex-col"
              style={{
                background: `linear-gradient(180deg, ${p.brand}10 0%, transparent 100%)`,
                borderRight: "1px solid var(--border-color)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: p.iconId ? "#fff" : p.brand,
                    border: p.iconId ? "1px solid var(--border-color)" : "none",
                    boxShadow: "0 4px 12px rgba(17,35,68,0.10)",
                  }}
                >
                  {p.iconId ? (
                    <img
                      src={icons8Url(p.iconId, 96)}
                      alt={`${p.name} logo for video editing`}
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  ) : p.Lucide ? (
                    <p.Lucide
                      className="w-6 h-6"
                      strokeWidth={p.name.includes("Pinterest") ? 2.5 : 0}
                      fill={p.name.includes("Pinterest") ? "#fff" : "#fff"}
                    />
                  ) : null}
                </span>
                <div>
                  <h3
                    className="text-[20px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.name}
                  </h3>
                  <span
                    className="inline-block mt-1 text-[10.5px] font-extrabold uppercase tracking-[0.14em] px-2 py-0.5 rounded"
                    style={{
                      background: `${p.brand}1A`,
                      color: p.brand,
                    }}
                  >
                    {p.ratio} · {p.length.split(" ")[0]}
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5">
                <SpecRow Icon={Maximize2} label="Resolution" value={p.resolution} accent={p.brand} />
                <SpecRow Icon={Clock4} label="Hook window" value={p.hookWindow} accent={p.brand} />
                <SpecRow Icon={Type} label="Caption style" value={p.caption} accent={p.brand} />
                <SpecRow Icon={Volume2} label="Audio mix" value={p.audio} accent={p.brand} />
              </ul>
            </div>

            {/* Right: do / don't */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(34,197,94,0.14)",
                      color: "#15803D",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <h4
                    className="text-[14px] font-extrabold uppercase tracking-[0.1em]"
                    style={{ color: "#15803D" }}
                  >
                    Editing wins
                  </h4>
                </div>
                <ul className="space-y-2">
                  {p.win.map((w, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13.5px] font-medium leading-[1.45]"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#22C55E" }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(239,68,68,0.14)",
                      color: "#B91C1C",
                    }}
                  >
                    <XCircle className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <h4
                    className="text-[14px] font-extrabold uppercase tracking-[0.1em]"
                    style={{ color: "#B91C1C" }}
                  >
                    Editing don&rsquo;ts
                  </h4>
                </div>
                <ul className="space-y-2">
                  {p.avoid.map((w, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13.5px] font-medium leading-[1.45]"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#EF4444" }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpecRow({
  Icon,
  label,
  value,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  accent: string
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
        style={{
          background: `${accent}1A`,
          color: accent,
        }}
      >
        <Icon className="w-4 h-4" strokeWidth={2.25} />
      </span>
      <div className="min-w-0">
        <div
          className="text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </div>
        <div
          className="text-[13.5px] font-medium leading-[1.5]"
          style={{ color: "var(--ink)" }}
        >
          {value}
        </div>
      </div>
    </li>
  )
}
