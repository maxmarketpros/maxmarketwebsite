import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  Building2,
  Cpu,
  Search,
  MessagesSquare,
  Sparkles,
  Linkedin,
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

const SLUG = "b2b-saas-seo-irvine-spectrum"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const ECOSYSTEM_CARDS: { name: string; lens: string; reality: string }[] = [
  {
    name: "Irvine Spectrum + Spectrum Terrace",
    lens: "Anchor tech tenants, enterprise SaaS",
    reality:
      "Where the bigger checks live. Spectrum and Spectrum Terrace host a heavy share of Irvine&apos;s 400+ tech companies. The neighborhood matters for hiring brand and for &quot;[your category] Irvine Spectrum&quot; queries from local enterprise buyers.",
  },
  {
    name: "Irvine Business Complex (IBC)",
    lens: "Series A to Series C, dense talent pool",
    reality:
      "The startup gravity well. Companies like Kajabi, Acorns, and dozens of less-known SaaS teams cluster across the IBC office parks. Talent pool is also a search-intent driver: candidates research employers via brand search.",
  },
  {
    name: "UCI Beall Applied Innovation",
    lens: "Pre-seed to seed, R&amp;D adjacency",
    reality:
      "Beall and the Cove ecosystem. Pre-seed founders, university spin-outs, defense-adjacent research. Lower volume but high signal: founders here often have research credibility AI Overviews now surface in citation.",
  },
  {
    name: "John Wayne / Newport adjacent",
    lens: "PE-backed, growth-stage, exit-stage",
    reality:
      "Quieter, but a heavier concentration of PE-backed B2B platforms and recent acquirers. Decision-maker queries here are diligence-driven and very citation-sensitive in AI Overview answers.",
  },
]

const CONTENT_MODES: { mode: string; intent: string; example: string }[] = [
  {
    mode: "Buyer-question pages",
    intent: "Informational, top of funnel",
    example: "&quot;How do CFOs at Series-A SaaS companies forecast cash runway?&quot;",
  },
  {
    mode: "Vendor-comparison pages",
    intent: "Commercial, mid-funnel",
    example: "&quot;[You] vs [Competitor]&quot; and &quot;[You] alternatives&quot;",
  },
  {
    mode: "Programmatic landing pages",
    intent: "Commercial, mid-funnel",
    example: "&quot;Best [category] for [persona] in [industry]&quot; templated at scale",
  },
  {
    mode: "Use-case stories",
    intent: "Commercial, bottom funnel",
    example: "Customer story with named integration, named workflow, named ROI",
  },
  {
    mode: "Programmatic glossary",
    intent: "AEO citation, top of funnel",
    example: "Definitional pages built to be the source LLMs cite for a term",
  },
]

