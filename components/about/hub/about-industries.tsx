import Link from "next/link"
import {
  Wrench,
  HardHat,
  Stethoscope,
  Car,
  UtensilsCrossed,
  Store,
  ArrowRight,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Industry = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  blurb: string
  href: string
  accent: string
  accentSoft: string
}

const industries: Industry[] = [
  {
    Icon: Wrench,
    label: "Home Services",
    blurb: "HVAC, plumbing, electrical, roofing",
    href: "/industries/home-services",
    accent: "#1677FF",
    accentSoft: "rgba(22,119,255,0.08)",
  },
  {
    Icon: HardHat,
    label: "Contractors",
    blurb: "General, remodel, paint, landscape",
    href: "/industries/contractors",
    accent: "#F59E0B",
    accentSoft: "rgba(245,158,11,0.10)",
  },
  {
    Icon: Stethoscope,
    label: "Medical",
    blurb: "Dental, chiro, derm, med-spa, vet",
    href: "/industries/medical",
    accent: "#0EA5E9",
    accentSoft: "rgba(14,165,233,0.10)",
  },
  {
    Icon: Car,
    label: "Automotive",
    blurb: "Repair, body, detail, tire, transmission",
    href: "/industries/automotive",
    accent: "#E11D48",
    accentSoft: "rgba(225,29,72,0.08)",
  },
  {
    Icon: UtensilsCrossed,
    label: "Restaurants",
    blurb: "QSR, family-owned, multi-location",
    href: "/industries/restaurants",
    accent: "#7C3AED",
    accentSoft: "rgba(124,58,237,0.10)",
  },
  {
    Icon: Store,
    label: "Local Service",
    blurb: "Anything else service-based, local-first",
    href: "/industries/local-service",
    accent: "#22C55E",
    accentSoft: "rgba(34,197,94,0.10)",
  },
]

export function AboutIndustries() {
  return (
    <section
      aria-labelledby="about-industries-heading"
      className="relative"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Who we serve"
          heading={
            <span id="about-industries-heading">
              We&rsquo;re built for{" "}
              <span className="accent-underline">service businesses</span>.
            </span>
          }
          paragraph="Our entire playbook is tuned for owner-operators who live or die by phone calls, booked jobs, and Google rankings."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-[1100px] mx-auto">
          {industries.map((ind, i) => (
            <Link
              key={ind.label}
              href={ind.href}
              className="group flex items-center gap-4 p-5 rounded-[var(--radius-lg)] border transition-all hover:translate-y-[-2px]"
              style={{
                background: ind.accentSoft,
                borderColor: `${ind.accent}33`,
                animation: `fadeInUp 0.6s ease-out ${0.05 + i * 0.06}s both`,
              }}
            >
              <span
                className="w-12 h-12 rounded-full inline-flex items-center justify-center shrink-0"
                style={{
                  background: "#fff",
                  color: ind.accent,
                  boxShadow: "0 1px 3px rgba(11,19,43,0.08)",
                }}
              >
                <ind.Icon className="w-5.5 h-5.5" strokeWidth={2.25} />
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[16px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {ind.label}
                </h3>
                <p
                  className="mt-0.5 text-[12.5px] leading-tight truncate"
                  style={{ color: "var(--muted)" }}
                >
                  {ind.blurb}
                </p>
              </div>
              <ArrowRight
                className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{ color: ind.accent }}
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            See all industries we serve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
