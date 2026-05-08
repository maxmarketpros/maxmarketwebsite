import { BUSINESS, SITE_NAME, SITE_URL } from "./seo"

const orgId = `${SITE_URL}/#organization`
const websiteId = `${SITE_URL}/#website`
const localBusinessId = `${SITE_URL}/#localbusiness`

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: SITE_NAME,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/opengraph-image`,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  foundingDate: BUSINESS.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  sameAs: BUSINESS.socials,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Done-for-you local SEO, web design, and lead generation for service businesses.",
  publisher: { "@id": orgId },
  inLanguage: "en-US",
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": localBusinessId,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/brand/logo.png`,
  logo: `${SITE_URL}/brand/logo.png`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.hours.days,
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
  ],
  sameAs: BUSINESS.socials,
  areaServed: { "@type": "Country", name: "United States" },
  parentOrganization: { "@id": orgId },
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function serviceSchema(args: {
  name: string
  description: string
  path: string
  serviceType?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    serviceType: args.serviceType ?? args.name,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "United States" },
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function webApplicationSchema(args: {
  name: string
  description: string
  path: string
  category?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    applicationCategory: args.category ?? "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@id": orgId },
  }
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
}
