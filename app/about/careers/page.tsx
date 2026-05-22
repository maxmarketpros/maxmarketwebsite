import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CareersHero } from "@/components/about/careers/careers-hero"
import { CareersWhy } from "@/components/about/careers/careers-why"
import { CareersNumbers } from "@/components/about/careers/careers-numbers"
import { CareersRoles } from "@/components/about/careers/careers-roles"
import { CareersTools } from "@/components/about/careers/careers-tools"
import { CareersPerks } from "@/components/about/careers/careers-perks"
import { CareersApply } from "@/components/about/careers/careers-apply"
import { CareersFinalCta } from "@/components/about/careers/careers-final-cta"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"
import { ROLES } from "@/lib/careers-data"

export const metadata: Metadata = buildMetadata({
  title: "Careers in Irvine, CA",
  description:
    "Join the Max Market Pros team in Irvine, California. Open roles in sales, web design, social media, video, SEO, graphic design, paid ads, and account management — all in-office.",
  path: "/about/careers",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Careers",
        item: `${SITE_URL}/about/careers`,
      },
    ],
  }

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Max Market Pros",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    sameAs: BUSINESS.socials,
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open roles at Max Market Pros",
    itemListElement: ROLES.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      description: r.summary,
      url: `${SITE_URL}/about/careers#roles`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CareersHero />
      <CareersWhy />
      <CareersNumbers />
      <CareersRoles />
      <CareersTools />
      <CareersPerks />
      <CareersApply />
      <CareersFinalCta />
      <JsonLd />
    </main>
  )
}
