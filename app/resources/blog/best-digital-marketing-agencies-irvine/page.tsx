import type { Metadata } from "next"
import Link from "next/link"
import {
  Check,
  Minus,
  X,
  MapPin,
  UserRound,
  Target,
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Compass,
  Star,
  Building2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PostShell, PostSection, PostProse, PostBody } from "@/components/blog/post-shell"
import { PostHero } from "@/components/blog/post-hero"
import { PostCallout } from "@/components/blog/post-callout"
import { StatTrio } from "@/components/blog/stat-trio"
import { FaqAccordion } from "@/components/blog/faq-accordion"
import { PostCta } from "@/components/blog/post-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "best-digital-marketing-agencies-irvine"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

// ---------- Matrix data ----------

const MATRIX_COLS = [
  { key: "mmp", label: "Max Market Pros", color: "#1677FF", domain: "maxmarketpros.com" },
  { key: "kb", label: "KlientBoost", color: "#FF5722", domain: "klientboost.com" },
  { key: "iv", label: "Ignite Visibility", color: "#FF6D17", domain: "ignitevisibility.com" },
  { key: "ct", label: "Coalition Tech", color: "#0B3D91", domain: "coalitiontechnologies.com" },
  { key: "tr", label: "Thrive", color: "#22C55E", domain: "thriveagency.com" },
  { key: "ll", label: "Lounge Lizard", color: "#7C3AED", domain: "loungelizard.com" },
] as const

type Cell = "yes" | "partial" | "no" | string

const MATRIX_ROWS: { feature: string; mmp: Cell; kb: Cell; iv: Cell; ct: Cell; tr: Cell; ll: Cell }[] = [
  {
    feature: "Headquartered in Irvine, CA",
    mmp: "yes",
    kb: "no",
    iv: "no",
    ct: "no",
    tr: "no",
    ll: "no",
  },
  {
    feature: "Team size",
    mmp: "Small",
    kb: "100+",
    iv: "~400",
    ct: "250+",
    tr: "Mid",
    ll: "~33",
  },
  {
    feature: "Primary discipline",
    mmp: "Full-stack",
    kb: "PPC",
    iv: "Full-svc",
    ct: "SEO/Ecom",
    tr: "Full-svc",
    ll: "Web design",
  },
  {
    feature: "Dedicated vertical playbooks (med, dental, restaurant, SaaS)",
    mmp: "yes",
    kb: "partial",
    iv: "partial",
    ct: "partial",
    tr: "partial",
    ll: "no",
  },
  {
    feature: "Founder on every account",
    mmp: "yes",
    kb: "no",
    iv: "no",
    ct: "no",
    tr: "no",
    ll: "partial",
  },
  {
    feature: "US-based delivery team",
    mmp: "yes",
    kb: "yes",
    iv: "yes",
    ct: "partial",
    tr: "yes",
    ll: "yes",
  },
  {
    feature: "SEO + Paid + Web + Social all in-house",
    mmp: "yes",
    kb: "partial",
    iv: "yes",
    ct: "partial",
    tr: "yes",
    ll: "partial",
  },
  {
    feature: "Built around Irvine SMB context",
    mmp: "yes",
    kb: "no",
    iv: "partial",
    ct: "no",
    tr: "partial",
    ll: "no",
  },
]

// ---------- Matrix cell renderer ----------

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
      className="text-[12px] sm:text-[13px] font-bold tabular-nums leading-tight text-center"
      style={{ color: "var(--ink)" }}
    >
      {value}
    </span>
  )
}

// ---------- Methodology criteria ----------

const CRITERIA = [
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Shows up for the search",
    body: "Ranks on the first page of Google or appears in Clutch and UpCity's top-20 lists for 'digital marketing agency Irvine' or 'Orange County'.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Real, recent reviews",
    body: "4-star average or higher, with at least 25 third-party reviews on Clutch, Google, or G2 in the last 18 months.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Established footprint",
    body: "In business 5+ years with a stable team, public leadership, and a real office or distributed company structure that survives churn.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Distinct positioning",
    body: "Each agency on the list represents a different lane: PPC specialist, enterprise full-service, SEO/e-commerce, national chain, design-led shop, or local specialist.",
  },
]

// ---------- MMP wins cards ----------

