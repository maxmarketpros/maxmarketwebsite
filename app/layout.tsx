import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ContactSectionGlobal } from '@/components/contact-section-global'
import { Footer } from '@/components/footer'
import { SITE_NAME, SITE_URL, robotsMeta } from '@/lib/seo'
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  jsonLd,
} from '@/lib/schema'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Grow on Google. Get More Calls & Booked Jobs.`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Done-for-you local SEO, web design, and lead generation built for service businesses. Track every call, form, and booked job with clear monthly reporting.',
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: robotsMeta,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { email: false, address: false, telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#1677FF',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <ContactSectionGlobal />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
