import QRCode from "qrcode"

export type DrawOptions = {
  fg: string
  bg: string
  size: number
  logoDataUrl: string | null
}

export async function drawQrToCanvas(
  canvas: HTMLCanvasElement,
  payload: string,
  opts: DrawOptions,
): Promise<void> {
  const errorCorrectionLevel = opts.logoDataUrl ? "H" : "M"

  await QRCode.toCanvas(canvas, payload || " ", {
    width: opts.size,
    margin: 2,
    color: { dark: opts.fg, light: opts.bg },
    errorCorrectionLevel,
  })

  // qrcode lib sets inline width/height — strip so CSS classes win for preview sizing
  canvas.style.width = ""
  canvas.style.height = ""

  if (opts.logoDataUrl) {
    await overlayLogo(canvas, opts.logoDataUrl, opts.bg)
  }
}

function overlayLogo(
  canvas: HTMLCanvasElement,
  logoDataUrl: string,
  bg: string,
): Promise<void> {
  return new Promise((resolve) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      resolve()
      return
    }
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const cw = canvas.width
      const ch = canvas.height
      const logoSide = Math.round(cw * 0.22)
      const padSide = logoSide + Math.round(cw * 0.025)
      const padX = (cw - padSide) / 2
      const padY = (ch - padSide) / 2
      const padRadius = Math.round(padSide * 0.18)

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      // White rounded pad behind logo for legibility (uses bg color so QR-bg light themes blend)
      ctx.fillStyle = bg
      roundRect(ctx, padX, padY, padSide, padSide, padRadius)
      ctx.fill()

      // Draw logo, preserve aspect ratio inside square box
      const ratio = img.width / img.height || 1
      let dw = logoSide
      let dh = logoSide
      if (ratio > 1) {
        dh = logoSide / ratio
      } else if (ratio < 1) {
        dw = logoSide * ratio
      }
      const dx = (cw - dw) / 2
      const dy = (ch - dh) / 2
      ctx.drawImage(img, dx, dy, dw, dh)
      resolve()
    }
    img.onerror = () => resolve()
    img.src = logoDataUrl
  })
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

export async function buildSvg(
  payload: string,
  opts: { fg: string; bg: string; logoDataUrl: string | null },
): Promise<string> {
  const errorCorrectionLevel = opts.logoDataUrl ? "H" : "M"
  return QRCode.toString(payload || " ", {
    type: "svg",
    margin: 2,
    color: { dark: opts.fg, light: opts.bg },
    errorCorrectionLevel,
  })
}
