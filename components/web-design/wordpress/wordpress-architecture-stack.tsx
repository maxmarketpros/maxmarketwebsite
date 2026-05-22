import { SectionHeader } from "@/components/ui/section-header"
import {
  Globe,
  Server,
  Code2,
  Palette,
  Puzzle,
  FileText,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WP_BLUE = "#00749C"

type Layer = {
  name: string
  caption: string
  preview: React.ReactNode
  Icon: LucideIcon
  tone: string
}

const layers: Layer[] = [
  {
    name: "Domain & DNS",
    caption: "Cloudflare-fronted DNS, HTTPS, redirects, and email routing — owned by you.",
    Icon: Globe,
    tone: "rgba(116,211,255,0.16)",
    preview: (
      <div className="font-mono text-[11px] flex items-center gap-1.5">
        <span style={{ color: "var(--muted)" }}>https://</span>
        <span style={{ color: "var(--ink)", fontWeight: 700 }}>yourbrand.com</span>
        <span
          className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded"
          style={{ background: "rgba(34,197,94,0.14)", color: "#15803D" }}
        >
          A · CF
        </span>
      </div>
    ),
  },
  {
    name: "Managed hosting",
    caption: "WP Engine, Kinsta, or Cloudways — tuned PHP, object cache, daily backups.",
    Icon: Server,
    tone: "rgba(0,116,156,0.14)",
    preview: (
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        {["WP Engine", "Kinsta", "Cloudways"].map((h) => (
          <span
            key={h}
            className="px-2 py-0.5 rounded-full"
            style={{
              background: "#fff",
              color: WP_BLUE,
              border: "1px solid rgba(0,116,156,0.30)",
            }}
          >
            {h}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: "WordPress core",
    caption: "Latest stable WP, hardened wp-config, auto-updates, and zero abandoned plugins.",
    Icon: Code2,
    tone: "rgba(11,19,43,0.06)",
    preview: (
      <div className="font-mono text-[11px]" style={{ color: "var(--ink)" }}>
        wp core update <span style={{ color: "var(--muted)" }}>--minor</span>
        <span
          className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded"
          style={{ background: "rgba(34,197,94,0.14)", color: "#15803D" }}
        >
          ✓ 6.x
        </span>
      </div>
    ),
  },
  {
    name: "Theme",
    caption: "Block theme (FSE), a premium framework, or a hand-coded child theme.",
    Icon: Palette,
    tone: "rgba(0,116,156,0.10)",
    preview: (
      <div className="flex items-center gap-1.5 flex-wrap">
        {["Twenty Twenty-Four", "GeneratePress", "Custom"].map((t, i) => (
          <span
            key={t}
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              background: i === 1 ? WP_BLUE : "#fff",
              color: i === 1 ? "#fff" : "var(--ink)",
              border: i === 1 ? "none" : "1px solid var(--border-color)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: "Plugins",
    caption: "Curated, not bloated — Yoast, WP Rocket, Wordfence, Gravity Forms, ACF.",
    Icon: Puzzle,
    tone: "rgba(116,211,255,0.18)",
    preview: (
      <div className="grid grid-cols-5 gap-1">
        {["Y", "R", "W", "G", "A"].map((m, i) => (
          <span
            key={i}
            className="h-6 rounded flex items-center justify-center text-[10px] font-extrabold"
            style={{
              background: i === 0 ? "#A4286A" : i === 1 ? "#FF5722" : i === 2 ? WP_BLUE : i === 3 ? "#FB923C" : "#0073AA",
              color: "#fff",
            }}
          >
            {m}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: "Content",
    caption: "Gutenberg blocks + custom post types — service pages, blog, case studies.",
    Icon: FileText,
    tone: "rgba(34,197,94,0.10)",
    preview: (
      <div className="space-y-1">
        <div className="h-1.5 w-2/3 rounded-full" style={{ background: "rgba(11,19,43,0.20)" }} />
        <div className="h-1.5 w-full rounded-full" style={{ background: "rgba(11,19,43,0.10)" }} />
        <div className="h-1.5 w-4/5 rounded-full" style={{ background: "rgba(11,19,43,0.10)" }} />
      </div>
    ),
  },
]

export function WordpressArchitectureStack() {
  return (
    <section
      id="wordpress-architecture"
      aria-labelledby="wordpress-architecture-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How a WordPress site is built"
          heading={
            <span id="wordpress-architecture-heading">
              Six layers, every one{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  tuned
                </span>
                .
              </span>
            </span>
          }
          paragraph="A great WordPress website design is more than a homepage — it's six layers of stack, each tuned for performance, security, and ranking. We ship every layer on every project, not just the parts you can see."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left: sticky narrative */}
          <div className="lg:sticky lg:top-24">
            <div
              className="card-surface p-6 sm:p-7"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <p
                className="text-[11px] font-extrabold uppercase tracking-[0.14em] mb-3"
                style={{ color: WP_BLUE }}
              >
                The full stack
              </p>
              <h3
                className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                Most WordPress sites die on the layers you can't see.
              </h3>
              <p
                className="mt-4 text-[15px] leading-[1.65]"
                style={{ color: "var(--muted)" }}
              >
                Bad hosting throttles your rankings. A bloated plugin list eats
                your speed. A free theme leaks PHP errors into Search Console.
                Our WordPress website design process audits and ships every layer
                — top to bottom — so the parts buyers see actually work.
              </p>
              <div
                className="mt-5 pt-5 border-t flex items-center gap-2 text-[13.5px] font-semibold"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span style={{ color: "var(--muted)" }}>Need the SEO companion?</span>
                <a
                  href="/services/seo/technical"
                  className="inline-flex items-center gap-1 group"
                  style={{ color: WP_BLUE }}
                >
                  Technical SEO
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: layer stack */}
          <ol className="space-y-3 relative">
            {/* Vertical rail */}
            <div
              aria-hidden
              className="absolute left-[28px] top-3 bottom-3 w-[2px] hidden sm:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,116,156,0.30) 0%, rgba(0,116,156,0.10) 100%)",
              }}
            />
            {layers.map((l, idx) => (
              <li
                key={l.name}
                className="relative"
                style={{
                  animation: `fadeInUp 0.55s ease-out ${0.06 * idx}s both`,
                }}
              >
                <div
                  className="card-surface card-surface-hover p-4 sm:p-5 flex items-start gap-4"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div
                    className="shrink-0 w-[56px] h-[56px] rounded-[14px] flex items-center justify-center relative z-10"
                    style={{
                      background: l.tone,
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <l.Icon
                      className="w-5 h-5"
                      strokeWidth={2.25}
                      style={{ color: WP_BLUE }}
                    />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-extrabold flex items-center justify-center"
                      style={{
                        background: WP_BLUE,
                        color: "#fff",
                        border: "2px solid var(--surface)",
                      }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-[15.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {l.name}
                    </h4>
                    <p
                      className="mt-1 text-[13.5px] leading-[1.55]"
                      style={{ color: "var(--muted)" }}
                    >
                      {l.caption}
                    </p>
                    <div
                      className="mt-3 p-2.5 rounded-md"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {l.preview}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
