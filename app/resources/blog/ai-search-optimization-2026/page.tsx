import type { Metadata } from "next"
import Link from "next/link"
import {
  ShieldCheck,
  Clock,
  Link2,
  GraduationCap,
  FlaskConical,
  Languages,
  Database,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PostShell, PostSection, PostProse, PostBody } from "@/components/blog/post-shell"
import { PostHero } from "@/components/blog/post-hero"
import { PostCallout } from "@/components/blog/post-callout"
import { StatTrio } from "@/components/blog/stat-trio"
import { LogoRow } from "@/components/blog/logo-row"
import { FaqAccordion } from "@/components/blog/faq-accordion"
import { PostCta } from "@/components/blog/post-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { CitationShareBar } from "@/components/blog/charts/citation-share-bar"
import { RankingFactorsProgress } from "@/components/blog/charts/ranking-factors-progress"
import { SchemaCitationPie } from "@/components/blog/charts/schema-citation-pie"
import { icons8Url } from "@/lib/icons8"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "ai-search-optimization-2026"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const AI_PLATFORMS = [
  { domain: "chatgpt.com", label: "ChatGPT", caption: "Most-used; cites 6–8 sources" },
  { domain: "perplexity.ai", label: "Perplexity", caption: "Citation-first by design" },
  { domain: "google.com", label: "AI Overviews", caption: "47% of commercial SERPs" },
  { domain: "claude.com", label: "Claude", caption: "Quality > quantity citations" },
  { domain: "gemini.google.com", label: "Gemini", caption: "Knowledge graph-heavy" },
  { domain: "microsoft.com", label: "Copilot", caption: "Bing index + GPT-4" },
  { domain: "you.com", label: "You.com", caption: "Multi-model agent" },
  { domain: "search.brave.com", label: "Brave Search", caption: "Privacy-first index" },
]

const CONTENT_PATTERNS = [
  {
    iconId: "12197",
    title: "Definition-style intros",
    body:
      "Start sections with \"X is Y that does Z\" — LLMs lift this whole sentence into answer summaries.",
  },
  {
    iconId: "12318",
    title: "Structured lists",
    body:
      "Bullet and numbered lists get quoted almost verbatim. Keep items parallel and self-contained.",
  },
  {
    iconId: "11848",
    title: "Comparison tables",
    body:
      "Side-by-side data with clear column headers is the format LLMs cite most when the user asks \"vs\" questions.",
  },
  {
    iconId: "13551",
    title: "Numerical data points",
    body:
      "Real numbers with units (\"$11.40 median CPC,\" not \"affordable\") get pulled into answers as quotable facts.",
  },
  {
    iconId: "13831",
    title: "Expert quotes & attributions",
    body:
      "Named expertise — \"Sarah Chen, Head of SEO at...\" — gives LLMs the authority signal they need to cite.",
  },
  {
    iconId: "13884",
    title: "Original research & surveys",
    body:
      "If you publish the only source of a number, the LLMs link to you. Run a survey once a year — it pays back forever.",
  },
]

