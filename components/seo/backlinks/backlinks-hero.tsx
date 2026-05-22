import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Link2,
  Shield,
  CheckCircle2,
  TrendingUp,
  Network,
  MapPin,
  Phone,
  Clock,
  Star,
  Building2,
} from "lucide-react"

const proofPills = [
  { Icon: Shield, label: "Editorial only" },
  { Icon: CheckCircle2, label: "100% dofollow on Tier 1" },
  { Icon: MapPin, label: "NAP-consistent" },
  { Icon: TrendingUp, label: "90-day lift" },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function BacklinksHero() {
  return (
    <section
      aria-labelledby="backlinks-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[24%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[6%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
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
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Backlinks &amp; Directories
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(20,184,166,0.10)",
                borderColor: "rgba(20,184,166,0.28)",
                color: "#0F766E",
              }}
            >
              <Network className="w-3.5 h-3.5" strokeWidth={2.5} />
              Backlinks &amp; Directories · Done‑for‑you authority
            </span>

            <h1
              id="backlinks-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Backlinks &amp; directory listings that actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">move rankings</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Buy backlinks the right way. We build{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                editorial backlinks on DR 40+ publishers
              </span>{" "}
              and lock in{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                50+ NAP-consistent citations
              </span>{" "}
              across the directories your customers — and Google — actually
              trust. Real placements, real reporting, zero PBNs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Build my link plan
              </PrimaryButton>
              <SecondaryButton asLink href="#backlinks-network">
                See sample placements
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
                      background: "rgba(20,184,166,0.14)",
                      color: "#0F766E",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Link Profile Stack */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <LinkProfileStack />
          </div>
        </div>
      </div>
    </section>
  )
}

const forbesArticle = {
  outlet: "Forbes",
  domain: "forbes.com",
  brand: "#0B132B",
  category: "BUSINESS",
  date: "Apr 2026",
  dr: 92,
}

const yelpProfile = {
  name: "Brightline Plumbing & HVAC",
  category: "Plumber · HVAC contractor",
  rating: 4.9,
  reviews: 287,
  fields: [
    { Icon: Building2, label: "Name", value: "Brightline Plumbing & HVAC" },
    { Icon: MapPin, label: "Address", value: "1842 Birch Ave, Phoenix" },
    { Icon: Phone, label: "Phone", value: "(602) 555‑0142" },
    { Icon: Clock, label: "Hours", value: "Open 24/7" },
  ],
}

const dirThumbs = [
  { name: "Houzz", domain: "houzz.com", brand: "#7AC142" },
  { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
  { name: "Angi", domain: "angi.com", brand: "#FF7424" },
]

function LinkProfileStack() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-14px, 16px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(204,251,241,0.92) 100%)",
          border: "1px solid rgba(20,184,166,0.32)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(20,184,166,0.20)",
        }}
      />

      {/* Main stack card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Top status bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "#14B8A6",
                boxShadow: "0 0 0 3px rgba(20,184,166,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#5EEAD4" }}
            >
              Live · Link Profile
            </span>
          </div>
          <span
            className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            200+ sources · indexed
          </span>
        </div>

        {/* ── Editorial backlink card (Forbes) ── */}
        <div className="relative">
          <div
            className="flex items-center gap-3 px-4 sm:px-5 py-3"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,19,43,0.07) 0%, rgba(11,19,43,0.02) 100%)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <span
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
              }}
            >
              <img
                src={favicon(forbesArticle.domain, 128)}
                alt={forbesArticle.outlet}
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <div className="flex-1 min-w-0">
              <div
                className="text-[14px] font-bold leading-tight"
                style={{ color: forbesArticle.brand }}
              >
                {forbesArticle.outlet}
              </div>
              <div
                className="text-[10.5px] font-mono truncate"
                style={{ color: "var(--muted)" }}
              >
                {forbesArticle.domain}/sites/...
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(22,119,255,0.12)",
                color: "var(--accent)",
              }}
            >
              <Link2 className="w-3 h-3" strokeWidth={2.5} />
              Dofollow · DR {forbesArticle.dr}
            </span>
          </div>

          <div className="px-4 sm:px-5 pt-4 pb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(20,184,166,0.14)",
                  color: "#0F766E",
                }}
              >
                {forbesArticle.category}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {forbesArticle.date}
              </span>
            </div>
            <p
              className="mt-2 text-[13.5px] leading-[1.55]"
              style={{ color: "var(--ink)" }}
            >
              For homeowners weighing energy upgrades this spring,{" "}
              <span
                className="relative font-semibold"
                style={{ color: "#0F766E" }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[1px] h-[6px]"
                  style={{
                    background: "rgba(20,184,166,0.30)",
                    zIndex: -1,
                  }}
                />
                Phoenix-area HVAC specialists
              </span>{" "}
              recommend a 16+ SEER heat-pump…
            </p>
          </div>
        </div>

        {/* ── Yelp citation card ── */}
        <div
          className="relative px-4 sm:px-5 py-4"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border-color)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
              }}
            >
              <img
                src={favicon("yelp.com", 128)}
                alt="Yelp"
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <div className="flex-1 min-w-0">
              <div
                className="text-[13.5px] font-bold leading-tight truncate"
                style={{ color: "var(--ink)" }}
              >
                {yelpProfile.name}
              </div>
              <div
                className="flex items-center gap-1.5 text-[11px]"
                style={{ color: "var(--muted)" }}
              >
                <span className="inline-flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3 h-3"
                      strokeWidth={2}
                      fill="#FBBF24"
                      style={{ color: "#FBBF24" }}
                    />
                  ))}
                </span>
                <span className="font-bold" style={{ color: "var(--ink)" }}>
                  {yelpProfile.rating}
                </span>
                <span>· {yelpProfile.reviews} reviews</span>
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(20,184,166,0.14)",
                color: "#0F766E",
              }}
            >
              <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} />
              NAP verified
            </span>
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {yelpProfile.fields.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-1.5 text-[11.5px] min-w-0"
              >
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(20,184,166,0.14)",
                    color: "#0F766E",
                  }}
                >
                  <f.Icon className="w-2.5 h-2.5" strokeWidth={2.5} />
                </span>
                <span
                  className="truncate"
                  style={{ color: "var(--ink)" }}
                >
                  {f.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Directory thumbs row ── */}
        <div
          className="px-4 sm:px-5 py-3"
          style={{
            background:
              "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Also live on
            </span>
            <span
              className="text-[10.5px] font-bold"
              style={{ color: "#0F766E" }}
            >
              + 47 more
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {dirThumbs.map((d) => (
              <span
                key={d.domain}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-[10px]"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  minWidth: 0,
                }}
              >
                <span
                  className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                  style={{ background: "#fff" }}
                >
                  <img
                    src={favicon(d.domain, 64)}
                    alt={d.name}
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                    className="w-[14px] h-[14px] object-contain"
                  />
                </span>
                <span
                  className="text-[11px] font-semibold truncate"
                  style={{ color: "var(--ink)" }}
                >
                  {d.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)",
          boxShadow:
            "0 2px 6px rgba(20,184,166,0.35), 0 14px 32px rgba(20,184,166,0.28)",
          color: "#042F2E",
          transform: "rotate(-4deg)",
        }}
      >
        <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            +RDs / 90d
          </span>
          <span className="text-[22px] font-extrabold leading-none">47</span>
        </div>
      </div>

      <div
        className="absolute -top-7 -right-6 z-20 hidden sm:block"
        style={{
          filter: "drop-shadow(0 12px 28px rgba(20,184,166,0.4))",
          transform: "rotate(6deg)",
        }}
      >
        <div
          className="w-[76px] h-[76px] rounded-[20px] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(204,251,241,0.98) 100%)",
            border: "1px solid rgba(20,184,166,0.42)",
          }}
        >
          <img
            src={icons8Url("y9hxr8weXKKt", 256)}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            className="w-[52px] h-[52px] object-contain"
          />
        </div>
      </div>

      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0F9FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            All listings
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            100% verified
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,184,166,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}
