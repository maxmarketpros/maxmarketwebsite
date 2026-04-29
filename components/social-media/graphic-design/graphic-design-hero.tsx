import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  Layers,
  Clock,
  RefreshCw,
  FileDown,
  Wand2,
  MousePointer2,
  Square,
  Smartphone,
  Image as ImageIcon,
  Type,
} from "lucide-react"

const proofPills = [
  { Icon: Layers, label: "500+ designs / month" },
  { Icon: Clock, label: "48-hr turnaround" },
  { Icon: RefreshCw, label: "Unlimited revisions" },
  { Icon: FileDown, label: "Source files included" },
]

export function GraphicDesignHero() {
  return (
    <section
      aria-labelledby="graphic-design-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-6%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.16) 0%, rgba(236,72,153,0.04) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[28%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)",
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
              Graphic Design
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(236,72,153,0.10)",
                borderColor: "rgba(236,72,153,0.30)",
                color: "#BE185D",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Graphic Design · Done-for-you
            </span>

            <h1
              id="graphic-design-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Graphic Design built to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">convert</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Social media graphic design
              </span>
              , ad creative, carousels, brand identity, print and web — designed
              for service businesses ready to scale. One in-house design team,
              one monthly invoice, work that earns its place in the feed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/contact">
                Start a design project
              </PrimaryButton>
              <SecondaryButton asLink href="#showcase">
                See sample work
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
                      background: "rgba(236,72,153,0.14)",
                      color: "#BE185D",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Design Canvas mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <DesignCanvasShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function DesignCanvasShowcase() {
  const layers = [
    { Icon: Square, name: "Background", count: 1 },
    { Icon: ImageIcon, name: "Hero image", count: 2 },
    { Icon: Type, name: "Headline", count: 3 },
    { Icon: Wand2, name: "Brand mark", count: 1 },
    { Icon: Smartphone, name: "Devices", count: 4 },
  ]

  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(253,242,248,0.85) 100%)",
          border: "1px solid rgba(236,72,153,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(236,72,153,0.18)",
        }}
      />

      {/* Main canvas window */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-2.5"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span
            className="text-[11px] font-mono tracking-[0.04em]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            brand-kit.fig — Frame 12
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(34,197,94,0.18)",
              color: "#86EFAC",
            }}
          >
            Saved
          </span>
        </div>

        {/* Body — layers + canvas */}
        <div className="grid grid-cols-[110px_1fr]">
          {/* Layers panel */}
          <div
            className="border-r"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--bg)",
            }}
          >
            <div
              className="px-3 pt-3 pb-2 text-[9.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Layers
            </div>
            <ul className="px-1.5 pb-3 space-y-0.5">
              {layers.map((l, i) => {
                const active = i === 2
                return (
                  <li
                    key={l.name}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-medium"
                    style={{
                      background: active
                        ? "rgba(22,119,255,0.10)"
                        : "transparent",
                      color: active ? "var(--accent)" : "var(--ink)",
                      border: active
                        ? "1px solid rgba(22,119,255,0.25)"
                        : "1px solid transparent",
                    }}
                  >
                    <l.Icon className="w-3 h-3" strokeWidth={2.5} />
                    <span className="truncate">{l.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Canvas with artboards */}
          <div
            className="relative p-4 sm:p-5"
            style={{
              background:
                "repeating-conic-gradient(#F1F5F9 0% 25%, #FFFFFF 0% 50%) 50% / 14px 14px",
            }}
          >
            {/* Ruler top */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-3 flex items-end"
              style={{
                background: "var(--surface)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[20px] inline-block"
                  style={{
                    height: i % 4 === 0 ? 6 : 3,
                    borderRight: "1px solid var(--border-color)",
                  }}
                />
              ))}
            </div>

            {/* Artboards grid */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {/* IG Square 1:1 */}
              <Artboard label="IG · 1:1" accent="#EC4899" tag="post">
                <div className="absolute inset-0 flex flex-col">
                  <div
                    className="flex-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #FB7185 0%, #EC4899 60%, #BE185D 100%)",
                    }}
                  />
                  <div
                    className="px-2 pt-1.5 pb-2"
                    style={{ background: "#fff" }}
                  >
                    <div
                      className="h-1.5 rounded-full"
                      style={{ background: "var(--ink)", width: "70%" }}
                    />
                    <div
                      className="h-1 rounded-full mt-1"
                      style={{ background: "var(--border-color)", width: "50%" }}
                    />
                  </div>
                </div>
              </Artboard>

              {/* IG Story 9:16 */}
              <Artboard label="Story · 9:16" accent="#1677FF" tag="story" tall>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #2B8AFF 0%, #1677FF 60%, #0B132B 100%)",
                  }}
                />
                <div className="absolute inset-x-1.5 bottom-2 space-y-1">
                  <div
                    className="h-1.5 rounded-full"
                    style={{ background: "#fff", width: "82%" }}
                  />
                  <div
                    className="h-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      width: "60%",
                    }}
                  />
                </div>
                <div
                  className="absolute top-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full text-[6.5px] font-bold uppercase tracking-[0.1em]"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "#0B132B",
                  }}
                >
                  Sale
                </div>
              </Artboard>

              {/* FB Ad 4:5 */}
              <Artboard label="FB Ad · 4:5" accent="#22C55E" tag="ad">
                <div className="absolute inset-0 flex">
                  <div
                    className="w-1/2"
                    style={{
                      background:
                        "linear-gradient(180deg, #34D399 0%, #16A34A 100%)",
                    }}
                  />
                  <div
                    className="w-1/2 px-1.5 py-2 flex flex-col justify-between"
                    style={{ background: "#fff" }}
                  >
                    <div className="space-y-0.5">
                      <div
                        className="h-1 rounded-full"
                        style={{ background: "var(--ink)", width: "90%" }}
                      />
                      <div
                        className="h-1 rounded-full"
                        style={{ background: "var(--ink)", width: "70%" }}
                      />
                    </div>
                    <div
                      className="h-2 rounded-[3px] text-[5px] font-bold flex items-center justify-center"
                      style={{ background: "#16A34A", color: "#fff" }}
                    >
                      LEARN MORE
                    </div>
                  </div>
                </div>
              </Artboard>
            </div>

            {/* Web banner full width */}
            <div className="mt-3">
              <div
                className="relative h-[58px] sm:h-[72px] rounded-[10px] overflow-hidden border"
                style={{
                  borderColor: "var(--border-color)",
                  background:
                    "linear-gradient(120deg, #0B132B 0%, #1677FF 60%, #74D3FF 100%)",
                }}
              >
                <div className="absolute inset-y-0 left-0 w-1/2 px-3 sm:px-4 flex flex-col justify-center">
                  <div
                    className="h-1.5 rounded-full mb-1"
                    style={{ background: "#fff", width: "85%" }}
                  />
                  <div
                    className="h-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      width: "60%",
                    }}
                  />
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end pr-3">
                  <div
                    className="h-5 w-16 rounded-md flex items-center justify-center text-[8px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "#fff",
                      color: "var(--accent)",
                    }}
                  >
                    Get Quote
                  </div>
                </div>
                {/* Selection handles */}
                <span
                  aria-hidden
                  className="absolute -top-1 -left-1 w-2 h-2 rounded-sm"
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--accent)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-sm"
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--accent)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -bottom-1 -left-1 w-2 h-2 rounded-sm"
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--accent)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -bottom-1 -right-1 w-2 h-2 rounded-sm"
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--accent)",
                  }}
                />
              </div>
              <div
                className="mt-1.5 flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "var(--muted)" }}
              >
                <MousePointer2 className="w-2.5 h-2.5" strokeWidth={2.75} />
                <span>Web banner · 1200 × 400</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="flex -space-x-1.5"
              aria-label="Designers on this project"
            >
              {["#EC4899", "#1677FF", "#F59E0B", "#22C55E"].map((c, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </span>
            <span
              className="text-[11px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              4 designers · live editing
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            <FileDown className="w-3 h-3" strokeWidth={2.5} />
            PNG · PDF · Source
          </span>
        </div>
      </div>

      {/* Floating: design output count */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #F472B6 0%, #EC4899 100%)",
          boxShadow:
            "0 2px 6px rgba(236,72,153,0.35), 0 14px 32px rgba(236,72,153,0.28)",
          color: "#fff",
          transform: "rotate(-4deg)",
        }}
      >
        <Layers className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">500+</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            designs/mo
          </span>
        </div>
      </div>

      {/* Floating: turnaround chip */}
      <div
        className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #EFF6FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 14px 32px rgba(22,119,255,0.18)",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <Clock className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Avg turnaround
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            48 hours
          </span>
        </div>
      </div>

      {/* Floating: revisions chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FEF3C7 100%)",
          border: "1px solid rgba(245,158,11,0.3)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.18), 0 12px 28px rgba(245,158,11,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(245,158,11,0.35)",
          }}
        >
          <RefreshCw className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Revisions
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            Unlimited
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(236,72,153,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

function Artboard({
  label,
  accent,
  tag,
  tall,
  children,
}: {
  label: string
  accent: string
  tag: string
  tall?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <div
        className="text-[8.5px] font-bold uppercase tracking-[0.14em] mb-1 flex items-center gap-1"
        style={{ color: accent }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: accent }}
        />
        {label}
      </div>
      <div
        className="relative overflow-hidden border"
        style={{
          aspectRatio: tall ? "9 / 16" : "1 / 1",
          borderRadius: 8,
          borderColor: accent,
          boxShadow: `0 1px 2px rgba(17,35,68,0.06), 0 4px 14px ${accent}26`,
        }}
      >
        {children}
        <span
          aria-hidden
          className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-sm"
          style={{ background: "#fff", border: `1.5px solid ${accent}` }}
        />
        <span
          aria-hidden
          className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-sm"
          style={{ background: "#fff", border: `1.5px solid ${accent}` }}
        />
        <span
          aria-hidden
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-sm"
          style={{ background: "#fff", border: `1.5px solid ${accent}` }}
        />
        <span
          aria-hidden
          className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-sm"
          style={{ background: "#fff", border: `1.5px solid ${accent}` }}
        />
      </div>
      <div
        className="mt-1 text-[8.5px] font-mono uppercase"
        style={{ color: "var(--muted)" }}
      >
        {tag}
      </div>
    </div>
  )
}
