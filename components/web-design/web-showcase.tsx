import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowUpRight, ExternalLink } from "lucide-react"

type Project = {
  slug: string
  name: string
  industry: string
  result: string
  stack: string
  domain: string
  color: string
  desktop: string
  mobile: string
}

const projects: Project[] = [
  {
    slug: "sp-concrete",
    name: "S&P Concrete Construction",
    industry: "Commercial & Residential Concrete",
    result: "+319% organic traffic in 12 months",
    stack: "Custom Next.js",
    domain: "spconstructionca.com",
    color: "#E97316",
    desktop: "/showcase/spc-desktop.jpg",
    mobile: "/showcase/spc-mobile.jpg",
  },
  {
    slug: "precision-pool-tile",
    name: "Precision Pool Tile Cleaning",
    industry: "Pool Service & Restoration",
    result: "+664% organic traffic in 12 months",
    stack: "Webflow",
    domain: "pooltilecleaning.com",
    color: "#0EA5E9",
    desktop: "/showcase/precision-desktop.jpg",
    mobile: "/showcase/precision-mobile.jpg",
  },
]

export function WebShowcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="web-showcase-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Recent Work"
          heading={
            <span id="web-showcase-heading">
              Real websites.{" "}
              <span className="accent-underline">
                Real <span className="whitespace-nowrap">results.</span>
              </span>
            </span>
          }
          paragraph="Two builds, two industries, two very different stacks — and the SEO, analytics, and conversion tracking that come with every project."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Read the full case studies
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href="/resources/case-studies"
      aria-label={`${project.name} — read the case study`}
      className="block rounded-[var(--radius-xl)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        // @ts-expect-error CSS var for focus ring color
        "--tw-ring-color": project.color,
      }}
    >
      <article
        className="card-surface card-surface-hover relative overflow-hidden group"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        {/* Preview frame */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}14 0%, ${project.color}05 100%)`,
          }}
        >
          {/* Desktop screenshot */}
          <img
            src={project.desktop}
            alt={`${project.name} website — ${project.industry} case study on desktop`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Mobile screenshot overlay */}
          <div
            className="hidden sm:block absolute bottom-5 right-5 w-[110px] h-[220px] rounded-[16px] overflow-hidden border-[3px] shadow-[0_10px_30px_rgba(17,35,68,0.28)]"
            style={{ borderColor: "#0B132B" }}
          >
            <img
              src={project.mobile}
              alt={`${project.name} on mobile`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Top-left stack badge */}
          <div
            className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: project.color,
              border: `1px solid ${project.color}33`,
            }}
          >
            {project.stack}
          </div>

          {/* Top-right domain badge */}
          <div
            className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm"
            style={{
              background: "rgba(11,19,43,0.85)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <ExternalLink className="w-3 h-3" strokeWidth={2.5} aria-hidden />
            {project.domain}
          </div>
        </div>

        {/* Copy */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                className="text-[19px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {project.name}
              </h3>
              <div
                className="mt-1 text-[13px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {project.industry}
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
              }}
              aria-hidden
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </span>
          </div>

          <p
            className="mt-4 text-[14.5px] font-semibold leading-[1.5]"
            style={{ color: project.color }}
          >
            {project.result}
          </p>

          <div
            className="mt-4 pt-4 border-t flex items-center gap-1.5 text-[13.5px] font-semibold transition-colors"
            style={{
              borderColor: "var(--border-color)",
              color: project.color,
            }}
          >
            Read case study
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
              aria-hidden
            />
          </div>
        </div>
      </article>
    </Link>
  )
}
