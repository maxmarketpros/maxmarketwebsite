import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Youtube, Linkedin, Pin } from "lucide-react"

type Format = {
  ratio: string
  ratioClass: string
  label: string
  platforms: { name: string; logo?: string; iconId?: string; brand: string }[]
  length: string
  hook: string
  accent: string
  bg: string
}

const formats: Format[] = [
  {
    ratio: "9:16",
    ratioClass: "aspect-[9/16]",
    label: "Reels & Shorts",
    platforms: [
      { name: "Instagram", iconId: "32323", brand: "#E1306C" },
      { name: "TikTok", iconId: "118640", brand: "#0B132B" },
      { name: "YouTube Shorts", brand: "#FF0000" },
    ],
    length: "7–60s",
    hook: "Hook ≤ 1.5s",
    accent: "#EC4899",
    bg: "linear-gradient(160deg, #EC4899 0%, #1677FF 100%)",
  },
  {
    ratio: "1:1",
    ratioClass: "aspect-square",
    label: "Feed Video",
    platforms: [
      { name: "Instagram", iconId: "32323", brand: "#E1306C" },
      { name: "Facebook", iconId: "118497", brand: "#1877F2" },
    ],
    length: "30–90s",
    hook: "Hook ≤ 2s",
    accent: "#1677FF",
    bg: "linear-gradient(160deg, #1677FF 0%, #74D3FF 100%)",
  },
  {
    ratio: "4:5",
    ratioClass: "aspect-[4/5]",
    label: "Feed Ad",
    platforms: [
      { name: "Instagram", iconId: "32323", brand: "#E1306C" },
      { name: "Facebook", iconId: "118497", brand: "#1877F2" },
    ],
    length: "15–30s",
    hook: "Hook ≤ 1s",
    accent: "#0EA5E9",
    bg: "linear-gradient(160deg, #0EA5E9 0%, #6366F1 100%)",
  },
  {
    ratio: "16:9",
    ratioClass: "aspect-video",
    label: "Long-form",
    platforms: [
      { name: "YouTube", brand: "#FF0000" },
      { name: "LinkedIn", iconId: "13930", brand: "#0A66C2" },
    ],
    length: "3–10 min",
    hook: "Hook ≤ 8s",
    accent: "#FF0000",
    bg: "linear-gradient(160deg, #FF0000 0%, #F59E0B 100%)",
  },
  {
    ratio: "16:9",
    ratioClass: "aspect-video",
    label: "In-stream Ad",
    platforms: [
      { name: "YouTube", brand: "#FF0000" },
      { name: "Facebook", iconId: "118497", brand: "#1877F2" },
    ],
    length: "6 / 15 / 30s",
    hook: "Frame 1 brand",
    accent: "#F59E0B",
    bg: "linear-gradient(160deg, #F59E0B 0%, #EC4899 100%)",
  },
  {
    ratio: "9:16",
    ratioClass: "aspect-[9/16]",
    label: "Story Loops",
    platforms: [
      { name: "Instagram", iconId: "32323", brand: "#E1306C" },
      { name: "Facebook", iconId: "118497", brand: "#1877F2" },
    ],
    length: "15s loops",
    hook: "Tappable",
    accent: "#A855F7",
    bg: "linear-gradient(160deg, #A855F7 0%, #EC4899 100%)",
  },
  {
    ratio: "9:16",
    ratioClass: "aspect-[9/16]",
    label: "Idea Pins",
    platforms: [{ name: "Pinterest", brand: "#E60023" }],
    length: "15–60s",
    hook: "Searchable",
    accent: "#E60023",
    bg: "linear-gradient(160deg, #E60023 0%, #F59E0B 100%)",
  },
  {
    ratio: "16:9",
    ratioClass: "aspect-video",
    label: "B-roll & Webinars",
    platforms: [
      { name: "YouTube", brand: "#FF0000" },
      { name: "LinkedIn", iconId: "13930", brand: "#0A66C2" },
    ],
    length: "30–60s clips",
    hook: "Repurpose",
    accent: "#22C55E",
    bg: "linear-gradient(160deg, #22C55E 0%, #0EA5E9 100%)",
  },
]

