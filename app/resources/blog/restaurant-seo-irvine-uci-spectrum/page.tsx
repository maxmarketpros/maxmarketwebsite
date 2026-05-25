import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  XCircle,
  Camera,
  Utensils,
  CalendarDays,
  Layers,
  Image as ImageIcon,
  Star,
  Megaphone,
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

const SLUG = "restaurant-seo-irvine-uci-spectrum"

const post = getPostBySlug(SLUG)!

export const metadata: Metadata = buildMetadata({
  title: post.seoTitle ?? post.title,
  description: post.description,
  path: `/resources/blog/${SLUG}`,
  type: "article",
  ogTitle: post.title,
})

const CLUSTERS: { name: string; lens: string; reality: string; signal: string }[] = [
  {
    name: "Diamond Jamboree",
    lens: "Korean BBQ, hotpot, dessert cafes",
    reality:
      "The densest Asian-cuisine cluster in OC. Twenty-plus restaurants in one plaza competing for &quot;Korean BBQ Irvine,&quot; &quot;hotpot Irvine,&quot; and &quot;late-night dessert Irvine.&quot; The winners are the ones with bilingual menus and Mandarin / Korean review velocity.",
    signal: "Photo cadence and Korean-language reviews",
  },
  {
    name: "University Town Center (UTC)",
    lens: "UCI student volume, casual fast-casual",
    reality:
      "Boba shops, ramen counters, Cha For Tea, Asian Box, Sweet Hut. Search demand spikes around the UCI 10-week quarter system. The big ranking lever is Google Posts that surface finals-week deals and quarter-start promos.",
    signal: "Weekly Google Posts tied to UCI calendar",
  },
  {
    name: "Irvine Spectrum",
    lens: "Date-night, sit-down, nightlife adjacent",
    reality:
      "Spectrum&apos;s nightlife corridor pulls evening search like nowhere else in the city. The winners on &quot;dinner Irvine Spectrum&quot; and &quot;happy hour Irvine&quot; are the ones with reservation links, accurate hours including patio hours, and dish photos that match seasonal menus.",
    signal: "Reservation link + accurate evening hours",
  },
  {
    name: "Woodbridge Village Center",
    lens: "Family dining, neighborhood regulars",
    reality:
      "Repeat-customer base. Search volume is lower than Spectrum but conversion is higher. Reviews mention regulars by name and dishes by name. Google reads that pattern and treats the profile as topically dense for &quot;family restaurant Woodbridge&quot; queries.",
    signal: "Named-dish review prompts",
  },
]

const GBP_RESTAURANT_CHECKLIST: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <Utensils className="w-5 h-5" />,
    title: "Menu link with parsable HTML, not a PDF",
    body:
      "Google parses HTML menus into the rich result. A PDF menu is invisible to AI Overviews. Host the menu as a real page (with structured Menu schema if you can swing it) and link from GBP.",
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    title: "Reservation link wired to OpenTable, Resy, or Yelp",
    body:
      "Connect Reserve with Google. Friction reduction lifts conversion 15 to 30% and signals quality to Google. If you cannot integrate, link directly to your reservation page; never a phone number alone.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Dish photos uploaded weekly, geo-tagged",
    body:
      "Per Google&apos;s own restaurant guidance, profiles with photos see substantially higher engagement than those without (Google business research). Customer-shot dish photos engage more than your professional shoot.",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Weekly Google Posts tied to a real event",
    body:
      "Posts decay after seven days. A quiet profile reads as a closed restaurant. Push one offer or update weekly: happy hour, new dish, finals-week boba special, Lunar New Year prix-fixe. Real photos only.",
  },
  {
    icon: <ImageIcon className="w-5 h-5" />,
    title: "Cuisine and dietary attributes set correctly",
    body:
      "Vegan options, vegetarian options, halal, kosher, gluten-free, organic. Each attribute is a filter Google applies. Restaurants that check them all pull queries the competition never sees.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Owner responses on every review, named",
    body:
      "Respond to every review, name the dish or detail in the response, name the guest where you remember them. Google reads response density and length as a quality signal. Future diners read it as proof you care.",
  },
]

