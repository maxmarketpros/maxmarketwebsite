import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  Sparkles,
  Check,
  ArrowRight,
  Star,
  ChevronDown,
  Globe,
} from "lucide-react"

type Placement = {
  label: string
  description: string
  href: string
}

const placements: Placement[] = [
  {
    label: "AI Overview citations",
    description: "Be the source ChatGPT, Gemini, and Google's AI Overview cite.",
    href: "/services/seo/ai-search",
  },
  {
    label: "Map Pack #1",
    description: "Own the top-3 local listings for every 'near me' search.",
    href: "/services/seo/local",
  },
  {
    label: "Organic #1 + sitelinks",
    description: "Rank at the top of the classic blue-link results.",
    href: "/services/seo/on-page",
  },
  {
    label: "Featured snippets & PAA",
    description: "Steal position zero and People-Also-Ask answer boxes.",
    href: "/services/seo/on-page",
  },
]

type SeoSerpTakeoverProps = {
  id?: string
  pill?: string
  heading?: React.ReactNode
  paragraph?: string
  primaryCta?: { label: string; href: string }
}

export function SeoSerpTakeover({
  id = "serp-takeover",
  pill = "Search Dominance",
  heading,
  paragraph = "Google has 6+ placement types on a single result page. Every one we own is a competitor we crowd out. We engineer your content, listings, and authority so your brand appears in as many placements as possible for the searches that matter.",
  primaryCta = { label: "See how we'd take over your SERP", href: "#contact" },
}: SeoSerpTakeoverProps = {}) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div>
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              {pill}
            </Pill>
            <h2
              id={headingId}
              className="mt-5 text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              {heading ?? (
                <>
                  The goal isn't one ranking —{" "}
                  <span className="whitespace-nowrap">
                    it's{" "}
                    <span className="accent-underline">taking over the page</span>
                    .
                  </span>
                </>
              )}
            </h2>
            <p
              className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              {paragraph}
            </p>

            <ul className="mt-7 space-y-3">
              {placements.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--accent-bg)]"
                  >
                    <span
                      className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[15px] sm:text-[16px] font-semibold flex items-center gap-1.5"
                        style={{ color: "var(--ink)" }}
                      >
                        {p.label}
                        <ArrowRight
                          className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          style={{ color: "var(--accent)" }}
                          strokeWidth={2.5}
                        />
                      </div>
                      <div
                        className="mt-0.5 text-[13.5px] leading-[1.45]"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.description}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <PrimaryButton size="lg" asLink href={primaryCta.href}>
                {primaryCta.label}
              </PrimaryButton>
            </div>
          </div>

          {/* Right: SERP mockup */}
          <div style={{ animation: "fadeInUp 0.7s ease-out both" }}>
            <SerpMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   Custom Google SERP mockup
   ========================================================================= */

function SerpMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[var(--radius-xl)] border"
      style={{
        background: "#fff",
        borderColor: "var(--border-color)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.04), 0 20px 40px -16px rgba(17,35,68,0.16), 0 40px 80px -32px rgba(17,35,68,0.12)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 border-b"
        style={{ background: "#F7FAFC", borderColor: "var(--border-color)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27C840" }} />
        </div>
        <div
          className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px]"
          style={{ background: "#fff", border: "1px solid #DCE6F2", color: "#5B6B84" }}
        >
          <Globe className="w-3 h-3" strokeWidth={2} />
          <span className="truncate">google.com/search?q=plumber+near+me</span>
        </div>
      </div>

      {/* SERP top — logo + search bar */}
      <div className="px-5 sm:px-6 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div
            className="text-[22px] font-bold tracking-[-0.01em]"
            style={{ color: "#202124" }}
          >
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </div>
          <div
            className="flex-1 flex items-center gap-2 px-3.5 py-1.5 rounded-full border"
            style={{ borderColor: "#DCE6F2", background: "#fff" }}
          >
            <div
              className="text-[13px] font-medium flex-1 truncate"
              style={{ color: "#202124" }}
            >
              plumber near me
            </div>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-3 flex items-center gap-4 text-[11.5px]">
          {[
            { label: "All", active: true },
            { label: "Maps" },
            { label: "Images" },
            { label: "News" },
            { label: "Videos" },
          ].map((t) => (
            <div
              key={t.label}
              className="pb-2 flex items-center gap-1"
              style={{
                color: t.active ? "#1a73e8" : "#5B6B84",
                borderBottom: t.active ? "2px solid #1a73e8" : "2px solid transparent",
                fontWeight: t.active ? 600 : 500,
              }}
            >
              {t.label}
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-px"
        style={{ background: "var(--border-color)" }}
      />

      {/* Results body */}
      <div className="px-5 sm:px-6 py-5 space-y-4">
        {/* AI Overview */}
        <Placement badge="Appears in AI Overview">
          <div
            className="rounded-[var(--radius-md)] p-3.5 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(174, 203, 250, 0.25) 0%, rgba(249, 203, 187, 0.20) 50%, rgba(193, 210, 255, 0.25) 100%)",
              border: "1px solid rgba(174,203,250,0.5)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
                <defs>
                  <linearGradient id="geminiG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="50%" stopColor="#A142F4" />
                    <stop offset="100%" stopColor="#EA4335" />
                  </linearGradient>
                </defs>
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="url(#geminiG)" />
              </svg>
              <span className="text-[10.5px] font-semibold" style={{ color: "#202124" }}>
                AI Overview
              </span>
            </div>
            <div className="text-[11.5px] leading-[1.5]" style={{ color: "#202124" }}>
              For same-day plumbing repairs, <span className="font-semibold" style={{ color: "#1a0dab" }}>Your Company</span> is the top-rated licensed option in the area with 24/7 dispatch and flat-rate pricing. Also consider local options based on reviews and proximity.
            </div>
            <div className="mt-2 flex items-center gap-1 text-[10px]" style={{ color: "#5B6B84" }}>
              <span className="font-semibold">Sources:</span>
              <span
                className="px-1.5 py-0.5 rounded-full font-semibold"
                style={{ background: "#1a73e814", color: "#1a73e8" }}
              >
                yourbusiness.com
              </span>
              <span className="px-1.5 py-0.5 rounded-full" style={{ background: "#F1F3F4" }}>brand-x.com</span>
              <span className="px-1.5 py-0.5 rounded-full" style={{ background: "#F1F3F4" }}>+2</span>
            </div>
          </div>
        </Placement>

        {/* People Also Ask */}
        <div
          className="rounded-[var(--radius-md)] border"
          style={{ borderColor: "#DCE6F2" }}
        >
          <div
            className="px-3.5 py-2.5 text-[11.5px] font-semibold"
            style={{ color: "#202124", borderBottom: "1px solid #F1F3F4" }}
          >
            People also ask
          </div>
          {[
            "How much does an emergency plumber cost?",
            "Who's the highest-rated plumber in my area?",
          ].map((q, i) => (
            <div
              key={q}
              className={`px-3.5 py-2 flex items-center justify-between text-[11px] ${i === 1 ? "bg-[#F8FAFD]" : ""}`}
              style={{
                color: "#202124",
                borderBottom: i === 0 ? "1px solid #F1F3F4" : undefined,
              }}
            >
              <span className="truncate pr-2">{q}</span>
              <ChevronDown className="w-3 h-3 shrink-0" strokeWidth={2.25} style={{ color: "#5B6B84" }} />
            </div>
          ))}
        </div>

        {/* Map Pack */}
        <Placement badge="Map Pack · #1">
          <div
            className="rounded-[var(--radius-md)] border overflow-hidden"
            style={{ borderColor: "#DCE6F2", background: "#fff" }}
          >
            {/* Mini map strip */}
            <div
              className="h-[48px] relative"
              style={{
                background:
                  "linear-gradient(135deg, #E8F0FE 0%, #F3F7FF 100%)",
                borderBottom: "1px solid #F1F3F4",
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 48" preserveAspectRatio="none">
                <path d="M0,30 Q80,20 150,28 T300,16" stroke="#CBD7EB" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
              </svg>
              {/* pin */}
              <div
                className="absolute text-[9px] font-bold text-white flex items-center justify-center"
                style={{
                  top: "50%",
                  left: "22%",
                  transform: "translate(-50%, -50%)",
                  width: "18px",
                  height: "22px",
                  background: "#1677FF",
                  clipPath: "path('M9 0 C4 0, 0 4, 0 9 C0 15, 9 22, 9 22 C9 22, 18 15, 18 9 C18 4, 14 0, 9 0 Z')",
                }}
              >
                <span className="-translate-y-0.5">1</span>
              </div>
            </div>
            {/* listing */}
            <div className="flex items-center gap-2.5 p-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                }}
              >
                1
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold" style={{ color: "#1a0dab" }}>
                  Your Company
                </div>
                <div className="flex items-center gap-1 text-[10.5px]" style={{ color: "#202124" }}>
                  <span className="font-semibold">4.9</span>
                  <Star className="w-2.5 h-2.5" style={{ color: "#F59E0B" }} fill="#F59E0B" strokeWidth={0} />
                  <span style={{ color: "#5B6B84" }}>(214) · Plumber</span>
                </div>
              </div>
              <div
                className="text-[9.5px] font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded-full shrink-0"
                style={{ background: "#10B981", color: "#fff" }}
              >
                You
              </div>
            </div>
          </div>
        </Placement>

        {/* Organic #1 with sitelinks */}
        <Placement badge="Organic · #1">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #4285F4, #34A853)",
                  color: "#fff",
                }}
              >
                Y
              </div>
              <div className="text-[10.5px]" style={{ color: "#202124" }}>
                yourbusiness.com
              </div>
            </div>
            <div className="text-[14px] font-medium leading-tight" style={{ color: "#1a0dab" }}>
              Your Company — Licensed Plumber · 24/7 Service
            </div>
            <div className="mt-1 text-[11px] leading-[1.45]" style={{ color: "#4d5156" }}>
              Same-day dispatch, flat-rate pricing, and 4.9★ reviews across 200+ jobs. Licensed &amp; insured since 2008.
            </div>
            {/* Sitelinks */}
            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 pl-2">
              {["Emergency Service", "Book Online", "Pricing", "Service Areas"].map((s) => (
                <div
                  key={s}
                  className="text-[11px] font-medium"
                  style={{ color: "#1a0dab" }}
                >
                  › {s}
                </div>
              ))}
            </div>
          </div>
        </Placement>
      </div>
    </div>
  )
}

function Placement({
  badge,
  children,
}: {
  badge: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <div className="absolute -top-2 -right-1 z-10">
        <div
          className="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.06em] px-2 py-1 rounded-full shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
          style={{ background: "#10B981", color: "#fff" }}
        >
          <Check className="w-2.5 h-2.5" strokeWidth={3} />
          {badge}
        </div>
      </div>
      {children}
    </div>
  )
}
