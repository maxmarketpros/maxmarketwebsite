import Link from "next/link"
import {
  Search, Palette, Share2, BarChart3,
  ArrowRight, Check, Heart,
  Sparkles, TrendingUp, Zap, Star, Eye,
  Instagram, Facebook, Youtube, Twitter, Linkedin, Music2, Ghost, AtSign,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Category = {
  id: string
  Icon: typeof Search
  accent: string
  accentRgb: string
  label: string
  tagline: string
  pill: string
  signatureMetric: { value: string; label: string }
  floatingBadges: { Icon: typeof Sparkles; text: string; position: "tl" | "tr" | "bl" | "br" }[]
  bullets: string[]
  href: string
  Mockup: () => React.ReactNode
}

/* ─────────────── Mockups ─────────────── */

function SerpMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full px-4 py-4 flex flex-col gap-2.5">
      {/* Search bar */}
      <div
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full"
        style={{ background: "#fff", border: "1px solid #DCE6F2", boxShadow: "0 1px 3px rgba(17,35,68,0.05)" }}
      >
        <Search className="w-4 h-4" style={{ color: "#5B6B84" }} strokeWidth={2.2} />
        <span className="text-[13px] font-medium" style={{ color: "var(--ink)" }}>
          plumber near me
        </span>
        <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold" style={{ color: accent }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
          live
        </span>
      </div>

      {/* AI Overview */}
      <div
        className="rounded-md p-2.5 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #F0FDF4 100%)",
          border: `1px solid ${accent}33`,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-3 h-3" style={{ color: accent }} strokeWidth={2.4} />
          <span className="text-[9.5px] font-bold uppercase tracking-wider" style={{ color: accent }}>
            AI Overview
          </span>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 rounded-full" style={{ background: "#E2E8F0", width: "94%" }} />
          <div className="h-1.5 rounded-full" style={{ background: "#E2E8F0", width: "78%" }} />
          <div className="h-1.5 rounded-full" style={{ background: "#E2E8F0", width: "62%" }} />
        </div>
      </div>

      {/* Map Pack */}
      <div
        className="rounded-md p-2.5 space-y-1.5"
        style={{ background: "#fff", border: "1px solid #DCE6F2" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>
            ⌖ Map Pack
          </span>
          <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: `${accent}1A`, color: accent }}>
            Top 3
          </span>
        </div>
        {[
          { rank: 1, name: "Acme Plumbing Co.",   reviews: "4.9 ★ (412)" },
          { rank: 2, name: "QuickFix Plumbers",   reviews: "4.8 ★ (287)" },
          { rank: 3, name: "City Drain & Pipe",   reviews: "4.7 ★ (198)" },
        ].map((r) => (
          <div key={r.rank} className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: r.rank === 1 ? accent : `${accent}22`,
                color: r.rank === 1 ? "#fff" : accent,
                boxShadow: r.rank === 1 ? `0 0 0 2px ${accent}33` : "none",
              }}
            >
              {r.rank}
            </span>
            <span className="text-[11px] font-semibold flex-1 truncate" style={{ color: "var(--ink)" }}>
              {r.name}
            </span>
            <span className="text-[9.5px]" style={{ color: "#5B6B84" }}>{r.reviews}</span>
          </div>
        ))}
      </div>

      {/* Organic results */}
      <div className="space-y-1.5 flex-1">
        {[
          "Plumbing Services in Your Area | Acme Plumbing",
          "24/7 Emergency Plumber - QuickFix",
        ].map((title, i) => (
          <div key={i}>
            <div className="text-[9.5px]" style={{ color: accent }}>example{i + 1}.com › services</div>
            <div className="text-[11px] font-semibold leading-tight truncate" style={{ color: "#1677FF" }}>
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WebsiteMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full px-4 py-4 flex flex-col gap-0">
      {/* Browser chrome */}
      <div
        className="rounded-t-md px-2.5 py-1.5 flex items-center gap-1.5 shrink-0"
        style={{ background: "#F1F5F9", border: "1px solid #DCE6F2", borderBottom: "none" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
        <span
          className="ml-2 flex-1 px-2.5 py-[3px] rounded-full text-[10px] font-medium truncate"
          style={{ background: "#fff", color: "#5B6B84", border: "1px solid #E2E8F0" }}
        >
          🔒 yourbusiness.com
        </span>
      </div>

      {/* Browser body */}
      <div
        className="flex-1 rounded-b-md flex flex-col gap-2 overflow-hidden"
        style={{ background: "#fff", border: "1px solid #DCE6F2", borderTop: "none" }}
      >
        {/* Site nav */}
        <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: "#F1F5F9" }}>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ background: accent }} />
            <span className="text-[8.5px] font-bold" style={{ color: "var(--ink)" }}>BRAND</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            {["Home", "Services", "About"].map((l) => (
              <span key={l} className="text-[8.5px] font-medium" style={{ color: "#5B6B84" }}>{l}</span>
            ))}
          </div>
          <span
            className="ml-auto text-[8.5px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: accent }}
          >
            Book →
          </span>
        </div>

        {/* Hero */}
        <div
          className="mx-3 rounded-md p-3 flex flex-col gap-1.5"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, #74D3FF 100%)`,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          }}
        >
          <div className="text-[12px] font-bold leading-tight text-white">
            Built to convert.
          </div>
          <div className="text-[9.5px] leading-snug" style={{ color: "rgba(255,255,255,0.92)" }}>
            Custom-coded for speed &amp; SEO.
          </div>
          <div className="mt-1 inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white" style={{ color: accent }}>
            Get a quote →
          </div>
        </div>

        {/* Three feature cards */}
        <div className="px-3 grid grid-cols-3 gap-1.5">
          {[
            { c: accent,    label: "Speed" },
            { c: "#22C55E", label: "SEO" },
            { c: "#F59E0B", label: "Convert" },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-sm p-1.5 flex flex-col items-center gap-1"
              style={{ background: `${f.c}10`, border: `1px solid ${f.c}33` }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: f.c }} />
              <span className="text-[8.5px] font-bold" style={{ color: f.c }}>{f.label}</span>
            </div>
          ))}
        </div>

        {/* Content lines + platform pills */}
        <div className="px-3 pb-3 mt-auto space-y-1.5">
          <div className="space-y-1">
            <div className="h-1 rounded-full w-full" style={{ background: "#E2E8F0" }} />
            <div className="h-1 rounded-full w-[78%]" style={{ background: "#E2E8F0" }} />
          </div>
          <div className="flex flex-wrap gap-1">
            {["Webflow", "WordPress", "Wix", "Squarespace"].map((p) => (
              <span
                key={p}
                className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
                style={{ background: "#F1F5F9", color: "#5B6B84", border: "1px solid #E2E8F0" }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PinterestGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5.06 3.13 9.38 7.55 11.13-.1-.94-.2-2.39.04-3.42.22-.93 1.41-5.96 1.41-5.96s-.36-.72-.36-1.78c0-1.66.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.2.6 2.18 1.79 2.18 2.15 0 3.81-2.27 3.81-5.55 0-2.9-2.08-4.93-5.06-4.93-3.45 0-5.47 2.59-5.47 5.26 0 1.04.4 2.16.9 2.77.1.12.11.22.08.34l-.33 1.36c-.05.21-.17.26-.4.16-1.49-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.92-7.25 4.16 0 7.4 2.96 7.4 6.93 0 4.13-2.61 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.13C9.6 23.84 10.78 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
    </svg>
  )
}

function SocialMockup({ accent }: { accent: string }) {
  const platforms = [
    { name: "Instagram", brand: "linear-gradient(135deg, #FFDC80 0%, #FCAF45 25%, #F77737 50%, #F56040 60%, #E1306C 75%, #C13584 90%, #833AB4 100%)", Icon: Instagram, fg: "#fff", boost: false },
    { name: "Facebook",  brand: "#1877F2", Icon: Facebook,  fg: "#fff", boost: false },
    { name: "TikTok",    brand: "#0B132B", Icon: Music2,    fg: "#fff", boost: true  },
    { name: "YouTube",   brand: "#FF0000", Icon: Youtube,   fg: "#fff", boost: false },
    { name: "X",         brand: "#000000", Icon: Twitter,   fg: "#fff", boost: false },
    { name: "LinkedIn",  brand: "#0A66C2", Icon: Linkedin,  fg: "#fff", boost: false },
    { name: "Pinterest", brand: "#E60023", Icon: PinterestGlyph, fg: "#fff", boost: false },
    { name: "Snapchat",  brand: "#FFFC00", Icon: Ghost,     fg: "#0B132B", boost: false },
    { name: "Threads",   brand: "#0B132B", Icon: AtSign,    fg: "#fff", boost: false },
  ]

  return (
    <div className="relative w-full h-full px-4 py-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <Share2 className="w-3.5 h-3.5" style={{ color: accent }} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: accent }}>
            Every channel
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[9.5px] font-bold" style={{ color: "#22C55E" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#22C55E", boxShadow: "0 0 6px #22C55E", animation: "subtlePulse 1.6s ease-in-out infinite" }}
          />
          posting now
        </span>
      </div>

      {/* 3x3 platform grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 flex-1">
        {platforms.map((p, i) => {
          const PIcon = p.Icon
          return (
            <div
              key={p.name}
              className="relative rounded-[14px] flex flex-col items-center justify-center gap-1 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                background: p.brand,
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 14px rgba(11,19,43,0.18)`,
                animation: `fadeInUp 0.55s ease-out ${0.04 + i * 0.04}s both`,
              }}
            >
              <PIcon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: p.fg }} strokeWidth={1.9} />
              <span
                className="text-[9px] font-bold tracking-tight leading-none"
                style={{ color: p.fg, opacity: 0.92 }}
              >
                {p.name}
              </span>

              {/* Engagement pulse on the boosted tile */}
              {p.boost && (
                <span
                  aria-hidden
                  className="absolute top-1.5 right-1.5 inline-flex items-center gap-0.5 text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: "#0B132B",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                    animation: "subtlePulse 2s ease-in-out infinite",
                  }}
                >
                  <TrendingUp className="w-2 h-2" strokeWidth={3} />
                  +340%
                </span>
              )}

              {/* Subtle highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 -left-2 w-10 h-10 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.20) 0%, transparent 70%)" }}
              />
            </div>
          )
        })}
      </div>

      {/* Footer label */}
      <div
        className="mt-3 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: `${accent}10`,
          border: `1px solid ${accent}26`,
        }}
      >
        <Heart className="w-3 h-3" style={{ color: accent }} fill="currentColor" />
        <span className="text-[10.5px] font-bold tracking-tight" style={{ color: accent }}>
          9 platforms · 1 in-house team
        </span>
      </div>
    </div>
  )
}

function AdMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full px-4 py-4 flex flex-col justify-center gap-2.5">
      {/* Sponsored card */}
      <div
        className="rounded-md p-3 flex flex-col gap-1.5"
        style={{
          background: "#fff",
          border: "1px solid #DCE6F2",
          boxShadow: "0 1px 3px rgba(17,35,68,0.06)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-[2px] rounded text-white"
            style={{ background: accent }}
          >
            Ad
          </span>
          <span className="text-[9.5px]" style={{ color: "#22C55E" }}>example.com/services</span>
          <span className="ml-auto text-[8.5px] font-semibold" style={{ color: accent }}>★ Featured</span>
        </div>
        <div className="text-[12.5px] font-bold leading-tight" style={{ color: "#1677FF" }}>
          Get 50% Off Your First Service Call
        </div>
        <div className="text-[10px] leading-snug" style={{ color: "#5B6B84" }}>
          Same-day appointments. Licensed &amp; insured. Book online in 60 seconds.
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
            style={{ background: `linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)` }}
          >
            Book Now →
          </span>
          <span className="text-[9px]" style={{ color: "#5B6B84" }}>★★★★★ 4.9 (412)</span>
        </div>
      </div>

      {/* Performance dashboard */}
      <div
        className="rounded-md p-2.5 space-y-2"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #FFFBEB 100%)",
          border: `1px solid ${accent}33`,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] font-bold uppercase tracking-wider" style={{ color: accent }}>
            ⚡ This week
          </span>
          <span className="inline-flex items-center gap-1 text-[8.5px] font-bold" style={{ color: "#22C55E" }}>
            <TrendingUp className="w-2.5 h-2.5" strokeWidth={2.5} />
            +28%
          </span>
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-9">
          {[40, 55, 35, 70, 65, 88, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 6 ? accent : `${accent}55`,
              }}
            />
          ))}
        </div>

        {/* Metric strip */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "ROAS",  value: "8.2x", color: "#22C55E" },
            { label: "CPL",   value: "$11",  color: accent },
            { label: "Conv.", value: "14%",  color: "#1677FF" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded p-1.5 text-center"
              style={{ background: `${m.color}10`, border: `1px solid ${m.color}33` }}
            >
              <div className="text-[11px] font-bold leading-none" style={{ color: m.color }}>{m.value}</div>
              <div className="text-[8px] font-bold uppercase tracking-wider mt-0.5" style={{ color: "#5B6B84" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────── Data ─────────────── */

const categories: Category[] = [
  {
    id: "seo",
    Icon: Search,
    accent: "#22C55E",
    accentRgb: "34,197,94",
    label: "SEO",
    tagline: "Rank in the Map Pack, organic results, and AI Overviews — across every Google surface.",
    pill: "7 services",
    signatureMetric: { value: "+340%", label: "avg. organic traffic in 6 mo" },
    floatingBadges: [
      { Icon: TrendingUp, text: "Map Pack #1", position: "tr" },
      { Icon: Sparkles,   text: "AI Overview", position: "bl" },
    ],
    bullets: [
      "Local SEO + Google Business Profile",
      "Technical, on-page, and backlinks",
      "AI search visibility (ChatGPT, Perplexity)",
      "Press releases and authority building",
    ],
    href: "/services/seo",
    Mockup: () => <SerpMockup accent="#22C55E" />,
  },
  {
    id: "web-design",
    Icon: Palette,
    accent: "#1677FF",
    accentRgb: "22,119,255",
    label: "Web Design",
    tagline: "Custom-coded, Webflow, WordPress, Squarespace, GoDaddy, or Wix — you pick the platform.",
    pill: "7 platforms",
    signatureMetric: { value: "98", label: "avg. PageSpeed score" },
    floatingBadges: [
      { Icon: Zap,    text: "98 PageSpeed", position: "tr" },
      { Icon: Star,   text: "Built in 14d", position: "bl" },
    ],
    bullets: [
      "Custom-coded for speed and SEO",
      "Webflow, WordPress, Squarespace, Wix",
      "Conversion-focused with booking widgets",
      "Mobile-first, accessibility-tuned",
    ],
    href: "/services/web-design",
    Mockup: () => <WebsiteMockup accent="#1677FF" />,
  },
  {
    id: "social-media",
    Icon: Share2,
    accent: "#EC4899",
    accentRgb: "236,72,153",
    label: "Social Media",
    tagline: "Daily posting, review generation, video production, and channel-specific growth playbooks.",
    pill: "7 services",
    signatureMetric: { value: "+2.4k", label: "avg. monthly engagement" },
    floatingBadges: [
      { Icon: Heart,      text: "+2.4k likes",  position: "tr" },
      { Icon: TrendingUp, text: "+340% reach",  position: "bl" },
    ],
    bullets: [
      "Full-service management on every platform",
      "Review generation + reputation",
      "Graphic design and video editing",
      "TikTok, YouTube, drone videography",
    ],
    href: "/services/social-media",
    Mockup: () => <SocialMockup accent="#EC4899" />,
  },
  {
    id: "paid-ads",
    Icon: BarChart3,
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    label: "Paid Ads",
    tagline: "Google, Facebook, and Instagram campaigns built for booked-call ROI — not vanity clicks.",
    pill: "3 channels",
    signatureMetric: { value: "8.2x", label: "avg. return on ad spend" },
    floatingBadges: [
      { Icon: TrendingUp, text: "8.2x ROAS",  position: "tr" },
      { Icon: Eye,        text: "$11 CPL",    position: "bl" },
    ],
    bullets: [
      "Google Search, Display, and PMax",
      "Facebook lead-gen and remarketing",
      "Instagram visual creative production",
      "Conversion tracking and call attribution",
    ],
    href: "/services/paid-ads",
    Mockup: () => <AdMockup accent="#F59E0B" />,
  },
]

/* ─────────────── Component ─────────────── */

export function ServicesFeatured() {
  return (
    <section id="services-featured" aria-labelledby="services-featured-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Four marketing pillars"
          heading={
            <>
              Pick a pillar.{" "}
              <span className="whitespace-nowrap">
                We&rsquo;ve <span className="accent-underline">built it in</span>.
              </span>
            </>
          }
          paragraph={"Every service in every pillar is delivered by our in-house team — no white-label, no offshoring, no contractor patchwork. Tap a card to see the full playbook."}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.id} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ cat, idx }: { cat: Category; idx: number }) {
  const { Icon, accent, accentRgb, label, tagline, pill, signatureMetric, floatingBadges, bullets, href, Mockup } = cat

  const badgePositionClass = {
    tl: "top-3 left-3",
    tr: "top-3 right-3",
    bl: "bottom-3 left-3",
    br: "bottom-3 right-3",
  }

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px rgba(17,35,68,0.04), 0 12px 32px -16px rgba(17,35,68,0.10)",
        animation: `fadeInUp 0.7s ease-out ${0.08 + idx * 0.08}s both`,
      }}
    >
      {/* Top accent ribbon */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[5px] z-20"
        style={{
          background: `linear-gradient(90deg, ${accent} 0%, ${accent}88 50%, ${accent} 100%)`,
        }}
      />

      {/* MOCKUP REGION (full card width) */}
      <div
        className="relative h-[340px] sm:h-[380px] overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 70% 100% at 100% 0%, ${accent}1A 0%, transparent 60%),
            radial-gradient(ellipse 70% 100% at 0% 100%, ${accent}10 0%, transparent 60%),
            linear-gradient(135deg, ${accent}0A 0%, #FFFFFF 50%, ${accent}06 100%)
          `,
          borderBottom: `1px solid ${accent}1F`,
        }}
      >
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${accent}10 1px, transparent 1px), linear-gradient(90deg, ${accent}10 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 100%)",
          }}
        />

        {/* The mockup */}
        <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
          <Mockup />
        </div>

        {/* Floating stat badges */}
        {floatingBadges.map((b, i) => {
          const BIcon = b.Icon
          return (
            <div
              key={i}
              className={`absolute z-30 ${badgePositionClass[b.position]} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-bold transition-transform duration-500 group-hover:scale-105`}
              style={{
                background: "rgba(255,255,255,0.96)",
                color: accent,
                border: `1px solid ${accent}33`,
                boxShadow: `0 2px 4px rgba(17,35,68,0.06), 0 8px 24px ${accent}26, inset 0 1px 0 rgba(255,255,255,0.8)`,
                backdropFilter: "blur(8px)",
                animation: `subtlePulse 3s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <BIcon className="w-3 h-3" strokeWidth={2.6} />
              {b.text}
            </div>
          )
        })}
      </div>

      {/* CONTENT REGION */}
      <div className="relative flex flex-col flex-1 p-6 sm:p-7">
        {/* Category icon + pill */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="w-12 h-12 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
            style={{
              background: `${accent}14`,
              boxShadow: `inset 0 0 0 1px ${accent}22, inset 0 1px 0 rgba(255,255,255,0.7)`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={2.1} />
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
            style={{ background: `${accent}14`, color: accent }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
            {pill}
          </span>
        </div>

        {/* Title + tagline */}
        <h3
          className="mt-4 text-[26px] sm:text-[30px] font-bold leading-[1.1] tracking-[-0.018em]"
          style={{ color: "var(--ink)" }}
        >
          {label}
        </h3>
        <p className="mt-2 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {tagline}
        </p>

        {/* Signature metric callout */}
        <div
          className="mt-5 flex items-center gap-3 rounded-[var(--radius-sm)] p-3"
          style={{
            background: `linear-gradient(90deg, ${accent}10 0%, ${accent}03 100%)`,
            border: `1px solid ${accent}22`,
          }}
        >
          <div
            className="text-[28px] sm:text-[32px] font-bold leading-none tabular-nums tracking-[-0.025em]"
            style={{ color: accent }}
          >
            {signatureMetric.value}
          </div>
          <div className="text-[11.5px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
            {signatureMetric.label}
          </div>
        </div>

        {/* Bullets — 2x2 grid */}
        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 flex-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px] leading-snug" style={{ color: "var(--ink)" }}>
              <span
                className="mt-[2px] w-[15px] h-[15px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${accent}1A`, color: accent }}
              >
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="mt-6 pt-5 flex items-center justify-between border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[14.5px] font-bold"
            style={{ color: accent }}
          >
            Explore the {label.toLowerCase()} playbook
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </span>
          <span
            className="text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-full"
            style={{
              background: "var(--bg)",
              color: "var(--muted)",
              border: "1px solid var(--border-color)",
            }}
          >
            {href}
          </span>
        </div>
      </div>
    </Link>
  )
}
