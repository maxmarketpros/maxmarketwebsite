import { icons8Url } from "@/lib/icons8"
import type { CaseStudy } from "@/lib/case-studies-data"

interface Props {
  study: CaseStudy
}

export function CaseStudyKpis({ study }: Props) {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      style={{ animation: "fadeInUp 0.7s ease-out 0.15s both" }}
    >
      {study.kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className="relative card-surface p-5 sm:p-6 overflow-hidden"
          style={{
            borderRadius: "var(--radius-lg)",
            animation: `fadeInUp 0.7s ease-out ${0.15 + i * 0.05}s both`,
          }}
        >
          <div
            className="absolute inset-0 opacity-50"
            aria-hidden
            style={{
              background: `radial-gradient(220px 120px at 100% 0%, ${study.accentColor}18, transparent 70%)`,
            }}
          />
          <div className="relative">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
              style={{
                background: study.accentSoft,
              }}
            >
              <img
                src={icons8Url(kpi.iconId, 96)}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div
              className="text-[32px] sm:text-[40px] font-bold leading-[1] tracking-[-0.025em] tabular-nums"
              style={{ color: study.accentColor }}
            >
              {kpi.value}
            </div>
            <div
              className="mt-2 text-[13px] sm:text-[14px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              {kpi.label}
            </div>
            <div
              className="mt-0.5 text-[12px] sm:text-[13px]"
              style={{ color: "var(--muted)" }}
            >
              {kpi.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
