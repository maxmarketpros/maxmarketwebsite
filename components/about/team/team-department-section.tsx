import {
  type DepartmentMeta,
  TEAM_MEMBERS,
  getMembersByDepartment,
} from "@/lib/team-data"
import { TeamMemberCard } from "./team-member-card"

interface TeamDepartmentSectionProps {
  department: DepartmentMeta
  /** 1-based index used for the Roman numeral chapter number. */
  chapter: number
  isFirst?: boolean
}

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

// One pull quote per dept, lifted from the subtitle copy.
const PULL_QUOTES: Record<string, string> = {
  leadership: "Owner-operators, not figureheads.",
  "client-growth": "They own outcomes, not just inboxes.",
  "web-development": "No offshoring, no outsourcing, no junior handoffs.",
  "business-development":
    "Our BD specialists don't pitch — they diagnose.",
}

export function TeamDepartmentSection({
  department,
  chapter,
  isFirst = false,
}: TeamDepartmentSectionProps) {
  const members = getMembersByDepartment(department.id)
  const pullQuote = PULL_QUOTES[department.id]

  return (
    <section
      aria-labelledby={`team-dept-${department.id}-heading`}
      className="relative"
    >
      <div
        className={`section-container ${
          isFirst
            ? "pt-14 sm:pt-16 lg:pt-20 pb-4 sm:pb-6"
            : "pt-10 sm:pt-12 pb-4 sm:pb-6"
        }`}
      >
        {/* Top hairline rule */}
        <div
          aria-hidden
          style={{ borderTop: "1px solid var(--border-color)" }}
        />

        {/* Chapter eyebrow row */}
        <div
          className="flex items-center justify-between gap-4 pt-3 sm:pt-4"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}
        >
          <span
            className="text-[13px] sm:text-[14px] font-bold uppercase tabular-nums"
            style={{
              color: "var(--muted)",
              letterSpacing: "0.18em",
            }}
          >
            Department&nbsp;{ROMAN[chapter] ?? chapter}
          </span>
          <span
            className="text-[13px] sm:text-[14px] font-bold uppercase text-right"
            style={{
              color: department.accent,
              letterSpacing: "0.18em",
            }}
          >
            {department.pill}
          </span>
        </div>

        {/* Heading + subtitle + pull quote */}
        <header
          className="max-w-[820px] pt-6 sm:pt-8"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <h2
            id={`team-dept-${department.id}-heading`}
            className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            {renderHeadingWithAccent(
              department.heading,
              department.headingAccent,
              department.accentSoft
            )}
          </h2>
          <p
            className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] max-w-[680px]"
            style={{ color: "var(--muted)" }}
          >
            {department.subtitle}
          </p>

          {pullQuote ? (
            <blockquote
              className="mt-7 pl-5 max-w-[640px] italic text-[18px] sm:text-[20px] leading-[1.4] tracking-[-0.005em]"
              style={{
                color: "var(--ink)",
                borderLeft: `3px solid ${department.accent}`,
              }}
            >
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          ) : null}
        </header>

        {/* Member entries — single-column editorial stack */}
        <div className="mt-8 sm:mt-10">
          {members.map((m, i) => {
            const globalNumber =
              TEAM_MEMBERS.findIndex((x) => x.slug === m.slug) + 1
            return (
              <TeamMemberCard
                key={m.slug}
                member={m}
                department={department}
                index={i}
                isLast={i === members.length - 1}
                globalNumber={globalNumber}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function renderHeadingWithAccent(
  heading: string,
  accentPhrase: string,
  accentColor: string
) {
  if (!accentPhrase || !heading.includes(accentPhrase)) {
    return heading
  }
  const [before, after] = heading.split(accentPhrase)
  return (
    <>
      {before}
      <span
        className="relative inline-block"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 65%, ${accentColor}73 65%)`,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {accentPhrase}
      </span>
      {after}
    </>
  )
}
