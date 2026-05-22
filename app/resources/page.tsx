import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourcesBento } from "@/components/resources/resources-bento"
import { LatestArticlesStrip } from "@/components/resources/latest-articles-strip"
import { FeaturedCaseStudyTeaser } from "@/components/resources/featured-case-study-teaser"
import { FaqPreviewAccordion } from "@/components/resources/faq-preview-accordion"
import { ResourcesFinalCta } from "@/components/resources/resources-final-cta"
import { buildMetadata, SITE_URL } from "@/lib/seo"
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema"
import { faqItems } from "@/app/resources/faq/faq-data"

export const metadata: Metadata = buildMetadata({
  title:
    "Resources — Marketing Blog, Case Studies, ROI Calculator & FAQ",
  description:
    "Marketing playbooks, real client case studies, an ROI calculator, and 40 answers for service-business owners — everything we know about local SEO, web design, and Google Ads in one place.",
  path: "/resources",
})

const PREVIEW_FAQ_IDS = [
  "what-does-max-market-pros-do",
  "who-is-max-market-pros-best-for",
  "is-the-free-marketing-audit-actually-free",
  "how-do-i-get-started-with-max-market-pros",
  "where-is-max-market-pros-located",
]

function stripFormatting(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/<\/?strong>/g, "")
}

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
])

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Max Market Pros Resources",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Blog",
        name: "Marketing Blog",
        description:
          "Marketing playbooks, benchmarks, and head-to-head breakdowns for service businesses — local SEO, Google Ads, AI search, and web design.",
        url: `${SITE_URL}/resources/blog`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CollectionPage",
        name: "Case Studies",
        description:
          "Real client results — deep dives into SEO and web design wins with screenshots, rankings, and owner quotes.",
        url: `${SITE_URL}/resources/case-studies`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "WebApplication",
        name: "Marketing ROI Calculator",
        description:
          "Free calculator that shows how few jobs it takes to break even on each Max Market Pros plan.",
        url: `${SITE_URL}/resources/roi-calculator`,
        applicationCategory: "FinanceApplication",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "FAQPage",
        name: "Frequently Asked Questions",
        description:
          "40 answers about local SEO, websites, Google Ads, plans, pricing, and timelines for service businesses.",
        url: `${SITE_URL}/resources/faq`,
      },
    },
  ],
}

const previewFaqs = PREVIEW_FAQ_IDS.map((id) =>
  faqItems.find((i) => i.id === id)
).filter((i): i is NonNullable<typeof i> => Boolean(i))

const faqJsonLd = faqSchema(
  previewFaqs.map((item) => ({
    question: item.q,
    answer: stripFormatting(item.a),
  }))
)

export default function Page() {
  return (
    <main>
      <Navbar />
      <ResourcesHero />
      <ResourcesBento />
      <LatestArticlesStrip />
      <FeaturedCaseStudyTeaser />
      <FaqPreviewAccordion />
      <ResourcesFinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
    </main>
  )
}
