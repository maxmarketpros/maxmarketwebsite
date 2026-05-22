import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Sparkles,
  TrendingUp,
  Eye,
  ThumbsUp,
  PlayCircle,
  Bell,
  Search,
  MoreVertical,
  Mic,
  Share2,
  Download,
  Scissors,
  Plus,
  Subtitles,
  Settings,
  Maximize,
} from "lucide-react"

const proofPills = [
  { Icon: PlayCircle, label: "8–12 long-form videos / mo" },
  { Icon: Scissors, label: "30+ YouTube Shorts / mo" },
  { Icon: Eye, label: "Watch-time engineered" },
  { Icon: TrendingUp, label: "Channel SEO + thumbnails" },
]

export function YoutubeHero() {
  return (
    <section
      aria-labelledby="youtube-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* YouTube red top-right */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.18) 0%, rgba(255,0,0,0.04) 45%, transparent 72%)",
          }}
        />
        {/* Brand blue bottom-left */}
        <div
          className="absolute bottom-[-12%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.04) 45%, transparent 70%)",
          }}
        />
        {/* Cyan mid-right */}
        <div
          className="absolute top-[40%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 65%)",
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
              YouTube Marketing Services
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,0,0,0.10) 0%, rgba(22,119,255,0.10) 100%)",
                borderColor: "rgba(255,0,0,0.32)",
                color: "#B91C1C",
              }}
            >
              <img
                src={icons8Url("3J8ksELUwTUa", 64)}
                alt="YouTube logo"
                width={16}
                height={16}
                className="inline-block"
                style={{ width: 16, height: 16 }}
              />
              YouTube marketing services · Done-for-you
            </span>

            <h1
              id="youtube-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Done-for-you{" "}
              <span className="accent-underline">YouTube</span> marketing.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We script, shoot, edit, optimize, and publish a long-form +{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                YouTube Shorts
              </span>{" "}
              engine that compounds — engineered for watch time, click-through
              rate, and channel SEO. Pair with{" "}
              <a
                href="/services/social-media/video-editing"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                video editing
              </a>{" "}
              or{" "}
              <a
                href="/services/seo"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                SEO
              </a>{" "}
              for the full search-to-subscribe loop. One team, one monthly
              invoice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a YouTube strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="#youtube-scope">
                See what&rsquo;s included
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,0,0,0.18) 0%, rgba(22,119,255,0.18) 100%)",
                      color: "#B91C1C",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: YouTube Studio + watch-page mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <YoutubeWatchShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function YoutubeWatchShowcase() {
  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: 540, height: 660 }}
    >
      {/* Glow halo behind */}
      <div
        aria-hidden
        className="absolute inset-x-6 bottom-2 h-24 rounded-[40px] blur-3xl opacity-90"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,0,0,0.45) 0%, rgba(22,119,255,0.45) 100%)",
        }}
      />

      {/* Watch-page card */}
      <div
        className="relative mx-auto"
        style={{
          width: "min(100%, 480px)",
          borderRadius: 24,
          background: "#0F0F0F",
          boxShadow:
            "0 1px 4px rgba(17,35,68,0.20), 0 40px 80px rgba(255,0,0,0.28), 0 30px 60px rgba(22,119,255,0.22), inset 0 0 0 1px rgba(255,255,255,0.05)",
          padding: 14,
          overflow: "hidden",
          animation: "fadeInUp 0.9s ease-out 0.15s both",
        }}
      >
        {/* Top bar (mini YouTube chrome) */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center"
              style={{
                width: 26,
                height: 18,
                background: "#FF0000",
                borderRadius: 4,
              }}
            >
              <span
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "7px solid #fff",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  marginLeft: 2,
                }}
              />
            </span>
            <span
              className="text-[13px] font-bold tracking-[-0.01em]"
              style={{ color: "#fff" }}
            >
              YouTube
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px]"
              style={{
                background: "#222",
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Search className="w-3 h-3" strokeWidth={2.5} />
              roof inspection near me
            </span>
            <Mic className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.7)" }} />
            <MoreVertical className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.7)" }} />
          </div>
        </div>

        {/* Player */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "16 / 9",
            borderRadius: 12,
            background:
              "linear-gradient(135deg, #1A1A22 0%, #1F1212 50%, #0B132B 100%)",
          }}
        >
          {/* Scene gradients */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 30% 25%, rgba(255,0,0,0.32) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 80% 80%, rgba(22,119,255,0.28) 0%, transparent 60%)",
            }}
          />
          {/* Subject silhouette */}
          <div
            aria-hidden
            className="absolute"
            style={{
              left: "50%",
              top: "55%",
              transform: "translate(-50%, -50%)",
              width: "44%",
              height: "70%",
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 75%)",
              filter: "blur(3px)",
            }}
          />
          {/* Big "STOP" headline overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
            <span
              className="text-center font-extrabold leading-[0.95] tracking-[-0.025em]"
              style={{
                color: "#fff",
                fontSize: 30,
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.65), 1.5px 0 0 rgba(255,0,0,0.5), -1.5px 0 0 rgba(22,119,255,0.5)",
              }}
            >
              <span style={{ color: "#FFD600" }}>STOP</span> Hiring
              <br />
              The Wrong Roofer
            </span>
            <span
              className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,0,0,0.85)",
                color: "#fff",
              }}
            >
              ▶ 0:08 · Hook
            </span>
          </div>

          {/* CC + settings + fullscreen */}
          <div className="absolute right-2 top-2 flex items-center gap-1.5 z-30" aria-hidden>
            <Subtitles className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.85)" }} />
            <Settings className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.85)" }} />
            <Maximize className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.85)" }} />
          </div>

          {/* Progress bar */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[3px] z-30"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: "32%",
                background: "#FF0000",
                boxShadow: "0 0 6px rgba(255,0,0,0.6)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                left: "calc(32% - 5px)",
                top: -4,
                width: 11,
                height: 11,
                background: "#FF0000",
                boxShadow: "0 0 0 3px rgba(255,0,0,0.25)",
              }}
            />
          </div>
        </div>

        {/* Title row */}
        <div className="mt-3 px-1">
          <div
            className="text-[14.5px] font-bold leading-[1.3] tracking-[-0.01em]"
            style={{ color: "#fff" }}
          >
            STOP Hiring The Wrong Roofer (Watch This First)
          </div>
          <div
            className="mt-1 text-[11.5px] flex items-center gap-1.5"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            142,318 views · 3 days ago
            <span
              className="px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.08em]"
              style={{ background: "rgba(255,0,0,0.18)", color: "#FF6B6B" }}
            >
              Trending
            </span>
          </div>
        </div>

        {/* Channel + actions */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #FF0000 0%, #1677FF 100%)",
                border: "1.5px solid #fff",
                color: "#fff",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              M
            </span>
            <div className="leading-tight">
              <div
                className="text-[12px] font-bold"
                style={{ color: "#fff" }}
              >
                @maxmarketpros
              </div>
              <div
                className="text-[10px]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                48.2K subscribers
              </div>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold"
            style={{ background: "#fff", color: "#0F0F0F" }}
          >
            <Bell className="w-3 h-3" strokeWidth={2.5} />
            Subscribe
          </span>
        </div>

        {/* Like / Share / Save row */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto px-1">
          {[
            { Icon: ThumbsUp, label: "12K" },
            { Icon: Share2, label: "Share" },
            { Icon: Download, label: "Save" },
            { Icon: Scissors, label: "Clip" },
            { Icon: Plus, label: "Save" },
          ].map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
              style={{
                background: "#272727",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              <b.Icon className="w-3 h-3" strokeWidth={2.5} />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Floating accents */}

      {/* Top-left: CTR chip */}
      <div
        className="absolute top-0 left-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(135deg, #FF0000 0%, #B91C1C 100%)",
          boxShadow:
            "0 2px 6px rgba(255,0,0,0.35), 0 14px 32px rgba(255,0,0,0.30)",
          color: "#fff",
          transform: "rotate(-5deg)",
        }}
      >
        <Eye className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">11.8%</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            CTR
          </span>
        </div>
      </div>

      {/* Top-right: Watch time chip */}
      <div
        className="absolute top-2 right-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #EBF4FF 100%)",
          border: "1px solid rgba(22,119,255,0.30)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 14px 32px rgba(22,119,255,0.18)",
          transform: "rotate(6deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #1677FF 0%, #0D5FD9 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <PlayCircle className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Watch time
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            6:42 avg
          </span>
        </div>
      </div>

      {/* Mid-left: Subs chip */}
      <div
        className="absolute z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          left: -18,
          top: "44%",
          background: "linear-gradient(180deg, #fff 0%, #FFF6F6 100%)",
          border: "1px solid rgba(255,0,0,0.28)",
          boxShadow:
            "0 2px 6px rgba(255,0,0,0.20), 0 12px 28px rgba(255,0,0,0.18)",
          transform: "rotate(-4deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FF0000 0%, #B91C1C 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(255,0,0,0.35)",
          }}
        >
          <Bell className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            New subs / mo
          </span>
          <span
            className="text-[12.5px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +4,820
          </span>
        </div>
      </div>

      {/* Bottom-right: Subs growth chip */}
      <div
        className="absolute -bottom-1 right-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #EBF4FF 100%)",
          border: "1px solid rgba(22,119,255,0.30)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.18)",
          transform: "rotate(4deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #1677FF 0%, #0D5FD9 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            6-mo growth
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +280%
          </span>
        </div>
      </div>
    </div>
  )
}
