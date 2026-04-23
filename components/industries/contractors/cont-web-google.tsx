import Link from "next/link"
import { Globe, Search, Check, ArrowRight, Megaphone, Star, Bot } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const webBullets = [
  "Service-area schema on every trade landing page",
  "Click-to-call + instant-quote form in the sticky header",
  "Before/after galleries that load fast (lazy + WebP)",
  "Financing widgets, Google reviews, trust badges native",
]

const googleBullets = [
  "Google Business Profile weekly optimization + review velocity",
  "Local SEO with neighborhood-level landing pages",
  "Google Ads: service-area + call-only + Performance Max",
  "Schema + citations + map embeds \u2014 the full \u2018near me\u2019 stack",
]

const webSubs = [
  { label: "Webflow", href: "/services/web-design/webflow" },
  { label: "WordPress", href: "/services/web-design/wordpress" },
  { label: "Custom coded", href: "/services/web-design/custom-coded" },
]

const googleSubs = [
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "AI search", href: "/services/seo/ai-search" },
  { label: "Google Ads", href: "/services/paid-ads/google-ads" },
]

type Support = {
  key: string
  Icon: LucideIcon
  pill: string
  title: string
  accent: string
  bullets: string[]
  hub: { label: string; href: string }
  subs: { label: string; href: string }[]
}

