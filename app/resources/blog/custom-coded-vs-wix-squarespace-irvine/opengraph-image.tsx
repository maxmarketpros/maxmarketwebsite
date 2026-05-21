import { ogTemplate } from "../../../opengraph-image"

export const alt =
  "Custom-coded vs Wix & Squarespace for Irvine service businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Blog · Web Design · Irvine, CA",
    headline: "Custom-coded vs Wix & Squarespace — for Irvine service businesses.",
    sub: "Lighthouse, Core Web Vitals, and 3-year TCO — head-to-head data for OC operators.",
  })
}
