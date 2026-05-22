import { SectionHeader } from "@/components/ui/section-header"
import { Link2, Tag, Heading1, FileText, Braces, ListTree } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Layer = {
  n: string
  Icon: LucideIcon
  title: string
  tune: string
  preview: React.ReactNode
}

const layers: Layer[] = [
  {
    n: "01",
    Icon: Link2,
    title: "URL & slug",
    tune: "Short, semantic, keyword-led. No parameters, no stop words.",
    preview: (
      <span className="font-mono text-[11.5px]" style={{ color: "#1677FF" }}>
        /on-page-seo
      </span>
    ),
  },
  {
    n: "02",
    Icon: Tag,
    title: "Title tag + meta description",
    tune: "The SERP snippet. 60 chars + 155 chars, keyword-first, intent-matched.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        SERP preview
      </span>
    ),
  },
  {
    n: "03",
    Icon: Heading1,
    title: "H1 + heading tree",
    tune: "One H1 per page; H2s map to sub-intents; H3s carry entities.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        H1 → 4 H2 → 9 H3
      </span>
    ),
  },
  {
    n: "04",
    Icon: FileText,
    title: "Body content + entities",
    tune: "Word count matches intent. Entities, semantic siblings, E-E-A-T.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        1,820 words · 34 entities
      </span>
    ),
  },
  {
    n: "05",
    Icon: Braces,
    title: "Schema markup",
    tune: "JSON-LD types declared. Rich results unlocked. Breadcrumbs wired.",
    preview: (
      <span
        className="font-mono text-[10.5px] px-1.5 py-0.5 rounded"
        style={{
          background: "rgba(245,158,11,0.12)",
          color: "#B4730E",
        }}
      >
        {'{ "@type": "Article" }'}
      </span>
    ),
  },
  {
    n: "06",
    Icon: ListTree,
    title: "Internal links",
    tune: "Semantic anchors, pillar↔cluster topology, 3–8 outbound per page.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        6 internal · 2 pillar
      </span>
    ),
  },
]

export function OnPageStack() {
  return (
    <section
      id="on-page-stack"
      aria-labelledby="on-page-stack-heading"
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
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The on-page stack"
          heading={
            <span id="on-page-stack-heading">
              Every layer Google{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">reads</span>,
              </span>{" "}
              tuned in order.
            </span>
          }
          paragraph="On-page SEO is a stack. Each layer compounds — a great H1 can't rescue a bad title, and great copy can't rescue missing schema. We ship all six, always."
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
              Most freelancers tune titles and call it on-page SEO. We tune
              the whole stack — URL slug through internal linking — because
              Google&apos;s classifier reads all six signals together.
              Skipping a layer caps your ceiling.
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
                style={{ color: "#1677FF" }}
              >
                How to read this stack
              </div>
              <p
                className="mt-2 text-[14px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Top layer is what Google sees first (the URL); bottom is what
                it sees last (outbound links). Every on-page SEO audit we
                deliver is scored against this exact stack.
              </p>
            </div>
          </div>

          {/* Right: vertical stack diagram */}
          <div className="relative">
            <ol className="space-y-3">
              {layers.map((layer, idx) => (
                <li
                  key={layer.n}
                  className="relative card-surface card-surface-hover group"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 18px",
                    borderLeft: "3px solid #74D3FF",
                    transform: `translateX(${idx * 8}px)`,
                    maxWidth: "calc(100% - 48px)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span
                        className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                        style={{
                          background: "rgba(22,119,255,0.1)",
                          color: "#1677FF",
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
                        {layer.tune}
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
