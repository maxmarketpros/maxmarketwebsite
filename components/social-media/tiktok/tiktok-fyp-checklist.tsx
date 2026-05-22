import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  ArrowRight,
  Timer,
  RotateCcw,
  Share2,
  MessageCircle,
  Zap,
  Hash,
  Music2,
} from "lucide-react"

type Signal = {
  Icon: typeof Timer
  name: string
  weight: string
  detail: string
  score: number
  color: string
}

const signals: Signal[] = [
  {
    Icon: Zap,
    name: "Hook completion",
    weight: "Critical",
    detail: "First 1.5s must hold the viewer. We script and test 3 hook variants per concept.",
    score: 96,
    color: "#FE2C55",
  },
  {
    Icon: Timer,
    name: "Watch-time %",
    weight: "Critical",
    detail: "Aim for 65%+ average watch-through. Loops engineered into edits where the niche allows.",
    score: 92,
    color: "#22D3EE",
  },
  {
    Icon: RotateCcw,
    name: "Re-watches",
    weight: "High",
    detail: "Tight 18–22s edits, payoff at the end, encourages a second viewing on the loop.",
    score: 88,
    color: "#0EA5E9",
  },
  {
    Icon: Share2,
    name: "Shares-to-views",
    weight: "High",
    detail: "Saveable / share-worthy formats: lists, hot-takes, before/afters, niche revelations.",
    score: 84,
    color: "#A855F7",
  },
  {
    Icon: MessageCircle,
    name: "Comments-to-views",
    weight: "Medium",
    detail: "Built-in comment bait — open questions, mild disagreements, ranked opinions.",
    score: 79,
    color: "#EC4899",
  },
  {
    Icon: Music2,
    name: "Sound trend half-life",
    weight: "Medium",
    detail: "Only ride a trending sound while it has 48h+ half-life left. Otherwise: original audio.",
    score: 90,
    color: "#F59E0B",
  },
  {
    Icon: Hash,
    name: "Caption keyword density",
    weight: "Medium",
    detail: "TikTok now indexes captions for in-app search. Niche keywords baked into every caption.",
    score: 86,
    color: "#22C55E",
  },
]

export function TiktokFypChecklist() {
  return (
    <section
      id="tiktok-fyp-checklist"
      aria-labelledby="tiktok-fyp-checklist-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <SectionHeader
              pill="FYP optimization"
              heading={
                <span id="tiktok-fyp-checklist-heading">
                  How our TikTok marketing services tune for the{" "}
                  <span className="whitespace-nowrap">
                    <span className="accent-underline">FYP</span>.
                  </span>
                </span>
              }
              paragraph="The For You Page algorithm doesn&rsquo;t care that you posted. It cares about seven specific signals. We score every TikTok against them before it goes live — and after, in the weekly retro."
              centered={false}
            />

            <p
              className="mt-5 text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Want this scoring system applied to your existing account? Pair it
              with{" "}
              <a
                href="/services/social-media/management"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                full-stack social media management
              </a>{" "}
              for cross-platform consistency.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              See a sample audit on your account
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "7 ranking signals",
                "Pre-post scoring",
                "Weekly retro",
                "Keyword-rich captions",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            <div
              className="rounded-[var(--radius-xl)] p-5 sm:p-6"
              style={{
                background:
                  "linear-gradient(180deg, #0B0B0F 0%, #14141C 100%)",
                border: "1px solid #2A2A36",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), 0 24px 60px rgba(0,0,0,0.30)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="relative w-2 h-2 rounded-full"
                    style={{
                      background: "#25F4EE",
                      boxShadow: "0 0 0 3px rgba(37,244,238,0.18)",
                      animation: "subtlePulse 1.4s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "#7DEBE8" }}
                  >
                    Live · FYP scorecard
                  </span>
                </div>
                <span
                  className="text-[10.5px] font-mono tracking-[0.06em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Avg score · 87.9
                </span>
              </div>

              <ul className="space-y-2.5">
                {signals.map((s, idx) => (
                  <li
                    key={s.name}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 rounded-[var(--radius-sm)]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      animation: `fadeInUp 0.5s ease-out ${0.05 * idx}s both`,
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                      style={{
                        background: `${s.color}1A`,
                        color: s.color,
                        boxShadow: `inset 0 0 0 1px ${s.color}33`,
                      }}
                    >
                      <s.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="text-[13.5px] font-bold"
                          style={{ color: "#fff" }}
                        >
                          {s.name}
                        </span>
                        <span
                          className="text-[9.5px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                          style={{
                            background: `${s.color}26`,
                            color: s.color,
                          }}
                        >
                          {s.weight}
                        </span>
                      </div>
                      <div
                        className="text-[11.5px] leading-[1.45] mb-2"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {s.detail}
                      </div>
                      <div
                        className="relative w-full h-[6px] rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        <div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{
                            width: `${s.score}%`,
                            background: `linear-gradient(90deg, ${s.color}AA 0%, ${s.color} 100%)`,
                            boxShadow: `0 0 12px ${s.color}88`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span
                        className="text-[20px] font-extrabold leading-none tracking-[-0.02em]"
                        style={{ color: s.color }}
                      >
                        {s.score}
                      </span>
                      <span
                        className="text-[9.5px] font-mono uppercase tracking-[0.08em] mt-0.5"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        / 100
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-4 flex items-center justify-between px-3 py-3 rounded-[var(--radius-sm)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(37,244,238,0.10) 0%, rgba(254,44,85,0.10) 100%)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span
                  className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Verdict
                </span>
                <span
                  className="text-[12.5px] font-bold"
                  style={{ color: "#fff" }}
                >
                  Cleared for posting · projected FYP fit 88%
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)]"
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
                Want this scorecard run on your last 30 TikToks?
              </span>
              <SecondaryButton asLink href="#contact">
                Get a free FYP audit
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
