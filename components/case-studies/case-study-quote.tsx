import { Quote, Star } from "lucide-react"
import { icons8Url } from "@/lib/icons8"
import type { CaseStudy } from "@/lib/case-studies-data"

interface Props {
  study: CaseStudy
}

export function CaseStudyQuote({ study }: Props) {
  return (
    <figure
      className="relative card-surface p-7 sm:p-9 lg:p-11 overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        animation: "fadeInUp 0.7s ease-out 0.3s both",
      }}
    >
      {/* Decorative aura */}
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background: `radial-gradient(620px 260px at 100% 0%, ${study.accentColor}14, transparent 70%)`,
        }}
      />
      <Quote
        className="absolute top-6 right-6 w-12 h-12 opacity-15"
        strokeWidth={2.5}
        style={{ color: study.accentColor }}
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-7 lg:gap-10 items-center">
        <div>
          <div className="flex items-center gap-1 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-5 h-5"
                fill="#FBBF24"
                strokeWidth={0}
              />
            ))}
            <img
              src={icons8Url("17949", 64)}
              alt="Google review"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              className="ml-2 w-5 h-5 object-contain"
              title="Google review"
            />
          </div>
          <blockquote>
            <p
              className="text-[19px] sm:text-[22px] lg:text-[26px] font-semibold leading-[1.45] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              &ldquo;{study.quote.body}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold text-white shrink-0"
              style={{ background: study.quote.avatarBg }}
              aria-hidden
            >
              {study.quote.initial}
            </div>
            <div>
              <div
                className="text-[15px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {study.quote.name}
              </div>
              <div
                className="mt-0.5 text-[13px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {study.quote.title}
              </div>
            </div>
          </figcaption>
        </div>

        {/* Trust badge column */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-2 border-l pl-8" style={{ borderColor: "var(--border-color)" }}>
          <div
            className="text-[44px] font-bold leading-none tabular-nums"
            style={{ color: study.accentColor }}
          >
            5.0
          </div>
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5"
                fill="#FBBF24"
                strokeWidth={0}
              />
            ))}
          </div>
          <div
            className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-center"
            style={{ color: "var(--muted)" }}
          >
            Verified
            <br />
            Client
          </div>
        </div>
      </div>
    </figure>
  )
}