const ROADMAP: { stage: string; goal: string; investments: string[] }[] = [
  {
    stage: "Seed (months 0-6)",
    goal: "Existence + AEO foundation",
    investments: [
      "Homepage + 5 to 10 pillar pages around your core category",
      "Programmatic glossary: 20 to 40 definitional pages for terms LLMs cite",
      "FAQ schema on every page; HowTo schema where it fits",
      "Founder + technical lead bylines, with Person + Organization schema",
    ],
  },
  {
    stage: "Series A (months 6-18)",
    goal: "Buyer-question coverage + vendor-comparison entry",
    investments: [
      "30 to 60 buyer-question pages mapped to a real query tree",
      "&quot;You vs Competitor&quot; comparison pages (objective tone, not marketing fluff)",
      "Customer story library, schema-marked-up",
      "LinkedIn distribution mirroring the site&apos;s pillar pages",
    ],
  },
  {
    stage: "Series B (months 18-36)",
    goal: "Programmatic + ICP-deep content",
    investments: [
      "Programmatic landing pages for category × persona × industry combinations",
      "ICP-specific use-case content (deep, not surface)",
      "Press and digital-PR work for citation across reporter-led pieces",
      "Conversion infrastructure: gated assets, calculators, lead-gen forms",
    ],
  },
  {
    stage: "Series C+",
    goal: "Category leadership and defensibility",
    investments: [
      "Original research and benchmarks: the citation that LLMs return on category queries",
      "Podcast, conference, and analyst relationships",
      "Multi-language expansion if ICP warrants",
      "Local hiring brand investment in Irvine + remote",
    ],
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Do B2B SaaS startups in Irvine really need local SEO?",
    answer:
      "Yes, but in a narrower way than home-services businesses. Local SEO matters for hiring brand (candidates researching you), local press pickup, investor diligence (&quot;[Your Name] Irvine&quot; branded search), and any in-person events you run. You will not get most pipeline from local SEO; you will get talent, partnerships, and credibility signals that compound over years.",
  },
  {
    question: "How does AEO (answer engine optimization) differ from SEO?",
    answer:
      "SEO targets the search result page; AEO targets the answer block. LLMs like ChatGPT, Perplexity, and Google AI Overviews don&apos;t care about ranking on page 1 of Google. They care about whether your content is structured, citable, and authoritative enough to be quoted. Practically, that means more schema, more definitional content, more original data, and far less keyword-stuffed copy.",
  },
  {
    question: "What is a realistic CAC payback timeline for SEO/content in B2B SaaS?",
    answer:
      "Twelve to twenty-four months for the first dollar to come back, three to five years for the engine to be self-sustaining. SEO is not a quarterly channel; it is a multi-year compounding asset. If your board is allergic to that timeline, run paid acquisition in parallel for near-term pipeline and treat content as the long-term cost-of-acquisition lever.",
  },
  {
    question: "Should I publish on my own blog or guest post on Substack / Medium?",
    answer:
      "Your blog should be the system-of-record. Cross-post or syndicate to Substack and LinkedIn for distribution, but the canonical version lives on your domain so the SEO and AEO authority accrues to you, not to a third-party platform that could change its model tomorrow.",
  },
  {
    question: "How much should we spend on content vs paid acquisition in seed stage?",
    answer:
      "Roughly 70/30 paid/content at seed when you need fast learning; flips to 40/60 by Series A as content compounds and paid becomes the marginal lever. The exact mix depends on category, ICP, and sales cycle. The mistake is treating content as the cheap option; senior writers and editors are not cheap, and bad content is worse than no content.",
  },
  {
    question: "Should we hire an in-house content team or use an agency?",
    answer:
      "At seed: one strong fractional editor plus founder-written drafts. At Series A: one full-time content marketer plus an editor. At Series B+: a small team plus an agency for programmatic and digital PR. The thing not to do is hire a junior content marketer and let them publish unedited; the floor of B2B content quality keeps rising and the AI Overviews citation bar moves with it.",
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
              The Spectrum playbook for B2B SaaS in the <span className="accent-underline">zero-click era</span>.
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
                Irvine hosts roughly{" "}
                <a
                  href="https://builtin.com/companies/location/na/usa/ca/irvine"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  400+ tech companies and 18,000 tech jobs
                </a>
                , concentrated in Spectrum, Spectrum Terrace, and the IBC. The talent and the buying power are real, and they affect both your hiring brand and your local SEO surface.
              </li>
              <li>
                B2B search has split in two. Roughly{" "}
                <a
                  href="https://sparktoro.com/blog/in-2024-the-google-monopoly-isnt-dying-its-shifting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  60% of searches end without a click
                </a>{" "}
                because AI Overviews and zero-click features answer the query directly. The other 40% still funnel through traditional results. You need to win both surfaces.
              </li>
              <li>
                The playbook for Irvine Series-A SaaS startups is not &quot;blog 2x a week.&quot; It is buyer-question content, programmatic comparison pages, schema-rich pillar content, citation strategy for LLMs, and a 12 to 36 month patience curve.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The Irvine SaaS market"
          heading="Four numbers that frame the stakes."
          intro="Irvine&apos;s tech ecosystem is bigger than most California founders realize. The four anchor numbers below shape every content and SEO decision below."
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "13246", value: "400+", label: "Tech companies in Irvine", sub: "Per Built In OC ecosystem data" },
              { iconId: "11901", value: "18k", label: "Tech jobs in Irvine", sub: "Talent pool drives brand search" },
              { iconId: "QNjsAGAlpuNW", value: "60%", label: "Zero-click search share", sub: "SparkToro 2024 search-behavior research" },
              { iconId: "13551", value: "70%", label: "B2B buying done pre-contact", sub: "Gartner B2B buyer studies" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The ecosystem"
          heading="Where Irvine SaaS founders actually work."
          intro={
            <>
              The local search surface for B2B SaaS is not really &quot;Irvine.&quot; It is Spectrum, IBC, UCI Beall, and the Newport-adjacent corridor. Each cluster has a different gravity and a different implication for your{" "}
              <Link
                href="/services/seo/ai-search"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                AI search strategy
              </Link>
              .
            </>
          }
          variant="wide"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {ECOSYSTEM_CARDS.map((c) => (
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
                    <Building2 className="w-4 h-4" strokeWidth={2.2} />
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
                <p
                  className="text-[14px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                  dangerouslySetInnerHTML={{ __html: c.reality }}
                />
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="The split"
          heading="Why SEO and AEO now require different work."
          intro="SEO targets the search results page. AEO (answer engine optimization) targets the answer block: AI Overviews, ChatGPT, Perplexity, Gemini. Same source content, different optimization targets, different metrics, different operating cadence."
          variant="wide"
        >
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-7">
            <div
              className="card-surface p-6 flex flex-col gap-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Search className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-[17px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                  Classic SEO surface
                </h3>
              </div>
              <ul
                className="text-[14px] leading-[1.65] space-y-2 list-disc pl-5"
                style={{ color: "var(--muted)" }}
              >
                <li>Goal: ranking position on Google&apos;s blue-link results</li>
                <li>Levers: backlinks, on-page intent match, page experience</li>
                <li>Metric: organic clicks, rankings, impressions</li>
                <li>Tools you already use: GSC, Ahrefs, Semrush</li>
              </ul>
            </div>
            <div
              className="card-surface p-6 flex flex-col gap-4"
              style={{
                borderRadius: "var(--radius-lg)",
                background:
                  "linear-gradient(180deg, rgba(116,211,255,0.06), var(--surface) 40%)",
                borderColor: "rgba(22,119,255,0.30)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "rgba(22,119,255,0.18)", color: "var(--accent)" }}
                >
                  <Sparkles className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-[17px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                  AEO / answer surface
                </h3>
              </div>
              <ul
                className="text-[14px] leading-[1.65] space-y-2 list-disc pl-5"
                style={{ color: "var(--muted)" }}
              >
                <li>Goal: get cited inside the AI answer block</li>
                <li>Levers: schema richness, original data, definitional content, brand mentions</li>
                <li>Metric: citation share inside answer engines (track manually for now)</li>
                <li>Tools: Profound, Bluefish, manual citation audits</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The content model"
          heading="Five content modes that compound."
          intro={
            <>
              The blog-twice-a-week model from 2019 does not work in 2026. The model that does work for a B2B SaaS team in the IBC is a layered system across five content modes, each serving a different stage and a different surface. Pair this with{" "}
              <Link
                href="/services/seo/on-page"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                on-page SEO
              </Link>{" "}
              done right and the structure compounds.
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
                      Mode
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Intent
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONTENT_MODES.map((row, idx) => (
                    <tr
                      key={row.mode}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.mode}
                      </td>
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--ink)" }}>
                        {row.intent}
                      </td>
                      <td
                        className="px-5 py-4 align-top"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: row.example }}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="Citation strategy"
          heading="How to get pulled into AI answers."
          intro={
            <>
              LLMs do not cite generic blog posts. They cite source-of-truth content with clear structure, original data, and unambiguous authorship. The same patterns work across ChatGPT, Perplexity, and Google AI Overviews; for the full breakdown see{" "}
              <Link
                href="/resources/blog/ai-search-optimization-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                our 2026 AI search optimization playbook
              </Link>
              .
            </>
          }
        >
          <PostProse>
            <p>
              Concrete moves for an Irvine SaaS startup: publish at least one original-data piece per quarter (benchmark, survey, internal data study); add FAQPage and HowTo schema across pillar content; mark up bylines with Person schema and link to the author&apos;s LinkedIn; maintain a glossary of category terms each with its own URL, each with Definition schema; pursue brand mentions (not just backlinks) on category-leading publications.
            </p>
            <p>
              Brand mentions matter more in AEO than in classic SEO. LLMs use entity co-occurrence to decide who to cite. A mention in a Reuters or TechCrunch piece, with no backlink at all, often boosts citation share more than a link from a low-authority directory.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="LinkedIn + search"
          heading="The Irvine SaaS distribution gap."
          intro={
            <>
              Most Irvine SaaS startups under-distribute on LinkedIn relative to their SF peers. The site content goes up; the executive distribution does not. Pair each pillar page with a 7- to 14-day LinkedIn cadence from founders and category leads. The cross-traffic accelerates indexing and citation. See also{" "}
              <Link
                href="/services/social-media/management"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                social media management
              </Link>{" "}
              if you want to outsource the cadence.
            </>
          }
        >
          <PostProse>
            <p>
              The pattern that works: founder posts a teardown of the new pillar page in their own voice (not a marketing announcement), tags two or three real people who would care, links to the page. The LinkedIn signal compounds: pageviews → engaged time on page → indexing speed → LLM citation likelihood. None of those are causal SEO factors in the classical sense; all of them affect the outcome.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="Local matters (sort of)"
          heading="Where local SEO does move B2B."
          intro="A common misconception: that local SEO doesn&apos;t matter for B2B SaaS. It does, just not for primary pipeline. It moves three other things that matter."
          variant="wide"
        >
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            <div
              className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Linkedin className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-[16px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                  Hiring brand
                </h3>
              </div>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                Engineering candidates search &quot;[Your Brand] Irvine&quot; before applying. A complete profile, Glassdoor presence, and local press surface decide whether they accept the recruiter ping.
              </p>
            </div>
            <div
              className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <MessagesSquare className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-[16px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                  Investor diligence
                </h3>
              </div>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                A VC associate Googles your name and your CEO&apos;s name. If the first page is generic LinkedIn + an old Crunchbase, you have a content gap. Owned media on your own domain is the cheapest fix.
              </p>
            </div>
            <div
              className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Cpu className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <h3 className="text-[16px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                  Partnership intros
                </h3>
              </div>
              <p className="text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                Octane OC, Tech Coast Angels, UCI Beall events. Locally-relevant content gets shared inside these networks faster than generic SaaS content because the network is small and tight.
              </p>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The 12-month roadmap"
          heading="What to ship at each funding stage."
          intro="The right SEO investment at seed is not the right investment at Series B. The matrix below is what we&apos;d ship for a B2B SaaS startup at each stage if we were running an in-house content team."
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
                      Stage
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Primary goal
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      What to ship
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROADMAP.map((row, idx) => (
                    <tr
                      key={row.stage}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.stage}
                      </td>
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--ink)" }}>
                        {row.goal}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ color: "var(--muted)" }}>
                        <ul className="space-y-1 list-disc pl-4">
                          {row.investments.map((d) => (
                            <li
                              key={d}
                              dangerouslySetInnerHTML={{ __html: d }}
                            />
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
                The biggest mistake at every stage
              </div>
              <p
                className="text-[13px] mt-1 leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Optimizing for the previous era. A seed-stage team writing high-volume SEO posts in 2026 will spend 12 months building an asset that is already devalued by zero-click. A Series-B team that has not started AEO work yet will be invisible inside answer engines for the queries it should own. Build for the next 24 months, not the last 24.
              </p>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="The questions B2B SaaS founders actually ask."
          intro={
            <>
              The six we hear most often from heads of marketing at Spectrum and IBC. For the broader AI search angle, see{" "}
              <Link
                href="/services/seo/ai-search"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                AI search service
              </Link>{" "}
              and{" "}
              <Link
                href="/solutions/lead-generation"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                lead generation
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
              The Irvine SaaS ecosystem has the talent, the buying power, and the network density to win B2B search. Most teams underspend on the right parts of it: AEO foundation, original data, programmatic depth, and LinkedIn distribution. The teams that get that right in 2026 will compound for the next five years. The teams that don&apos;t will keep paying their way through paid search at rising CACs.{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Want to talk about an AEO foundation
              </Link>
              ? We&apos;re local.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="AEO + SEO together"
          heading="Build the content engine that compounds."
          description="We design the content model, build the programmatic and pillar pages, install schema and citation infrastructure, and report citation share inside AI Overviews. Built for IBC and Spectrum SaaS teams."
          primary={{ label: post.ctaService?.label ?? "See AI search service", href: post.ctaService?.href ?? "/services/seo/ai-search" }}
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
