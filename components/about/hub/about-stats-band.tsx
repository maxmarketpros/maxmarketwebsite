import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "5+", label: "Years independent" },
  { value: "1,000+", label: "Businesses helped" },
  { value: "10", label: "In-house teammates" },
  { value: "50", label: "States served" },
]

export function AboutStatsBand() {
  return (
    <section
      aria-label="Max Market Pros by the numbers"
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="about-stats-dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-stats-dots)" />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute top-[-30%] left-[10%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] right-[5%] w-[460px] h-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="section-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-10 sm:mb-14">
          <p
            className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            By the numbers
          </p>
          <h2
            className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "#fff" }}
          >
            Five years.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #B0E3FF 0%, #74D3FF 50%, #1677FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A thousand wins
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-y-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.05 + i * 0.08}s both`,
              }}
            >
              <p
                className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold leading-none tracking-[-0.02em]"
                style={{
                  background:
                    "linear-gradient(135deg, #B0E3FF 0%, #74D3FF 50%, #1677FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p
                className="mt-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{ color: "rgba(255,255,255,0.62)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about/testimonials"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors"
            style={{ color: "#B0E3FF" }}
          >
            Browse client wins
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
