import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

type Industry = {
  iconId: string
  name: string
  href: string
  color: string
}

const industries: Industry[] = [
  { iconId: "fJtcL3pXcD0X", name: "Home Services", href: "/industries/home-services", color: "#1677FF" },
  { iconId: "13246", name: "Contractors", href: "/industries/contractors", color: "#F59E0B" },
  { iconId: "14857", name: "Medical & Dental", href: "/industries/medical", color: "#10B981" },
  { iconId: "13097", name: "Automotive", href: "/industries/automotive", color: "#EF4444" },
  { iconId: "23288", name: "Restaurants", href: "/industries/restaurants", color: "#8B5CF6" },
  { iconId: "tXg90mCMJpUq", name: "Local Service", href: "/industries/local-service", color: "#14B8A6" },
]

export function WebIndustries() {
  return (
    <section
      aria-labelledby="web-industries-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Who We Design For"
          heading={
            <span id="web-industries-heading">
              Designed for service{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">businesses</span>.
              </span>
            </span>
          }
          paragraph="Every industry below has a dedicated page covering how we design, what we measure, and what conversion benchmarks look like."
        />

        <div
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="card-surface card-surface-hover inline-flex items-center gap-3 px-4 sm:px-5 py-3 group"
              aria-label={`${i.name} industry page`}
            >
              <span
                className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
                style={{ background: `${i.color}14` }}
              >
                <img
                  src={icons8Url(i.iconId, 96)}
                  alt={`${i.name} icon`}
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="w-[24px] h-[24px] object-contain"
                />
              </span>
              <span
                className="text-[14.5px] sm:text-[15px] font-semibold whitespace-nowrap"
                style={{ color: "var(--ink)" }}
              >
                {i.name}
              </span>
              <ArrowRight
                className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: "var(--accent)" }}
                strokeWidth={2.5}
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/industries">
            View all industries
          </SecondaryButton>
          <span className="text-[14.5px]" style={{ color: "var(--muted)" }}>
            Don&apos;t see yours?{" "}
            <a
              href="#contact"
              className="font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Talk to a designer →
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
