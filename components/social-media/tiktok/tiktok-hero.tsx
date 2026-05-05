import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  TrendingUp,
  Eye,
  Share2,
  Radar,
  Heart,
  MessageCircle,
  Music2,
  Bookmark,
  Plus,
  Search,
  Home,
  Inbox,
  User,
  Volume2,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react"

const proofPills = [
  { Icon: TrendingUp, label: "+340% follower growth avg" },
  { Icon: Eye, label: "4× watch time" },
  { Icon: Share2, label: "7× share rate" },
  { Icon: Radar, label: "Viral hooks tested weekly" },
]

export function TiktokHero() {
  return (
    <section
      aria-labelledby="tiktok-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* TikTok cyan top-right */}
        <div
          className="absolute top-[-12%] right-[-6%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,244,238,0.22) 0%, rgba(37,244,238,0.05) 45%, transparent 72%)",
          }}
        />
        {/* TikTok magenta bottom-left */}
        <div
          className="absolute bottom-[-12%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(254,44,85,0.22) 0%, rgba(254,44,85,0.04) 45%, transparent 70%)",
          }}
        />
        {/* Subtle accent blue mid-right */}
        <div
          className="absolute top-[40%] right-[10%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
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
              TikTok Marketing Services
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background:
                  "linear-gradient(90deg, rgba(37,244,238,0.10) 0%, rgba(254,44,85,0.10) 100%)",
                borderColor: "rgba(37,244,238,0.32)",
                color: "#0891B2",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              TikTok marketing services · Done-for-you
            </span>

            <h1
              id="tiktok-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Done-for-you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">TikTok</span> marketing.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We script, shoot, edit, post, and grow your TikTok with weekly
              trend monitoring and{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                FYP-tuned content
              </span>{" "}
              built for service businesses. Pair it with{" "}
              <a
                href="/services/social-media/video-editing"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                video editing
              </a>{" "}
              if you only need the cuts. One team, one monthly invoice, zero
              guessing what to post next.
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
                    background: "rgba(255,255,255,0.78)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,244,238,0.18) 0%, rgba(254,44,85,0.18) 100%)",
                      color: "#0891B2",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stacked TikTok mockups */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <TiktokPhoneShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function TiktokPhoneShowcase() {
  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: 540, height: 680 }}
    >
      {/* Glow halo behind */}
      <div
        aria-hidden
        className="absolute inset-x-6 bottom-2 h-24 rounded-[40px] blur-3xl opacity-90"
        style={{
          background:
            "linear-gradient(90deg, rgba(37,244,238,0.45) 0%, rgba(254,44,85,0.45) 100%)",
        }}
      />

      {/* Phone frame */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 340,
          height: 660,
          borderRadius: 48,
          padding: 8,
          background:
            "linear-gradient(160deg, #1A1A22 0%, #0B0B0F 50%, #1A1A22 100%)",
          boxShadow:
            "0 1px 4px rgba(17,35,68,0.20), 0 40px 80px rgba(254,44,85,0.28), 0 30px 60px rgba(37,244,238,0.25), inset 0 0 0 2px rgba(255,255,255,0.04)",
          animation: "fadeInUp 0.9s ease-out 0.15s both",
        }}
      >
        {/* Screen */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: 40,
            background:
              "linear-gradient(170deg, #2A0A18 0%, #1A0825 35%, #061224 70%, #02161A 100%)",
          }}
        >
          {/* Scene gradient overlays */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(254,44,85,0.30) 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 80% 80%, rgba(37,244,238,0.30) 0%, transparent 60%)",
            }}
          />
          {/* Faux subject silhouette */}
          <div
            aria-hidden
            className="absolute"
            style={{
              left: "50%",
              top: "44%",
              transform: "translate(-50%, -50%)",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, transparent 70%)",
              filter: "blur(2px)",
            }}
          />
          <div
            aria-hidden
            className="absolute"
            style={{
              left: "50%",
              top: "62%",
              transform: "translate(-50%, 0)",
              width: 130,
              height: 200,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)",
              borderRadius: "60px 60px 0 0 / 80px 80px 0 0",
              filter: "blur(3px)",
            }}
          />
          {/* Top vignette */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-28"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)",
            }}
          />
          {/* Bottom vignette */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-44"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)",
            }}
          />

          {/* iOS status bar */}
          <div className="relative flex items-center justify-between px-6 pt-2 z-30">
            <span
              className="text-[12px] font-bold"
              style={{ color: "#fff", fontVariantNumeric: "tabular-nums" }}
            >
              9:41
            </span>
            {/* Dynamic island */}
            <span
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 top-1.5 rounded-full"
              style={{
                width: 92,
                height: 24,
                background: "#000",
              }}
            />
            <div className="flex items-center gap-1" style={{ color: "#fff" }}>
              <Signal className="w-3 h-3" strokeWidth={2.5} />
              <Wifi className="w-3 h-3" strokeWidth={2.5} />
              <BatteryFull className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>

          {/* Top tabs: LIVE | Following | For You */}
          <div className="relative flex items-center justify-center gap-5 mt-3 z-30">
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              LIVE
            </span>
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Following
            </span>
            <span
              className="relative text-[13px] font-extrabold"
              style={{ color: "#fff" }}
            >
              For You
              <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 block rounded-full"
                style={{
                  width: 18,
                  height: 2,
                  background: "#fff",
                }}
              />
            </span>
            <Search
              className="absolute right-4 w-4 h-4"
              strokeWidth={2.5}
              style={{ color: "#fff", top: -2 }}
            />
          </div>

          {/* Center hook overlay */}
          <div className="relative z-20 flex flex-col items-center justify-center pt-12 px-8">
            <span
              className="text-[10px] font-extrabold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(37,244,238,0.30) 0%, rgba(254,44,85,0.30) 100%)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span style={{ color: "#25F4EE" }}>●</span> Live · For You
            </span>
            <h3
              className="mt-4 text-center font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{
                color: "#fff",
                fontSize: 26,
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.55), 1px 0 0 rgba(254,44,85,0.55), -1px 0 0 rgba(37,244,238,0.55)",
              }}
            >
              POV: nobody told<br />you the #1 thing<br />about your roof
            </h3>
            <span
              className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              0:23 · Hook · 0/3
            </span>
          </div>

          {/* Right engagement rail */}
          <div
            className="absolute right-3 bottom-28 flex flex-col items-center gap-4 z-30"
            aria-hidden
          >
            {/* Profile + follow plus */}
            <div className="relative flex flex-col items-center">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%)",
                  border: "2px solid #fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                <span
                  className="text-[16px] font-extrabold"
                  style={{
                    color: "#fff",
                    textShadow: "1px 0 0 rgba(254,44,85,0.6), -1px 0 0 rgba(37,244,238,0.6)",
                  }}
                >
                  d
                </span>
              </span>
              <span
                className="absolute -bottom-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: "#FE2C55",
                  border: "2px solid #fff",
                }}
              >
                <Plus className="w-2.5 h-2.5" strokeWidth={3} style={{ color: "#fff" }} />
              </span>
            </div>

            {/* Like */}
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Heart
                  className="w-6 h-6"
                  strokeWidth={2}
                  fill="#FE2C55"
                  style={{ color: "#FE2C55" }}
                />
              </span>
              <span
                className="text-[10.5px] font-bold"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                412.3K
              </span>
            </div>

            {/* Comment */}
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <MessageCircle
                  className="w-6 h-6"
                  strokeWidth={2}
                  fill="#fff"
                  style={{ color: "#fff" }}
                />
              </span>
              <span
                className="text-[10.5px] font-bold"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                8,142
              </span>
            </div>

            {/* Save */}
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Bookmark
                  className="w-6 h-6"
                  strokeWidth={2}
                  fill="#FFD600"
                  style={{ color: "#FFD600" }}
                />
              </span>
              <span
                className="text-[10.5px] font-bold"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                21.4K
              </span>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Share2
                  className="w-6 h-6"
                  strokeWidth={2}
                  fill="#fff"
                  style={{ color: "#fff" }}
                />
              </span>
              <span
                className="text-[10.5px] font-bold"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                63.2K
              </span>
            </div>

            {/* Spinning sound disc */}
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #25F4EE 0%, #FE2C55 60%, #1A1A22 100%)",
                border: "2px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                animation: "tiktokDiscSpin 5s linear infinite",
              }}
            >
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{
                  background: "#0B0B0F",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              />
            </span>
          </div>

          {/* Bottom caption block */}
          <div className="absolute left-0 right-16 bottom-12 px-4 z-30">
            <div
              className="text-[14px] font-extrabold leading-tight"
              style={{
                color: "#fff",
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              @maxmarketpros
            </div>
            <div
              className="mt-1 text-[12px] leading-[1.4]"
              style={{
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 1px 2px rgba(0,0,0,0.6)",
              }}
            >
              3 questions every homeowner forgets to ask their roofer
              <span style={{ color: "#25F4EE", fontWeight: 700 }}> #hometips</span>
              <span style={{ color: "#FE2C55", fontWeight: 700 }}> #contractortok</span>
            </div>
            {/* Sound row with marquee */}
            <div
              className="mt-2 inline-flex items-center gap-1.5 max-w-full overflow-hidden"
              style={{ color: "#fff" }}
            >
              <Music2 className="w-3 h-3" strokeWidth={2.75} />
              <span
                className="text-[10.5px] font-semibold whitespace-nowrap"
                style={{
                  display: "inline-block",
                  animation: "tiktokSoundMarquee 9s linear infinite",
                }}
              >
                Lay-Outs · Remix — Original sound · 4.2M videos · trending in your niche · Lay-Outs · Remix
              </span>
            </div>
          </div>

          {/* Volume indicator */}
          <div
            className="absolute right-3 top-20 flex flex-col items-center gap-1 z-30"
            aria-hidden
          >
            <Volume2
              className="w-3.5 h-3.5"
              strokeWidth={2.5}
              style={{ color: "rgba(255,255,255,0.85)" }}
            />
          </div>

          {/* Progress bar */}
          <div
            className="absolute left-3 right-3 bottom-7 h-[2px] rounded-full overflow-hidden z-30"
            style={{ background: "rgba(255,255,255,0.22)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: "65%",
                background:
                  "linear-gradient(90deg, #25F4EE 0%, #FE2C55 100%)",
                boxShadow: "0 0 8px rgba(254,44,85,0.6)",
              }}
            />
          </div>

          {/* Bottom nav bar */}
          <div
            className="absolute left-0 right-0 bottom-0 z-30 flex items-center justify-between px-5 py-2.5"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
            aria-hidden
          >
            {[
              { Icon: Home, label: "Home", active: true },
              { Icon: Search, label: "Discover" },
              { Icon: null, label: "Create" },
              { Icon: Inbox, label: "Inbox" },
              { Icon: User, label: "Profile" },
            ].map((it, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                {it.label === "Create" ? (
                  <span
                    className="relative flex items-center justify-center"
                    style={{ width: 32, height: 22 }}
                  >
                    {/* Cyan layer */}
                    <span
                      className="absolute rounded-[6px]"
                      style={{
                        width: 28,
                        height: 20,
                        background: "#25F4EE",
                        left: -3,
                      }}
                    />
                    {/* Magenta layer */}
                    <span
                      className="absolute rounded-[6px]"
                      style={{
                        width: 28,
                        height: 20,
                        background: "#FE2C55",
                        right: -3,
                      }}
                    />
                    {/* White center */}
                    <span
                      className="relative rounded-[6px] flex items-center justify-center"
                      style={{
                        width: 28,
                        height: 20,
                        background: "#fff",
                        zIndex: 1,
                      }}
                    >
                      <Plus
                        className="w-3 h-3"
                        strokeWidth={3}
                        style={{ color: "#0B0B0F" }}
                      />
                    </span>
                  </span>
                ) : it.Icon ? (
                  <it.Icon
                    className="w-4 h-4"
                    strokeWidth={2.25}
                    style={{
                      color: it.active ? "#fff" : "rgba(255,255,255,0.7)",
                      fill: it.active ? "#fff" : "transparent",
                    }}
                  />
                ) : null}
                <span
                  className="text-[8px] font-semibold"
                  style={{
                    color: it.active ? "#fff" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {it.label}
                </span>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              bottom: 4,
              width: 110,
              height: 4,
              background: "rgba(255,255,255,0.35)",
            }}
          />
        </div>
      </div>

      {/* Floating accents */}

      {/* Top-left: Watch time chip */}
      <div
        className="absolute top-0 left-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(135deg, #25F4EE 0%, #1677FF 100%)",
          boxShadow:
            "0 2px 6px rgba(37,244,238,0.35), 0 14px 32px rgba(22,119,255,0.30)",
          color: "#fff",
          transform: "rotate(-5deg)",
        }}
      >
        <Eye className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">4×</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            watch time
          </span>
        </div>
      </div>

      {/* Top-right: Share rate chip */}
      <div
        className="absolute top-2 right-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FFE8EE 100%)",
          border: "1px solid rgba(254,44,85,0.30)",
          boxShadow:
            "0 2px 6px rgba(254,44,85,0.18), 0 14px 32px rgba(254,44,85,0.18)",
          transform: "rotate(6deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FE2C55 0%, #C2185B 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(254,44,85,0.35)",
          }}
        >
          <Share2 className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Share rate
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            7×
          </span>
        </div>
      </div>

      {/* Mid-left: Trending sound chip */}
      <div
        className="absolute z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          left: -18,
          top: "44%",
          background: "linear-gradient(180deg, #fff 0%, #F0FDFA 100%)",
          border: "1px solid rgba(34,211,238,0.32)",
          boxShadow:
            "0 2px 6px rgba(34,211,238,0.22), 0 12px 28px rgba(34,211,238,0.20)",
          transform: "rotate(-4deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #25F4EE 0%, #0891B2 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(37,244,238,0.35)",
            animation: "tiktokDiscSpin 5s linear infinite",
          }}
        >
          <Music2 className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Trending sound
          </span>
          <span
            className="text-[12.5px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            71h half-life
          </span>
        </div>
      </div>

      {/* Bottom-right: Followers chip */}
      <div
        className="absolute -bottom-1 right-0 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0FDFA 100%)",
          border: "1px solid rgba(34,211,238,0.30)",
          boxShadow:
            "0 2px 6px rgba(34,211,238,0.18), 0 12px 28px rgba(34,211,238,0.18)",
          transform: "rotate(4deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #25F4EE 0%, #0891B2 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(37,244,238,0.35)",
          }}
        >
          <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Followers
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +340%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes tiktokDiscSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tiktokSoundMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
