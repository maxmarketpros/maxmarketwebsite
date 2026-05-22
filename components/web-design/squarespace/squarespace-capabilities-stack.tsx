import { SectionHeader } from "@/components/ui/section-header"
import {
  Network,
  Layers,
  Search,
  MousePointerClick,
  Gauge,
  LineChart,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Layer = {
  n: string
  Icon: LucideIcon
  title: string
  body: string
  preview: React.ReactNode
}

const layers: Layer[] = [
  {
    n: "01",
    Icon: Network,
    title: "Information architecture & sitemap",
    body: "Page tree, URL slugs, navigation, and intent grouping mapped before a single block is dragged into Fluid Engine.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        12 pages · 4 hubs
      </span>
    ),
  },
  {
    n: "02",
    Icon: Layers,
    title: "Custom design system in Fluid Engine",
    body: "Type scale, color tokens, button variants, and section blocks built once — reused every page so the brand doesn't drift.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        Outfit · Inter · 4 tokens
      </span>
    ),
  },
  {
    n: "03",
    Icon: Search,
    title: "SEO foundation",
    body: "Title tags, meta descriptions, JSON-LD schema, alt text, sitemap.xml, and clean URL slugs on every page.",
    preview: (
      <span
        className="font-mono text-[10.5px] px-1.5 py-0.5 rounded"
        style={{
          background: "rgba(22,119,255,0.12)",
          color: "#1677FF",
        }}
      >
        {'{ "@type": "Service" }'}
      </span>
    ),
  },
  {
    n: "04",
    Icon: MousePointerClick,
    title: "Conversion blocks",
    body: "Above-the-fold CTA, sticky mobile call button, lead-capture forms wired to your CRM, and trust strips that close the loop.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        4 CTA pathways
      </span>
    ),
  },
  {
    n: "05",
    Icon: Gauge,
    title: "Performance",
    body: "Image compression, font deferral, asset trimming, and a Lighthouse pass before launch — Squarespace can be fast when tuned.",
    preview: (
      <span
        className="font-mono text-[10.5px] px-1.5 py-0.5 rounded"
        style={{
          background: "rgba(34,197,94,0.12)",
          color: "#15803D",
        }}
      >
        Lighthouse 92
      </span>
    ),
  },
  {
    n: "06",
    Icon: LineChart,
    title: "Analytics & tracking",
    body: "GA4, Meta Pixel, GTM, and Squarespace's native analytics — all wired to fire on real conversions, not page views.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        GA4 · GTM · Pixel
      </span>
    ),
  },
]

export function SquarespaceCapabilitiesStack() {
  return (
    <section
      id="squarespace-capabilities"
      aria-labelledby="squarespace-capabilities-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,11,11,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The full stack"
          heading={
            <span id="squarespace-capabilities-heading">
              Built into every Squarespace website design we{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ship</span>.
              </span>
            </span>
          }
          paragraph="Most Squarespace builds stop at theme + colors. We ship the whole stack — IA, design system, SEO, conversion, performance, and analytics — because skipping any layer caps your ceiling."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: copy + sticky legend */}
          <div className="lg:sticky lg:top-28">
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Six layers. Zero shortcuts.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Squarespace is powerful when you respect what it can do — and lean
              into custom CSS where defaults stop. Our Squarespace website
              design process tunes every layer in the same order, every project.
            </p>
            <div
              className="mt-6 p-5 rounded-[var(--radius-lg)] border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#0B0B0B" }}
              >
                How to read this stack
              </div>
              <p
                className="mt-2 text-[14px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Top is the foundation (architecture); bottom is the proof
                (analytics). Every Squarespace website design audit we deliver
                is scored against this exact stack.
              </p>
            </div>
          </div>

          {/* Right: vertical stack */}
          <div className="relative">
            <ol className="space-y-3">
              {layers.map((layer, idx) => (
                <li
                  key={layer.n}
                  className="relative card-surface card-surface-hover"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 18px",
                    borderLeft: "3px solid #0B0B0B",
                    transform: `translateX(${idx * 8}px)`,
                    maxWidth: "calc(100% - 48px)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span
                        className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                        style={{
                          background: "rgba(11,11,11,0.06)",
                          color: "#0B0B0B",
                        }}
                      >
                        <layer.Icon
                          className="w-[18px] h-[18px]"
                          strokeWidth={2.25}
                        />
                      </span>
                      <span
                        className="text-[10px] font-bold tracking-[0.08em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {layer.n}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h4
                          className="text-[16px] sm:text-[17px] font-bold leading-[1.25] tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {layer.title}
                        </h4>
                        <div className="shrink-0">{layer.preview}</div>
                      </div>
                      <p
                        className="mt-1.5 text-[13.5px] sm:text-[14px] leading-[1.55]"
                        style={{ color: "var(--muted)" }}
                      >
                        {layer.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
