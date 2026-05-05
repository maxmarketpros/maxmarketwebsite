import { SectionHeader } from "@/components/ui/section-header"
import {
  Home,
  HardHat,
  Building2,
  Mountain,
  Heart,
  Wrench,
  Tractor,
  Sparkles,
  ArrowRight,
} from "lucide-react"

type Industry = {
  Icon: typeof Home
  name: string
  blurb: string
  metric: string
  metricLabel: string
  accent: string
  span: 1 | 2
  art: "house" | "site" | "resort" | "land" | "wedding" | "roof" | "farm" | "event"
}

const industries: Industry[] = [
  {
    Icon: Home,
    name: "Real Estate Drone Videography",
    blurb:
      "Listings with aerial drone footage sell up to 68% faster. We shoot every property in 5.1K with a reveal pull-up, neighborhood context, and a top-down lot survey — perfect for MLS, Zillow, and Reels.",
    metric: "68%",
    metricLabel: "faster sale w/ drone",
    accent: "#0891B2",
    span: 2,
    art: "house",
  },
  {
    Icon: HardHat,
    name: "Construction Progress",
    blurb:
      "Monthly aerial captures from the same waypoints — investors see the timeline at a glance.",
    metric: "Monthly",
    metricLabel: "site captures",
    accent: "#F97316",
    span: 1,
    art: "site",
  },
  {
    Icon: Building2,
    name: "Hospitality & Resorts",
    blurb:
      "Sweeping golden-hour aerials of pools, beaches, golf courses, and grounds for hotel and STR brand films.",
    metric: "5.1K",
    metricLabel: "cinematic 30fps",
    accent: "#0EA5E9",
    span: 1,
    art: "resort",
  },
  {
    Icon: Mountain,
    name: "Land & Acreage",
    blurb:
      "Boundary fly-overs, drone mapping, and orthomosaic photos for ranches, lots, and developments.",
    metric: "1,000+",
    metricLabel: "acres mapped",
    accent: "#16A34A",
    span: 1,
    art: "land",
  },
  {
    Icon: Heart,
    name: "Weddings & Events",
    blurb:
      "Discreet aerial coverage that captures the venue, the entrance, and the first-dance overhead.",
    metric: "60s",
    metricLabel: "highlight reel",
    accent: "#EC4899",
    span: 1,
    art: "wedding",
  },
  {
    Icon: Wrench,
    name: "Roof & Solar Inspections",
    blurb:
      "High-res drone photography of roof condition with no ladder, no liability — annotated for the homeowner.",
    metric: "0",
    metricLabel: "ladders needed",
    accent: "#DC2626",
    span: 1,
    art: "roof",
  },
  {
    Icon: Tractor,
    name: "Agriculture & Land Management",
    blurb:
      "NDVI-style overviews and field surveys — see crop health and irrigation patterns from 400 ft.",
    metric: "400 ft",
    metricLabel: "AGL ceiling",
    accent: "#65A30D",
    span: 1,
    art: "farm",
  },
  {
    Icon: Sparkles,
    name: "Brand & Event Films",
    blurb:
      "Concerts, festivals, dealerships, golf tournaments — aerial b-roll that elevates the entire production.",
    metric: "B-roll",
    metricLabel: "in 48 hrs",
    accent: "#7C3AED",
    span: 1,
    art: "event",
  },
]

