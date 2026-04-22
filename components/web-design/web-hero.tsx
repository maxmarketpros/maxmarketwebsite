import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  Smartphone,
  Search,
  Gauge,
  Star,
} from "lucide-react"

const trustItems = [
  "200+ sites launched",
  "95+ Lighthouse avg.",
  "4.9★ client rating",
]

export function WebHero() {
  return (
    <section
      aria-labelledby="web-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-8%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[560px] h-[560px] sm:w-[880px] sm:h-[880px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(116,211,255,0.10) 35%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] gap-12 lg:gap-14 items-center">
          {/* Left: copy */}
          <div
            className="max-w-[640px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <a href="/" className="hover:text-[var(--accent)]">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-[var(--accent)]"
                  >
                    Services
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>
                  Web Design
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Custom Web Design &amp; Development
            </Pill>

            <h1
              id="web-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Web design that turns clicks into booked{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">jobs</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Fast, conversion-focused websites on Webflow, WordPress,
              Squarespace, Wix, or hand-coded — built for service businesses
              that need phones to ring, not just pretty pixels.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#showcase">
                See our work
              </PrimaryButton>
              <SecondaryButton asLink href="#contact">
                Book a free design call
              </SecondaryButton>
            </div>

            {/* Pills row */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <HeroPill
                icon={<Smartphone className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="Pixel-perfect"
                color="#1677FF"
              />
              <HeroPill
                icon={<Gauge className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="Lightning-fast"
                color="#F59E0B"
              />
              <HeroPill
                icon={<Search className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="SEO-ready"
                color="#10B981"
              />
            </div>

            {/* Trust */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: browser chrome mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            <BrowserMockup />

            {/* Decorative floating badge */}
            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#10B981" }}
              />
              Live site
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroPill({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border text-[12.5px] font-semibold whitespace-nowrap"
      style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
    >
      <span
        className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
        style={{ background: `${color}1A`, color }}
      >
        {icon}
      </span>
      {label}
    </div>
  )
}

function BrowserMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        boxShadow:
          "0 1px 2px rgba(17,35,68,0.06), 0 20px 60px rgba(11,19,43,0.12)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          background: "linear-gradient(180deg, #F4F7FB 0%, #E9EEF4 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF6057" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
        </div>
        <div
          className="ml-3 flex-1 h-6 rounded-md flex items-center px-3 text-[11px] font-medium"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            color: "var(--muted)",
          }}
        >
          <span
            className="inline-block w-3 h-3 rounded-full mr-2"
            style={{ background: "#10B981" }}
            aria-hidden
          />
          yourbrand.com
        </div>
      </div>

      {/* Page body */}
      <div
        className="relative p-5 sm:p-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
        }}
      >
        {/* Nav */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="h-5 w-[60px] rounded-md"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--cyan))",
            }}
          />
          <div className="flex gap-3">
            <span className="h-2 w-10 rounded-full" style={{ background: "#DCE4EE" }} />
            <span className="h-2 w-10 rounded-full" style={{ background: "#DCE4EE" }} />
            <span className="h-2 w-10 rounded-full" style={{ background: "#DCE4EE" }} />
            <span
              className="h-5 w-14 rounded-full"
              style={{
                background: "var(--accent)",
              }}
            />
          </div>
        </div>

        {/* Hero block */}
        <div className="mb-5">
          <div
            className="h-6 w-[85%] rounded-md mb-2.5"
            style={{ background: "#1A2541" }}
          />
          <div
            className="h-6 w-[60%] rounded-md mb-4"
            style={{ background: "#1A2541" }}
          />
          <div className="h-2 w-full rounded-full mb-1.5" style={{ background: "#E4EAF2" }} />
          <div className="h-2 w-[90%] rounded-full mb-1.5" style={{ background: "#E4EAF2" }} />
          <div className="h-2 w-[75%] rounded-full mb-4" style={{ background: "#E4EAF2" }} />
          <div className="flex gap-2">
            <span
              className="h-8 w-[110px] rounded-md"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--cyan))",
              }}
            />
            <span
              className="h-8 w-[90px] rounded-md border"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
              }}
            />
          </div>
        </div>

        {/* Feature row */}
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-[var(--radius-sm)] p-3 border"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
              }}
            >
              <div
                className="w-6 h-6 rounded-md mb-2"
                style={{
                  background: `${["#1677FF", "#10B981", "#F59E0B"][i]}1A`,
                }}
              />
              <div
                className="h-2 w-full rounded-full mb-1"
                style={{ background: "#DCE4EE" }}
              />
              <div
                className="h-2 w-[70%] rounded-full"
                style={{ background: "#E8EDF4" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
