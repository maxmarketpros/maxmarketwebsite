export type QRCodesFaq = {
  q: string
  a: string
}

export const qrCodesFaqs: QRCodesFaq[] = [
  {
    q: "What's the difference between a static and a dynamic QR code?",
    a: "A static QR code encodes the destination URL directly — once printed, it can't be changed. A dynamic QR points to a short redirect that you control, so you can change the destination (and the campaign attribution) whenever you want, without reprinting. Dynamic also unlocks scan analytics. We use dynamic by default.",
  },
  {
    q: "Can I brand the QR code with colors and a logo?",
    a: "Yes. Custom colors, rounded modules, branded center logo, and custom eyes (the three corner squares). We stress-test every branded QR on real phones to ensure scannability isn't compromised.",
  },
  {
    q: "What can I see in the analytics?",
    a: "Total scans, unique scans, scans by day/hour/week, scans by approximate location (state/city), scans by device (iPhone vs Android), and scans by referring source tag. Attached to your GA4 property so conversions attribute back to the QR that drove them.",
  },
  {
    q: "Where do service businesses typically use QR codes?",
    a: "Yard signs at completed job sites (our #1 use), business cards, invoices, truck wraps, job-site banners, menu printables, product packaging, direct mail, and service sticker tags on customer equipment. Every physical touchpoint becomes trackable.",
  },
  {
    q: "Can I generate a bunch of QR codes at once?",
    a: "Yes. Bulk generate hundreds of unique QR codes tied to CSV input — great for yard signs per neighborhood, per technician, or per campaign. Each carries its own UTM tags so your analytics can tell them apart.",
  },
  {
    q: "Do they expire?",
    a: "Static QR codes never expire. Dynamic QR codes stay live as long as your account is active — and can be edited, paused, or retired at any time. If a yard sign is out in the wild for two years, the QR still works.",
  },
]
