"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"

const WF_BLUE = "#146EF5"

type Faq = { q: string; a: React.ReactNode; aText: string }

export const webflowFaqs: Faq[] = [
  {
    q: "Why choose Webflow website design over WordPress?",
    aText:
      "Webflow ships the design canvas, CMS, hosting, SSL, CDN, and animation engine in one product. WordPress needs 8–14 plugins to match — every one a maintenance and security liability. Webflow is the better fit when you want pixel-perfect design freedom, dynamic content, and zero plugin upkeep. WordPress wins when you need WooCommerce at scale or a deep open-source plugin ecosystem.",
    a: (
      <>
        Webflow ships the design canvas, CMS, hosting, SSL, CDN, and animation
        engine in one product. WordPress needs 8–14 plugins to match — every
        one a maintenance and security liability. <strong>Webflow website
        design</strong> is the better fit when you want pixel-perfect design
        freedom, dynamic content, and zero plugin upkeep. WordPress wins when
        you need WooCommerce at scale or a deep open-source plugin ecosystem.
        See our{" "}
        <a
          href="/services/web-design/wordpress"
          style={{ color: WF_BLUE, fontWeight: 600 }}
        >
          WordPress page
        </a>{" "}
        for the side-by-side.
      </>
    ),
  },
  {
    q: "How is Webflow's pricing structured?",
    aText:
      "Webflow has two billing layers: Site plans (CMS, Business, Enterprise — paid per published site, this is what your visitors hit) and Workspace plans (the design seats your team uses). For most service businesses, a Webflow CMS site plan ($23/mo annual) covers the live site, and we work in your Workspace during the build. Our fee covers design, build, CMS modeling, SEO, and 30 days of post-launch support — fixed, with no surprise add-ons.",
    a: (
      <>
        Webflow has two billing layers:{" "}
        <strong style={{ color: "var(--ink)" }}>Site plans</strong> (CMS,
        Business, Enterprise — paid per published site) and{" "}
        <strong style={{ color: "var(--ink)" }}>Workspace plans</strong> (the
        design seats your team uses). For most service businesses, a Webflow
        CMS site plan (~$23/mo annual) covers the live site, and we work in
        your Workspace during the build. Our fee covers design, build, CMS
        modeling, SEO, and 30 days of post-launch support — fixed, no surprise
        add-ons.
      </>
    ),
  },
  {
    q: "Do I own my Webflow website if I leave?",
    aText:
      "Yes — and Webflow has a clean export path: full HTML, CSS, JS, and image assets as a static export. CMS content exports as CSV. Workspace and Site billing live under your account, not ours, so you can revoke our access at any time. The only thing that doesn't transfer cleanly is Webflow's hosted CMS — if you leave the platform, you'd need to rebuild dynamic pages elsewhere. We model your CMS to make that path easier if it's ever needed.",
    a: (
      <>
        Yes — Webflow has a clean export path: full HTML, CSS, JS, and image
        assets as a static export. CMS content exports as CSV. Workspace and
        Site billing live under your account, not ours, so you can revoke our
        access at any time. The only thing that doesn't transfer cleanly is
        Webflow's hosted CMS — if you leave the platform, you'd need to rebuild
        dynamic pages elsewhere. We model your CMS to make that path easier if
        it's ever needed.
      </>
    ),
  },
  {
    q: "Can I edit my Webflow site myself after launch?",
    aText:
      "Yes — that's one of Webflow's strongest selling points. Webflow Editor mode is a content-only interface (think CMS-lite) that lets you edit text, swap images, add CMS items, and publish — without touching the design. We hand off Editor access to as many team members as you need; the design system stays locked unless you want full Designer access too. Every project ships with a 15-minute Loom training video.",
    a: (
      <>
        Yes — that's one of Webflow's strongest selling points. Webflow{" "}
        <strong style={{ color: "var(--ink)" }}>Editor mode</strong> is a
        content-only interface that lets you edit text, swap images, add CMS
        items, and publish — without touching the design. We hand off Editor
        access to as many team members as you need; the design system stays
        locked unless you want full Designer access too. Every project ships
        with a 15-minute Loom training video.
      </>
    ),
  },
  {
    q: "Does Webflow handle ecommerce well?",
    aText:
      "For service businesses, lead-gen sites, and small catalogs (under 500 SKUs), Webflow Ecommerce is great — Stripe integration, abandoned-cart emails, custom checkout design, and full Designer control over product templates. For high-SKU catalogs (1,000+) or pure DTC at scale, Shopify is usually the right call and we can do a Webflow front-end with a Shopify backend via the Storefront API. We'll flag which approach fits your catalog before quoting.",
    a: (
      <>
        For service businesses, lead-gen sites, and small catalogs (under 500
        SKUs), Webflow Ecommerce is great — Stripe integration, abandoned-cart
        emails, custom checkout design, and full Designer control over product
        templates. For high-SKU catalogs (1,000+) or pure DTC at scale, Shopify
        is usually the right call and we can do a Webflow front-end with a
        Shopify backend via the Storefront API. We'll flag which approach fits
        your catalog before quoting.
      </>
    ),
  },
  {
    q: "How does Webflow website design SEO compare to WordPress + Yoast?",
    aText:
      "Webflow's native SEO controls match what Yoast or Rank Math give you: per-page titles, meta descriptions, OG images, alt text, canonical tags, robots controls, sitemap.xml, and clean slugs. JSON-LD schema is added via the head custom-code feature — we ship LocalBusiness, Service, FAQ, and BreadcrumbList schema on every relevant page. The advantage is that Webflow renders semantic HTML out of the box (no shortcodes, no theme bloat, no plugin conflicts), so Lighthouse scores are higher with less tuning.",
    a: (
      <>
        Webflow's native SEO controls match what Yoast or Rank Math give you:
        per-page titles, meta descriptions, OG images, alt text, canonical
        tags, robots controls, sitemap.xml, and clean slugs. JSON-LD schema is
        added via the head custom-code feature — we ship LocalBusiness,
        Service, FAQ, and BreadcrumbList schema on every relevant page. The
        advantage is that <strong>Webflow website design</strong> renders
        semantic HTML out of the box (no shortcodes, no theme bloat, no plugin
        conflicts), so Lighthouse scores are higher with less tuning. Pair with{" "}
        <a
          href="/services/seo/on-page"
          style={{ color: WF_BLUE, fontWeight: 600 }}
        >
          On-Page SEO
        </a>{" "}
        for full coverage.
      </>
    ),
  },
  {
    q: "Can you migrate my existing Squarespace, Wix, or WordPress site to Webflow?",
    aText:
      "Yes. Every migration includes a 301 redirect map (old URL → new URL), content audit (we don't ship duplicate or thin pages), CMS modeling for any dynamic content (blog posts, products, locations), an indexing check after launch, and a zero-downtime DNS cutover window. Most businesses see traffic recover or grow within 30 days. We've migrated dozens of sites between platforms — the trickiest part is usually the redirect map for /blog/ archives, and we handle that in-house.",
    a: (
      <>
        Yes. Every migration includes a 301 redirect map (old URL → new URL),
        content audit, CMS modeling for any dynamic content, an indexing check
        after launch, and a zero-downtime DNS cutover. Most businesses see
        traffic recover or grow within 30 days. If you're weighing the move,
        read our{" "}
        <a
          href="/services/web-design/squarespace"
          style={{ color: WF_BLUE, fontWeight: 600 }}
        >
          Squarespace
        </a>
        ,{" "}
        <a
          href="/services/web-design/wix"
          style={{ color: WF_BLUE, fontWeight: 600 }}
        >
          Wix
        </a>
        , and{" "}
        <a
          href="/services/web-design/wordpress"
          style={{ color: WF_BLUE, fontWeight: 600 }}
        >
          WordPress
        </a>{" "}
        pages.
      </>
    ),
  },
  {
    q: "Will my Webflow site be fast (Lighthouse + Core Web Vitals)?",
    aText:
      "Webflow sites we ship hit Lighthouse 90–98 on mobile and pass all three Core Web Vitals (LCP under 2.5s, INP under 200ms, CLS under 0.1). Webflow's hosting bakes in Brotli compression, automatic image optimization to WebP, responsive srcsets, lazy-loading, and Fastly + AWS edge caching — so the work is mostly making sure your images, fonts, and third-party scripts don't undo it. We Lighthouse-test on a real mid-tier Android before handoff.",
    a: (
      <>
        Webflow sites we ship hit Lighthouse 90–98 on mobile and pass all three
        Core Web Vitals (LCP under 2.5s, INP under 200ms, CLS under 0.1).
        Webflow's hosting bakes in Brotli compression, automatic image
        optimization to WebP, responsive srcsets, lazy-loading, and Fastly +
        AWS edge caching. We Lighthouse-test on a real mid-tier Android before
        handoff.
      </>
    ),
  },
  {
    q: "Do you use Webflow templates or build from scratch?",
    aText:
      "Always from scratch. Templates are a fast way to get a generic-looking site live, but they bake in design decisions and class structures that fight you the moment you need something custom. Every Webflow website design we deliver starts from an empty Designer canvas, with a custom design system, custom CMS schema, and custom interactions tuned to your brand and conversion goals.",
    a: (
      <>
        Always from scratch. Templates bake in design decisions and class
        structures that fight you the moment you need something custom. Every{" "}
        <strong>Webflow website design</strong> we deliver starts from an empty
        Designer canvas, with a custom design system, custom CMS schema, and
        custom interactions tuned to your brand and conversion goals.
      </>
    ),
  },
  {
    q: "How long does a typical Webflow website design project take?",
    aText:
      "14 days for the standard service-business build (10–12 pages, CMS Collections, full SEO, hosting setup, and 30-day support). Larger projects with custom Memberships, Ecommerce, or 30+ unique page templates run 4–6 weeks. We give you a fixed delivery date inside the kickoff call — and we hit it.",
    a: (
      <>
        14 days for the standard service-business build (10–12 pages, CMS
        Collections, full SEO, hosting setup, and 30-day support). Larger
        projects with custom Memberships, Ecommerce, or 30+ unique page
        templates run 4–6 weeks. We give you a fixed delivery date inside the
        kickoff call — and we hit it.
      </>
    ),
  },
  {
    q: "What's included in the 14-day delivery?",
    aText:
      "Strategy + sitemap, design system in Webflow Designer, every page built across all 4 breakpoints, CMS Collections wired (services, areas, case studies, authors), 5 interaction layers (on-load, scroll, hover, click, mouse-position), JSON-LD schema, alt text, sitemap.xml submitted to Search Console, redirect map, DNS cutover, GA4 + GTM + Pixel install, Lighthouse 95+ pass, and 30 days of post-launch support.",
    a: (
      <>
        Strategy + sitemap, design system in Webflow Designer, every page built
        across all 4 breakpoints, CMS Collections wired, 5 interaction layers,
        JSON-LD schema, alt text, sitemap.xml submitted to Search Console,
        redirect map, DNS cutover, GA4 + GTM + Pixel install, Lighthouse 95+
        pass, and 30 days of post-launch support.
      </>
    ),
  },
  {
    q: "Do you handle Webflow CMS content modeling?",
    aText:
      "Yes — content modeling is one of the most important steps. Most agencies skip it, then fight a half-modeled CMS for the rest of the build. We model your Collections (services, areas, case studies, blog posts, team) with proper reference fields, switch toggles, image fields, and SEO fields before any pixels move in the Designer. The result: dynamic page templates that scale to 100+ pages without rewrites.",
    a: (
      <>
        Yes — content modeling is one of the most important steps. We model
        your Collections (services, areas, case studies, blog posts, team) with
        proper reference fields, switch toggles, image fields, and SEO fields
        before any pixels move in the Designer. The result: dynamic page
        templates that scale to 100+ pages without rewrites.
      </>
    ),
  },
]

