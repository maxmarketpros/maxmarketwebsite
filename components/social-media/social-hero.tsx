"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Sparkles, Star } from "lucide-react"

const platformLogos = [
  { id: "32323", name: "Instagram" },
  { id: "118640", name: "TikTok" },
  { id: "13983", name: "YouTube" },
  { id: "118497", name: "Facebook" },
  { id: "13930", name: "LinkedIn" },
  { id: "ClbD5JTFM7FA", name: "X" },
  { id: "63676", name: "Pinterest" },
  { id: "23032", name: "Snapchat" },
]

const trustItems = [
  "25M+ impressions generated",
  "5K+ pieces of content shipped",
  "4.9★ creator team",
]

export function SocialHero() {
  return (
    <section
      aria-labelledby="social-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Multi-color brand glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-15%] left-[10%] w-[380px] h-[380px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[0%] right-[5%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.16) 0%, rgba(22,119,255,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div
          className="max-w-[820px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-[13px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ol className="flex items-center justify-center gap-1.5">
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
                Social Media
              </li>
            </ol>
          </nav>

          <div className="flex justify-center">
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Social Media Marketing
            </Pill>
          </div>

          <h1
            id="social-hero-heading"
            className="mt-6 text-[38px] xs:text-[44px] sm:text-[52px] lg:text-[62px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
            style={{ color: "var(--ink)" }}
          >
            Turn followers into{" "}
            <span className="accent-underline">paying customers</span> on every
            platform.
          </h1>

          <p
            className="mt-6 text-[16.5px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Full-service social media marketing for service businesses. Content
            creation, TikTok and Instagram growth, YouTube strategy, video
            editing, graphic design — all handled by one in-house creator team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              Get a free content audit
            </PrimaryButton>
            <SecondaryButton asLink href="#social-growth">
              See our growth results
            </SecondaryButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustItems.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                <Star
                  className="w-4 h-4"
                  style={{ color: "var(--accent)" }}
                  fill="currentColor"
                  strokeWidth={0}
                />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo halo strip */}
        <div
          className="mt-12 sm:mt-16"
          style={{ animation: "fadeInUp 0.8s ease-out 0.15s both" }}
        >
          <div
            className="text-center text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-[0.14em] mb-5"
            style={{ color: "var(--muted)" }}
          >
            We grow brands on
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-[880px] mx-auto">
            {platformLogos.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border text-[12.5px] sm:text-[13.5px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(17,35,68,0.08)]"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--ink)",
                }}
              >
                <img
                  src={icons8Url(p.id, 64)}
                  alt={`${p.name} logo`}
                  width={22}
                  height={22}
                  loading="eager"
                  decoding="async"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] object-contain shrink-0"
                />
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
