import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  Film,
  PenLine,
  Camera,
  Users,
  Repeat,
  Sparkles,
} from "lucide-react"
import { IG_GRADIENT_CSS, InstagramLogo } from "./instagram-ads-hero"

type Lane = {
  Icon: typeof Film
  title: string
  number: string
  bg: string
  deliverables: string[]
  weHandle: string
  youApprove: string
}

const lanes: Lane[] = [
  {
    Icon: Film,
    number: "01",
    title: "Reels editing",
    bg: "rgba(250,126,30,0.12)",
    deliverables: [
      "Hook A/B testing (5+ variants)",
      "Captions + sound design",
      "Vertical 9:16 cuts",
      "On-screen graphics",
    ],
    weHandle: "Hook tests, edits, captions, sound, exports",
    youApprove: "Final edit before it goes live",
  },
  {
    Icon: PenLine,
    number: "02",
    title: "Static & carousel design",
    bg: "rgba(214,41,118,0.12)",
    deliverables: [
      "1:1 + 4:5 feed posts",
      "Up-to-10-slide carousels",
      "Brand-locked typography",
      "Before / after templates",
    ],
    weHandle: "Concept, layout, copywriting, design",
    youApprove: "Brand voice + factual claims",
  },
  {
    Icon: Camera,
    number: "03",
    title: "UGC sourcing & licensing",
    bg: "rgba(150,47,191,0.12)",
    deliverables: [
      "Creator briefs + scripts",
      "Usage rights paperwork",
      "Post-production cleanup",
      "Whitelisting setup",
    ],
    weHandle: "Outreach, briefing, licensing, edits",
    youApprove: "Creator shortlist + offer messaging",
  },
  {
    Icon: Users,
    number: "04",
    title: "Influencer whitelisting",
    bg: "rgba(79,91,213,0.12)",
    deliverables: [
      "Partner ad permissions",
      "Run from creator handle",
      "Lookalike off creator audience",
      "Per-creator reporting",
    ],
    weHandle: "Permissions, ad setup, attribution",
    youApprove: "Partner approvals + caption tone",
  },
]

const productionStats = [
  { v: "60+", l: "Creative assets / quarter" },
  { v: "8-12", l: "Reels per month" },
  { v: "60d", l: "Creative refresh cadence" },
  { v: "<48h", l: "Brief → first cut" },
]

