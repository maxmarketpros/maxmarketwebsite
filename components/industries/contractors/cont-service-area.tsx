import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const statTiles = [
  { value: "87%",   label: "of contractor searches are \u2018near me\u2019" },
  { value: "Top 3", label: "Google map-pack goal" },
  { value: "15 mi", label: "typical service-radius we target" },
  { value: "<30d",  label: "time-to-map-pack lift for most shops" },
]

const chipLinks = [
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Google Ads", href: "/services/paid-ads/google-ads" },
  { label: "Analytics", href: "/solutions/analytics" },
]

// Zip-cluster pin coordinates (cx, cy) + label offsets
const zipPins: { cx: number; cy: number; zip: string; rating: string; labelOffsetY: number }[] = [
  { cx: 110, cy: 90,  zip: "48104", rating: "4.8 \u00B7 42", labelOffsetY: -14 },
  { cx: 330, cy: 110, zip: "48105", rating: "4.9 \u00B7 38", labelOffsetY: -14 },
  { cx: 90,  cy: 250, zip: "48106", rating: "4.7 \u00B7 29", labelOffsetY: 22 },
  { cx: 340, cy: 270, zip: "48108", rating: "4.8 \u00B7 35", labelOffsetY: 22 },
  { cx: 230, cy: 60,  zip: "48109", rating: "4.9 \u00B7 51", labelOffsetY: -14 },
]

