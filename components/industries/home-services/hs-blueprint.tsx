import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

type Zone = {
  id: string
  label: string
  caption: string
  iconId: string
  accent: string
  // Desktop blueprint placement (% of container, top-left anchor)
  top: string
  left: string
  // Which solution to link to on hover/click
  href: string
}

const zones: Zone[] = [
  { id: "gutter",    label: "Gutter & Window",  caption: "Roofline jobs",      iconId: "La405GTcaLUr", accent: "#EAB308", top: "6%",  left: "62%", href: "/services/seo/local" },
  { id: "hvac-duct", label: "Air-Duct Cleaning", caption: "Attic + vents",      iconId: "13263",        accent: "#0EA5E9", top: "18%", left: "30%", href: "/solutions/calendar" },
  { id: "chimney",   label: "Chimney Sweep",    caption: "Fireplace safety",   iconId: "37512",        accent: "#EF4444", top: "3%",  left: "22%", href: "/services/seo/local" },
  { id: "appliance", label: "Appliance Repair", caption: "Fridge \u00b7 washer \u00b7 dryer", iconId: "_equuTIepTNy", accent: "#F59E0B", top: "42%", left: "68%", href: "/solutions/lead-generation" },
  { id: "cleaning",  label: "House Cleaning",   caption: "Recurring + move-out", iconId: "85855",      accent: "#14B8A6", top: "40%", left: "14%", href: "/solutions/calendar" },
  { id: "garage",    label: "Garage Door",      caption: "Openers \u00b7 springs",  iconId: "20425",    accent: "#8B5CF6", top: "62%", left: "22%", href: "/services/paid-ads/google-ads" },
  { id: "locksmith", label: "Locksmith",        caption: "24/7 lockouts",       iconId: "12279",       accent: "#F97316", top: "60%", left: "56%", href: "/solutions/ai-agents" },
  { id: "lawn",      label: "Lawn Care",        caption: "Mow \u00b7 edge \u00b7 fert",  iconId: "_dUYw8fOY_1u", accent: "#22C55E", top: "82%", left: "12%", href: "/services/social-media/review-generation" },
  { id: "pool",      label: "Pool Service",     caption: "Weekly maintenance",  iconId: "XH3AddzHs6tY", accent: "#1677FF", top: "80%", left: "74%", href: "/solutions/payments" },
  { id: "pest",      label: "Pest Control",     caption: "Perimeter + interior",iconId: "13449",       accent: "#EC4899", top: "92%", left: "44%", href: "/solutions/email-marketing" },
]

// Also include handyman as a bonus chip (goes in the grid below, not on the house)
const extraChips = [
  { label: "Handyman",        iconId: "13439",       accent: "#6366F1", href: "/services/seo/local" },
  { label: "Junk Removal",    iconId: "12850",       accent: "#F43F5E", href: "/services/paid-ads/google-ads" },
  { label: "Moving Help",     iconId: "13616",       accent: "#0EA5E9", href: "/services/web-design/custom-coded" },
]

