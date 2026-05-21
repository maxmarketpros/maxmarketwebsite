import { SITE_URL, SITE_NAME, BUSINESS } from "./seo"
import type { BlogPost } from "./blog-data"

const orgId = `${SITE_URL}/#organization`

export function articleSchema(post: BlogPost) {
  const url = `${SITE_URL}/resources/blog/${post.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: `${url}/opengraph-image`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.wordCount,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { "@id": orgId },
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logo.png`,
      },
    },
    about: {
      "@type": "Place",
      name: `${BUSINESS.city}, ${BUSINESS.region}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        addressCountry: BUSINESS.country,
      },
    },
  }
}

export function blogItemListSchema(
  items: { slug: string; title: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE_URL}/resources/blog/${item.slug}`,
      name: item.title,
      description: item.description,
    })),
  }
}
