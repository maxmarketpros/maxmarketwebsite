import { Store, Search, Globe, Star, MapPin, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const trustChips = [
  { Icon: Search, label: "Top-3 Map Pack" },
  { Icon: Globe,  label: "Custom website" },
  { Icon: Star,   label: "Review-velocity engine" },
]

export function LsvcHero() {
  return (
    <section aria-labelledby="lsvc-hero-heading" className="relative overflow-hidden">
      {/* Triple ambient aura stack */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[18%] right-[8%] w-[360px] h-[360px] sm:w-[580px] sm:h-[580px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[600px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <Store className="w-3.5 h-3.5" strokeWidth={2.4} />
              Local Service Businesses
            </Pill>

            <h1
              id="lsvc-hero-heading"
              className="mt-6 text-[42px] xs:text-[48px] sm:text-[58px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Rank on Google. Convert on{" "}
              <span className="whitespace-nowrap">
                your <span className="accent-underline">own site</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Local SEO, Google Map Pack dominance, and a custom-coded website engineered to convert &mdash; built for salons, studios, planners, photographers, trainers, pet pros, and every service business that lives and dies by &ldquo;near me&rdquo; searches.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a local-service consult
              </PrimaryButton>
              <SecondaryButton asLink href="#lsvc-website">
                See a website build
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

          {/* Right column — desktop Google SERP mockup */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.14s both" }}>
            <BrowserSerpMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function BrowserSerpMockup() {
  return (
    <div
      className="relative mx-auto max-w-[560px] overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow:
          "0 1px 3px var(--shadow-color), 0 20px 40px -16px var(--shadow-color), 0 40px 80px -32px var(--shadow-color)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#F3F5F9", borderBottom: "1px solid var(--border-color)" }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#28C840" }} />
        </span>
        <div
          className="flex-1 mx-2 flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: "#fff", border: "1px solid var(--border-color)" }}
        >
          <span className="w-3 h-3 rounded-full flex items-center justify-center" style={{ background: "#E8F1FF" }}>
            <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="#1677FF" strokeWidth="3">
              <path d="M12 2a4 4 0 0 1 4 4v4H8V6a4 4 0 0 1 4-4z" />
              <rect x="4" y="10" width="16" height="12" rx="2" />
            </svg>
          </span>
          <span className="text-[11.5px] font-medium tabular-nums" style={{ color: "#64748B" }}>
            google.com/search?q=hair+salon+near+me
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full" style={{ background: "#EBF4FF", color: "#1677FF", border: "1px solid #BFDBFE" }}>
          <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
          LIVE SERP
        </span>
      </div>

      {/* SERP content */}
      <div className="relative p-4 sm:p-5 space-y-3">
        {/* Sponsored Ad */}
        <SerpSlot
          label="Sponsored ad"
          slotColor="#F59E0B"
          topRow={
            <>
              <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#F59E0B", color: "#fff" }}>AD</span>
              <span className="text-[10px] font-medium" style={{ color: "#15803D" }}>Sponsored</span>
            </>
          }
          title="Clara's Hair Studio — Book Online Today"
          subtitle="Top-rated stylists · same-week availability · online booking"
          url="clarashair.com"
        />

        {/* Map Pack */}
        <div
          className="relative rounded-[14px] p-3 sm:p-3.5"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px rgba(17,35,68,0.04), 0 6px 16px rgba(22,119,255,0.10)",
            animation: "fadeInUp 0.7s ease-out 0.18s both",
          }}
        >
          <SlotLabel color="#1677FF">Map pack · #1</SlotLabel>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-semibold" style={{ color: "var(--muted)" }}>Places</span>
            <span style={{ color: "var(--border-color)" }}>·</span>
            <span className="text-[10px] font-medium" style={{ color: "var(--muted)" }}>3 results near you</span>
          </div>
          <div className="flex gap-3">
            {/* Mini map */}
            <div className="shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded-[8px] overflow-hidden" style={{ background: "#E8F0FA" }}>
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <defs>
                  <pattern id="lsvcGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#CBD5E1" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="80" height="80" fill="url(#lsvcGrid)" />
                <line x1="0" y1="44" x2="80" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
                <line x1="32" y1="0" x2="32" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
                <circle cx="32" cy="40" r="4.5" fill="#1677FF" />
                <circle cx="32" cy="40" r="8" fill="none" stroke="#1677FF" strokeWidth="1" opacity="0.5" />
                <circle cx="58" cy="22" r="2.5" fill="#94A3B8" />
                <circle cx="16" cy="60" r="2.5" fill="#94A3B8" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold leading-tight truncate" style={{ color: "var(--ink)" }}>
                Clara&rsquo;s Hair Studio
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px]" style={{ color: "var(--muted)" }}>
                <span style={{ color: "#F59E0B" }}>★</span>
                <span className="font-semibold" style={{ color: "var(--ink)" }}>4.9</span>
                <span>(428)</span>
                <span>·</span>
                <span>0.4 mi</span>
              </div>
              <div className="mt-1 text-[11px] font-medium" style={{ color: "#15803D" }}>Open · Closes 8pm</div>
              <div className="mt-1.5 flex gap-1 flex-wrap">
                {["Website", "Directions", "Call"].map((l) => (
                  <span
                    key={l}
                    className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "#EBF4FF", color: "#1677FF", border: "1px solid #BFDBFE" }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Overview */}
        <div
          className="relative rounded-[14px] p-3"
          style={{
            background: "linear-gradient(135deg, #EBF4FF 0%, #E6F7F4 100%)",
            border: "1px solid #BFDBFE",
            animation: "fadeInUp 0.7s ease-out 0.32s both",
          }}
        >
          <SlotLabel color="#8B5CF6">AI overview · cited</SlotLabel>
          <div className="flex items-start gap-2">
            <span
              className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #1677FF 100%)" }}
            >
              <Sparkles className="w-3 h-3" style={{ color: "#fff" }} strokeWidth={2.5} />
            </span>
            <p className="text-[12px] leading-[1.5]" style={{ color: "var(--ink)" }}>
              For hair salons near you, <span className="font-bold">Clara&rsquo;s Hair Studio</span> is widely recommended for its 4.9&#9733; reviews and same-week booking.
            </p>
          </div>
        </div>

        {/* Organic #1 */}
        <SerpSlot
          label="Organic · #1"
          slotColor="#22C55E"
          topRow={
            <>
              <span className="text-[10px] font-medium" style={{ color: "#15803D" }}>clarashair.com</span>
              <span style={{ color: "var(--border-color)" }}>›</span>
              <span className="text-[10px]" style={{ color: "var(--muted)" }}>book</span>
            </>
          }
          title="Clara's Hair Studio | Book Online Near You"
          subtitle="Full-service salon · cut, color, blowout · open 7 days · 4.9★ rating on 428 reviews"
          url={null}
        />

        {/* Footer strip */}
        <div
          className="flex items-center justify-center gap-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
          style={{ borderTop: "1px solid var(--border-color)", color: "var(--muted)" }}
        >
          <span className="flex items-center gap-1" style={{ color: "#F59E0B" }}>
            <MapPin className="w-2.5 h-2.5" strokeWidth={2.5} />
            Ad
          </span>
          <span>·</span>
          <span style={{ color: "#1677FF" }}>Map pack</span>
          <span>·</span>
          <span style={{ color: "#8B5CF6" }}>AI overview</span>
          <span>·</span>
          <span style={{ color: "#22C55E" }}>Organic #1</span>
        </div>
      </div>

      {/* Small annotation callout */}
      <div
        className="absolute top-[58%] -right-1 sm:-right-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full pointer-events-none"
        style={{
          background: "var(--surface)",
          border: "1px solid #22C55E",
          boxShadow: "0 4px 16px rgba(34,197,94,0.22)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
        <span className="text-[11px] font-semibold" style={{ color: "#0B132B" }}>4 slots. 1 business.</span>
      </div>
    </div>
  )
}

function SlotLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="absolute -top-2 left-3 inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
      style={{ background: "var(--surface)", color, border: `1px solid ${color}33` }}
    >
      <span className="w-1 h-1 rounded-full" style={{ background: color }} />
      {children}
    </div>
  )
}

function SerpSlot({
  label,
  slotColor,
  topRow,
  title,
  subtitle,
  url,
}: {
  label: string
  slotColor: string
  topRow: React.ReactNode
  title: string
  subtitle: string
  url: string | null
}) {
  return (
    <div
      className="relative rounded-[14px] p-3"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
        animation: "fadeInUp 0.7s ease-out 0.05s both",
      }}
    >
      <SlotLabel color={slotColor}>{label}</SlotLabel>
      <div className="flex items-center gap-1.5 mb-1 flex-wrap">{topRow}</div>
      <div className="text-[13px] font-semibold leading-tight" style={{ color: "#1a0dab" }}>
        {title}
      </div>
      <div className="mt-1 text-[11px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        {subtitle}
      </div>
      {url && (
        <div className="mt-1 text-[10.5px] font-medium" style={{ color: "var(--muted)" }}>
          {url}
        </div>
      )}
    </div>
  )
}
