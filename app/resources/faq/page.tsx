import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema"
import { faqCategories } from "./faq-categories"
import { faqItems } from "./faq-data"
import { FaqHero } from "./faq-hero"
import { FaqCategoryNav } from "./faq-category-nav"
import { FaqCategorySection } from "./faq-category-section"
import { FaqMidCta } from "./faq-mid-cta"
import { FaqClosingCta } from "./faq-closing-cta"

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Local SEO, Web Design & Marketing Questions Answered",
  description:
    "40 answers about local SEO, websites, Google Ads, plans, pricing, and timelines for service businesses. Get clarity before you book a strategy call.",
  path: "/resources/faq",
})

// Strip markdown link syntax + <strong> tags out of answers before passing to
// the schema, so the FAQPage JSON-LD contains clean plain-text answers.
function stripFormatting(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/<\/?strong>/g, "")
}

const faqJsonLd = faqSchema(
  faqItems.map((item) => ({
    question: item.q,
    answer: stripFormatting(item.a),
  }))
)

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "FAQ", path: "/resources/faq" },
])

export default function Page() {
  // Pre-group items by category for stable rendering order.
  const itemsByCategory = faqCategories.map((cat) => ({
    category: cat,
    items: faqItems.filter((i) => i.category === cat.id),
  }))

  return (
    <main>
      <Navbar />
      <FaqHero />
      <FaqCategoryNav />

      {/* First 4 categories */}
      {itemsByCategory.slice(0, 4).map(({ category, items }) => (
        <FaqCategorySection
          key={category.id}
          category={category}
          items={items}
        />
      ))}

      <FaqMidCta />

      {/* Last 4 categories */}
      {itemsByCategory.slice(4).map(({ category, items }) => (
        <FaqCategorySection
          key={category.id}
          category={category}
          items={items}
        />
      ))}

      <FaqClosingCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
    </main>
  )
}
