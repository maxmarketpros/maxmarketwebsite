import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ClipboardList,
  Lightbulb,
  RefreshCw,
  Package,
  ArrowRight,
} from "lucide-react"

const tools: Array<{ id: string; name: string; useFor: string; tint: string }> = [
  {
    id: "13677",
    name: "Photoshop",
    useFor: "Photo retouch · ad creative",
    tint: "#001E36",
  },
  {
    id: "13631",
    name: "Illustrator",
    useFor: "Logos · vector marks · icons",
    tint: "#330000",
  },
  {
    id: "13675",
    name: "InDesign",
    useFor: "Multi-page · decks · brochures",
    tint: "#49021F",
  },
  {
    id: "108781",
    name: "After Effects",
    useFor: "Reel covers · animated logos",
    tint: "#00005B",
  },
  {
    id: "zfHRZ6i1Wg0U",
    name: "Figma",
    useFor: "Brand kits · web · live edits",
    tint: "#1ABCFE",
  },
  {
    id: "lAWjO4LexGga",
    name: "Canva",
    useFor: "Client handoff · templated assets",
    tint: "#00C4CC",
  },
]

const workflow = [
  {
    Icon: ClipboardList,
    label: "Brief",
    sub: "Day 0",
    desc: "Send a 5-field brief or jump on a 15-min call. We write a creative spec by EOD.",
    color: "#1677FF",
  },
  {
    Icon: Lightbulb,
    label: "Concept",
    sub: "Day 1–2",
    desc: "Two creative directions with mood, type stack, and a sample asset for review.",
    color: "#EC4899",
  },
  {
    Icon: RefreshCw,
    label: "Revisions",
    sub: "Day 2–4",
    desc: "Unlimited rounds inside the chosen direction until it ships exactly right.",
    color: "#F59E0B",
  },
  {
    Icon: Package,
    label: "Final files",
    sub: "Day 5",
    desc: "Upload-ready PNGs, PDFs, MP4s, and editable source files in a packaged folder.",
    color: "#16A34A",
  },
]

export function GraphicDesignToolstack() {
  return (
    <section
      aria-labelledby="graphic-design-toolstack-heading"
      className="relative"
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Tools & Process"
          heading={
            <span id="graphic-design-toolstack-heading">
              Designed in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">pro tools</span>.
              </span>
            </span>
          }
          paragraph="Most agencies hide behind a Canva subscription. We use the same toolstack the design industry uses — Photoshop, Illustrator, InDesign, After Effects, Figma — plus Canva for handoff. Then we plug it into the same content engine behind our social media work."
        />

        <div className="mt-4 flex justify-center">
          <p
            className="text-[14.5px] text-center max-w-[560px]"
            style={{ color: "var(--muted)" }}
          >
            <a
              href="/services/social-media"
              className="font-semibold underline decoration-dotted underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              See the full social media stack →
            </a>
          </p>
        </div>

        {/* Tool logos */}
        <div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-[1080px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {tools.map((t) => (
            <div
              key={t.id}
              className="card-surface card-surface-hover relative flex flex-col items-center text-center px-4 py-5 sm:py-6"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span
                aria-hidden
                className="absolute inset-x-3 top-0 h-1 rounded-b-full"
                style={{
                  background: t.tint,
                  opacity: 0.85,
                }}
              />
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] flex items-center justify-center mb-3"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                <img
                  src={icons8Url(t.id, 128)}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div
                className="text-[14px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {t.name}
              </div>
              <div
                className="text-[11.5px] mt-0.5 leading-tight"
                style={{ color: "var(--muted)" }}
              >
                {t.useFor}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mt-16 max-w-[1080px] mx-auto">
          <div
            className="text-center mb-8 text-[11.5px] font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            How a design lands · 5-day workflow
          </div>

          {/* Connector line */}
          <div className="relative">
            <div
              aria-hidden
              className="hidden lg:block absolute top-[34px] left-[10%] right-[10%] h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #1677FF 0%, #EC4899 33%, #F59E0B 66%, #16A34A 100%)",
                opacity: 0.3,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
              {workflow.map((w, i) => (
                <div
                  key={w.label}
                  className="relative flex flex-col items-center text-center"
                >
                  <span
                    className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(180deg, ${w.color}EE 0%, ${w.color} 100%)`,
                      color: "#fff",
                      boxShadow: `0 6px 22px ${w.color}55`,
                    }}
                  >
                    <w.Icon className="w-6 h-6" strokeWidth={2.25} />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold border-2"
                      style={{
                        background: "#fff",
                        color: w.color,
                        borderColor: w.color,
                      }}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <div
                    className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: w.color }}
                  >
                    {w.sub}
                  </div>
                  <h3
                    className="mt-1 text-[18px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {w.label}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-[1.5] max-w-[220px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {w.desc}
                  </p>
                  {/* Mobile arrow */}
                  {i < workflow.length - 1 && (
                    <ArrowRight
                      className="lg:hidden mt-4 w-5 h-5"
                      strokeWidth={2.25}
                      style={{ color: "var(--muted)", transform: "rotate(90deg)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Ready to brief a designer?
          </span>
          <SecondaryButton asLink href="/contact">
            Start a project brief
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