export function HsBlueprint() {
  return (
    <section id="hs-blueprint" aria-labelledby="hs-blueprint-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Services we market"
          heading={
            <>
              Every zone of the home.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Every service call</span>.
              </span>
            </>
          }
          paragraph={"Ten recurring-service verticals we\u2019ve marketed end-to-end \u2014 from roofline to backyard, and everything between the studs."}
        />

        {/* Desktop blueprint (md+) */}
        <div
          className="relative hidden md:block mt-14 mx-auto"
          style={{ maxWidth: "960px", aspectRatio: "16 / 11" }}
        >
          {/* Soft aura behind the house */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(22,119,255,0.08) 0%, transparent 70%)",
            }}
          />

          {/* House SVG */}
          <svg
            viewBox="0 0 960 660"
            className="absolute inset-0 w-full h-full"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="hsWall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#F3F7FC" />
              </linearGradient>
              <linearGradient id="hsRoof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8EFF8" />
                <stop offset="100%" stopColor="#DCE6F2" />
              </linearGradient>
              <linearGradient id="hsGround" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,197,94,0.12)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.04)" />
              </linearGradient>
              <pattern id="hsGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#DCE6F2" strokeWidth="0.5" opacity="0.5" />
              </pattern>
            </defs>

            {/* Grid background */}
            <rect width="960" height="660" fill="url(#hsGrid)" />

            {/* Perimeter (pest control) \u2014 dashed rect around whole plot */}
            <rect
              x="60"
              y="120"
              width="840"
              height="500"
              rx="10"
              fill="none"
              stroke="#EC4899"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity="0.35"
            />

            {/* Ground */}
            <rect x="40" y="540" width="880" height="100" fill="url(#hsGround)" rx="6" />
            {/* Grass hint marks */}
            <g stroke="#22C55E" strokeWidth="1.2" opacity="0.35" strokeLinecap="round">
              <path d="M 80 560 L 85 548" />
              <path d="M 110 560 L 115 548" />
              <path d="M 140 560 L 145 548" />
              <path d="M 170 560 L 175 548" />
              <path d="M 220 560 L 225 548" />
              <path d="M 780 560 L 785 548" />
              <path d="M 820 560 L 825 548" />
              <path d="M 860 560 L 865 548" />
            </g>

            {/* House body */}
            <rect x="240" y="260" width="400" height="290" fill="url(#hsWall)" stroke="#DCE6F2" strokeWidth="2" rx="4" />
            {/* Floor divider */}
            <line x1="240" y1="400" x2="640" y2="400" stroke="#DCE6F2" strokeWidth="1.5" strokeDasharray="4 6" />

            {/* Roof */}
            <path d="M 220 260 L 440 110 L 660 260 Z" fill="url(#hsRoof)" stroke="#CBD5E1" strokeWidth="2" strokeLinejoin="round" />
            {/* Roof ridge shading */}
            <path d="M 250 255 L 440 120 L 630 255" fill="none" stroke="#ffffff" strokeWidth="1.5" />

            {/* Chimney */}
            <rect x="300" y="150" width="36" height="60" fill="url(#hsWall)" stroke="#CBD5E1" strokeWidth="2" rx="2" />
            <rect x="296" y="146" width="44" height="10" fill="#DCE6F2" stroke="#CBD5E1" strokeWidth="1.5" rx="2" />

            {/* Upper-floor windows */}
            <g stroke="#CBD5E1" strokeWidth="1.5">
              <rect x="290" y="300" width="60" height="60" fill="#F7FAFC" rx="3" />
              <line x1="320" y1="300" x2="320" y2="360" />
              <line x1="290" y1="330" x2="350" y2="330" />

              <rect x="530" y="300" width="60" height="60" fill="#F7FAFC" rx="3" />
              <line x1="560" y1="300" x2="560" y2="360" />
              <line x1="530" y1="330" x2="590" y2="330" />
            </g>

            {/* Main-floor door */}
            <rect x="410" y="440" width="60" height="110" fill="#EBF4FF" stroke="#BFDBFE" strokeWidth="1.5" rx="4" />
            <circle cx="458" cy="498" r="2.5" fill="#1677FF" />

            {/* Main-floor window + garage */}
            <g stroke="#CBD5E1" strokeWidth="1.5">
              <rect x="280" y="450" width="80" height="80" fill="#F7FAFC" rx="3" />
              <line x1="320" y1="450" x2="320" y2="530" />
              <line x1="280" y1="490" x2="360" y2="490" />
            </g>
            {/* Garage */}
            <g>
              <rect x="510" y="450" width="120" height="80" fill="#EDF2F7" stroke="#CBD5E1" strokeWidth="1.5" rx="3" />
              <line x1="510" y1="470" x2="630" y2="470" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="510" y1="490" x2="630" y2="490" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="510" y1="510" x2="630" y2="510" stroke="#CBD5E1" strokeWidth="1" />
            </g>

            {/* Pool \u2014 right side */}
            <ellipse cx="790" cy="550" rx="90" ry="34" fill="rgba(22,119,255,0.12)" stroke="#93C5FD" strokeWidth="1.5" />
            <path d="M 710 550 Q 750 540, 790 550 T 870 550" stroke="#60A5FA" strokeWidth="1.2" fill="none" opacity="0.6" />
          </svg>

          {/* Pins absolutely placed over SVG */}
          {zones.map(({ id, label, caption, iconId, accent, top, left, href }) => (
            <Link
              key={id}
              href={href}
              className="group absolute flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                top,
                left,
                background: "var(--surface)",
                border: `1px solid ${accent}33`,
                boxShadow: `0 1px 3px rgba(17,35,68,0.08), 0 8px 24px ${accent}22`,
              }}
            >
              {/* Soft aura behind chip */}
              <span
                aria-hidden
                className="absolute -inset-2 rounded-full -z-10 opacity-80 blur-md"
                style={{ background: `${accent}18` }}
              />
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${accent}14`, boxShadow: `inset 0 0 0 1px ${accent}33` }}
              >
                <img
                  src={icons8Url(iconId, 64)}
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                  className="w-[22px] h-[22px] object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-semibold" style={{ color: "var(--ink)" }}>{label}</span>
                <span className="block text-[10.5px] font-medium" style={{ color: accent }}>{caption}</span>
              </span>
            </Link>
          ))}

          {/* Corner label */}
          <div
            className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.9)", color: "var(--muted)", border: "1px solid var(--border-color)" }}
          >
            Home &#8226; Blueprint
          </div>
          <div
            className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.9)", color: "#EC4899", border: "1px solid #EC489933" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#EC4899" }} />
            Perimeter = Pest
          </div>
        </div>

        {/* Mobile fallback grid (below md) */}
        <div className="md:hidden mt-10 grid grid-cols-2 gap-3">
          {zones.map(({ id, label, caption, iconId, accent, href }) => (
            <Link
              key={id}
              href={href}
              className="card-surface card-surface-hover p-3.5 flex items-start gap-3"
            >
              <span
                className="w-10 h-10 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                style={{ background: `${accent}14`, boxShadow: `inset 0 0 0 1px ${accent}33` }}
              >
                <img
                  src={icons8Url(iconId, 64)}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-6 object-contain"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>{label}</span>
                <span className="block text-[11px] font-medium leading-tight mt-0.5" style={{ color: accent }}>{caption}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Extras chip row + footer link */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.1em] mr-1"
            style={{ color: "var(--muted)" }}
          >
            Also
          </span>
          {extraChips.map(({ label, iconId, accent, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-2 rounded-full pl-1.5 pr-3.5 py-1 border transition-colors"
              style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: `${accent}18` }}
              >
                <img
                  src={icons8Url(iconId, 48)}
                  alt=""
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
              </span>
              <span className="text-[12.5px] font-semibold" style={{ color: "var(--ink)" }}>{label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            See the full stack for home services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
