import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Gauge, Sparkles, Database, Globe2 } from "lucide-react"

const WF_BLUE = "#146EF5"
const WF_INK = "#1D1F23"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 95+ on Webflow" },
  { Icon: Sparkles, label: "Designer-built, no templates" },
  { Icon: Database, label: "CMS Collections wired" },
  { Icon: Globe2, label: "Hosted on Webflow CDN" },
]

export function WebflowHero() {
  return (
    <section
      aria-labelledby="webflow-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(20,110,245,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(67,83,255,0.06) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,110,245,0.22) 0%, rgba(20,110,245,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(67,83,255,0.18) 0%, transparent 65%)",
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
              Webflow
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(20,110,245,0.35)",
                color: WF_BLUE,
              }}
            >
              <WebflowGlyph size={14} />
              Webflow website design · designer-built, no templates
            </span>

            <h1
              id="webflow-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Webflow website design that{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                moves with you
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Custom{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Webflow website design
              </span>{" "}
              with hand-built layouts in Webflow Designer, CMS Collections wired
              for dynamic content, and managed hosting on Webflow's global CDN —
              Lighthouse 95+, schema on every page, and a 14-day delivery for
              service businesses, ecommerce, and agencies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free Webflow audit
              </PrimaryButton>
              <SecondaryButton asLink href="#webflow-showcase">
                See live Webflow sites
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
                      background: WF_BLUE,
                      color: "#fff",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Webflow Designer panel mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
            aria-label="Webflow Designer panel mockup with layers, canvas, and style panel"
          >
            <WebflowDesignerFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

export function WebflowGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={WF_BLUE}
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path d="M24 4.515 14.9 22h-8.8l3.806-7.371h-.171C6.582 18.7 1.901 21.235 0 22V14.435s2.957-.175 4.687-1.99H0V4.515h7.605v6.245h.169L10.953 4.515h5.755v6.205h.171L20.246 4.515z" />
    </svg>
  )
}

