"use client"

import { useMemo, useState } from "react"
import {
  buildPayload,
  initialValues,
  type ContentType,
  type ContentValues,
} from "./lib/payloads"
import { QrGeneratorContentTabs } from "./qr-generator-content-tabs"
import { QrGeneratorContentForms } from "./qr-generator-content-forms"
import { QrGeneratorStylePanel, type StyleState } from "./qr-generator-style-panel"
import { QrGeneratorPreview } from "./qr-generator-preview"

export function QrGeneratorTool() {
  const [type, setType] = useState<ContentType>("url")
  const [values, setValues] = useState<ContentValues>(initialValues)
  const [style, setStyle] = useState<StyleState>({
    fg: "#0B132B",
    bg: "#FFFFFF",
    size: 512,
    format: "png",
    logoDataUrl: null,
  })

  const payload = useMemo(() => buildPayload(type, values[type]), [type, values])

  const updateContent = <K extends ContentType>(t: K, next: ContentValues[K]) => {
    setValues((prev) => ({ ...prev, [t]: next }))
  }

  return (
    <section
      id="qr-tool"
      aria-labelledby="qr-tool-heading"
      className="relative scroll-mt-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container pt-4 pb-16 sm:pb-20 lg:pb-24">
        <h2 id="qr-tool-heading" className="sr-only">
          Generate your QR code
        </h2>

        <div
          className="relative overflow-hidden p-5 sm:p-7 lg:p-8 rounded-[var(--radius-xl)]"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(17,35,68,0.05), 0 14px 36px rgba(17,35,68,0.08)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] bottom-[-25%] w-[60%] h-[80%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 75% 75%, rgba(116,211,255,0.16) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <QrGeneratorContentTabs value={type} onChange={setType} />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7 lg:gap-10 items-start">
              <div>
                <QrGeneratorContentForms
                  type={type}
                  values={values}
                  onChange={updateContent}
                />
              </div>
              <div>
                <QrGeneratorPreview payload={payload} contentType={type} style={style} />
              </div>
            </div>

            <div className="mt-7">
              <QrGeneratorStylePanel state={style} onChange={setStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
