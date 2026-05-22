import { ogTemplate } from "../opengraph-image"

export const alt = "Free marketing tools from Max Market Pros"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Free Tools",
    headline: "Free tools to audit your online presence.",
    sub: "Directory checker, ranking checker, SEO auditor, and more — no sign-up required.",
  })
}
