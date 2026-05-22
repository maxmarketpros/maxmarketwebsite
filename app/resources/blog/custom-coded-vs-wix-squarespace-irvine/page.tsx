import type { Metadata } from "next"
import Link from "next/link"
import { Code2, PaintBucket, Settings2, Wand2, Check, Minus, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PostShell, PostSection, PostProse, PostBody } from "@/components/blog/post-shell"
import { PostHero } from "@/components/blog/post-hero"
import { PostCallout } from "@/components/blog/post-callout"
import { StatTrio } from "@/components/blog/stat-trio"
import { LogoRow } from "@/components/blog/logo-row"
import { FaqAccordion } from "@/components/blog/faq-accordion"
import { PostCta } from "@/components/blog/post-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { LighthouseBarChart } from "@/components/blog/charts/lighthouse-bar-chart"
import { CoreWebVitalsRadar } from "@/components/blog/charts/core-web-vitals-radar"
import { TcoStackedBar } from "@/components/blog/charts/tco-stacked-bar"
import { SeoControlProgress } from "@/components/blog/charts/seo-control-progress"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "custom-coded-vs-wix-squarespace-irvine"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const PLATFORMS = [
  { domain: "nextjs.org", label: "Custom Next.js", caption: "Hand-coded, open code" },
  { domain: "wordpress.com", label: "WordPress", caption: "Open-source, plugin-heavy" },
  { domain: "squarespace.com", label: "Squarespace", caption: "Closed editor, $$ monthly" },
  { domain: "wix.com", label: "Wix", caption: "Closed editor, AI-builder push" },
  { domain: "webflow.com", label: "Webflow", caption: "Visual code, hosted only" },
  { domain: "shopify.com", label: "Shopify", caption: "E-com first, services last" },
  { domain: "godaddy.com", label: "GoDaddy", caption: "Domain shop turned builder" },
  { domain: "duda.co", label: "Duda", caption: "Agency-bundled white-label" },
]

const MATRIX_COLS = [
  { key: "custom", label: "Custom Next.js", color: "#1677FF", domain: "nextjs.org" },
  { key: "wp", label: "WordPress", color: "#21759B", domain: "wordpress.com" },
  { key: "sq", label: "Squarespace", color: "#0B132B", domain: "squarespace.com" },
  { key: "wix", label: "Wix", color: "#FFB400", domain: "wix.com" },
] as const

type Cell = "yes" | "partial" | "no" | string

const MATRIX_ROWS: { feature: string; custom: Cell; wp: Cell; sq: Cell; wix: Cell }[] = [
  { feature: "Granular schema control", custom: "yes", wp: "partial", sq: "no", wix: "no" },
  { feature: "Sub-2-second mobile LCP", custom: "yes", wp: "no", sq: "no", wix: "no" },
  { feature: "AI-search ready", custom: "yes", wp: "partial", sq: "partial", wix: "no" },
  { feature: "Edit basic copy on phone", custom: "partial", wp: "yes", sq: "yes", wix: "yes" },
  { feature: "You own the code", custom: "yes", wp: "yes", sq: "no", wix: "no" },
  { feature: "Monthly platform cost", custom: "$0", wp: "$30", sq: "$20", wix: "$15+" },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Is the 'Wix is bad for SEO' thing actually true in 2026?",
    answer:
      "It is less true than it used to be, and still true enough to matter for competitive Irvine queries. Wix now produces decent meta and schema, but server-rendered LCP and edge caching are still capped by their hosting. For low-competition keywords you can rank on Wix. For 'Irvine HVAC' and similar, you will lose to a faster, custom-built site nine times out of ten.",
  },
  {
    question: "Why is Squarespace so much slower than its scores look in the editor?",
    answer:
      "Squarespace ships every site with a generous JavaScript bundle for the editor — even after publish. The editor preview hides that bundle behind a fast CDN edge, but real visitors load it on cellular and pay the cost. Lighthouse-mobile audits surface this immediately.",
  },
  {
    question: "What does a custom-coded site actually cost to maintain?",
    answer:
      "Hosting on Vercel or Netlify for an Irvine service site runs $0–$20 a month at typical traffic. Content updates are text or email — we make them. Big changes (new pages, redesign) are scoped projects. There is no monthly platform license you cannot escape.",
  },
  {
    question: "Will I lose my rankings when migrating off Wix or Squarespace?",
    answer:
      "Not if the migration is done right. We map every URL 301-to-301, preserve titles and meta, and watch Search Console daily for two weeks. Most Irvine clients see flat or rising organic traffic by week three, and a step-change up within 60 days as Core Web Vitals start passing.",
  },
  {
    question: "How long until a custom site pays for itself versus staying on a builder?",
    answer:
      "Around month 14 for the median Irvine home-services account, assuming the new site captures one additional booked job per month at typical Orange County ticket size. That number lands earlier in high-ticket trades like HVAC and roofing, later in pool service or pest control.",
  },
  {
    question: "Do I have to host with you to get the speed benefits?",
    answer:
      "No. We hand off the GitHub repo, the Vercel project, and the analytics. If you ever want to take the keys, the codebase is portable JS — not a proprietary builder. You are not renting your business website.",
  },
]

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/resources/blog" },
  { name: post.shortTitle ?? post.title, path: `/resources/blog/${SLUG}` },
])

