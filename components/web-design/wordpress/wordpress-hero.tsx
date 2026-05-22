import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Gauge, Search, Zap, ShieldCheck } from "lucide-react"

const WP_BLUE = "#00749C"
const WP_BLUE_DEEP = "#005A78"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 90+ on WP" },
  { Icon: Search, label: "Yoast / Rank Math wired" },
  { Icon: Zap, label: "WP Rocket cached" },
  { Icon: ShieldCheck, label: "Wordfence active" },
]

export function WordpressHero() {
  return (
    <section
      aria-labelledby="wordpress-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(0,116,156,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(11,19,43,0.05) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.22) 0%, rgba(0,116,156,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
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
              WordPress
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(0,116,156,0.35)",
                color: WP_BLUE,
              }}
            >
              <span
                className="w-4 h-4 rounded-[5px] inline-flex items-center justify-center text-[9px] font-extrabold"
                style={{
                  background: WP_BLUE,
                  color: "#fff",
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                W
              </span>
              WordPress website design · self-hosted, wired right
            </span>

            <h1
              id="wordpress-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              WordPress website design that's{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                wired right
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Custom{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                WordPress website design
              </span>{" "}
              on Gutenberg or your favorite page builder, wired with Yoast or
              Rank Math, WP Rocket, and Wordfence — Lighthouse 90+, schema on
              every page, and a 14-day delivery for service businesses,
              ecommerce, and agencies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free WordPress audit
              </PrimaryButton>
              <SecondaryButton asLink href="#wordpress-plugin-stack">
                See the plugin stack
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
                      background: WP_BLUE,
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

          {/* Right: WordPress admin frame mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
            aria-label="WordPress admin bar mockup with Gutenberg blocks"
          >
            <WordpressAdminFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function WordpressAdminFrame() {
  return (
    <div
      className="relative rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--border-color)",
        boxShadow:
          "0 4px 24px rgba(11,19,43,0.10), 0 24px 80px rgba(11,19,43,0.18)",
      }}
    >
      {/* WP top admin bar */}
      <div
        className="flex items-center gap-3 px-4 py-2 text-[11px]"
        style={{ background: "#1D2327", color: "#fff" }}
      >
        <span
          className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-extrabold"
          style={{ background: WP_BLUE, color: "#fff" }}
        >
          W
        </span>
        <span className="font-semibold opacity-90">wp-admin</span>
        <span className="opacity-50">·</span>
        <span className="opacity-80">maxmarketpros.com</span>
        <div className="ml-auto flex items-center gap-2 opacity-70">
          <span>+ New</span>
          <span>0</span>
          <span>Howdy, Will</span>
        </div>
      </div>

      {/* Faux browser-tab strip */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{ borderColor: "var(--border-color)", background: "#F6F7F7" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        <div className="ml-3 flex items-center gap-1.5">
          <span
            className="text-[10px] font-extrabold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
            style={{ background: WP_BLUE, color: "#fff" }}
          >
            Gutenberg
          </span>
          <span className="text-[11px] font-medium" style={{ color: "var(--muted)" }}>
            /home — editor
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(34,197,94,0.12)",
              color: "#15803D",
              border: "1px solid rgba(34,197,94,0.30)",
            }}
          >
            ● Saved
          </span>
        </div>
      </div>

      {/* Editor canvas */}
      <div className="p-5 grid grid-cols-12 gap-3" style={{ background: "#fff" }}>
        {/* Heading block */}
        <BlockChip label="H1 — heading" cols={12} accent>
          <div className="h-2.5 w-2/3 rounded-full" style={{ background: "var(--ink)" }} />
        </BlockChip>

        {/* Cover image block */}
        <BlockChip label="Cover" cols={12}>
          <div
            className="h-16 rounded-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,116,156,0.20) 0%, rgba(116,211,255,0.20) 100%)",
              border: "1px dashed rgba(0,116,156,0.35)",
            }}
          />
        </BlockChip>

        {/* Columns block */}
        {[
          { l: "Service A" },
          { l: "Service B" },
          { l: "Service C" },
        ].map((b) => (
          <div
            key={b.l}
            className="col-span-4 rounded-md p-3"
            style={{
              background: "#F6F7F7",
              border: "1px solid var(--border-color)",
            }}
          >
            <div
              className="w-6 h-6 rounded mb-2"
              style={{ background: WP_BLUE }}
            />
            <div className="h-1.5 w-full rounded-full mb-1" style={{ background: "rgba(11,19,43,0.18)" }} />
            <div className="h-1.5 w-1/2 rounded-full" style={{ background: "rgba(11,19,43,0.12)" }} />
            <div className="text-[9px] font-bold mt-2" style={{ color: WP_BLUE }}>
              {b.l}
            </div>
          </div>
        ))}

        {/* CTA block */}
        <BlockChip label="Buttons" cols={12}>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-extrabold px-3 py-1.5 rounded"
              style={{ background: WP_BLUE, color: "#fff" }}
            >
              Get a quote →
            </span>
            <span
              className="text-[10px] font-bold px-2.5 py-1.5 rounded"
              style={{
                background: "transparent",
                color: WP_BLUE,
                border: `1px solid ${WP_BLUE}`,
              }}
            >
              Learn more
            </span>
          </div>
        </BlockChip>

        {/* Schema code line */}
        <div
          className="col-span-12 rounded-md p-3 font-mono text-[10px]"
          style={{
            background: "#1D2327",
            border: "1px solid rgba(0,116,156,0.30)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.45)" }}>// schema injected on every page</div>
          <div style={{ color: "#74D3FF" }}>
            wp_head<span style={{ color: "rgba(255,255,255,0.55)" }}>(</span>
            <span style={{ color: "#fff" }}>"LocalBusiness"</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>)</span>
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
              background: WP_BLUE,
              color: "#fff",
            }}
          >
            94
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

      {/* Floating plugin badges */}
      <div
        className="absolute top-[42%] -left-4 sm:-left-6 px-2.5 py-2 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-1.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        {[
          { l: "Yoast", c: "#A4286A" },
          { l: "Rocket", c: "#FF5722" },
          { l: "Fence", c: WP_BLUE_DEEP },
        ].map((p) => (
          <span
            key={p.l}
            className="flex items-center gap-1.5 text-[10px] font-bold"
            style={{ color: "var(--ink)" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: p.c }}
            />
            {p.l}
          </span>
        ))}
      </div>
    </div>
  )
}

function BlockChip({
  label,
  cols,
  accent,
  children,
}: {
  label: string
  cols: number
  accent?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`col-span-${cols} relative rounded-md p-3`}
      style={{
        background: "#fff",
        border: accent
          ? `1.5px solid ${WP_BLUE}`
          : "1px solid var(--border-color)",
        boxShadow: accent ? "0 0 0 3px rgba(0,116,156,0.10)" : "none",
      }}
    >
      <span
        className="absolute -top-2 left-3 text-[9px] font-extrabold uppercase tracking-[0.10em] px-1.5 py-0.5 rounded"
        style={{
          background: accent ? WP_BLUE : "#F6F7F7",
          color: accent ? "#fff" : "var(--muted)",
          border: accent ? "none" : "1px solid var(--border-color)",
        }}
      >
        {label}
      </span>
      <div className="pt-2">{children}</div>
    </div>
  )
}
