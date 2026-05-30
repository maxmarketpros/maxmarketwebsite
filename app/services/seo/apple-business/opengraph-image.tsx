import {
  renderAppleBusinessOg,
  ogSize,
  ogAlt,
} from "@/components/seo/apple-business/apple-business-og"

export const runtime = "nodejs"
export const alt = ogAlt
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderAppleBusinessOg()
}
