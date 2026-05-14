import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
  Globe2,
} from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const proofPills = [
  { Icon: CalendarDays, label: "Founded March 19, 2020" },
  { Icon: MapPin, label: "Irvine, CA HQ" },
  { Icon: Users, label: "American team" },
  { Icon: Globe2, label: "Nationwide service" },
]

export function OurStoryHero() {
  return (
    <section
      aria-labelledby="our-story-hero-heading"
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
              Our Story
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
              Our story · Est. March 19, 2020 · Irvine, CA
            </span>

            <h1
              id="our-story-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              The Max Market Pros{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                story
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Max Market Pros opened on{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                March 19, 2020
              </span>{" "}
              &mdash; the same day California shut down. Five years later
              we&rsquo;re still here, helping business owners across the country
              grow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/contact/schedule">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="/about/team">
                Meet the team
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
          src="/about/our-story/irvine-hq.jpg"
          alt="Max Market Pros home base — Irvine, California office district under a clear blue sky"
          width={1200}
          height={800}
          sizes="(max-width: 1024px) 92vw, 560px"
          priority
          className="w-full h-auto block"
        />
      </div>

      {/* Floating "Day one" card — bottom-right */}
      <div
        className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-3 rounded-[var(--radius-md)] flex items-center gap-3"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[18px] sm:text-[20px] font-extrabold leading-none tracking-[-0.02em]"
          style={{
            background:
              "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          03&middot;19&middot;2020
        </span>
        <div className="flex flex-col">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Day one
          </span>
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Our first day in business
          </span>
        </div>
      </div>

      {/* Floating "5+ years" card — mid-left */}
      <div
        className="absolute top-[38%] -left-4 sm:-left-6 px-3 py-2.5 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-0.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          Five years
        </span>
        <span
          className="text-[13px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          Still here.
          <br />
          Still independent.
        </span>
      </div>
    </div>
  )
}
