import { Clock } from "lucide-react"
import { BlogPostCard } from "./blog-post-card"
import { getOtherPosts } from "@/lib/blog-data"

export function BlogGrid() {
  const others = getOtherPosts()
  return (
    <section className="relative" style={{ background: "var(--bg)" }}>
      <div className="section-container py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-end justify-between gap-4 mb-7 sm:mb-9">
            <h2
              className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Latest articles
            </h2>
            <span
              className="text-[12.5px] font-semibold"
              style={{ color: "var(--muted)" }}
            >
              {others.length} more
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {others.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
            {others.length < 3 ? <ComingSoonTile /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComingSoonTile({ delay = 0.08 }: { delay?: number }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6 py-10 sm:py-14 border-dashed"
      style={{
        background: "var(--surface)",
        border: "2px dashed var(--border-color)",
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.7s ease-out ${delay}s both`,
      }}
    >
      <span
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3"
        style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
      >
        <Clock className="w-5 h-5" />
      </span>
      <div
        className="text-[15px] font-bold"
        style={{ color: "var(--ink)" }}
      >
        New article coming soon
      </div>
      <p
        className="mt-1.5 text-[13px] leading-[1.5] max-w-[260px]"
        style={{ color: "var(--muted)" }}
      >
        Fresh field notes drop here weekly — web design, SEO, paid ads, and growth playbooks.
      </p>
    </div>
  )
}
