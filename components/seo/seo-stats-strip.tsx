import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "kDqO6kPb3xLj",
    number: "68%",
    title: "of online experiences start with a search engine.",
    source: "BrightEdge",
  },
  {
    iconId: "19326",
    number: "46%",
    title: "of all Google searches are looking for local information.",
    source: "HubSpot",
  },
  {
    iconId: "13013",
    number: "$2.75",
    title: "average return for every $1 spent on SEO.",
    source: "First Page Sage",
  },
]

export function SeoStatsStrip() {
  return (
    <section aria-labelledby="seo-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why SEO Matters"
          heading={
            <span id="seo-stats-heading">
              Search is where your next customer{" "}
              <span className="accent-underline">
                finds <span className="whitespace-nowrap">you.</span>
              </span>
            </span>
          }
          paragraph="If you aren't on page one, you don't exist. Here's why investing in SEO is the highest-ROI channel for local service businesses."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {stats.map((s) => (
            <article
              key={s.number}
              className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <img
                  src={icons8Url(s.iconId, 128)}
                  alt=""
                  width={52}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  className="w-[52px] h-[52px] object-contain"
                />

                <div
                  className="mt-5 text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em]"
                  style={{ color: "var(--ink)" }}
                >
                  <span className="text-gradient">{s.number}</span>
                </div>

                <p
                  className="mt-3 text-[16px] sm:text-[17px] leading-[1.5] font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </p>

                <p
                  className="mt-3 text-[12.5px] uppercase tracking-[0.08em] font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Source — {s.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
