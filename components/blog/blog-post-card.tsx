import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import { formatPostDate, type BlogPost } from "@/lib/blog-data"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="card-surface card-surface-hover group flex flex-col h-full overflow-hidden"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div
        className="relative aspect-[16/10] flex items-center justify-center"
        style={{
          background:
            post.hero.bgTint === "cyan"
              ? "linear-gradient(135deg, rgba(116,211,255,0.22), rgba(22,119,255,0.10))"
              : "linear-gradient(135deg, rgba(22,119,255,0.14), rgba(116,211,255,0.22))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icons8Url(post.hero.iconId, 256)}
          alt={post.hero.altText}
          width={140}
          height={140}
          loading="lazy"
          decoding="async"
          className="w-[42%] max-w-[180px] h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-3 left-3 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.92)",
            color: "var(--accent)",
          }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3
          className="text-[17px] sm:text-[19px] font-bold leading-snug tracking-[-0.012em] group-hover:underline"
          style={{ color: "var(--ink)" }}
        >
          {post.title}
        </h3>
        <p
          className="mt-2.5 text-[14.5px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {post.excerpt}
        </p>
        <div
          className="mt-auto pt-5 flex items-center gap-2 text-[12.5px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <span>{formatPostDate(post.datePublished)}</span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min</span>
          <span
            className="ml-auto inline-flex items-center gap-1 font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
