import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Bot, FileCode2, ArrowRight } from "lucide-react"

const deliverables = [
  {
    title: "Crawl budget audit",
    desc: "Identify wasted crawl on low-value URLs, facets, and admin paths.",
    link: { label: "See crawl audit", href: "#technical-crawl-tree" },
  },
  {
    title: "XML sitemap generation",
    desc: "Priority-tuned sitemap split by content type — synced to your CMS.",
    link: { label: "Pair with on-page SEO", href: "/services/seo/on-page" },
  },
  {
    title: "robots.txt hygiene",
    desc: "Clean allow/disallow rules, AI-crawler policy, sitemap reference.",
    link: { label: "Also see AI search", href: "/services/seo/ai-search" },
  },
]

export function TechnicalRobotsSitemap() {
  return (
    <section
      id="technical-robots-sitemap"
      aria-labelledby="technical-robots-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Robots + sitemap"
          heading={
            <span id="technical-robots-heading">
              The files{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Google</span>
              </span>{" "}
              reads first.
            </span>
          }
          paragraph="Every crawl starts with robots.txt and sitemap.xml. Tune them right and Googlebot prioritizes the right URLs on every visit."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* robots.txt */}
          <CodePanel
            filename="robots.txt"
            Icon={Bot}
            lines={[
              { num: 1, content: "# maxmarketpros.com robots.txt", color: "muted" },
              { num: 2, content: "", color: "ink" },
              { num: 3, content: "User-agent: *", color: "token" },
              { num: 4, content: "Allow: /", color: "value" },
              { num: 5, content: "Disallow: /admin/", color: "value" },
              { num: 6, content: "Disallow: /cart/", color: "value" },
              { num: 7, content: "Disallow: /*?filter=", color: "value" },
              { num: 8, content: "", color: "ink" },
              { num: 9, content: "# AI crawler policy", color: "muted" },
              { num: 10, content: "User-agent: GPTBot", color: "token" },
              { num: 11, content: "Allow: /", color: "value" },
              { num: 12, content: "", color: "ink" },
              { num: 13, content: "User-agent: Google-Extended", color: "token" },
              { num: 14, content: "Allow: /", color: "value" },
              { num: 15, content: "", color: "ink" },
              {
                num: 16,
                content: "Sitemap: https://maxmarketpros.com/sitemap.xml",
                color: "link",
              },
            ]}
          />

          {/* sitemap.xml */}
          <CodePanel
            filename="sitemap.xml"
            Icon={FileCode2}
            lines={[
              {
                num: 1,
                content: '<?xml version="1.0" encoding="UTF-8"?>',
                color: "muted",
              },
              {
                num: 2,
                content: '<urlset xmlns="...sitemap/0.9">',
                color: "tag",
              },
              { num: 3, content: "  <url>", color: "tag" },
              {
                num: 4,
                content: "    <loc>/services/seo/technical</loc>",
                color: "value",
              },
              {
                num: 5,
                content: "    <lastmod>2026-04-24</lastmod>",
                color: "value",
              },
              {
                num: 6,
                content: "    <priority>0.9</priority>",
                color: "value",
              },
              { num: 7, content: "  </url>", color: "tag" },
              { num: 8, content: "  <url>", color: "tag" },
              {
                num: 9,
                content: "    <loc>/services/seo/on-page</loc>",
                color: "value",
              },
              {
                num: 10,
                content: "    <priority>0.9</priority>",
                color: "value",
              },
              { num: 11, content: "  </url>", color: "tag" },
              { num: 12, content: "  <url>", color: "tag" },
              {
                num: 13,
                content: "    <loc>/services/seo/off-page</loc>",
                color: "value",
              },
              { num: 14, content: "  </url>", color: "tag" },
              { num: 15, content: "  <!-- +78 more URLs -->", color: "muted" },
              { num: 16, content: "</urlset>", color: "tag" },
            ]}
          />
        </div>

        {/* Deliverables row */}
        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="card-surface p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <h3
                className="text-[15.5px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {d.title}
              </h3>
              <p
                className="mt-2 text-[13.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                {d.desc}
              </p>
              <a
                href={d.link.href}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold hover:underline"
                style={{ color: "#DC2626" }}
              >
                {d.link.label}
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-8 flex justify-center">
          <PrimaryButton asLink href="#contact">
            Fix my robots + sitemap
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

type LineColor = "muted" | "ink" | "token" | "value" | "tag" | "link"
const colorFor: Record<LineColor, string> = {
  muted: "#6B7280",
  ink: "#E5E7EB",
  token: "#F59E0B",
  value: "#E5E7EB",
  tag: "#60A5FA",
  link: "#34D399",
}

function CodePanel({
  filename,
  Icon,
  lines,
}: {
  filename: string
  Icon: typeof Bot
  lines: { num: number; content: string; color: LineColor }[]
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        background: "#0B132B",
        boxShadow:
          "0 10px 30px rgba(11,19,43,0.15), 0 30px 80px rgba(11,19,43,0.08)",
      }}
    >
      {/* Tab header */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{
          background: "#13203F",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <Icon
          className="w-3.5 h-3.5"
          strokeWidth={2.25}
          style={{ color: "#F97316" }}
        />
        <span
          className="text-[12px] font-mono font-semibold"
          style={{ color: "#F3F4F6" }}
        >
          {filename}
        </span>
        <span className="ml-auto flex gap-1">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </span>
      </div>
      {/* Code body */}
      <pre
        className="p-4 text-[12px] leading-[1.65] font-mono overflow-x-auto"
        style={{ color: "#E5E7EB" }}
      >
        {lines.map((line) => (
          <div key={line.num} className="flex gap-3">
            <span
              className="select-none shrink-0 text-right"
              style={{
                color: "rgba(229,231,235,0.28)",
                width: 22,
              }}
            >
              {line.num}
            </span>
            <span style={{ color: colorFor[line.color] }}>
              {line.content || "\u00a0"}
            </span>
          </div>
        ))}
      </pre>
    </div>
  )
}
