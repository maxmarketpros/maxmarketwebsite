import { posts, type BlogCategory } from "@/lib/blog-data"

const CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  "Web Design": "Custom builds vs DIY",
  "Google Ads": "PPC, LSA & PMax",
  "Local SEO": "Map Pack & reviews",
  "AI Search": "ChatGPT, Perplexity & AIO",
  Strategy: "Plays & playbooks",
  "Industry Guides": "By trade",
}

export function BlogCategoryStrip() {
  const counts = new Map<BlogCategory, number>()
  for (const p of posts) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
  }
  const categories: BlogCategory[] = [
    "AI Search",
    "Web Design",
    "Google Ads",
    "Local SEO",
    "Strategy",
    "Industry Guides",
  ]
  return (
    <section className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container py-8 sm:py-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2
            className="text-[14px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)" }}
          >
            Browse by topic
          </h2>
          <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
            {posts.length} article{posts.length === 1 ? "" : "s"} · refreshed weekly
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {categories.map((cat) => {
            const count = counts.get(cat) ?? 0
            const isActive = count > 0
            return (
              <div
                key={cat}
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-full border text-[13px]"
                style={{
                  background: isActive ? "var(--accent-bg)" : "var(--bg)",
                  borderColor: "var(--border-color)",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                }}
              >
                <span className="font-bold leading-tight">{cat}</span>
                <span
                  className="text-[11px] font-bold tabular-nums px-2 py-0.5 rounded-full"
                  style={{
                    background: isActive ? "var(--surface)" : "transparent",
                    color: isActive ? "var(--accent)" : "var(--muted)",
                  }}
                >
                  {count}
                </span>
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-[12px]" style={{ color: "var(--muted)" }}>
          {CATEGORY_DESCRIPTIONS["AI Search"]} · {CATEGORY_DESCRIPTIONS["Web Design"]} · {CATEGORY_DESCRIPTIONS["Google Ads"]} · {CATEGORY_DESCRIPTIONS["Local SEO"]}
        </p>
      </div>
    </section>
  )
}
