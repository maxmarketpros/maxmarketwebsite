import { Check, AlertCircle, TrendingUp } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies-data"

interface Props {
  study: CaseStudy
}

export function CaseStudyNarrative({ study }: Props) {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5"
      style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
    >
      <Block
        title="The Challenge"
        accent={study.accentColor}
        accentSoft={study.accentSoft}
        icon={<AlertCircle className="w-5 h-5" strokeWidth={2.2} />}
      >
        <p
          className="text-[14.5px] sm:text-[15px] leading-[1.6]"
          style={{ color: "var(--muted)" }}
        >
          {study.challenge}
        </p>
      </Block>

      <Block
        title={study.approachPill}
        accent={study.accentColor}
        accentSoft={study.accentSoft}
        icon={<Check className="w-5 h-5" strokeWidth={2.5} />}
      >
        <ul className="space-y-3">
          {study.approach.map((item) => (
            <li key={item.title}>
              <div
                className="text-[14px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {item.title}
              </div>
              <div
                className="mt-1 text-[13.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                {item.body}
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block
        title="The Results"
        accent={study.accentColor}
        accentSoft={study.accentSoft}
        icon={<TrendingUp className="w-5 h-5" strokeWidth={2.5} />}
      >
        <p
          className="text-[15.5px] sm:text-[16px] font-bold leading-[1.4]"
          style={{ color: "var(--ink)" }}
        >
          {study.results}
        </p>
        <ul className="mt-4 space-y-2">
          {study.resultsBullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-[13.5px] leading-[1.5]"
              style={{ color: "var(--muted)" }}
            >
              <Check
                className="w-4 h-4 mt-0.5 shrink-0"
                strokeWidth={2.8}
                style={{ color: study.accentColor }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Block>
    </div>
  )
}

function Block({
  title,
  icon,
  accent,
  accentSoft,
  children,
}: {
  title: string
  icon: React.ReactNode
  accent: string
  accentSoft: string
  children: React.ReactNode
}) {
  return (
    <article
      className="card-surface p-6 sm:p-7 flex flex-col"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
          style={{ background: accentSoft, color: accent }}
          aria-hidden
        >
          {icon}
        </span>
        <h3
          className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em]"
          style={{ color: accent }}
        >
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </article>
  )
}
