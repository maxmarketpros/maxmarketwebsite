import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
  ShieldCheck,
  Globe2,
} from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const proofPills = [
  { Icon: CalendarDays, label: "Since March 2020" },
  { Icon: MapPin, label: "Irvine, CA HQ" },
  { Icon: Users, label: "10 in-house specialists" },
  { Icon: ShieldCheck, label: "Senior-only, U.S. team" },
]

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
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
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              About
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
              Irvine, CA · Since 2020 · 1,000+ businesses
            </span>

            <h1
              id="about-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              About{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                Max Market Pros
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We&rsquo;re a senior, in-house marketing team out of Irvine,
              California &mdash; built to help service businesses grow on Google
              and close more jobs.{" "}
              <Link
                href="/about/our-story"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Read the founding story &rarr;
              </Link>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/about/team">
                Meet the team
              </PrimaryButton>
              <SecondaryButton asLink href="/about/practices">
                See how we work
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
            <HeroPhotoFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroPhotoFrame() {
  return (
    <div className="relative">
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow:
            "0 4px 24px rgba(11,19,43,0.18), 0 24px 80px rgba(11,19,43,0.30)",
        }}
      >
        <Image
          src="/about/irvine-hero.png"
          alt="Aerial view of the Irvine, California office district — Max Market Pros home base"
          width={1328}
          height={748}
          sizes="(max-width: 1024px) 92vw, 560px"
          priority
          className="w-full h-auto block"
        />
      </div>

      {/* Floating "1,000+ clients" card — top-right */}
      <div
        className="absolute -top-5 -right-4 sm:-right-6 px-3.5 py-2.5 rounded-[var(--radius-md)] hidden sm:flex items-center gap-2.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="w-8 h-8 rounded-full inline-flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,119,255,0.18) 0%, rgba(116,211,255,0.24) 100%)",
            color: "var(--accent)",
          }}
        >
          <Users className="w-4 h-4" strokeWidth={2.5} />
        </span>
        <div className="flex flex-col">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Helped
          </span>
          <span
            className="text-[13px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            1,000+ businesses
          </span>
        </div>
      </div>

      {/* Floating "Nationwide" card — mid-left */}
      <div
        className="absolute top-[58%] -left-4 sm:-left-8 px-3 py-2.5 rounded-[var(--radius-md)] hidden md:flex items-center gap-2.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="w-8 h-8 rounded-full inline-flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(116,211,255,0.28) 0%, rgba(22,119,255,0.18) 100%)",
            color: "var(--accent)",
          }}
        >
          <Globe2 className="w-4 h-4" strokeWidth={2.5} />
        </span>
        <div className="flex flex-col">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Reach
          </span>
          <span
            className="text-[13px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            All 50 states
          </span>
        </div>
      </div>
    </div>
  )
}
