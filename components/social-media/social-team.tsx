import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Role = {
  iconId: string
  title: string
  description: string
  specialties: string[]
  color: string
}

const roles: Role[] = [
  {
    iconId: "12313",
    title: "Social Strategist",
    description:
      "Your content director. Owns the calendar, the voice, and the platform strategy.",
    specialties: ["Content strategy", "Brand voice", "Calendar ownership"],
    color: "#1677FF",
  },
  {
    iconId: "12147",
    title: "Videographer",
    description:
      "On-site shoots with phone, DSLR, and drone. Captures a month of content in hours.",
    specialties: ["On-site shoots", "Drone & aerial", "B-roll capture"],
    color: "#EF4444",
  },
  {
    iconId: "13138",
    title: "Video Editor",
    description:
      "Platform-native edits with captions, motion graphics, and scroll-stopping pacing.",
    specialties: ["Reels & Shorts", "Captions & motion", "Sound design"],
    color: "#F59E0B",
  },
  {
    iconId: "Xwqu8cUREfko",
    title: "Graphic Designer",
    description:
      "On-brand post graphics, carousels, and ad creative — fast iterations, tight QA.",
    specialties: ["Post graphics", "Carousels", "Ad creative"],
    color: "#8B5CF6",
  },
  {
    iconId: "108791",
    title: "Community Manager",
    description:
      "Daily replies, DM routing, and engagement so no lead ever ghosts your brand.",
    specialties: ["DMs & comments", "Lead routing", "Daily engagement"],
    color: "#14B8A6",
  },
]

export function SocialTeam() {
  return (
    <section
      aria-labelledby="social-team-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Your In-House Team"
          heading={
            <span id="social-team-heading">
              A full <span className="accent-underline">creator team</span> —
              without the headcount.
            </span>
          }
          paragraph="One partner replaces a social media manager, videographer, editor, designer, and community manager. All under one roof, all pulling in the same direction."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {roles.map((r) => (
            <article
              key={r.title}
              className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-[-30px] top-[-30px] w-[130px] h-[130px]"
                style={{
                  background: `radial-gradient(ellipse at center, ${r.color}18 0%, transparent 70%)`,
                }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-[var(--radius-sm)] flex items-center justify-center mb-4"
                  style={{ background: `${r.color}14` }}
                >
                  <img
                    src={icons8Url(r.iconId, 96)}
                    alt={`${r.title} icon`}
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>
                <h3
                  className="text-[17px] sm:text-[18px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {r.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {r.specialties.map((s) => (
                    <li
                      key={s}
                      className="inline-block px-2.5 py-0.5 text-[11.5px] font-medium rounded-full"
                      style={{
                        background: "var(--bg)",
                        color: "var(--muted)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
