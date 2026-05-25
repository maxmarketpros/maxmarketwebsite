import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { icons8Url } from "@/lib/icons8"
import { formatPostDate, type BlogPost } from "@/lib/blog-data"

interface BlogIndexHeroProps {
  featured: BlogPost
}

export function BlogIndexHero({ featured }: BlogIndexHeroProps) {
  return (
    <section
      aria-labelledby="blog-index-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 480px at 50% -120px, var(--glow-blue), transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 noise-overlay" aria-hidden />
      <div className="relative section-container pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div
          className="text-center max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div className="flex justify-center mb-5">
            <Pill>
              <Sparkles className="w-3 h-3" />
              The Max Market Pros Blog
            </Pill>
          </div>
          <h1
            id="blog-index-heading"
            className="text-[36px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Growth notes for{" "}
            <span className="accent-underline whitespace-nowrap">service businesses</span>.
          </h1>
          <p
            className="mt-6 max-w-[640px] mx-auto text-[17px] sm:text-[19px] leading-[1.55]"
            style={{ color: "var(--muted)" }}
          >
            Benchmarks, head-to-head breakdowns, and growth plays for owners and operators — from the team that builds custom websites, runs Google Ads, and ships local SEO every day.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 max-w-[1080px] mx-auto">
          <Link
            href={`/resources/blog/${featured.slug}`}
            className="card-surface card-surface-hover group block overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
              <div
                className="relative aspect-[5/4] lg:aspect-auto flex items-center justify-center p-8 lg:p-12"
                style={{
                  background:
                    featured.hero.bgTint === "cyan"
                      ? "linear-gradient(135deg, rgba(116,211,255,0.22), rgba(22,119,255,0.10))"
                      : "linear-gradient(135deg, rgba(22,119,255,0.14), rgba(116,211,255,0.22))",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icons8Url(featured.hero.iconId, 512)}
                  alt={featured.hero.altText}
                  width={260}
                  height={260}
                  loading="eager"
                  decoding="async"
                  className="w-[55%] h-auto max-w-[260px] object-contain drop-shadow-xl"
                />
                <span
                  className="absolute top-4 left-4 text-[10.5px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "var(--accent)",
                  }}
                >
                  Featured
                </span>
              </div>
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.07em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {featured.category}
                </div>
                <h2
                  className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.15] tracking-[-0.018em] text-balance group-hover:underline"
                  style={{ color: "var(--ink)" }}
                >
                  {featured.shortTitle ?? featured.title}
                </h2>
                <p
                  className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3 text-[13px] font-medium">
                  <span style={{ color: "var(--muted)" }}>
                    {formatPostDate(featured.datePublished)}
                  </span>
                  <span aria-hidden style={{ color: "var(--muted)" }}>·</span>
                  <span style={{ color: "var(--muted)" }}>
                    {featured.readMinutes} min read
                  </span>
                  <span
                    className="ml-auto inline-flex items-center gap-1 font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
