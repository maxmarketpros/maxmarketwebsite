import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Compass,
  Palette,
  Component,
  FileEdit,
  Gauge,
  Search,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Step = {
  n: string
  Icon: LucideIcon
  label: string
  copy: string
  output: string
}

const steps: Step[] = [
  {
    n: "01",
    Icon: Compass,
    label: "Discovery & wireframes",
    copy: "Strategy call, sitemap, content audit, conversion goals, competitor teardown. Low-fidelity wireframes for every unique page template.",
    output: "Sitemap + 6–14 wireframes",
  },
  {
    n: "02",
    Icon: Palette,
    label: "Design system",
    copy: "Color tokens, type scale, spacing rhythm, radius scale, motion tokens. A documented design system before the first pixel ships to production.",
    output: "Tokens + style guide",
  },
  {
    n: "03",
    Icon: Component,
    label: "Component library",
    copy: "Hand-coded React components — buttons, navs, hero variants, cards, forms, accordions. Each component typed, accessible, and storybook-tested.",
    output: "20–40 React components",
  },
  {
    n: "04",
    Icon: FileEdit,
    label: "CMS wiring",
    copy: "Sanity content models for services, locations, blog posts, case studies. Editor roles, preview mode, and a 15-minute Loom training video.",
    output: "Headless CMS, you own it",
  },
  {
    n: "05",
    Icon: Gauge,
    label: "Performance pass",
    copy: "Route-level code splitting, image optimization to WebP/AVIF, font subsetting, third-party script audit, Core Web Vitals tuned on a real device.",
    output: "Lighthouse 100 / 100 / 100 / 100",
  },
  {
    n: "06",
    Icon: Search,
    label: "SEO foundation",
    copy: "JSON-LD schema (LocalBusiness, Service, FAQ, Breadcrumb), sitemap.xml, OG images, canonicals, alt text, internal-link topology mapped to your top queries.",
    output: "Schema on every URL",
  },
  {
    n: "07",
    Icon: Rocket,
    label: "Launch & monitor",
    copy: "Zero-downtime DNS cutover, 301 redirect map, GA4 + GTM + Meta Pixel install, indexing check, and 30 days of post-launch support.",
    output: "Live + 30-day support",
  },
]

export function CustomCodedBuildBreakdown() {
  return (
    <section
      id="custom-coded-build-breakdown"
      aria-labelledby="custom-coded-build-breakdown-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What's in your build"
          heading={
            <span id="custom-coded-build-breakdown-heading">
              Every <span className="accent-underline">custom coded website</span>{" "}
              we ship includes…
            </span>
          }
          paragraph="A 7-step engagement that produces a launch-ready product, not just a pretty design file. Same scope, same checklist, every project."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="relative card-surface card-surface-hover overflow-hidden group"
              style={{
                borderRadius: "var(--radius-lg)",
                padding: "20px",
                animation: `fadeInUp 0.6s ease-out ${0.04 * idx}s both`,
              }}
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                    style={{
                      background: "rgba(22,119,255,0.10)",
                      color: "#1677FF",
                    }}
                  >
                    <s.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[13px] font-extrabold font-mono tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3
                  className="mt-4 text-[16.5px] font-bold leading-[1.25] tracking-[-0.005em]"
                  style={{ color: "var(--ink)" }}
                >
                  {s.label}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.copy}
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.10)",
                    color: "#059669",
                  }}
                >
                  ✓ {s.output}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Want a build plan tailored to your site?
          </span>
          <SecondaryButton asLink href="#contact">
            Get a build plan
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
