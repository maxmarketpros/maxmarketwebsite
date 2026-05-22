import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { MapPin, Phone, Star, Navigation, TrendingUp } from "lucide-react"

const proofPills = [
  { Icon: TrendingUp, label: "+147% GBP calls avg." },
  { Icon: MapPin, label: "Top 3 in 90 days" },
  { Icon: Star, label: "4.9★ across 250+ clients" },
  { Icon: Navigation, label: "49/49 grid coverage" },
]

export function LocalHero() {
  return (
    <section
      aria-labelledby="local-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient amber-dominant background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-18%] left-[50%] translate-x-[-50%] w-[720px] h-[720px] sm:w-[1100px] sm:h-[1100px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0.03) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        {/* Breadcrumb — centered */}
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium flex justify-center"
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
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Local SEO
            </li>
          </ol>
        </nav>

        {/* Centered copy block */}
        <div
          className="mt-8 max-w-[900px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(245,158,11,0.10)",
                borderColor: "rgba(245,158,11,0.25)",
                color: "#B4730E",
              }}
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
              Local SEO · For service businesses
            </span>
          </div>

          <h1
            id="local-hero-heading"
            className="mt-6 text-[42px] xs:text-[46px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Local SEO that{" "}
            <span className="accent-underline">dominates</span> the Google{" "}
            <span className="whitespace-nowrap">Map Pack.</span>
          </h1>

          <p
            className="mt-7 mx-auto text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] max-w-[700px]"
            style={{ color: "var(--muted)" }}
          >
            Done-for-you Local SEO for service businesses. We rank you in the
            Google Map Pack, win every{" "}
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>
              &ldquo;near me&rdquo;
            </span>{" "}
            search across your service area, and turn your Google Business
            Profile into your highest-ROI lead channel.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              Request your free Local SEO audit
            </PrimaryButton>
            <SecondaryButton asLink href="#local-before-after">
              See a 90-day case snapshot
            </SecondaryButton>
          </div>
        </div>

        {/* Proof ribbon */}
        <div
          className="mt-14 sm:mt-16 max-w-[1080px] mx-auto"
          style={{ animation: "fadeInUp 0.8s ease-out 0.15s both" }}
        >
          <div
            className="relative card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              padding: "14px",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x"
              style={{ borderColor: "var(--border-color)" }}
            >
              {proofPills.map((p, idx) => (
                <div
                  key={p.label}
                  className="flex items-center justify-center gap-2.5 px-3 py-3.5 sm:px-5 sm:py-4 text-center"
                  style={{
                    borderColor: "var(--border-color)",
                    borderTopWidth: idx >= 2 ? 1 : 0,
                    borderLeftWidth: idx % 2 === 1 ? 1 : 0,
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(245,158,11,0.12)",
                      color: "#D97706",
                    }}
                  >
                    <p.Icon className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[13px] sm:text-[14px] font-semibold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-4 text-center text-[12px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Real rankings · Real revenue · Real service businesses
          </div>
        </div>
      </div>
    </section>
  )
}
