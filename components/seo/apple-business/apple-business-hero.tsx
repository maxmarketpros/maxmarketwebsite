import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Smartphone,
  MapPin,
  Mic,
  Search,
  Star,
  Navigation2,
  Phone,
  Globe,
  Zap,
  Wrench,
  BadgeCheck,
} from "lucide-react"

const proofPills = [
  { Icon: Smartphone, label: "1.3B+ active iPhones" },
  { Icon: MapPin, label: "~25% of US navigation" },
  { Icon: BadgeCheck, label: "58% of listings unclaimed" },
  { Icon: Zap, label: "Apple Maps Ads · 2026" },
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function AppleBusinessHero() {
  return (
    <section
      aria-labelledby="apple-business-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.16) 0%, rgba(22,119,255,0.04) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[28%] left-[-10%] w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[6%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(29,29,31,0.06) 0%, transparent 65%)",
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
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Apple Business
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(29,29,31,0.06)",
                borderColor: "rgba(29,29,31,0.18)",
                color: "#1D1D1F",
              }}
            >
              <img
                src={favicon("apple.com", 64)}
                alt="Apple"
                width={15}
                height={15}
                className="w-[15px] h-[15px] object-contain"
              />
              New for 2026 · Apple Business
            </span>

            <h1
              id="apple-business-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Apple Business profile{" "}
              <span className="accent-underline">management.</span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We get your business found on{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Apple Maps, Siri, Spotlight, and CarPlay
              </span>{" "}
              — claimed, optimized, and kept fresh — then put you first with the
              all-new{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Apple Maps Ads
              </span>{" "}
              launching this summer. Most of your local competitors haven&rsquo;t
              even claimed their listing yet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get my free Apple Maps audit
              </PrimaryButton>
              <SecondaryButton asLink href="#apple-maps-ads">
                See how Apple Maps Ads work
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
                      background: "rgba(22,119,255,0.12)",
                      color: "var(--accent)",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Apple Maps place-card mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <MapsPlaceCardMock />
          </div>
        </div>
      </div>
    </section>
  )
}

const photoTints = [
  "linear-gradient(135deg, #1677FF 0%, #74D3FF 100%)",
  "linear-gradient(135deg, #0B132B 0%, #334155 100%)",
  "linear-gradient(135deg, #2B8AFF 0%, #1D4ED8 100%)",
]

function MapsPlaceCardMock() {
  return (
    <div className="relative max-w-[360px] mx-auto">
      {/* iPhone frame */}
      <div
        className="relative rounded-[46px] p-[10px]"
        style={{
          background: "linear-gradient(160deg, #2A2A2E 0%, #1D1D1F 100%)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.12), 0 30px 70px rgba(17,35,68,0.28), inset 0 0 0 2px rgba(255,255,255,0.06)",
        }}
      >
        {/* Screen */}
        <div
          className="relative rounded-[37px] overflow-hidden"
          style={{ background: "#EAEFF5", aspectRatio: "9 / 18" }}
        >
          {/* Map layer */}
          <div className="absolute inset-0">
            <svg
              aria-hidden
              className="w-full h-full"
              viewBox="0 0 360 720"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="360" height="720" fill="#E7EEF6" />
              {/* parks */}
              <path
                d="M0 470 Q90 430 150 480 T360 460 L360 560 L0 560 Z"
                fill="#D7EBDA"
              />
              <circle cx="300" cy="180" r="70" fill="#D7EBDA" />
              {/* water */}
              <path
                d="M-20 60 Q80 130 60 240 T120 460 L-40 480 Z"
                fill="#C7E0F4"
              />
              {/* roads */}
              <g stroke="#FFFFFF" strokeWidth="9" fill="none" opacity="0.95">
                <path d="M-10 250 L370 300" />
                <path d="M40 -10 L120 730" />
                <path d="M-10 540 L370 500" />
                <path d="M250 -10 L300 730" />
              </g>
              <g stroke="#F4D58D" strokeWidth="5" fill="none" opacity="0.9">
                <path d="M-10 360 L370 410" />
              </g>
            </svg>
          </div>

          {/* Search bar */}
          <div className="absolute top-3 left-3 right-3">
            <div
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.94)",
                boxShadow: "0 2px 10px rgba(17,35,68,0.14)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Search
                className="w-4 h-4"
                strokeWidth={2.5}
                style={{ color: "var(--muted)" }}
              />
              <span
                className="text-[13px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                plumber near me
              </span>
              <span
                className="ml-auto w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(22,119,255,0.12)" }}
              >
                <Mic
                  className="w-3.5 h-3.5"
                  strokeWidth={2.5}
                  style={{ color: "var(--accent)" }}
                />
              </span>
            </div>
          </div>

          {/* Sponsored pin with blue halo */}
          <div
            className="absolute"
            style={{ top: "30%", left: "52%" }}
          >
            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="absolute w-12 h-12 rounded-full"
                style={{
                  background: "rgba(22,119,255,0.22)",
                  animation: "subtlePulse 1.8s ease-in-out infinite",
                  left: "50%",
                  top: "10px",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <span
                className="relative w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  border: "2.5px solid #fff",
                  boxShadow: "0 3px 8px rgba(22,119,255,0.5)",
                  color: "#fff",
                }}
              >
                <Wrench className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span
                className="mt-1 px-1.5 py-0.5 rounded text-[8.5px] font-extrabold uppercase tracking-[0.08em]"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  boxShadow: "0 2px 5px rgba(22,119,255,0.4)",
                }}
              >
                Ad
              </span>
            </div>
          </div>

          {/* secondary pins */}
          <span
            className="absolute w-4 h-4 rounded-full"
            style={{
              top: "44%",
              left: "26%",
              background: "#8A94A6",
              border: "2px solid #fff",
              boxShadow: "0 2px 4px rgba(17,35,68,0.2)",
            }}
          />
          <span
            className="absolute w-4 h-4 rounded-full"
            style={{
              top: "24%",
              left: "76%",
              background: "#8A94A6",
              border: "2px solid #fff",
              boxShadow: "0 2px 4px rgba(17,35,68,0.2)",
            }}
          />

          {/* Place card sheet */}
          <div
            className="absolute left-0 right-0 bottom-0 rounded-t-[26px] px-4 pt-2.5 pb-5"
            style={{
              background: "rgba(255,255,255,0.98)",
              boxShadow: "0 -8px 30px rgba(17,35,68,0.16)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="mx-auto mb-3 h-1 w-9 rounded-full"
              style={{ background: "#D5DCE6" }}
            />

            <div className="flex items-center gap-3">
              <span
                className="w-11 h-11 rounded-[13px] flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(22,119,255,0.32)",
                }}
              >
                <Wrench className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[15px] font-bold leading-tight truncate"
                  style={{ color: "var(--ink)" }}
                >
                  Summit Plumbing Co.
                </div>
                <div
                  className="text-[11.5px] font-medium leading-tight mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  Plumber · Open until 8 PM
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Star
                  className="w-3.5 h-3.5"
                  strokeWidth={2.5}
                  style={{ color: "#F5A623", fill: "#F5A623" }}
                />
                <span
                  className="text-[12.5px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  4.9
                </span>
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  (312)
                </span>
              </div>
            </div>

            {/* photo strip */}
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {photoTints.map((tint, i) => (
                <div
                  key={i}
                  className="h-12 rounded-[9px]"
                  style={{ background: tint }}
                />
              ))}
            </div>

            {/* action buttons */}
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <span
                className="flex flex-col items-center justify-center gap-1 py-2 rounded-[11px] text-[10.5px] font-semibold"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  color: "#fff",
                }}
              >
                <Navigation2 className="w-4 h-4" strokeWidth={2.5} />
                Directions
              </span>
              <span
                className="flex flex-col items-center justify-center gap-1 py-2 rounded-[11px] text-[10.5px] font-semibold"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call
              </span>
              <span
                className="flex flex-col items-center justify-center gap-1 py-2 rounded-[11px] text-[10.5px] font-semibold"
                style={{ background: "var(--bg)", color: "var(--ink)" }}
              >
                <Globe className="w-4 h-4" strokeWidth={2.5} />
                Website
              </span>
            </div>

            {/* Showcase tile */}
            <div
              className="mt-3 flex items-center gap-2.5 px-3 py-2.5 rounded-[12px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(22,119,255,0.10) 0%, rgba(116,211,255,0.10) 100%)",
                border: "1px solid rgba(22,119,255,0.22)",
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[9px] font-extrabold uppercase tracking-[0.12em]"
                  style={{ color: "var(--accent)" }}
                >
                  Showcase
                </div>
                <div
                  className="text-[12px] font-bold leading-tight truncate"
                  style={{ color: "var(--ink)" }}
                >
                  $59 drain cleaning — this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating: Verified on Apple Business */}
      <div
        className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "rgba(255,255,255,0.96)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 2px 6px rgba(17,35,68,0.12), 0 14px 32px rgba(17,35,68,0.16)",
          transform: "rotate(-4deg)",
        }}
      >
        <img
          src={favicon("apple.com", 128)}
          alt="Apple Business"
          width={22}
          height={22}
          className="w-[22px] h-[22px] object-contain"
        />
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Apple Business
          </span>
          <span
            className="inline-flex items-center gap-1 text-[13px] font-extrabold"
            style={{ color: "#16A34A" }}
          >
            <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2.5} />
            Verified
          </span>
        </div>
      </div>

      {/* Floating: Maps Ad live */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0F7FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.16)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="relative w-2.5 h-2.5 rounded-full"
          style={{
            background: "#1677FF",
            boxShadow: "0 0 0 3px rgba(22,119,255,0.22)",
            animation: "subtlePulse 1.4s ease-in-out infinite",
          }}
        />
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Maps Ad
          </span>
          <span
            className="text-[14px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            #1 placement
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,119,255,0.30) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}
