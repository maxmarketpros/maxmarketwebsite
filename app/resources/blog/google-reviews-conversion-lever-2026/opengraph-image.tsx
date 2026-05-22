import { ogTemplate } from "../../../opengraph-image"

export const alt =
  "Google Reviews — the #1 conversion lever for service businesses in 2026"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Blog · Local SEO · Reviews",
    headline: "Google Reviews: the #1 conversion lever in 2026.",
    sub: "Why velocity beats volume, the hockey-stick at 4.5 stars, and the 5-step Reputation Engine.",
  })
}