export function InstagramAdsCreativeStudio() {
  return (
    <section
      id="instagram-ads-creative-studio"
      aria-labelledby="instagram-ads-creative-studio-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,41,118,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: copy (sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <Pill>Creative Studio</Pill>
            <h2
              id="instagram-ads-creative-studio-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              In-house creative built for{" "}
              <span
                style={{
                  background: IG_GRADIENT_CSS,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Instagram Ads management
              </span>
              .
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[18px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Targeting is mostly solved on Instagram. Creative is the lever
              that still moves the needle &mdash; and creative is what most
              Meta agencies outsource. We don&rsquo;t. Every retainer ships
              hooks, edits, statics, carousels, UGC, and whitelisted creator
              ads from our in-house video and design team, on a 60-day refresh
              cadence so your audience never burns out.
            </p>
            <a
              href="/services/social-media/management"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              See organic Instagram management
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>

            {/* Production stats grid */}
            <ul
              className="mt-8 grid grid-cols-2 gap-2.5"
              aria-label="Creative production volume"
            >
              {productionStats.map((s) => (
                <li
                  key={s.l}
                  className="px-4 py-3 rounded-[var(--radius-md)]"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="text-[22px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{
                      background: IG_GRADIENT_CSS,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.l}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: input → connector → 4 lanes */}
          <div
            className="lg:col-span-7"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            {/* Input node */}
            <div className="relative">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Input · Your brand & offer
              </div>
              <div
                className="rounded-[var(--radius-lg)] p-5 flex items-center gap-4"
                style={{
                  background: IG_GRADIENT_CSS,
                  boxShadow:
                    "0 1px 3px rgba(214,41,118,0.18), 0 8px 22px rgba(150,47,191,0.32)",
                }}
              >
                <span
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                  }}
                >
                  <InstagramLogo size={32} />
                </span>
                <div className="min-w-0 flex-1 text-white">
                  <div className="text-[13px] font-bold uppercase tracking-[0.08em] opacity-90">
                    Discovery brief
                  </div>
                  <div className="text-[15px] font-semibold leading-tight mt-0.5">
                    Brand voice &middot; offer &middot; service area &middot;
                    proof
                  </div>
                </div>
                <Sparkles
                  className="hidden sm:block w-5 h-5 text-white/85 shrink-0"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* SVG connector lines */}
            <div
              aria-hidden
              className="relative h-12 sm:h-14 my-1"
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
                    id="ig-creative-flow"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d62976" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#962fbf" stopOpacity="0.06" />
                  </linearGradient>
                </defs>
                {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
                  <path
                    key={i}
                    d={`M 50 0 Q 50 50 ${x} 100`}
                    stroke="url(#ig-creative-flow)"
                    strokeWidth="0.7"
                    fill="none"
                  />
                ))}
              </svg>
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(250,126,30,0.12) 0%, rgba(214,41,118,0.12) 100%)",
                  color: "#B83265",
                  border: "1px solid rgba(214,41,118,0.25)",
                }}
              >
                ↓ Production · 4 lanes
              </span>
            </div>

            {/* Production lanes */}
            <div className="space-y-3 sm:space-y-4">
              {lanes.map((lane) => (
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
                  <div className="relative px-5 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 sm:gap-5 items-center">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                        style={{
                          background: IG_GRADIENT_CSS,
                          color: "#fff",
                          boxShadow: "0 4px 12px rgba(214,41,118,0.32)",
                        }}
                      >
                        <lane.Icon className="w-5 h-5" strokeWidth={2.25} />
                      </span>
                      <div>
                        <div
                          className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: "var(--muted)" }}
                        >
                          Lane {lane.number}
                        </div>
                        <h3
                          className="text-[18px] sm:text-[20px] font-bold leading-[1.15] tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {lane.title}
                        </h3>
                      </div>
                    </div>
                    <div>
                      <ul className="flex flex-wrap gap-1.5 mb-3">
                        {lane.deliverables.map((d) => (
                          <li
                            key={d}
                            className="inline-flex items-center px-2.5 py-1.5 rounded-full text-[12px] font-medium"
                            style={{
                              background: "#fff",
                              border: "1px solid rgba(214,41,118,0.22)",
                              color: "var(--ink)",
                            }}
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="text-[12px] grid grid-cols-1 sm:grid-cols-2 gap-2"
                        style={{ color: "var(--muted)" }}
                      >
                        <div>
                          <span
                            className="font-bold uppercase tracking-[0.08em] text-[10px]"
                            style={{ color: "#B83265" }}
                          >
                            We handle
                          </span>
                          <p className="mt-0.5 leading-[1.45]">
                            {lane.weHandle}
                          </p>
                        </div>
                        <div>
                          <span
                            className="font-bold uppercase tracking-[0.08em] text-[10px]"
                            style={{ color: "var(--muted)" }}
                          >
                            You approve
                          </span>
                          <p className="mt-0.5 leading-[1.45]">
                            {lane.youApprove}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Inline CTA */}
            <div
              className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(250,126,30,0.08) 0%, rgba(214,41,118,0.08) 100%)",
                border: "1px solid rgba(214,41,118,0.22)",
              }}
            >
              <span
                className="text-[14.5px] font-semibold flex items-center gap-2"
                style={{ color: "var(--ink)" }}
              >
                <Repeat
                  className="w-4 h-4 shrink-0"
                  strokeWidth={2.25}
                  style={{ color: "#B83265" }}
                />
                Want to see your monthly creative scope?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
                style={{ color: "#B83265" }}
              >
                Get a creative scope
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
