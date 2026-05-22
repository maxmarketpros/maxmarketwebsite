import { SectionHeader } from "@/components/ui/section-header"
import {
  Layers,
  Server,
  Globe2,
  Database,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Quadrant = {
  Icon: LucideIcon
  title: string
  blurb: string
  pieces: string[]
  brand: string
  brandSoft: string
  link: { href: string; label: string }
}

const quadrants: Quadrant[] = [
  {
    Icon: Layers,
    title: "Frontend",
    blurb:
      "Server-rendered React components with edge-streamed HTML, hand-tuned animations, and a token-driven design system.",
    pieces: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    brand: "#1677FF",
    brandSoft: "rgba(22,119,255,0.10)",
    link: {
      href: "/services/web-design",
      label: "All web design services",
    },
  },
  {
    Icon: Server,
    title: "API & Backend",
    blurb:
      "Server actions, route handlers, and webhooks. Type-safe queries, zero ORM hell, every dependency replaceable.",
    pieces: ["Node.js", "Server Actions", "Route Handlers", "Resend", "Webhooks"],
    brand: "#7C3AED",
    brandSoft: "rgba(124,58,237,0.10)",
    link: {
      href: "/solutions/custom-web-apps",
      label: "Custom web apps",
    },
  },
  {
    Icon: Globe2,
    title: "Edge & Hosting",
    blurb:
      "Vercel's global CDN with ISR, image optimization, automatic HTTPS, instant rollbacks, and preview deploys per branch.",
    pieces: ["Vercel CDN", "ISR", "Image Optimization", "Edge Middleware", "Analytics"],
    brand: "#0F766E",
    brandSoft: "rgba(15,118,110,0.10)",
    link: {
      href: "/services/seo/on-page",
      label: "On-page SEO add-on",
    },
  },
  {
    Icon: Database,
    title: "CMS & Data",
    blurb:
      "Headless CMS for non-technical editing, structured product data, transactional emails, and Stripe-powered checkout.",
    pieces: ["Sanity", "Stripe", "Postgres", "GraphQL", "S3 / Cloudinary"],
    brand: "#EA580C",
    brandSoft: "rgba(234,88,12,0.10)",
    link: {
      href: "/solutions/custom-web-apps",
      label: "Headless commerce",
    },
  },
]

export function CustomCodedArchitectureBento() {
  return (
    <section
      id="custom-coded-architecture"
      aria-labelledby="custom-coded-architecture-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Architecture"
          heading={
            <span id="custom-coded-architecture-heading">
              How a custom coded website is{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">wired up</span>.
              </span>
            </span>
          }
          paragraph="Four layers, each owned, each replaceable. No black-box page builder, no proprietary plugin format. If you ever need to take it elsewhere, every layer ports cleanly."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {quadrants.map((q, idx) => (
            <div
              key={q.title}
              className="card-surface card-surface-hover relative overflow-hidden group"
              style={{
                borderRadius: "var(--radius-xl)",
                animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
              }}
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, ${q.brand} 0%, ${q.brand}55 100%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${q.brand}1A 0%, transparent 70%)`,
                }}
              />
              <div className="relative p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                    style={{
                      background: q.brandSoft,
                      color: q.brand,
                    }}
                  >
                    <q.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <h3
                    className="text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {q.title}
                  </h3>
                </div>

                <p
                  className="mt-4 text-[14px] sm:text-[15px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {q.blurb}
                </p>

                {/* Node graph SVG */}
                <NodeGraph color={q.brand} />

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {q.pieces.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
                      style={{
                        background: q.brandSoft,
                        color: q.brand,
                        border: `1px solid ${q.brand}26`,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <a
                  href={q.link.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition-colors"
                  style={{ color: q.brand }}
                >
                  {q.link.label}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NodeGraph({ color }: { color: string }) {
  return (
    <div
      className="mt-5 rounded-[var(--radius-md)] p-3 sm:p-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(11,19,43,0.02) 0%, rgba(11,19,43,0.05) 100%)",
        border: "1px solid var(--border-color)",
      }}
    >
      <svg
        viewBox="0 0 320 80"
        className="w-full h-[64px]"
        aria-hidden
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" x2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={color} stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <path
          d="M40 40 L120 20 L200 50 L280 30"
          fill="none"
          stroke={`url(#grad-${color.replace("#", "")})`}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M40 40 L120 60 L200 20 L280 50"
          fill="none"
          stroke={`url(#grad-${color.replace("#", "")})`}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.5"
        />

        {/* Nodes */}
        {[
          { cx: 40, cy: 40, r: 8 },
          { cx: 120, cy: 20, r: 6 },
          { cx: 120, cy: 60, r: 6 },
          { cx: 200, cy: 50, r: 7 },
          { cx: 200, cy: 20, r: 5 },
          { cx: 280, cy: 30, r: 6 },
          { cx: 280, cy: 50, r: 5 },
        ].map((n, i) => (
          <g key={i}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r + 4}
              fill={color}
              opacity="0.12"
            />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={color} />
            <circle cx={n.cx} cy={n.cy} r={n.r - 2} fill="#fff" opacity="0.35" />
          </g>
        ))}
      </svg>
    </div>
  )
}
