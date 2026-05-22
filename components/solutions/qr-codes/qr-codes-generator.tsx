"use client"

import { useEffect, useRef, useState } from "react"
import QRCode from "qrcode"
import { Download, Printer, Check, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { MiniQR } from "./mini-qr"

const DEFAULT_URL = "https://www.maxmarketpros.com"

export function QRCodesGenerator() {
  const [url, setUrl] = useState<string>(DEFAULT_URL)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    QRCode.toCanvas(canvas, url || " ", {
      width: 512,
      margin: 2,
      color: { dark: "#0B132B", light: "#FFFFFF" },
      errorCorrectionLevel: "M",
    })
      .then(() => {
        // qrcode sets inline width/height on the canvas; clear them so our Tailwind classes win
        canvas.style.width = ""
        canvas.style.height = ""
      })
      .catch(() => {
        // swallow — rare invalid input; canvas keeps previous frame
      })
  }, [url])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas || !url.trim()) return
    const dataUrl = canvas.toDataURL("image/png")
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = "max-market-pros-qr.png"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handlePrint = () => {
    const canvas = canvasRef.current
    if (!canvas || !url.trim()) return
    const dataUrl = canvas.toDataURL("image/png")
    const win = window.open("", "_blank", "noopener,noreferrer,width=640,height=760")
    if (!win) return
    win.document.open()
    win.document.write(`<!doctype html>
<html>
<head>
<title>QR Code — Max Market Pros</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:40px;color:#0B132B;background:#fff}
  img{width:360px;height:360px;image-rendering:pixelated}
  p{margin:24px 0 0;font-size:14px;color:#5B6B84;max-width:360px;text-align:center;word-break:break-all}
  @media print{p{color:#5B6B84}}
</style>
</head>
<body>
<img src="${dataUrl}" alt="QR code" />
<p>${url.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c))}</p>
<script>window.addEventListener('load',function(){setTimeout(function(){window.print()},150)})</script>
</body>
</html>`)
    win.document.close()
  }

  const disabled = !url.trim()

  return (
    <section
      id="qr-generator"
      aria-labelledby="qr-codes-generator-heading"
      className="relative overflow-hidden scroll-mt-20"
      style={{ background: "var(--bg)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(22,119,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative section-container section-y">
        <SectionHeader
          pill="Free Tool"
          heading={
            <span id="qr-codes-generator-heading">
              Free QR Code Generator —{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">try it.</span>
              </span>
            </span>
          }
          paragraph="Paste any URL, phone number, or text. We'll generate a clean, high-resolution QR code you can download or print instantly. No signup, no watermark."
        />

        <div
          className="relative mt-12 sm:mt-14 card-surface p-6 sm:p-8 overflow-hidden"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 25% 25%, rgba(22,119,255,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center">
            <div>
              <label
                htmlFor="qr-generator-url"
                className="block mb-2 text-[12px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "var(--ink)" }}
              >
                Your URL or text
              </label>
              <input
                id="qr-generator-url"
                type="text"
                inputMode="url"
                autoComplete="url"
                spellCheck={false}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="w-full rounded-[var(--radius-sm)] px-4 py-3 text-[15px] outline-none transition-shadow"
                style={{
                  background: "var(--surface)",
                  color: "var(--ink)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "inset 0 1px 2px rgba(17,35,68,0.04)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = "1px solid var(--accent)"
                  e.currentTarget.style.boxShadow =
                    "inset 0 1px 2px rgba(17,35,68,0.04), 0 0 0 3px rgba(22,119,255,0.15)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = "1px solid var(--border-color)"
                  e.currentTarget.style.boxShadow = "inset 0 1px 2px rgba(17,35,68,0.04)"
                }}
              />
              <p className="mt-2 text-[13px]" style={{ color: "var(--muted)" }}>
                Works with URLs, phone numbers, emails, or plain text.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton
                  onClick={handleDownload}
                  disabled={disabled}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <Download className="w-[18px] h-[18px] mr-2" strokeWidth={2.5} />
                  Download PNG
                </PrimaryButton>
                <button
                  type="button"
                  onClick={handlePrint}
                  disabled={disabled}
                  className="inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[var(--radius-sm)] px-6 py-2.5 text-[15px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:translate-y-[-1px] disabled:hover:translate-y-0"
                  style={{
                    color: "var(--ink)",
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <Printer className="w-[18px] h-[18px] mr-2" strokeWidth={2.5} />
                  Print
                </button>
              </div>

              <ul className="mt-6 space-y-2">
                {[
                  "Hi-res 512×512 PNG — print-ready",
                  "Works on every phone, no app needed",
                  "Free forever — no signup, no watermark",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px]"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="leading-[1.45]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="inline-block w-fit rounded-[var(--radius-lg)] p-3"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px rgba(17,35,68,0.05), 0 10px 30px rgba(17,35,68,0.08)",
                }}
              >
                <canvas
                  ref={canvasRef}
                  width={512}
                  height={512}
                  aria-label="QR code preview"
                  role="img"
                  style={{ display: "block" }}
                  className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
                />
              </div>
              <p
                className="mt-3 text-[12.5px] text-center"
                style={{ color: "var(--muted)" }}
              >
                Static QR · Opens on any device · Free forever
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <UpsellCard
            visual={
              <MiniQR color="#1677FF" size={96} showLogo />
            }
            eyebrow="Upgrade · Branded"
            eyebrowColor="#1677FF"
            auraColor="rgba(22,119,255,0.09)"
            title="Want it in your brand colors?"
            bullets={[
              "Custom color schemes",
              "Rounded modules + center logo",
              "Stress-tested scannability",
            ]}
          />
          <UpsellCard
            visual={<AnalyticsMiniViz />}
            eyebrow="Upgrade · Trackable"
            eyebrowColor="#22C55E"
            auraColor="rgba(34,197,94,0.09)"
            title="Need analytics on every scan?"
            bullets={[
              "Dynamic destinations, edit anytime",
              "Scan location + device data",
              "UTM auto-tagging + GA4 forwarding",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function UpsellCard({
  visual,
  eyebrow,
  eyebrowColor,
  auraColor,
  title,
  bullets,
}: {
  visual: React.ReactNode
  eyebrow: string
  eyebrowColor: string
  auraColor: string
  title: string
  bullets: string[]
}) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[60%] h-[50%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 75% 25%, ${auraColor} 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-4">
          <div className="shrink-0">{visual}</div>
          <div className="min-w-0 flex-1">
            <span
              className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
              style={{ background: `${eyebrowColor}1A`, color: eyebrowColor }}
            >
              {eyebrow}
            </span>
            <h3
              className="mt-3 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              {title}
            </h3>
          </div>
        </div>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-[14px]"
              style={{ color: "var(--ink)" }}
            >
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{b}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
          style={{ borderColor: "var(--border-color)", color: "var(--accent)" }}
        >
          <span>Book a demo</span>
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </article>
  )
}

function AnalyticsMiniViz() {
  return (
    <div
      className="p-3 rounded-[var(--radius-md)] border shrink-0 flex flex-col items-center justify-center"
      style={{
        width: 112,
        height: 112,
        background: "var(--surface)",
        borderColor: "var(--border-color)",
        boxShadow: "0 1px 3px rgba(17,35,68,0.05), 0 4px 12px rgba(17,35,68,0.04)",
      }}
    >
      <div
        className="text-[22px] font-bold leading-none"
        style={{ color: "#22C55E" }}
      >
        142
      </div>
      <div
        className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.1em]"
        style={{ color: "var(--muted)" }}
      >
        Scans · 7d
      </div>
      <svg
        viewBox="0 0 80 28"
        className="mt-2 w-[80px] h-[28px]"
        aria-hidden
      >
        {[
          [4, 18],
          [16, 12],
          [28, 20],
          [40, 8],
          [52, 14],
          [64, 4],
          [76, 10],
        ].map(([x, y], i, arr) => {
          const next = arr[i + 1]
          return (
            <g key={i}>
              {next && (
                <line
                  x1={x}
                  y1={y}
                  x2={next[0]}
                  y2={next[1]}
                  stroke="#22C55E"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              )}
              <circle cx={x} cy={y} r={2} fill="#22C55E" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
