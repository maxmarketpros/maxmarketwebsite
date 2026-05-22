import { SectionHeader } from "@/components/ui/section-header"
import {
  Power,
  ChevronsDown,
  MousePointer2,
  Pointer,
  Move,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WF_BLUE = "#146EF5"
const WF_PURPLE = "#4353FF"

type Track = {
  Icon: LucideIcon
  name: string
  trigger: string
  /** keyframe positions in % across the track */
  keys: number[]
  color: string
  body: string
}

const tracks: Track[] = [
  {
    Icon: Power,
    name: "On-load",
    trigger: "Page open",
    keys: [3],
    color: "#22C55E",
    body: "Hero fades + lifts the moment the page paints — no Cumulative Layout Shift.",
  },
  {
    Icon: ChevronsDown,
    name: "Scroll-triggered",
    trigger: "While in view",
    keys: [22, 48, 74],
    color: WF_BLUE,
    body: "Section reveals tied to scroll position — staggered entries, parallax, sticky reveals.",
  },
  {
    Icon: MousePointer2,
    name: "Hover",
    trigger: "Cursor over",
    keys: [55, 62],
    color: WF_PURPLE,
    body: "Button lifts, color shifts, card tilts — every micro-interaction tuned in the Designer.",
  },
  {
    Icon: Pointer,
    name: "Click",
    trigger: "Tap / press",
    keys: [40, 46],
    color: "#F59E0B",
    body: "Mobile menu slides, modal fades, tabs swap — wired without a single line of JS.",
  },
  {
    Icon: Move,
    name: "Mouse-position",
    trigger: "Tracks cursor",
    keys: [],
    color: "#EC4899",
    body: "Continuous parallax — hero blob follows the cursor across the viewport.",
  },
]

export function WebflowInteractionsTimeline() {
  return (
    <section
      id="webflow-interactions"
      aria-labelledby="webflow-interactions-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(67,83,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Interactions · the motion engine"
          heading={
            <span id="webflow-interactions-heading">
              Five tracks, zero{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  JavaScript files
                </span>
                .
              </span>
            </span>
          }
          paragraph="A Webflow website design without interactions is just a brochure. Every site we build ships with five interaction layers wired in the Designer — no plugins, no script tags."
        />

        <div
          className="mt-12 rounded-[var(--radius-xl)] overflow-hidden"
          style={{
            background: "#0F1014",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 24px 60px rgba(11,19,43,0.30)",
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          {/* DAW header */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 text-[11px]"
            style={{ background: "#16171C", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span
              className="text-[9px] font-extrabold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
              style={{ background: WF_BLUE, color: "#fff" }}
            >
              ▶ Interactions 2.0
            </span>
            <span className="opacity-50">·</span>
            <span className="opacity-80">homepage.timeline</span>
            <div className="ml-auto flex items-center gap-3 opacity-70 font-mono text-[10px]">
              <span>00:44 / 02:30</span>
              <span className="px-1.5 py-0.5 rounded" style={{ background: "rgba(34,197,94,0.18)", color: "#34D399" }}>
                ● rec
              </span>
            </div>
          </div>

          {/* Ruler */}
          <div
            className="grid items-center px-4 py-2 text-[9px] font-mono"
            style={{
              gridTemplateColumns: "150px 1fr",
              background: "#0F1014",
              color: "rgba(255,255,255,0.4)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span></span>
            <div className="relative h-3">
              {[0, 25, 50, 75, 100].map((p) => (
                <span
                  key={p}
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: `${p}%` }}
                >
                  <span className="block h-2 w-px mx-auto" style={{ background: "rgba(255,255,255,0.18)" }} />
                  <span className="block mt-px text-center">{p === 0 ? "0:00" : p === 100 ? "2:30" : `${Math.round(p * 1.5) / 100 + 0.0}s`.replace(/^0+/, "") + "s"}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Tracks */}
          <div className="relative" style={{ background: "#0F1014" }}>
            {/* Playhead */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 w-[1.5px] z-10 pointer-events-none"
              style={{ left: "calc(150px + (100% - 150px - 16px) * 0.30)", background: "#fff", boxShadow: "0 0 6px rgba(255,255,255,0.5)" }}
            />

            {tracks.map((t, i) => (
              <div
                key={t.name}
                className="grid items-center px-4 py-2.5 text-[11px]"
                style={{
                  gridTemplateColumns: "150px 1fr",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                  borderBottom: i === tracks.length - 1 ? "none" : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {/* Track label */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded flex items-center justify-center"
                    style={{ background: t.color, color: "#fff" }}
                  >
                    <t.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-bold text-[11px]" style={{ color: "#fff" }}>
                      {t.name}
                    </div>
                    <div className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {t.trigger}
                    </div>
                  </div>
                </div>

                {/* Track bar */}
                <div className="relative h-7 rounded ml-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                  {/* Region fill */}
                  {t.keys.length === 0 ? (
                    <span
                      className="absolute inset-y-0 left-0 right-0 rounded"
                      style={{
                        background: `linear-gradient(90deg, ${t.color}33 0%, ${t.color}10 50%, ${t.color}33 100%)`,
                      }}
                    />
                  ) : t.keys.length > 1 ? (
                    <span
                      className="absolute inset-y-1 rounded"
                      style={{
                        left: `${Math.min(...t.keys)}%`,
                        right: `${100 - Math.max(...t.keys)}%`,
                        background: `linear-gradient(90deg, ${t.color}55 0%, ${t.color}22 100%)`,
                        border: `1px solid ${t.color}55`,
                      }}
                    />
                  ) : null}

                  {/* Keyframes */}
                  {t.keys.map((p, idx) => (
                    <span
                      key={idx}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                      style={{ left: `${p}%` }}
                    >
                      <span
                        className="block w-2.5 h-2.5 rotate-45"
                        style={{
                          background: t.color,
                          boxShadow: "0 0 0 1.5px #0F1014",
                        }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Below: 3 paused-frame previews */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tracks.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              className="card-surface p-4"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.05 * i + 0.2}s both`,
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
                  style={{ background: `${t.color}1A`, color: t.color }}
                >
                  {t.name}
                </span>
                <span className="text-[10px] font-mono" style={{ color: "var(--muted)" }}>
                  {t.keys.length || "∞"} keys
                </span>
              </div>
              <p className="text-[13px] leading-[1.55]" style={{ color: "var(--ink)" }}>
                {t.body}
              </p>
              {/* Motion blur ghost */}
              <div className="mt-3 relative h-10 rounded overflow-hidden" style={{ background: "var(--bg)" }}>
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-3 rounded"
                  style={{ left: "8%", background: `${t.color}44` }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-3 rounded"
                  style={{ left: "30%", background: `${t.color}88` }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-3 rounded"
                  style={{
                    left: "55%",
                    background: t.color,
                    boxShadow: `0 0 12px ${t.color}66`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[14px] max-w-[640px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Every interaction lives inside the .webflow file — no jQuery, no
          GSAP imports, no plugin updates to babysit.
        </p>
      </div>
    </section>
  )
}
