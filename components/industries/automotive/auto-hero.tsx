import { Car, Phone, Star, Calendar } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"

const trustChips = [
  { Icon: Phone, label: "Missed-call text-back" },
  { Icon: Star, label: "5-star review engine" },
  { Icon: Calendar, label: "24/7 online booking" },
]

const heroTiles = [
  { id: "18375",           label: "Detailing",      accent: "#EC4899" },
  { id: "114435",          label: "Repair",         accent: "#EF4444" },
  { id: "15173",           label: "Tire & Glass",   accent: "#14B8A6" },
  { id: "17577",           label: "Rentals",        accent: "#0EA5E9" },
]

export function AutoHero() {
  return (
    <section aria-labelledby="auto-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[580px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <Car className="w-3.5 h-3.5" strokeWidth={2.4} />
              Automotive
            </Pill>

            <h1
              id="auto-hero-heading"
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Automotive marketing that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">fills your bays</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[500px]" style={{ color: "var(--muted)" }}>
              Local SEO, ads, online booking, and AI follow-up for auto detailers, mobile mechanics, repair shops, tire &amp; glass specialty, and rental fleets — all running from one stack.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="#auto-solutions">
                See recommended stack
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustChips.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — 2x2 Icons8 tile panel */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.12s both" }}
          >
            <div
              className="card-surface relative overflow-hidden p-6 sm:p-8"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 80% 20%, rgba(14,165,233,0.18) 0%, transparent 65%), radial-gradient(ellipse 70% 60% at 15% 85%, rgba(22,119,255,0.10) 0%, transparent 65%)",
                }}
              />

              <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
                {heroTiles.map((tile) => (
                  <div
                    key={tile.id}
                    className="relative overflow-hidden rounded-[var(--radius-md)] p-5 sm:p-6 flex flex-col items-center justify-center text-center"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                      minHeight: "140px",
                    }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{ background: `radial-gradient(ellipse 80% 80% at 50% 25%, ${tile.accent}1F 0%, transparent 70%)` }}
                    />
                    <img
                      src={icons8Url(tile.id, 128)}
                      alt=""
                      width={64}
                      height={64}
                      className="relative w-[56px] h-[56px] sm:w-[64px] sm:h-[64px]"
                      loading="eager"
                    />
                    <span
                      className="relative mt-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.08em]"
                      style={{ color: tile.accent }}
                    >
                      {tile.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* footer strip */}
              <div
                className="relative mt-5 sm:mt-6 flex items-center justify-between gap-3 px-4 py-3 rounded-[var(--radius-sm)]"
                style={{
                  background: "linear-gradient(90deg, rgba(14,165,233,0.08) 0%, rgba(22,119,255,0.08) 100%)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <span className="text-[13px] font-semibold" style={{ color: "var(--ink)" }}>
                  One stack. Every auto vertical.
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: "#0EA5E9" }}>
                  Built in-house
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
