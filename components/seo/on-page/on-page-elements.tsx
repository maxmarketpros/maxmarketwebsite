import { SectionHeader } from "@/components/ui/section-header"
import {
  Type,
  Tag,
  Heading1,
  Link2,
  Braces,
  Image as ImageIcon,
  ListTree,
  ScanSearch,
  FileText,
  CheckCircle2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Element = {
  n: string
  Icon: LucideIcon
  label: string
  tune: string
  before: string
  after: string
}

const elements: Element[] = [
  {
    n: "01",
    Icon: Type,
    label: "Title tag",
    tune: "Primary keyword, modifier, brand — in that order, ≤60 chars.",
    before: "12 chars",
    after: "58 chars",
  },
  {
    n: "02",
    Icon: Tag,
    label: "Meta description",
    tune: "Search-intent match, CTR hook, ≤155 chars, primary keyword once.",
    before: "missing",
    after: "150 chars",
  },
  {
    n: "03",
    Icon: Heading1,
    label: "H1 & heading hierarchy",
    tune: "One H1 per page, keyword-led; H2/H3 tree that maps to intent.",
    before: "3× H1",
    after: "Clean tree",
  },
  {
    n: "04",
    Icon: Link2,
    label: "URL slug",
    tune: "Short, semantic, hyphenated; no parameters, no stop words.",
    before: "/p?id=42",
    after: "/on-page-seo",
  },
  {
    n: "05",
    Icon: Braces,
    label: "Schema markup",
    tune: "JSON-LD on every URL: Article, FAQ, Service, Breadcrumb.",
    before: "0 types",
    after: "3–5 types",
  },
  {
    n: "06",
    Icon: ImageIcon,
    label: "Image alt text",
    tune: "Descriptive, keyword-rich, no stuffing; width/height set.",
    before: "0% alts",
    after: "100% alts",
  },
  {
    n: "07",
    Icon: ListTree,
    label: "Internal linking",
    tune: "Semantic anchors, pillar↔cluster flow, 3–8 links per page.",
    before: "0 links",
    after: "6 links",
  },
  {
    n: "08",
    Icon: ScanSearch,
    label: "Keyword placement",
    tune: "Primary term in first 100 words, H1, one H2, meta, slug.",
    before: "Random",
    after: "Placed",
  },
  {
    n: "09",
    Icon: FileText,
    label: "Entity & topical depth",
    tune: "Named entities, semantic siblings, content covers full intent.",
    before: "320 wds",
    after: "1,800 wds",
  },
  {
    n: "10",
    Icon: CheckCircle2,
    label: "E-E-A-T signals",
    tune: "Byline, credentials, updated date, Organization + Person schema.",
    before: "None",
    after: "Full stack",
  },
]

export function OnPageElements() {
  return (
    <section
      id="on-page-elements"
      aria-labelledby="on-page-elements-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What we optimize"
          heading={
            <span id="on-page-elements-heading">
              The <span className="accent-underline">10</span> on-page
              elements we tune on every{" "}
              <span className="whitespace-nowrap">page.</span>
            </span>
          }
          paragraph="Every on-page SEO engagement ships the same 10-element framework. Each element is measured, tuned, and re-measured against a target query set — so Google has no ambiguity about what each page is for."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {elements.map((el) => (
            <div
              key={el.n}
              className="relative card-surface card-surface-hover overflow-hidden group"
              style={{ borderRadius: "var(--radius-lg)", padding: "18px" }}
            >
              {/* Corner aura */}
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                    style={{
                      background: "rgba(22,119,255,0.1)",
                      color: "#1677FF",
                    }}
                  >
                    <el.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[10.5px] font-bold tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {el.n}
                  </span>
                </div>
                <h3
                  className="mt-3 text-[15.5px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {el.label}
                </h3>
                <p
                  className="mt-1.5 text-[13px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {el.tune}
                </p>

                {/* Before → after pill */}
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono font-semibold">
                  <span
                    className="px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      color: "#DC2626",
                    }}
                  >
                    {el.before}
                  </span>
                  <span style={{ color: "var(--muted)" }}>→</span>
                  <span
                    className="px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#059669",
                    }}
                  >
                    {el.after}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
