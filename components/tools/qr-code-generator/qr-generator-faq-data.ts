export const qrToolFaqs = [
  {
    q: "Are these QR codes really free?",
    a: 'Yes — every QR you generate here is free, with no signup, no watermark, and no expiration. The codes are "static," which means the destination is baked into the QR forever. If you need to change the URL after the QR is printed, you\'ll want a <a href="/solutions/qr-codes" style="color:var(--accent);text-decoration:underline">dynamic QR from our paid plans</a>.',
  },
  {
    q: "What's the difference between PNG and SVG?",
    a: "PNG is a pixel image — great for screens, social posts, and most print jobs up to ~2000 px. SVG is a vector format that scales infinitely without blur — use it for billboards, vehicle wraps, large yard signs, or anywhere you need print-perfect crispness at any size.",
  },
  {
    q: "Can I put my logo in the middle of the QR code?",
    a: "Yes. Upload a PNG, JPG, or SVG and we'll center it inside the QR with a clean white pad. We automatically bump the error-correction level to the highest setting (H) so the code keeps scanning even with the overlay covering ~22% of the modules.",
  },
  {
    q: "Will a WiFi QR code actually auto-join the network when scanned?",
    a: 'Yes — on iOS 11+ and Android 10+ the native camera recognizes the WiFi payload and prompts a one-tap join. It\'s perfect for cafes, offices, Airbnb welcome cards, and event venues. Pair the QR with a printed sign or laminated card and you\'ve eliminated 99% of "what\'s the WiFi password?" questions.',
  },
  {
    q: "What if I need to change where the QR points after I print it?",
    a: 'Static QRs (what this free tool generates) cannot be edited after creation — the destination is encoded directly into the dots. If you want editable destinations, scan tracking, A/B testing, or expiring links, you need <a href="/solutions/qr-codes" style="color:var(--accent);text-decoration:underline">dynamic QR codes</a>, which we offer as a paid service.',
  },
  {
    q: "How do I know my QR will actually scan?",
    a: "Three things matter: contrast, size, and quiet zone. Keep dark-on-light contrast above ~3:1 (we warn you if it's too low), print at least 1×1 inch for arm's-length scanning (2×2+ for poster distance), and leave the white border around the QR untouched. For mission-critical campaigns — yard signs, vehicle wraps, billboards — let us stress-test the design first.",
  },
  {
    q: "Can you track who scans my QR code?",
    a: 'The free tool generates static QRs that scan straight to your URL — your existing analytics (GA4, Meta Pixel, etc.) capture the visit, but you won\'t see scan-level data like location, time, or device. For full <a href="/solutions/analytics" style="color:var(--accent);text-decoration:underline">scan analytics</a>, you\'ll want our dynamic-QR + tracking service.',
  },
  {
    q: "Is my data safe? Where does the QR get generated?",
    a: "Everything happens client-side in your browser. We never see, store, or transmit your URLs, WiFi passwords, vCards, or any other content. Close the tab and the data is gone. If you want help setting up campaigns or want a managed solution, <a href=\"/contact\" style=\"color:var(--accent);text-decoration:underline\">book a free consult</a> instead.",
  },
]
