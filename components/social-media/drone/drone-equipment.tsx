import { SectionHeader } from "@/components/ui/section-header"
import { Pill } from "@/components/ui/pill"
import {
  ShieldCheck,
  Camera,
  Zap,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

type Drone = {
  brand: string
  model: string
  domain: string
  use: string
  spec: { label: string; value: string }[]
  accent: string
  badge: string
}

const fleet: Drone[] = [
  {
    brand: "DJI",
    model: "Inspire 3",
    domain: "dji.com",
    use: "Cinematic productions, brand films, hospitality",
    accent: "#0F172A",
    badge: "Cinema",
    spec: [
      { label: "Sensor", value: "8K Full-Frame" },
      { label: "Frame rate", value: "75fps @ 8K" },
      { label: "Range", value: "9 mi" },
      { label: "Wind", value: "27 mph" },
    ],
  },
  {
    brand: "DJI",
    model: "Mavic 3 Pro Cine",
    domain: "dji.com",
    use: "Real estate, hospitality, weddings, listings",
    accent: "#0891B2",
    badge: "Workhorse",
    spec: [
      { label: "Sensor", value: "5.1K Hasselblad" },
      { label: "Lenses", value: "Triple-cam" },
      { label: "Range", value: "9.3 mi" },
      { label: "Flight", value: "43 min" },
    ],
  },
  {
    brand: "DJI",
    model: "Air 3 / Mini 4 Pro",
    domain: "dji.com",
    use: "Tight indoor spaces, weddings, fast turnarounds",
    accent: "#0EA5E9",
    badge: "Compact",
    spec: [
      { label: "Sensor", value: "4K HDR" },
      { label: "Weight", value: "<249 g" },
      { label: "Quiet", value: "Sub-50 dB" },
      { label: "Flight", value: "34 min" },
    ],
  },
  {
    brand: "DJI",
    model: "Avata 2 (Cinewhoop FPV)",
    domain: "dji.com",
    use: "Fly-throughs, FPV chase, interior sequences",
    accent: "#F97316",
    badge: "FPV",
    spec: [
      { label: "Sensor", value: "4K @ 60fps" },
      { label: "Caged props", value: "Indoor-safe" },
      { label: "Top speed", value: "60 mph" },
      { label: "Style", value: "Cinewhoop" },
    ],
  },
]

const credentials = [
  {
    Icon: ShieldCheck,
    label: "FAA Part 107 Pilots",
    sub: "Every flight",
    color: "#0891B2",
  },
  {
    Icon: Award,
    label: "$2M Liability",
    sub: "Per shoot insured",
    color: "#16A34A",
  },
  {
    Icon: Zap,
    label: "LAANC Authorized",
    sub: "Controlled airspace",
    color: "#F97316",
  },
  {
    Icon: Camera,
    label: "Backup Birds",
    sub: "Two of every drone",
    color: "#7C3AED",
  },
]

const editingTools = [
  { name: "Adobe Premiere Pro", domain: "adobe.com" },
  { name: "DaVinci Resolve", domain: "blackmagicdesign.com" },
  { name: "Final Cut Pro", domain: "apple.com" },
  { name: "Frame.io", domain: "frame.io" },
  { name: "Dropbox", domain: "dropbox.com" },
  { name: "Google Drive", domain: "google.com" },
]

export function DroneEquipment() {
  return (
    <section
      id="drone-equipment"
      aria-labelledby="drone-equipment-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: copy (sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <Pill>The fleet &amp; the crew</Pill>
            <h2
              id="drone-equipment-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Cinema drones, real{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">FAA pilots</span>
              </span>
              , no rental rigs.
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[18px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Every drone videography shoot uses our own gear flown by our own
              FAA Part 107-licensed pilots. Four drones in rotation — cinema
              flagship for brand films, real-estate workhorse for listings,
              compact for tight venues, and FPV cinewhoop for indoor
              fly-throughs. Backup units on every shoot.
            </p>

            {/* Credential strip */}
            <ul className="mt-7 grid grid-cols-2 gap-2.5">
              {credentials.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-[var(--radius-sm)]"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{
                      background: `${c.color}1A`,
                      color: c.color,
                      boxShadow: `inset 0 0 0 1px ${c.color}33`,
                    }}
                  >
                    <c.Icon className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-[12.5px] font-bold leading-tight truncate"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="text-[10.5px] font-medium truncate"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#0E7490" }}
            >
              Request a sample reel
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          {/* Right: drone fleet cards */}
          <div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            {fleet.map((d, idx) => (
              <article
                key={d.model}
                className="card-surface card-surface-hover relative overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.6s ease-out ${0.06 * idx}s both`,
                }}
              >
                {/* Top brand bar */}
                <div
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{
                    background: `linear-gradient(90deg, ${d.accent}10 0%, ${d.accent}03 100%)`,
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden"
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <img
                        src={favicon(d.domain, 64)}
                        alt={d.brand}
                        width={14}
                        height={14}
                        loading="lazy"
                        decoding="async"
                        className="w-[14px] h-[14px] object-contain"
                      />
                    </span>
                    <span
                      className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {d.brand}
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: `${d.accent}15`,
                      color: d.accent,
                    }}
                  >
                    {d.badge}
                  </span>
                </div>

                {/* Drone illustration */}
                <div
                  className="relative h-[120px] flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(180deg, ${d.accent}08 0%, ${d.accent}02 100%)`,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2"
                    style={{
                      background: `radial-gradient(ellipse 60% 100% at 50% 100%, ${d.accent}25 0%, transparent 70%)`,
                    }}
                  />
                  <DroneSilhouette accent={d.accent} />
                </div>

                {/* Body */}
                <div className="px-4 sm:px-5 py-4">
                  <h3
                    className="text-[16.5px] sm:text-[17px] font-bold leading-tight tracking-[-0.005em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {d.model}
                  </h3>
                  <p
                    className="mt-1 text-[12.5px] leading-[1.45]"
                    style={{ color: "var(--muted)" }}
                  >
                    {d.use}
                  </p>

                  <dl className="mt-3 grid grid-cols-2 gap-1.5">
                    {d.spec.map((s) => (
                      <div
                        key={s.label}
                        className="px-2 py-1.5 rounded-md"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <dt
                          className="text-[9px] font-bold uppercase tracking-[0.1em]"
                          style={{ color: "var(--muted)" }}
                        >
                          {s.label}
                        </dt>
                        <dd
                          className="text-[12px] font-bold mt-0.5"
                          style={{ color: "var(--ink)" }}
                        >
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom: editing toolchain */}
        <div
          className="mt-12 px-5 sm:px-6 py-5 rounded-[var(--radius-lg)] flex flex-col sm:flex-row items-center gap-3 sm:gap-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] shrink-0"
            style={{ color: "var(--muted)" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "#16A34A" }} />
            Edited &amp; delivered with
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {editingTools.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                <img
                  src={favicon(t.domain, 64)}
                  alt={t.name}
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-[16px] h-[16px] object-contain"
                />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DroneSilhouette({ accent }: { accent: string }) {
  return (
    <svg
      width="120"
      height="80"
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* prop blurs */}
      <ellipse cx="22" cy="22" rx="14" ry="2.4" fill={`${accent}55`} />
      <ellipse cx="98" cy="22" rx="14" ry="2.4" fill={`${accent}55`} />
      <ellipse cx="22" cy="58" rx="14" ry="2.4" fill={`${accent}55`} />
      <ellipse cx="98" cy="58" rx="14" ry="2.4" fill={`${accent}55`} />
      {/* arms */}
      <line x1="60" y1="32" x2="24" y2="22" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="32" x2="96" y2="22" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="48" x2="24" y2="58" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="48" x2="96" y2="58" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      {/* motor caps */}
      {[
        [22, 22],
        [98, 22],
        [22, 58],
        [98, 58],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3.4" fill="#0F172A" />
          <circle cx={x} cy={y} r="1.4" fill={accent} />
        </g>
      ))}
      {/* body */}
      <rect x="44" y="26" width="32" height="28" rx="6" fill="#1E293B" />
      <rect x="48" y="30" width="24" height="2" rx="1" fill={accent} opacity="0.85" />
      {/* gimbal */}
      <rect x="52" y="48" width="16" height="9" rx="3" fill="#0F172A" />
      <circle cx="60" cy="53" r="3.2" fill={accent} />
      <circle cx="60" cy="53" r="1.4" fill="#fff" />
    </svg>
  )
}
