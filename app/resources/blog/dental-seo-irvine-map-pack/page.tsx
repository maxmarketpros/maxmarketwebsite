import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  CreditCard,
  Camera,
  Stethoscope,
  Building2,
  Smile,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PostShell, PostSection, PostProse, PostBody } from "@/components/blog/post-shell"
import { PostHero } from "@/components/blog/post-hero"
import { PostCallout } from "@/components/blog/post-callout"
import { StatTrio } from "@/components/blog/stat-trio"
import { FaqAccordion } from "@/components/blog/faq-accordion"
import { PostCta } from "@/components/blog/post-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { ReviewVelocityChart } from "@/components/blog/charts/review-velocity-chart"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "dental-seo-irvine-map-pack"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const NEIGHBORHOOD_NOTES: { name: string; lens: string; reality: string }[] = [
  {
    name: "Woodbridge & Northwood",
    lens: "Families, recurring cleanings",
    reality:
      "The volume engine. General dentists with strong review velocity and pediatric services in the same office dominate here. Map Pack rotates inside Woodbridge Village Center foot traffic.",
  },
  {
    name: "Quail Hill & Turtle Rock",
    lens: "Cosmetic, implants, premium services",
    reality:
      "Higher-LTV procedures: veneers, full-arch implants, sleep dentistry. Patients price-compare less. Ranking is owned by clinics with strong photo libraries and sub-specialty pages.",
  },
  {
    name: "Cypress Village & Stonegate",
    lens: "Young professionals, Invisalign",
    reality:
      "Orthodontic and clear-aligner queries spike here. Many residents are first-time Invisalign shoppers and read 6+ reviews before booking. Bilingual content is high-leverage.",
  },
  {
    name: "University Park & UCI area",
    lens: "Students, faculty, emergency dental",
    reality:
      "Volatile demand around quarter starts and finals. Emergency dental queries spike. Practices that show up for &quot;same-day dental Irvine&quot; punch above their weight here.",
  },
]

const GBP_GAPS: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Sub-specialty services as separate entries",
    body:
      "Add Invisalign, dental implants, root canal, periodontal therapy, sedation dentistry, emergency dental, teeth whitening, and pediatric dentistry as individual Service entries inside GBP. Each is its own ranking surface.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Accepted insurance and financing visibility",
    body:
      "Most Irvine practices accept Delta, Cigna, Aetna, MetLife, Anthem, and offer CareCredit, but never publish that. The AI Overviews now surface insurance match directly in the result. Listing them gets you cited.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Before/after smile photos with consent",
    body:
      "Implant, veneer, and Invisalign before/afters are the highest-engagement photo category in dental GBP profiles. Get HIPAA-compliant consent forms in place and upload monthly. Stock photos depress engagement.",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Owner-seeded Q&A for the obvious questions",
    body:
      "&quot;Do you take my insurance?&quot;, &quot;Do you offer sedation?&quot;, &quot;Do you treat children?&quot;, &quot;Do you have weekend hours?&quot;, &quot;Is parking validated?&quot; If you don&apos;t answer those on your profile, a stranger eventually will, and they will be wrong.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Accurate practice attributes",
    body:
      "Wheelchair accessible, Mandarin / Korean / Farsi / Spanish-speaking staff, women-led, LGBTQ+ friendly, online care, payment plans, free Wi-Fi. These attribute filters route patients to your profile when they apply a filter, and they affect ranking when nothing else differentiates.",
  },
]