const supports: Support[] = [
  {
    key: "meta",
    Icon: Megaphone,
    pill: "Meta + Instagram ads",
    title: "Retarget the radar + the neighborhood",
    accent: "#EF4444",
    bullets: [
      "Storm-trigger retargeting within hours of the forecast",
      "Neighborhood lookalikes from recent-job addresses",
      "Before/after reel creative, shot on the jobsite",
    ],
    hub: { label: "Explore paid ads", href: "/services/paid-ads" },
    subs: [
      { label: "Facebook ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram", href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    key: "reviews",
    Icon: Star,
    pill: "Review generation",
    title: "Every finished job, a new five-star",
    accent: "#FBBF24",
    bullets: [
      "Post-job SMS review request with direct Google link",
      "Negative-review deflection to the owner before public post",
      "Monthly photo + Q&A refresh on Google Business Profile",
    ],
    hub: { label: "Explore social", href: "/services/social-media" },
    subs: [
      { label: "Review gen", href: "/services/social-media/review-generation" },
      { label: "Video editing", href: "/services/social-media/video-editing" },
    ],
  },
  {
    key: "ai",
    Icon: Bot,
    pill: "CRM + AI agents",
    title: "Answer every call, triage every lead",
    accent: "#475569",
    bullets: [
      "After-hours AI call answering so you book the 2am call",
      "Quote-request triage by trade, urgency, and service area",
      "Auto-scheduling into dispatch with SMS confirmation",
    ],
    hub: { label: "Explore solutions", href: "/solutions/ai-agents" },
    subs: [
      { label: "Lead gen", href: "/solutions/lead-generation" },
      { label: "Calendar", href: "/solutions/calendar" },
    ],
  },
]

export function ContWebGoogle() {
  return (
    <section
      id="cont-web-google"
      aria-labelledby="cont-web-google-heading"
      className="relative scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The Two Big Levers"
          heading={
            <span id="cont-web-google-heading">
              Your website and your Google listing{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">earn the job</span>.
              </span>
            </span>
          }
          paragraph={"Every contractor lead starts with a Google search and ends on your website. We build both so the homeowner pressing \u2018call\u2019 is already sold."}
        />

        {/* Dual flagship cards */}
        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left flagship — WEBSITES */}
          <article
            className="card-surface card-surface-hover relative overflow-hidden p-7 sm:p-9 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(239,68,68,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(239,68,68,0.14)", color: "#EF4444" }}
              >
                <Globe className="w-3 h-3" strokeWidth={2.5} />
                Flagship &middot; Websites
              </span>
            </div>

            <h3 className="relative mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              Lead-capture websites that{" "}
              <span className="whitespace-nowrap">do the selling</span>.
            </h3>

            <p className="relative mt-3.5 text-[14.5px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              Mobile-first, sub-1.8s load, structured service-area schema so Google serves your exact neighborhoods. Click-to-call, instant-quote form, before/after galleries, financing widgets, and review-score hero wired on day one.
            </p>

            {/* Mini mockup: roofer landing page */}
            <div className="relative mt-5">
              <div
                className="rounded-[var(--radius-sm)] overflow-hidden"
                style={{ background: "#fff", border: "1px solid var(--border-color)", boxShadow: "0 6px 18px rgba(11,19,43,0.06)" }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5"
                  style={{ background: "#F1F5F9", borderBottom: "1px solid var(--border-color)" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FB7185" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FBBF24" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#86EFAC" }} />
                  <span className="ml-2 text-[10px] tabular-nums" style={{ color: "#94A3B8" }}>
                    summitroofing.com
                  </span>
                </div>
                {/* Hero strip */}
                <div className="px-3 py-3 flex items-center gap-2.5" style={{ background: "linear-gradient(135deg, #EF4444 0%, #FF6B35 100%)" }}>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Free roof inspection in 24 hrs</div>
                    <div className="text-[9px] text-white/80 mt-0.5">4.9 &#9733; (312) &middot; Licensed &middot; Insured</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded" style={{ background: "#fff", color: "#EF4444" }}>
                    Call now
                  </span>
                </div>
                {/* Review band */}
                <div className="px-3 py-2 flex items-center gap-2" style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <span className="text-[10px] font-bold" style={{ color: "#FBBF24" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="text-[10px] font-semibold" style={{ color: "var(--ink)" }}>4.9 of 312 reviews</span>
                  <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded" style={{ background: "rgba(251,191,36,0.14)", color: "#B45309" }}>
                    Financing
                  </span>
                </div>
                {/* Gallery row */}
                <div className="p-2 grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded"
                      style={{
                        background: `linear-gradient(135deg, ${["#EF4444", "#FF6B35", "#475569"][i]}33 0%, ${["#EF4444", "#FF6B35", "#475569"][i]}11 100%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <ul className="relative mt-5 space-y-2">
              {webBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                  <span
                    className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(239,68,68,0.15)" }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: "#EF4444" }} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {webSubs.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                >
                  {s.label}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              ))}
            </div>

            <Link
              href="/services/web-design"
              className="group mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold self-start"
              style={{ color: "#EF4444" }}
            >
              Explore web design
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </article>

          {/* Right flagship — GOOGLE */}
          <article
            className="card-surface card-surface-hover relative overflow-hidden p-7 sm:p-9 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(255,107,53,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,107,53,0.14)", color: "#FF6B35" }}
              >
                <Search className="w-3 h-3" strokeWidth={2.5} />
                Flagship &middot; Google
              </span>
            </div>

            <h3 className="relative mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              Own all three{" "}
              <span className="whitespace-nowrap">Google slots</span>.
            </h3>

            <p className="relative mt-3.5 text-[14.5px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              Google Ads at the top, the local map pack in the middle, and the #1 organic listing below. We chase all three so a homeowner who types &lsquo;roofer near me&rsquo; sees your name three times before scrolling.
            </p>

            {/* Mini mockup: stylized SERP with 3 slots */}
            <div className="relative mt-5">
              <div
                className="rounded-[var(--radius-sm)] overflow-hidden p-3"
                style={{ background: "#fff", border: "1px solid var(--border-color)", boxShadow: "0 6px 18px rgba(11,19,43,0.06)" }}
              >
                {/* Slot 1: Ad */}
                <div
                  className="p-2 rounded-[6px]"
                  style={{ background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.35)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8.5px] font-bold px-1 rounded" style={{ background: "#FBBF24", color: "#0F172A" }}>AD</span>
                    <span className="text-[10px] font-semibold" style={{ color: "#1a0dab" }}>Summit Roofing &mdash; Your site</span>
                  </div>
                  <div className="mt-0.5 text-[9px]" style={{ color: "#475569" }}>
                    24/7 response &middot; Free estimates
                  </div>
                </div>
                {/* Slot 2: Map pack */}
                <div
                  className="mt-1.5 p-2 rounded-[6px] flex items-center gap-1.5"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.35)" }}
                >
                  <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "#E5E9F2" }}>
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                      <rect width="32" height="32" fill="#E5E9F2" />
                      <circle cx="16" cy="16" r="2.5" fill="#EF4444" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold" style={{ color: "#0F172A" }}>Summit Roofing Co.</div>
                    <div className="text-[9px]" style={{ color: "#475569" }}>4.9 &#9733; &middot; 0.8 mi</div>
                  </div>
                </div>
                {/* Slot 3: Organic */}
                <div
                  className="mt-1.5 p-2 rounded-[6px]"
                  style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.4)" }}
                >
                  <div className="text-[9px]" style={{ color: "#15803D" }}>summitroofing.com</div>
                  <div className="text-[10px] font-semibold" style={{ color: "#1a0dab" }}>Summit Roofing | Near You</div>
                </div>
              </div>
            </div>

            <ul className="relative mt-5 space-y-2">
              {googleBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                  <span
                    className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,107,53,0.15)" }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: "#FF6B35" }} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {googleSubs.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                >
                  {s.label}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              ))}
            </div>

            <Link
              href="/services/seo"
              className="group mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold self-start"
              style={{ color: "#FF6B35" }}
            >
              Explore SEO
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </article>
        </div>

        {/* 3 support cards */}
        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {supports.map((s) => (
            <article
              key={s.key}
              className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse 70% 50% at 12% 12%, ${s.accent}1A 0%, transparent 65%)` }}
              />

              <div className="relative flex items-start justify-between">
                <div
                  className="shrink-0 w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}33` }}
                >
                  <s.Icon className="w-6 h-6" style={{ color: s.accent }} strokeWidth={2.2} />
                </div>
                <span
                  className="inline-flex text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: `${s.accent}14`, color: s.accent }}
                >
                  {s.pill}
                </span>
              </div>

              <h3 className="relative mt-4 text-[17px] font-bold leading-[1.25] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                {s.title}
              </h3>

              <ul className="relative mt-3 space-y-1.5 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px]" style={{ color: "var(--muted)" }}>
                    <span
                      className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: `${s.accent}1F` }}
                    >
                      <Check className="w-2.5 h-2.5" style={{ color: s.accent }} strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {s.subs.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors"
                    style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>

              <Link
                href={s.hub.href}
                className="group relative mt-4 inline-flex items-center gap-1 text-[13px] font-semibold self-start"
                style={{ color: s.accent }}
              >
                {s.hub.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
