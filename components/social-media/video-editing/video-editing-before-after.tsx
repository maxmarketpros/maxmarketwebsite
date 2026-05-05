import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, TrendingUp, Scissors, Layers, Volume2 } from "lucide-react"

type Row = {
  industry: string
  industryColor: string
  beforeNote: string
  beforeRuntime: string
  afterRuntime: string
  hook: string
  caption1: string
  caption2: string
  metrics: { label: string; value: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[]
}

const rows: Row[] = [
  {
    industry: "HVAC ride-along",
    industryColor: "#1677FF",
    beforeNote: "Raw 4-min ride-along · shaky · no captions · dead 18s intro",
    beforeRuntime: "4:12",
    afterRuntime: "0:38",
    hook: "Your AC is dying — here's why",
    caption1: "Tech opens the unit",
    caption2: "Capacitor BLOWN",
    metrics: [
      { label: "Watch-time", value: "+312%", Icon: TrendingUp },
      { label: "Jump cuts", value: "84", Icon: Scissors },
      { label: "B-roll layers", value: "12", Icon: Layers },
      { label: "Sound design", value: "18 SFX", Icon: Volume2 },
    ],
  },
  {
    industry: "Restaurant chef demo",
    industryColor: "#EC4899",
    beforeNote: "Vertical phone clip · plating only · no audio mix · no payoff",
    beforeRuntime: "2:48",
    afterRuntime: "0:42",
    hook: "Why this dish costs $48",
    caption1: "Hand-pulled in 30s",
    caption2: "Wagyu A5 · finished",
    metrics: [
      { label: "Saves", value: "+418%", Icon: TrendingUp },
      { label: "Jump cuts", value: "62", Icon: Scissors },
      { label: "B-roll layers", value: "9", Icon: Layers },
      { label: "Sound design", value: "14 SFX", Icon: Volume2 },
    ],
  },
  {
    industry: "Contractor jobsite walkthrough",
    industryColor: "#22C55E",
    beforeNote: "30-min site tour · no narrative · no captions · vertical only",
    beforeRuntime: "31:04",
    afterRuntime: "0:54",
    hook: "I saved this homeowner $14k",
    caption1: "Cracked footer found",
    caption2: "Fixed in 3 days",
    metrics: [
      { label: "Avg view %", value: "+267%", Icon: TrendingUp },
      { label: "Jump cuts", value: "104", Icon: Scissors },
      { label: "B-roll layers", value: "16", Icon: Layers },
      { label: "Sound design", value: "22 SFX", Icon: Volume2 },
    ],
  },
]

export function VideoEditingBeforeAfter() {
  return (
    <section
      id="video-editing-before-after"
      aria-labelledby="video-editing-before-after-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Raw clip → polished post"
          heading={
            <span id="video-editing-before-after-heading">
              Real video editing transformations from{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">service businesses</span>
              </span>
            </span>
          }
          paragraph="See exactly what professional video editing services for service businesses change about your raw footage — pacing, hook, captions, B-roll, color, sound. Same shoot. Different feed."
        />

        <div className="mt-12 space-y-8 sm:space-y-10">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-xl)] p-5 sm:p-6 lg:p-7"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(247,250,252,0.92) 100%)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.06), 0 16px 40px rgba(17,35,68,0.08)",
              }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.1em]"
                  style={{
                    background: `${row.industryColor}1A`,
                    color: row.industryColor,
                  }}
                >
                  {row.industry}
                </span>
                <span
                  className="text-[12px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  Vertical short-form video editing
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-5 md:gap-6">
                {/* BEFORE */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-[0.14em]"
                      style={{
                        background: "var(--bg)",
                        color: "var(--muted)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      Before · raw
                    </span>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {row.beforeRuntime}
                    </span>
                  </div>
                  <BeforeFrame note={row.beforeNote} runtime={row.beforeRuntime} />
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                      color: "#fff",
                      boxShadow: "0 8px 22px rgba(22,119,255,0.40)",
                    }}
                  >
                    <ArrowRight className="w-6 h-6" strokeWidth={2.75} />
                  </span>
                </div>

                {/* AFTER */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-[0.14em]"
                      style={{
                        background:
                          "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                        color: "#fff",
                      }}
                    >
                      After · edited
                    </span>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: "var(--accent)" }}
                    >
                      {row.afterRuntime}
                    </span>
                  </div>
                  <AfterFrame
                    hook={row.hook}
                    caption1={row.caption1}
                    caption2={row.caption2}
                    runtime={row.afterRuntime}
                    accent={row.industryColor}
                  />
                </div>
              </div>

              {/* Metric strip */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {row.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-[var(--radius-sm)]"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        background: `${row.industryColor}1A`,
                        color: row.industryColor,
                      }}
                    >
                      <m.Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <div
                        className="text-[10px] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="text-[14.5px] font-extrabold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeFrame({ note, runtime }: { note: string; runtime: string }) {
  return (
    <div
      className="relative aspect-[9/16] max-w-[200px] mx-auto rounded-[14px] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #4B5563 0%, #1F2937 100%)",
        border: "1px solid rgba(0,0,0,0.20)",
        boxShadow: "inset 0 0 30px rgba(0,0,0,0.40)",
      }}
    >
      {/* Tilted frame to suggest shaky handheld */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(105deg, rgba(255,255,255,0.02) 0 8px, rgba(0,0,0,0.06) 8px 14px)",
          transform: "rotate(-1.5deg) scale(1.05)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <span
          className="self-start px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.1em]"
          style={{
            background: "rgba(0,0,0,0.55)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {runtime}
        </span>
        <p
          className="text-[10px] leading-[1.35] text-center px-1"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {note}
        </p>
        <span
          className="self-center w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="rgba(255,255,255,0.5)" />
          </svg>
        </span>
      </div>
    </div>
  )
}

function AfterFrame({
  hook,
  caption1,
  caption2,
  runtime,
  accent,
}: {
  hook: string
  caption1: string
  caption2: string
  runtime: string
  accent: string
}) {
  return (
    <div
      className="relative aspect-[9/16] max-w-[200px] mx-auto rounded-[14px] overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${accent} 0%, #1677FF 50%, #0B132B 100%)`,
        boxShadow: `0 0 0 2px rgba(255,255,255,0.10), 0 18px 40px ${accent}55`,
      }}
    >
      {/* Hook chip */}
      <div
        className="absolute top-3 left-3 right-3 px-2 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-[0.04em] text-center leading-tight"
        style={{
          background: "rgba(11,19,43,0.82)",
          color: "#FFE066",
        }}
      >
        {hook}
      </div>

      {/* Center play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.30)",
          }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M0 0L12 7L0 14V0Z" fill="#0B132B" />
          </svg>
        </span>
      </div>

      {/* Captions */}
      <div className="absolute bottom-9 left-0 right-0 flex flex-col items-center gap-1 px-2">
        <span
          className="px-1.5 py-0.5 rounded-sm text-[9px] font-extrabold uppercase tracking-[0.04em]"
          style={{ background: "#FFFFFF", color: "#0B132B" }}
        >
          {caption1}
        </span>
        <span
          className="px-1.5 py-0.5 rounded-sm text-[9px] font-extrabold uppercase tracking-[0.04em]"
          style={{ background: "#FFE066", color: "#0B132B" }}
        >
          {caption2}
        </span>
      </div>

      {/* Progress */}
      <div className="absolute bottom-2 left-3 right-3">
        <div
          className="h-[3px] rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.30)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: "62%", background: "#fff" }}
          />
        </div>
        <div
          className="mt-0.5 flex items-center justify-between text-[9px] font-mono"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <span>{runtime}</span>
          <span>HD · 9:16</span>
        </div>
      </div>
    </div>
  )
}
