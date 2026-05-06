import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Wrench,
  Car,
  Home,
  Briefcase,
  Building2,
} from "lucide-react"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"

const tiles = [
  {
    name: "Medical & dental",
    href: "/industries/medical",
    Icon: Stethoscope,
    blurb: "Clinical credibility, friendly UX",
  },
  {
    name: "Contractors",
    href: "/industries/contractors",
    Icon: HardHat,
    blurb: "Project-led, lead-tuned designs",
  },
  {
    name: "Restaurants",
    href: "/industries/restaurants",
    Icon: UtensilsCrossed,
    blurb: "Menu-first, mouth-watering layouts",
  },
  {
    name: "Home services",
    href: "/industries/home-services",
    Icon: Wrench,
    blurb: "Trust signals & instant quote CTAs",
  },
  {
    name: "Automotive",
    href: "/industries/automotive",
    Icon: Car,
    blurb: "Inventory-friendly grid systems",
  },
  {
    name: "Real estate",
    href: "/industries/local-service",
    Icon: Home,
    blurb: "Hero-led listings, gallery polish",
  },
  {
    name: "B2B & SaaS",
    href: "/services",
    Icon: Briefcase,
    blurb: "Conversion-first, ICP-targeted",
  },
  {
    name: "Multi-location",
    href: "/industries",
    Icon: Building2,
    blurb: "Location pages on a shared design system",
  },
]

export function CustomDesignedIndustries() {
  return (
    <section
      id="custom-designed-industries"
      aria-labelledby="custom-designed-industries-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Custom design across industries"
          heading={
            <span id="custom-designed-industries-heading">
              Industries we&rsquo;ve{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                custom-designed
              </span>{" "}
              for.
            </span>
          }
          paragraph="Every category has its own conventions — and its own opportunities to break them. Here's where we've shipped custom website designs that beat category templates."
        />

        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {tiles.map((tile, idx) => {
            const Icon = tile.Icon
            return (
              <a
                key={tile.name}
                href={tile.href}
                className="card-surface p-5 group transition-all hover:translate-y-[-3px]"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.7s ease-out ${0.05 * idx}s both`,
                }}
              >
                <span
                  className="w-11 h-11 rounded-[12px] inline-flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background:
                      idx % 3 === 0
                        ? "rgba(244,63,94,0.12)"
                        : idx % 3 === 1
                        ? "rgba(139,92,246,0.12)"
                        : "rgba(20,184,166,0.12)",
                    color:
                      idx % 3 === 0
                        ? CD_ROSE
                        : idx % 3 === 1
                        ? CD_VIOLET
                        : "#14B8A6",
                    border: `1px solid ${
                      idx % 3 === 0
                        ? "rgba(244,63,94,0.30)"
                        : idx % 3 === 1
                        ? "rgba(139,92,246,0.30)"
                        : "rgba(20,184,166,0.30)"
                    }`,
                  }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <h3
                  className="text-[15.5px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {tile.name}
                </h3>
                <p
                  className="mt-1.5 text-[13px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {tile.blurb}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  Explore →
                </span>
              </a>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Don&rsquo;t see your industry?
          </span>
          <SecondaryButton asLink href="#contact">
            Tell us about your business
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
