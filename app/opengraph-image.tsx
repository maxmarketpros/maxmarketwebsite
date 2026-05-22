import { ImageResponse } from "next/og"

export const alt = "Max Market Pros — Local SEO, Web Design & Lead Generation"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return ogTemplate({
    eyebrow: "MAX MARKET PROS",
    headline: "Grow on Google. Get more calls and booked jobs.",
    sub: "Done-for-you local SEO, web design, and lead generation for service businesses.",
  })
}

export function ogTemplate({
  eyebrow,
  headline,
  sub,
}: {
  eyebrow: string
  headline: string
  sub?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1677FF 0%, #4FA8FF 50%, #74D3FF 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {headline}
          </div>
          {sub ? (
            <div
              style={{
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 1.35,
                opacity: 0.92,
                maxWidth: 980,
              }}
            >
              {sub}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 600,
            opacity: 0.9,
          }}
        >
          <div>maxmarketpros.com</div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>Irvine, CA</span>
            <span>·</span>
            <span>(949) 603-0389</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
