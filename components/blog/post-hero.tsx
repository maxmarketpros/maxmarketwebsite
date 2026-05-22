import { icons8Url } from "@/lib/icons8"
import { Pill } from "@/components/ui/pill"

interface PostHeroProps {
  iconId: string
  altText: string
  tint?: "blue" | "cyan"
  category: string
  title: React.ReactNode
  description: string
  meta: {
    date: string
    readMinutes: number
    author: { name: string; role: string; initial: string }
  }
}

export function PostHero({
  iconId,
  altText,
  tint = "blue",
  category,
  title,
  description,
  meta,
}: PostHeroProps) {
  const glow = tint === "blue" ? "var(--glow-blue)" : "var(--glow-cyan)"
  return (
    <section
      aria-labelledby="post-hero-heading"
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(1200px 480px at 50% -120px, ${glow}, transparent 65%), var(--bg)`,
      }}
    >
      <div className="absolute inset-0 noise-overlay" aria-hidden />
      <div className="relative section-container pt-12 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div
          className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 lg:gap-14 items-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div>
            <Pill className="mb-5">{category}</Pill>
            <h1
              id="post-hero-heading"
              className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.022em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              {title}
            </h1>
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.55]"
              style={{ color: "var(--muted)", maxWidth: 620 }}
            >
              {description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[12px] font-bold"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--cyan))",
                    color: "#fff",
                  }}
                >
                  {meta.author.initial}
                </span>
                <div>
                  <div
                    className="text-[13px] font-semibold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {meta.author.name}
                  </div>
                  <div
                    className="text-[11.5px] leading-tight"
                    style={{ color: "var(--muted)" }}
                  >
                    {meta.author.role}
                  </div>
                </div>
              </div>
              <span
                aria-hidden
                className="hidden sm:inline h-5 w-px"
                style={{ background: "var(--border-color)" }}
              />
              <div
                className="flex items-center gap-3 text-[13px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                <span>{meta.date}</span>
                <span aria-hidden>·</span>
                <span>{meta.readMinutes} min read</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[420px] aspect-square rounded-[var(--radius-xl)] flex items-center justify-center"
              style={{
                background:
                  tint === "blue"
                    ? "linear-gradient(135deg, rgba(22,119,255,0.10), rgba(116,211,255,0.18))"
                    : "linear-gradient(135deg, rgba(116,211,255,0.16), rgba(22,119,255,0.10))",
                border: "1px solid var(--border-color)",
                boxShadow: "0 12px 36px var(--shadow-color)",
              }}
            >
              <img
                src={icons8Url(iconId, 512)}
                alt={altText}
                width={320}
                height={320}
                loading="eager"
                decoding="async"
                className="w-[64%] h-[64%] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