const SEASONALITY: { window: string; trigger: string; query: string }[] = [
  {
    window: "Late September",
    trigger: "UCI fall quarter starts",
    query: "&quot;late night food near UCI&quot;, &quot;boba Irvine&quot;, &quot;cheap eats UTC&quot;",
  },
  {
    window: "Late January",
    trigger: "Lunar New Year (~Jan 29 to Feb 16)",
    query: "&quot;Lunar New Year menu Irvine&quot;, &quot;Chinese New Year reservations Irvine&quot;",
  },
  {
    window: "Mid March",
    trigger: "UCI winter finals week",
    query: "&quot;open late Irvine&quot;, &quot;study spot with food UCI&quot;",
  },
  {
    window: "Late March",
    trigger: "Nowruz / Persian New Year",
    query: "&quot;Persian restaurant Irvine&quot;, &quot;Nowruz dinner Northwood&quot;",
  },
  {
    window: "May to June",
    trigger: "UCI graduation",
    query: "&quot;graduation dinner Irvine&quot;, &quot;private dining UCI parents&quot;",
  },
  {
    window: "September",
    trigger: "Mid-Autumn Festival (~mid Sep)",
    query: "&quot;mooncakes Irvine&quot;, &quot;Mid-Autumn dinner Diamond Jamboree&quot;",
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How often should an Irvine restaurant post on GBP?",
    answer:
      "Once a week, minimum. Google Posts decay after seven days, so a profile without a recent post reads as inactive. Tie posts to real events: a new dish, a finals-week deal, Lunar New Year prix-fixe, a happy-hour change. One post per week beats six posts in one day every time.",
  },
  {
    question: "Should I respond to bad Yelp reviews?",
    answer:
      "Yes, but briefly and without arguing. Acknowledge, apologize where warranted, invite offline conversation. Future diners are reading the response, not the original reviewer. The bigger Yelp question is whether to spend energy there at all. Google captures roughly 81% of reputation-related searches; Yelp captures around 7%. Allocate attention accordingly.",
  },
  {
    question: "Does adding a delivery link (DoorDash, Uber Eats) hurt my Google ranking?",
    answer:
      "No. Google explicitly supports third-party order links in GBP and treats them as a quality signal because they reduce friction. The mistake some restaurants make is letting DoorDash or Uber Eats list their NAP inconsistently in the citation graph; clean that up annually.",
  },
  {
    question: "How do I get cited in Google AI Overviews for restaurant queries?",
    answer:
      "Three moves do most of the work: parsable HTML menus (not PDFs) with dish-level pages where the budget allows, FAQ schema on the homepage answering the questions diners actually ask (dress code, parking, dietary, reservations), and structured Menu schema where your platform supports it. AI Overviews also pull review snippets, so review-velocity work pays double duty.",
  },
  {
    question: "Should I have separate landing pages for each dish?",
    answer:
      "Not for every dish, but for two or three signature dishes that genuinely have search volume, yes. &quot;Best ramen Irvine,&quot; &quot;best Korean BBQ Irvine,&quot; &quot;best boba near UCI&quot; are all rankable dish-level queries. A signature-dish page with photos, reviews, and an order link can outrank generic restaurant directory results.",
  },
  {
    question: "Is Yelp Advertising worth it for Irvine restaurants?",
    answer:
      "Almost never. Yelp Ads target the user already on Yelp; the better investment is to win the Google Maps result that drove them to consider Yelp in the first place. Spend that budget on review-velocity automation, photo cadence, and one new dish-level page a quarter.",
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
              How to rank for <span className="accent-underline">&quot;best Korean BBQ in Irvine.&quot;</span>
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
                Irvine has roughly{" "}
                <a
                  href="https://www.universityofcalifornia.edu/about-us/information-center/fall-enrollment-glance"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="font-semibold hover:underline"
                >
                  36,000 UCI students
                </a>{" "}
                feeding a 10-week quarter cycle of food search spikes, on top of one of the densest Asian-cuisine clusters in California at Diamond Jamboree.
              </li>
              <li>
                Restaurant queries are <strong>explicitly local</strong>. Google&apos;s local algorithm rewards real-photo cadence, parsable HTML menus, review velocity, and Reserve with Google integration far more than it rewards backlinks or blog content.
              </li>
              <li>
                The four Irvine restaurant clusters (Diamond Jamboree, UTC, Spectrum, Woodbridge) fight different SEO battles. Owning your cluster beats trying to rank citywide.
              </li>
            </ul>
          </PostCallout>
        </PostBody>

        <PostSection
          pill="The market in four numbers"
          heading="Why Irvine restaurants underspend on SEO."
          intro="Most independent restaurants here lean on Yelp, foot traffic, and DoorDash for discovery and never claim the Google Maps result that decides whether a diner walks past or walks in. The four numbers that should rewrite that math:"
        >
          <StatTrio
            columns={4}
            items={[
              { iconId: "12197", value: "36k", label: "UCI students within 3 miles", sub: "Demand spikes on a 10-week cadence" },
              { iconId: "13794", value: "4", label: "Distinct Irvine clusters", sub: "Each with its own search dynamics" },
              { iconId: "QNjsAGAlpuNW", value: "81%", label: "Local-recommendation share to Google", sub: "Yelp combined ~7%" },
              { iconId: "63692", value: "4.5★", label: "Threshold for top-3 Map Pack", sub: "Below this, you stop showing up" },
            ]}
          />
        </PostSection>

        <PostSection
          pill="The cluster map"
          heading="Four neighborhoods, four ranking fights."
          intro={
            <>
              The same restaurant query returns different results in Diamond Jamboree, UTC, Spectrum, and Woodbridge. The intent is different, the competitors are different, and the moves that move the needle are different. Pair these with{" "}
              <Link
                href="/services/seo/local"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                local SEO mechanics
              </Link>{" "}
              and you compound fast.
            </>
          }
          variant="wide"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {CLUSTERS.map((c) => (
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
                <p
                  className="text-[14px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                  dangerouslySetInnerHTML={{ __html: c.reality }}
                />
                <div
                  className="mt-auto pt-3 text-[12.5px] font-semibold"
                  style={{ color: "var(--ink)", borderTop: "1px solid var(--border-color)" }}
                >
                  <span style={{ color: "var(--muted)" }}>Highest-leverage move: </span>
                  {c.signal}
                </div>
              </div>
            ))}
          </div>
        </PostSection>

        <PostSection
          pill="GBP for restaurants"
          heading="Six fields that actually move ranking."
          intro={
            <>
              These six items in your{" "}
              <a
                href="https://support.google.com/business/answer/3038177"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Google Business Profile
              </a>{" "}
              do more than the rest of the dashboard combined. Most independent Irvine restaurants leave at least four of them empty.
            </>
          }
        >
          <ol className="space-y-3 sm:space-y-4 list-none p-0 m-0">
            {GBP_RESTAURANT_CHECKLIST.map((item, idx) => (
              <li
                key={item.title}
                className="card-surface flex gap-4 sm:gap-5 p-5 sm:p-6"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {item.icon}
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
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PostSection>

        <PostSection
          pill="Customer photos beat pro shots"
          heading={<>The counter-intuitive photo rule.</>}
          intro="Restaurant owners spend $1,500 on a food-photography shoot, upload 40 images, and then the engagement chart goes flat. The reason: Google&apos;s restaurant Maps surface weights customer-uploaded photos higher than business-uploaded photos, because they read as more authentic. The fix is not to skip the pro shoot. It is to design for both."
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
              <p className="text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                Upload 40 professional photos in one day, then nothing for six months. Profile reads as stale. Photo carousels do not rotate. Engagement plateaus.
              </p>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• No fresh-content signal week to week</li>
                <li>• No diversity in lighting, plating, or angle</li>
                <li>• Diners can tell. Engagement drops within 30 days.</li>
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
              <p className="text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                Stagger the pro shoot across three months. Add five phone-shot dish photos per week from the kitchen. Prompt diners with a small table-card asking for a photo with their Google review.
              </p>
              <ul
                className="text-[12.5px] leading-[1.6] space-y-1 pt-3 mt-1"
                style={{ color: "var(--muted)", borderTop: "1px solid var(--border-color)" }}
              >
                <li>• Weekly freshness signal Google reads as &quot;active&quot;</li>
                <li>• Phone EXIF data confirms photos were shot on-site</li>
                <li>• Diner-uploaded photos boost trust signals further</li>
              </ul>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="UCI calendar = demand"
          heading="The seasonality every Irvine operator should plan against."
          intro={
            <>
              Most cities have a holiday calendar. Irvine has a holiday calendar plus a UCI academic calendar plus a Lunar / Persian / Mid-Autumn cultural calendar. Each one spikes a different query cluster. Pre-write Google Posts for each window two weeks ahead. Pair with{" "}
              <Link
                href="/services/social-media/management"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                social media management
              </Link>{" "}
              and you compound the reach.
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
                      Window
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Trigger
                    </th>
                    <th
                      className="px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: "var(--accent)" }}
                    >
                      Query Cluster That Spikes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SEASONALITY.map((row, idx) => (
                    <tr
                      key={row.window + row.trigger}
                      style={{
                        borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      <td className="px-5 py-4 font-bold align-top whitespace-nowrap" style={{ color: "var(--ink)" }}>
                        {row.window}
                      </td>
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--ink)" }}>
                        {row.trigger}
                      </td>
                      <td
                        className="px-5 py-4 align-top"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: row.query }}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PostSection>

        <PostSection
          pill="The bilingual menu play"
          heading="Diamond Jamboree&apos;s real ranking lever."
          intro={
            <>
              30.5% of Irvine speaks an Asian language at home (
              <a
                href="https://datausa.io/profile/geo/irvine-ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Data USA
              </a>
              ). At Diamond Jamboree specifically, the dinner crowd skews Korean and Mandarin first-language. Restaurants that publish a bilingual menu page, accept reviews in Mandarin or Korean, and respond in the diner&apos;s language pull queries the English-only competitors never see.
            </>
          }
        >
          <PostProse>
            <p>
              The minimum useful version: a bilingual menu page at /menu-zh or /menu-ko, a Mandarin or Korean description inside the GBP Service entry for your signature dish, and review-prompt SMS in the diner&apos;s preferred language (your POS likely already knows it). For the full playbook see{" "}
              <Link
                href="/resources/blog/bilingual-local-seo-irvine"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                the bilingual search edge for Irvine businesses
              </Link>
              .
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="AI Overviews for restaurants"
          heading="What gets cited, what gets ignored."
          intro={
            <>
              Google&apos;s AI Overviews now answer restaurant queries with a summary block that pulls from menu pages, FAQ schema, and review snippets. Restaurants that structure their content for this get cited; restaurants that hide their menu in a PDF do not. For the broader citation play, see{" "}
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
              Concrete moves: a real HTML menu page (not a PDF, not an image), a homepage FAQ block answering &quot;Do you take reservations?&quot;, &quot;Is there parking?&quot;, &quot;What is your dress code?&quot;, &quot;Do you have vegetarian / gluten-free / halal options?&quot;, wrapped in FAQPage schema. Add structured Menu schema where your platform supports it (Squarespace and most modern restaurant CMS do).
            </p>
            <p>
              Review snippets get pulled directly. If two customers mention &quot;the brisket fried rice&quot; by name, AI Overviews will surface that dish. Prompt diners to mention dishes by name.
            </p>
          </PostProse>
        </PostSection>

        <PostSection
          pill="FAQ"
          heading="The questions restaurant owners actually ask."
          intro={
            <>
              The six we hear most often. For the broader industry context, see the{" "}
              <Link
                href="/industries/restaurants"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                restaurants industry page
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
              Restaurant SEO in Irvine is not won with backlinks or blog posts. It is won with weekly photo cadence, a parsable menu, Google Posts tied to a calendar nobody else is tracking, and review velocity from diners who name dishes. Once those four habits are in place, &quot;best Korean BBQ in Irvine&quot; (or whatever your version of that query is) becomes a winnable result.{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)" }}
                className="font-semibold hover:underline"
              >
                Want a free audit of your restaurant GBP
              </Link>
              ? We take 24 hours.
            </p>
          </PostProse>
        </PostBody>

        <PostCta
          pill="Maps on autopilot"
          heading="Be the &quot;best in Irvine&quot; result, not the one buried under it."
          description="We audit your restaurant GBP, build a parsable menu page, install a weekly photo cadence, and run review-velocity automation. Monthly reporting that tracks Map Pack share by cluster."
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
