import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  XCircle,
  Globe,
  MessagesSquare,
  Languages,
  MapPin,
  Code,
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

const SLUG = "bilingual-local-seo-irvine"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const NEIGHBORHOOD_LANGS: { name: string; languages: string; demand: string }[] = [
  {
    name: "Diamond Jamboree / Heritage Plaza",
    languages: "Mandarin, Korean, Taiwanese Mandarin",
    demand: "Restaurants, dessert cafes, bakeries, beauty salons, optometry, pharmacies. The densest Asian-cuisine cluster in OC.",
  },
  {
    name: "Northwood",
    languages: "Farsi (Persian)",
    demand: "Persian groceries, restaurants, doctors, attorneys, real estate agents. Nowruz creates a real seasonal demand window.",
  },
  {
    name: "Cypress Village & Stonegate",
    languages: "Mandarin, Korean",
    demand: "Young professional families. Dentists, pediatricians, tutors, real estate, dental & orthodontic.",
  },
  {
    name: "UCI / University Town Center",
    languages: "Mandarin, Korean, Vietnamese, Spanish",
    demand: "International student demand: housing, banking, mobile, food delivery. Demand spikes around the 10-week quarter cycle.",
  },
  {
    name: "Quail Hill",
    languages: "Mandarin, Korean",
    demand: "Boutique wellness, premium retail, med spas. The cohort with the highest LTV and the lowest price sensitivity.",
  },
  {
    name: "Woodbridge",
    languages: "Mandarin, Spanish",
    demand: "Family services, schools, dentists, pediatricians. Long-tenure households, high referral velocity.",
  },
]

const INDUSTRY_BY_LANG: { industry: string; mandarin: string; korean: string; vietnamese: string; farsi: string }[] = [
  { industry: "Restaurants", mandarin: "★★★", korean: "★★★", vietnamese: "★★", farsi: "★★ (Northwood)" },
  { industry: "Med spas / aesthetics", mandarin: "★★★", korean: "★★", vietnamese: "★", farsi: "★ (Northwood)" },
  { industry: "Dental / orthodontic", mandarin: "★★", korean: "★★", vietnamese: "★", farsi: "★★ (Northwood)" },
  { industry: "Real estate", mandarin: "★★★", korean: "★★", vietnamese: "★★", farsi: "★★" },
  { industry: "Tutoring / education", mandarin: "★★★", korean: "★★★", vietnamese: "★", farsi: "★" },
  { industry: "Auto / repair", mandarin: "★", korean: "★", vietnamese: "★★", farsi: "★" },
  { industry: "Attorneys (immigration, family)", mandarin: "★★", korean: "★★", vietnamese: "★★", farsi: "★★★" },
]

