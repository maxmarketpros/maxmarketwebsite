import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Folder, FileText, Globe } from "lucide-react"

type Status = "200" | "301" | "404" | "noindex"
type Node = {
  path: string
  status: Status
  label: string
  kind: "root" | "folder" | "file"
  depth: number
  note?: string
}

const nodes: Node[] = [
  { path: "/", status: "200", label: "Homepage", kind: "root", depth: 0 },
  { path: "/services/", status: "200", label: "Services hub", kind: "folder", depth: 1 },
  { path: "/services/seo/", status: "200", label: "SEO hub", kind: "folder", depth: 2 },
  { path: "/services/seo/local", status: "200", label: "Local SEO", kind: "file", depth: 3 },
  { path: "/services/seo/on-page", status: "200", label: "On-Page SEO", kind: "file", depth: 3 },
  { path: "/services/seo/off-page", status: "200", label: "Off-Page SEO", kind: "file", depth: 3 },
  { path: "/blog/", status: "200", label: "Blog", kind: "folder", depth: 1 },
  { path: "/blog/old-post", status: "301", label: "301 → /blog/new-post", kind: "file", depth: 2, note: "Flattened to one hop" },
  { path: "/old-products/", status: "404", label: "Remove or redirect", kind: "folder", depth: 1, note: "Blocking crawl budget" },
  { path: "/admin/", status: "noindex", label: "Disallowed in robots", kind: "folder", depth: 1 },
]

const statusMeta: Record<
  Status,
  { bg: string; fg: string; label: string }
> = {
  "200": { bg: "rgba(16,185,129,0.12)", fg: "#059669", label: "200" },
  "301": { bg: "rgba(245,158,11,0.15)", fg: "#B45309", label: "301" },
  "404": { bg: "rgba(239,68,68,0.15)", fg: "#DC2626", label: "404" },
  noindex: { bg: "rgba(100,116,139,0.15)", fg: "#475569", label: "noindex" },
}

export function TechnicalCrawlTree() {
  return (
    <section
      id="technical-crawl-tree"
      aria-labelledby="technical-crawl-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Crawl audit"
          heading={
            <span id="technical-crawl-heading">
              What{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Googlebot</span>
              </span>{" "}
              sees.
            </span>
          }
          paragraph="Every URL is a vote for crawl budget. We map your site tree, mark broken branches, and prune what drains authority."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: crawl tree */}
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-2 px-5 py-3 border-b"
              style={{
                background:
                  "linear-gradient(180deg, #FEF2F2 0%, #FFF7ED 100%)",
                borderColor: "var(--border-color)",
              }}
            >
              <Globe
                className="w-4 h-4"
                strokeWidth={2.25}
                style={{ color: "#DC2626" }}
              />
              <span
                className="text-[12px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Crawl tree · maxmarketpros.com
              </span>
              <span
                className="ml-auto text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                1,284 URLs
              </span>
            </div>

            {/* Tree body */}
            <div className="p-4 sm:p-5 font-mono">
              {nodes.map((n, idx) => {
                const isRoot = n.kind === "root"
                const meta = statusMeta[n.status]
                const Icon = n.kind === "file" ? FileText : Folder
                return (
                  <div
                    key={n.path + idx}
                    className="relative flex items-center gap-2 py-1.5 text-[12.5px]"
                    style={{
                      paddingLeft: n.depth * 16,
                    }}
                  >
                    {/* Connector line */}
                    {!isRoot && (
                      <span
                        aria-hidden
                        className="absolute"
                        style={{
                          left: (n.depth - 1) * 16 + 8,
                          top: 0,
                          bottom: "50%",
                          width: 1,
                          background: "rgba(239,68,68,0.2)",
                        }}
                      />
                    )}
                    {!isRoot && (
                      <span
                        aria-hidden
                        className="absolute"
                        style={{
                          left: (n.depth - 1) * 16 + 8,
                          top: "50%",
                          width: 10,
                          height: 1,
                          background: "rgba(239,68,68,0.2)",
                        }}
                      />
                    )}
                    <Icon
                      className="w-3.5 h-3.5 shrink-0"
                      strokeWidth={2.25}
                      style={{
                        color: n.status === "404" ? "#DC2626" : "var(--muted)",
                      }}
                    />
                    <span
                      className="truncate"
                      style={{
                        color:
                          n.status === "200"
                            ? "var(--ink)"
                            : "var(--muted)",
                        textDecoration: n.status === "404" ? "line-through" : "none",
                        fontWeight: isRoot ? 700 : 500,
                      }}
                    >
                      {n.path}
                    </span>
                    <span
                      className="shrink-0 inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-bold"
                      style={{
                        background: meta.bg,
                        color: meta.fg,
                      }}
                    >
                      {meta.label}
                    </span>
                    {n.note && (
                      <span
                        className="truncate text-[11px] italic"
                        style={{ color: "var(--muted)" }}
                      >
                        {n.note}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Footer stats */}
            <div
              className="px-5 py-3 border-t grid grid-cols-3 gap-2 text-[11px]"
              style={{
                background: "#FAFBFE",
                borderColor: "var(--border-color)",
              }}
            >
              <StatusStat color="#10B981" count="1,247" label="Indexable" />
              <StatusStat color="#F59E0B" count="23" label="Redirects" />
              <StatusStat color="#EF4444" count="14" label="Broken" />
            </div>
          </div>

          {/* Right: copy + CTA */}
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Broken crawl, broken rankings.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Every 404, redirect chain, or orphan URL wastes crawl budget
              Googlebot could be spending on your money pages. We find them,
              fix them, and ship a clean crawl tree.
            </p>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Technical SEO compounds with{" "}
              <a
                href="/services/seo/off-page"
                className="font-semibold underline decoration-[#EF4444]/40 underline-offset-4 hover:decoration-[#EF4444]"
                style={{ color: "var(--ink)" }}
              >
                off-page SEO
              </a>{" "}
              — authority can&rsquo;t flow through broken crawl paths.
            </p>

            <div className="mt-6">
              <SecondaryButton asLink href="#contact">
                Audit my crawl tree
              </SecondaryButton>
            </div>

            <ul
              className="mt-6 pt-6 border-t space-y-2 text-[14px]"
              style={{ borderColor: "var(--border-color)" }}
            >
              {[
                "Full-site crawl with Screaming Frog",
                "Redirect-chain flattening",
                "Orphan-URL discovery",
                "404 cleanup + smart 301s",
                "Canonical tag audit",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-2"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#EF4444" }}
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatusStat({
  color,
  count,
  label,
}: {
  color: string
  count: string
  label: string
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
      />
      <span
        className="font-mono font-bold"
        style={{ color: "var(--ink)" }}
      >
        {count}
      </span>
      <span style={{ color: "var(--muted)" }}>{label}</span>
    </div>
  )
}
