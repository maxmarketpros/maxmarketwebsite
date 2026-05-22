import Link from "next/link"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Globe,
  ImageIcon,
  Link2,
  MapPin,
  Sparkles,
  Star,
  Wifi,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { SectionHeader } from "@/components/ui/section-header"
import { MiniQR } from "@/components/solutions/qr-codes/mini-qr"

type Tool = {
  slug: string
  name: string
  pill: string
  accent: string
  Mockup: React.ComponentType
  description: string
}

const tools: Tool[] = [
  {
    slug: "seo-auditor",
    name: "SEO Auditor",
    pill: "SEO Auditor",
    accent: "#16A34A",
    Mockup: SeoAuditorMockup,
    description:
      "Run a full Lighthouse + on-page audit on any URL. 100+ checks across content, headings, structured data, security, and Core Web Vitals — in under 30 seconds.",
  },
  {
    slug: "directory-checker",
    name: "Directory Checker",
    pill: "Directory Checker",
    accent: "#1677FF",
    Mockup: DirectoryCheckerMockup,
    description:
      "Scan your business across 50+ directories, GPS apps, voice assistants, and review sites. Spot missing, wrong, and duplicate listings before they cost you customers.",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    pill: "QR Code Generator",
    accent: "#8B5CF6",
    Mockup: QrGeneratorMockup,
    description:
      "Build branded QR codes with custom colors, gradients, and your logo. Export crisp PNG or scalable SVG — no signup, no watermark.",
  },
]

const trustItems = [
  "100% free, no signup",
  "Instant, browser-based results",
  "Built by the Max Market Pros team",
]

export function ToolsHub() {
  return (
    <>
      <ToolsHero />
      <ToolsGrid />
      <ToolsFinalCta />
    </>
  )
}

function ToolsHero() {
  return (
    <section aria-labelledby="tools-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 lg:pb-20">
        <div className="max-w-[820px] mx-auto text-center" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
          <div className="flex justify-center">
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Free Tools
            </Pill>
          </div>

          <h1
            id="tools-hero-heading"
            className="mt-6 text-[40px] xs:text-[44px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="accent-underline">Free</span> Marketing Tools from Max Market Pros
          </h1>

          <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto" style={{ color: "var(--muted)" }}>
            A growing toolkit of free, instant utilities that audit your online presence and surface the gaps costing you customers — no signup required.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="#tools-grid">
              Browse tools
            </PrimaryButton>
            <SecondaryButton asLink href="#contact">
              Book a strategy call
            </SecondaryButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustItems.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                <Star className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" strokeWidth={0} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ToolsGrid() {
  return (
    <section id="tools-grid" aria-labelledby="tools-grid-heading" className="relative scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="The toolkit"
          heading={
            <span id="tools-grid-heading">
              Free utilities that pay for themselves —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">in one click.</span>
              </span>
            </span>
          }
          paragraph="Pick any tool to run an instant audit. Each one runs in your browser, returns results in seconds, and points you to the fix."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {tools.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  const { Mockup } = tool
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group card-surface card-surface-hover relative block overflow-hidden transition-all"
    >
      <div
        className="relative flex items-center justify-center overflow-hidden border-b px-5 py-8 sm:px-7 sm:py-10"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${tool.accent}14 0%, transparent 70%)` }}
        />
        <div className="pointer-events-none relative w-full max-w-[440px]">
          <Mockup />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${tool.accent}14`, color: tool.accent }}
        >
          {tool.pill}
        </span>
        <h3
          className="mt-3 text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {tool.name}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {tool.description}
        </p>
        <div
          className="mt-5 flex items-center gap-2 text-[14.5px] font-semibold"
          style={{ color: "var(--accent)" }}
        >
          <span>Open {tool.name}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  )
}

function ToolsFinalCta() {
  return (
    <section aria-labelledby="tools-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #1677FF 0%, #2B8AFF 45%, #74D3FF 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.25), 0 30px 80px rgba(22,119,255,0.22)",
          }}
        >
          <div aria-hidden className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(11,19,43,0.22) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <h2 id="tools-final-cta-heading" className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white">
              Found the gaps?{" "}
              <span className="whitespace-nowrap">Let's fix them.</span>
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[620px] mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
              These tools point at the problems. Our team builds the fix — listings, SEO, branded QR codes with full scan analytics, and the automation that turns every lead into revenue.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                style={{ color: "var(--accent)" }}
              >
                Book a free strategy call
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                Explore solutions
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------- Mockups -------------------- */

