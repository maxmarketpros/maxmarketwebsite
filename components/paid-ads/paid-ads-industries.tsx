import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    iconId: "fJtcL3pXcD0X",
    name: "Home Services",
    tactic: "Google LSA + Meta retargeting",
    href: "/industries/home-services",
    color: "#F59E0B",
  },
  {
    iconId: "13246",
    name: "Contractors",
    tactic: "Search Ads + seasonal retargeting",
    href: "/industries/contractors",
    color: "#EF4444",
  },
  {
    iconId: "14857",
    name: "Med Spas & Medical",
    tactic: "HIPAA-safe Meta audiences + LSA",
    href: "/industries/medical",
    color: "#10B981",
  },
  {
    iconId: "19999",
    name: "Automotive",
    tactic: "Google Shopping + VIN retargeting",
    href: "/industries/automotive",
    color: "#0EA5E9",
  },
  {
    iconId: "114435",
    name: "HVAC & Plumbing",
    tactic: "Emergency Search + LSA dominance",
    href: "/industries/home-services",
    color: "#1677FF",
  },
  {
    iconId: "13182",
    name: "Restaurants",
    tactic: "Meta Reels + Google Local",
    href: "/industries/restaurants",
    color: "#EC4899",
  },
  {
    iconId: "16887",
    name: "Fitness & Gyms",
    tactic: "Instagram Reels + lead-form Meta",
    href: "/industries/local-service",
    color: "#8B5CF6",
  },
  {
    iconId: "14868",
    name: "Local Service",
    tactic: "Geo-targeted Search + LSA",
    href: "/industries/local-service",
    color: "#14B8A6",
  },
]

export function PaidAdsIndustries() {
  return (
    <section
      id="paid-ads-industries"
      aria-labelledby="paid-ads-industries-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Who We Run Ads For"
          heading={
            <span id="paid-ads-industries-heading">
              Built for{" "}
              <span className="accent-underline">
                local service
              </span>{" "}
              <span className="whitespace-nowrap">businesses.</span>
            </span>
          }
          paragraph="We specialize in paid ads for industries where every phone call, form fill, and booked appointment is measurable revenue."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((i) => (
            <a
              key={i.name}
              href={i.href}
              className="card-surface card-surface-hover relative overflow-hidden p-5 flex items-start gap-4 group"
              aria-label={`${i.name} industry page`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 w-[50%] h-[60%]"
                style={{
                  background: `radial-gradient(ellipse 100% 100% at 100% 0%, ${i.color}1A 0%, transparent 70%)`,
                }}
              />
              <div
                className="relative w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
                style={{ background: `${i.color}14` }}
              >
                <img
                  src={icons8Url(i.iconId, 96)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="w-[32px] h-[32px] object-contain"
                />
              </div>
              <div className="relative flex-1 min-w-0">
                <div
                  className="text-[15px] sm:text-[16px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {i.name}
                </div>
                <div
                  className="mt-1 text-[12.5px] font-medium leading-[1.4]"
                  style={{ color: "var(--muted)" }}
                >
                  {i.tactic}
                </div>
              </div>
              <ArrowRight
                className="relative w-4 h-4 shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 self-center"
                style={{ color: i.color }}
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
