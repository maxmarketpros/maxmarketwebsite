import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BlogIndexHero } from "@/components/blog/blog-index-hero"
import { BlogCategoryStrip } from "@/components/blog/blog-category-strip"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletterCta } from "@/components/blog/blog-newsletter-cta"
import { buildMetadata } from "@/lib/seo"
import { breadcrumbSchema } from "@/lib/schema"
import { blogItemListSchema } from "@/lib/schema-blog"
import { getFeaturedPost, posts } from "@/lib/blog-data"

export const metadata: Metadata = buildMetadata({
  title: "Marketing Blog · Web Design, SEO & Google Ads for Service Businesses",
  description:
    "Benchmarks, head-to-head breakdowns, and growth plays for service businesses — custom websites, Google Ads, local SEO, and lead generation from Max Market Pros.",
  path: "/resources/blog",
})

export default function Page() {
  const featured = getFeaturedPost()
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/resources/blog" },
  ])
  const itemList = blogItemListSchema(
    posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
    })),
  )

  return (
    <main>
      <Navbar />
      <BlogIndexHero featured={featured} />
      <BlogCategoryStrip />
      <BlogGrid />
      <BlogNewsletterCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </main>
  )
}
