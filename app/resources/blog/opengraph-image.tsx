import { ogTemplate } from "../../opengraph-image"

export const alt = "Max Market Pros blog — growth notes for service businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "The Max Market Pros Blog",
    headline: "Growth notes for service businesses.",
    sub: "Benchmarks, head-to-head breakdowns, and growth plays — web design, Google Ads, and local SEO.",
  })
}