export function ContServiceArea() {
  return (
    <section
      aria-labelledby="cont-service-area-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.10) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Local Dominance"
          heading={
            <span id="cont-service-area-heading">
              We fight the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">&lsquo;near me&rsquo; war</span>
              </span>
              , zip by zip.
            </span>
          }
          paragraph={"Contractor leads don\u2019t type city names \u2014 they type \u2018near me\u2019. Your Google Business pin and your ad geo-fences have to sit exactly where your trucks already are."}
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Map panel */}
          <article
            className="lg:col-span-3 card-surface relative overflow-hidden p-6 sm:p-8 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(239,68,68,0.10) 0%, transparent 65%)" }}
            />

            <div className="relative flex items-center justify-between mb-4">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
                Service-area map
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#EF4444" }}>
                Live coverage
              </span>
            </div>

            {/* SVG map */}
            <div
              className="relative rounded-[var(--radius-sm)] overflow-hidden"
              style={{ background: "#FDFCF7", border: "1px solid var(--border-color)", aspectRatio: "420 / 340" }}
            >
              <svg viewBox="0 0 420 340" className="w-full h-full">
                <defs>
                  <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CBD5E1" strokeWidth="0.4" strokeDasharray="2 3" />
                  </pattern>
                </defs>
                <rect width="420" height="340" fill="url(#mapGrid)" />

                {/* Stylized road lines */}
                <g stroke="#94A3B8" strokeWidth="1.5" opacity="0.55">
                  <line x1="0" y1="140" x2="420" y2="160" />
                  <line x1="0" y1="240" x2="420" y2="210" />
                  <line x1="150" y1="0" x2="170" y2="340" />
                  <line x1="280" y1="0" x2="260" y2="340" />
                  <line x1="0" y1="60" x2="420" y2="40" />
                </g>

                {/* Geo-fence rectangles */}
                <g fill="rgba(251,191,36,0.14)" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="5 3">
                  <rect x="70" y="60" width="90" height="80" rx="4" />
                  <rect x="290" y="220" width="90" height="80" rx="4" />
                </g>
                <text x="75" y="56" fontSize="9" fontWeight="700" fill="#B45309" letterSpacing="0.05em">
                  GOOGLE ADS GEO-FENCE
                </text>
                <text x="295" y="216" fontSize="9" fontWeight="700" fill="#B45309" letterSpacing="0.05em">
                  GOOGLE ADS GEO-FENCE
                </text>

                {/* 15-mile radius ring */}
                <circle cx="210" cy="170" r="130" fill="rgba(239,68,68,0.05)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
                <text x="210" y="48" fontSize="9" fontWeight="700" fill="#EF4444" textAnchor="middle" letterSpacing="0.08em">
                  15-MILE RADIUS
                </text>

                {/* Zip-cluster pins */}
                {zipPins.map((p) => (
                  <g key={p.zip}>
                    {/* Pin shadow */}
                    <ellipse cx={p.cx} cy={p.cy + 6} rx="4" ry="1.5" fill="rgba(15,23,42,0.25)" />
                    {/* Pin body */}
                    <path
                      d={`M ${p.cx} ${p.cy - 10} C ${p.cx - 5} ${p.cy - 10}, ${p.cx - 5} ${p.cy - 2}, ${p.cx} ${p.cy + 4} C ${p.cx + 5} ${p.cy - 2}, ${p.cx + 5} ${p.cy - 10}, ${p.cx} ${p.cy - 10} Z`}
                      fill="#FF6B35"
                      stroke="#fff"
                      strokeWidth="0.6"
                    />
                    <circle cx={p.cx} cy={p.cy - 6} r="1.6" fill="#fff" />
                    {/* Label */}
                    <rect
                      x={p.cx - 32}
                      y={p.cy + p.labelOffsetY - 8}
                      width="64"
                      height="16"
                      rx="3"
                      fill="#fff"
                      stroke="#E2E8F0"
                      strokeWidth="0.5"
                    />
                    <text
                      x={p.cx}
                      y={p.cy + p.labelOffsetY + 3}
                      fontSize="9"
                      fontWeight="700"
                      fill="#0F172A"
                      textAnchor="middle"
                    >
                      {p.zip} &#9733;{p.rating}
                    </text>
                  </g>
                ))}

                {/* Center GBP pin with pulsing ring */}
                <g>
                  <circle cx="210" cy="170" r="24" fill="rgba(239,68,68,0.14)">
                    <animate attributeName="r" values="18;30;18" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.55;0.05;0.55" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="210" cy="170" r="14" fill="rgba(239,68,68,0.18)" />
                  <path
                    d="M 210 152 C 200 152, 200 168, 210 178 C 220 168, 220 152, 210 152 Z"
                    fill="#EF4444"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <circle cx="210" cy="163" r="3.5" fill="#fff" />
                  <rect x="178" y="184" width="64" height="18" rx="3" fill="#0F172A" />
                  <text x="210" y="196" fontSize="10" fontWeight="800" fill="#fff" textAnchor="middle" letterSpacing="0.1em">
                    YOUR SHOP
                  </text>
                </g>
              </svg>
            </div>

            {/* Legend */}
            <div className="relative mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px]" style={{ color: "var(--muted)" }}>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
                Your GBP
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#FF6B35" }} />
                Top zip clusters
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3.5 h-2.5 rounded-sm" style={{ background: "rgba(251,191,36,0.25)", border: "1px dashed #FBBF24" }} />
                Ad geo-fences
              </span>
            </div>
          </article>

          {/* Stat rail */}
          <article
            className="lg:col-span-2 card-surface relative overflow-hidden p-6 sm:p-8 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(255,107,53,0.14) 0%, transparent 65%)" }}
            />

            <span
              className="relative inline-flex items-center gap-1.5 self-start text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,107,53,0.14)", color: "#FF6B35" }}
            >
              <MapPin className="w-3 h-3" strokeWidth={2.5} />
              Service area
            </span>

            <h3 className="relative mt-4 text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              The &lsquo;near me&rsquo;{" "}
              <span className="whitespace-nowrap">war is won locally</span>.
            </h3>

            <p className="relative mt-3 text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
              87% of contractor searches end with &lsquo;near me&rsquo; or a city name. We map your radius, light up the zip codes that actually convert, and fence them with ads.
            </p>

            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {statTiles.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[var(--radius-sm)] px-3 py-3 text-center"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.22)" }}
                >
                  <div className="text-[20px] font-bold leading-none tracking-[-0.02em]" style={{ color: "#EF4444" }}>
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium leading-[1.35]" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 pt-5 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--border-color)" }}>
              {chipLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-2.5 py-1 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                >
                  {l.label}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
