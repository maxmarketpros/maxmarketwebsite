"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Printer, Copy, Check } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import type { ContentType } from "./lib/payloads"
import { drawQrToCanvas, buildSvg } from "./lib/draw-qr"
import type { StyleState } from "./qr-generator-style-panel"

export function QrGeneratorPreview({
  payload,
  contentType,
  style,
}: {
  payload: string
  contentType: ContentType
  style: StyleState
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    drawQrToCanvas(canvas, payload, style).catch(() => {
      // swallow rare invalid input
    })
  }, [payload, style])

  const disabled = !payload.trim()
  const filenameBase = `qr-${contentType}-${stamp()}`

  const handleDownload = async () => {
    if (disabled) return
    if (style.format === "svg") {
      const svg = await buildSvg(payload, {
        fg: style.fg,
        bg: style.bg,
        logoDataUrl: style.logoDataUrl,
      })
      const blob = new Blob([svg], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${filenameBase}.svg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      return
    }
    const canvas = canvasRef.current
    if (!canvas) return
    const dataUrl = canvas.toDataURL("image/png")
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = `${filenameBase}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleCopy = async () => {
    if (disabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    try {
      await new Promise<void>((resolve, reject) => {
        canvas.toBlob(async (blob) => {
          if (!blob) {
            reject(new Error("no blob"))
            return
          }
          try {
            // @ts-expect-error - ClipboardItem availability varies by browser
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
            resolve()
          } catch (err) {
            reject(err)
          }
        }, "image/png")
      })
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing visible — user can still download
    }
  }

  const handlePrint = () => {
    if (disabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const dataUrl = canvas.toDataURL("image/png")
    const win = window.open("", "_blank", "noopener,noreferrer,width=640,height=760")
    if (!win) return
    const caption = payload.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c),
    )
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
<p>${caption}</p>
<script>window.addEventListener('load',function(){setTimeout(function(){window.print()},150)})</script>
</body>
</html>`)
    win.document.close()
  }

  return (
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
          width={style.size}
          height={style.size}
          aria-label="QR code preview"
          role="img"
          style={{ display: "block" }}
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
        />
      </div>
      <p className="mt-3 text-[12.5px] text-center" style={{ color: "var(--muted)" }}>
        {disabled
          ? "Fill in the form to preview your QR code"
          : `${style.size}×${style.size} · ${style.format.toUpperCase()}`}
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5 justify-center">
        <PrimaryButton
          onClick={handleDownload}
          disabled={disabled}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          <Download className="w-[18px] h-[18px] mr-2" strokeWidth={2.5} />
          Download {style.format.toUpperCase()}
        </PrimaryButton>
        <button
          type="button"
          onClick={handleCopy}
          disabled={disabled}
          className="inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[var(--radius-sm)] px-5 py-2.5 text-[15px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:translate-y-[-1px] disabled:hover:translate-y-0"
          style={{
            color: "var(--ink)",
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
          }}
        >
          {copied ? (
            <>
              <Check className="w-[18px] h-[18px] mr-2" strokeWidth={2.75} />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-[18px] h-[18px] mr-2" strokeWidth={2.5} />
              Copy
            </>
          )}
        </button>
        <button
          type="button"
          onClick={handlePrint}
          disabled={disabled}
          className="inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[var(--radius-sm)] px-5 py-2.5 text-[15px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:translate-y-[-1px] disabled:hover:translate-y-0"
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
    </div>
  )
}

function stamp() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`
}
