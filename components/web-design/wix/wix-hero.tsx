import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Gauge, Code2, Search, Layers } from "lucide-react"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 90+ on Wix" },
  { Icon: Code2, label: "Velo + custom code" },
  { Icon: Search, label: "Schema on every page" },
  { Icon: Layers, label: "Editor + Studio fluent" },
]

export function WixHero() {
  return (
    <section
      aria-labelledby="wix-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(214,255,85,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(11,11,11,0.05) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.32) 0%, rgba(214,255,85,0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(17,109,255,0.14) 0%, transparent 65%)",
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
              Wix
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(11,11,11,0.85)",
                borderColor: "rgba(214,255,85,0.55)",
                color: "#D6FF55",
              }}
            >
              <span
                className="w-4 h-4 rounded-[5px] inline-flex items-center justify-center text-[9px] font-extrabold"
                style={{
                  background: "#D6FF55",
                  color: "#0B0B0B",
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                W
              </span>
              Wix website design · Editor + Studio
            </span>

            <h1
              id="wix-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Wix website design that{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, #D6FF55 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                ranks
              </span>{" "}
              — not just looks pretty.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Custom Wix website design on{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Wix Studio
              </span>{" "}
              and{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Wix Editor
              </span>
              , wired with Velo code, App Market integrations, and a 12-point
              Wix SEO accelerator. Lighthouse 90+, schema on every page, and a
              14-day delivery — for service businesses, ecommerce, and agencies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free Wix audit
              </PrimaryButton>
              <SecondaryButton asLink href="#wix-seo-accelerator">
                See the Wix SEO process
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
                      background: "#0B0B0B",
                      color: "#D6FF55",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Wix Studio canvas mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <WixStudioCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}

function WixStudioCanvas() {
  return (
    <div
      className="relative rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #181818 100%)",
        border: "1px solid rgba(214,255,85,0.30)",
        boxShadow:
          "0 4px 24px rgba(11,11,11,0.18), 0 24px 80px rgba(11,11,11,0.28)",
      }}
    >
      {/* Top toolbar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.10)" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        <div className="ml-3 flex items-center gap-1.5">
          <span
            className="text-[10px] font-extrabold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
            style={{ background: "#D6FF55", color: "#0B0B0B" }}
          >
            Studio
          </span>
          <span className="text-[11px] font-medium text-white/70">
            yourbrand.com
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(214,255,85,0.16)",
              color: "#D6FF55",
              border: "1px solid rgba(214,255,85,0.35)",
            }}
          >
            ● Live
          </span>
        </div>
      </div>

      {/* Canvas */}
      <div className="p-5 grid grid-cols-12 gap-3">
        {/* Hero block */}
        <div
          className="col-span-12 rounded-lg p-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(214,255,85,0.18) 0%, rgba(17,109,255,0.16) 100%)",
            border: "1px dashed rgba(214,255,85,0.40)",
          }}
        >
          <div className="h-2 w-1/3 rounded-full bg-white/80 mb-2" />
          <div className="h-2 w-2/3 rounded-full bg-white/40 mb-3" />
          <div
            className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.10em] px-1.5 py-0.5 rounded"
            style={{ background: "#D6FF55", color: "#0B0B0B" }}
          >
            CTA →
          </div>
        </div>

        {/* Three feature blocks */}
        {[
          { c: "rgba(214,255,85,0.20)", l: "Bookings" },
          { c: "rgba(17,109,255,0.20)", l: "Stores" },
          { c: "rgba(255,255,255,0.10)", l: "Members" },
        ].map((b) => (
          <div
            key={b.l}
            className="col-span-4 rounded-md p-3"
            style={{
              background: b.c,
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div
              className="w-6 h-6 rounded mb-2"
              style={{ background: "rgba(255,255,255,0.85)" }}
            />
            <div className="h-1.5 w-full rounded-full bg-white/55 mb-1" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/35" />
            <div className="text-[9px] font-bold mt-2 text-white/70">
              {b.l}
            </div>
          </div>
        ))}

        {/* Code panel */}
        <div
          className="col-span-12 rounded-md p-3 font-mono text-[10px]"
          style={{
            background: "#000",
            border: "1px solid rgba(214,255,85,0.20)",
          }}
        >
          <div className="text-white/40">// velo: schema on every page</div>
          <div style={{ color: "#D6FF55" }}>
            wixSeo<span className="text-white/70">.</span>setStructuredData
            <span className="text-white">({`{`}</span>
          </div>
          <div className="pl-4 text-white/80">
            type<span className="text-white/40">:</span>{" "}
            <span style={{ color: "#74D3FF" }}>"LocalBusiness"</span>,
          </div>
          <div className="text-white">{`})`}</div>
        </div>
      </div>

      {/* Floating Lighthouse score */}
      <div
        className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-2 rounded-[var(--radius-md)]"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,11,11,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-[13px]"
            style={{
              background: "#D6FF55",
              color: "#0B0B0B",
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
    </div>
  )
}
