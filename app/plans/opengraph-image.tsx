import { ogTemplate } from "../opengraph-image"

export const alt = "Marketing plans from Max Market Pros"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return ogTemplate({
    eyebrow: "Plans & Pricing",
    headline: "Flexible plans for every stage of growth.",
    sub: "From a la carte to fully managed — pick the plan that fits where you are right now.",
  })
}
