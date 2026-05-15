import { DEPARTMENTS } from "@/lib/team-data"
import { TeamDepartmentSection } from "./team-department-section"

export function TeamDepartments() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {DEPARTMENTS.map((d, i) => (
        <TeamDepartmentSection
          key={d.id}
          department={d}
          isFirst={i === 0}
        />
      ))}
    </div>
  )
}
