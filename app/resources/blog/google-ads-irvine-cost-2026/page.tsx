import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PostShell, PostSection, PostProse, PostBody } from "@/components/blog/post-shell"
import { PostHero } from "@/components/blog/post-hero"
import { PostCallout } from "@/components/blog/post-callout"
import { StatTrio } from "@/components/blog/stat-trio"
import { LogoRow } from "@/components/blog/logo-row"
import { FaqAccordion } from "@/components/blog/faq-accordion"
import { PostCta } from "@/components/blog/post-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { CpcBarChart } from "@/components/blog/charts/cpc-bar-chart"
import { CampaignMixDonut } from "@/components/blog/charts/campaign-mix-donut"
import { CostTrendLineChart } from "@/components/blog/charts/cost-trend-line-chart"
import { ConversionFunnel } from "@/components/blog/charts/conversion-funnel"
import { BudgetAllocationBars } from "@/components/blog/charts/budget-allocation-bars"
import { icons8Url } from "@/lib/icons8"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "google-ads-irvine-cost-2026"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const CAMPAIGN_TYPES = [
  {
    title: "Local Services Ads (LSA)",
    domain: "ads.google.com",
    iconId: "19326",
    accent: "#1677FF",
    what:
      "Pay-per-lead ads with the green Google Guaranteed badge. Show up above paid Search for service-near-me intent.",
    irvineCpa: "$28 – $52 per qualified call",
    use: "Almost every home-services trade — plumbers, HVAC, electricians, locksmiths, garage door, roofing.",
    skip: "Pure e-commerce and B2B services. Trades that need lengthy consults before pricing.",
  },
  {
    title: "Search Ads",
    domain: "google.com",
    iconId: "12784",
    accent: "#0B132B",
    what:
      "The classic blue links above organic. Exact and phrase match on commercial-intent keywords. You pay per click.",
    irvineCpa: "$46 – $98 per booked job",
    use: "Mid-funnel intent (\"plumber Irvine,\" \"HVAC repair Costa Mesa\"). Backbone of any account.",
    skip: "Awareness, brand defense at first — start with intent terms before broad branded.",
  },
  {
    title: "Performance Max",
    domain: "googleadservices.com",
    iconId: "13551",
    accent: "#FFB400",
    what:
      "Google's auto-channel campaign. Runs Search, Display, YouTube, Maps, Gmail from one budget using ML signals.",
    irvineCpa: "$58 – $120 per booked job",
    use: "Established accounts with 30+ conversions/month. Remarketing and net-new prospecting in one place.",
    skip: "Brand-new accounts (no signal), low-budget tests, accounts that need full visibility into placements.",
  },
  {
    title: "Google Maps Ads",
    domain: "maps.google.com",
    iconId: "13794",
    accent: "#22A06B",
    what:
      "Promoted pins on Google Maps. Bid for the top-of-map slot when someone searches your service near them.",
    irvineCpa: "$0.65 – $2.10 per direction click",
    use: "Brick-and-mortar trades where someone physically comes to you (collision repair, dental, vet clinics).",
    skip: "Mobile service businesses without a public address — your money's better spent on LSA.",
  },
  {
    title: "Call-Only Ads",
    domain: "ads.google.com",
    iconId: "122890",
    accent: "#E53E3E",
    what:
      "Mobile-only ads where the click IS the phone call. No landing page in the middle.",
    irvineCpa: "$38 – $84 per call",
    use: "Emergency trades where speed-to-call decides who books (plumbers, locksmiths, HVAC after-hours).",
    skip: "Anything that requires the user to fill a form, look at photos, or check availability.",
  },
  {
    title: "YouTube Ads",
    domain: "youtube.com",
    iconId: "15162",
    accent: "#4A5A75",
    what:
      "Skippable in-stream and shorts placements. Awareness for service brands; some intent in custom-intent audiences.",
    irvineCpa: "$0.04 – $0.12 per view",
    use: "Brand awareness, before-and-after demonstrations (pool tile, roofing), local recognition over 90+ days.",
    skip: "Direct response on a short timeline — YouTube fills your funnel, doesn't book the job today.",
  },
]