export function VideoEditingFormats() {
  return (
    <section
      aria-labelledby="video-editing-formats-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Every aspect ratio · every platform"
          heading={
            <span id="video-editing-formats-heading">
              Video editing for every format your{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">platform</span>
              </span>{" "}
              demands
            </span>
          }
          paragraph="One raw shoot, eight platform-native edits. We deliver vertical, square, and horizontal video editing exports tuned to each platform's algorithm, length sweet-spot, and hook window."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {formats.map((f, i) => (
            <article
              key={i}
              className="group relative rounded-[var(--radius-lg)] p-3 sm:p-4 transition-all hover:translate-y-[-2px]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 2px rgba(17,35,68,0.04), 0 8px 24px rgba(17,35,68,0.06)",
              }}
            >
              {/* Aspect ratio frame */}
              <div
                className={`relative ${f.ratioClass} rounded-[var(--radius-sm)] overflow-hidden mx-auto`}
                style={{
                  background: f.bg,
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.20), 0 6px 16px rgba(17,35,68,0.18)",
                  maxWidth: f.ratio === "9:16" ? "55%" : "100%",
                }}
              >
                {/* Aspect badge */}
                <span
                  className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9.5px] font-extrabold uppercase tracking-[0.08em]"
                  style={{
                    background: "rgba(11,19,43,0.82)",
                    color: "#fff",
                  }}
                >
                  {f.ratio}
                </span>

                {/* Hook chip */}
                <span
                  className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.06em]"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: f.accent,
                  }}
                >
                  {f.hook}
                </span>

                {/* Mock caption stack */}
                <div className="absolute inset-x-3 bottom-3 flex flex-col items-center gap-1">
                  <span
                    className="block w-3/5 h-[6px] rounded-sm"
                    style={{ background: "rgba(255,255,255,0.95)" }}
                  />
                  <span
                    className="block w-4/5 h-[6px] rounded-sm"
                    style={{ background: "#FFE066" }}
                  />
                </div>

                {/* Center play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    }}
                  >
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path
                        d="M0 0L12 7L0 14V0Z"
                        fill="#0B132B"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Label */}
              <div className="mt-3.5">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="text-[14.5px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {f.label}
                  </h3>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded"
                    style={{
                      background: `${f.accent}1A`,
                      color: f.accent,
                    }}
                  >
                    {f.length}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  {f.platforms.map((p, j) =>
                    p.iconId ? (
                      <span
                        key={j}
                        className="w-5 h-5 rounded-md flex items-center justify-center"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                        }}
                        title={p.name}
                      >
                        <img
                          src={icons8Url(p.iconId, 64)}
                          alt={`${p.name} video editing logo`}
                          width={14}
                          height={14}
                          loading="lazy"
                          decoding="async"
                          className="w-[14px] h-[14px] object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        key={j}
                        className="w-5 h-5 rounded-md flex items-center justify-center"
                        style={{ background: p.brand, color: "#fff" }}
                        title={p.name}
                      >
                        {p.name === "YouTube" || p.name === "YouTube Shorts" ? (
                          <Youtube className="w-3 h-3" strokeWidth={0} fill="#fff" />
                        ) : p.name === "LinkedIn" ? (
                          <Linkedin className="w-3 h-3" strokeWidth={0} fill="#fff" />
                        ) : (
                          <Pin className="w-3 h-3" strokeWidth={2.5} />
                        )}
                      </span>
                    ),
                  )}
                  <span
                    className="text-[11px] font-medium ml-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {f.platforms.map((p) => p.name).join(" · ")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Need a custom aspect ratio for ad testing?
          </span>
          <SecondaryButton asLink href="#contact">
            Talk to a video editor
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
