import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import { formatPostDate, type BlogPost } from "@/lib/blog-data"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null
  return (
    <section className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container py-14 sm:py-20">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex items-end justify-between gap-4 mb-7 sm:mb-9">
            <h2
              className="text-[24px] sm:text-[30px] font-bold leading-tight tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Keep reading
            </h2>
            <Link
              href="/resources/blog"
              className="text-[13px] sm:text-[14px] font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              All articles →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/blog/${p.slug}`}
                className="card-surface card-surface-hover group p-5 sm:p-6 flex gap-4 sm:gap-5"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div
                  className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      p.hero.bgTint === "cyan"
                        ? "linear-gradient(135deg, rgba(116,211,255,0.18), rgba(22,119,255,0.10))"
                        : "linear-gradient(135deg, rgba(22,119,255,0.10), rgba(116,211,255,0.18))",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icons8Url(p.hero.iconId, 128)}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.07em] mb-1.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.category}
                  </div>
                  <h3
                    className="text-[16.5px] sm:text-[18px] font-bold leading-snug group-hover:underline"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.shortTitle ?? p.title}
                  </h3>
                  <div
                    className="mt-2 text-[12.5px] flex items-center gap-2"
                    style={{ color: "var(--muted)" }}
                  >
                    <span>{formatPostDate(p.datePublished)}</span>
                    <span aria-hidden>·</span>
                    <span>{p.readMinutes} min</span>
                    <ArrowRight className="ml-auto w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