function ArtTile({ kind, accent }: { kind: Industry["art"]; accent: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id={`sky-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
          <stop offset="100%" stopColor={`${accent}1A`} />
        </linearGradient>
      </defs>
      <rect width="200" height="100" fill={`url(#sky-${kind})`} />

      {kind === "house" && (
        <g>
          {/* yard + pool */}
          <path d="M0,80 Q60,72 100,76 Q150,80 200,72 L200,100 L0,100 Z" fill="#86EFAC" opacity="0.55" />
          <ellipse cx="140" cy="84" rx="18" ry="5" fill="#22D3EE" opacity="0.85" />
          {/* house */}
          <g transform="translate(60 50)">
            <rect width="40" height="22" fill="#fff" stroke={accent} strokeWidth="1" />
            <polygon points="-2,0 20,-12 42,0" fill="#0F172A" />
            <rect x="6" y="6" width="6" height="6" fill={accent} opacity="0.5" />
            <rect x="18" y="6" width="6" height="6" fill={accent} opacity="0.5" />
            <rect x="28" y="10" width="8" height="12" fill="#1E293B" />
          </g>
          {/* trees */}
          <circle cx="20" cy="74" r="6" fill="#15803D" />
          <circle cx="180" cy="76" r="7" fill="#166534" />
        </g>
      )}

      {kind === "site" && (
        <g>
          <rect x="0" y="78" width="200" height="22" fill="#A8A29E" />
          {/* Foundation grid */}
          {[20, 60, 100, 140, 180].map((x) => (
            <line key={x} x1={x} y1="78" x2={x} y2="100" stroke="#78716C" strokeWidth="0.6" />
          ))}
          {/* Crane */}
          <g transform="translate(140 20)">
            <line x1="0" y1="0" x2="0" y2="58" stroke="#F59E0B" strokeWidth="2" />
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#F59E0B" strokeWidth="2" />
            <line x1="-30" y1="0" x2="0" y2="14" stroke="#F59E0B" strokeWidth="0.8" />
            <line x1="30" y1="0" x2="0" y2="14" stroke="#F59E0B" strokeWidth="0.8" />
            <line x1="-20" y1="0" x2="-20" y2="20" stroke="#F59E0B" strokeWidth="0.8" />
            <rect x="-22" y="20" width="4" height="6" fill="#1E293B" />
          </g>
          {/* Building skeleton */}
          <g>
            {[40, 56, 72, 88].map((y, i) => (
              <line key={i} x1="40" y1={y} x2="120" y2={y} stroke="#475569" strokeWidth="0.8" />
            ))}
            {[40, 60, 80, 100, 120].map((x) => (
              <line key={x} x1={x} y1="40" x2={x} y2="78" stroke="#475569" strokeWidth="0.8" />
            ))}
          </g>
        </g>
      )}

      {kind === "resort" && (
        <g>
          <path d="M0,82 Q50,76 100,80 Q150,84 200,78 L200,100 L0,100 Z" fill="#FCD34D" opacity="0.7" />
          {/* Ocean */}
          <rect x="0" y="60" width="200" height="22" fill="#0EA5E9" opacity="0.55" />
          {[64, 70, 76].map((y, i) => (
            <path key={i} d={`M0,${y} Q50,${y - 1.5} 100,${y} T200,${y}`} stroke="#fff" strokeWidth="0.4" fill="none" opacity="0.6" />
          ))}
          {/* Resort building */}
          <g transform="translate(70 40)">
            <rect width="60" height="24" fill="#fff" />
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3, 4, 5].map((c) => (
                <rect key={`${r}${c}`} x={4 + c * 9} y={3 + r * 5} width="5" height="3" fill={accent} opacity="0.6" />
              )),
            )}
          </g>
          {/* Pool */}
          <ellipse cx="40" cy="86" rx="12" ry="3.5" fill="#22D3EE" />
          {/* Palm */}
          <line x1="170" y1="86" x2="170" y2="74" stroke="#92400E" strokeWidth="1.2" />
          <path d="M170,74 Q160,68 156,72 M170,74 Q180,68 184,72 M170,74 Q172,66 176,64 M170,74 Q168,66 164,64" stroke="#15803D" strokeWidth="1.5" fill="none" />
        </g>
      )}

      {kind === "land" && (
        <g>
          <path d="M0,72 Q40,60 100,66 Q160,72 200,62 L200,100 L0,100 Z" fill="#86EFAC" opacity="0.5" />
          {/* Boundary path */}
          <path d="M20,30 L180,30 L180,80 L20,80 Z" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="3 2" />
          {/* Trees scattered */}
          {[
            [40, 60],
            [70, 50],
            [110, 70],
            [150, 55],
            [170, 68],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.5" fill="#166534" />
          ))}
          {/* Pin marker */}
          <g transform="translate(100 30)">
            <circle r="4" fill={accent} />
            <circle r="1.5" fill="#fff" />
          </g>
        </g>
      )}

      {kind === "wedding" && (
        <g>
          <path d="M0,80 Q50,76 100,78 Q150,80 200,74 L200,100 L0,100 Z" fill="#FBCFE8" opacity="0.5" />
          {/* Aisle */}
          <path d="M70,100 L130,100 L114,40 L86,40 Z" fill="#fff" opacity="0.85" />
          <line x1="80" y1="60" x2="120" y2="60" stroke="#F472B6" strokeWidth="0.6" strokeDasharray="2 1" />
          {/* Arch */}
          <path d="M86,40 Q100,28 114,40" stroke={accent} strokeWidth="2" fill="none" />
          <circle cx="100" cy="34" r="2.5" fill={accent} />
          {/* Chairs */}
          {[44, 50, 56, 64, 72, 80, 88].map((y) => (
            <g key={y}>
              <rect x={64 + (y - 40) * 0.2} y={y} width="6" height="2" fill="#fff" stroke={accent} strokeWidth="0.4" />
              <rect x={130 - (y - 40) * 0.2} y={y} width="6" height="2" fill="#fff" stroke={accent} strokeWidth="0.4" />
            </g>
          ))}
        </g>
      )}

      {kind === "roof" && (
        <g>
          <rect x="0" y="80" width="200" height="20" fill="#86EFAC" opacity="0.4" />
          {/* House from above */}
          <g transform="translate(50 24)">
            <polygon points="0,30 50,0 100,30 100,52 0,52" fill="#7C2D12" stroke="#451A03" strokeWidth="0.6" />
            {/* Shingle lines */}
            {[36, 42, 48].map((y) => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#451A03" strokeWidth="0.3" />
            ))}
            {/* Damage markers */}
            <circle cx="30" cy="20" r="3" fill={accent} opacity="0.85" />
            <circle cx="70" cy="14" r="2.5" fill={accent} opacity="0.85" />
            <circle cx="55" cy="40" r="2" fill={accent} opacity="0.85" />
          </g>
          {/* Crosshair */}
          <g transform="translate(100 50)">
            <circle r="14" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="2 2" />
          </g>
        </g>
      )}

      {kind === "farm" && (
        <g>
          {/* Crop rows */}
          {[28, 38, 48, 58, 68, 78, 88, 98].map((y, i) => (
            <rect
              key={y}
              x="0"
              y={y - 5}
              width="200"
              height="5"
              fill={i % 2 === 0 ? "#65A30D" : "#84CC16"}
              opacity="0.6"
            />
          ))}
          {/* Tractor path */}
          <path d="M0,40 Q50,42 100,40 Q150,38 200,40" stroke="#854D0E" strokeWidth="1" fill="none" />
          {/* Tractor */}
          <g transform="translate(100 35)">
            <rect x="-6" y="0" width="12" height="6" fill={accent} />
            <circle cx="-3" cy="6" r="2" fill="#1E293B" />
            <circle cx="4" cy="6" r="2.5" fill="#1E293B" />
          </g>
        </g>
      )}

      {kind === "event" && (
        <g>
          <rect x="0" y="80" width="200" height="20" fill="#1E293B" opacity="0.7" />
          {/* Crowd dots */}
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i % 20) * 10 + 5
            const y = 84 + Math.floor(i / 20) * 4
            return <circle key={i} cx={x} cy={y} r="1.4" fill="#fff" opacity="0.7" />
          })}
          {/* Stage */}
          <rect x="60" y="60" width="80" height="20" fill="#0F172A" />
          {/* Lights */}
          {[70, 90, 110, 130].map((x) => (
            <g key={x}>
              <line x1={x} y1="60" x2={x - 8} y2="84" stroke={accent} strokeWidth="0.6" opacity="0.5" />
              <line x1={x} y1="60" x2={x + 8} y2="84" stroke={accent} strokeWidth="0.6" opacity="0.5" />
              <circle cx={x} cy="60" r="1.6" fill={accent} />
            </g>
          ))}
          {/* Confetti */}
          {[
            [30, 24],
            [50, 16],
            [160, 20],
            [180, 30],
            [110, 12],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="2.5" height="1.4" fill={accent} transform={`rotate(${i * 25} ${x} ${y})`} />
          ))}
        </g>
      )}
    </svg>
  )
}