const WINS = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Actually in Irvine",
    body: "We work, live, and meet clients in Irvine. Not a satellite office or a service-area page. When a client says 'Northwood' or 'Quail Hill' or 'Diamond Jamboree,' we know what that means for their search radius and review pool.",
    href: "/about",
    cta: "Where we work",
  },
  {
    icon: <UserRound className="w-5 h-5" />,
    title: "You talk to the founder",
    body: "Every account has Joseph on the call. Not an account manager who pings a specialist who pings an analyst. The strategy, the trade-offs, the bad-news call when something is not working: same person, every time.",
    href: "/about",
    cta: "Meet Joseph",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Vertical playbooks, not horizontal slop",
    body: "Med spas, dental practices, restaurants, B2B SaaS, and home services each get a dedicated playbook with Irvine-specific data. We do not run the same template across a Botox clinic and a Korean BBQ spot.",
    href: "/industries",
    cta: "See industries",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Four disciplines, one team",
    body: "SEO, Paid Ads, Web Design, and Social all live under one roof. No handoffs, no contradictory recommendations, no 'that is not our department' email at 4 pm on a Friday.",
    href: "/services",
    cta: "See services",
  },
]

// ---------- Agency profiles ----------

const PROFILES = [
  {
    key: "kb",
    name: "KlientBoost",
    hq: "Costa Mesa, CA",
    team: "100+ employees",
    founded: "Founded by Johnathan Dane",
    domain: "klientboost.com",
    color: "#FF5722",
    url: "https://www.klientboost.com/",
    bestFor:
      "Brands that want a PPC and CRO specialist running paid media at high spend. If your problem is 'we have plenty of leads from SEO, we just need a Google and Meta team that pushes ROAS,' KlientBoost is one of the best in the country at it.",
    differ:
      "KlientBoost is a performance specialist. They run paid and conversion work at depth. We run paid alongside Local SEO, Web Design, and Social Media in one Irvine-resident team. If you want a single partner that handles your Map Pack ranking and your Google Ads and your website rebuild, that is us. If you want a pure-play paid shop with deep CRO bench, that is them.",
    sources: [
      { label: "KlientBoost about page", href: "https://www.klientboost.com/" },
      { label: "Clutch profile", href: "https://clutch.co/profile/klientboost" },
    ],
  },
  {
    key: "iv",
    name: "Ignite Visibility",
    hq: "San Diego, CA (with Irvine, NY, Orlando offices)",
    team: "~400 employees, remote-first",
    founded: "Founded 2013 by John Lincoln and Krishnan Coughran",
    domain: "ignitevisibility.com",
    color: "#FF6D17",
    url: "https://ignitevisibility.com/",
    bestFor:
      "Mid-market and enterprise brands with seven-figure annual marketing budgets that need a large, structured agency with specialists in every channel. Ignite Visibility is, by their own count, around 400 people across multiple offices including a satellite in Irvine.",
    differ:
      "Ignite is built for scale. Their org chart matches that scale: account directors, channel specialists, analysts, project managers. For an Irvine med spa or law firm with a $5K to $20K monthly retainer, that structure becomes overhead. We are deliberately smaller. The founder runs strategy, a focused team executes, and the decision loop is hours, not weeks.",
    sources: [
      { label: "Ignite Visibility about page", href: "https://ignitevisibility.com/about/" },
      { label: "Clutch profile", href: "https://clutch.co/profile/ignite-visibility" },
    ],
  },
  {
    key: "ct",
    name: "Coalition Technologies",
    hq: "Los Angeles, CA (plus Seattle and global)",
    team: "250+ team members",
    founded: "Founded by Joel Gross",
    domain: "coalitiontechnologies.com",
    color: "#0B3D91",
    url: "https://coalitiontechnologies.com/",
    bestFor:
      "E-commerce and large content sites that need deep, technical SEO at scale. Coalition has built a strong reputation in Shopify, BigCommerce, and enterprise SEO, with 250-plus team members and a long Clutch track record on technical work.",
    differ:
      "Coalition's center of gravity is e-commerce SEO and large-content publishers. Ours is the local service economy in Irvine: clinics, dental practices, home services, restaurants, B2B SaaS startups at the Spectrum and IBC. If you sell physical products at scale and need a deep technical SEO shop, Coalition is excellent. If you sell appointments, services, or local consults, our Local SEO and GBP work translates more directly to booked jobs.",
    sources: [
      { label: "Coalition Technologies team page", href: "https://coalitiontechnologies.com/who-we-are" },
      { label: "Clutch profile", href: "https://clutch.co/profile/coalition-technologies" },
    ],
  },
  {
    key: "tr",
    name: "Thrive Internet Marketing Agency",
    hq: "Arlington, TX (with an Irvine, CA office among many)",
    team: "Mid-size, multi-location",
    founded: "Founded 2005",
    domain: "thriveagency.com",
    color: "#22C55E",
    url: "https://thriveagency.com/",
    bestFor:
      "Owners who want a one-vendor, multi-channel solution with a national footprint. Thrive lists Irvine as one of many office locations and offers SEO, PPC, social, web design, content, and reputation work under one roof.",
    differ:
      "Thrive is a national chain with many offices including an Irvine location. We are a single Irvine-resident shop. The trade-off is structural: their model spreads team and resources across many cities, ours concentrates them in one. For a small or mid-size Irvine SMB that wants a marketing partner who knows Spectrum traffic patterns, UCI quarter timing, and the bilingual search behavior in Northwood, the local concentration matters.",
    sources: [
      { label: "Thrive locations page", href: "https://thriveagency.com/locations/" },
      { label: "Thrive Irvine page", href: "https://thriveagency.com/irvine-digital-marketing-agency/" },
    ],
  },
  {
    key: "ll",
    name: "Lounge Lizard",
    hq: "New York, NY (with offices in LA, Miami, Nashville, DC, and more)",
    team: "Small-to-mid, multi-office",
    founded: "Founded 1998",
    domain: "loungelizard.com",
    color: "#7C3AED",
    url: "https://www.loungelizard.com/",
    bestFor:
      "Brands prioritizing custom web design with a digital marketing layer added on. Lounge Lizard is one of the longer-tenured agencies on this list, with a strong design portfolio and offices in 10 US cities according to their own about page.",
    differ:
      "Lounge Lizard is design-led with marketing wrapped around it. We are growth-led with design as the conversion layer. If your top priority is a flagship custom website and a brand identity rebuild, Lounge Lizard's portfolio speaks for itself. If your top priority is booked appointments, ranked Map Pack listings, and a measurable CAC, our model is built for that outcome.",
    sources: [
      { label: "Lounge Lizard about page", href: "https://www.loungelizard.com/about/" },
      { label: "Clutch profile", href: "https://clutch.co/profile/lounge-lizard" },
    ],
  },
]

