import { ogTemplate } from "../opengraph-image"

export const alt = "Industries served by Max Market Pros"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Industries",
    headline: "Marketing built for service businesses.",
    sub: "Contractors, home services, restaurants, medical, automotive, and local service brands.",
  })
}
