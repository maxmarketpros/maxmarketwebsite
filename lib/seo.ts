import type { Metadata } from "next"

export const SITE_URL = "https://www.maxmarketpros.com"
export const SITE_NAME = "Max Market Pros"
export const SITE_LOCALE = "en_US"
export const TITLE_SUFFIX = " | Max Market Pros"

export const IS_INDEXABLE =
  process.env.NEXT_PUBLIC_SEO_INDEXABLE === "true"

export const GA_MEASUREMENT_ID = "G-JZJSSSSC48"

export const BRAND = {
  primary: "#1677FF",
  primaryHover: "#0D5FD9",
  cyan: "#74D3FF",
  ink: "#0B132B",
  surface: "#FFFFFF",
} as const

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Max Market Pros",
  phone: "+1-949-603-0389",
  phoneDisplay: "(949) 603-0389",
  email: "info@maxmarketpros.com",
  street: "2600 Michelson Dr, 16th Fl",
  city: "Irvine",
  region: "CA",
  postalCode: "92612",
  country: "US",
  geo: { lat: 33.6739, lng: -117.8466 },
  priceRange: "$$",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "15:30",
  },
  socials: [
    "https://www.facebook.com/102400538247639",
    "https://www.instagram.com/maxmarketpros/",
    "https://www.linkedin.com/in/joseph-stirling/",
    "https://www.youtube.com/channel/UCUPi3awpe7Hrt5CUID9MLog",
  ],
  foundingDate: "2019",
} as const

export const robotsMeta: NonNullable<Metadata["robots"]> = IS_INDEXABLE
  ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    }
  : { index: false, follow: false, nocache: true }

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  type?: "website" | "article" | "profile"
  noindex?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  type = "website",
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`
  const canonical = path.startsWith("http") ? path : path

  const robots: Metadata["robots"] = noindex
    ? { index: false, follow: false }
    : robotsMeta

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle ?? `${title} | ${SITE_NAME}`,
      description: ogDescription ?? description,
      type,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? `${title} | ${SITE_NAME}`,
      description: ogDescription ?? description,
    },
    robots,
  }
}