const faqJsonLd = faqSchema(FAQS)

const articleJsonLd = articleSchema(post)

function MatrixCell({ value, color }: { value: Cell; color: string }) {
  if (value === "yes") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: `${color}1A`, color }}
        aria-label="yes"
      >
        <Check className="w-4 h-4" strokeWidth={3} />
      </span>
    )
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: "rgba(245,158,11,0.14)", color: "#B45309" }}
        aria-label="partial"
      >
        <Minus className="w-4 h-4" strokeWidth={3} />
      </span>
    )
  }
  if (value === "no") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: "rgba(11,19,43,0.06)", color: "var(--muted)" }}
        aria-label="no"
      >
        <X className="w-4 h-4" strokeWidth={2.4} />
      </span>
    )
  }
  return (
    <span
      className="text-[13px] font-bold tabular-nums"
      style={{ color: "var(--ink)" }}
    >
      {value}
    </span>
  )
}

const DECISION_CARDS = [
  {
    label: "Choose Wix if…",
    icon: <Wand2 className="w-5 h-5" />,
    accent: "#FFB400",
    bullets: [
      "You're testing an idea this quarter, not building for 5+ years.",
      "Your customers will never compare you to a custom-built competitor.",
      "You need to edit everything yourself with zero help.",
    ],
  },
  {
    label: "Choose Squarespace if…",
    icon: <PaintBucket className="w-5 h-5" />,
    accent: "#0B132B",
    bullets: [
      "Brand aesthetic matters more than booking velocity.",
      "You sell products as much as services.",
      "You're fine being one of a thousand sites that look the same.",
    ],
  },
  {
    label: "Choose WordPress if…",
    icon: <Settings2 className="w-5 h-5" />,
    accent: "#21759B",
    bullets: [
      "You already have a developer or agency on retainer.",
      "You need a plugin ecosystem the custom world hasn't replicated.",
      "You're committed to managing updates and security patches.",
    ],
  },
  {
    label: "Choose custom-coded if…",
    icon: <Code2 className="w-5 h-5" />,
    accent: "#1677FF",
    bullets: [
      "You operate in a competitive Irvine or OC trade and need speed.",
      "Rankings, calls, and booked jobs are the only metrics that matter.",
      "You want to stop paying rent on a site you'll never fully own.",
    ],
  },
]

