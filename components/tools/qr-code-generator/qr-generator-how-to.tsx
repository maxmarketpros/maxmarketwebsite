import { SectionHeader } from "@/components/ui/section-header"
import { MousePointerClick, Palette, Image as ImageIcon, Download } from "lucide-react"

export const howToSteps = [
  {
    name: "Pick a content type",
    text:
      "Choose URL, Text, Email, Phone, SMS, WiFi, or vCard. Each one builds the right payload format so the scanning device knows what to do.",
    Icon: MousePointerClick,
  },
  {
    name: "Style it for your brand",
    text:
      "Set foreground and background colors from a brand-safe palette. We warn you if contrast gets too low to scan reliably.",
    Icon: Palette,
  },
  {
    name: "Drop in your logo (optional)",
    text:
      "Upload a PNG or SVG logo. We auto-bump error correction to the highest level so the QR still scans cleanly with the overlay.",
    Icon: ImageIcon,
  },
  {
    name: "Download PNG or SVG",
    text:
      "Grab a 256–2048 px PNG for print and screens, or an SVG that scales infinitely for billboards, vehicle wraps, and yard signs.",
    Icon: Download,
  },
]

export function QrGeneratorHowTo() {
  return (
    <section
      id="qr-how-to"
      aria-labelledby="qr-how-to-heading"
      className="relative scroll-mt-20"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="How it works"
          heading={
            <span id="qr-how-to-heading">
              How to make a QR code in{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">4 steps.</span>
              </span>
            </span>
          }
          paragraph="No app, no signup, no learning curve. Type, style, download — done."
        />

        <ol
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {howToSteps.map((step, i) => (
            <li
              key={step.name}
              className="card-surface card-surface-hover relative overflow-hidden p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 w-[50%] h-[50%]"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 100% at 80% 20%, rgba(22,119,255,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                  >
                    <step.Icon className="w-5 h-5" strokeWidth={2.4} />
                  </span>
                  <span
                    className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3
                  className="mt-4 text-[18px] sm:text-[19px] font-bold leading-[1.2]"
                  style={{ color: "var(--ink)" }}
                >
                  {step.name}
                </h3>
                <p
                  className="mt-2 text-[14.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p
          className="mt-10 text-center text-[15px]"
          style={{ color: "var(--muted)" }}
        >
          Driving traffic somewhere?{" "}
          <a
            href="/solutions/lead-generation"
            className="font-semibold underline decoration-[var(--cyan)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
            style={{ color: "var(--ink)" }}
          >
            Build a lead-capturing landing page
          </a>{" "}
          to put behind your QR.
        </p>
      </div>
    </section>
  )
}
