import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Lightbulb,
  Mic,
  Scissors,
  Send,
  Activity,
} from "lucide-react"

type Tool = {
  kind: "logo" | "tile"
  letters?: string
  brand: string
  bg: string
  iconId?: string
  name: string
  role: string
}

const tools: Tool[] = [
  {
    kind: "logo",
    iconId: "118640",
    brand: "#FE2C55",
    bg: "#0B0B0F",
    name: "TikTok",
    role: "Native publishing · analytics · sound trends source-of-truth",
  },
  {
    kind: "tile",
    letters: "TS",
    brand: "#25F4EE",
    bg: "#0B0B0F",
    name: "TikTok Studio",
    role: "Creator-side analytics · audience demographics · post timing",
  },
  {
    kind: "tile",
    letters: "CC",
    brand: "#25F4EE",
    bg: "#0B132B",
    name: "CapCut Pro",
    role: "Trending effect templates · auto-captions · TikTok-native edits",
  },
  {
    kind: "tile",
    letters: "Pr",
    brand: "#9999FF",
    bg: "#1B0F3D",
    name: "Adobe Premiere Pro",
    role: "Master timeline · multi-cam · color grade",
  },
  {
    kind: "logo",
    iconId: "13983",
    brand: "#FF0000",
    bg: "#0B0B0F",
    name: "YouTube Shorts",
    role: "Cross-posting · long-form repurposing · second platform reach",
  },
  {
    kind: "logo",
    iconId: "32323",
    brand: "#E1306C",
    bg: "#1B0F1F",
    name: "Instagram Reels",
    role: "Cross-posting · DM funnel · story reposts",
  },
  {
    kind: "tile",
    letters: "N",
    brand: "#FFFFFF",
    bg: "#0F0F0F",
    name: "Notion",
    role: "Shared content calendar · trend log · approvals",
  },
  {
    kind: "tile",
    letters: "GA",
    brand: "#F9AB00",
    bg: "#1A1505",
    name: "Google Analytics",
    role: "Booked-job attribution · UTM tracking · landing-page lift",
  },
]

const workflow = [
  {
    Icon: Lightbulb,
    title: "Ideate",
    detail: "Trend radar + brand pillars meet in the weekly content slate.",
    color: "#22D3EE",
  },
  {
    Icon: Mic,
    title: "Shoot",
    detail: "On-site monthly shoot day. 30–60 clips locked in 4 hours.",
    color: "#0EA5E9",
  },
  {
    Icon: Scissors,
    title: "Cut",
    detail: "Vertical edit · kinetic captions · sound-trend matching.",
    color: "#EC4899",
  },
  {
    Icon: Send,
    title: "Post",
    detail: "5–7 TikToks/week at audience-peak times with FYP scoring.",
    color: "#F59E0B",
  },
  {
    Icon: Activity,
    title: "Iterate",
    detail: "Weekly retro · double-down on hooks · prune dead formats.",
    color: "#22C55E",
  },
]

export function TiktokToolstack() {
  return (
    <section
      aria-labelledby="tiktok-toolstack-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Toolstack · TikTok marketing services"
          heading={
            <span id="tiktok-toolstack-heading">
              Built on the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">tools that matter</span>
              </span>{" "}
              for TikTok
            </span>
          }
          paragraph="No CapCut-only freelancer hacks. Our TikTok marketing services run on the same publishing, editing, and analytics stack the top creators use — so every TikTok ships native to the platform and feeds your CRM."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {tools.map((t, i) => (
              <article
                key={i}
                className="group rounded-[var(--radius-lg)] p-4 transition-all hover:translate-y-[-2px]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow:
                    "0 1px 2px rgba(17,35,68,0.04), 0 6px 18px rgba(17,35,68,0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-3"
                  style={{
                    background: t.bg,
                    boxShadow: `inset 0 0 0 1px ${t.brand}55, 0 4px 12px rgba(17,35,68,0.10)`,
                  }}
                  aria-hidden
                >
                  {t.kind === "logo" && t.iconId ? (
                    <img
                      src={icons8Url(t.iconId, 128)}
                      alt={`${t.name} logo`}
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      className="w-[26px] h-[26px] object-contain"
                      style={{ filter: "brightness(1.1)" }}
                    />
                  ) : (
                    <span
                      className="text-[15px] font-extrabold tracking-[-0.02em]"
                      style={{
                        color: t.brand,
                        fontFamily: "ui-sans-serif, system-ui, sans-serif",
                      }}
                    >
                      {t.letters}
                    </span>
                  )}
                </div>
                <h3
                  className="text-[14px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {t.name}
                </h3>
                <p
                  className="mt-1 text-[12px] leading-[1.45]"
                  style={{ color: "var(--muted)" }}
                >
                  {t.role}
                </p>
              </article>
            ))}
          </div>

          <div
            className="rounded-[var(--radius-xl)] p-6 lg:sticky lg:top-24"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #F4FCFF 100%)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 12px 30px rgba(17,35,68,0.06)",
            }}
          >
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em]"
              style={{
                background: "rgba(34,211,238,0.10)",
                color: "#0891B2",
                border: "1px solid rgba(34,211,238,0.30)",
              }}
            >
              Weekly TikTok workflow
            </span>
            <h3
              className="mt-4 text-[20px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Five steps from FYP trend to booked job.
            </h3>

            <ol className="mt-5 space-y-5 relative">
              <span
                aria-hidden
                className="absolute left-[19px] top-2 bottom-2 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, #22D3EE 0%, #0EA5E9 25%, #EC4899 50%, #F59E0B 75%, #22C55E 100%)",
                  opacity: 0.4,
                }}
              />
              {workflow.map((s, i) => (
                <li key={i} className="relative flex items-start gap-3.5 pl-0">
                  <span
                    className="relative w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      background: `linear-gradient(180deg, #fff 0%, ${s.color}10 100%)`,
                      border: `2px solid ${s.color}`,
                      color: s.color,
                      boxShadow: `0 4px 12px ${s.color}33`,
                    }}
                  >
                    <s.Icon className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-[0.16em]"
                        style={{ color: s.color }}
                      >
                        Step {i + 1}
                      </span>
                      <span
                        className="text-[14.5px] font-bold"
                        style={{ color: "var(--ink)" }}
                      >
                        {s.title}
                      </span>
                    </div>
                    <p
                      className="mt-1 text-[12.5px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border-color)" }}>
              <SecondaryButton asLink href="#contact">
                Brief us on your TikTok
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
