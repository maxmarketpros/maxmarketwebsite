import { SectionHeader } from "@/components/ui/section-header"
import { ArrowUpRight, TrendingUp, Gauge } from "lucide-react"
import { WebflowGlyph } from "./webflow-hero"

const WF_BLUE = "#146EF5"

type Project = {
  slug: string
  name: string
  industry: string
  result: string
  stack: string
  color: string
  desktop: string
  mobile: string
}

const featured: Project = {
  slug: "solpool",
  name: "Sol Pool Tile Cleaning",
  industry: "Pool Service",
  result: "+312% organic traffic in 6 months",
  stack: "Webflow",
  color: WF_BLUE,
  desktop: "/showcase/solpool-desktop.jpg",
  mobile: "/showcase/solpool-mobile.jpg",
}

const supporting: Project[] = [
  {
    slug: "gopher",
    name: "Gopher Excavation",
    industry: "Excavation & Grading",
    result: "42 leads/month from a brand-new site",
    stack: "Webflow",
    color: WF_BLUE,
    desktop: "/showcase/gopher-desktop.jpg",
    mobile: "/showcase/gopher-mobile.jpg",
  },
  {
    slug: "allexterior",
    name: "All Exterior",
    industry: "Exterior Remodeling",
    result: "Map-pack ranking in 4 weeks",
    stack: "Webflow",
    color: WF_BLUE,
    desktop: "/showcase/allexterior-desktop.jpg",
    mobile: "/showcase/allexterior-mobile.jpg",
  },
  {
    slug: "iohi",
    name: "Inside Out Home Improvement",
    industry: "Home Remodeling",
    result: "Lighthouse 98 · 1.1s LCP",
    stack: "Custom-coded",
    color: "#8B5CF6",
    desktop: "/showcase/iohi-desktop.jpg",
    mobile: "/showcase/iohi-mobile.jpg",
  },
]

export function WebflowShowcase() {
  return (
    <section
      id="webflow-showcase"
      aria-labelledby="webflow-showcase-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Webflow website design · in production"
          heading={
            <span id="webflow-showcase-heading">
              Real Webflow sites,{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  ranking & converting
                </span>
                .
              </span>
            </span>
          }
          paragraph="Sol Pool Tile Cleaning has been live on Webflow for 14 months — alongside Gopher Excavation and All Exterior, both Webflow builds too. Inside Out Home Improvement was custom-coded for performance."
        />

        {/* Featured Webflow project */}
        <div
          className="mt-12 rounded-[var(--radius-xl)] overflow-hidden relative"
          style={{
            background: "var(--surface)",
            border: `1.5px solid ${WF_BLUE}33`,
            boxShadow: `0 8px 24px ${WF_BLUE}1A, 0 1px 3px var(--shadow-color)`,
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, ${WF_BLUE} 0%, #4353FF 100%)`,
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
            {/* Copy side */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full self-start"
                style={{
                  background: "rgba(20,110,245,0.10)",
                  color: WF_BLUE,
                  border: "1px solid rgba(20,110,245,0.25)",
                }}
              >
                <WebflowGlyph size={11} />
                Built on Webflow · Featured case
              </span>

              <h3
                className="mt-4 text-[28px] sm:text-[34px] font-bold leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                {featured.name}
              </h3>
              <div
                className="mt-1 text-[13.5px] font-medium uppercase tracking-[0.08em]"
                style={{ color: "var(--muted)" }}
              >
                {featured.industry}
              </div>

              <p className="mt-4 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                A full Webflow website design — Designer-built layouts, CMS
                Collections for service areas, JSON-LD schema on every page,
                and managed hosting on Webflow's CDN. Migrated from a static
                Squarespace template; indexed inside 7 days.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Metric
                  Icon={TrendingUp}
                  value="+312%"
                  label="Organic traffic / 6 mo"
                />
                <Metric
                  Icon={Gauge}
                  value="98"
                  label="Lighthouse · Mobile"
                />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href="/resources/case-studies"
                  className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
                  style={{ color: WF_BLUE }}
                >
                  Read the SolPool case study
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </div>

            {/* Mockup side */}
            <div
              className="relative p-6 sm:p-8 lg:p-10 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,110,245,0.06) 0%, rgba(67,83,255,0.04) 100%)",
                borderLeft: "1px solid var(--border-color)",
              }}
            >
              <div className="relative w-full">
                {/* Desktop frame */}
                <div
                  className="rounded-[var(--radius-md)] overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 12px 32px rgba(11,19,43,0.18)",
                  }}
                >
                  <div
                    className="flex items-center gap-1.5 px-3 py-2"
                    style={{ background: "#F6F7F9", borderBottom: "1px solid var(--border-color)" }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
                    <span className="ml-3 text-[10px] font-mono" style={{ color: "var(--muted)" }}>
                      solpool.com
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featured.desktop}
                      alt={`${featured.name} desktop screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Mobile frame overlay */}
                <div
                  className="absolute -bottom-4 -right-2 sm:-right-4 w-[96px] sm:w-[120px] rounded-[14px] overflow-hidden hidden sm:block"
                  style={{
                    background: "#0B132B",
                    padding: 4,
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 12px 24px rgba(11,19,43,0.30)",
                  }}
                >
                  <div className="relative aspect-[1/2] overflow-hidden rounded-[10px]">
                    <img
                      src={featured.mobile}
                      alt={`${featured.name} mobile screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honest cross-stack note */}
        <div className="mt-10 mb-6 text-center">
          <p
            className="text-[13.5px] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Three of the four ship on Webflow — we only spec custom code when
            performance demands it.
          </p>
        </div>

        {/* Supporting projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supporting.map((p, i) => (
            <SupportingCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="/resources/case-studies"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
            style={{ color: WF_BLUE }}
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Metric({
  Icon,
  value,
  label,
}: {
  Icon: typeof TrendingUp
  value: string
  label: string
}) {
  return (
    <div
      className="rounded-[var(--radius-md)] px-3.5 py-3"
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border-color)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: WF_BLUE, color: "#fff" }}
        >
          <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
        <span
          className="text-[22px] font-extrabold leading-none tracking-[-0.02em]"
          style={{ color: "var(--ink)" }}
        >
          {value}
        </span>
      </div>
      <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  )
}

function SupportingCard({ p, index }: { p: Project; index: number }) {
  return (
    <a
      href="/resources/case-studies"
      className="group block rounded-[var(--radius-lg)] overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color)",
        animation: `fadeInUp 0.6s ease-out ${0.05 * index + 0.2}s both`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <img
          src={p.desktop}
          alt={`${p.name} desktop`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h4
            className="text-[16px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {p.name}
          </h4>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
            style={{
              background: `${p.color}1A`,
              color: p.color,
            }}
          >
            {p.stack}
          </span>
        </div>
        <div className="text-[12px] font-medium uppercase tracking-[0.08em] mt-0.5" style={{ color: "var(--muted)" }}>
          {p.industry}
        </div>
        <p className="mt-2 text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
          {p.result}
        </p>
      </div>
    </a>
  )
}
