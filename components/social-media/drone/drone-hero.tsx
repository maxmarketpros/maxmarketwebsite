import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Plane,
  ShieldCheck,
  Film,
  Clock,
  Sparkles,
  Wifi,
  Battery,
  Compass,
  Video,
  MapPin,
} from "lucide-react"

const proofPills = [
  { Icon: ShieldCheck, label: "FAA Part 107 certified" },
  { Icon: Film, label: "5.1K cinematic footage" },
  { Icon: Clock, label: "48-hour edited delivery" },
  { Icon: Plane, label: "Insured · $2M coverage" },
]

export function DroneHero() {
  return (
    <section
      aria-labelledby="drone-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-6%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.20) 0%, rgba(8,145,178,0.04) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[28%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)",
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
            <li>
              <a
                href="/services/social-media"
                className="hover:text-[var(--accent)]"
              >
                Social Media
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Drone Videography
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(8,145,178,0.10)",
                borderColor: "rgba(8,145,178,0.30)",
                color: "#0E7490",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Drone Videography · Done-for-you aerial production
            </span>

            <h1
              id="drone-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              <span className="whitespace-nowrap">
                <span className="accent-underline">Drone videography</span>,
              </span>{" "}
              handled.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              FAA-licensed{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                drone videography and aerial photography
              </span>{" "}
              for real estate listings, construction progress, weddings,
              hospitality, and brand films — shot in 5.1K, edited for
              Reels/Shorts/YouTube, and delivered in 48 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a drone shoot
              </PrimaryButton>
              <SecondaryButton asLink href="#drone-shots">
                See sample shots
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "rgba(8,145,178,0.14)",
                      color: "#0E7490",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: drone HUD showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <DroneHudShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function DroneHudShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(207,250,254,0.85) 100%)",
          border: "1px solid rgba(8,145,178,0.30)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(8,145,178,0.20)",
        }}
      />

      {/* Main card — pilot HUD */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Top status bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="relative w-2.5 h-2.5 rounded-full"
              style={{
                background: "#22D3EE",
                boxShadow: "0 0 0 3px rgba(34,211,238,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#67E8F9" }}
            >
              In flight · REC
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10.5px] font-mono tracking-[0.05em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <span className="hidden xs:inline-flex items-center gap-1">
              <Wifi className="w-3 h-3" strokeWidth={2.5} />
              4 bars
            </span>
            <span className="inline-flex items-center gap-1">
              <Battery className="w-3 h-3" strokeWidth={2.5} />
              78%
            </span>
          </div>
        </div>

        {/* Live preview pane */}
        <div
          className="relative aspect-[16/9]"
          style={{
            background:
              "linear-gradient(180deg, #FCD34D 0%, #FB923C 28%, #38BDF8 65%, #1E3A8A 100%)",
          }}
          aria-label="Drone preview frame — golden hour aerial"
        >
          {/* Rolling clouds */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 20% at 30% 25%, rgba(255,255,255,0.55), transparent 70%), radial-gradient(ellipse 55% 18% at 75% 18%, rgba(255,255,255,0.40), transparent 70%)",
            }}
          />
          {/* Distant mountain silhouette */}
          <svg
            aria-hidden
            className="absolute inset-x-0 bottom-[34%] w-full"
            viewBox="0 0 100 14"
            preserveAspectRatio="none"
            style={{ height: "20%", opacity: 0.85 }}
          >
            <path
              d="M0,14 L6,9 L14,11 L22,5 L30,8 L38,4 L48,7 L58,3 L68,6 L78,2 L86,5 L94,3 L100,6 L100,14 Z"
              fill="rgba(30,58,138,0.55)"
            />
          </svg>
          {/* Property in frame — rooftop/grounds */}
          <svg
            aria-hidden
            className="absolute inset-x-0 bottom-0 w-full"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            style={{ height: "38%" }}
          >
            <defs>
              <linearGradient id="ground-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#15803D" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#064E3B" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 L0,20 Q20,16 40,18 Q60,21 80,17 Q90,15 100,18 L100,40 Z"
              fill="url(#ground-grad)"
            />
            {/* Pool */}
            <ellipse cx="62" cy="30" rx="9" ry="3" fill="#22D3EE" opacity="0.9" />
            {/* House outline */}
            <g>
              <rect x="34" y="22" width="20" height="9" fill="#FAFAF9" />
              <polygon points="33,22 44,15 55,22" fill="#9F1239" />
              <rect x="38" y="25" width="3" height="3" fill="#1E3A8A" opacity="0.85" />
              <rect x="46" y="25" width="3" height="3" fill="#1E3A8A" opacity="0.85" />
              <rect x="42" y="28" width="3.5" height="3" fill="#422006" />
            </g>
            {/* Trees */}
            <circle cx="20" cy="24" r="3.5" fill="#166534" />
            <circle cx="78" cy="22" r="3" fill="#166534" />
            <circle cx="86" cy="25" r="3.5" fill="#15803D" />
          </svg>

          {/* Rule-of-thirds grid */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {[33.33, 66.66].map((p) => (
              <div
                key={`v${p}`}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${p}%`,
                  width: 1,
                  background: "rgba(255,255,255,0.25)",
                }}
              />
            ))}
            {[33.33, 66.66].map((p) => (
              <div
                key={`h${p}`}
                className="absolute left-0 right-0"
                style={{
                  top: `${p}%`,
                  height: 1,
                  background: "rgba(255,255,255,0.25)",
                }}
              />
            ))}
            {/* Corner ticks */}
            {[
              { t: 8, l: 8 },
              { t: 8, r: 8 },
              { b: 8, l: 8 },
              { b: 8, r: 8 },
            ].map((c, i) => (
              <span
                key={i}
                className="absolute w-3 h-3"
                style={{
                  top: c.t,
                  left: c.l,
                  right: c.r,
                  bottom: c.b,
                  borderTop: c.t !== undefined ? "2px solid rgba(255,255,255,0.85)" : undefined,
                  borderBottom: c.b !== undefined ? "2px solid rgba(255,255,255,0.85)" : undefined,
                  borderLeft: c.l !== undefined ? "2px solid rgba(255,255,255,0.85)" : undefined,
                  borderRight: c.r !== undefined ? "2px solid rgba(255,255,255,0.85)" : undefined,
                }}
              />
            ))}
            {/* Center crosshair */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
              style={{
                border: "1.5px solid rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.04)",
              }}
            />
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
              style={{ background: "#FCA5A5" }}
            />
          </div>

          {/* Top-left REC chip */}
          <div className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#EF4444",
                animation: "subtlePulse 1.2s ease-in-out infinite",
              }}
            />
            <span className="text-[9.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#fff" }}>
              REC · 5.1K · 30fps
            </span>
          </div>
          {/* Top-right shot label */}
          <div className="absolute top-2 right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Video className="w-3 h-3" strokeWidth={2.5} style={{ color: "#67E8F9" }} />
            <span className="text-[9.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#fff" }}>
              Orbit · 2/4
            </span>
          </div>

          {/* Bottom telemetry strip */}
          <div className="absolute bottom-0 inset-x-0 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono tracking-[0.05em]"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)",
              color: "#fff",
            }}
          >
            <span>ALT 142 ft</span>
            <span>SPD 8.4 m/s</span>
            <span className="hidden xs:inline">DIST 268 ft</span>
            <span>03:42</span>
          </div>
        </div>

        {/* Flight plan mini-map */}
        <div
          className="px-4 sm:px-5 py-4"
          style={{
            background: "var(--bg)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              <MapPin className="w-3 h-3" strokeWidth={2.5} />
              Flight plan · property orbit
            </span>
            <span className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(8,145,178,0.12)",
                color: "#0E7490",
              }}
            >
              <Compass className="w-3 h-3" strokeWidth={2.5} />
              4 waypoints
            </span>
          </div>

          <div
            className="relative w-full aspect-[16/7] rounded-[10px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #ECFEFF 0%, #DBEAFE 100%)",
              border: "1px solid var(--border-color)",
            }}
            aria-label="Top-down flight plan"
          >
            {/* Grid */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 88"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(8,145,178,0.10)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="200" height="88" fill="url(#grid-pattern)" />
              {/* Property footprint */}
              <rect x="86" y="36" width="28" height="16" rx="2" fill="rgba(15,118,110,0.18)" stroke="rgba(15,118,110,0.6)" strokeWidth="0.6" />
              <text x="100" y="46" textAnchor="middle" fontSize="5" fill="#0F766E" fontWeight="700">
                Listing
              </text>
              {/* Orbit path */}
              <ellipse
                cx="100"
                cy="44"
                rx="60"
                ry="26"
                fill="none"
                stroke="#0891B2"
                strokeWidth="1.2"
                strokeDasharray="2 1.5"
              />
              {/* Waypoints */}
              {[
                { x: 100, y: 18, label: "1" },
                { x: 160, y: 44, label: "2" },
                { x: 100, y: 70, label: "3" },
                { x: 40, y: 44, label: "4" },
              ].map((w) => (
                <g key={w.label}>
                  <circle cx={w.x} cy={w.y} r="3.2" fill="#0891B2" stroke="#fff" strokeWidth="0.8" />
                  <text x={w.x} y={w.y + 1.4} textAnchor="middle" fontSize="3.2" fill="#fff" fontWeight="700">
                    {w.label}
                  </text>
                </g>
              ))}
              {/* Drone position */}
              <g transform="translate(160 44)">
                <circle r="6" fill="rgba(249,115,22,0.20)" />
                <circle r="2.4" fill="#F97316" stroke="#fff" strokeWidth="0.7" />
              </g>
            </svg>
          </div>

          {/* Shot list */}
          <ul className="mt-3 grid grid-cols-2 gap-1.5">
            {[
              { name: "Reveal pull-up", state: "done" },
              { name: "360° orbit", state: "live" },
              { name: "Top-down dolly", state: "queued" },
              { name: "Push-in to door", state: "queued" },
            ].map((s) => (
              <li key={s.name}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md"
                style={{
                  background: s.state === "live" ? "rgba(8,145,178,0.10)" : "var(--surface)",
                  border: `1px solid ${s.state === "live" ? "rgba(8,145,178,0.35)" : "var(--border-color)"}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background:
                      s.state === "done" ? "#22C55E" : s.state === "live" ? "#0891B2" : "#94A3B8",
                  }}
                />
                <span className="text-[11px] font-semibold truncate" style={{ color: "var(--ink)" }}>
                  {s.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer — pilot strip */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #06B6D4 0%, #0891B2 100%)",
                color: "#fff",
                boxShadow: "0 2px 4px rgba(8,145,178,0.35)",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.75} />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-bold" style={{ color: "var(--ink)" }}>
                Pilot · Marcus G.
              </div>
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                FAA Part 107 #4023019
              </div>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            <Clock className="w-3 h-3" strokeWidth={2.5} />
            48-hr edit
          </span>
        </div>
      </div>

      {/* Floating drone illustration */}
      <div
        className="absolute -top-6 -left-6 z-20 hidden sm:block"
        style={{
          filter: "drop-shadow(0 12px 28px rgba(8,145,178,0.40))",
          transform: "rotate(-6deg)",
          animation: "subtleFloat 4s ease-in-out infinite",
        }}
      >
        <DroneIllustration />
      </div>

      {/* Top-right altitude chip */}
      <div
        className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #ECFEFF 100%)",
          border: "1px solid rgba(8,145,178,0.30)",
          boxShadow:
            "0 2px 6px rgba(8,145,178,0.20), 0 14px 32px rgba(8,145,178,0.18)",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #06B6D4 0%, #0891B2 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(8,145,178,0.35)",
          }}
        >
          <Plane className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
            Max altitude
          </span>
          <span className="text-[15px] font-extrabold" style={{ color: "var(--ink)" }}>
            400 ft AGL
          </span>
        </div>
      </div>

      {/* Bottom-right delivery chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #FB923C 0%, #F97316 100%)",
          color: "#fff",
          boxShadow:
            "0 2px 6px rgba(249,115,22,0.30), 0 12px 28px rgba(249,115,22,0.22)",
          transform: "rotate(3deg)",
        }}
      >
        <Film className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ opacity: 0.9 }}>
            Delivered in
          </span>
          <span className="text-[15px] font-extrabold">48 hours</span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,145,178,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

function DroneIllustration() {
  return (
    <svg
      width="120"
      height="86"
      viewBox="0 0 120 86"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="drone-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <radialGradient id="prop-blur" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(8,145,178,0.45)" />
          <stop offset="100%" stopColor="rgba(8,145,178,0)" />
        </radialGradient>
      </defs>
      {/* Spinning prop blurs */}
      <ellipse cx="20" cy="22" rx="14" ry="3" fill="url(#prop-blur)" />
      <ellipse cx="100" cy="22" rx="14" ry="3" fill="url(#prop-blur)" />
      <ellipse cx="20" cy="62" rx="14" ry="3" fill="url(#prop-blur)" />
      <ellipse cx="100" cy="62" rx="14" ry="3" fill="url(#prop-blur)" />
      {/* Arms */}
      <line x1="60" y1="34" x2="22" y2="22" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="34" x2="98" y2="22" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="50" x2="22" y2="62" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="50" x2="98" y2="62" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      {/* Motor caps */}
      {[
        { x: 20, y: 22 },
        { x: 100, y: 22 },
        { x: 20, y: 62 },
        { x: 100, y: 62 },
      ].map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r="3.5" fill="#0F172A" />
          <circle cx={m.x} cy={m.y} r="1.4" fill="#67E8F9" />
        </g>
      ))}
      {/* Body */}
      <rect x="44" y="28" width="32" height="28" rx="6" fill="url(#drone-body)" />
      {/* Camera gimbal */}
      <rect x="52" y="50" width="16" height="10" rx="3" fill="#0F172A" />
      <circle cx="60" cy="56" r="3.5" fill="#0891B2" />
      <circle cx="60" cy="56" r="1.6" fill="#ECFEFF" />
      {/* LED accent */}
      <rect x="48" y="32" width="24" height="2" rx="1" fill="#22D3EE" opacity="0.8" />
    </svg>
  )
}