// ---------- Better-fit routing ----------

const BETTER_FITS = [
  {
    fit: "You need PPC and conversion work, full stop",
    pick: "KlientBoost",
    why: "Specialist depth in paid media and CRO.",
  },
  {
    fit: "You are a mid-market or enterprise brand with a 7-figure annual budget",
    pick: "Ignite Visibility",
    why: "Built for that scale with channel specialists for every discipline.",
  },
  {
    fit: "You run an e-commerce store (Shopify, BigCommerce) and need technical SEO",
    pick: "Coalition Technologies",
    why: "Deep e-commerce and large-content SEO bench.",
  },
  {
    fit: "You want a national chain with broad service breadth and many regional offices",
    pick: "Thrive Internet Marketing Agency",
    why: "Multi-city footprint and full-service portfolio.",
  },
  {
    fit: "Your single biggest need is a flagship custom website with brand identity",
    pick: "Lounge Lizard",
    why: "25+ years of design-led work and a strong portfolio.",
  },
]

// ---------- Decision routing ----------

const ROUTING = [
  {
    need: "Local Map Pack rankings for a service business in Irvine",
    pick: "us, then a local-specialist alternative",
  },
  {
    need: "AI Overview and ChatGPT citation strategy (AEO/GEO)",
    pick: "us or Coalition Technologies",
  },
  {
    need: "Google Ads and Meta paid media at high spend, performance focus",
    pick: "KlientBoost or us if you want SEO bundled in",
  },
  {
    need: "Enterprise full-service across SEO, paid, content, PR",
    pick: "Ignite Visibility",
  },
  {
    need: "E-commerce SEO at scale",
    pick: "Coalition Technologies",
  },
  {
    need: "National multi-location campaign with regional offices",
    pick: "Thrive Internet Marketing Agency",
  },
  {
    need: "Custom flagship web design first, marketing second",
    pick: "Lounge Lizard",
  },
  {
    need: "Irvine med spa, dental, restaurant, B2B SaaS, or home service that wants one local team running everything",
    pick: "us",
  },
]

