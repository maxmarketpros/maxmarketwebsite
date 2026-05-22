import { HardHat, Globe, Search, Phone, MapPin, Mic } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const trustChips = [
  { Icon: Globe,  label: "Lead-capture websites" },
  { Icon: Search, label: "Top-3 Google local" },
  { Icon: Phone,  label: "24/7 call-ready" },
]

export function ContHero() {
  return (
    <section aria-labelledby="cont-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[600px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <HardHat className="w-3.5 h-3.5" strokeWidth={2.4} />
              Contractors
            </Pill>

            <h1
              id="cont-hero-heading"
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Contractor marketing that keeps your{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">crew booked</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Lead-capture websites, #1 Google rankings for &lsquo;near me&rsquo; searches, tuned Google + Meta ads, and lead-to-invoice automation for roofing, HVAC, plumbing, electrical, GCs, remodelers, and outdoor-trade crews.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a contractor consult
              </PrimaryButton>
              <SecondaryButton asLink href="#cont-web-google">
                See our contractor stack
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustChips.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#EF4444" }} strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Google search mockup */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.12s both" }}>
            <div
              className="relative mx-auto max-w-[420px] overflow-hidden p-4 sm:p-5"
              style={{
                borderRadius: "28px",
                background: "linear-gradient(180deg, #1a1a1a 0%, #0F172A 100%)",
                boxShadow: "0 18px 48px rgba(11,19,43,0.35), 0 2px 6px rgba(11,19,43,0.2)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Notch */}
              <div
                aria-hidden
                className="mx-auto mb-3 h-[5px] w-24 rounded-full"
                style={{ background: "rgba(255,255,255,0.12)" }}
              />

              {/* Phone inner surface */}
              <div
                className="relative p-3 sm:p-4"
                style={{ background: "#F8FAFC", borderRadius: "18px" }}
              >
                {/* Search bar */}
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-full"
                  style={{ background: "#fff", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(11,19,43,0.05)" }}
                >
                  <Search className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} strokeWidth={2.2} />
                  <span className="text-[13px] font-medium flex-1" style={{ color: "#0F172A" }}>
                    roofer near me
                  </span>
                  <Mic className="w-3.5 h-3.5 shrink-0" style={{ color: "#94A3B8" }} strokeWidth={2.2} />
                </div>

                {/* Result 1: Ad */}
                <div
                  className="mt-3 rounded-[12px] p-3"
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8F0",
                    animation: "fadeInUp 0.7s ease-out 0.05s both",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                      style={{ background: "#FBBF24", color: "#0F172A" }}
                    >
                      AD
                    </span>
                    <span className="text-[10px] font-medium" style={{ color: "#15803D" }}>
                      Sponsored
                    </span>
                  </div>
                  <div className="text-[12.5px] font-semibold leading-tight" style={{ color: "#1a0dab" }}>
                    Summit Roofing &mdash; 24/7 Storm Response
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[10.5px]" style={{ color: "#475569" }}>
                    <span style={{ color: "#FBBF24" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <span className="font-semibold">4.9</span>
                    <span>(127)</span>
                  </div>
                  <div className="mt-1 text-[11px] leading-[1.4]" style={{ color: "#475569" }}>
                    Free estimates &middot; Licensed &middot; Bonded
                  </div>
                </div>

                {/* Result 2: GBP local pack */}
                <div
                  className="mt-2.5 rounded-[12px] p-3"
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8F0",
                    animation: "fadeInUp 0.7s ease-out 0.20s both",
                  }}
                >
                  <div className="flex gap-2.5">
                    {/* Mini map */}
                    <div
                      className="shrink-0 relative w-16 h-16 rounded-[8px] overflow-hidden"
                      style={{ background: "#E5E9F2" }}
                    >
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <defs>
                          <pattern id="gridSmall" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#CBD5E1" strokeWidth="0.4" />
                          </pattern>
                        </defs>
                        <rect width="64" height="64" fill="url(#gridSmall)" />
                        <line x1="0" y1="34" x2="64" y2="34" stroke="#94A3B8" strokeWidth="1.5" />
                        <line x1="28" y1="0" x2="28" y2="64" stroke="#94A3B8" strokeWidth="1.5" />
                        {/* Pins */}
                        <g>
                          <circle cx="28" cy="30" r="3" fill="#EF4444" />
                          <circle cx="44" cy="20" r="2.5" fill="#EF4444" />
                          <circle cx="16" cy="46" r="2.5" fill="#EF4444" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12.5px] font-semibold leading-tight truncate" style={{ color: "#0F172A" }}>
                        Summit Roofing Co.
                      </div>
                      <div className="mt-0.5 flex items-center gap-1 text-[10.5px]" style={{ color: "#475569" }}>
                        <span style={{ color: "#FBBF24" }}>&#9733;</span>
                        <span className="font-semibold">4.9</span>
                        <span>(312)</span>
                        <span>&middot;</span>
                        <span>0.8 mi</span>
                      </div>
                      <div className="mt-0.5 text-[10.5px] font-medium" style={{ color: "#15803D" }}>
                        Open now
                      </div>
                      <div className="mt-1 flex gap-1 flex-wrap">
                        {["Website", "Directions", "Call"].map((l) => (
                          <span
                            key={l}
                            className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full"
                            style={{ background: "#EFF6FF", color: "#1a0dab" }}
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Result 3: Organic #1 */}
                <div
                  className="mt-2.5 rounded-[12px] p-3"
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8F0",
                    animation: "fadeInUp 0.7s ease-out 0.35s both",
                  }}
                >
                  <div className="flex items-center gap-1 text-[9.5px]" style={{ color: "#15803D" }}>
                    <span className="font-medium">summitroofing.com</span>
                    <span>&rsaquo;</span>
                    <span>roofing</span>
                  </div>
                  <div className="mt-0.5 text-[12.5px] font-semibold leading-tight" style={{ color: "#1a0dab" }}>
                    Summit Roofing | Roof Repair &amp; Replacement Near You
                  </div>
                  <div className="mt-1 text-[10.5px] leading-[1.4]" style={{ color: "#475569" }}>
                    Licensed roofers serving the tri-county area since 1998. Free inspections, insurance-claim support, and lifetime workmanship warranty...
                  </div>
                </div>

                {/* Footer strip */}
                <div
                  className="mt-3 pt-2.5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em]"
                  style={{ borderTop: "1px solid #E2E8F0", color: "#475569" }}
                >
                  <span style={{ color: "#FBBF24" }}>Ad</span>
                  <span>&middot;</span>
                  <span style={{ color: "#EF4444" }}>
                    <MapPin className="inline w-2.5 h-2.5 -mt-0.5" strokeWidth={2.5} /> Map pack
                  </span>
                  <span>&middot;</span>
                  <span style={{ color: "#FF6B35" }}>#1 organic</span>
                </div>
              </div>

              {/* Caption below phone */}
              <div className="mt-3 text-center text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                Three slots. One name. Every search.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