const SIX_MONTH_PLAN: { window: string; focus: string; deliverables: string[] }[] = [
  {
    window: "Month 1",
    focus: "Audit and GBP completion",
    deliverables: [
      "All five GBP gaps closed for every location",
      "Insurance, financing, attributes, photos, Q&A seeded",
      "Categories tightened: primary = General Dentist, secondaries for actual sub-specialties only",
    ],
  },
  {
    window: "Month 2",
    focus: "Service pages live",
    deliverables: [
      "One landing page per sub-specialty (Invisalign, implants, emergency, sedation, pediatric)",
      "MedicalProcedure and FAQPage schema on each",
      "Internal links from homepage hero and services hub",
    ],
  },
  {
    window: "Month 3",
    focus: "Review velocity engine",
    deliverables: [
      "SMS automation post-visit via your PMS (Dentrix, Eaglesoft, Open Dental, Curve)",
      "Owner-response template library by procedure",
      "Review prompts that name the provider and the procedure",
    ],
  },
  {
    window: "Month 4",
    focus: "Citations and directories",
    deliverables: [
      "NAP-consistent listings on Healthgrades, Zocdoc, Vitals, Yelp, ADA Find-A-Dentist, 1800Dentist",
      "Insurance carrier provider directories audited and updated",
      "First three Google Posts published",
    ],
  },
  {
    window: "Month 5",
    focus: "Bilingual and emergency queries",
    deliverables: [
      "Korean, Mandarin, and Farsi Q&A entries seeded",
      "Emergency-dentist landing page with after-hours phone tree",
      "Same-day appointment availability surfaced on top pages",
    ],
  },
  {
    window: "Month 6",
    focus: "AI Overview and LSA",
    deliverables: [
      "FAQ schema and pricing transparency on every sub-specialty page",
      "Google Local Services Ads (LSA) verified and live for high-margin procedures",
      "Patient story pages with structured testimonial markup",
    ],
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How long does dental SEO actually take in Irvine?",
    answer:
      "GBP optimization moves Map Pack rank inside 30 to 60 days. Sub-specialty service pages take 90 to 180 days to mature. Review velocity is the slow-burn lever: month 1 is invisible, month 3 is when the star average shifts, month 6 is when you stop competing on volume. Plan in quarters.",
  },
  {
    question: "Should I have one website or one per location?",
    answer:
      "One website, one location page per office. Each location page has its own URL, its own embedded map, its own reviews, its own provider list, its own service-area list. Two completely separate domains splits your authority and forces you to do every SEO task twice. The exception: completely different brands or DSO structures with no shared marketing.",
  },
  {
    question: "Do I really need a blog as a dentist?",
    answer:
      "Not the way most agencies sell it. Twelve generic posts on &quot;benefits of flossing&quot; will not move ranking. What does move ranking: deep procedure-specific pages (Invisalign Irvine, dental implants Irvine, sedation dentistry Irvine) that answer real patient questions. Treat them as living pages, not blog posts.",
  },
  {
    question: "Are Google Local Services Ads (LSA) worth it for dentists?",
    answer:
      "Often yes. LSA places you above the Map Pack with a Google Screened badge, and you pay per lead rather than per click. For high-value procedures like implants or full-arch, LSA leads run $80 to $250 per lead in OC and convert at 12 to 20%. The catch: you need a clean GBP and at least 25 to 50 reviews to qualify, which is exactly the foundation this plan builds.",
  },
  {
    question: "What about Healthgrades, Yelp, and Zocdoc?",
    answer:
      "Claim and maintain all three. None of them will out-deliver Google in 2026, but Healthgrades and Zocdoc still send real bookings in dental, and Yelp citations contribute to Google&apos;s local trust calculation. Don&apos;t pay for premium listings unless your tracked numbers show direct booked appointments coming from them.",
  },
  {
    question: "Will a national dental marketing agency outwork a local one?",
    answer:
      "Almost never, for Irvine specifically. National agencies sell a templated playbook that ignores neighborhood-level intent (Woodbridge family vs Quail Hill cosmetic vs Cypress Village Invisalign) and rarely have the bilingual chops to chase Mandarin / Korean / Farsi queries. Local matters in local SEO.",
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
              Beating <span className="accent-underline">60+ Irvine dentists</span> to the top of the Map Pack.
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
                Irvine has roughly <strong>60+ active dental practices</strong> packed into a city of 314,000 people. Per capita, that is one of the densest dental markets in Southern California, which makes Map Pack ranking the difference between a full schedule and an empty operatory.
              </li>
              <li>
                A booked dental patient costs <strong>$300 to $800 through Google Ads</strong> (
                <a
                  href="https://www.wordstream.com/blog/ws/2022/06/30/google-ads-benchmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  Wordstream benchmarks
                </a>
                ). Map Pack patients cost the marginal time of an SMS reply. The math should be obvious.
              </li>
              <li>
                The six-month plan: close five GBP gaps, build one URL per sub-specialty, install a review engine, claim Mandarin / Korean / Farsi search, then layer LSA and AI Overview citation moves.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The market in four numbers"
          heading={<>The shape of Irvine&apos;s dental market.</>}
          intro={
            <>
              Irvine&apos;s demographics make it a strong dental market and a brutal SEO one.{" "}
              <a
                href="https://datausa.io/profile/geo/irvine-ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Median household income is $136,719
              </a>
              , which lifts the average procedure value, but it also pulls in well-funded multi-location competitors. These are the four numbers that frame every decision below.
            </>
          }
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "13794", value: "60+", label: "Dental practices in Irvine", sub: "Per-capita density rivals Beverly Hills" },
              { iconId: "63810", value: "$300–800", label: "PPC cost per booked patient", sub: "Implant / cosmetic skew higher" },
              { iconId: "QNjsAGAlpuNW", value: "44%", label: "Local clicks go to Map Pack", sub: "BrightLocal 2024 click study" },
              { iconId: "63692", value: "4.6★", label: "Average for top-3 Irvine practices", sub: "Below this you stop showing up" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="Where patients search from"
          heading="Four Irvine markets, four ranking fights."
          intro="Irvine&apos;s Map Pack rotates inside 2 to 3 miles. The patient intent in Woodbridge is not the patient intent in Quail Hill, and the practices that win each cluster look very different on paper."
          variant="wide"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {NEIGHBORHOOD_NOTES.map((c) => (
              <div
                key={c.name}
                className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                  >
                    <Smile className="w-4 h-4" strokeWidth={2.2} />
                  </span>
                  <h3 className="text-[16px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                    {c.name}
                  </h3>
                </div>
                <div
                  className="text-[11.5px] font-bold uppercase tracking-[0.07em]"
                  style={{ color: "var(--accent)" }}
                >
                  {c.lens}
                </div>
                <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {c.reality}
                </p>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="The five gaps"
          heading="GBP fields most Irvine dentists ignore."
          intro={
            <>
              We have audited dozens of Irvine dental profiles in the past 18 months. The same five gaps appear over and over. Each one is fixable in an afternoon. Each one materially affects whether you appear in the Map Pack. Pair these with{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO done right
              </Link>{" "}
              and the foundation is set.
            </>
          }
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {GBP_GAPS.map((gap, idx) => (
              <li
                key={gap.title}
                className="card-surface flex gap-4 sm:gap-5 p-5 sm:p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {gap.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-[12px] font-bold tabular-nums"
                      style={{ color: "var(--muted)" }}
                    >
                      Gap 0{idx + 1}
                    </span>
                    <h3
                      className="text-[16px] sm:text-[17.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {gap.title}
                    </h3>
                  </div>
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {gap.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PostSection>

        <PostSection
          pill="One URL per procedure"
          heading={<>The site-structure rule that decides rank.</>}
          intro={
            <>
              The classic Irvine dental site has a /services page that lists 18 procedures in bullet form. That page ranks for &quot;dentist Irvine&quot; (maybe) and nothing else. The fix is the boring one: each sub-specialty gets its own URL, its own H1, its own FAQs, and its own internal links. See the{" "}
              <Link
                href="/services/seo/on-page"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                on-page SEO playbook
              </Link>{" "}
              for the underlying mechanics.
            </>
          }
          variant="wide"
        >
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-7">
            <div
              className="card-surface p-6 flex flex-col gap-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                  style={{ background: "rgba(229,62,62,0.10)", color: "#E53E3E" }}
                >
                  <XCircle className="w-4 h-4" strokeWidth={2.4} />
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#E53E3E" }}
                >
                  Don&apos;t
                </span>
              </div>
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                }}
              >
                /services
                <br />
                <span style={{ color: "var(--muted)" }}>// 18 procedures, one giant bullet list</span>
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• One page cannot rank for 18 different sub-specialties</li>
                <li>• MedicalProcedure schema does not fit a list</li>
                <li>• No room for procedure-specific FAQ schema</li>
                <li>• Reviews never get associated with a specific service</li>
              </ul>
            </div>
            <div
              className="card-surface p-6 flex flex-col gap-4"
              style={{
                borderRadius: "var(--radius-lg)",
                background:
                  "linear-gradient(180deg, rgba(34,160,107,0.04), var(--surface) 40%)",
                borderColor: "rgba(34,160,107,0.30)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                  style={{ background: "rgba(34,160,107,0.14)", color: "#22A06B" }}
                >
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.4} />
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#22A06B" }}
                >
                  Do
                </span>
              </div>
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                }}
              >
                /invisalign-irvine
                <br />
                /dental-implants-irvine
                <br />
                /sedation-dentistry-irvine
                <br />
                /pediatric-dentist-irvine
                <br />
                /emergency-dentist-irvine
                <br />
                /cosmetic-dentistry-irvine
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Each URL targets one keyword cluster</li>
                <li>• Procedure-specific schema and FAQ blocks</li>
                <li>• Per-procedure review snippets</li>
                <li>• Internal hub from /services compounds authority</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="Velocity beats volume"
          heading="Why 10 fresh reviews a month beats 300 stale ones."
          intro={
            <>
              Google&apos;s local algorithm weights review recency. A practice adding 10 reviews per month with named providers and named procedures will outrank a competitor with a 300-review back catalog that has not added one in six months. The pattern is documented in{" "}
              <a
                href="https://whitespark.ca/local-search-ranking-factors-survey/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Whitespark&apos;s annual ranking factors survey
              </a>{" "}
              and we&apos;ve observed it firsthand in every Irvine dental account we manage. For the full engine, read{" "}
              <Link
                href="/resources/blog/google-reviews-conversion-lever-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                our Google Reviews playbook
              </Link>
              .
            </>
          }
          variant="wide"
        >
          <ReviewVelocityChart />
        </PostSection>

        <PostSection
          pill="Insurance and AI Overviews"
          heading="What Google&apos;s AI now pulls into dental results."
          intro={
            <>
              AI Overviews for dental queries now summarize accepted insurance, financing, and emergency availability directly in the result. If those fields are not on your site, you do not get cited. For the broader citation play, see{" "}
              <Link
                href="/resources/blog/ai-search-optimization-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                AI search optimization in 2026
              </Link>
              .
            </>
          }
        >
          <PostProse>
            <p>
              The high-leverage on-page additions for AI Overview citation: a clean &quot;Insurance&quot; section listing every carrier you accept (Delta Dental, Cigna, Aetna, MetLife, Anthem, Humana, Guardian), a &quot;Financing&quot; section explicitly naming CareCredit, Sunbit, in-house payment plans, and a &quot;Same-day appointments&quot; or &quot;Emergency&quot; block with the actual phone tree.
            </p>
            <p>
              Wrap each of those in FAQPage schema. The AI Overviews pulls the answer text directly. Most Irvine dental sites bury this in a PDF or in a chat widget the crawler can&apos;t read. Don&apos;t.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="The bilingual edge"
          heading="The patient cohorts most dentists miss."
          intro={
            <>
              <a
                href="https://www.census.gov/quickfacts/irvinecitycalifornia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                44.6% of Irvine is Asian
              </a>{" "}
              and 51% of residents speak a non-English language at home. The Persian community concentrates in Northwood. Mandarin and Korean speakers concentrate in Cypress Village and around Heritage Plaza. Most dental practices in Irvine have done nothing to claim those queries.
            </>
          }
        >
          <PostProse>
            <p>
              The minimal moves: Mandarin / Korean / Farsi staff attributes on GBP, bilingual Q&amp;A entries in those languages, one or two reviews per month from clients who speak those languages, and a short bilingual block on your homepage. None of this is a full localization project.
            </p>
            <p>
              The full playbook lives in{" "}
              <Link
                href="/resources/blog/bilingual-local-seo-irvine"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                our bilingual local SEO guide for Irvine businesses
              </Link>
              . For dental specifically, it doubles as a referral magnet: families recommend their dentist inside language communities, and the marginal review carries more weight than a third generic English one.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="6-month rollout"
          heading="One sprint per month."
          intro="The whole plan, sequenced. Each row is what should be shipped by the end of that month. The same plan we run for managed Irvine dental accounts."
          variant="wide"
        >
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr style={{ background: "var(--accent-bg)" }}>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Window
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Focus
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Deliverables
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SIX_MONTH_PLAN.map((row, idx) => (
                    <tr
                      key={row.window}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.window}
                      </td>
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--ink)" }}>
                        {row.focus}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        <ul className="space-y-1 list-disc pl-4">
                          {row.deliverables.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="mt-6 px-5 py-4 rounded-xl flex items-start gap-3"
            style={{
              background: "var(--accent-bg)",
              border: "1px solid rgba(22,119,255,0.24)",
            }}
          >
            <span
              className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: "rgba(22,119,255,0.18)", color: "var(--accent)" }}
            >
              <AlertTriangle className="w-4 h-4" />
            </span>
            <div className="flex-1">
              <div
                className="text-[13.5px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                LSA before review velocity is a waste
              </div>
              <p
                className="text-[13px] mt-1 leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Google Local Services Ads (LSA) require a Google Screened badge that depends on review count and average. Practices that turn on LSA in month 1 burn lead budget at low conversion. The order matters: GBP, then pages, then reviews, then LSA.
              </p>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="PPC vs SEO economics"
          heading="When Google Ads makes sense for a dental practice."
          intro={
            <>
              SEO does not replace paid search; it makes paid search profitable. If you are already running{" "}
              <Link
                href="/services/paid-ads/google-ads"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Google Ads
              </Link>
              , your CPC and ROAS both improve when the Map Pack foundation is in place.
            </>
          }
        >
          <PostProse>
            <p>
              A booked patient via Google Ads in the Irvine dental market typically costs $300 to $800 depending on procedure (implants and full-arch skew higher, general cleanings lower). A booked patient via Map Pack costs you the marginal SMS reply time.
            </p>
            <p>
              The right mix for most Irvine practices: a focused LSA spend on the two or three highest-margin procedures (implants, Invisalign, full-arch), and SEO carrying the volume of general dentistry and pediatric. Re-balance as Map Pack share grows. For the Irvine-specific Google Ads cost picture, see{" "}
              <Link
                href="/resources/blog/google-ads-irvine-cost-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                our 2026 cost guide
              </Link>
              .
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="Questions Irvine dental owners ask us."
          intro={
            <>
              The six we hear most often. For broader local mechanics, see{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO
              </Link>{" "}
              or the{" "}
              <Link
                href="/industries/medical"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                medical industries page
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
              Sixty-plus practices fighting for the same Map Pack feels like a wall. It is not. The dentists who win Irvine are not the ones who outspend; they are the ones who close the five GBP gaps, ship one URL per procedure, and run the review engine relentlessly. Once that foundation is in, an LSA budget at $40 to $80 per lead becomes the cheapest growth lever you have.{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Want us to audit your practice
              </Link>
              ? It&apos;s free and takes 24 hours.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Map Pack on autopilot"
          heading="The chair fills faster when the Map Pack works."
          description="We audit your dental GBP, ship the sub-specialty pages, install the review engine, and tune your LSA spend. Monthly reporting that ties rank to booked appointments, not vanity metrics."
          primary={{ label: post.ctaService?.label ?? "See local SEO", href: post.ctaService?.href ?? "/services/seo/local" }}
          secondary={{ label: "Get a free audit", href: "/contact" }}
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