// ---------- MMP approach blocks ----------

const APPROACH = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Irvine-specific, not Orange-County-generic",
    body: "We have separate playbooks for the Spectrum, IBC, UCI-adjacent restaurants, Northwood bilingual search, Quail Hill cosmetic clinics, and Woodbridge family practices. The local data drives the strategy, not the other way around.",
    link: { label: "Irvine vertical posts", href: "/resources/blog" },
  },
  {
    icon: <UserRound className="w-5 h-5" />,
    title: "Founder-run, specialist-staffed",
    body: "Joseph runs strategy on every account. The team executes against that strategy with specialists for SEO, paid media, web, and social. You get the senior thinking of a small shop with the execution depth of a structured one.",
    link: { label: "About us", href: "/about" },
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Four disciplines, one P&L",
    body: "SEO, Paid Ads, Web Design, and Social Media all sit on the same team. When a Google update hits or an ad account gets flagged, the response is coordinated, not a vendor blame circle.",
    link: { label: "All services", href: "/services" },
  },
]

// ---------- FAQs ----------

const FAQS: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Are bigger agencies actually better for SMBs?",
    answer: (
      <>
        Sometimes yes, mostly no. A 400-person agency has channel specialists for everything, which helps if you have an
        enterprise-scale problem and a budget to match. For a local Irvine SMB doing $50K to $5M in revenue, the same
        structure becomes a tax. You pay account-manager and project-manager overhead so that work gets routed through
        layers. Smaller, vertical-focused shops typically deliver faster decision loops and more senior attention per
        dollar, which matters more when you are trying to win a Map Pack slot than when you are running a national
        product launch.
      </>
    ),
  },
  {
    question: "Why should I pick an Irvine-resident agency over a national one?",
    answer: (
      <>
        For a service business that sells to people who live or work in Orange County, local context is a strategy input,
        not a marketing line. Irvine has neighborhood-by-neighborhood search behavior: Mandarin and Korean dominate
        certain ZIPs, UCI changes restaurant traffic four times a year, Newport Beach pulls cosmetic spend away from
        Spectrum. A national agency can learn that. A local one already knows it. If you want a deeper dive, read{" "}
        <Link
          href="/resources/blog/bilingual-local-seo-irvine"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          our bilingual local SEO playbook for Irvine
        </Link>
        .
      </>
    ),
  },
  {
    question: "How do I evaluate a digital marketing agency? What questions actually matter?",
    answer: (
      <>
        Five questions sort the field fast. One, who specifically will run my account and how senior are they. Two, what
        are three case studies in my industry or city, with measured outcomes. Three, what is the first thing you would
        do in the first 30 days, and why that and not something else. Four, what does reporting look like and how often.
        Five, what happens when something is not working. The bad answers are vague, generic, and full of jargon. The
        good ones name people, name tactics, and admit trade-offs.
      </>
    ),
  },
  {
    question: "What does a real digital marketing engagement cost in 2026?",
    answer: (
      <>
        Industry benchmarks for local SMBs run $2,500 to $10,000 per month for ongoing retainers across SEO, paid media,
        and social, depending on scope and ad budget. One-time projects like a website rebuild range from a few thousand
        to mid-five figures. Above that, you are typically into mid-market or enterprise pricing, which the larger
        agencies on this list serve. The right number depends on the channel mix and your monthly ad spend; the wrong
        number is the one that sounds suspiciously cheap.
      </>
    ),
  },
  {
    question: "Do you work with med spas, dental practices, restaurants, B2B SaaS, and home services?",
    answer: (
      <>
        Yes, and each has a dedicated playbook informed by Irvine-specific data. Read the deep dives:{" "}
        <Link
          href="/resources/blog/irvine-med-spa-seo-map-pack"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Irvine med spa SEO
        </Link>
        ,{" "}
        <Link
          href="/resources/blog/dental-seo-irvine-map-pack"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Irvine dental SEO
        </Link>
        ,{" "}
        <Link
          href="/resources/blog/restaurant-seo-irvine-uci-spectrum"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Irvine restaurant SEO
        </Link>
        ,{" "}
        <Link
          href="/resources/blog/b2b-saas-seo-irvine-spectrum"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Irvine B2B SaaS SEO
        </Link>
        , and{" "}
        <Link
          href="/resources/blog/google-ads-irvine-cost-2026"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Irvine Google Ads cost benchmarks
        </Link>
        .
      </>
    ),
  },
  {
    question: "How is Max Market Pros different from KlientBoost or Ignite Visibility specifically?",
    answer: (
      <>
        Different scale, different focus. KlientBoost is a paid-media specialist with strong CRO depth, headquartered in
        Costa Mesa. Ignite Visibility is a roughly 400-person full-service agency built for mid-market and enterprise
        clients, headquartered in San Diego with an Irvine satellite. We are a small Irvine-resident team that runs
        Local SEO, Paid Ads, Web Design, and Social under one roof, with the founder on every account. We are not a
        better fit than either of them in every scenario. We are a better fit for Irvine SMBs that want focused
        execution and a founder, not an org chart.
      </>
    ),
  },
]

