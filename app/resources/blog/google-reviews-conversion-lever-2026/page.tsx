import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Clock,
  MessageSquare,
  Reply,
  AlertTriangle,
  Star,
  CheckCircle2,
  XCircle,
  Eye,
  PhoneCall,
  MessagesSquare,
  Scale,
  ArrowRight,
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
import { StarRatingCtrLine } from "@/components/blog/charts/star-rating-ctr-line"
import { ReviewVelocityChart } from "@/components/blog/charts/review-velocity-chart"
import { PlatformShareBar } from "@/components/blog/charts/platform-share-bar"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { articleSchema } from "@/lib/schema-blog"
import { getPostBySlug, getRelated, formatPostDate } from "@/lib/blog-data"

const SLUG = "google-reviews-conversion-lever-2026"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const REVIEW_PLATFORMS = [
  { domain: "google.com", label: "Google", caption: "81% of reputation searches" },
  { domain: "yelp.com", label: "Yelp", caption: "Still owns restaurants" },
  { domain: "facebook.com", label: "Facebook", caption: "Local recs in groups" },
  { domain: "bbb.org", label: "BBB", caption: "Trust signal for older buyers" },
  { domain: "angi.com", label: "Angi", caption: "Home services lead source" },
  { domain: "nextdoor.com", label: "Nextdoor", caption: "Hyper-local rec engine" },
]

const ENGINE_STEPS = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Capture every customer interaction",
    body:
      "Phone, form, walk-in, repeat — get a phone number and a name into your CRM. You can't ask if you don't have the contact.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Ask within 2 hours of job completion",
    body:
      "Response rate halves every 24 hours. The window between \"job done\" and \"home with a glass of wine\" is the highest-converting moment you'll ever have.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Send the review link by SMS, not email",
    body:
      "SMS open rates 98%, email 21%. One tap from message to Google review form. Skip the marketing-email middle step.",
  },
  {
    icon: <Reply className="w-5 h-5" />,
    title: "Reply to every review within 24 hours",
    body:
      "Templated, 5-tap responses for 5-stars; thoughtful, named responses for everything else. Google's algo reads response velocity as a quality signal.",
  },
  {
    icon: <PhoneCall className="w-5 h-5" />,
    title: "On bad reviews — call the customer first",
    body:
      "Always. Before you reply publicly, call them. 6 out of 10 will edit or remove the review when you actually pick up the phone.",
  },
]

