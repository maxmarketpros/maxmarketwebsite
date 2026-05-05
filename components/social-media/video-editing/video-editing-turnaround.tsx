import { SectionHeader } from "@/components/ui/section-header"
import {
  Upload,
  ListChecks,
  PlayCircle,
  RefreshCcw,
  PackageCheck,
  Clock,
} from "lucide-react"

type Step = {
  hour: string
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  detail: string
  progress: number
  accent: string
}

const steps: Step[] = [
  {
    hour: "Hour 0",
    Icon: Upload,
    title: "Upload raw footage",
    detail: "Drop into Frame.io or Dropbox. We accept any codec — ProRes, H.264, H.265, raw phone clips.",
    progress: 5,
    accent: "#1677FF",
  },
  {
    hour: "Hour 4",
    Icon: ListChecks,
    title: "Editor brief & selects",
    detail: "Senior video editor logs selects, builds the rough assembly, and aligns to the brand-style guide.",
    progress: 25,
    accent: "#0EA5E9",
  },
  {
    hour: "Hour 24",
    Icon: PlayCircle,
    title: "V1 cut delivered",
    detail: "First cut shipped via Frame.io with timestamped review link. Comment directly on the timeline.",
    progress: 55,
    accent: "#22C55E",
  },
  {
    hour: "Hour 36",
    Icon: RefreshCcw,
    title: "Revisions + captions",
    detail: "Revision pass folds your notes in, plus burned-in captions, SRT file, color grade, and thumbnail.",
    progress: 80,
    accent: "#F59E0B",
  },
  {
    hour: "Hour 48",
    Icon: PackageCheck,
    title: "Master + platform exports",
    detail: "ProRes master + 9:16, 1:1, 4:5, and 16:9 H.264 exports delivered to your Drive. Ready to post.",
    progress: 100,
    accent: "#EC4899",
  },
]

export function VideoEditingTurnaround() {
  return (
    <section
      aria-labelledby="video-editing-turnaround-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Upload to delivered · 48 hours"
          heading={
            <span id="video-editing-turnaround-heading">
              Short-form video editing turnaround,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">measured in hours</span>
              </span>
            </span>
          }
          paragraph="Most video editing agencies measure delivery in weeks. Our short-form video editing workflow is built to ship in 48 hours — without sacrificing color, sound design, or revision rounds."
        />

        {/* Mobile: vertical stack */}
        <div className="mt-12 lg:hidden space-y-4">
          {steps.map((s, i) => (
            <article
              key={i}
              className="relative pl-14 pr-4 py-5 rounded-[var(--radius-lg)]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
              }}
            >
              <span
                className="absolute left-4 top-5 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: `${s.accent}1A`,
                  color: s.accent,
                  boxShadow: `inset 0 0 0 1px ${s.accent}33`,
                }}
              >
                <s.Icon className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
                  style={{ color: s.accent }}
                >
                  {s.hour}
                </span>
                <span
                  className="text-[10px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  {s.progress}%
                </span>
              </div>
              <h3
                className="text-[16px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {s.title}
              </h3>
              <p
                className="mt-1 text-[13px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                {s.detail}
              </p>
              <div
                className="mt-3 h-1.5 rounded-full overflow-hidden"
                style={{ background: "var(--bg)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.progress}%`,
                    background: `linear-gradient(90deg, ${s.accent} 0%, ${s.accent}AA 100%)`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: horizontal swimlane */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[34px] h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #1677FF 0%, #0EA5E9 25%, #22C55E 50%, #F59E0B 75%, #EC4899 100%)",
                boxShadow: "0 4px 18px rgba(22,119,255,0.22)",
              }}
            />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((s, i) => (
                <article key={i} className="text-center">
                  {/* Numbered circle */}
                  <div className="flex items-center justify-center">
                    <span
                      className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(180deg, #fff 0%, ${s.accent}10 100%)`,
                        border: `2px solid ${s.accent}`,
                        boxShadow: `0 6px 18px ${s.accent}40`,
                      }}
                    >
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10.5px] font-extrabold"
                        style={{
                          background: s.accent,
                          color: "#fff",
                          boxShadow: `0 4px 10px ${s.accent}55`,
                        }}
                      >
                        {i + 1}
                      </span>
                      <s.Icon
                        className="w-6 h-6"
                        strokeWidth={2.25}
                        style={{ color: s.accent } as React.CSSProperties}
                      />
                    </span>
                  </div>

                  <div className="mt-5">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-[0.14em]"
                      style={{
                        background: `${s.accent}1A`,
                        color: s.accent,
                      }}
                    >
                      {s.hour}
                    </span>
                    <h3
                      className="mt-2 text-[15.5px] font-bold leading-tight px-2"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[12.5px] leading-[1.5] px-2"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.detail}
                    </p>
                    <div
                      className="mt-3 mx-auto max-w-[140px] h-1.5 rounded-full overflow-hidden"
                      style={{ background: "var(--bg)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.progress}%`,
                          background: `linear-gradient(90deg, ${s.accent} 0%, ${s.accent}AA 100%)`,
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Aggregate strip */}
        <div
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 rounded-[var(--radius-lg)] p-5 sm:p-6"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)",
            border: "1px solid rgba(22,119,255,0.20)",
            boxShadow: "0 1px 3px rgba(17,35,68,0.06)",
          }}
        >
          {[
            { v: "<48hr", l: "Median delivery" },
            { v: "1,000+", l: "Edits / year" },
            { v: "24hr", l: "Rush available" },
            { v: "98%", l: "On-time rate" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(22,119,255,0.30)",
                }}
              >
                <Clock className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <div>
                <div
                  className="text-[22px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{ color: "var(--ink)" }}
                >
                  {m.v}
                </div>
                <div
                  className="text-[11.5px] font-bold uppercase tracking-[0.1em] mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {m.l}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
