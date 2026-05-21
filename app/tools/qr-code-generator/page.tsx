import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { buildMetadata } from "@/lib/seo"
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  jsonLd,
  webApplicationSchema,
} from "@/lib/schema"
import { QrGeneratorHero } from "@/components/tools/qr-code-generator/qr-generator-hero"
import { QrGeneratorTool } from "@/components/tools/qr-code-generator/qr-generator-tool"
import { QrGeneratorHowTo, howToSteps } from "@/components/tools/qr-code-generator/qr-generator-how-to"
import { QrGeneratorUpsells } from "@/components/tools/qr-code-generator/qr-generator-upsells"
import { QrGeneratorFaq } from "@/components/tools/qr-code-generator/qr-generator-faq"
import { qrToolFaqs } from "@/components/tools/qr-code-generator/qr-generator-faq-data"
import { QrGeneratorFinalCta } from "@/components/tools/qr-code-generator/qr-generator-final-cta"

export const metadata: Metadata = buildMetadata({
  title: "Free QR Code Generator — URL, WiFi, vCard, Branded",
  description:
    "Generate free QR codes for URLs, WiFi, email, phone, SMS, and vCards. Custom colors, logo overlay, PNG and SVG downloads. No signup, no watermark, instant.",
  path: "/tools/qr-code-generator",
})

const webAppJsonLd = webApplicationSchema({
  name: "QR Code Generator",
  description:
    "Free in-browser QR code generator supporting URL, plain text, email, phone, SMS, WiFi, and vCard. Customize colors, add a center logo, and export PNG or SVG.",
  path: "/tools/qr-code-generator",
  category: "BusinessApplication",
})

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: "QR Code Generator", path: "/tools/qr-code-generator" },
])

const howToJsonLd = howToSchema({
  name: "How to make a QR code",
  description:
    "Generate a free, customizable QR code in four steps: pick a content type, style it, add an optional logo, and download as PNG or SVG.",
  totalTime: "PT1M",
  steps: howToSteps.map((s) => ({ name: s.name, text: s.text })),
})

const faqJsonLd = faqSchema(
  qrToolFaqs.map((f) => ({
    question: f.q,
    answer: f.a.replace(/<[^>]+>/g, ""),
  })),
)

export default function Page() {
  return (
    <main>
      <Navbar />
      <QrGeneratorHero />
      <QrGeneratorTool />
      <QrGeneratorHowTo />
      <QrGeneratorUpsells />
      <QrGeneratorFaq />
      <QrGeneratorFinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
    </main>
  )
}