const MISTAKES = [
  {
    title: "Running broad match without aggressive negatives",
    body:
      "Broad match in 2026 will spend on \"DIY plumbing repair\" and \"HVAC jobs hiring\" if you let it. Add a 200-line negative list day one or stay on exact + phrase.",
  },
  {
    title: "Geo-targeting Orange County, not the actual service area",
    body:
      "Targeting California or even Orange County wastes 30%+ of spend on towns you don't serve. Build a radius from your shop in Irvine; layer in city-level bid multipliers for high-ticket trades.",
  },
  {
    title: "Not running call extensions on mobile",
    body:
      "92% of plumbing and HVAC clicks come from mobile. If your ad doesn't expose a tap-to-call button, you're paying for clicks that don't convert. Call extensions plus call-only ads are the floor.",
  },
  {
    title: "Sending all traffic to a slow Wix or Squarespace site",
    body: (
      <>
        Your CPA is a function of CPC times conversion rate. Builder-stack landing pages drop conversion rate 20–40% versus a custom build.{" "}
        <Link
          href="/resources/blog/custom-coded-vs-wix-squarespace-irvine"
          style={{ color: "var(--accent)" }}
          className="font-semibold hover:underline"
        >
          We covered the data here
        </Link>
        . The fix isn't bidding less — it's converting more of what you already pay for.
      </>
    ),
  },
  {
    title: "Skipping LSA because the badge \"isn't worth it\"",
    body:
      "The Google Guaranteed badge isn't a vanity stamp — it's a placement above paid Search and an explicit Google ranking factor for service intent. Skipping LSA in Irvine is leaving the top slot to your competitor for $0.",
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Should I just run my own Google Ads instead of hiring an agency?",
    answer:
      "If you have 10+ hours a week to read Search Terms reports, manage negatives, write ad copy, and bench-test landing pages, sure. Most Irvine owners we work with realize that spending 10 hours/week to save $1,000/mo on management costs them $4,000/mo in wasted ad spend. The math only works if you actually have the hours.",
  },
  {
    question: "LSA or Search Ads — which one first?",
    answer:
      "LSA first for nine out of ten Irvine home-services trades. The badge sits above paid Search, you only pay for actual leads (not clicks), and the calendar fills faster. Once LSA is humming, layer Search Ads on top to capture intent that LSA's keyword set doesn't reach.",
  },
  {
    question: "How fast can I expect ROI on a new account?",
    answer:
      "LSA can ring the phone day one — the badge surfaces immediately. Search Ads need 30–45 days to escape learning phase and stabilize cost-per-conversion. Performance Max needs 60–90 days and at least 30 conversions/month of signal before it earns its budget. Most Irvine accounts hit positive ROAS by month 3.",
  },
  {
    question: "What's a realistic starting budget for an Irvine service business?",
    answer:
      "$2,000/mo is the floor — under that, learning-phase data is too thin to optimize on, especially in trades with $20+ CPCs. $5,000/mo is the sweet spot for a single trade serving Irvine and three neighboring cities. Above $15K/mo, you should be running 4+ campaign types and probably need a managed account.",
  },
  {
    question: "Manual bidding or automated bidding in 2026?",
    answer:
      "Maximize Conversions for new accounts in learning phase, then switch to Target CPA once you have 30+ conversions/30 days. Manual CPC still has a place for brand defense terms and tiny budgets where you don't want automation gambling your money. Maximize Clicks is a trap — it buys cheap clicks that don't convert.",
  },
  {
    question: "How do I actually track which campaigns book jobs (not just calls)?",
    answer:
      "CallRail or WhatConverts on every phone line, GTM event tracking on every form, and a back-office tag that fires when a calendar booking completes. Pipe everything into GA4 with a custom \"booked job\" conversion event. Without this, you're optimizing on calls — not revenue — and half your calls are wrong-number, hiring, or sales pitches.",
  },
  {
    question: "What's a fair agency fee for Google Ads in 2026?",
    answer:
      "For Irvine SMBs spending $2K–$10K/mo, expect 15–20% of spend or a flat $750–$1,800/mo retainer. Below that, the agency is cutting corners or operating at a loss. Above 25%, you're paying for layers of project management you don't need. We publish our structure on our plans page.",
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

const PLACEMENT_LOGOS = [
  { domain: "google.com", label: "Google Search", caption: "Above organic, intent-based" },
  { domain: "maps.google.com", label: "Google Maps", caption: "Pin promotion + directions" },
  { domain: "youtube.com", label: "YouTube", caption: "Pre-roll + Shorts" },
  { domain: "gmail.com", label: "Gmail", caption: "Promotions tab placements" },
  { domain: "google.com", label: "Search Partners", caption: "Syndicated search results" },
  { domain: "adsense.google.com", label: "Display Network", caption: "3M+ partner sites" },
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
              Google Ads in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Irvine, CA</span>:
              </span>{" "}
              2026 cost benchmarks &amp; campaign-type guide
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
                Median CPCs in Irvine and OC range from <strong>$9</strong> (concrete) to <strong>$37</strong> (garage door repair). Trade matters more than agency.
              </li>
              <li>
                The right mix for a $5K/mo Irvine home-services budget: <strong>35% LSA, 40% Search, 15% PMax, 10% YouTube</strong>.
              </li>
              <li>
                Five mistakes (broad match, weak geo-targeting, no call extension, slow landing page, skipping LSA) account for ~70% of wasted spend we see in OC audits.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The Irvine snapshot"
          heading="What 2026 Google Ads actually costs in Orange County."
          intro={
            <>
              Four numbers to anchor everything below. Pulled from Google Ads Keyword Planner and our own client accounts across Irvine, Tustin, Costa Mesa, and Newport Beach.
            </>
          }
          variant="wide"
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "13013", value: "$27.90", label: "Median plumbing CPC", sub: "Irvine / OC, May 2026" },
              { iconId: "13551", value: "+27% YoY", label: "Auction-price rise", sub: "OC home services, 2025 → 2026" },
              { iconId: "19326", value: "1 in 4", label: "Clicks now via LSA", sub: "Local Services Ads above Search" },
              { iconId: "122890", value: "$2,600", label: "Median monthly spend", sub: "Single-trade SMB in OC" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="Cost by trade"
          heading="Some clicks cost $9. Some cost $37."
          intro={
            <>
              Median CPCs vary wildly by trade and by urgency. Emergency services (garage door, HVAC at 11pm) pull the highest CPCs because the searcher will call the first ad they see. The fix is showing up in <strong>both</strong> LSA and Search, not paying $30 twice.
            </>
          }
          variant="wide"
        >
          <CpcBarChart />
        </PostSection>

        <PostSection
          pill="Campaign types"
          heading="Six campaigns. Each makes a different trade."
          intro={
            <>
              An Irvine plumber and an Irvine pool service shouldn't run the same Google Ads stack. Here's the honest read on what each campaign type does, what it costs, and when to walk away.
            </>
          }
          variant="wide"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {CAMPAIGN_TYPES.map((c) => (
              <div
                key={c.title}
                className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                    style={{ background: `${c.accent}1A` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={icons8Url(c.iconId, 96)}
                      alt=""
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      className="w-[26px] h-[26px] object-contain"
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
                        alt=""
                        width={14}
                        height={14}
                        loading="lazy"
                        decoding="async"
                        className="rounded-sm"
                      />
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.06em]"
                        style={{ color: c.accent }}
                      >
                        Google Ads
                      </span>
                    </div>
                    <h3
                      className="text-[17px] sm:text-[18px] font-bold leading-tight mt-0.5"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.title}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-[14px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {c.what}
                </p>

                <div
                  className="flex items-baseline gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
                >
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.07em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Irvine CPA
                  </span>
                  <span
                    className="text-[13px] font-bold tabular-nums"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.irvineCpa}
                  </span>
                </div>

                <div className="text-[13px] leading-[1.5]">
                  <div style={{ color: "var(--ink)" }}>
                    <span className="font-bold">Use it when:</span>{" "}
                    <span style={{ color: "var(--muted)" }}>{c.use}</span>
                  </div>
                  <div className="mt-1" style={{ color: "var(--ink)" }}>
                    <span className="font-bold">Skip it when:</span>{" "}
                    <span style={{ color: "var(--muted)" }}>{c.skip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="The mix"
          heading={<>Where a $5K/mo Irvine budget should actually go.</>}
          intro="If you're starting fresh with a $5,000 monthly budget on a single home-services trade in Orange County, here's how we'd split it on day one. Adjust as Quality Score and LSA badge weight stabilize."
          variant="wide"
        >
          <CampaignMixDonut />
        </PostSection>

        <PostSection
          pill="The trend"
          heading="CPCs aren't coming back down."
          intro={
            <>
              Auction prices in OC have climbed every year since 2022. Cutting bids isn't the answer — converting more of every click is. That's why landing-page speed and call routing matter more than they used to.
            </>
          }
          variant="wide"
        >
          <CostTrendLineChart />
        </PostSection>

        <PostSection
          pill="The funnel"
          heading="From click to booked job — where money leaks."
          intro={
            <>
              CPA isn't decided by the bid. It's decided by the five drop-off points between impression and booked job. Below is a real funnel shape from a managed OC HVAC account spending ~$13K/mo on Search + LSA.
            </>
          }
          variant="wide"
        >
          <ConversionFunnel />
        </PostSection>

        <PostSection
          pill="The ramp"
          heading="What the first six months should look like."
          intro={
            <>
              A new $5K/mo account doesn't sit static. LSA carries the load in month one because the badge surfaces fast; Search takes over by month four as Quality Score builds. PMax and YouTube grow as remarketing pools fill.
            </>
          }
          variant="wide"
        >
          <BudgetAllocationBars />
        </PostSection>

        <PostSection
          pill="Where you appear"
          heading="One Google Ads budget. Six surfaces."
          intro={
            <>
              People say “Google Ads” like it's one product. It's at least six. Knowing where your money is showing up is half of knowing whether it's working.
            </>
          }
          variant="wide"
        >
          <LogoRow items={PLACEMENT_LOGOS} columns={3} />
        </PostSection>

        <PostSection
          pill="What burns budget"
          heading="The five mistakes we audit out of OC accounts."
          intro={
            <>
              The most expensive line item in most Irvine Google Ads accounts isn't the click — it's the structural mistake compounding on every click. Five we see in 4 out of 5 audits.
            </>
          }
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {MISTAKES.map((m, idx) => (
              <li
                key={m.title}
                className="card-surface flex gap-4 sm:gap-5 p-5 sm:p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{
                    background: "rgba(229,62,62,0.10)",
                    color: "#E53E3E",
                  }}
                >
                  <AlertTriangle className="w-5 h-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-[12px] font-bold tabular-nums"
                      style={{ color: "var(--muted)" }}
                    >
                      0{idx + 1}
                    </span>
                    <h3
                      className="text-[16px] sm:text-[17.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.title}
                    </h3>
                  </div>
                  <div
                    className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="What Irvine owners ask us most."
          intro={
            <>
              The seven we hear weekly from HVAC, plumbing, roofing, and contracting owners across Orange County. For broader questions see our{" "}
              <Link
                href="/resources/faq"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                full FAQ
              </Link>{" "}
              or talk to us about your account directly.
            </>
          }
        >
          <FaqAccordion items={FAQS} />
        </PostSection>

        <PostBody>
          <PostProse>
            <p>
              Google Ads is one channel. The other half of the equation is the site your traffic lands on. If you're spending $5K/mo on ads and pointing it at a slow Wix or Squarespace build, you're paying twice for every click that doesn't convert.{" "}
              <Link
                href="/resources/blog/custom-coded-vs-wix-squarespace-irvine"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Here's the data on why builder stacks bleed ad budget
                <ArrowRight className="inline ml-1 w-3.5 h-3.5" />
              </Link>
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Free 3-day audit"
          heading="Get your Google Ads account read by someone who runs Irvine."
          description="We'll pull your last 90 days of data, score it against the OC benchmarks above, and tell you exactly where the leak is. No commitment."
          primary={{ label: post.ctaService?.label ?? "See Google Ads management", href: post.ctaService?.href ?? "/services/paid-ads/google-ads" }}
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
