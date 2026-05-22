import Link from "next/link"
import {
  Sparkles,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ROLES } from "@/lib/careers-data"

const proofPills = [
  { Icon: MapPin, label: "In-office Irvine, CA" },
  { Icon: Briefcase, label: `${ROLES.length} open tracks` },
  { Icon: GraduationCap, label: "Real mentorship" },
  { Icon: Users, label: "Independent agency" },
]

export function CareersHero() {
  return (
    <section
      aria-labelledby="careers-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.10) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(22,119,255,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/about" className="hover:text-[var(--accent)]">
                About
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Careers
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.35)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Now hiring · Irvine, CA · In-office
            </span>

            <h1
              id="careers-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              <span className="whitespace-nowrap">
                Build a{" "}
                <span
                  className="relative inline-block"
                  style={{
                    backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  career
                </span>
                ,
              </span>{" "}
              not a job.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Max Market Pros is an{" "}
              <Link
                href="/about/our-story"
                className="font-semibold hover:underline"
                style={{ color: "var(--ink)" }}
              >
                independent marketing agency
              </Link>{" "}
              in Irvine, California. We're hiring across sales, web, social,
              video, SEO, design, paid ads, and account management — all
              in-office, all working on real client work that ships this
              quarter.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#roles">
                See open roles
              </PrimaryButton>
              <SecondaryButton asLink href="#apply">
                Apply now
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="relative overflow-hidden p-6 sm:p-8"
        style={{
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-color)",
          background:
            "linear-gradient(180deg, #ffffff 0%, #F4F8FE 100%)",
          boxShadow:
            "0 4px 24px rgba(11,19,43,0.10), 0 24px 80px rgba(11,19,43,0.14)",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22C55E" }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Live · Open positions
            </span>
          </div>
          <span
            className="text-[18px] font-extrabold leading-none"
            style={{
              background:
                "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {ROLES.length}
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {ROLES.slice(0, 6).map((r) => (
            <li
              key={r.slug}
              className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-[var(--radius-sm)]"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="text-[13.5px] font-semibold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {r.title}
              </span>
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.10em] shrink-0"
                style={{ color: "var(--accent)" }}
              >
                Irvine
              </span>
            </li>
          ))}
          <li
            className="text-center text-[12px] font-semibold py-1"
            style={{ color: "var(--muted)" }}
          >
            +{ROLES.length - 6} more tracks below
          </li>
        </ul>
      </div>

      {/* Floating "HQ" card */}
      <div
        className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-3 rounded-[var(--radius-md)] flex items-center gap-3"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="w-9 h-9 rounded-full inline-flex items-center justify-center"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
        >
          <MapPin className="w-4 h-4" strokeWidth={2.4} />
        </span>
        <div className="flex flex-col">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Headquarters
          </span>
          <span
            className="text-[12.5px] font-bold"
            style={{ color: "var(--ink)" }}
          >
            Irvine, California
          </span>
        </div>
      </div>

    </div>
  )
}
