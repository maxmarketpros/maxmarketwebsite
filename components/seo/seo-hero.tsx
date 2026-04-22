"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Search, Star, TrendingUp, MapPin, Sparkles } from "lucide-react"

const trustItems = [
  { label: "250+ businesses ranked" },
  { label: "98% client retention" },
  { label: "4.9★ average rating" },
]

export function SeoHero() {
  return (
    <section
      aria-labelledby="seo-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-8%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div
            className="max-w-[620px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <a href="/" className="hover:text-[var(--accent)]">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <a href="/services" className="hover:text-[var(--accent)]">
                    Services
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>
                  SEO
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Search Engine Optimization
            </Pill>

            <h1
              id="seo-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Rank <span className="accent-underline">#1</span> where your
              customers actually{" "}
              <span className="whitespace-nowrap">search.</span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]"
              style={{ color: "var(--muted)" }}
            >
              Local SEO, technical SEO, on-page, off-page, backlinks, AI search,
              and press — done-for-you by an agency built for service
              businesses. Turn search traffic into booked jobs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free SEO audit
              </PrimaryButton>
              <SecondaryButton asLink href="#seo-results">
                See our results
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: illustration card */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            <div
              className="card-surface relative overflow-hidden p-8 sm:p-10 lg:p-12"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              {/* Aura */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(22,119,255,0.10) 0%, transparent 70%)",
                }}
              />

              {/* Big icons8 SEO illustration */}
              <div className="relative flex items-center justify-center py-4 sm:py-6">
                <img
                  src={icons8Url("17949", 512)}
                  alt="Google logo representing search engine rankings"
                  width={280}
                  height={280}
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(22,119,255,0.18)]"
                />
              </div>

              {/* Floating chips */}
              <div className="relative mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2.5">
                <RankChip
                  icon={<MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  label="#1 Maps"
                  color="#F59E0B"
                />
                <RankChip
                  icon={<Search className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  label="Top 3 organic"
                  color="#1677FF"
                />
                <RankChip
                  icon={<TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  label="AI‑ready"
                  color="#14B8A6"
                />
              </div>
            </div>

            {/* Decorative floating badge */}
            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#10B981" }}
              />
              Ranking now
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RankChip({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <div
      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-2 rounded-full bg-white border text-[11px] sm:text-[12px] font-semibold"
      style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
    >
      <span
        className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full shrink-0"
        style={{ background: `${color}1A`, color }}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  )
}
