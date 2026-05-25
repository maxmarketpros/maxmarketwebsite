import Link from "next/link"
import { Check, ArrowRight, ShoppingBag, Smartphone, Receipt } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Support = {
  key: string
  iconId: string
  pill: string
  title: string
  accent: string
  bullets: string[]
  hub: { label: string; href: string }
  subs: { label: string; href: string }[]
}

const supports: Support[] = [
  {
    key: "seo",
    iconId: "19326",
    pill: "SEO & GBP",
    title: "Local SEO & Google Business",
    accent: "#F97316",
    bullets: [
      "GBP photo refresh, menu upload, Q&A seeding",
      "AI-search optimization for &lsquo;near me + cuisine&rsquo;",
      "Review-velocity targeting tied to ranking signals",
    ],
    hub: { label: "Explore SEO", href: "/services/seo" },
    subs: [
      { label: "Local SEO", href: "/services/seo/local" },
      { label: "AI search", href: "/services/seo/ai-search" },
    ],
  },
  {
    key: "ads",
    iconId: "13757",
    pill: "Paid ads",
    title: "Paid Ads \u2014 Google + Meta",
    accent: "#DC2626",
    bullets: [
      "Daypart bid-shaping for lunch and happy-hour windows",
      "Geo-fence up to 1 mile around the dining room",
      "Menu-promoting carousels and LTO countdowns",
    ],
    hub: { label: "Explore paid ads", href: "/services/paid-ads" },
    subs: [
      { label: "Google ads", href: "/services/paid-ads/google-ads" },
      { label: "Facebook ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram", href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    key: "social",
    iconId: "114331",
    pill: "Social & UGC",
    title: "Social & UGC Reels",
    accent: "#EC4899",
    bullets: [
      "Chef / kitchen Reels edited weekly",
      "Creator seeding to local food-influencers",
      "Story-driven menu drops and live launches",
    ],
    hub: { label: "Explore social", href: "/services/social-media" },
    subs: [
      { label: "Management", href: "/services/social-media/management" },
      { label: "Video editing", href: "/services/social-media/video-editing" },
    ],
  },
]

const webBullets = [
  "Menu schema that shows up in Google food pack + maps",
  "First-party online ordering \u2014 keep the 30% delivery apps take",
  "POS-agnostic: Toast, Square, Clover, Revel, Lightspeed",
  "Reservations + waitlist + gift-card flows on one codebase",
]

const webSubs = [
  { label: "Webflow", href: "/services/web-design/webflow" },
  { label: "WordPress", href: "/services/web-design/wordpress" },
  { label: "Custom coded", href: "/services/web-design/custom-coded" },
]

export function RestServices() {
  return (
    <section id="rest-services" aria-labelledby="rest-services-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Services for Restaurants"
          heading={
            <span id="rest-services-heading">
              The full stack &mdash;{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">website first</span>.
              </span>
            </span>
          }
          paragraph="We build the site, we run the ads, we ship the Reels. Everything above the POS, handled."
        />

        {/* Featured web-design card */}
        <article
          className="mt-12 sm:mt-14 card-surface card-surface-hover relative overflow-hidden p-6 sm:p-9 lg:p-12"
          style={{ borderRadius: "var(--radius-xl)", animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(249,115,22,0.14) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(220,38,38,0.10) 0%, transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(249,115,22,0.14)", color: "#F97316" }}
              >
                Flagship
              </span>

              <h3 className="mt-4 text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                Restaurant websites that{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">take the order</span>.
                </span>
              </h3>

              <p className="mt-4 text-[15.5px] sm:text-[17px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                A real site &mdash; mobile-first, under 1.8s load, menu in structured data so Google serves dish-level results. First-party online ordering wired to Toast, Square, Clover, or your POS of choice. Delivery-app deep links that track attribution back to the source.
              </p>

              <ul className="mt-5 space-y-2.5">
                {webBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: "var(--ink)" }}>
                    <span
                      className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(249,115,22,0.15)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#F97316" }} strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
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
                className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                style={{ color: "#F97316" }}
              >
                Explore web design
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Visual: 3 stacked ordering-flow tiles */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-[var(--radius-lg)]"
                style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(249,115,22,0.15) 0%, transparent 70%)" }}
              />
              <div className="relative flex flex-col gap-3.5">
                {/* Tile 1: Menu */}
                <div
                  className="rounded-[var(--radius-sm)] p-4 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.92)", border: "1px solid var(--border-color)", boxShadow: "0 4px 14px rgba(11,19,43,0.08)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                    style={{ background: "rgba(249,115,22,0.14)" }}
                  >
                    <Smartphone className="w-5 h-5" style={{ color: "#F97316" }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      Menu
                    </div>
                    <div className="text-[13.5px] font-semibold truncate" style={{ color: "var(--ink)" }}>
                      Hot honey chicken bowl
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: "#F97316", color: "#fff" }}
                  >
                    + Add
                  </span>
                </div>

                {/* Tile 2: Cart */}
                <div
                  className="rounded-[var(--radius-sm)] p-4 ml-6 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.92)", border: "1px solid var(--border-color)", boxShadow: "0 4px 14px rgba(11,19,43,0.08)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                    style={{ background: "rgba(220,38,38,0.14)" }}
                  >
                    <ShoppingBag className="w-5 h-5" style={{ color: "#DC2626" }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      Cart &middot; pickup 12:58
                    </div>
                    <div className="text-[13.5px] font-semibold truncate" style={{ color: "var(--ink)" }}>
                      3 items &middot; $14.20
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: "#DC2626", color: "#fff" }}
                  >
                    Checkout
                  </span>
                </div>

                {/* Tile 3: Confirmed */}
                <div
                  className="rounded-[var(--radius-sm)] p-4 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.92)", border: "1px solid var(--border-color)", boxShadow: "0 4px 14px rgba(11,19,43,0.08)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.14)" }}
                  >
                    <Receipt className="w-5 h-5" style={{ color: "#15803D" }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      Confirmed
                    </div>
                    <div className="text-[13.5px] font-semibold truncate" style={{ color: "var(--ink)" }}>
                      Ready in ~11 min
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: "rgba(34,197,94,0.14)", color: "#15803D" }}
                  >
                    #A-0412
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Support services: 3 cards */}
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
                  className="shrink-0 w-14 h-14 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}33` }}
                >
                  <img
                    src={icons8Url(s.iconId, 128)}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    loading="lazy"
                  />
                </div>
                <span
                  className="inline-flex text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: `${s.accent}14`, color: s.accent }}
                >
                  {s.pill}
                </span>
              </div>

              <h3 className="relative mt-4 text-[18px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
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
                    <span dangerouslySetInnerHTML={{ __html: b }} />
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

        <p
          className="mt-10 text-center text-[14.5px] leading-[1.6] max-w-[640px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Further reading:{" "}
          <Link
            href="/resources/blog/restaurant-seo-irvine-uci-spectrum"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            the hyperlocal restaurant SEO playbook for UCI, the Spectrum, and Diamond Jamboree
          </Link>{" "}
          covers cluster-specific tactics and the AI Overview citation play.
        </p>
      </div>
    </section>
  )
}
