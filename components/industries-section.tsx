import Link from "next/link"
import {
  ArrowRight,
  Car,
  HardHat,
  Home,
  Stethoscope,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"
import { Pill } from "./ui/pill"

type Industry = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  accent: string
}

const INDUSTRIES: Industry[] = [
  {
    slug: "home-services",
    name: "Home Services",
    description: "HVAC, plumbing, electrical & more",
    icon: Home,
    accent: "#F59E0B",
  },
  {
    slug: "contractors",
    name: "Contractors",
    description: "General contractors & builders",
    icon: HardHat,
    accent: "#EF4444",
  },
  {
    slug: "medical",
    name: "Medical Practices",
    description: "Doctors, dentists & clinics",
    icon: Stethoscope,
    accent: "#22C55E",
  },
  {
    slug: "automotive",
    name: "Automotive",
    description: "Auto shops & dealerships",
    icon: Car,
    accent: "#0EA5E9",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    description: "Restaurants & food service",
    icon: UtensilsCrossed,
    accent: "#EC4899",
  },
  {
    slug: "local-service",
    name: "Local Services",
    description: "Any local service business",
    icon: Store,
    accent: "#1677FF",
  },
]

// Lighter divider color — var(--ink) at 6% alpha.
const DIVIDER_COLOR = "rgba(11, 19, 43, 0.06)"

// Subtle hover tint — var(--accent) at 3% alpha.
const HOVER_TINT = "rgba(22, 119, 255, 0.03)"

export function IndustriesSection() {
  return (
    <section className="relative" id="industries">
      <div className="section-container section-y">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — heading block */}
          <div className="lg:col-span-5 lg:pt-4">
            <Pill>Industries we serve</Pill>
            <h2
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance max-w-[520px]"
              style={{ color: "var(--ink)" }}
            >
              Different industries.
              <br />
              Different{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">playbooks</span>.
              </span>
            </h2>
            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[420px]"
              style={{ color: "var(--muted)" }}
            >
              From HVAC emergencies to dinner reservations, every industry has its own rhythm.
              We tune your websites, SEO, automation, and review systems to the way your
              customers actually decide — so every lead you get is ready to buy.
            </p>
            <Link
              href="/industries"
              className="group mt-10 inline-flex items-center gap-2 text-[15px] font-semibold"
              style={{ color: "var(--accent)" }}
            >
              <span className="relative inline-block">
                View all industries
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-0.5 h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  style={{ background: "currentColor" }}
                />
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right — panel */}
          <div className="relative lg:col-span-7">
            {/* Ambient blue glow behind the panel */}
            <div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                inset: "-40px",
                background:
                  "radial-gradient(ellipse 65% 70% at 55% 50%, rgba(22,119,255,0.10), transparent 70%)",
                filter: "blur(36px)",
              }}
            />

            {/* Panel */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "var(--surface)",
                borderRadius: "28px",
                border: "1px solid rgba(220, 230, 242, 0.7)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.04), 0 20px 40px -16px rgba(17,35,68,0.12), 0 40px 80px -32px rgba(17,35,68,0.10)",
              }}
            >
              {/* Signature detail — soft accent blur in the top-right corner of the panel */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0"
                style={{
                  width: "55%",
                  height: "45%",
                  background:
                    "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(22,119,255,0.06), transparent 65%)",
                }}
              />

              <div className="relative grid grid-cols-1 sm:grid-cols-2">
                {INDUSTRIES.map((ind, idx) => {
                  const Icon = ind.icon
                  const isRightCol = idx % 2 === 1
                  const isLastRow = idx >= INDUSTRIES.length - 2
                  return (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="group relative transition-colors duration-200"
                      style={{
                        borderBottom: isLastRow ? "none" : `1px solid ${DIVIDER_COLOR}`,
                        borderLeft: isRightCol ? `1px solid ${DIVIDER_COLOR}` : "none",
                      }}
                      onMouseEnter={undefined}
                    >
                      {/* Hover tint layer */}
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: HOVER_TINT }}
                      />

                      {/* Content — lifts slightly on hover */}
                      <div className="relative flex items-center gap-6 p-7 md:p-8 transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                        {/* Icon chip */}
                        <div
                          className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200"
                          style={{
                            background: `${ind.accent}14`,
                            boxShadow: `inset 0 0 0 1px ${ind.accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
                          }}
                        >
                          <Icon size={26} strokeWidth={1.9} color={ind.accent} />
                        </div>

                        {/* Copy */}
                        <div className="min-w-0 flex-1">
                          <h3
                            className="text-[17px] font-semibold leading-tight transition-colors duration-200"
                            style={{ color: "var(--ink)" }}
                          >
                            {ind.name}
                          </h3>
                          <p
                            className="mt-2 text-[14px] leading-[1.5] max-w-[240px]"
                            style={{ color: "var(--muted)" }}
                          >
                            {ind.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight
                          size={18}
                          className="shrink-0 opacity-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-1.5"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
