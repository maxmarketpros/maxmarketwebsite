import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { TeamHero } from "@/components/about/team/team-hero"
import { TeamDepartments } from "@/components/about/team/team-departments"
import { TeamFinalCta } from "@/components/about/team/team-final-cta"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"
import { TEAM_MEMBERS } from "@/lib/team-data"

export const metadata: Metadata = buildMetadata({
  title: "Meet The Team",
  description:
    "Meet the 10-person Max Market Pros team — the in-house leadership, strategists, developers, and BD specialists running every engagement from our Irvine, CA office.",
  path: "/about/team",
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
        name: "Meet The Team",
        item: `${SITE_URL}/about/team`,
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
    employee: TEAM_MEMBERS.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      worksFor: { "@type": "Organization", name: "Max Market Pros" },
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
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <TeamHero />
      <TeamDepartments />
      <TeamFinalCta />
      <JsonLd />
    </main>
  )
}
