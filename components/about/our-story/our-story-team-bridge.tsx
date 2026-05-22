import Image from "next/image"
import { SecondaryButton } from "@/components/ui/secondary-button"

const avatars = [
  { src: "/testimonials/avatars/tony.jpg", alt: "Tony" },
  { src: "/testimonials/avatars/dianna.jpg", alt: "Dianna" },
  { src: "/testimonials/avatars/edwin.jpg", alt: "Edwin" },
  { src: "/testimonials/avatars/valerie.jpg", alt: "Valerie" },
]

export function OurStoryTeamBridge() {
  return (
    <section
      aria-labelledby="our-story-team-bridge-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container py-12 sm:py-16">
        <div
          className="rounded-[var(--radius-xl)] px-6 sm:px-8 lg:px-10 py-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-color)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.06), 0 8px 28px rgba(17,35,68,0.06)",
            animation: "fadeInUp 0.8s ease-out both",
          }}
        >
          <div className="flex -space-x-2.5 shrink-0">
            {avatars.map((a, i) => (
              <span
                key={a.src}
                className="relative inline-block w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden"
                style={{
                  border: "2.5px solid #fff",
                  boxShadow: "0 2px 6px rgba(17,35,68,0.12)",
                  zIndex: avatars.length - i,
                }}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>

          <div className="flex-1 min-w-0">
            <h2
              id="our-story-team-bridge-heading"
              className="text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.015em]"
              style={{ color: "var(--ink)" }}
            >
              The Max Market Pros team.
            </h2>
            <p
              className="mt-1.5 text-[14px] sm:text-[15px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              Small, senior team. Based in Irvine, CA. No offshoring, no junior
              handoffs.
            </p>
          </div>

          <div className="shrink-0">
            <SecondaryButton asLink href="/about/team">
              Meet the team
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