export function WebflowFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="webflow-faq"
      aria-labelledby="webflow-faq-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Webflow website design FAQ"
          heading={
            <span id="webflow-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  commit a budget
                </span>
                .
              </span>
            </span>
          }
          paragraph="The most common questions we get from businesses researching Webflow website design — pricing, ownership, ecommerce, SEO, migrations, and ongoing support."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {webflowFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              const num = `Q${String(idx + 1).padStart(2, "0")}`
              return (
                <li
                  key={faq.q}
                  className="card-surface overflow-hidden"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-bold font-mono tracking-[0.05em]"
                      style={{
                        background: isOpen
                          ? `linear-gradient(180deg, #2A7BF7 0%, ${WF_BLUE} 100%)`
                          : "rgba(20,110,245,0.10)",
                        color: isOpen ? "#fff" : WF_BLUE,
                        minWidth: 36,
                      }}
                    >
                      {num}
                    </span>
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] pt-0.5"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="shrink-0 w-5 h-5 mt-1 transition-transform duration-300"
                      strokeWidth={2.25}
                      style={{
                        color: isOpen ? WF_BLUE : "var(--muted)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-5 sm:px-6 pb-6 pl-[68px] sm:pl-[80px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still have questions?
            </span>
            <SecondaryButton asLink href="#contact">
              Talk to a Webflow strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WebflowFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: webflowFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
