import type { MetadataRoute } from "next"
import { IS_INDEXABLE, SITE_URL as BASE_URL } from "@/lib/seo"

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },

  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/our-story", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/team", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/about/partners", priority: 0.4, changeFrequency: "monthly" },
  { path: "/about/practices", priority: 0.4, changeFrequency: "monthly" },
  { path: "/about/testimonials", priority: 0.5, changeFrequency: "monthly" },

  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact/schedule", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/support", priority: 0.5, changeFrequency: "monthly" },

  { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/automotive", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries/contractors", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries/home-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries/local-service", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries/medical", priority: 0.6, changeFrequency: "monthly" },
  { path: "/industries/restaurants", priority: 0.6, changeFrequency: "monthly" },

  { path: "/plans", priority: 0.8, changeFrequency: "monthly" },
  { path: "/plans/a-la-carte", priority: 0.6, changeFrequency: "monthly" },
  { path: "/plans/custom-website", priority: 0.6, changeFrequency: "monthly" },
  { path: "/plans/localmark", priority: 0.6, changeFrequency: "monthly" },
  { path: "/plans/servicepro", priority: 0.6, changeFrequency: "monthly" },
  { path: "/plans/signature", priority: 0.6, changeFrequency: "monthly" },

  { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/blog/ai-search-optimization-2026", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/blog/google-reviews-conversion-lever-2026", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/blog/google-ads-irvine-cost-2026", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/blog/custom-coded-vs-wix-squarespace-irvine", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/case-studies", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources/faq", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/roi-calculator", priority: 0.6, changeFrequency: "monthly" },

  { path: "/services", priority: 0.9, changeFrequency: "monthly" },

  { path: "/services/seo", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/seo/local", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/seo/on-page", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/seo/technical", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/seo/off-page", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/seo/backlinks", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/seo/ai-search", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/seo/press-releases", priority: 0.7, changeFrequency: "monthly" },

  { path: "/services/social-media", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/social-media/management", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/social-media/tiktok", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media/youtube", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media/video-editing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media/graphic-design", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media/drone", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media/review-generation", priority: 0.7, changeFrequency: "monthly" },

  { path: "/services/paid-ads", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/paid-ads/google-ads", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/paid-ads/facebook-ads", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/paid-ads/instagram-ads", priority: 0.7, changeFrequency: "monthly" },

  { path: "/services/web-design", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/web-design/custom-coded", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/custom-designed", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/webflow", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/wordpress", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/squarespace", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/wix", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-design/godaddy", priority: 0.7, changeFrequency: "monthly" },

  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/ai-agents", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/analytics", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/calendar", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/custom-web-apps", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/document-signing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/email-marketing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/lead-generation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/payments", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/qr-codes", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/task-management", priority: 0.7, changeFrequency: "monthly" },

  { path: "/tools", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tools/directory-checker", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tools/logo-creator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tools/ranking-checker", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tools/seo-auditor", priority: 0.6, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return []
  const lastModified = new Date()
  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
