import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Camera,
  Layers,
  Megaphone,
  MessagesSquare,
  Tag,
  CalendarCheck,
  Globe,
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

const SLUG = "irvine-med-spa-seo-map-pack"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const GBP_GAPS: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Treatment-level services (not just \"med spa\")",
    body:
      "Add every individual treatment as a Service inside GBP: Botox, dysport, dermal filler, Morpheus8, IPL, laser hair removal, hydrafacial, microneedling, IV therapy. Each one is a separate ranking opportunity.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Geo-tagged photos uploaded weekly",
    body:
      "Five fresh photos a week, taken on a phone inside your suite. Google reads EXIF timestamps and location data as a freshness signal. Stock images do nothing.",
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Owner-seeded Q&A",
    body:
      "If you don't pre-load 8 to 12 Q&A entries on your own profile, competitors and randos will. Seed: pricing ranges, what to expect, downtime, parking, payment plans, Spanish-speaking staff.",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Google Posts on a weekly cadence",
    body:
      "Posts decay after seven days. A quiet profile reads as a closed business. Push one offer or update per week, with a real photo, not the canva template the prior agency left behind.",
  },
  {
    icon: <Tag className="w-5 h-5" />,
    title: "Service descriptions with price ranges",
    body:
      "Each service field accepts up to 300 characters and a price range. Most clinics leave these blank. Filling them out is one of the cheapest ranking moves you'll ever make.",
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "Reserve with Google booking link",
    body:
      "Connect Vagaro, Boulevard, GlossGenius, or your booking platform so prospects can book without leaving the search result. Lower friction reads to Google as a higher-quality result.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Attributes that match your audience",
    body:
      "Women-led, LGBTQ+ friendly, wheelchair accessible, Mandarin-speaking staff, Korean-speaking staff. These attribute checkboxes affect both ranking and which filters your business appears under.",
  },
]

const CLUSTER_NOTES: { name: string; lens: string; reality: string }[] = [
  {
    name: "Spectrum & IBC",
    lens: "Corporate workforce, lunch-hour Botox",
    reality:
      "High intent for fast in-and-out services. Compete on \"Botox near Irvine Spectrum\" and \"lunch-hour med spa\" queries. Office park traffic, not weekend traffic.",
  },
  {
    name: "Quail Hill & UTC",
    lens: "Boutique wellness, premium aesthetics",
    reality:
      "The cohort that price-shops the least. Filler, Morpheus8, lasers. Quail Hill Shopping Center foot traffic is your halo, but ranking is owned by clinics with the best photo libraries.",
  },
  {
    name: "Woodbridge & Northwood",
    lens: "Family-adjacent, value-conscious",
    reality:
      "Mom-and-friend referrals decide a lot of bookings here. Reviews mention names and procedures. Google reads that pattern and treats your profile as more topically relevant for repeat-buyer queries.",
  },
]