function WebflowDesignerFrame() {
  return (
    <div className="relative">
    <div
      className="relative rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: WF_INK,
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow:
          "0 4px 24px rgba(11,19,43,0.18), 0 24px 80px rgba(11,19,43,0.30)",
      }}
    >
      {/* Designer top toolbar */}
      <div
        className="flex items-center gap-3 px-3 py-2 text-[10.5px]"
        style={{ background: "#0F1014", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <WebflowGlyph size={14} />
        <span className="font-semibold opacity-90">Designer</span>
        <span className="opacity-30">·</span>
        <span className="opacity-70">maxmarketpros</span>
        <div className="ml-auto flex items-center gap-1.5">
          {/* Breakpoint switcher */}
          {[
            { l: "D", a: true, t: "Desktop" },
            { l: "T", a: false, t: "Tablet" },
            { l: "M", a: false, t: "Mobile L" },
            { l: "m", a: false, t: "Mobile" },
          ].map((b) => (
            <span
              key={b.t}
              title={b.t}
              className="w-5 h-5 rounded text-[9px] font-extrabold inline-flex items-center justify-center"
              style={{
                background: b.a ? WF_BLUE : "rgba(255,255,255,0.06)",
                color: b.a ? "#fff" : "rgba(255,255,255,0.55)",
              }}
            >
              {b.l}
            </span>
          ))}
          <span
            className="ml-2 text-[9.5px] font-bold px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(34,197,94,0.18)",
              color: "#34D399",
              border: "1px solid rgba(34,197,94,0.30)",
            }}
          >
            Published
          </span>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "120px 1fr 130px" }}>
        {/* Left rail — Layers / Navigator */}
        <div
          className="p-2.5 text-[10px] space-y-1"
          style={{
            background: "#16171C",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Navigator
          </div>
          {[
            { l: "▾ Body", lvl: 0, sel: false },
            { l: "▾ section.hero", lvl: 1, sel: false },
            { l: "▸ container", lvl: 2, sel: false },
            { l: "▾ section.cta", lvl: 1, sel: true },
            { l: "▸ h2.hero-h1", lvl: 2, sel: false },
            { l: "▸ btn.btn-primary", lvl: 2, sel: false },
            { l: "▸ section.grid", lvl: 1, sel: false },
            { l: "▸ footer", lvl: 1, sel: false },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-1.5 py-1 rounded"
              style={{
                paddingLeft: 6 + row.lvl * 8,
                background: row.sel ? "rgba(20,110,245,0.18)" : "transparent",
                color: row.sel ? "#74A9FF" : "rgba(255,255,255,0.7)",
                fontWeight: row.sel ? 600 : 400,
              }}
            >
              {row.l}
            </div>
          ))}
        </div>

        {/* Center — Canvas */}
        <div className="p-3" style={{ background: "#1D1F23" }}>
          <div
            className="rounded-md p-3"
            style={{
              background: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            }}
          >
            {/* Selection outline frame for hero */}
            <div
              className="rounded-md p-3 relative"
              style={{
                outline: `2px solid ${WF_BLUE}`,
                outlineOffset: 2,
              }}
            >
              <span
                className="absolute -top-[18px] left-0 text-[8.5px] font-extrabold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
                style={{ background: WF_BLUE, color: "#fff" }}
              >
                section.cta
              </span>
              <div
                className="h-2 w-2/3 rounded-full mb-2"
                style={{ background: "rgba(11,19,43,0.85)" }}
              />
              <div
                className="h-1.5 w-5/6 rounded-full mb-1"
                style={{ background: "rgba(11,19,43,0.18)" }}
              />
              <div
                className="h-1.5 w-3/4 rounded-full mb-3"
                style={{ background: "rgba(11,19,43,0.14)" }}
              />
              <span
                className="inline-block text-[9px] font-extrabold px-2.5 py-1 rounded"
                style={{ background: WF_BLUE, color: "#fff" }}
              >
                Get a quote →
              </span>
            </div>
            {/* Faux grid below */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {["Pool service", "SEO setup", "Local pages"].map((t) => (
                <div
                  key={t}
                  className="rounded-md p-2"
                  style={{ background: "#F1F5FA", border: "1px solid #E5ECF5" }}
                >
                  <div
                    className="w-5 h-5 rounded mb-1.5"
                    style={{ background: WF_BLUE }}
                  />
                  <div className="h-1 w-full rounded-full mb-1" style={{ background: "rgba(11,19,43,0.18)" }} />
                  <div className="h-1 w-2/3 rounded-full" style={{ background: "rgba(11,19,43,0.12)" }} />
                  <div className="text-[8px] font-bold mt-1.5" style={{ color: WF_BLUE }}>
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Faux Interactions timeline strip */}
          <div
            className="mt-2.5 rounded p-2 flex items-center gap-2"
            style={{
              background: "#0F1014",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="text-[8.5px] font-extrabold uppercase tracking-[0.12em]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Interactions
            </span>
            <div className="relative flex-1 h-3 rounded" style={{ background: "rgba(255,255,255,0.05)" }}>
              <span
                className="absolute top-0 bottom-0 left-0 rounded-l"
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(90deg, rgba(20,110,245,0.18) 0%, rgba(20,110,245,0.06) 100%)",
                }}
              />
              {[10, 38, 64].map((p, i) => (
                <span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: `${p}%` }}
                >
                  <span
                    className="block w-2 h-2 rotate-45"
                    style={{
                      background: WF_BLUE,
                      boxShadow: "0 0 0 1.5px #0F1014",
                    }}
                  />
                </span>
              ))}
              <span
                className="absolute top-0 bottom-0 w-[1.5px]"
                style={{ left: "44%", background: "#fff" }}
              />
            </div>
            <span className="text-[8.5px] font-mono" style={{ color: "rgba(255,255,255,0.55)" }}>
              0:00:44
            </span>
          </div>
        </div>

        {/* Right rail — Style panel */}
        <div
          className="p-2.5 text-[10px] space-y-2"
          style={{
            background: "#16171C",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            Selector
          </div>
          <div
            className="px-1.5 py-1 rounded font-mono text-[10px]"
            style={{
              background: "rgba(20,110,245,0.18)",
              color: "#74A9FF",
              fontWeight: 600,
            }}
          >
            .btn-primary
          </div>

          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Typography
          </div>
          <div className="flex justify-between"><span>Outfit</span><span style={{ color: "#fff" }}>700</span></div>
          <div className="flex justify-between"><span>Size</span><span style={{ color: "#fff" }}>15px</span></div>

          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Background
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-3.5 h-3.5 rounded"
              style={{ background: WF_BLUE }}
            />
            <span className="font-mono text-[9.5px]" style={{ color: "#fff" }}>#146EF5</span>
          </div>

          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Spacing
          </div>
          <div className="flex justify-between"><span>Pad Y</span><span style={{ color: "#fff" }}>14px</span></div>
          <div className="flex justify-between"><span>Pad X</span><span style={{ color: "#fff" }}>28px</span></div>

          <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Radius
          </div>
          <div className="flex justify-between"><span>All</span><span style={{ color: "#fff" }}>12px</span></div>
        </div>
      </div>
    </div>

      {/* Floating Lighthouse score */}
      <div
        className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-2 rounded-[var(--radius-md)]"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-[13px]"
            style={{
              background: WF_BLUE,
              color: "#fff",
            }}
          >
            96
          </span>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Lighthouse
            </div>
            <div
              className="text-[12px] font-bold"
              style={{ color: "var(--ink)" }}
            >
              Mobile · Performance
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactions badge */}
      <div
        className="absolute top-[40%] -left-4 sm:-left-6 px-2.5 py-2 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-1.5"
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
          Interactions
        </span>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-2 h-2 rotate-45"
              style={{ background: WF_BLUE }}
            />
          ))}
          <span className="text-[10px] font-bold ml-1" style={{ color: "var(--ink)" }}>
            3 keys
          </span>
        </div>
      </div>
    </div>
  )
}

