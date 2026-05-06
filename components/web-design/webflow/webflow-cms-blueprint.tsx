import { SectionHeader } from "@/components/ui/section-header"
import {
  MapPin,
  Wrench,
  FileText,
  User,
  ArrowRight,
  Hash,
  Image as ImageIcon,
  ToggleRight,
  Link as LinkIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WF_BLUE = "#146EF5"
const WF_PURPLE = "#4353FF"

type FieldType = {
  Icon: LucideIcon
  label: string
}

type Collection = {
  Icon: LucideIcon
  name: string
  count: number
  slug: string
  color: string
  fields: FieldType[]
}

const collections: Collection[] = [
  {
    Icon: MapPin,
    name: "Service Areas",
    count: 18,
    slug: "/areas/[slug]",
    color: "#22C55E",
    fields: [
      { Icon: Hash, label: "Name" },
      { Icon: Hash, label: "ZIPs" },
      { Icon: ImageIcon, label: "Hero photo" },
    ],
  },
  {
    Icon: Wrench,
    name: "Services",
    count: 12,
    slug: "/services/[slug]",
    color: WF_BLUE,
    fields: [
      { Icon: Hash, label: "Title" },
      { Icon: ToggleRight, label: "Featured?" },
      { Icon: ImageIcon, label: "Cover" },
      { Icon: LinkIcon, label: "→ Areas" },
    ],
  },
  {
    Icon: FileText,
    name: "Case Studies",
    count: 24,
    slug: "/case-studies/[slug]",
    color: WF_PURPLE,
    fields: [
      { Icon: Hash, label: "Client" },
      { Icon: Hash, label: "Result" },
      { Icon: ImageIcon, label: "Gallery" },
      { Icon: LinkIcon, label: "→ Services" },
      { Icon: LinkIcon, label: "→ Author" },
    ],
  },
  {
    Icon: User,
    name: "Authors",
    count: 4,
    slug: "/authors/[slug]",
    color: "#F59E0B",
    fields: [
      { Icon: Hash, label: "Name" },
      { Icon: Hash, label: "Role" },
      { Icon: ImageIcon, label: "Headshot" },
    ],
  },
]

const dynamicPages = [
  { route: "/services/[slug]", count: 12, label: "Service pages" },
  { route: "/areas/[slug]", count: 18, label: "Local landing pages" },
  { route: "/case-studies/[slug]", count: 24, label: "Case study pages" },
]

export function WebflowCmsBlueprint() {
  return (
    <section
      id="webflow-cms"
      aria-labelledby="webflow-cms-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,110,245,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="CMS · Collections + dynamic pages"
          heading={
            <span id="webflow-cms-heading">
              One template,{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  fifty-four pages
                </span>
                .
              </span>
            </span>
          }
          paragraph="A real Webflow website design earns its keep when the CMS does the typing for you. We model your services, areas, case studies, and authors as Collections — so 54 dynamic pages render from 4 templates."
        />

        {/* Collections graph */}
        <div
          className="mt-12 relative rounded-[var(--radius-xl)] p-5 sm:p-8"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 32px var(--shadow-color)",
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 relative">
            {collections.map((c, i) => (
              <CollectionCard key={c.name} c={c} index={i} />
            ))}

            {/* Reference arrow lines (decorative, only on lg) */}
            <svg
              aria-hidden
              className="hidden lg:block absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="cms-arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M0,0 L10,5 L0,10 z" fill={WF_BLUE} />
                </marker>
              </defs>
              {/* Services → Areas (top row, right→left) */}
              <line
                x1="50%"
                y1="22%"
                x2="50%"
                y2="22%"
                stroke={WF_BLUE}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
                markerEnd="url(#cms-arrow)"
              />
              {/* Case Studies → Services (vertical) */}
              <line
                x1="50%"
                y1="78%"
                x2="50%"
                y2="22%"
                stroke={WF_PURPLE}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Reference labels */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[11.5px]">
            <ReferenceTag color={WF_BLUE} label="Services → Areas (multi-ref)" />
            <ReferenceTag color={WF_PURPLE} label="Case Studies → Services (1:N)" />
            <ReferenceTag color="#F59E0B" label="Case Studies → Author (1:1)" />
          </div>
        </div>

        {/* Dynamic pages strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {dynamicPages.map((p, i) => (
            <div
              key={p.route}
              className="card-surface card-surface-hover p-5"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.05 * i + 0.2}s both`,
              }}
            >
              <div
                className="font-mono text-[11.5px] px-2 py-1 rounded inline-block"
                style={{
                  background: "rgba(20,110,245,0.10)",
                  color: WF_BLUE,
                  fontWeight: 600,
                }}
              >
                {p.route}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span
                  className="text-[32px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{ color: "var(--ink)" }}
                >
                  ×{p.count}
                </span>
                <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                  {p.label}
                </span>
              </div>
              <p className="mt-2 text-[12.5px]" style={{ color: "var(--muted)" }}>
                Renders from one template — edit the Collection, every page updates.
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[14px] max-w-[640px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Total: <strong style={{ color: "var(--ink)" }}>54 dynamic pages from 4 templates</strong> — every URL indexed,
          every page schema-tagged, every field editable by you.
        </p>
      </div>
    </section>
  )
}

function CollectionCard({ c, index }: { c: Collection; index: number }) {
  return (
    <div
      className="rounded-[var(--radius-lg)] p-5 relative z-[1]"
      style={{
        background: "var(--surface)",
        border: `1.5px solid ${c.color}33`,
        boxShadow: `0 8px 24px ${c.color}1A`,
        animation: `fadeInUp 0.6s ease-out ${0.05 * index}s both`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-[10px] flex items-center justify-center"
            style={{
              background: `linear-gradient(180deg, ${c.color} 0%, ${c.color}DD 100%)`,
              color: "#fff",
              boxShadow: `0 4px 12px ${c.color}55`,
            }}
          >
            <c.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
          </span>
          <div>
            <h3 className="text-[15.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
              {c.name}
            </h3>
            <span
              className="text-[10.5px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              {c.slug}
            </span>
          </div>
        </div>
        <span
          className="shrink-0 text-[11px] font-extrabold px-2 py-1 rounded-full"
          style={{
            background: `${c.color}1A`,
            color: c.color,
            border: `1px solid ${c.color}33`,
          }}
        >
          {c.count} items
        </span>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-1.5">
        {c.fields.map((f) => (
          <li
            key={f.label}
            className="flex items-center gap-1.5 text-[11.5px] px-2 py-1 rounded"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
              color: "var(--ink)",
            }}
          >
            <f.Icon className="w-3 h-3 shrink-0" style={{ color: c.color }} strokeWidth={2.5} />
            <span className="truncate">{f.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ReferenceTag({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color }} />
      <span
        className="font-medium"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </span>
    </span>
  )
}
