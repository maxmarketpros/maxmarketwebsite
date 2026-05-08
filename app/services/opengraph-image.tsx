import { ogTemplate } from "../opengraph-image"

export const alt = "Marketing services from Max Market Pros"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Services",
    headline: "24 marketing services. One in-house team.",
    sub: "SEO, web design, social media, and paid ads — bundle what you need today, expand when you're ready.",
  })
}
