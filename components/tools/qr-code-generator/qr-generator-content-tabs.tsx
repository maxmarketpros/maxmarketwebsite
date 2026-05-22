"use client"

import type { ContentType } from "./lib/payloads"
import {
  Link as LinkIcon,
  Type,
  Mail,
  Phone,
  MessageSquare,
  Wifi,
  Contact,
} from "lucide-react"

const tabs: { id: ContentType; label: string; Icon: typeof LinkIcon }[] = [
  { id: "url", label: "URL", Icon: LinkIcon },
  { id: "text", label: "Text", Icon: Type },
  { id: "email", label: "Email", Icon: Mail },
  { id: "phone", label: "Phone", Icon: Phone },
  { id: "sms", label: "SMS", Icon: MessageSquare },
  { id: "wifi", label: "WiFi", Icon: Wifi },
  { id: "vcard", label: "vCard", Icon: Contact },
]

export function QrGeneratorContentTabs({
  value,
  onChange,
}: {
  value: ContentType
  onChange: (next: ContentType) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="QR code content type"
      className="-mx-2 sm:mx-0 overflow-x-auto"
    >
      <div className="flex gap-2 px-2 sm:px-0 sm:flex-wrap">
        {tabs.map((t) => {
          const active = value === t.id
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => onChange(t.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all shrink-0 cursor-pointer"
              style={{
                background: active ? "var(--accent)" : "var(--surface)",
                color: active ? "#fff" : "var(--ink)",
                border: `1px solid ${active ? "var(--accent)" : "var(--border-color)"}`,
                boxShadow: active
                  ? "0 1px 2px rgba(17,35,68,0.1), 0 6px 16px rgba(22,119,255,0.22)"
                  : "0 1px 2px rgba(17,35,68,0.04)",
              }}
            >
              <t.Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
              {t.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
