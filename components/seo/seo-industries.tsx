import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

const industries = [
  { iconId: "14857", name: "Med Spas", href: "/industries/medical" },
  { iconId: "fJtcL3pXcD0X", name: "Home Services", href: "/industries/home-services" },
  { iconId: "14868", name: "Dentists", href: "/industries/medical" },
  { iconId: "13182", name: "Law Firms", href: "/industries/local-service" },
  { iconId: "19999", name: "Real Estate", href: "/industries/local-service" },
  { iconId: "16887", name: "Fitness & Gyms", href: "/industries/local-service" },
  { iconId: "114435", name: "HVAC & Plumbing", href: "/industries/home-services" },
  { iconId: "13246", name: "Contractors", href: "/industries/contractors" },
]

export function SeoIndustries() {
  return (
    <section aria-labelledby="seo-industries-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Who We Rank"
          heading={
            <span id="seo-industries-heading">
              Built for <span className="accent-underline">local service</span>{" "}
              <span className="whitespace-nowrap">businesses.</span>
            </span>
          }
          paragraph="We specialize in SEO for industries where every lead matters and every phone call is revenue."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((i) => (
            <a
              key={i.name}
              href={i.href}
              className="card-surface card-surface-hover p-5 flex items-center gap-4 group"
              aria-label={`${i.name} industry page`}
            >
              <div
                className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-bg)" }}
              >
                <img
                  src={icons8Url(i.iconId, 96)}
                  alt={`${i.name} icon`}
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="w-[32px] h-[32px] object-contain"
                />
              </div>
              <div
                className="flex-1 text-[15px] sm:text-[16px] font-semibold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {i.name}
              </div>
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
            Don't see yours?{" "}
            <a
              href="#contact"
              className="font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Talk to us →
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
