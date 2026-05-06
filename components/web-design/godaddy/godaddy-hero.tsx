import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Gauge, Smartphone, Search, AtSign } from "lucide-react"
import { GoDaddySiteShowcase } from "./godaddy-site-showcase"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 90+ on GoDaddy" },
  { Icon: Smartphone, label: "Mobile-first layouts" },
  { Icon: Search, label: "On-page SEO baked in" },
  { Icon: AtSign, label: "Domain & email kept" },
]

export function GoDaddyHero() {
  return (
    <section
      aria-labelledby="godaddy-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(27,219,219,0.18) 0%, rgba(27,219,219,0.04) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[24%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)",
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
              GoDaddy
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(27,219,219,0.10)",
                borderColor: "rgba(27,219,219,0.35)",
                color: "#0B132B",
              }}
            >
              <img
                src="/partners/godaddy-logo.svg"
                alt="GoDaddy website design partner"
                width={68}
                height={18}
                loading="eager"
                decoding="async"
                className="h-[18px] w-auto"
              />
              <span aria-hidden style={{ color: "rgba(11,19,43,0.35)" }}>·</span>
              Personalized design + support
            </span>

            <h1
              id="godaddy-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              GoDaddy website design that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ranks on Google</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Custom <strong style={{ color: "var(--ink)", fontWeight: 600 }}>GoDaddy website design</strong>{" "}
              inside Websites + Marketing or Managed WordPress — polished
              layouts, fast load times, on-page SEO, and lead capture wired in.
              You keep your domain, email, and GoDaddy stack. We handle the rest.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free GoDaddy site audit
              </PrimaryButton>
              <SecondaryButton asLink href="#godaddy-process">
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
                      background: "rgba(27,219,219,0.18)",
                      color: "#0B7A7A",
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
            <GoDaddySiteShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
