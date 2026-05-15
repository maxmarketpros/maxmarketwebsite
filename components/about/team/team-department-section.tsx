import {
  type DepartmentMeta,
  getMembersByDepartment,
} from "@/lib/team-data"
import { TeamMemberCard } from "./team-member-card"

interface TeamDepartmentSectionProps {
  department: DepartmentMeta
  isFirst?: boolean
}

export function TeamDepartmentSection({
  department,
  isFirst = false,
}: TeamDepartmentSectionProps) {
  const members = getMembersByDepartment(department.id)
  const count = members.length

  const gridCols =
    count === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

  return (
    <section
      aria-labelledby={`team-dept-${department.id}-heading`}
      className="relative"
    >
      <div
        className={`section-container ${
          isFirst
            ? "pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24"
            : "pb-16 sm:pb-20 lg:pb-24"
        }`}
      >
        <header
          className="max-w-[760px]"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] rounded-full border"
            style={{
              background: `${department.accent}14`,
              borderColor: `${department.accent}40`,
              color: department.accent,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: department.accent }}
            />
            {department.pill}
          </span>
          <h2
            id={`team-dept-${department.id}-heading`}
            className="mt-4 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            {renderHeadingWithAccent(
              department.heading,
              department.headingAccent,
              department.accentSoft
            )}
          </h2>
          <p
            className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] max-w-[640px]"
            style={{ color: "var(--muted)" }}
          >
            {department.subtitle}
          </p>
        </header>

        <div className={`mt-10 sm:mt-12 grid ${gridCols} gap-6`}>
          {members.map((m, i) => (
            <TeamMemberCard
              key={m.slug}
              member={m}
              department={department}
              index={i}
            />
          ))}
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
