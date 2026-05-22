"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"

const WP_BLUE = "#00749C"

type Faq = { q: string; a: React.ReactNode; aText: string }

export const wordpressFaqs: Faq[] = [
  {
    q: "How much does WordPress website design cost?",
    aText:
      "A custom WordPress website design from Max Market Pros runs on a fixed monthly engagement that includes design, plugin and theme architecture, on-page SEO, schema, performance tuning, and post-launch support. That's a different category than a Fiverr freelancer ($300–$1.5K one-time, no SEO) or a generic agency ($8–25K + retainer). Most service-business builds finish inside our 14-day cycle, and we quote a flat number after a free intake call so there are no surprise add-ons.",
    a: (
      <>
        A custom <strong>WordPress website design</strong> from Max Market Pros
        runs on a fixed monthly engagement that includes design, plugin and
        theme architecture, on-page SEO, schema, performance tuning, and
        post-launch support. That's a different category than a Fiverr
        freelancer ($300–$1.5K one-time, no SEO) or a generic agency ($8–25K +
        retainer). Most service-business builds finish inside our 14-day cycle,
        and we quote a flat number after a free intake call so there are no
        surprise add-ons.
      </>
    ),
  },
  {
    q: "Do I really own my site if it's on WordPress.com?",
    aText:
      "Mostly no. WordPress.com is a hosted SaaS — you're renting a slice of WordPress, not running it. Plugins, themes, and code access are gated by plan tier, and you can't move your full install off without exporting and rebuilding. A self-hosted WordPress.org site that we set up gives you root-level access, full plugin and theme freedom, and a database you can take with you to any host. That ownership is the entire reason we recommend self-hosted WordPress for serious businesses.",
    a: (
      <>
        Mostly no. WordPress.com is a hosted SaaS — you're renting a slice of
        WordPress, not running it. Plugins, themes, and code access are gated by
        plan tier, and you can't move your full install off without exporting
        and rebuilding. A self-hosted WordPress.org site that we set up gives
        you root-level access, full plugin and theme freedom, and a database
        you can take with you to any host. That ownership is the entire reason
        we recommend self-hosted WordPress for serious businesses.
      </>
    ),
  },
  {
    q: "Which page builder do you recommend?",
    aText:
      "Gutenberg, the native WordPress block editor, is our default for new builds — it's the lightest on speed, ships with WordPress core, and is future-proof. If your team needs designer-level drag-and-drop, we'll ship Elementor or Divi. For agencies that prize stability we use Beaver Builder, and for code-aware teams chasing maximum speed we use Bricks. We pick whichever your team will actually maintain after launch.",
    a: (
      <>
        Gutenberg, the native WordPress block editor, is our default for new{" "}
        <strong>WordPress website design</strong> projects — it's the lightest
        on speed, ships with WordPress core, and is future-proof. If your team
        needs designer-level drag-and-drop, we'll ship Elementor or Divi. For
        agencies that prize stability we use Beaver Builder, and for code-aware
        teams chasing maximum speed we use Bricks. We pick whichever your team
        will actually maintain after launch.
      </>
    ),
  },
  {
    q: "Is WordPress slow?",
    aText:
      "Stock WordPress on cheap shared hosting is slow. A WordPress website design we ship is not. Every build runs managed hosting (WP Engine, Kinsta, or Cloudways), WP Rocket caching, image compression to WebP, deferred third-party JS, and a Cloudflare CDN — and we Lighthouse-test on a real mid-tier Android before we hand it over. Most of our sites land at Lighthouse 90–95 mobile.",
    a: (
      <>
        Stock WordPress on cheap shared hosting is slow. A{" "}
        <strong>WordPress website design</strong> we ship is not. Every build
        runs managed hosting (WP Engine, Kinsta, or Cloudways), WP Rocket
        caching, image compression to WebP, deferred third-party JS, and a
        Cloudflare CDN — and we Lighthouse-test on a real mid-tier Android
        before we hand it over. Most of our sites land at Lighthouse 90–95
        mobile. Pair with{" "}
        <a
          href="/services/seo/technical"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          Technical SEO
        </a>{" "}
        for full Core Web Vitals coverage.
      </>
    ),
  },
  {
    q: "Is WordPress secure?",
    aText:
      "WordPress runs ~43% of the web, which makes it a target — but the actual breach data shows almost every WP hack traces back to outdated plugins, weak passwords, or shared hosting. Our build hardens wp-config, runs Wordfence (or Sucuri) with a WAF, enforces 2FA on every admin user, locks brute-force attempts, and ships nightly off-host backups. We've never had a client site breached on our stack.",
    a: (
      <>
        WordPress runs ~43% of the web, which makes it a target — but the
        actual breach data shows almost every WP hack traces back to outdated
        plugins, weak passwords, or shared hosting. Our{" "}
        <strong>WordPress website design</strong> hardens wp-config, runs
        Wordfence (or Sucuri) with a WAF, enforces 2FA on every admin user,
        locks brute-force attempts, and ships nightly off-host backups. We've
        never had a client site breached on our stack.
      </>
    ),
  },
  {
    q: "Do I need WooCommerce for ecommerce?",
    aText:
      "If you're selling under ~500 SKUs, taking subscriptions or memberships, or running a service-plus-product hybrid, WooCommerce is the right tool. We've shipped WooCommerce builds with Stripe, PayPal, Apple Pay, abandoned-cart recovery, and GA4 e-commerce tracking. For high-SKU catalogs (1,000+) or pure DTC at scale we'll flag if Shopify or BigCommerce is a better fit before quoting.",
    a: (
      <>
        If you're selling under ~500 SKUs, taking subscriptions or memberships,
        or running a service-plus-product hybrid, WooCommerce is the right tool.
        We've shipped WooCommerce builds with Stripe, PayPal, Apple Pay,
        abandoned-cart recovery, and GA4 e-commerce tracking. For high-SKU
        catalogs (1,000+) or pure DTC at scale we'll flag if Shopify or
        BigCommerce is a better fit before quoting.
      </>
    ),
  },
  {
    q: "Can you migrate my Squarespace, Wix, or GoDaddy site to WordPress?",
    aText:
      "Yes. Every migration includes a 301 redirect map (old URL → new URL), a content audit so we don't ship duplicate or thin pages, an indexing check after launch, and a zero-downtime DNS cutover window. Most businesses see traffic recover or grow within 30 days. If you're weighing the move, read our Squarespace, Wix, and GoDaddy pages for a side-by-side view.",
    a: (
      <>
        Yes. Every migration includes a 301 redirect map (old URL → new URL), a
        content audit so we don't ship duplicate or thin pages, an indexing
        check after launch, and a zero-downtime DNS cutover window. Most
        businesses see traffic recover or grow within 30 days. If you're
        weighing the move, read our{" "}
        <a
          href="/services/web-design/squarespace"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          Squarespace
        </a>
        ,{" "}
        <a
          href="/services/web-design/wix"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          Wix
        </a>
        , and{" "}
        <a
          href="/services/web-design/godaddy"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          GoDaddy
        </a>{" "}
        pages for a side-by-side view.
      </>
    ),
  },
  {
    q: "Do you handle WordPress hosting?",
    aText:
      "We don't resell hosting, but we set it up, configure it, and recommend the right tier for your traffic. Our defaults: WP Engine for service businesses (best support), Kinsta for performance-critical brands (Google Cloud + LXD), and Cloudways for budget-conscious teams that still want managed PHP. You own the hosting account directly — no agency lock-in.",
    a: (
      <>
        We don't resell hosting, but we set it up, configure it, and recommend
        the right tier for your traffic. Our defaults: WP Engine for service
        businesses (best support), Kinsta for performance-critical brands
        (Google Cloud + LXD), and Cloudways for budget-conscious teams that
        still want managed PHP. You own the hosting account directly — no
        agency lock-in.
      </>
    ),
  },
  {
    q: "What plugins do you install?",
    aText:
      "Our default plugin stack is 12 specific plugins across SEO (Yoast or Rank Math), performance (WP Rocket, Perfmatters, Cloudflare), security (Wordfence, Sucuri, or Solid Security), and conversion (Gravity Forms, MonsterInsights, FluentCRM). We also audit your existing install for bloat — most sites we inherit carry 8–14 plugins they don't need.",
    a: (
      <>
        Our default plugin stack is 12 specific plugins across SEO (Yoast or
        Rank Math), performance (WP Rocket, Perfmatters, Cloudflare), security
        (Wordfence, Sucuri, or Solid Security), and conversion (Gravity Forms,
        MonsterInsights, FluentCRM). We also audit your existing install for
        bloat — most sites we inherit carry 8–14 plugins they don't need.
      </>
    ),
  },
  {
    q: "Will my WordPress site rank on Google?",
    aText:
      "WordPress is the most SEO-friendly CMS — but only if it's tuned. Our WordPress website design ships with hand-written title tags and meta, JSON-LD schema on every page, breadcrumbs, an XML sitemap submitted to Search Console, and an internal-link topology built around your top commercial keywords. Pair it with our On-Page SEO and Local SEO services for a full ranking stack.",
    a: (
      <>
        WordPress is the most SEO-friendly CMS — but only if it's tuned. Our{" "}
        <strong>WordPress website design</strong> ships with hand-written title
        tags and meta, JSON-LD schema on every page, breadcrumbs, an XML
        sitemap submitted to Search Console, and an internal-link topology
        built around your top commercial keywords. Pair it with our{" "}
        <a
          href="/services/seo/on-page"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          On-Page SEO
        </a>{" "}
        and{" "}
        <a
          href="/services/seo/local"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          Local SEO
        </a>{" "}
        services for a full ranking stack.
      </>
    ),
  },
  {
    q: "Do you offer ongoing WordPress maintenance?",
    aText:
      "Yes. Every project ships with 30 days of post-launch support free, then transitions to an optional support retainer for plugin and core updates, monthly Lighthouse re-checks, security scans, content updates, and SEO refreshes. You own the WordPress site and database outright — no platform lock-in to us.",
    a: (
      <>
        Yes. Every project ships with 30 days of post-launch support free,
        then transitions to an optional support retainer for plugin and core
        updates, monthly Lighthouse re-checks, security scans, content updates,
        and SEO refreshes. You own the WordPress site and database outright —
        no platform lock-in to us.
      </>
    ),
  },
  {
    q: "How is your WordPress website design different from Fiverr?",
    aText:
      "A Fiverr WordPress site is one freelancer assembling a free theme and a stack of free plugins. Our WordPress website design is a full team — strategy, design, development, SEO, and QA — running a 14-day system that ships schema, Lighthouse 90+, security hardening, and a real conversion-tested layout. The cost is higher; the cost-per-lead is dramatically lower.",
    a: (
      <>
        A Fiverr WordPress site is one freelancer assembling a free theme and a
        stack of free plugins. Our <strong>WordPress website design</strong> is
        a full team — strategy, design, development, SEO, and QA — running a
        14-day system that ships schema, Lighthouse 90+, security hardening,
        and a real conversion-tested layout. The cost is higher; the
        cost-per-lead is dramatically lower. See our{" "}
        <a
          href="/services/seo/on-page"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          on-page SEO
        </a>{" "}
        and{" "}
        <a
          href="/services/seo/backlinks"
          style={{ color: WP_BLUE, fontWeight: 600 }}
        >
          backlinks
        </a>{" "}
        services for the full ranking system.
      </>
    ),
  },
]

export function WordpressFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="wordpress-faq"
      aria-labelledby="wordpress-faq-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="WordPress website design FAQ"
          heading={
            <span id="wordpress-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
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
          paragraph="The most common questions we get from businesses researching WordPress website design — pricing, page builders, hosting, security, SEO, migrations, and ongoing support."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {wordpressFaqs.map((faq, idx) => {
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
                          ? `linear-gradient(180deg, #1893BD 0%, ${WP_BLUE} 100%)`
                          : "rgba(0,116,156,0.10)",
                        color: isOpen ? "#fff" : WP_BLUE,
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
                        color: isOpen ? WP_BLUE : "var(--muted)",
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
              Talk to a WordPress strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WordpressFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wordpressFaqs.map((f) => ({
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
