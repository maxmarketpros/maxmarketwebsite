import { SectionHeader } from "@/components/ui/section-header"
import {
  Play,
  LayoutGrid,
  Film,
  Radio,
  Image as ImageIcon,
  Heart,
  Monitor,
  MessageCircle,
} from "lucide-react"

type ContentType = {
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  title: string
  description: string
  accent: string
  mockup: "vertical" | "square" | "carousel" | "live" | "long" | "story"
}

const types: ContentType[] = [
  {
    LucideIcon: Play,
    label: "Reels",
    title: "Instagram & Facebook Reels",
    description:
      "9:16 short-form video built to hook, hold, and convert — captions, hooks, and trend audio baked in.",
    accent: "#E1306C",
    mockup: "vertical",
  },
  {
    LucideIcon: Film,
    label: "Short-form",
    title: "TikToks & YouTube Shorts",
    description:
      "Native short-form designed for the FYP. Repurposed across TikTok, Shorts, and Reels in one workflow.",
    accent: "#010101",
    mockup: "vertical",
  },
  {
    LucideIcon: LayoutGrid,
    label: "Carousels",
    title: "Swipeable carousels",
    description:
      "Story-driven 10-slide carousels that dramatically boost dwell time and saves on Instagram and LinkedIn.",
    accent: "#8B5CF6",
    mockup: "carousel",
  },
  {
    LucideIcon: ImageIcon,
    label: "Posts",
    title: "Branded static posts",
    description:
      "Scroll-stopping graphics, quote cards, and announcement posts — on-brand and production-ready.",
    accent: "#1677FF",
    mockup: "square",
  },
  {
    LucideIcon: Heart,
    label: "Stories",
    title: "Stories & Highlights",
    description:
      "Daily Instagram and Facebook stories, polls, and highlight covers that keep your audience engaged.",
    accent: "#F59E0B",
    mockup: "story",
  },
  {
    LucideIcon: Radio,
    label: "Live",
    title: "Live streams",
    description:
      "Live events, Q&As, and behind-the-scenes streams produced and promoted for max turnout.",
    accent: "#EF4444",
    mockup: "live",
  },
  {
    LucideIcon: Monitor,
    label: "Long-form",
    title: "YouTube long-form",
    description:
      "Educational and brand-authority video built to rank in YouTube search and compound watch time.",
    accent: "#FF0000",
    mockup: "long",
  },
  {
    LucideIcon: MessageCircle,
    label: "UGC",
    title: "User-generated content",
    description:
      "Creator-style UGC videos built to feel native and earn trust — perfect for ads and organic posts.",
    accent: "#14B8A6",
    mockup: "vertical",
  },
]

export function SocialContentTypes() {
  return (
    <section
      aria-labelledby="social-content-heading"
      className="relative"
      style={{ background: "#F0F4F8" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Content We Make"
          heading={
            <span id="social-content-heading">
              Every format your audience{" "}
              <span className="accent-underline">scrolls for</span>.
            </span>
          }
          paragraph="Reels, Shorts, carousels, live streams, long-form video, and UGC — all produced by one team with one unified brand voice."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {types.map((t) => (
            <ContentCard key={t.label} type={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContentCard({ type }: { type: ContentType }) {
  const { LucideIcon } = type
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-5 flex flex-col">
      {/* Mockup preview */}
      <div
        className="relative rounded-[var(--radius-sm)] overflow-hidden mb-5 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${type.accent}22 0%, ${type.accent}0D 100%)`,
          aspectRatio: type.mockup === "vertical" ? "9 / 12" : type.mockup === "long" ? "16 / 9" : "1 / 1",
          border: "1px solid var(--border-color)",
        }}
      >
        <Mockup type={type.mockup} accent={type.accent} />
      </div>

      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{
            background: `${type.accent}1A`,
            color: type.accent === "#FFFC00" ? "var(--ink)" : type.accent,
          }}
        >
          <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
          {type.label}
        </span>
      </div>

      <h3
        className="mt-3 text-[17px] sm:text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
        style={{ color: "var(--ink)" }}
      >
        {type.title}
      </h3>

      <p
        className="mt-2 text-[13.5px] leading-[1.5] flex-1"
        style={{ color: "var(--muted)" }}
      >
        {type.description}
      </p>
    </article>
  )
}

function Mockup({ type, accent }: { type: ContentType["mockup"]; accent: string }) {
  if (type === "live") {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3">
        <div
          className="self-start inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold text-white animate-pulse"
          style={{ background: "#EF4444" }}
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          LIVE
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-6 h-6 rounded-full"
            style={{ background: accent }}
          />
          <div
            className="flex-1 h-1.5 rounded-full"
            style={{ background: `${accent}55` }}
          />
          <div className="text-[10px] font-semibold" style={{ color: accent }}>
            142
          </div>
        </div>
      </div>
    )
  }
  if (type === "carousel") {
    return (
      <div className="w-full h-full flex items-end gap-1 p-3">
        {[0.5, 0.7, 1, 0.7, 0.5].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-[3px]"
            style={{
              background: `${accent}${i === 2 ? "" : "55"}`,
              height: `${h * 70}%`,
            }}
          />
        ))}
      </div>
    )
  }
  if (type === "long") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: accent }}
        >
          <Play className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
        </div>
        <div
          className="absolute bottom-2 left-2 right-2 h-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.4)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ background: accent, width: "62%" }}
          />
        </div>
      </div>
    )
  }
  if (type === "story") {
    return (
      <div className="relative w-full h-full flex flex-col">
        <div
          className="m-2 h-1 rounded-full"
          style={{ background: accent }}
        />
        <div
          className="mx-2 mb-2 h-1 rounded-full"
          style={{ background: `${accent}44` }}
        />
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full border-2"
            style={{ borderColor: accent, background: `${accent}22` }}
          />
        </div>
      </div>
    )
  }
  if (type === "square") {
    return (
      <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-full text-center space-y-1.5">
          <div
            className="h-2 rounded-full mx-auto"
            style={{ background: accent, width: "60%" }}
          />
          <div
            className="h-2 rounded-full mx-auto"
            style={{ background: `${accent}66`, width: "85%" }}
          />
          <div
            className="h-2 rounded-full mx-auto"
            style={{ background: `${accent}33`, width: "45%" }}
          />
        </div>
      </div>
    )
  }
  // vertical (reels/shorts/UGC)
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: accent }}
      >
        <Play className="w-4 h-4 text-white" fill="white" strokeWidth={0} />
      </div>
      <div
        className="absolute bottom-2 left-2 right-8 space-y-1"
        aria-hidden
      >
        <div
          className="h-1.5 rounded-full"
          style={{ background: accent, width: "50%" }}
        />
        <div
          className="h-1.5 rounded-full"
          style={{ background: `${accent}55`, width: "75%" }}
        />
      </div>
      <div
        className="absolute bottom-2 right-2 flex flex-col gap-1"
        aria-hidden
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ background: `${accent}44` }}
        />
        <div
          className="w-4 h-4 rounded-full"
          style={{ background: `${accent}33` }}
        />
      </div>
    </div>
  )
}
