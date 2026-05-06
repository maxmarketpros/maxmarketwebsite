import { SectionHeader } from "@/components/ui/section-header"
import { ArrowUpRight } from "lucide-react"

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

const projects: Project[] = [
  {
    slug: "solpool",
    name: "Sol Pool Tile Cleaning",
    industry: "Pool Service",
    result: "+312% organic traffic in 6 months",
    stack: "Webflow",
    color: "#1677FF",
    desktop: "/showcase/solpool-desktop.jpg",
    mobile: "/showcase/solpool-mobile.jpg",
  },
  {
    slug: "gopher",
    name: "Gopher Excavation",
    industry: "Excavation & Grading",
    result: "42 leads/month from a brand-new site",
    stack: "Webflow",
    color: "#1677FF",
    desktop: "/showcase/gopher-desktop.jpg",
    mobile: "/showcase/gopher-mobile.jpg",
  },
  {
    slug: "allexterior",
    name: "All Exterior",
    industry: "Exterior Remodeling",
    result: "Map-pack ranking in 4 weeks post-launch",
    stack: "Webflow",
    color: "#1677FF",
    desktop: "/showcase/allexterior-desktop.jpg",
    mobile: "/showcase/allexterior-mobile.jpg",
  },
  {
    slug: "iohi",
    name: "Inside Out Home Improvement",
    industry: "Home Remodeling",
    result: "Lighthouse 98 • 1.1s LCP",
    stack: "Custom-coded",
    color: "#8B5CF6",
    desktop: "/showcase/iohi-desktop.jpg",
    mobile: "/showcase/iohi-mobile.jpg",
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
          paragraph="Every site below ships with SEO, analytics, and conversion tracking on day one. Click any project to see the full case study."
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
          <a
            href="/about/case-studies"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
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
          className="hidden sm:block absolute bottom-4 right-4 w-[90px] h-[180px] rounded-[14px] overflow-hidden border-[3px] shadow-[0_8px_24px_rgba(17,35,68,0.22)]"
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
            background: "rgba(255,255,255,0.9)",
            color: project.color,
            border: `1px solid ${project.color}33`,
          }}
        >
          {project.stack}
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
      </div>
    </article>
  )
}
