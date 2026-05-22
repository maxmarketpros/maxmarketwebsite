// VERIFY: capability scores reflect each platform's typical out-of-the-box
// behavior on a fresh template. Headless / Pro plans on builders narrow some
// gaps but rarely close them.
const ROWS: { capability: string; scores: { custom: number; wp: number; sq: number; wix: number } }[] = [
  { capability: "Granular meta + Open Graph", scores: { custom: 100, wp: 80, sq: 65, wix: 55 } },
  { capability: "Server-side rendering", scores: { custom: 100, wp: 70, sq: 60, wix: 40 } },
  { capability: "Edge caching", scores: { custom: 100, wp: 55, sq: 45, wix: 35 } },
  { capability: "Custom schema markup", scores: { custom: 100, wp: 70, sq: 30, wix: 20 } },
  { capability: "Image compression / AVIF", scores: { custom: 95, wp: 60, sq: 75, wix: 70 } },
  { capability: "Internal-link control", scores: { custom: 100, wp: 85, sq: 60, wix: 50 } },
  { capability: "Robots / sitemap tuning", scores: { custom: 100, wp: 75, sq: 50, wix: 40 } },
  { capability: "Structured-data testing", scores: { custom: 95, wp: 70, sq: 45, wix: 30 } },
]

const COLUMNS = [
  { key: "custom" as const, label: "Custom", color: "#1677FF", domain: "nextjs.org" },
  { key: "wp" as const, label: "WordPress", color: "#21759B", domain: "wordpress.com" },
  { key: "sq" as const, label: "Squarespace", color: "#0B132B", domain: "squarespace.com" },
  { key: "wix" as const, label: "Wix", color: "#FFB400", domain: "wix.com" },
]

export function SeoControlProgress() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="mb-5">
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--accent)" }}
        >
          SEO control checklist
        </div>
        <h3
          className="text-[18px] sm:text-[20px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          How much control you actually get
        </h3>
      </div>

      <div
        className="grid gap-2 mb-4 px-3"
        style={{ gridTemplateColumns: "1.6fr repeat(4, 1fr)" }}
      >
        <span
          className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          Capability
        </span>
        {COLUMNS.map((c) => (
          <div key={c.key} className="flex items-center justify-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
              alt=""
              width={16}
              height={16}
              loading="lazy"
              decoding="async"
              className="rounded-sm"
            />
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
              style={{ color: c.color }}
            >
              {c.label}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {ROWS.map((row) => (
          <div
            key={row.capability}
            className="grid gap-2 items-center px-3 py-3 rounded-xl"
            style={{
              gridTemplateColumns: "1.6fr repeat(4, 1fr)",
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <span
              className="text-[13.5px] font-semibold leading-snug"
              style={{ color: "var(--ink)" }}
            >
              {row.capability}
            </span>
            {COLUMNS.map((c) => {
              const v = row.scores[c.key]
              return (
                <div key={c.key} className="flex flex-col items-center gap-1">
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(11,19,43,0.08)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${v}%`, background: c.color }}
                    />
                  </div>
                  <span
                    className="text-[11.5px] font-bold tabular-nums"
                    style={{ color: "var(--ink)" }}
                  >
                    {v}
                  </span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