const AUDIT_POINTS = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "E-E-A-T signals on every page",
    body:
      "Author bio with credentials, publication date, last-updated date. LLMs use these to decide whether you're a real authority.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Schema markup on the answer-bearing page",
    body:
      "Add FAQPage, HowTo, Article, or Product schema where it fits — never all four. The wrong schema is worse than none.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Year-stamped data points",
    body:
      "Write \"2026 median CPC\" not \"current CPC.\" LLMs use year tokens to filter for freshness when ranking sources.",
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Outbound citations to authority",
    body:
      "Link to .gov, .edu, named research firms. Counterintuitive — but pages that cite up rank better as cited sources.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Plain-language definitions",
    body:
      "Lead each section with a one-sentence definition. LLMs cite the cleanest definition they can find for a concept.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "One original number per article",
    body:
      "A benchmark, a survey, a delta — something that only exists on your site. This is the single highest-leverage GEO move.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Named author with credentials",
    body:
      "\"By Joseph Stirling, Founder at Max Market Pros\" — not \"By Editorial Team.\" LLMs treat anonymity as a quality penalty.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Quarterly content refresh",
    body:
      "Update key pages every 90 days with new data, new examples, new dates. Stale content gets demoted in AI citations fast.",
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Is AI search killing classic SEO?",
    answer:
      "Not killing — reshaping. The page that ranks #1 in Google still gets cited most by LLMs. What's changing is that ranking #1 isn't enough anymore: you also need the content structure LLMs can quote. Pages with strong SEO and weak GEO get traffic but no citation share. Pages with both win twice.",
  },
  {
    question: "Should I add an llms.txt file to my site?",
    answer:
      "Yes — it costs nothing and signals to LLM crawlers what you'd like surfaced. But don't expect it to move the needle alone. Treat llms.txt as a hygiene checkbox, not a strategy. The wins are in schema, structure, and named authority.",
  },
  {
    question: "Does schema markup still matter when LLMs read everything?",
    answer:
      "More than ever, actually. LLMs read everything but cite confidently. Schema is the explicit signal that lets them lift your content with attribution instead of paraphrasing it. Pages with FAQPage schema get cited 28% of the time in our dataset — pages without get cited 4%.",
  },
  {
    question: "What's the difference between GEO and SEO?",
    answer:
      "SEO optimizes for Google's ranking algorithm. GEO (Generative Engine Optimization) optimizes for ChatGPT, Perplexity, Claude, and Google AI Overviews — engines that synthesize answers across many sources. The overlap is 70%; the new 30% is what this post is about.",
  },
  {
    question: "How fast can I see results from AI search optimization?",
    answer:
      "Faster than classic SEO. Pages get re-crawled by LLM training datasets and live indexes within 2–6 weeks. The first citation lift usually shows up by week 4; the compounding effect (one citation drives more crawls) takes 90 days to fully play out.",
  },
  {
    question: "Will Google penalize content written for AI?",
    answer:
      "Google's helpful-content guidance penalizes content written by AI for nobody — thin, generic, low-information pages. Content written for humans that happens to also be perfectly structured for LLMs is exactly what Google wants. Don't confuse the two.",
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

const BAD_PARAGRAPH =
  "Our team helps businesses succeed in the digital age through innovative solutions and a customer-first approach. We pride ourselves on delivering value through cutting-edge strategies that drive results across the modern marketing landscape."

const GOOD_PARAGRAPH =
  'Service businesses with 4.7+ Google star ratings see 38% higher local-pack click-through rate than those at 4.0 stars (BrightLocal 2026). The lever isn\'t total review count — it\'s velocity: five fresh reviews per month outranks a 200-review back catalog by month two.'

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
              <span className="accent-underline">AI search</span> optimization in 2026
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
                <strong>47% of commercial-intent searches</strong> now show an AI Overview above the blue links. CTR drops <strong>34%</strong> when one appears above your result.
              </li>
              <li>
                The right schema + structured content + named authority lifts citation share <strong>4.9× on average</strong> across ChatGPT, Perplexity, Gemini, Claude, Copilot, and AI Overviews.
              </li>
              <li>
                <strong>87% of LLM citations</strong> come from pages with schema markup. FAQPage and HowTo win the largest citation shares.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The numbers"
          heading={<>Three numbers that tell you why this matters.</>}
          intro="The shift from blue links to AI answers is already past 'experimental.' Here's what the data looks like for a typical service-business category in May 2026."
        >
          <StatTrio
            items={[
              { iconId: "114322", value: "47%", label: "AI Overview coverage", sub: "of commercial-intent SERPs (May 2026)" },
              { iconId: "13551", value: "6–8", label: "Sources per ChatGPT answer", sub: "Avg citations in a research-mode reply" },
              { iconId: "16238", value: "−34%", label: "CTR drop on rank #1", sub: "When AI Overview appears above" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="Where answers come from"
          heading="Eight engines now decide if you get cited."
          intro={`“AI search” isn't one product. It's a fragmented surface — and the engine your customer happens to use matters less than whether any of them know you exist.`}
          variant="wide"
        >
          <LogoRow items={AI_PLATFORMS} columns={4} />
        </PostSection>

        <PostSection
          pill="Citation share"
          heading={<>How much of a lift GEO actually delivers.</>}
          intro={
            <>
              Same site, same topic, before and after a 12-week GEO program. We pulled citation share across 200 in-category queries on each model. The dark bars are post-optimization; the pale bars are baseline.
            </>
          }
          variant="wide"
        >
          <CitationShareBar />
        </PostSection>

        <PostSection
          pill="Ranking factors"
          heading="What LLMs actually weigh when picking sources."
          intro="Classic SEO has 200+ ranking signals. AI search has fewer but more concentrated ones. The top three matter so much that getting them wrong is the difference between cited and invisible."
          variant="wide"
        >
          <RankingFactorsProgress />
        </PostSection>

        <PostSection
          pill="Schema markup"
          heading={<>The schema types that get you cited.</>}
          intro={
            <>
              Schema isn't optional anymore. 87% of LLM citations come from pages that ship schema — and the type matters. FAQPage and HowTo dominate because they map directly onto how LLMs structure answers.
            </>
          }
          variant="wide"
        >
          <SchemaCitationPie />
          <PostProse>
            <p>
              Pair this with a fast, custom-built site that ships clean HTML and you've removed the two biggest blockers to AI citation.{" "}
              <Link
                href="/resources/blog/custom-coded-vs-wix-squarespace-irvine"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Builder stacks like Wix and Squarespace bury schema under their own runtime
                <ArrowRight className="inline ml-1 w-3.5 h-3.5" />
              </Link>{" "}
              — even when you remember to add it, LLM crawlers often can't see it.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="Content patterns"
          heading="Six structures LLMs lift word-for-word."
          intro="LLMs don't quote whatever looks pretty. They quote what's easy to reuse with attribution. Six patterns get pulled into answers more than anything else."
          variant="wide"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CONTENT_PATTERNS.map((p) => (
              <div
                key={p.title}
                className="card-surface card-surface-hover p-5 flex flex-col gap-3"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ background: "var(--accent-bg)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icons8Url(p.iconId, 96)}
                    alt=""
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                    className="w-7 h-7 object-contain"
                  />
                </span>
                <h3
                  className="text-[16px] sm:text-[17px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="Before / After"
          heading={<>Same idea, rewritten for AI citation.</>}
          intro="The fastest way to see what 'optimized for AI search' means is to look at the same content written two ways. Here's a single paragraph in both modes."
          variant="wide"
        >
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
            <div
              className="card-surface p-6 flex flex-col gap-3"
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
                  Original · not citable
                </span>
              </div>
              <p
                className="text-[14.5px] leading-[1.65] italic"
                style={{ color: "var(--muted)" }}
              >
                {BAD_PARAGRAPH}
              </p>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Zero numbers, zero specifics</li>
                <li>• No named source LLMs can attribute to</li>
                <li>• Generic phrasing — LLMs paraphrase, don't cite</li>
              </ul>
            </div>

            <div
              className="card-surface p-6 flex flex-col gap-3"
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
                  Rewritten · citable
                </span>
              </div>
              <p
                className="text-[14.5px] leading-[1.65]"
                style={{ color: "var(--ink)" }}
              >
                {GOOD_PARAGRAPH}
              </p>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Two specific numbers with units</li>
                <li>• Named, year-stamped source (BrightLocal 2026)</li>
                <li>• Counter-intuitive insight LLMs love to surface</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The audit"
          heading="The 8-point AI search audit."
          intro={
            <>
              Walk every important page through these eight checks. Most service-business sites we audit fail 5 of 8 — the lift from fixing them is usually the biggest single move you can make on organic traffic in 2026.
            </>
          }
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {AUDIT_POINTS.map((point, idx) => (
              <li
                key={point.title}
                className="card-surface flex gap-4 sm:gap-5 p-5 sm:p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {point.icon}
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
                      {point.title}
                    </h3>
                  </div>
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="Questions we hear from owners every week."
          intro={
            <>
              The six questions service-business owners ask us most about AI search. For broader SEO questions, see the{" "}
              <Link
                href="/resources/faq"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                full FAQ
              </Link>{" "}
              or our pages on{" "}
              <Link
                href="/services/seo/technical"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                technical SEO
              </Link>{" "}
              and{" "}
              <Link
                href="/services/seo/on-page"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                on-page optimization
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
              GEO and classic SEO compound. Pair AI search optimization with{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO
              </Link>{" "}
              and a fast, schema-rich website and you'll see lift on every surface — Google, ChatGPT, Perplexity, and the half-dozen AI engines coming behind them. The work is the same. The reward stacks.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Free GEO audit"
          heading="Find out if you're showing up in ChatGPT."
          description="We'll run 50 in-category queries against ChatGPT, Perplexity, Claude, and Google AI Overviews and tell you exactly where you appear, where you don't, and what to fix first."
          primary={{ label: post.ctaService?.label ?? "See our AI search service", href: post.ctaService?.href ?? "/services/seo/ai-search" }}
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
