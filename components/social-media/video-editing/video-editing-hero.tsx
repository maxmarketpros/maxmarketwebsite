import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Clapperboard,
  Clock,
  Captions,
  RefreshCcw,
  Scissors,
  Music2,
  Sparkles,
  Play,
  Wand2,
} from "lucide-react"

const proofPills = [
  { Icon: Clock, label: "<48hr turnaround" },
  { Icon: Clapperboard, label: "Reels · Shorts · TikTok" },
  { Icon: Captions, label: "Captions + SFX included" },
  { Icon: RefreshCcw, label: "Unlimited revisions" },
]

export function VideoEditingHero() {
  return (
    <section
      aria-labelledby="video-editing-hero-heading"
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
              "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)",
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
              Video Editing
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
              Video Editing · Done-for-you
            </span>

            <h1
              id="video-editing-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Video editing that ships in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">48 hours</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Professional{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                video editing services
              </span>{" "}
              for service businesses — Reels, TikToks, YouTube Shorts, ad cuts
              and long-form videos edited by a senior video editor with
              platform-native exports, captions, color grading and unlimited
              revisions. One social media video editor on retainer, zero
              freelancer roulette.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="#video-editing-before-after">
                See sample edits
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

          {/* Right: Editor showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <EditorShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function EditorShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(253,244,255,0.95) 100%)",
          border: "1px solid rgba(236,72,153,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(236,72,153,0.18)",
        }}
      />

      {/* Main card — editor window */}
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
                background: "#EF4444",
                boxShadow: "0 0 0 3px rgba(239,68,68,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#FCA5A5" }}
            >
              REC · Editing timeline
            </span>
          </div>
          <span
            className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            00:00:42:18 / 00:01:32:04
          </span>
        </div>

        {/* Preview window — 9:16 frame */}
        <div
          className="relative px-4 sm:px-6 pt-5 pb-4 flex justify-center"
          style={{
            background:
              "linear-gradient(180deg, #0B132B 0%, #1B2547 100%)",
          }}
        >
          <div
            className="relative w-[200px] aspect-[9/16] rounded-[18px] overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #1677FF 0%, #74D3FF 45%, #EC4899 100%)",
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.10), 0 18px 40px rgba(22,119,255,0.35)",
            }}
          >
            {/* Hook overlay */}
            <div
              className="absolute top-3 left-3 right-3 px-2.5 py-1.5 rounded-md text-[11px] font-extrabold uppercase tracking-[0.04em] text-center"
              style={{
                background: "rgba(11,19,43,0.78)",
                color: "#FFE066",
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Don&rsquo;t buy a roof
            </div>

            {/* Center play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                }}
              >
                <Play
                  className="w-5 h-5"
                  strokeWidth={0}
                  fill="#0B132B"
                  style={{ marginLeft: 2 }}
                />
              </span>
            </div>

            {/* Caption bars */}
            <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-1 px-3">
              <span
                className="block px-2 py-0.5 rounded-sm text-[10px] font-extrabold tracking-[0.02em]"
                style={{
                  background: "#FFFFFF",
                  color: "#0B132B",
                  textTransform: "uppercase",
                }}
              >
                Until you watch
              </span>
              <span
                className="block px-2 py-0.5 rounded-sm text-[10px] font-extrabold tracking-[0.02em]"
                style={{
                  background: "#FFE066",
                  color: "#0B132B",
                  textTransform: "uppercase",
                }}
              >
                THIS first.
              </span>
            </div>

            {/* Bottom progress + chrome */}
            <div className="absolute bottom-2 left-3 right-3">
              <div
                className="h-[3px] rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.30)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "46%", background: "#fff" }}
                />
              </div>
              <div
                className="mt-1 flex items-center justify-between text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span>0:42</span>
                <span>0:32</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="px-4 sm:px-5 pt-4 pb-5"
          style={{
            background: "linear-gradient(180deg, #0F1A36 0%, #0B132B 100%)",
          }}
        >
          {/* Ruler */}
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-[9.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Sequence · 9:16 · 30fps
            </span>
            <span
              className="text-[9.5px] font-mono"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              0:00 ─── 0:32
            </span>
          </div>

          {/* Tracks */}
          <div className="space-y-1.5">
            {/* Video track */}
            <div className="relative h-7 rounded-md overflow-hidden flex"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {[
                { w: 18, c: "#1677FF" },
                { w: 14, c: "#74D3FF" },
                { w: 22, c: "#1677FF" },
                { w: 10, c: "#EC4899" },
                { w: 18, c: "#74D3FF" },
                { w: 18, c: "#1677FF" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="h-full border-r flex items-center px-1.5"
                  style={{
                    width: `${b.w}%`,
                    background: `linear-gradient(180deg, ${b.c}EE 0%, ${b.c}AA 100%)`,
                    borderColor: "rgba(11,19,43,0.6)",
                  }}
                >
                  <span
                    className="text-[8.5px] font-bold uppercase tracking-[0.06em] truncate"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    Cut {142 + i}
                  </span>
                </div>
              ))}
              {/* Playhead */}
              <span
                aria-hidden
                className="absolute top-[-6px] bottom-[-6px] w-[2px]"
                style={{
                  left: "46%",
                  background: "#FFE066",
                  boxShadow: "0 0 8px rgba(255,224,102,0.6)",
                }}
              />
            </div>

            {/* Audio waveform track */}
            <div
              className="relative h-7 rounded-md overflow-hidden flex items-end gap-[2px] px-1"
              style={{
                background: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.20)",
              }}
            >
              {Array.from({ length: 64 }).map((_, i) => {
                const h = 18 + Math.abs(Math.sin(i * 0.7) * 10) + ((i * 13) % 9)
                return (
                  <span
                    key={i}
                    className="w-[3px] rounded-sm"
                    style={{
                      height: `${Math.min(24, h)}px`,
                      background: "#22C55E",
                      opacity: 0.85,
                    }}
                  />
                )
              })}
            </div>

            {/* Captions track */}
            <div
              className="relative h-6 rounded-md flex items-center gap-1 px-1"
              style={{
                background: "rgba(255,224,102,0.08)",
                border: "1px solid rgba(255,224,102,0.20)",
              }}
            >
              {[
                { w: 22, l: "DON'T" },
                { w: 28, l: "buy a roof" },
                { w: 18, l: "until" },
                { w: 30, l: "watch this" },
              ].map((c, i) => (
                <span
                  key={i}
                  className="h-[16px] rounded-sm px-1.5 inline-flex items-center text-[8.5px] font-extrabold uppercase tracking-[0.04em]"
                  style={{
                    width: `${c.w}%`,
                    background: "#FFE066",
                    color: "#0B132B",
                  }}
                >
                  {c.l}
                </span>
              ))}
            </div>
          </div>
        </div>

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
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                color: "#fff",
              }}
            >
              <Wand2 className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
            <span
              className="text-[11px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Edited by your senior video editor
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            <Scissors className="w-3 h-3" strokeWidth={2.5} />
            142 cuts · 18 SFX
          </span>
        </div>
      </div>

      {/* Top-left: Turnaround badge */}
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
        <Clock className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">48hr</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            delivery
          </span>
        </div>
      </div>

      {/* Top-right: Captions chip */}
      <div
        className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FFFBEB 100%)",
          border: "1px solid rgba(245,158,11,0.30)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.20), 0 14px 32px rgba(245,158,11,0.18)",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(245,158,11,0.35)",
          }}
        >
          <Captions className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Captions
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +SRT
          </span>
        </div>
      </div>

      {/* Bottom-right: SFX chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FDF2F8 100%)",
          border: "1px solid rgba(236,72,153,0.30)",
          boxShadow:
            "0 2px 6px rgba(236,72,153,0.18), 0 12px 28px rgba(236,72,153,0.14)",
          transform: "rotate(3deg)",
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
          <Music2 className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Sound design
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +SFX
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
