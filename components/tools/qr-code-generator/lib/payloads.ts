export type ContentType = "url" | "text" | "email" | "phone" | "sms" | "wifi" | "vcard"

export type WifiEncryption = "WPA" | "WEP" | "nopass"

export type ContentValues = {
  url: { url: string }
  text: { text: string }
  email: { to: string; subject: string; body: string }
  phone: { phone: string }
  sms: { phone: string; body: string }
  wifi: { ssid: string; password: string; encryption: WifiEncryption; hidden: boolean }
  vcard: {
    firstName: string
    lastName: string
    org: string
    title: string
    phone: string
    email: string
    url: string
  }
}

export const initialValues: ContentValues = {
  url: { url: "https://maxmarketpros.com" },
  text: { text: "" },
  email: { to: "", subject: "", body: "" },
  phone: { phone: "" },
  sms: { phone: "", body: "" },
  wifi: { ssid: "", password: "", encryption: "WPA", hidden: false },
  vcard: {
    firstName: "",
    lastName: "",
    org: "",
    title: "",
    phone: "",
    email: "",
    url: "",
  },
}

function escWifi(v: string) {
  return v.replace(/([\\;,":])/g, "\\$1")
}

function escVcard(v: string) {
  return v.replace(/([\\,;])/g, "\\$1").replace(/\r?\n/g, "\\n")
}

export function buildPayload<T extends ContentType>(
  type: T,
  values: ContentValues[T],
): string {
  switch (type) {
    case "url": {
      const v = values as ContentValues["url"]
      const raw = v.url.trim()
      if (!raw) return ""
      if (/^[a-z][a-z0-9+\-.]*:/i.test(raw)) return raw
      return `https://${raw}`
    }
    case "text": {
      const v = values as ContentValues["text"]
      return v.text
    }
    case "email": {
      const v = values as ContentValues["email"]
      if (!v.to.trim()) return ""
      const params: string[] = []
      if (v.subject) params.push(`subject=${encodeURIComponent(v.subject)}`)
      if (v.body) params.push(`body=${encodeURIComponent(v.body)}`)
      const q = params.length ? `?${params.join("&")}` : ""
      return `mailto:${v.to.trim()}${q}`
    }
    case "phone": {
      const v = values as ContentValues["phone"]
      const digits = v.phone.replace(/\s+/g, "")
      if (!digits) return ""
      return `tel:${digits}`
    }
    case "sms": {
      const v = values as ContentValues["sms"]
      const digits = v.phone.replace(/\s+/g, "")
      if (!digits) return ""
      const q = v.body ? `?body=${encodeURIComponent(v.body)}` : ""
      return `sms:${digits}${q}`
    }
    case "wifi": {
      const v = values as ContentValues["wifi"]
      if (!v.ssid) return ""
      const t = v.encryption
      const p = t === "nopass" ? "" : escWifi(v.password)
      return `WIFI:T:${t};S:${escWifi(v.ssid)};${p ? `P:${p};` : ""}${v.hidden ? "H:true;" : ""};`
    }
    case "vcard": {
      const v = values as ContentValues["vcard"]
      const anyValue =
        v.firstName || v.lastName || v.org || v.title || v.phone || v.email || v.url
      if (!anyValue) return ""
      const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${escVcard(v.lastName)};${escVcard(v.firstName)};;;`,
        `FN:${escVcard(`${v.firstName} ${v.lastName}`.trim())}`,
      ]
      if (v.org) lines.push(`ORG:${escVcard(v.org)}`)
      if (v.title) lines.push(`TITLE:${escVcard(v.title)}`)
      if (v.phone) lines.push(`TEL;TYPE=CELL:${v.phone.replace(/\s+/g, "")}`)
      if (v.email) lines.push(`EMAIL:${v.email}`)
      if (v.url) lines.push(`URL:${v.url}`)
      lines.push("END:VCARD")
      return lines.join("\n")
    }
    default: {
      const _exhaustive: never = type
      return _exhaustive
    }
  }
}

/**
 * Returns 0..21 contrast ratio between two hex colors (WCAG 2.x).
 * Used for a soft scannability warning, not a hard block.
 */
export function contrastRatio(a: string, b: string): number {
  const lA = relativeLuminance(a)
  const lB = relativeLuminance(b)
  const [hi, lo] = lA >= lB ? [lA, lB] : [lB, lA]
  return (hi + 0.05) / (lo + 0.05)
}

function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex)
  const f = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "")
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h
  const n = parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