export function DroneIndustries() {
  return (
    <section
      id="drone-industries"
      aria-labelledby="drone-industries-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Industries we fly for"
          heading={
            <span id="drone-industries-heading">
              Drone videography for{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">every angle</span>
              </span>{" "}
              your business needs.
            </span>
          }
          paragraph="From luxury real estate listings to construction progress reels, our drone videography crew has flown over 600+ productions across eight industries. Same FAA-licensed pilots, same 48-hour edit, tailored shot list per industry."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(320px,auto)] gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((ind, idx) => (
            <article
              key={ind.name}
              className={`relative card-surface card-surface-hover overflow-hidden group ${
                ind.span === 2 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.04 * idx}s both`,
              }}
            >
              {/* Top art band */}
              <div
                className="relative"
                style={{
                  height: ind.span === 2 ? 200 : 140,
                  background: `linear-gradient(180deg, ${ind.accent}10 0%, ${ind.accent}05 100%)`,
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <ArtTile kind={ind.art} accent={ind.accent} />
                {/* Drone marker on top of art */}
                <span
                  className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-[0.1em]"
                  style={{
                    background: "rgba(15,23,42,0.65)",
                    color: "#fff",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#22D3EE",
                      animation: "subtlePulse 1.4s ease-in-out infinite",
                    }}
                  />
                  Aerial
                </span>
              </div>

              {/* Body */}
              <div className="px-5 sm:px-6 py-5">
                <div className="flex items-start gap-3">
                  <span
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
                    style={{
                      background: `${ind.accent}1A`,
                      color: ind.accent,
                      boxShadow: `inset 0 0 0 1px ${ind.accent}33`,
                    }}
                  >
                    <ind.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[17px] sm:text-[18px] font-bold leading-[1.25]"
                      style={{ color: "var(--ink)" }}
                    >
                      {ind.name}
                    </h3>
                  </div>
                </div>
                <p
                  className="mt-3 text-[13.5px] sm:text-[14.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {ind.blurb}
                </p>

                <div
                  className="mt-4 pt-4 flex items-end justify-between border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div>
                    <div
                      className="text-[20px] sm:text-[22px] font-extrabold leading-none tracking-[-0.01em]"
                      style={{ color: ind.accent }}
                    >
                      {ind.metric}
                    </div>
                    <div
                      className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.1em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {ind.metricLabel}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[12.5px] font-bold uppercase tracking-[0.08em] transition-transform group-hover:translate-x-0.5"
                    style={{ color: ind.accent }}
                  >
                    Book
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-10 px-5 sm:px-7 py-5 rounded-[var(--radius-lg)] flex flex-col sm:flex-row items-center gap-3 sm:gap-5"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid rgba(8,145,178,0.25)",
          }}
        >
          <span
            className="text-[14.5px] sm:text-[15.5px] font-semibold flex-1"
            style={{ color: "var(--ink)" }}
          >
            Don&rsquo;t see your industry? We&rsquo;ve flown drone videography for everything from boat dealerships to ski resorts.
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group whitespace-nowrap"
            style={{ color: "#0E7490" }}
          >
            Tell us your project
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
