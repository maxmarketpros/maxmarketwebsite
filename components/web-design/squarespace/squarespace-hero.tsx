import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Palette, Gauge, Code2, Search } from "lucide-react"
import { SquarespaceEditorShowcase } from "./squarespace-editor-showcase"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 90+ on Squarespace" },
  { Icon: Code2, label: "Custom CSS + code injection" },
  { Icon: Search, label: "SEO-tuned from section one" },
  { Icon: Palette, label: "Migration from any platform" },
]

export function SquarespaceHero() {
  return (
    <section
      aria-labelledby="squarespace-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,11,11,0.10) 0%, rgba(11,11,11,0.03) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
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
              Squarespace
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(11,11,11,0.06)",
                borderColor: "rgba(11,11,11,0.18)",
                color: "#0B0B0B",
              }}
            >
              <span
                className="w-4 h-4 rounded-[5px] inline-flex items-center justify-center text-[9px] font-extrabold"
                style={{
                  background: "#0B0B0B",
                  color: "#fff",
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                Sq
              </span>
              Squarespace website design · Done-for-you
            </span>

            <h1
              id="squarespace-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Squarespace website design that{" "}
              <span className="accent-underline">actually</span> converts.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Custom Squarespace website design on{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Squarespace 7.1 + Fluid Engine
              </span>
              , polished with custom CSS, code injection, and conversion-first
              layouts — and tuned for SEO from the very first section. No
              cookie-cutter templates, no DIY guesswork.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free Squarespace audit
              </PrimaryButton>
              <SecondaryButton asLink href="#squarespace-process">
                See our build process
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "rgba(11,11,11,0.08)",
                      color: "#0B0B0B",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <SquarespaceEditorShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
