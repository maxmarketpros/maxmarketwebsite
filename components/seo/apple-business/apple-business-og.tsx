import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

export const ogSize = { width: 1200, height: 630 }
export const ogAlt =
  "Apple Business profile management by Max Market Pros — get found first on Apple Maps"

const APPLE_PATH =
  "M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.661 0-2.256.91-3.642.91-1.389 0-2.395-1.19-3.37-2.53-1.6-2.31-2.876-6.33-1.202-9.99.83-1.83 2.313-2.98 3.946-3.01 1.518-.03 2.95.97 3.998.97 1.063 0 2.81-1.16 4.738-1.16.81 0 3.04.32 4.471 2.42-.117.073-2.67 1.55-2.668 4.61.003 3.65 3.213 4.87 3.246 4.88z"

async function loadGoogleFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Outfit:wght@${weight}`, {
        // Old UA forces a TTF src (Satori cannot parse woff2).
        headers: { "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)" },
      })
    ).text()
    const m = css.match(/src:\s*url\((https:[^)]+\.ttf)\)/)
    if (!m) return null
    return await (await fetch(m[1])).arrayBuffer()
  } catch {
    return null
  }
}

export async function renderAppleBusinessOg() {
  const weights = [400, 600, 800] as const
  const fontData = await Promise.all(weights.map(loadGoogleFont))
  type LoadedFont = { name: "Outfit"; data: ArrayBuffer; weight: 400 | 600 | 800; style: "normal" }
  const fonts = weights
    .map((weight, i) => ({ name: "Outfit" as const, data: fontData[i], weight, style: "normal" as const }))
    .filter((f): f is LoadedFont => f.data !== null)

  let logoSrc: string | null = null
  try {
    const buf = await readFile(join(process.cwd(), "public", "brand", "logo.png"))
    logoSrc = `data:image/png;base64,${buf.toString("base64")}`
  } catch {
    logoSrc = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Outfit, sans-serif",
          background: "linear-gradient(135deg, #FFFFFF 0%, #EAF2FF 55%, #D8E9FF 100%)",
        }}
      >
        {/* glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(22,119,255,0) 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 660,
            height: 660,
            borderRadius: 9999,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(116,211,255,0.28) 0%, rgba(116,211,255,0) 60%)",
          }}
        />

        {/* content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "70px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: copy */}
          <div style={{ display: "flex", flexDirection: "column", width: 610 }}>
            {/* eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "9px 18px",
                borderRadius: 9999,
                background: "#FFFFFF",
                border: "1px solid #DCE6F2",
                boxShadow: "0 6px 18px rgba(17,35,68,0.08)",
                marginBottom: 28,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" style={{ marginRight: 10 }}>
                <path d={APPLE_PATH} fill="#1D1D1F" />
              </svg>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#1D1D1F",
                }}
              >
                APPLE BUSINESS
              </span>
            </div>

            {/* headline */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 74, fontWeight: 800, letterSpacing: -2 }}>
                <span style={{ color: "#0B132B" }}>Get found</span>
                <span style={{ color: "#1677FF", marginLeft: 18 }}>first</span>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 74,
                  fontWeight: 800,
                  letterSpacing: -2,
                  color: "#0B132B",
                  marginTop: 2,
                }}
              >
                on Apple Maps.
              </div>
            </div>

            {/* subline */}
            <div
              style={{
                display: "flex",
                fontSize: 27,
                fontWeight: 400,
                color: "#4A5A75",
                marginTop: 26,
                lineHeight: 1.4,
                maxWidth: 560,
              }}
            >
              Claimed, optimized &amp; managed — plus the all-new Apple Maps Ads.
            </div>

            {/* footer */}
            <div style={{ display: "flex", alignItems: "center", marginTop: 48 }}>
              {logoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoSrc} height={40} alt="Max Market Pros" style={{ height: 40 }} />
              ) : (
                <span style={{ fontSize: 26, fontWeight: 800, color: "#0B132B" }}>
                  Max Market Pros
                </span>
              )}
              <div style={{ display: "flex", width: 1, height: 30, background: "#C7D6EA", margin: "0 20px" }} />
              <span style={{ fontSize: 22, fontWeight: 600, color: "#1677FF" }}>
                maxmarketpros.com
              </span>
            </div>
          </div>

          {/* Right: Apple Maps place-card mock */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 430,
              padding: 22,
              borderRadius: 30,
              background: "#FFFFFF",
              border: "1px solid #E6EEF8",
              boxShadow: "0 30px 70px rgba(17,35,68,0.22)",
            }}
          >
            {/* map */}
            <div
              style={{
                position: "relative",
                display: "flex",
                height: 150,
                borderRadius: 18,
                marginBottom: 18,
                overflow: "hidden",
                background: "linear-gradient(135deg, #E7EEF6 0%, #D7EBDA 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 50,
                  left: 184,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 46,
                  height: 46,
                  borderRadius: 9999,
                  background: "linear-gradient(180deg, #2B8AFF, #1677FF)",
                  border: "3px solid #FFFFFF",
                  boxShadow: "0 6px 16px rgba(22,119,255,0.5)",
                }}
              >
                <div style={{ display: "flex", width: 14, height: 14, borderRadius: 9999, background: "#fff" }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 104,
                  left: 188,
                  display: "flex",
                  padding: "4px 9px",
                  borderRadius: 7,
                  background: "#1677FF",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                AD
              </div>
            </div>

            {/* business row */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  marginRight: 14,
                  background: "linear-gradient(180deg, #2B8AFF, #1677FF)",
                }}
              >
                <div style={{ display: "flex", width: 22, height: 22, borderRadius: 6, background: "rgba(255,255,255,0.92)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 23, fontWeight: 700, color: "#0B132B" }}>
                  Summit Plumbing Co.
                </span>
                <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: 6 }}>
                    <path
                      d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.401 8.169L12 18.896l-7.335 3.868 1.401-8.169L.132 9.21l8.2-1.192z"
                      fill="#F5A623"
                    />
                  </svg>
                  <span style={{ fontSize: 15, fontWeight: 400, color: "#4A5A75" }}>
                    4.9 (312) · Plumber · Open now
                  </span>
                </div>
              </div>
            </div>

            {/* actions */}
            <div style={{ display: "flex", marginBottom: 14 }}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: 46,
                  marginRight: 8,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  background: "linear-gradient(180deg, #2B8AFF, #1677FF)",
                }}
              >
                Directions
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: 46,
                  marginRight: 8,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0B132B",
                  background: "#F2F6FB",
                }}
              >
                Call
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: 46,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0B132B",
                  background: "#F2F6FB",
                }}
              >
                Website
              </div>
            </div>

            {/* showcase */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 14px",
                borderRadius: 14,
                background: "linear-gradient(90deg, rgba(22,119,255,0.10), rgba(116,211,255,0.10))",
                border: "1px solid rgba(22,119,255,0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                  marginRight: 12,
                  background: "#1677FF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", width: 14, height: 14, borderRadius: 4, background: "#fff" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: "#1677FF" }}>
                  SHOWCASE
                </span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#0B132B" }}>
                  $59 drain cleaning — this month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined }
  )
}
