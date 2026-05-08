import { ogTemplate } from "../opengraph-image"

export const alt = "Contact Max Market Pros"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Contact",
    headline: "Talk to a local growth strategist.",
    sub: "Call, email, or book a free 20-minute strategy call. Office in Irvine, CA.",
  })
}