const DECISION_STEPS = [
  {
    icon: <Eye className="w-5 h-5" />,
    label: "Read it twice",
    body:
      "Once for the facts, once for the emotion. Identify the actual complaint vs the vent. Don't reply for at least 60 minutes.",
  },
  {
    icon: <PhoneCall className="w-5 h-5" />,
    label: "Call the customer",
    body:
      "Use the number on file. Apologize for the experience, listen, ask what would make it right. Notes go in the CRM.",
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    label: "Respond publicly within 24h",
    body:
      "Short. Specific. Named. Reference the conversation. \"Thanks for taking my call today, Mark. We're sending out the second crew Tuesday morning.\"",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    label: "Decide: dispute or fix",
    body:
      "Real grievance → fix it and document. Fake / competitor / off-platform → flag for Google review with screenshots. Most fakes come down in 48h.",
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How many Google reviews do I actually need?",
    answer:
      "50 is the threshold where you start showing up in 2.3× more local-pack searches than businesses with fewer. 100 is where you stop competing on volume and start competing on velocity. Beyond 200, total count stops mattering — fresh reviews carry all the ranking weight.",
  },
  {
    question: "Is it okay to ask family and friends to leave reviews?",
    answer:
      "Don't. Google's algorithm flags reviews from accounts with no nearby reviews, no purchase signals, and tight social graphs. Friend/family reviews look fake to the algorithm even when they're real — they get filtered, and worse, they tank your trust score.",
  },
  {
    question: "Can I 'gate' negative reviewers — send unhappy customers to a private form first?",
    answer:
      "Officially no — Google's review policy forbids review gating, and they've gotten very good at detecting it. Unofficially, what you can do is ask every customer for feedback first via SMS, and only send the Google link to ones who reply positively. The difference is one is gating; the other is good customer service.",
  },
  {
    question: "What about Yelp's review filter? Half my reviews are hidden.",
    answer:
      "Yelp's filter is opaque and aggressive — it hides reviews from accounts without enough activity. Don't fight it. Spend your energy on Google, where the filter is lighter and the reward is bigger. Yelp is 7% of reputation searches; Google is 81%. Pick where the leverage lives.",
  },
  {
    question: "How long after I start asking for reviews until rankings respond?",
    answer:
      "Map-pack rank shifts within 4–8 weeks of consistent fresh review velocity. Star rating effects on CTR show up immediately as soon as the visible average crosses a threshold (4.0 → 4.5 is the biggest jump). The compounding effect — more visibility → more reviews → more visibility — takes 90 days to fully play out.",
  },
  {
    question: "What if a competitor leaves fake bad reviews?",
    answer:
      "Flag them via Google Business Profile with screenshots and any evidence (the reviewer's account history, mismatched job dates, impossible details). Google removes 60-70% of flagged competitor fakes within 48 hours when the evidence is clear. For repeat offenders, document a pattern and submit it through GBP support — Google has gotten much faster at this in 2026.",
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

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < count ? "#FFB400" : "transparent"}
          stroke={i < count ? "#FFB400" : "var(--border-color)"}
          strokeWidth={1.8}
        />
      ))}
    </div>
  )
}

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
              Google Reviews: the <span className="accent-underline">#1 conversion lever</span> for service businesses
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
                <strong>76% of buyers read 2+ reviews</strong> before they call. Going from <strong>4.0 → 4.7 stars</strong> lifts local-pack CTR by <strong>+38%</strong>.
              </li>
              <li>
                Five <strong>fresh</strong> reviews a month outranks a 200-review back catalog by month two. Velocity beats volume.
              </li>
              <li>
                Google captures <strong>81% of reputation searches</strong>. Yelp, Facebook, BBB combined are 14%. Concentrate effort.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The numbers"
          heading={<>Four numbers that change how you treat reviews.</>}
          intro="If you're still treating reviews as a vanity metric, this section is for you. These are the four facts that turn reviews into the highest-ROI hour of work your team does each week."
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "63692", value: "76%", label: "Read 2+ reviews", sub: "Before calling a service business" },
              { iconId: "13551", value: "+38%", label: "CTR lift", sub: "Moving from 4.0 → 4.7 stars" },
              { iconId: "QNjsAGAlpuNW", value: "2.3×", label: "More searches", sub: "Show up with 50+ reviews vs <50" },
              { iconId: "63250", value: "14 days", label: "\"Fresh\" cutoff", sub: "Google's velocity-decay window" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The hockey stick"
          heading="Why 4.5 stars is the only number that matters."
          intro={
            <>
              CTR doesn't climb linearly with rating. There's a hockey-stick at 4.5 — go from 4.0 → 4.5 and you'll see almost a 2× jump in clicks from the local pack. Below 4.5, you're effectively invisible to anyone comparison-shopping.
            </>
          }
          variant="wide"
        >
          <StarRatingCtrLine />
        </PostSection>

        <PostSection
          pill="Platform share"
          heading={<>Google has won. The rest is rounding error.</>}
          intro="Yelp, BBB, Facebook, Nextdoor still exist — and you should claim every profile — but allocating equal time to each is a strategic mistake. 81% of reputation searches happen on Google."
          variant="wide"
        >
          <PlatformShareBar />
        </PostSection>

        <PostSection
          pill="Where you appear"
          heading="Six platforms that still get checked."
          intro="Claim and monitor all of them. Concentrate review-generation effort on the first one."
          variant="wide"
        >
          <LogoRow items={REVIEW_PLATFORMS} columns={3} />
        </PostSection>

        <PostSection
          pill="Velocity > volume"
          heading="Why a 200-review back catalog loses to 5 fresh ones a month."
          intro={
            <>
              In 2024 Google quietly shifted local ranking weight from <em>lifetime total</em> to <em>last-90-days velocity</em>. The chart below is the result: an account adding five reviews a month pulls ahead of a stale-but-large competitor by month two.
            </>
          }
          variant="wide"
        >
          <ReviewVelocityChart />
        </PostSection>

        <PostSection
          pill="The Reputation Engine"
          heading="The 5-step system that runs itself."
          intro="Every Irvine service business we manage runs this same 5-step loop. Once it's set up, the only ongoing work is the response — 10 minutes a day."
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {ENGINE_STEPS.map((step, idx) => (
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
          pill="Anatomy of a request"
          heading={<>The SMS that converts at 47% vs the one that converts at 6%.</>}
          intro="Side-by-side. Same business, same customer, same Google review link — different message. The right-hand version has converted 47% of customers we've sent it to over the past 18 months."
          variant="wide"
        >
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-7">
            {/* Bad SMS */}
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
                  Don't · ~6% conversion
                </span>
              </div>
              <div
                className="rounded-2xl px-4 py-3 max-w-[88%]"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                  fontSize: 14,
                  lineHeight: 1.55,
                }}
              >
                Hi this is Acme Plumbing Services LLC, thank you for choosing us for your recent service visit. We strive to provide the highest quality service to all of our valued customers and your feedback is incredibly important to us. If you have a moment, we&apos;d be so grateful if you could leave us a review on Google by visiting the following link and sharing your experience: https://g.page/r/CXyZ123abcdEFGhIjKLmNoP/review — your review helps other customers find us and helps us continue to grow. Thank you so much again!
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• 87 words — most won&apos;t scroll past line 3</li>
                <li>• Generic, no customer name, no context</li>
                <li>• Link buried in a paragraph, not tappable on preview</li>
                <li>• Sent &gt;24 hours after the job — already cold</li>
              </ul>
            </div>

            {/* Good SMS */}
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
                  Do · ~47% conversion
                </span>
              </div>
              <div
                className="rounded-2xl px-4 py-3 max-w-[88%]"
                style={{
                  background: "linear-gradient(135deg, #1677FF, #4FA8FF)",
                  color: "#fff",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  boxShadow: "0 4px 14px rgba(22,119,255,0.30)",
                }}
              >
                Hey Sarah — Mike from Acme. Glad we got the water heater sorted today. If you have 30 seconds, would you mind leaving us a quick Google review? It really helps. ⭐
                <br /><br />
                <span className="font-bold underline">→ g.page/acme/review</span>
              </div>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• 35 words — readable in one glance</li>
                <li>• Named on both sides (“Sarah” + “Mike”)</li>
                <li>• Specific job reference (“water heater”)</li>
                <li>• Single tappable link, no preamble</li>
                <li>• Sent within 2 hours of job completion</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="Bad reviews"
          heading="The 4-step playbook for when a bad one lands."
          intro="Every business gets bad reviews eventually. The owners who recover gracefully are the ones who follow the same four-step sequence every time — never improvising under pressure."
          variant="wide"
        >
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
              {DECISION_STEPS.map((step, idx) => (
                <div key={step.label} className="relative">
                  <div
                    className="card-surface card-surface-hover h-full p-5 flex flex-col gap-3"
                    style={{ borderRadius: "var(--radius-lg)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                        style={{
                          background:
                            idx === DECISION_STEPS.length - 1
                              ? "rgba(34,160,107,0.10)"
                              : "var(--accent-bg)",
                          color:
                            idx === DECISION_STEPS.length - 1
                              ? "#22A06B"
                              : "var(--accent)",
                        }}
                      >
                        {step.icon}
                      </span>
                      <div>
                        <div
                          className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                          style={{ color: "var(--muted)" }}
                        >
                          Step {idx + 1}
                        </div>
                        <h3
                          className="text-[14.5px] font-bold leading-tight"
                          style={{ color: "var(--ink)" }}
                        >
                          {step.label}
                        </h3>
                      </div>
                    </div>
                    <p
                      className="text-[13px] leading-[1.55]"
                      style={{ color: "var(--muted)" }}
                    >
                      {step.body}
                    </p>
                  </div>
                  {idx < DECISION_STEPS.length - 1 ? (
                    <div
                      className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 rounded-full"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        color: "var(--accent)",
                      }}
                      aria-hidden
                    >
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 px-5 py-4 rounded-xl flex items-start gap-3"
            style={{
              background: "rgba(229,62,62,0.06)",
              border: "1px solid rgba(229,62,62,0.24)",
            }}
          >
            <span
              className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: "rgba(229,62,62,0.14)", color: "#E53E3E" }}
            >
              <AlertTriangle className="w-4 h-4" />
            </span>
            <div className="flex-1">
              <div
                className="text-[13.5px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                What never to do
              </div>
              <p
                className="text-[13px] mt-1 leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Don&apos;t argue, don&apos;t defend, don&apos;t reply within the first hour, and never name the customer&apos;s personal details (job address, payment info, contact). Public review responses are read by future customers more than by the original reviewer — write for them.
              </p>
            </div>
          </div>
        </PostSection>

        <PostBody>
          <PostCallout variant="quote">
            <div className="flex items-center gap-2 mb-2">
              <StarRow count={5} />
              <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                What a 5-star review looks like from a customer
              </span>
            </div>
            Mike came out same day, found the leak in our wall in 10 minutes, and stayed until the patch dried. Texted me a photo of the finished job before leaving. Couldn&apos;t ask for better — booking him for the bathroom remodel next month.
          </PostCallout>
        </PostBody>

        <PostSection
          pill="FAQ"
          heading="Questions owners ask us every week."
          intro={
            <>
              The six review questions we hear most from service-business owners. For broader local SEO questions, see our{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO page
              </Link>{" "}
              or the{" "}
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
              Reviews compound. The Reputation Engine + a fast site + a managed Google Ads account is the three-legged stool of modern service-business growth. If you&apos;re paying for clicks to a profile with 4.0 stars and 12 reviews, you&apos;re bleeding budget at the conversion step —{" "}
              <Link
                href="/resources/blog/google-ads-irvine-cost-2026"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                we covered the Google Ads side of this here
              </Link>
              . Fix reviews first; the ad spend compounds afterward.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Reputation on autopilot"
          heading="Stop chasing reviews. Build the engine."
          description="We install the SMS automation, set up the response templates, and monitor flag-worthy reviews on your behalf — for every plan tier. See how it works."
          primary={{ label: post.ctaService?.label ?? "See review generation", href: post.ctaService?.href ?? "/services/social-media/review-generation" }}
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
