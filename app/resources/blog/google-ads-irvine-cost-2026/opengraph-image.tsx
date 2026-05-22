import { ogTemplate } from "../../../opengraph-image"

export const alt = "Google Ads in Irvine, CA — 2026 cost benchmarks"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Blog · Google Ads · Irvine, CA",
    headline: "Google Ads in Irvine: 2026 cost benchmarks & the OC playbook.",
    sub: "CPCs by trade, the $5K mix that books jobs, and the five mistakes that burn budget.",
  })
}
