import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"

const links = [
  {
    label: "Custom websites",
    desc: "Built for your business, your brand, your buyers.",
    href: "/plans/custom-website",
  },
  {
    label: "Local & service SEO",
    desc: "Show up for the searches that fill your calendar.",
    href: "/services/seo",
  },
  {
    label: "Webflow design",
    desc: "Hand-built layouts, Lighthouse 95+, schema everywhere.",
    href: "/services/web-design/webflow",
  },
  {
    label: "Plans for every stage",
    desc: "StarterMark, LocalMark, ServicePro, Signature.",
    href: "/plans",
  },
  {
    label: "Common questions",
    desc: "40 answers across pricing, process, and platforms.",
    href: "/resources/faq",
  },
]

export function OurStoryToday() {
  return (
    <section
      aria-labelledby="our-story-today-heading"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--accent)" }}
            >
              Where we are today
            </p>
            <h2
              id="our-story-today-heading"
              className="mt-3 text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              What Max Market Pros does today.
            </h2>
            <p
              className="mt-6 text-[16.5px] sm:text-[17.5px] leading-[1.7] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              Today we run custom websites, local SEO, and full marketing plans
              for 1,000+ service businesses across the country. Still
              independent. Still in Irvine. Still picking up the phone.
            </p>
            <div className="mt-7">
              <SecondaryButton asLink href="/contact/schedule">
                Talk to a strategist
              </SecondaryButton>
            </div>
          </div>

          <div
            className="rounded-[var(--radius-xl)] overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 8px 28px rgba(17,35,68,0.08)",
              animation: "fadeInUp 0.9s ease-out 0.1s both",
            }}
          >
            <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-4 px-5 sm:px-6 py-5 transition-colors hover:bg-[rgba(22,119,255,0.04)]"
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[16px] sm:text-[17px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {l.label}
                      </p>
                      <p
                        className="mt-1 text-[13.5px] sm:text-[14px] leading-[1.5]"
                        style={{ color: "var(--muted)" }}
                      >
                        {l.desc}
                      </p>
                    </div>
                    <span
                      className="shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{
                        background: "rgba(22,119,255,0.08)",
                        border: "1px solid rgba(22,119,255,0.20)",
                        color: "var(--accent)",
                      }}
                    >
                      <ArrowUpRight
                        className="w-4 h-4"
                        strokeWidth={2.4}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
