import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  FileText,
  Layers,
  Wand2,
  PackageCheck,
} from "lucide-react"

type Tool = {
  letters: string
  brand: string
  bg: string
  name: string
  role: string
}

const tools: Tool[] = [
  {
    letters: "Pr",
    brand: "#9999FF",
    bg: "#1B0F3D",
    name: "Adobe Premiere Pro",
    role: "Master timeline · multi-cam · subclip workflow",
  },
  {
    letters: "Ae",
    brand: "#D291FF",
    bg: "#1A0033",
    name: "Adobe After Effects",
    role: "Motion graphics · lower-thirds · kinetic captions",
  },
  {
    letters: "DR",
    brand: "#FF453A",
    bg: "#1B1B1F",
    name: "DaVinci Resolve",
    role: "Color grade · sound mix · Fairlight finishing",
  },
  {
    letters: "FCP",
    brand: "#A1A1AA",
    bg: "#0F0F12",
    name: "Final Cut Pro",
    role: "FCPX-native delivery · Apple ProRes mastering",
  },
  {
    letters: "CC",
    brand: "#25F4EE",
    bg: "#0B132B",
    name: "CapCut Pro",
    role: "TikTok-native edits · trending effect templates",
  },
  {
    letters: "F",
    brand: "#5BBE89",
    bg: "#0F1B14",
    name: "Frame.io",
    role: "Client review · timestamped notes · version stacks",
  },
  {
    letters: "Ds",
    brand: "#A78BFA",
    bg: "#0F0F2A",
    name: "Descript",
    role: "AI transcript editing · filler-word removal",
  },
  {
    letters: "Rs",
    brand: "#7C3AED",
    bg: "#1A0F33",
    name: "Riverside",
    role: "Remote interview audio · 4K local recording",
  },
]

const workflow = [
  {
    Icon: FileText,
    title: "Brief",
    detail: "Hook, CTA, brand-style guide, and selects logged in Frame.io.",
    color: "#1677FF",
  },
  {
    Icon: Layers,
    title: "Assembly",
    detail: "Premiere Pro timeline cut to story · paper-edit reviewed.",
    color: "#0EA5E9",
  },
  {
    Icon: Wand2,
    title: "Polish",
    detail: "After Effects motion · DaVinci color · Fairlight sound mix.",
    color: "#A855F7",
  },
  {
    Icon: PackageCheck,
    title: "Master",
    detail: "ProRes master + 4 platform-native exports + SRT delivered.",
    color: "#22C55E",
  },
]

export function VideoEditingToolstack() {
  return (
    <section
      aria-labelledby="video-editing-toolstack-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Industry-standard editing software"
          heading={
            <span id="video-editing-toolstack-heading">
              Edited in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">pro software</span>
              </span>
              , delivered for any timeline
            </span>
          }
          paragraph="No CapCut-only freelancer hacks. Our video editing services run on the same Adobe + Blackmagic stack used by Hollywood post houses — color, sound, motion graphics, and review portal included."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 items-start">
          {/* Tool grid */}
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
                  <span
                    className="text-[15px] font-extrabold tracking-[-0.02em]"
                    style={{
                      color: t.brand,
                      fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    }}
                  >
                    {t.letters}
                  </span>
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

          {/* Workflow */}
          <div
            className="rounded-[var(--radius-xl)] p-6 lg:sticky lg:top-24"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 12px 30px rgba(17,35,68,0.06)",
            }}
          >
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em]"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
                border: "1px solid rgba(22,119,255,0.25)",
              }}
            >
              Editing workflow
            </span>
            <h3
              className="mt-4 text-[20px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Four steps from raw footage to platform-native exports.
            </h3>

            <ol className="mt-5 space-y-5 relative">
              {/* Connector */}
              <span
                aria-hidden
                className="absolute left-[19px] top-2 bottom-2 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, #1677FF 0%, #0EA5E9 33%, #A855F7 66%, #22C55E 100%)",
                  opacity: 0.35,
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
                Brief us on a video edit
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
