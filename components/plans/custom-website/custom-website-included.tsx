import {
  Brush,
  Smartphone,
  Search,
  MessageSquare,
  Image as ImageIcon,
  Star,
  Server,
  Wrench,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { everyTierIncludes } from "@/lib/custom-website-data"

const iconMap = {
  Brush,
  Smartphone,
  Search,
  MessageSquare,
  Image: ImageIcon,
  Star,
  Server,
  Wrench,
} as const

type IconName = keyof typeof iconMap

export function CustomWebsiteIncluded() {
  return (
    <section
      id="custom-website-included"
      aria-labelledby="custom-website-included-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Every tier includes"
          heading={
            <span id="custom-website-included-heading">
              Eight things every site{" "}
              <span className="whitespace-nowrap">
                ships <span className="accent-underline">with</span>.
              </span>
            </span>
          }
          paragraph="No matter which size you pick — these come standard on every build."
        />

        <ul
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {everyTierIncludes.map((item) => {
            const Icon = iconMap[item.iconName as IconName]
            return (
              <li
                key={item.label}
                className="card-surface p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="w-11 h-11 rounded-[12px] inline-flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}1A 0%, ${item.accent}33 100%)`,
                    color: item.accent,
                    border: `1px solid ${item.accent}40`,
                  }}
                >
                  {Icon ? <Icon className="w-5 h-5" strokeWidth={2.25} /> : null}
                </span>
                <h3
                  className="text-[16px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {item.label}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {item.body}
                </p>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-center text-[14px]" style={{ color: "var(--muted)" }}>
          Want help running ads, social, or reviews after launch?{" "}
          <a
            href="/plans"
            className="font-semibold underline decoration-[var(--cyan)] decoration-2 underline-offset-4 hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--ink)" }}
          >
            See our monthly marketing plans
          </a>
          .
        </p>
      </div>
    </section>
  )
}