const SPRINT_STEPS: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Set GBP attributes for language(s) you actually speak",
    body:
      "Mandarin-speaking staff, Korean-speaking staff, Farsi-speaking staff, Vietnamese-speaking staff. The attribute checkbox affects Google&apos;s &quot;speaks ___&quot; filter and ranking. Set it only if it&apos;s true; Google has gotten very good at detecting false claims.",
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Seed Q&A entries in the target language",
    body:
      "Pre-load 4 to 6 Q&A pairs in Mandarin / Korean / Farsi on your own profile. &quot;Do you have Mandarin-speaking staff?&quot; in both languages is the highest-impact one. If you don&apos;t seed, a stranger will.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Build one bilingual landing page, not a full translation",
    body:
      "Start with /menu-zh, /services-ko, or /implants-fa. One page, one language. Don&apos;t commit to full-site translation unless you have a translator on retainer. Google does not penalize a single bilingual page; it does penalize abandoned half-translations.",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Add hreflang the right way",
    body:
      "Use hreflang tags only when you have a dedicated URL per language. Tagging your English page as both en and zh-CN is the classic mistake. The setup is in the hreflang section below.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Ask for reviews in the customer&apos;s preferred language",
    body:
      "Your POS or booking platform knows the customer&apos;s language. Send the review prompt in that language. Reviews in non-English languages count fully, and they pull queries in that language.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "List in the right ethnic directories",
    body:
      "World Journal (Chinese), Korea Daily, Sing Tao, Iran Times. These send actual traffic and Google reads them as relevant citations. Most national SEO tools never check them.",
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Will Google penalize me for duplicate content in different languages?",
    answer:
      "No. Google has stated repeatedly that translated content is not duplicate content. The condition is that you mark the relationship correctly with hreflang tags (or self-referencing canonicals when you intentionally serve different languages at different URLs). Don&apos;t machine-translate the same content into 12 languages and dump it on one URL; that is what gets flagged.",
  },
  {
    question: "Should I hire a Mandarin-speaking receptionist before doing any of this?",
    answer:
      "Not necessarily. The first three steps (GBP attribute, Q&A entries, single bilingual landing page) work even if your front desk is English-only, as long as you have any staff member fluent enough to answer a follow-up call. Don&apos;t set the language attribute if you can&apos;t actually serve those customers; that is a customer-experience disaster and a review-risk amplifier.",
  },
  {
    question: "Does Google translate my Mandarin reviews automatically?",
    answer:
      "Google shows a &quot;translate&quot; toggle to readers but does not internally translate the review for ranking purposes. The review counts as a Mandarin review and contributes to ranking for Mandarin queries. That is the entire point: you do not need an English version of a Mandarin review to benefit from it.",
  },
  {
    question: "What about Farsi for the Persian community in Northwood?",
    answer:
      "Underrated angle. Irvine&apos;s Persian community concentrates around Northwood and is one of the largest in the U.S. outside Los Angeles. There are very few Irvine service businesses with any Farsi-language content. A simple Farsi landing page for an attorney, dentist, or real estate agent typically faces no real local competition.",
  },
  {
    question: "Should I get a separate Google Business Profile for each language?",
    answer:
      "No. One business location, one Google Business Profile. The profile has a single primary language but supports multiple language reviews and bilingual Q&A natively. Two GBPs for the same physical location is a policy violation and will eventually be merged or suspended.",
  },
  {
    question: "Does any of this matter for AI Overviews?",
    answer:
      "Yes. Google&apos;s AI Overviews answer queries in the language of the query. A Mandarin query returns a Mandarin answer, often citing Mandarin source material. Businesses with bilingual pages and bilingual reviews are pulled in as citations; English-only competitors are not. The advantage compounds as AI Overviews mature.",
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
              The <span className="accent-underline">bilingual search edge</span> most Irvine businesses miss.
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
                <strong>51% of Irvine residents speak a non-English language at home</strong> (
                <a
                  href="https://www.census.gov/quickfacts/irvinecitycalifornia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  U.S. Census QuickFacts
                </a>
                ). 30.5% speak an Asian language. 11.5% speak an Indo-European language. Almost no Irvine agency builds for that.
              </li>
              <li>
                You do not need a full-site translation. The high-leverage moves are: one bilingual landing page, GBP language attributes set correctly, owner-seeded Q&amp;A in the target language, and reviews collected in the customer&apos;s preferred language.
              </li>
              <li>
                The keyword competition for &quot;[service] [Mandarin / Korean / Farsi] Irvine&quot; is essentially zero. Most ranking pages for those queries are auto-translated competitors with worse copy than yours will be.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The market in four numbers"
          heading="The Irvine multilingual baseline."
          intro={
            <>
              The premise of every section below is these four numbers. They are pulled from the most recent{" "}
              <a
                href="https://www.census.gov/quickfacts/irvinecitycalifornia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Census QuickFacts
              </a>{" "}
              and{" "}
              <a
                href="https://datausa.io/profile/geo/irvine-ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Data USA
              </a>{" "}
              for Irvine.
            </>
          }
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "11901", value: "51%", label: "Speak non-English at home", sub: "Among Irvine residents 5+" },
              { iconId: "31016", value: "30.5%", label: "Speak an Asian language", sub: "Mandarin, Korean, Vietnamese, others" },
              { iconId: "13794", value: "44.6%", label: "Asian demographic", sub: "Irvine population, 2024 estimate" },
              { iconId: "63810", value: "$136k", label: "Median household income", sub: "~2x the U.S. median" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The neighborhood map"
          heading="Where each language actually wins."
          intro={
            <>
              Bilingual SEO is not citywide. The demand is concentrated in specific clusters, and the highest-leverage move is to match the language of your landing pages and reviews to the cluster your customers actually come from. Pair this with{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO
              </Link>{" "}
              for the foundation.
            </>
          }
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
                      Neighborhood
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Languages with real demand
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Service categories
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {NEIGHBORHOOD_LANGS.map((row, idx) => (
                    <tr
                      key={row.name}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.name}
                      </td>
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--ink)" }}>
                        {row.languages}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        {row.demand}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="GBP language settings"
          heading="What Google does and doesn&apos;t translate."
          intro="The single biggest misconception we hear: that Google Business Profile automatically translates your listing to whatever language the searcher is using. It does not."
        >
          <PostProse>
            <p>
              GBP has one primary language per profile. Your business name, description, and Service entries display in that language. Google may add a &quot;Translate&quot; button for the reader, but the underlying content does not change, and queries in other languages do not match your content for ranking purposes unless you provide that content explicitly somewhere Google can index, on your website or in user-generated reviews.
            </p>
            <p>
              What this means in practice: a Mandarin search for &quot;牙医 Irvine&quot; (Mandarin for &quot;dentist Irvine&quot;) preferentially returns Map Pack results from profiles whose ecosystem (website, reviews, Q&amp;A) contains Mandarin content. English-only competitors lose those queries.
            </p>
            <p>
              The fix is not to switch your GBP primary language. It is to add Mandarin Q&amp;A, collect Mandarin reviews, publish at least one Mandarin landing page, and use hreflang to mark the relationship between language versions. The next section is the implementation.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="Language by industry"
          heading="Which languages move which verticals."
          intro="Not every business needs every language. The matrix below ranks each language by how meaningfully it moves search demand for that vertical in Irvine specifically. Three stars: a defensible competitive edge. One star: nice-to-have."
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
                      Industry
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Mandarin
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Korean
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Vietnamese
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Farsi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {INDUSTRY_BY_LANG.map((row, idx) => (
                    <tr
                      key={row.industry}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.industry}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        {row.mandarin}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        {row.korean}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        {row.vietnamese}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        {row.farsi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The hreflang setup"
          heading="Bilingual pages without tanking English SEO."
          intro={
            <>
              The most common mistake we audit: two language versions of the same page, no hreflang, both indexed, both ranking for the wrong queries. Google&apos;s own{" "}
              <a
                href="https://developers.google.com/search/docs/specialty/international/localized-versions"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                hreflang documentation
              </a>{" "}
              is unusually clear; the setup below is the version that works for a typical Irvine service business with English + one secondary language. For the underlying technical mechanics, see{" "}
              <Link
                href="/services/seo/technical"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                technical SEO done right
              </Link>
              .
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
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                }}
              >
{`<!-- on /services -->
<link rel="alternate"
      hreflang="en"
      href="/services" />
<link rel="alternate"
      hreflang="zh-CN"
      href="/services" />`}
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Same URL tagged for both languages</li>
                <li>• No actual Mandarin content at the URL</li>
                <li>• Google ignores or downgrades the signal</li>
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
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                }}
              >
{`<!-- on /services -->
<link rel="alternate"
      hreflang="en"
      href="/services" />
<link rel="alternate"
      hreflang="zh"
      href="/services-zh" />
<link rel="alternate"
      hreflang="x-default"
      href="/services" />

<!-- on /services-zh -->
<link rel="alternate"
      hreflang="en"
      href="/services" />
<link rel="alternate"
      hreflang="zh"
      href="/services-zh" />`}
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Distinct URLs for distinct languages</li>
                <li>• Each page references the other (bidirectional)</li>
                <li>• x-default tells Google what to serve when in doubt</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The 6-step sprint"
          heading="What to ship first."
          intro="The full plan, sequenced. Six steps, two weeks each if you outsource translation, one week each if you have an in-house translator. The same sequence we run for managed Irvine bilingual accounts."
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {SPRINT_STEPS.map((step, idx) => (
              <li
                key={step.title}
                className="card-surface flex gap-4 sm:gap-5 p-5 sm:p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {step.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className="text-[12px] font-bold tabular-nums"
                      style={{ color: "var(--muted)" }}
                    >
                      Step 0{idx + 1}
                    </span>
                    <h3
                      className="text-[16px] sm:text-[17.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PostSection>

        <PostSection
          pill="AI Overview implications"
          heading="Why this matters more in 2026."
          intro={
            <>
              AI Overviews respond in the language of the query and prefer content in that language for citation. The competitive advantage of bilingual content compounds as AI Overviews mature. For the broader citation play, see{" "}
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
              An Irvine resident searching in Mandarin for &quot;Irvine 牙医 推荐&quot; (recommended dentist Irvine) sees an AI Overview built from Mandarin-language pages and reviews. The two or three businesses that have any Mandarin content at all win the citation. The rest do not exist for that query.
            </p>
            <p>
              The cost of getting in is low. A 600-word Mandarin landing page and ten Mandarin reviews put you in a citation pool of three to five businesses. As AI Overviews surface more aggressively, that advantage stretches.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="The bilingual questions we get most."
          intro={
            <>
              The six we hear most often when Irvine business owners discover the bilingual angle. For the broader local foundation, see{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO
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
              The bilingual edge is not exotic SEO. It is one bilingual landing page, six Q&amp;A entries, an attribute checkbox, and a review request in the customer&apos;s preferred language. Most Irvine agencies do not pitch this because most do not have the language coverage to support it. If you serve a Mandarin, Korean, Farsi, or Vietnamese customer base in any meaningful share, the keyword landscape is open. Now is when to take it.{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                We do this work in-house
              </Link>
              .
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Bilingual local SEO"
          heading="Claim the search nobody else is fighting for."
          description="We build the bilingual landing pages, seed multilingual Q&amp;A, collect reviews in your customers&apos; languages, and wire up hreflang the right way. One language at a time."
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
