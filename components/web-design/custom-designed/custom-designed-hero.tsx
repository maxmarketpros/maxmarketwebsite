import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Palette, Sparkles, Layers, Brush } from "lucide-react"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"
const CD_AMBER = "#FBBF24"

const proofPills = [
  { Icon: Brush, label: "Bespoke design — zero templates" },
  { Icon: Palette, label: "Brand-led type, color & motion system" },
  { Icon: Layers, label: "Built on the platform that fits you" },
  { Icon: Sparkles, label: "Pixel-perfect on every breakpoint" },
]

export function CustomDesignedHero() {
  return (
    <section
      aria-labelledby="custom-designed-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(244,63,94,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(139,92,246,0.12) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244,63,94,0.22) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 65%)",
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
                href="/services/web-design"
                className="hover:text-[var(--accent)]"
              >
                Web Design
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Custom Designed Websites
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(244,63,94,0.35)",
                color: CD_ROSE,
              }}
            >
              <Brush className="w-3.5 h-3.5" strokeWidth={2.5} />
              Custom website design · brand-led, never templated
            </span>

            <h1
              id="custom-designed-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Custom website design that{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                feels like you
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              A bespoke{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                custom website design
              </span>{" "}
              built around your brand — not a template, not a kit, not
              someone-else&rsquo;s layout. We design the type system, color
              palette, motion language, and every pixel of every breakpoint —
              then build it on the platform that fits your team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free design audit
              </PrimaryButton>
              <SecondaryButton asLink href="#custom-designed-progression">
                See how we design
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: CD_ROSE,
                      color: "#fff",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <p
                className="text-[11.5px] font-bold uppercase tracking-[0.14em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Designed in. Built anywhere.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <ToolLogo name="Figma">
                  <FigmaMark />
                </ToolLogo>
                <ToolLogo name="Adobe">
                  <AdobeMark />
                </ToolLogo>
                <ToolLogo name="Framer">
                  <FramerMark />
                </ToolLogo>
                <ToolLogo name="Webflow">
                  <WebflowMark />
                </ToolLogo>
              </div>
            </div>

            <p
              className="mt-8 text-[13.5px]"
              style={{ color: "var(--muted)" }}
            >
              Want hand-coded engineering too?{" "}
              <a
                href="/services/web-design/custom-coded"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Custom coded
              </a>
              {" · "}
              <a
                href="/services/web-design/webflow"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Webflow
              </a>
              {" · "}
              <a
                href="/services/web-design/squarespace"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Squarespace
              </a>
            </p>
          </div>

          {/* Right: design canvas mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
            aria-label="Design canvas mockup with frames, color tokens, and a stylist comment"
          >
            <DesignCanvasFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function ToolLogo({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <div
      className="inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
      title={name}
    >
      <span
        className="w-7 h-7 inline-flex items-center justify-center rounded-md"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
        }}
        aria-hidden
      >
        {children}
      </span>
      <span
        className="text-[13.5px] font-semibold"
        style={{ color: "var(--ink)" }}
      >
        {name}
      </span>
    </div>
  )
}

function FigmaMark() {
  // Five-circle Figma logo (simplified, brand-accurate)
  return (
    <svg viewBox="0 0 38 57" width="14" height="20" aria-hidden>
      <path
        d="M19 28.5a9.5 9.5 0 1 1 0-19h9.5v19H19z"
        fill="#A259FF"
      />
      <path d="M9.5 9.5h9.5v19H9.5a9.5 9.5 0 0 1 0-19z" fill="#F24E1E" />
      <path d="M9.5 28.5H19v19a9.5 9.5 0 1 1-9.5-19z" fill="#0ACF83" />
      <path d="M19 28.5h9.5a9.5 9.5 0 1 1-9.5 9.5V28.5z" fill="#1ABCFE" />
      <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" fill="#FF7262" />
    </svg>
  )
}

function AdobeMark() {
  // Adobe red triangle "A"
  return (
    <svg viewBox="0 0 32 28" width="18" height="16" aria-hidden>
      <path d="M0 0h13L0 28V0z" fill="#FA0F00" />
      <path d="M19 0h13v28L19 0z" fill="#FA0F00" />
      <path d="M16 10l9 18h-6l-2.5-5h-7L16 10z" fill="#FA0F00" />
    </svg>
  )
}

function FramerMark() {
  // Framer "F" — folded triangle stack
  return (
    <svg viewBox="0 0 24 36" width="14" height="20" aria-hidden>
      <path d="M4 0h16v12H8L4 0z" fill="#0055FF" />
      <path d="M4 12h16L12 24 4 12z" fill="#00AAFF" />
      <path d="M4 24h8v12L4 24z" fill="#88DDFF" />
    </svg>
  )
}

function WebflowMark() {
  // Stylized Webflow "W"
  return (
    <svg viewBox="0 0 36 28" width="18" height="14" aria-hidden>
      <path
        d="M0 0h6.5l4 14L15 0h5l4.5 14L29 0h6.5l-9 28h-6L16 14 12.5 28h-6L0 0z"
        fill="#146EF5"
      />
    </svg>
  )
}

function DesignCanvasFrame() {
  return (
    <div className="relative">
      <div
        className="relative rounded-[var(--radius-xl)] overflow-hidden"
        style={{
          background: "#FAF7F2",
          border: "1px solid rgba(11,19,43,0.08)",
          boxShadow:
            "0 4px 24px rgba(11,19,43,0.10), 0 24px 80px rgba(244,63,94,0.18)",
        }}
      >
        {/* Window chrome — Figma-like toolbar */}
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid rgba(11,19,43,0.06)",
          }}
        >
          <div className="flex gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#FF5F56" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#FFBD2E" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#27C93F" }}
            />
          </div>
          <span
            className="text-[10.5px] font-mono opacity-70"
            style={{ color: CD_INK }}
          >
            brand-system.fig — page 02
          </span>
          <span
            className="ml-auto text-[9.5px] font-bold px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(244,63,94,0.12)",
              color: CD_ROSE,
              border: "1px solid rgba(244,63,94,0.25)",
            }}
          >
            ● R3 review
          </span>
        </div>

        {/* Canvas */}
        <div className="relative px-5 py-5" style={{ minHeight: 320 }}>
          {/* Frame label */}
          <div
            className="text-[10px] font-mono mb-1"
            style={{ color: "rgba(11,19,43,0.5)" }}
          >
            Hero / Desktop · 1440
          </div>

          {/* Hero frame */}
          <div
            className="rounded-[10px] p-4"
            style={{
              background: "#fff",
              border: `1.5px solid ${CD_ROSE}`,
              boxShadow: "0 8px 24px rgba(11,19,43,0.06)",
            }}
          >
            <div
              className="h-2.5 rounded-full mb-2"
              style={{ background: CD_INK, width: "62%" }}
            />
            <div
              className="h-2.5 rounded-full mb-2"
              style={{ background: CD_INK, width: "78%" }}
            />
            <div
              className="h-2 rounded-full mb-3"
              style={{ background: "rgba(11,19,43,0.20)", width: "48%" }}
            />
            <div className="flex gap-2">
              <span
                className="px-3 py-1.5 rounded-md text-[10px] font-bold"
                style={{ background: CD_ROSE, color: "#fff" }}
              >
                Get started
              </span>
              <span
                className="px-3 py-1.5 rounded-md text-[10px] font-bold"
                style={{
                  border: `1px solid ${CD_INK}`,
                  color: CD_INK,
                }}
              >
                Learn more
              </span>
            </div>
          </div>

          {/* Color palette row */}
          <div className="mt-5 flex items-center gap-2">
            <span
              className="text-[10px] font-mono"
              style={{ color: "rgba(11,19,43,0.5)" }}
            >
              palette
            </span>
            {[CD_ROSE, CD_VIOLET, CD_AMBER, CD_INK, "#FAF7F2"].map((c) => (
              <span
                key={c}
                className="w-6 h-6 rounded-full"
                style={{
                  background: c,
                  border: "1.5px solid #fff",
                  boxShadow: "0 1px 3px rgba(11,19,43,0.20)",
                }}
              />
            ))}
          </div>

          {/* Type ramp */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div
              className="p-2.5 rounded-md"
              style={{
                background: "#fff",
                border: "1px solid rgba(11,19,43,0.08)",
              }}
            >
              <div
                className="text-[9px] font-mono mb-1"
                style={{ color: "rgba(11,19,43,0.5)" }}
              >
                Display / 64
              </div>
              <div
                className="text-[18px] font-extrabold leading-none"
                style={{ color: CD_INK }}
              >
                Aa
              </div>
            </div>
            <div
              className="p-2.5 rounded-md"
              style={{
                background: "#fff",
                border: "1px solid rgba(11,19,43,0.08)",
              }}
            >
              <div
                className="text-[9px] font-mono mb-1"
                style={{ color: "rgba(11,19,43,0.5)" }}
              >
                Heading / 32
              </div>
              <div
                className="text-[14px] font-bold leading-none"
                style={{ color: CD_INK }}
              >
                Aa
              </div>
            </div>
            <div
              className="p-2.5 rounded-md"
              style={{
                background: "#fff",
                border: "1px solid rgba(11,19,43,0.08)",
              }}
            >
              <div
                className="text-[9px] font-mono mb-1"
                style={{ color: "rgba(11,19,43,0.5)" }}
              >
                Body / 17
              </div>
              <div
                className="text-[11px] leading-none"
                style={{ color: CD_INK }}
              >
                Aa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating sticky comment */}
      <div
        className="absolute -bottom-5 -right-3 sm:-right-6 px-3 py-2.5 rounded-[var(--radius-md)] max-w-[220px]"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <div className="flex items-start gap-2">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-[11px] shrink-0"
            style={{
              background: `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
              color: "#fff",
            }}
          >
            MM
          </span>
          <div className="min-w-0">
            <div
              className="text-[10.5px] font-bold"
              style={{ color: CD_INK }}
            >
              Will · Lead designer
            </div>
            <div
              className="text-[11px] leading-[1.35] mt-0.5"
              style={{ color: "var(--muted)" }}
            >
              Tightened the H1 ramp. Ready for R3 review.
            </div>
          </div>
        </div>
      </div>

      {/* Floating spacing token chip */}
      <div
        className="absolute top-[36%] -left-4 sm:-left-6 px-2.5 py-2 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-1"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[9px] font-extrabold uppercase tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          spacing-3
        </span>
        <div className="flex items-baseline gap-1">
          <span
            className="text-[16px] font-extrabold tracking-[-0.02em]"
            style={{ color: CD_INK }}
          >
            24
          </span>
          <span
            className="text-[10px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            px
          </span>
        </div>
      </div>
    </div>
  )
}