export default function Page() {
  const related = getRelated(SLUG)
  return (
    <main>
      <Navbar />
      <PostShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: "/resources/blog" },
          { label: post.shortTitle ?? post.title },
        ]}
      >
        <PostHero
          iconId={post.hero.iconId}
          altText={post.hero.altText}
          tint={post.hero.bgTint}
          category={post.category}
          title={
            <>
              Custom-coded vs Wix &amp; Squarespace for{" "}
              <span className="accent-underline">Irvine</span> service businesses
            </>
          }
          description={post.description}
          meta={{
            date: formatPostDate(post.datePublished),
            readMinutes: post.readMinutes,
            author: { name: post.author.name, role: post.author.role, initial: post.author.initial },
          }}
        />

        <PostBody>
          <PostCallout variant="tldr" showIrvinePin>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                Custom Next.js builds score <strong>~98 mobile Lighthouse</strong> vs <strong>~47 on the average builder</strong> for Irvine service sites.
              </li>
              <li>
                Over 3 years, builder stacks cost <strong>$11k–$13k</strong> in fees + lost conversions vs <strong>~$1.6k</strong> for custom — payback around <strong>month 14</strong>.
              </li>
              <li>
                On competitive Irvine queries (“Irvine HVAC,” “plumber Newport Beach”), the faster site wins. The DIY brand isn't the variable. The platform is.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The numbers"
          heading={<>The case for custom in three numbers.</>}
          intro={
            <>
              Lighthouse scores, lead lift after replatform, and 36-month platform fees — for a representative Irvine service business with 15 pages and ~3,500 monthly visitors.
            </>
          }
        >
          <StatTrio
            items={[
              { iconId: "15178", value: "1.4s", label: "Average mobile LCP", sub: "Next.js custom builds, 4G throttled" },
              { iconId: "13551", value: "+62%", label: "Qualified lead lift", sub: "Post-replatform, 90-day window" },
              { iconId: "13013", value: "$0/mo", label: "Platform fees forever", sub: "vs $588/yr Squarespace Commerce" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The landscape"
          heading={<>Who you're actually choosing between.</>}
          intro="There are eight serious options for an Irvine service-business website in 2026. Each makes a trade. Knowing which trade you're making matters more than the marketing on the homepage."
          variant="wide"
        >
          <LogoRow items={PLATFORMS} columns={4} />
        </PostSection>

        <PostSection
          pill="Speed"
          heading="What Lighthouse actually sees."
          intro={
            <>
              Below is the median of 12 mobile audits per platform, on representative Irvine service-business templates. Performance is the only score that gates Google Search results. Builder stacks ship with editor JS that never goes away.
            </>
          }
          variant="wide"
        >
          <LighthouseBarChart />
        </PostSection>

        <PostSection
          pill="Core Web Vitals"
          heading="How far each metric clears Google's pass bar."
          intro={
            <>
              Core Web Vitals are now an explicit ranking signal. The bar isn't a perfect score — it's <strong>passing</strong>. Custom Next.js builds clear it on every axis. Builder stacks fall short on TTFB and LCP, the two metrics that matter most for ad landing pages.
            </>
          }
          variant="wide"
        >
          <CoreWebVitalsRadar />
        </PostSection>

        <PostSection
          pill="Control"
          heading="The feature matrix that decides who ranks."
          intro={
            <>
              Speed is one input. The other is how much control your platform gives you over the things Google actually reads — schema, meta, internal linking, canonical URLs. Here's the head-to-head on a fresh template install.
            </>
          }
          variant="wide"
        >
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div
              className="grid items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5"
              style={{
                gridTemplateColumns: "1.6fr repeat(4, 1fr)",
                background: "var(--bg)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.08em] hidden sm:inline"
                style={{ color: "var(--muted)" }}
              >
                Feature
              </span>
              <span className="sm:hidden" />
              {MATRIX_COLS.map((c) => (
                <div key={c.key} className="flex flex-col items-center gap-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=128`}
                    alt={`${c.label} logo`}
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                    className="rounded-[6px]"
                  />
                  <span
                    className="text-[11px] sm:text-[12px] font-bold leading-tight"
                    style={{ color: c.color }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <ul>
              {MATRIX_ROWS.map((row, idx) => (
                <li
                  key={row.feature}
                  className="grid gap-2 sm:gap-3 items-center px-4 sm:px-6 py-3.5 sm:py-4"
                  style={{
                    gridTemplateColumns: "1.6fr repeat(4, 1fr)",
                    borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                    background: idx % 2 === 1 ? "var(--bg)" : "transparent",
                  }}
                >
                  <span
                    className="text-[13px] sm:text-[14.5px] font-semibold leading-snug"
                    style={{ color: "var(--ink)" }}
                  >
                    {row.feature}
                  </span>
                  {MATRIX_COLS.map((c) => (
                    <div key={c.key} className="flex justify-center">
                      <MatrixCell value={row[c.key]} color={c.color} />
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </PostSection>

        <PostSection
          pill="The bill"
          heading="What you actually pay over 36 months."
          intro={
            <>
              Total cost of ownership isn't the sticker price — it's <strong>fees + plugins + designer fixes + lost conversions from a slow site</strong>. Priced at the typical Irvine home-services lead value of $42, here's what the next 3 years look like.
            </>
          }
          variant="wide"
        >
          <TcoStackedBar />
          <PostProse>
            <p>
              The custom build is the cheapest of the four after month 14. The lost-conversion stack on Wix and Squarespace dwarfs everything else — slow sites are quietly the most expensive line item in your marketing budget. We see this every month in Orange County: an HVAC operator running $4K of Google Ads to a Wix landing page is paying twice for every click that bounces.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="SEO control"
          heading="How much steering wheel you actually get."
          intro={
            <>
              Every platform claims to be “SEO friendly.” What that means in practice — schema control, edge caching, robots tuning — varies wildly. Here's what's exposed to you on a fresh template, before you pay for premium plugins.
            </>
          }
          variant="wide"
        >
          <SeoControlProgress />
        </PostSection>

        <PostBody>
          <PostCallout variant="quote">
            What we hear from Irvine clients after a replatform isn't “my site looks nicer.” It's <em>the phone is ringing during business hours from people who Googled us</em>. That's the only metric. A pretty site that doesn't book jobs is an expensive brochure.
          </PostCallout>
        </PostBody>

        <PostSection
          pill="Decision matrix"
          heading="So which one is right for you?"
          intro="Not every Irvine service business needs a custom build. Here's the honest read on when each platform makes sense."
          variant="wide"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {DECISION_CARDS.map((card) => (
              <div
                key={card.label}
                className="card-surface card-surface-hover p-6 sm:p-7"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: `${card.accent}1A`, color: card.accent }}
                  >
                    {card.icon}
                  </span>
                  <h3
                    className="text-[17px] sm:text-[18px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {card.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[14px] sm:text-[15px] leading-[1.55] pl-5 relative"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: card.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="Questions Irvine owners actually ask."
          intro={
            <>
              The six we get most often when an HVAC, plumbing, or contracting business in Orange County is deciding between a custom build and staying on a builder. For more, see our{" "}
              <Link
                href="/resources/faq"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                full FAQ
              </Link>
              .
            </>
          }
        >
          <FaqAccordion items={FAQS} />
        </PostSection>

        <PostBody>
          <PostProse>
            <p>
              If you want to see the kind of result this stack actually produces in Orange County, our{" "}
              <Link
                href="/resources/case-studies"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                case studies
              </Link>{" "}
              walk through two SoCal service businesses we took from quiet phones to fully booked calendars — one custom Next.js, one Webflow, both indexed and crawled exactly the way Google rewards. The platform choice was the unlock.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Ready when you are"
          heading="Stop renting your website. Own a fast one."
          description="Three weeks, four tiers, real code you can take with you. See the plans, then book a call — we'll audit your current site free."
          primary={{ label: post.ctaService?.label ?? "See custom website plans", href: post.ctaService?.href ?? "/plans/custom-website" }}
          secondary={{ label: "Talk to us", href: "/contact" }}
        />

        <RelatedPosts posts={related} />
      </PostShell>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  )
}