// ---------- AuthorBio inline component ----------

function AuthorBio() {
  return (
    <aside
      className="my-10 sm:my-12 card-surface p-6 sm:p-8"
      style={{ borderRadius: "var(--radius-lg)" }}
      aria-labelledby="author-bio-heading"
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <span
          className="shrink-0 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-[16px] sm:text-[18px] font-bold"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--cyan))",
            color: "#fff",
          }}
          aria-hidden
        >
          JS
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
              style={{ color: "var(--accent)" }}
            >
              About the author
            </span>
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
          </div>
          <h3
            id="author-bio-heading"
            className="text-[18px] sm:text-[20px] font-bold leading-tight mb-1.5"
            style={{ color: "var(--ink)" }}
          >
            Joseph Stirling, Founder of Max Market Pros
          </h3>
          <p
            className="text-[14.5px] sm:text-[15.5px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            Joseph runs strategy on every Max Market Pros account and built the agency to serve Irvine SMBs the way
            larger agencies serve mid-market clients, but with the founder on every call. He wrote this comparison
            because every Irvine business owner he meets is shopping the same handful of agencies, and the &ldquo;top
            10&rdquo; lists never explain which agency fits which kind of business. The point of the post is to make that
            answer obvious, even if the answer is not us.{" "}
            <Link
              href="/about"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              More about Max Market Pros
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              get in touch directly
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  )
}

// ---------- Schema ----------

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/resources/blog" },
  { name: post.shortTitle ?? post.title, path: `/resources/blog/${SLUG}` },
])

const FAQ_SCHEMA_TEXT: Record<string, string> = {
  "Are bigger agencies actually better for SMBs?":
    "Sometimes yes, mostly no. A 400-person agency has channel specialists for everything, which helps for enterprise-scale problems and budgets. For a local Irvine SMB doing $50K to $5M in revenue, the same structure becomes overhead. Smaller, vertical-focused shops typically deliver faster decision loops and more senior attention per dollar.",
  "Why should I pick an Irvine-resident agency over a national one?":
    "For a service business that sells to people who live or work in Orange County, local context is a strategy input, not a marketing line. Irvine has neighborhood-by-neighborhood search behavior: Mandarin and Korean dominate certain ZIPs, UCI changes restaurant traffic four times a year, Newport Beach pulls cosmetic spend away from Spectrum. A national agency can learn that. A local one already knows it.",
  "How do I evaluate a digital marketing agency? What questions actually matter?":
    "Five questions sort the field fast: who specifically will run my account and how senior are they, what are three case studies in my industry or city with measured outcomes, what is the first thing you would do in the first 30 days, what does reporting look like, and what happens when something is not working. The good answers name people, name tactics, and admit trade-offs.",
  "What does a real digital marketing engagement cost in 2026?":
    "Industry benchmarks for local SMBs run $2,500 to $10,000 per month for ongoing retainers across SEO, paid media, and social, depending on scope and ad budget. One-time projects like a website rebuild range from a few thousand to mid-five figures. Above that, you are typically into mid-market or enterprise pricing.",
  "Do you work with med spas, dental practices, restaurants, B2B SaaS, and home services?":
    "Yes, and each has a dedicated playbook informed by Irvine-specific data. We publish deep dives on Irvine med spa SEO, Irvine dental SEO, Irvine restaurant SEO, Irvine B2B SaaS SEO, and Irvine Google Ads cost benchmarks.",
  "How is Max Market Pros different from KlientBoost or Ignite Visibility specifically?":
    "Different scale, different focus. KlientBoost is a paid-media specialist headquartered in Costa Mesa. Ignite Visibility is a roughly 400-person full-service agency built for mid-market and enterprise, headquartered in San Diego with an Irvine satellite. We are a small Irvine-resident team that runs Local SEO, Paid Ads, Web Design, and Social under one roof, with the founder on every account.",
}

