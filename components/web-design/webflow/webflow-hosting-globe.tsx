import { SectionHeader } from "@/components/ui/section-header"
import {
  Cloud,
  Lock,
  ShieldCheck,
  Zap,
  Image as ImageIcon,
  Inbox,
  RotateCcw,
  GitBranch,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WF_BLUE = "#146EF5"

type Feature = {
  Icon: LucideIcon
  title: string
  body: string
}

const features: Feature[] = [
  { Icon: Cloud, title: "Global CDN", body: "Fastly + AWS edge in 8 regions" },
  { Icon: Lock, title: "Auto SSL", body: "TLS 1.3, renews itself" },
  { Icon: ShieldCheck, title: "DDoS protection", body: "Built into the network layer" },
  { Icon: Zap, title: "Brotli + gzip", body: "Compressed on every response" },
  { Icon: ImageIcon, title: "Auto image optimization", body: "WebP + responsive srcsets" },
  { Icon: Inbox, title: "Form submissions", body: "Stored + emailed automatically" },
  { Icon: RotateCcw, title: "Versioned backups", body: "Roll back any change, anytime" },
  { Icon: GitBranch, title: "Free staging URL", body: "Each project gets a .webflow.io" },
]

// 8 PoP locations roughly mapped onto the 800x400 globe SVG viewbox
const pops = [
  { name: "us-east", x: 230, y: 175 },
  { name: "us-west", x: 145, y: 180 },
  { name: "eu-west", x: 395, y: 145 },
  { name: "eu-central", x: 425, y: 150 },
  { name: "ap-south", x: 555, y: 215 },
  { name: "ap-southeast", x: 615, y: 245 },
  { name: "ap-northeast", x: 660, y: 175 },
  { name: "sa-east", x: 290, y: 290 },
]

const metrics = [
  { value: "180 ms", label: "Avg TTFB", color: WF_BLUE },
  { value: "99.99%", label: "Uptime", color: "#22C55E" },
  { value: "1.1 s", label: "Avg LCP", color: "#F59E0B" },
]

export function WebflowHostingGlobe() {
  return (
    <section
      id="webflow-hosting"
      aria-labelledby="webflow-hosting-heading"
      className="relative"
      style={{
        background: "var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,110,245,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Hosting · the network layer"
          heading={
            <span id="webflow-hosting-heading">
              Eight regions,{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  zero plugins
                </span>
                .
              </span>
            </span>
          }
          paragraph="Most Webflow website design projects skip hosting strategy. We don't — your site ships on Webflow's managed CDN with Fastly + AWS edge nodes in eight regions, automatic SSL, and zero plugin maintenance."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Globe */}
          <div
            className="relative rounded-[var(--radius-xl)] overflow-hidden p-5 sm:p-6"
            style={{
              background:
                "linear-gradient(135deg, #0B132B 0%, #11203F 60%, #1A3460 100%)",
              border: "1px solid rgba(20,110,245,0.25)",
              boxShadow: "0 24px 60px rgba(11,19,43,0.30)",
              animation: "fadeInUp 0.7s ease-out both",
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.14em] px-2 py-1 rounded"
                style={{
                  background: "rgba(20,110,245,0.18)",
                  color: "#74A9FF",
                  border: "1px solid rgba(20,110,245,0.30)",
                }}
              >
                ● Live · 8 PoPs
              </span>
              <span className="text-[10.5px] font-mono" style={{ color: "rgba(255,255,255,0.55)" }}>
                fastly + aws edge
              </span>
            </div>

            <Globe />

            <div
              className="mt-4 grid grid-cols-3 gap-3"
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[10px] px-3 py-3"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="text-[20px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {m.label}
                  </div>
                  {/* Tiny SVG bar */}
                  <svg className="mt-2" viewBox="0 0 100 12" width="100%" height="12" aria-hidden>
                    <rect x="0" y="6" width="100" height="2" fill="rgba(255,255,255,0.10)" rx="1" />
                    <rect x="0" y="5" width="68" height="4" fill={m.color} rx="1" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Stack card */}
          <div
            className="card-surface p-5 sm:p-6"
            style={{
              borderRadius: "var(--radius-xl)",
              animation: "fadeInUp 0.7s ease-out 0.1s both",
            }}
          >
            <h3
              className="text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              What ships in every Webflow website design hosting plan
            </h3>
            <p className="mt-2 text-[13.5px]" style={{ color: "var(--muted)" }}>
              No add-ons, no upsell tier, no plugin to install. Bundled.
            </p>

            <ul className="mt-5 space-y-2">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[10px]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                    animation: `fadeInUp 0.5s ease-out ${0.04 * i + 0.15}s both`,
                  }}
                >
                  <span
                    className="w-7 h-7 shrink-0 rounded-[8px] flex items-center justify-center"
                    style={{
                      background: "rgba(20,110,245,0.10)",
                      color: WF_BLUE,
                    }}
                  >
                    <f.Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-[13.5px] font-semibold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {f.title}
                    </div>
                    <div className="text-[12px]" style={{ color: "var(--muted)" }}>
                      {f.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Globe() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "800/400" }}>
      <svg
        viewBox="0 0 800 400"
        width="100%"
        height="100%"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(20,110,245,0.30)" />
            <stop offset="60%" stopColor="rgba(20,110,245,0.05)" />
            <stop offset="100%" stopColor="rgba(20,110,245,0)" />
          </radialGradient>
          <pattern id="dot-grid" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.18)" />
          </pattern>
        </defs>

        {/* Glow background */}
        <rect width="800" height="400" fill="url(#globe-glow)" />

        {/* Stylized continents — abstract dotted blobs */}
        <g fill="url(#dot-grid)" opacity="0.85">
          {/* North America */}
          <path d="M80,120 Q130,80 180,100 Q230,120 250,180 Q230,230 180,240 Q130,250 90,210 Q60,170 80,120 Z" />
          {/* South America */}
          <path d="M250,250 Q280,240 300,280 Q310,320 290,350 Q260,360 250,330 Q240,290 250,250 Z" />
          {/* Europe */}
          <path d="M380,110 Q430,95 460,130 Q450,170 410,175 Q380,160 380,110 Z" />
          {/* Africa */}
          <path d="M410,180 Q460,180 470,230 Q470,290 440,320 Q410,310 400,260 Q400,210 410,180 Z" />
          {/* Asia */}
          <path d="M480,110 Q580,90 660,130 Q700,170 680,220 Q620,250 540,230 Q480,200 480,110 Z" />
          {/* Australia */}
          <path d="M620,270 Q680,260 700,290 Q690,320 640,320 Q610,310 620,270 Z" />
        </g>

        {/* Latitude/longitude lines */}
        <g stroke="rgba(20,110,245,0.18)" strokeWidth="0.7" fill="none">
          <ellipse cx="400" cy="200" rx="380" ry="140" />
          <ellipse cx="400" cy="200" rx="320" ry="100" />
          <line x1="20" y1="200" x2="780" y2="200" />
          <line x1="400" y1="60" x2="400" y2="340" />
        </g>

        {/* Connection arcs */}
        <g stroke={WF_BLUE} strokeWidth="1" fill="none" opacity="0.45" strokeDasharray="3 3">
          {pops.slice(1).map((p, i) => (
            <path
              key={p.name}
              d={`M${pops[0].x},${pops[0].y} Q${(pops[0].x + p.x) / 2},${Math.min(pops[0].y, p.y) - 50} ${p.x},${p.y}`}
            />
          ))}
        </g>

        {/* PoP nodes */}
        {pops.map((p, i) => (
          <g key={p.name}>
            <circle
              cx={p.x}
              cy={p.y}
              r="9"
              fill={WF_BLUE}
              opacity="0.20"
            >
              <animate
                attributeName="r"
                values="6;14;6"
                dur="2.4s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.30;0;0.30"
                dur="2.4s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={p.x}
              cy={p.y}
              r="3.5"
              fill="#fff"
              stroke={WF_BLUE}
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
