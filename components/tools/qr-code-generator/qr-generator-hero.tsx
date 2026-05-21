import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Sparkles, Check } from "lucide-react"

const trustItems = [
  "No signup, no watermark",
  "PNG + SVG export",
  "WiFi, vCard, URL & more",
]

export function QrGeneratorHero() {
  return (
    <section aria-labelledby="qr-tool-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-22%] right-[-12%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.20) 0%, rgba(22,119,255,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[-18%] left-[-10%] w-[420px] h-[420px] sm:w-[680px] sm:h-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14">
        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-[13px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ol className="flex items-center justify-center gap-1.5">
              <li>
                <a href="/" className="hover:text-[var(--accent)]">Home</a>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/tools" className="hover:text-[var(--accent)]">Tools</a>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" style={{ color: "var(--ink)" }}>
                QR Code Generator
              </li>
            </ol>
          </nav>

          <div className="flex justify-center">
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Free Tool · No signup
            </Pill>
          </div>

          <h1
            id="qr-tool-hero-heading"
            className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="accent-underline">
              <span className="whitespace-nowrap">Free</span>
            </span>{" "}
            QR Code Generator
          </h1>

          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Make custom QR codes in seconds. Pick a content type, tweak the colors, drop in your logo, and download as crisp PNG or scalable SVG. Need{" "}
            <a
              href="/solutions/qr-codes"
              className="font-semibold underline decoration-[var(--cyan)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              style={{ color: "var(--ink)" }}
            >
              branded QR codes with full scan analytics
            </a>
            ? We do that too.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton size="lg" asLink href="#qr-tool">
              Generate a QR code
            </PrimaryButton>
            <SecondaryButton asLink href="#qr-how-to">
              How it works
            </SecondaryButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {trustItems.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-[14px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                <span
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
