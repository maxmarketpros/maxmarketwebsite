import Link from "next/link"
import { Compass } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { heroProofPills } from "@/lib/practices-data"
import { MethodDial } from "./method-dial"

export function PracticesHero() {
  return (
    <section
      aria-labelledby="practices-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.10) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(22,119,255,0.06) 45%, transparent 70%)",
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
              <Link href="/" className="hover:text-[var(--accent)]">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/about" className="hover:text-[var(--accent)]">About</Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>Practices</li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.35)",
                color: "var(--accent)",
              }}
            >
              <Compass className="w-3.5 h-3.5" strokeWidth={2.4} />
              How we work &middot; Our methodology
            </span>

            <h1
              id="practices-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              How Max Market Pros{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                works
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              A senior strategist, an in-house team, and a tight loop you can
              actually watch. No agency theater. No mystery Slack silence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/contact/schedule">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="/plans">
                See our plans
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {heroProofPills.map((p) => (
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
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-white"
                    style={{ border: "1px solid var(--border-color)" }}
                  >
                    <img
                      src={icons8Url(p.iconId, 48)}
                      alt=""
                      width={14}
                      height={14}
                      loading="lazy"
                      decoding="async"
                    />
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
            <MethodDial />

            {/* Floating cards over the dial */}
            <div
              className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-3 rounded-[var(--radius-md)]"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
              }}
            >
              <p
                className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--muted)" }}
              >
                Loop length
              </p>
              <p
                className="mt-0.5 text-[15px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                ~30 days
              </p>
            </div>

            <div
              className="absolute top-[8%] -left-2 sm:-left-4 px-3 py-2 rounded-[var(--radius-md)] hidden sm:block"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
              }}
            >
              <p
                className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--muted)" }}
              >
                Engagement
              </p>
              <p
                className="mt-0.5 text-[13px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Senior · In-house
                <br />
                Fixed scope
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