const NINETY_DAY_PLAN: { window: string; focus: string; deliverables: string[] }[] = [
  {
    window: "Weeks 1-2",
    focus: "Audit + GBP completion",
    deliverables: [
      "All seven GBP gaps closed for every location",
      "Categories, attributes, hours, holiday hours, service area set",
      "Service entries built out per treatment, with descriptions and price ranges",
    ],
  },
  {
    window: "Weeks 3-4",
    focus: "Treatment-page build",
    deliverables: [
      "One landing page per ranked treatment (5 to 8 pages)",
      "Schema markup for MedicalProcedure and FAQPage on each",
      "Internal links from homepage and footer hub",
    ],
  },
  {
    window: "Weeks 5-6",
    focus: "Review velocity engine",
    deliverables: [
      "SMS automation through your booking platform (post-visit, 90-minute delay)",
      "Owner-response template library by treatment",
      "Review-mention prompts that name the injector or technician",
    ],
  },
  {
    window: "Weeks 7-8",
    focus: "Citations + photo cadence",
    deliverables: [
      "NAP-consistent listings on RealSelf, Vagaro Marketplace, Allergan AllÄ“, Galderma directory",
      "Weekly photo upload, geo-tagged from the suite",
      "First three Google Posts published",
    ],
  },
  {
    window: "Weeks 9-10",
    focus: "Bilingual + Q&A",
    deliverables: [
      "Korean and Mandarin Q&A entries seeded",
      "Bilingual landing pages (only if you have bilingual staff)",
      "Review prompts in the customer's chosen language",
    ],
  },
  {
    window: "Weeks 11-12",
    focus: "AI Overview citation play",
    deliverables: [
      "Structured FAQ sections on every treatment page",
      "Pricing transparency block (range, financing, packages)",
      "Press mentions or local-news pickup wherever possible",
    ],
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How long does med spa SEO actually take in Irvine?",
    answer:
      "GBP optimization shifts the Map Pack within 30 to 60 days. Treatment pages need 90 to 120 days to mature for organic. Review velocity compounds: month 1 is invisible, month 3 is when your star average and click-through both move. Plan in quarters, not weeks.",
  },
  {
    question: "Do Mandarin or Korean reviews actually help my ranking?",
    answer:
      "Yes, but indirectly. Google does not boost rankings for non-English reviews per se, but reviews in the language a searcher is using create stronger topical matches when that searcher queries in that language. In Irvine, where 30.5% of residents speak an Asian language at home, those queries are happening. A Mandarin-speaking Quail Hill resident searching for a Botox provider will see profiles with Mandarin reviews surface first.",
  },
  {
    question: "Should I list every injectable as a separate Service in GBP?",
    answer:
      "Yes. Each Service entry is a separate ranking surface. Botox, Dysport, Jeuveau, Xeomin, Daxxify, Restylane, Juvederm, RHA, Sculptra, each one gets its own entry with its own description and price range. You can do this in 30 minutes and most Irvine med spas have not.",
  },
  {
    question: "Is the Reserve with Google booking link worth turning on?",
    answer:
      "Almost always. The friction reduction lifts conversion 15 to 30% on average for service businesses, and Google reads the booking link as a quality signal that affects ranking. The one case where you might skip it: very high-priced procedures (deep plane facelifts, body contouring packages) where you need a consultation gate before booking.",
  },
  {
    question: "I have two locations. Should I have one site or two?",
    answer:
      "One site, two location pages. Each location page should have its own URL, its own GBP-matched NAP, its own embedded map, its own reviews widget, and its own service-area list. Two completely separate domains splits your authority and is one of the most common mistakes we see Irvine multi-location practices make.",
  },
  {
    question: "Will Newport Beach plastic surgery practices outrank me forever?",
    answer:
      "No. Plastic surgery and med spa are different categories in Google's classification, and the Map Pack respects that boundary. You will not outrank a Newport Beach plastic surgeon on \"plastic surgeon\" queries, nor should you try. You will outrank them on \"Botox near me,\" \"laser hair removal Irvine,\" and \"med spa near Spectrum\" if your GBP is more complete and your review velocity is higher.",
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
              Why Irvine med spas lose to <span className="accent-underline">Newport Beach</span>, and the 90-day fix.
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
                There are <strong>more than 30 med spas inside a 7-mile radius</strong> of the Irvine Spectrum, and most are losing organic share to a smaller cluster of Newport Beach practices that simply run better Google Business Profiles.
              </li>
              <li>
                The Map Pack drives roughly <strong>44% of clicks on local queries</strong> (
                <a
                  href="https://www.brightlocal.com/research/local-consumer-search-behavior-study/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  BrightLocal, 2024
                </a>
                ). If you are not in those three spots, paid search has to compensate, and Botox-adjacent clicks run <strong>$75 to $150 each</strong>.
              </li>
              <li>
                The 90-day playbook is not flashy. Close seven specific GBP gaps, build one URL per treatment, install a review-velocity engine, and pick up the Mandarin / Korean / Farsi search that most Irvine clinics ignore entirely.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The market in four numbers"
          heading={<>The shape of Irvine&apos;s aesthetic market.</>}
          intro={
            <>
              Irvine&apos;s 314,000 residents skew <a
                href="https://datausa.io/profile/geo/irvine-ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >affluent and educated</a>, with a median household income of $136,719. That demographic spends on aesthetic services, but it also shops carefully. These four numbers explain why Map Pack rank decides whose phone rings.
            </>
          }
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "13794", value: "30+", label: "Med spas in a 7-mile radius", sub: "Spectrum to Quail Hill to Northwood" },
              { iconId: "63810", value: "$75–150", label: "Typical Botox-adjacent CPC", sub: "OC market, 2026 benchmarks" },
              { iconId: "QNjsAGAlpuNW", value: "44%", label: "Local clicks go to Map Pack", sub: "BrightLocal 2024 click study" },
              { iconId: "63692", value: "4.7★", label: "Avg star of top-3 Irvine spas", sub: "Below this you are invisible" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The Newport Beach problem"
          heading="Why Fashion Island feels like a wall."
          intro={
            <>
              Newport Beach has roughly half Irvine&apos;s population but a heavier concentration of legacy aesthetic practices around Fashion Island and Newport Coast. Many were optimizing GBPs and stacking reviews before Irvine&apos;s newer clinics opened. The result: when someone in Irvine searches a generic aesthetic query without a city modifier, Newport Beach pulls into the Map Pack from across the 73.
            </>
          }
        >
          <PostProse>
            <p>
              You are not going to outrank a 12-year Newport Coast plastic surgery practice on &quot;plastic surgeon Orange County.&quot; That is fine. You do not need to. The queries that put butts in chairs at an Irvine med spa are not those head terms. They are: <em>Botox Irvine Spectrum</em>, <em>laser hair removal Quail Hill</em>, <em>Morpheus8 near UTC</em>, <em>med spa with Mandarin-speaking staff Irvine</em>.
            </p>
            <p>
              Those queries reward a complete <Link href="/services/seo/local" style={{ color: "var(--accent)" }} className="font-semibold hover:underline">local SEO foundation</Link>, not a 12-year domain. They reward fresh photos, weekly Google Posts, and reviews that name the injector. That is winnable in 90 days. The Newport Beach domain authority is irrelevant for them.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="The cluster map"
          heading="Three Irvine markets, three SEO fights."
          intro="Irvine is not one search market. The Map Pack rotates inside 2 to 3 miles. Each cluster has a different competitive dynamic and a different mix of dominant treatments."
          variant="wide"
        >
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {CLUSTER_NOTES.map((c) => (
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
                    <Layers className="w-4 h-4" strokeWidth={2.2} />
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
          pill="The seven gaps"
          heading="GBP fields most Irvine spas leave empty."
          intro={
            <>
              We have audited roughly 40 Irvine med spa profiles over the past 18 months. The same seven gaps show up over and over. Closing them lifts Map Pack visibility before you spend a dollar on backlinks. This is the cheapest hour of work you will ever do on your{" "}
              <a
                href="https://support.google.com/business/answer/3038177"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Google Business Profile
              </a>
              .
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
          pill="One URL per treatment"
          heading={<>The single biggest on-page mistake.</>}
          intro={
            <>
              The most common Irvine med spa site has a single &quot;Services&quot; page that lists 14 treatments in bullet form, then asks the visitor to call. That page will rank for nothing competitive. The fix is the boring one: one URL per treatment, with its own H1, photos, FAQs, and reviews. Pair it with{" "}
              <Link
                href="/services/seo/on-page"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                on-page SEO done right
              </Link>{" "}
              and the structure compounds.
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
                <span style={{ color: "var(--muted)" }}>// 14 treatments crammed onto one page</span>
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• No page can target 14 competing keywords</li>
                <li>• Schema cannot describe 14 procedures coherently</li>
                <li>• Internal anchor text becomes meaningless</li>
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
                /botox-irvine
                <br />
                /dermal-filler-irvine
                <br />
                /morpheus8-irvine
                <br />
                /laser-hair-removal-irvine
                <br />
                /hydrafacial-irvine
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Each URL targets one keyword cluster</li>
                <li>• MedicalProcedure schema fits one procedure</li>
                <li>• Internal links from /services hub compound</li>
                <li>• Each page accumulates its own review snippets</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="Velocity beats volume"
          heading="Why 8 reviews a month outranks 200 stale ones."
          intro={
            <>
              Google&apos;s local algorithm weights review recency heavily, a pattern documented in{" "}
              <a
                href="https://whitespark.ca/local-search-ranking-factors-survey/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Whitespark&apos;s annual local-search ranking factors study
              </a>
              . A clinic adding 8 reviews per month with named injectors and named treatments will outrank a competitor with 200 lifetime reviews that has not added one in six months. Build the engine; for the full mechanics see{" "}
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
          pill="The bilingual edge"
          heading="The audience nobody is writing for."
          intro={
            <>
              Irvine is <a
                href="https://www.census.gov/quickfacts/irvinecitycalifornia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >44.6% Asian</a>, and 30.5% of residents speak an Asian language at home (
              <a
                href="https://datausa.io/profile/geo/irvine-ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >Data USA</a>). Most med spa websites in Irvine are English-only. The few that have even a Mandarin or Korean service description pull queries the competitors never see.
            </>
          }
        >
          <PostProse>
            <p>
              The high-leverage moves are not full translation projects. They are: a Mandarin Service description inside GBP, a paragraph of bilingual copy on your top two treatment pages, a request for Korean reviews from Korean-speaking clients, and a Q&amp;A entry that asks &quot;do you have Mandarin-speaking staff?&quot; in both languages.
            </p>
            <p>
              We have an entire post on this:{" "}
              <Link
                href="/resources/blog/bilingual-local-seo-irvine"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                the bilingual search edge most Irvine businesses miss
              </Link>
              . For med spas specifically, it doubles as a positioning move: the Quail Hill and Cypress Village cohort is high-LTV and underserved.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="90-day rollout"
          heading="Six two-week sprints."
          intro="The whole plan, sequenced. Each window is two weeks. Each row is what should be shipped by the end of that window. The same plan we run for managed Irvine accounts."
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
                  {NINETY_DAY_PLAN.map((row, idx) => (
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
                Resist the temptation to skip ahead
              </div>
              <p
                className="text-[13px] mt-1 leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Almost every med spa we meet wants to start with backlinks or a paid Botox campaign. Don&apos;t. Until the GBP gaps and treatment pages are shipped, every dollar of ad spend lands on a profile that converts at a fraction of the rate it should.
              </p>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="PPC vs SEO"
          heading="When Google Ads actually makes sense."
          intro={
            <>
              SEO is not a substitute for paid search; it is the foundation that makes paid search profitable. If you are already spending on{" "}
              <Link
                href="/services/paid-ads/google-ads"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Google Ads
              </Link>
              , your CPC and ROAS will both move when the organic foundation is solid.
            </>
          }
        >
          <PostProse>
            <p>
              A typical &quot;Botox near me&quot; click in the Irvine market runs $75 to $150 (
              <a
                href="https://www.wordstream.com/blog/ws/2022/06/30/google-ads-benchmarks"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Wordstream industry benchmarks
              </a>
              , adjusted for OC market premium). If your landing page converts at 4%, that is $1,875 to $3,750 per booked patient before LTV. A Map Pack lead, by contrast, costs you the marginal time of an SMS reply.
            </p>
            <p>
              The right move for most Irvine med spas: a small, focused Google Ads spend on the two or three highest-margin treatments (Morpheus8, body contouring), and SEO carrying the volume of Botox / filler / laser. The mix should evolve as the Map Pack share grows. For Irvine-specific cost benchmarks, see{" "}
              <Link
                href="/resources/blog/google-ads-irvine-cost-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                our 2026 Google Ads cost guide
              </Link>
              .
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="Questions Irvine med spa owners ask us."
          intro={
            <>
              The six we hear most often. For broader local SEO mechanics, see our{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO service
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
              The med spa market in Irvine is winnable, but not by waiting for word of mouth to catch you up to the legacy Newport Beach practices. The shortcut is not a shortcut: close the GBP gaps, ship the treatment pages, install the review engine, claim the bilingual queries, and let the 90-day plan do what it does. Once the foundation is in, the Google Ads dollars you do spend will work several times harder. If you want a hand,{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                we audit Irvine med spas for free
              </Link>
              .
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Map Pack on autopilot"
          heading="Stop renting clicks. Own the Map Pack."
          description="We audit your Irvine med spa GBP, build the treatment pages, install the review engine, and report on Map Pack share every month. No long contracts, no jargon."
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
