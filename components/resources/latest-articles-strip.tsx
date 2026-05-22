import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { posts, formatPostDate } from "@/lib/blog-data"

export function LatestArticlesStrip() {
  const recent = [...posts]
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, 3)

  return (
    <section className="relative" style={{ background: "var(--bg)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Latest articles"
          heading={
            <>
              Fresh from the <span className="accent-underline">blog.</span>
            </>
          }
          paragraph="Recent breakdowns on AI search, Google Ads benchmarks, custom-coded sites, and the local SEO levers that actually move the dial."
        />

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {recent.map((p, i) => (
            <Link
              key={p.slug}
              href={`/resources/blog/${p.slug}`}
              className="card-surface card-surface-hover overflow-hidden flex flex-col group"
              style={{
                animation: `fadeInUp 0.7s ease-out ${i * 0.08}s both`,
              }}
            >
              {/* Hero icon panel */}
              <div
                className="relative h-[160px] flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    p.hero.bgTint === "cyan"
                      ? "linear-gradient(135deg, rgba(116,211,255,0.18) 0%, rgba(22,119,255,0.06) 100%)"
                      : "linear-gradient(135deg, rgba(22,119,255,0.14) 0%, rgba(116,211,255,0.08) 100%)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 noise-overlay"
                />
                <img
                  src={icons8Url(p.hero.iconId, 200)}
                  alt={p.hero.altText}
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                  className="w-[88px] h-[88px] object-contain relative"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-3 grow">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] rounded-full"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[12px]"
                    style={{ color: "var(--muted)" }}
                  >
                    <Clock className="w-3 h-3" />
                    {p.readMinutes} min read
                  </span>
                </div>
                <h3
                  className="text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {p.shortTitle ?? p.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.excerpt}
                </p>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span
                    className="text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {formatPostDate(p.datePublished)}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[13px] font-semibold transition-transform group-hover:translate-x-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform hover:translate-x-0.5"
            style={{ color: "var(--accent)" }}
          >
            See all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