function SeoAuditorMockup() {
  const categories = [
    { label: "SEO", score: 96, color: "#16A34A" },
    { label: "Performance", score: 78, color: "#F59E0B" },
    { label: "Accessibility", score: 94, color: "#16A34A" },
    { label: "Best Practices", score: 100, color: "#16A34A" },
  ]

  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 75% 65% at 85% 15%, rgba(22,163,74,0.10) 0%, transparent 70%)" }}
      />

      {/* URL bar */}
      <div
        className="relative flex items-center gap-2 px-3 py-2 rounded-[var(--radius-sm)] border"
        style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
      >
        <Globe className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--muted)" }} strokeWidth={2.5} />
        <span className="text-[12.5px] font-semibold tabular-nums truncate" style={{ color: "var(--ink)" }}>
          https://acmeplumbing.com
        </span>
        <span
          className="ml-auto inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2 py-0.5 rounded-full shrink-0"
          style={{ background: "#16A34A14", color: "#16A34A" }}
        >
          <CheckCircle2 className="w-2.5 h-2.5" strokeWidth={2.75} />
          Audit complete
        </span>
      </div>

      {/* Score + breakdown */}
      <div className="relative mt-5 grid grid-cols-[auto_1fr] gap-5 sm:gap-6 items-center">
        {/* Gauge */}
        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: 110, height: 110 }}>
            <svg width={110} height={110} className="-rotate-90">
              <circle cx={55} cy={55} r={48} fill="none" stroke="var(--border-color)" strokeWidth={9} />
              <circle
                cx={55}
                cy={55}
                r={48}
                fill="none"
                stroke="#16A34A"
                strokeWidth={9}
                strokeLinecap="round"
                strokeDasharray={`${(92 / 100) * (2 * Math.PI * 48)} ${2 * Math.PI * 48}`}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center font-bold tracking-tight"
              style={{ color: "#16A34A", fontSize: 32 }}
            >
              92
            </div>
          </div>
          <div
            className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)" }}
          >
            Overall
          </div>
        </div>

        {/* Category rows */}
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <span
                className="text-[12.5px] font-semibold shrink-0"
                style={{ color: "var(--ink)", minWidth: 96 }}
              >
                {c.label}
              </span>
              <div
                className="flex-1 h-1.5 rounded-full overflow-hidden"
                style={{ background: "var(--border-color)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ background: c.color, width: `${c.score}%` }}
                />
              </div>
              <span
                className="font-bold tabular-nums shrink-0 text-[12.5px]"
                style={{ color: c.color, minWidth: 28, textAlign: "right" }}
              >
                {c.score}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function DirectoryCheckerMockup() {
  const rows: { name: string; domain: string; status: "ok" | "warn" | "miss"; note: string }[] = [
    { name: "Google", domain: "google.com", status: "ok", note: "Verified" },
    { name: "Apple Maps", domain: "apple.com", status: "ok", note: "Listed" },
    { name: "Yelp", domain: "yelp.com", status: "warn", note: "Wrong address" },
    { name: "Bing", domain: "bing.com", status: "ok", note: "Listed" },
    { name: "Facebook", domain: "facebook.com", status: "miss", note: "Not found" },
  ]

  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 75% 65% at 15% 15%, rgba(22,119,255,0.12) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
        <div>
          <div className="text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
            Listings scan
          </div>
          <div className="mt-0.5 text-[14.5px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            acmeplumbing.com
          </div>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "#1677FF14", color: "#1677FF" }}
        >
          <MapPin className="w-2.5 h-2.5" strokeWidth={2.75} />
          12 of 14 listed
        </span>
      </div>

      {/* Rows */}
      <ul className="relative mt-4 space-y-2">
        {rows.map((r) => (
          <li
            key={r.domain}
            className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)]"
            style={{ background: "var(--bg)" }}
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${r.domain}&sz=64`}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className="w-5 h-5 rounded-[4px] shrink-0"
            />
            <span className="text-[12.5px] font-semibold shrink-0" style={{ color: "var(--ink)", minWidth: 92 }}>
              {r.name}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold">
              {r.status === "ok" && (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#16A34A" }} strokeWidth={2.5} />
                  <span style={{ color: "#16A34A" }}>{r.note}</span>
                </>
              )}
              {r.status === "warn" && (
                <>
                  <AlertTriangle className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} strokeWidth={2.5} />
                  <span style={{ color: "#B45309" }}>{r.note}</span>
                </>
              )}
              {r.status === "miss" && (
                <>
                  <XCircle className="w-3.5 h-3.5" style={{ color: "#E53E3E" }} strokeWidth={2.5} />
                  <span style={{ color: "#C53030" }}>{r.note}</span>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function QrGeneratorMockup() {
  const types: { label: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; active?: boolean }[] = [
    { label: "URL", Icon: Link2, active: true },
    { label: "WiFi", Icon: Wifi },
    { label: "vCard", Icon: ImageIcon },
  ]

  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 75% 65% at 85% 15%, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-6 items-start">
        {/* QR */}
        <div className="flex flex-col items-center justify-self-center">
          <MiniQR color="#8B5CF6" size={150} />
          <span
            className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: "#8B5CF614", color: "#8B5CF6" }}
          >
            <Check className="w-2.5 h-2.5" strokeWidth={3} />
            Ready to export
          </span>
        </div>

        {/* Controls */}
        <div className="min-w-0">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
            Content type
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {types.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-2.5 py-1 rounded-full border"
                style={
                  t.active
                    ? { background: "#8B5CF614", color: "#8B5CF6", borderColor: "#8B5CF655" }
                    : { background: "var(--bg)", color: "var(--muted)", borderColor: "var(--border-color)" }
                }
              >
                <t.Icon className="w-3 h-3" strokeWidth={2.5} />
                {t.label}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              Style
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border" style={{ background: "#8B5CF6", borderColor: "var(--border-color)" }} />
              <span className="w-5 h-5 rounded-full border" style={{ background: "#1677FF", borderColor: "var(--border-color)" }} />
              <span className="w-5 h-5 rounded-full border" style={{ background: "#0F172A", borderColor: "var(--border-color)" }} />
              <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold" style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>PNG</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold" style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>SVG</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