const faqJsonLd = faqSchema(
  FAQS.map((f) => ({
    question: f.question,
    answer: FAQ_SCHEMA_TEXT[f.question] ?? "",
  })).filter((f) => f.answer.length > 0)
)

const articleJsonLd = articleSchema(post)

// ---------- Page ----------

export default function Page() {
  const related = getRelated(SLUG, 3)
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
              <span className="accent-underline">Irvine&apos;s</span> top digital marketing agencies, fairly compared.
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
                Five agencies show up for most &ldquo;best digital marketing agency Irvine&rdquo; searches:{" "}
                <strong>KlientBoost, Ignite Visibility, Coalition Technologies, Thrive, and Lounge Lizard</strong>. Each
                is great at something specific.
              </li>
              <li>
                None of them are headquartered in Irvine. We are. That is not a personality trait, it is a strategy
                input for local search.
              </li>
              <li>
                We are not the right pick for every Irvine business. If you need pure PPC, choose KlientBoost. Enterprise
                scale, Ignite. E-commerce SEO, Coalition. The map at the end of this post says it cleanly.
              </li>
              <li>
                We are the right pick if you are an Irvine SMB that wants Local SEO, Paid, Web, and Social run by one
                team, with the founder on every account.
              </li>
            </ul>
          </PostCallout>

          <PostProse>
            <p>
              If you are an Irvine business owner shopping digital marketing agencies in 2026, you are about to read the
              same five names on every &ldquo;top 10&rdquo; list. The lists never tell you which one actually fits your
              business. This post tries to. We named ourselves on the list because we are one of the agencies you are
              comparing, and pretending otherwise would be insulting. Everything below is sourced to the agencies&rsquo;
              own websites or to Clutch and similar third-party listings, with the links included. The point is for you
              to make a good decision, even when the right answer is not us.
            </p>
          </PostProse>
        </PostBody>

        <PostSection
          pill="The landscape"
          heading="The Irvine agency market in three numbers."
          intro={
            <>
              Orange County has one of the densest agency ecosystems in the country, and Irvine sits in the middle of it.
              A few orienting stats before we get into the head-to-head.
            </>
          }
        >
          <StatTrio
            items={[
              { iconId: "12534", value: "200+", label: "Agencies serving OC", sub: "Clutch search for digital marketing, Orange County" },
              { iconId: "63692", value: "4.5+", label: "Stars expected", sub: "Threshold for a credible Irvine shortlist" },
              { iconId: "13794", value: "$2.5K-$10K", label: "Typical local retainer", sub: "Industry benchmark for SMB monthly scope" },
            ]}
          />
          <PostProse>
            <p>
              Sources for the numbers above:{" "}
              <a
                href="https://clutch.co/agencies/digital-marketing/orange-county"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Clutch&rsquo;s Orange County digital marketing listings
              </a>{" "}
              and broad industry retainer benchmarks tracked by agencies like{" "}
              <a
                href="https://www.webfx.com/digital-marketing/pricing/how-much-does-digital-marketing-cost/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                WebFX
              </a>{" "}
              and{" "}
              <a
                href="https://www.wordstream.com/blog/2018/01/24/digital-marketing-costs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                WordStream
              </a>
              . Pricing varies widely by scope and ad spend; treat the range as orientation, not a quote.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="Methodology"
          heading="How we picked these five."
          intro={
            <>
              Picking five agencies out of the 200-plus on Clutch could have gone a hundred different ways. Here is the
              filter we used so you can replicate or argue with it.
            </>
          }
          variant="wide"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {CRITERIA.map((c) => (
              <div
                key={c.title}
                className="card-surface card-surface-hover p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                  >
                    {c.icon}
                  </span>
                  <h3
                    className="text-[16.5px] sm:text-[17.5px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.title}
                  </h3>
                </div>
                <p
                  className="text-[14.5px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <PostProse>
            <p>
              The five names that passed all four filters: KlientBoost, Ignite Visibility, Coalition Technologies,
              Thrive Internet Marketing Agency, and Lounge Lizard. Honorable mentions that almost made the list and
              would belong on a longer one: Disruptive Advertising, WebFX, Power Digital, and Cardinal Digital
              Marketing. The five we kept give the most useful spread of agency archetypes to compare against.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="The matrix"
          heading="The six agencies at a glance."
          intro={
            <>
              Eight rows, six columns. Every cell is a fact you can check against the agency&rsquo;s own website or its
              public Clutch listing. Detailed profiles are in the next section.
            </>
          }
          variant="wide"
        >
          <div
            className="card-surface overflow-x-auto"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="min-w-[720px]">
              <div
                className="grid items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5"
                style={{
                  gridTemplateColumns: "1.7fr repeat(6, 1fr)",
                  background: "var(--bg)",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "var(--muted)" }}
                >
                  Feature
                </span>
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
                      className="text-[10.5px] sm:text-[11.5px] font-bold leading-tight text-center"
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
                      gridTemplateColumns: "1.7fr repeat(6, 1fr)",
                      borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      background: idx % 2 === 1 ? "var(--bg)" : "transparent",
                    }}
                  >
                    <span
                      className="text-[13px] sm:text-[14px] font-semibold leading-snug"
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
          </div>
          <PostProse>
            <p>
              A few clarifications. &ldquo;Founder on every account&rdquo; means the founder is the strategy lead for
              your engagement, not just the person whose name is on the contract. &ldquo;Built around Irvine SMB
              context&rdquo; is a judgment call: agencies with an Irvine satellite office are marked partial because the
              office exists, but the firm&rsquo;s overall positioning targets a different market. Cells marked partial
              on full-stack mean the agency offers all four disciplines but is publicly identified with one (Lounge
              Lizard with design, KlientBoost with paid).
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="The five, in detail"
          heading="A fair look at each agency."
          intro={
            <>
              About 250 words per agency. Each profile names what they are demonstrably good at, then where our team
              differs. Sources are linked.
            </>
          }
        >
          <div className="space-y-5 sm:space-y-6">
            {PROFILES.map((p) => (
              <article
                key={p.key}
                className="card-surface p-6 sm:p-8"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <header className="flex items-start gap-4 sm:gap-5 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
                    alt={`${p.name} logo`}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="shrink-0 w-10 h-10 rounded-lg"
                    style={{ border: "1px solid var(--border-color)" }}
                  />
                  <div className="min-w-0">
                    <h3
                      className="text-[21px] sm:text-[24px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.name}
                    </h3>
                    <div
                      className="mt-1.5 text-[13px] sm:text-[13.5px] flex flex-wrap gap-x-3 gap-y-1"
                      style={{ color: "var(--muted)" }}
                    >
                      <span><strong style={{ color: "var(--ink)" }}>HQ:</strong> {p.hq}</span>
                      <span aria-hidden>&middot;</span>
                      <span><strong style={{ color: "var(--ink)" }}>Team:</strong> {p.team}</span>
                      <span aria-hidden>&middot;</span>
                      <span>{p.founded}</span>
                    </div>
                  </div>
                </header>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
                      style={{ color: p.color }}
                    >
                      Best for
                    </div>
                    <p
                      className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.bestFor}
                    </p>
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
                      style={{ color: "var(--accent)" }}
                    >
                      How Max Market Pros differs
                    </div>
                    <p
                      className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.differ}
                    </p>
                  </div>
                </div>

                <footer
                  className="mt-5 pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px]"
                  style={{ borderTop: "1px solid var(--border-color)", color: "var(--muted)" }}
                >
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>
                    Sources:
                  </span>
                  {p.sources.map((s, i) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold hover:underline"
                      style={{ color: p.color }}
                    >
                      {s.label}
                      <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                      {i < p.sources.length - 1 ? <span aria-hidden className="ml-2" style={{ color: "var(--border-color)" }}>|</span> : null}
                    </a>
                  ))}
                </footer>
              </article>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="Where we win"
          heading="What Max Market Pros does that the list does not."
          intro={
            <>
              Reading the matrix and the profiles, four things separate our shop from the five agencies above. None of
              them are marketing slogans. They are structural decisions about how the agency is built.
            </>
          }
          variant="wide"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {WINS.map((w) => (
              <div
                key={w.title}
                className="card-surface card-surface-hover p-6 sm:p-7"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                  >
                    {w.icon}
                  </span>
                  <h3
                    className="text-[17px] sm:text-[18.5px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {w.title}
                  </h3>
                </div>
                <p
                  className="text-[14.5px] sm:text-[15px] leading-[1.6] mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  {w.body}
                </p>
                <Link
                  href={w.href}
                  className="inline-flex items-center gap-1 text-[13.5px] font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  {w.cta}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </PostSection>

        <PostBody>
          <PostCallout variant="insight" label="Honest routing">
            <p className="mb-3">
              We will not be the right pick for everyone reading this. Five scenarios where one of the agencies above is
              genuinely a better fit:
            </p>
            <ul className="space-y-2.5">
              {BETTER_FITS.map((b) => (
                <li key={b.fit} className="flex items-start gap-3">
                  <ShieldCheck
                    className="w-4 h-4 mt-1 shrink-0"
                    style={{ color: "var(--accent)" }}
                    strokeWidth={2.4}
                  />
                  <div>
                    <strong style={{ color: "var(--ink)" }}>{b.fit}</strong>
                    <span className="block text-[14.5px] mt-0.5" style={{ color: "var(--muted)" }}>
                      Pick: <strong style={{ color: "var(--ink)" }}>{b.pick}</strong>. {b.why}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14.5px]">
              If your situation is none of those, the next section explains why we might be the right call.
            </p>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="Our approach"
          heading="How Max Market Pros is built."
          intro={
            <>
              Three structural choices that shape every engagement. They are the reason we win for Irvine SMBs and lose
              for enterprises with seven-figure media budgets. Both outcomes are by design.
            </>
          }
        >
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="card-surface card-surface-hover p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {a.icon}
                </span>
                <h3
                  className="text-[16.5px] sm:text-[17.5px] font-bold leading-tight mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.6] mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  {a.body}
                </p>
                <Link
                  href={a.link.href}
                  className="inline-flex items-center gap-1 text-[13px] font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  {a.link.label}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="Decision routing"
          heading="If you need X, pick Y."
          intro={
            <>
              The cleanest summary of the post. Match your top need on the left to the agency on the right. If your
              answer is the last row, we should probably talk.
            </>
          }
        >
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <ul>
              {ROUTING.map((r, idx) => (
                <li
                  key={r.need}
                  className="grid items-center gap-3 sm:gap-5 px-5 sm:px-6 py-4"
                  style={{
                    gridTemplateColumns: "1.5fr 1fr",
                    borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                    background: idx % 2 === 1 ? "var(--bg)" : "transparent",
                  }}
                >
                  <span
                    className="text-[14px] sm:text-[15px] leading-[1.5]"
                    style={{ color: "var(--ink)" }}
                  >
                    {r.need}
                  </span>
                  <span
                    className="text-[13px] sm:text-[14px] font-semibold leading-[1.45] text-right"
                    style={{ color: "var(--accent)" }}
                  >
                    {r.pick}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="Questions Irvine owners actually ask."
          intro={
            <>
              The six questions we get most often when an Irvine business owner is comparing agencies. For more, see our{" "}
              <Link
                href="/resources/faq"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
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
          <AuthorBio />
          <PostProse>
            <p>
              One more thing. We are confident enough in our work to send you to a competitor on the call if that is the
              right answer. The agencies above are well-run businesses with deserved reputations. The question is not
              who is the &ldquo;best,&rdquo; it is who is the best <em>for you</em>. If that turns out to be us, great.
              If it turns out to be one of the five, you still made a good decision and we still helped.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Ready to compare?"
          heading="Get a fair comparison call."
          description="Tell us what you need. If we are the right fit, we will say so. If one of the agencies on this page is a better match for your situation, we will tell you that too."
          primary={{ label: post.ctaService?.label ?? "Schedule a call", href: post.ctaService?.href ?? "/contact" }}
          secondary={{ label: "See our services", href: "/services" }}
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
