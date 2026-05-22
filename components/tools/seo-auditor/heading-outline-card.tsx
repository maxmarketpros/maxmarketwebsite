import { Hash } from "lucide-react"
import type { HeadingNode } from "@/lib/seo-audit/types"

const LEVEL_BG: Record<number, string> = {
  1: "rgba(22,119,255,0.12)",
  2: "rgba(116,211,255,0.18)",
  3: "var(--bg)",
  4: "var(--bg)",
  5: "var(--bg)",
  6: "var(--bg)",
}

const LEVEL_COLOR: Record<number, string> = {
  1: "var(--accent)",
  2: "#0E76C7",
  3: "var(--muted)",
  4: "var(--muted)",
  5: "var(--muted)",
  6: "var(--muted)",
}

function flatten(nodes: HeadingNode[], out: HeadingNode[] = []): HeadingNode[] {
  for (const n of nodes) {
    out.push(n)
    if (n.children.length) flatten(n.children, out)
  }
  return out
}

export function HeadingOutlineCard({ outline }: { outline: HeadingNode[] }) {
  const flat = flatten(outline)
  if (flat.length === 0) {
    return (
      <div
        className="card-surface p-5 sm:p-7"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h3
          className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          Heading outline
        </h3>
        <p className="mt-3 text-[14px]" style={{ color: "var(--muted)" }}>
          No headings detected on the page.
        </p>
      </div>
    )
  }

  const counts = flat.reduce(
    (acc, n) => {
      acc[n.level] = (acc[n.level] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            Heading outline
          </h3>
          <p
            className="mt-0.5 text-[13.5px]"
            style={{ color: "var(--muted)" }}
          >
            How your content is structured for search engines and screen readers.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((lvl) =>
            counts[lvl] ? (
              <span
                key={lvl}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold"
                style={{
                  background: LEVEL_BG[lvl],
                  color: LEVEL_COLOR[lvl],
                  border: `1px solid ${LEVEL_COLOR[lvl]}33`,
                }}
              >
                H{lvl}
                <span style={{ opacity: 0.7 }}>×{counts[lvl]}</span>
              </span>
            ) : null,
          )}
        </div>
      </div>

      <ul
        className="mt-5 max-h-[420px] overflow-y-auto pr-2 space-y-1.5"
        style={{ scrollbarWidth: "thin" }}
      >
        {flat.map((node, i) => (
          <li
            key={`${i}-${node.level}-${node.text}`}
            className="flex items-start gap-2.5 text-[13.5px] leading-relaxed"
            style={{
              paddingLeft: (node.level - 1) * 18,
              color: node.level <= 2 ? "var(--ink)" : "var(--muted)",
            }}
          >
            <span
              className="shrink-0 inline-flex items-center justify-center px-1.5 rounded text-[10px] font-bold font-mono mt-0.5"
              style={{
                background: LEVEL_BG[node.level],
                color: LEVEL_COLOR[node.level],
                minWidth: 24,
                height: 18,
              }}
            >
              H{node.level}
            </span>
            <span
              className={node.level === 1 ? "font-bold" : node.level === 2 ? "font-semibold" : ""}
            >
              {node.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
