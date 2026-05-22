"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { DirectoryForm, type DirectoryFormValues } from "./directory-form"
import { DirectoryScan } from "./directory-scan"
import { DirectoryIdleSections } from "./directory-idle-sections"
import { DirectoryCtaSection } from "./directory-cta-section"
import { DirectoryMarquee } from "./directory-marquee"

const YEXT_BASE =
  "https://www.optimizelocation.com/partner/maxmarketpros/listing-report.html"

const TRUST_BULLETS = [
  "Scans 50+ directories",
  "GPS apps + voice assistants",
  "100% free, no sign-up",
]

type State =
  | { kind: "idle" }
  | { kind: "scanning"; values: DirectoryFormValues; iframeSrc: string }

function buildIframeSrc(values: DirectoryFormValues): string {
  const params = new URLSearchParams({
    name: values.businessName,
    address: values.streetAddress,
    city: values.city,
    state: values.state,
    zip: values.zip,
    phone: values.phone,
  })
  return `${YEXT_BASE}?${params.toString()}`
}

export function DirectoryShell() {
  const [state, setState] = useState<State>({ kind: "idle" })

  function runScan(values: DirectoryFormValues) {
    const iframeSrc = buildIframeSrc(values)
    setState({ kind: "scanning", values, iframeSrc })
    setTimeout(() => {
      document
        .getElementById("scan-results-anchor")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="directory-checker-heading"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.18) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.18) 0%, transparent 65%), var(--bg)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(116,211,255,0.06) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.20) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <a href="/" className="hover:text-[var(--accent)]">
                  Home
                </a>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/tools" className="hover:text-[var(--accent)]">
                  Tools
                </a>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" style={{ color: "var(--ink)" }}>
                Directory Listing Checker
              </li>
            </ol>
          </nav>

          <div
            className="mt-8 max-w-[820px] mx-auto text-center"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            <Pill>
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
              Free Directory Scan
            </Pill>
            <h1
              id="directory-checker-heading"
              className="mt-5 text-[40px] xs:text-[44px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Run a free{" "}
              <span className="accent-underline">online scan</span> of your
              business listings.
            </h1>
            <p
              className="mt-5 text-[16.5px] sm:text-[19px] leading-[1.55] max-w-[640px] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              See exactly how your business shows up across Google, Apple Maps,
              Yelp, Bing, Alexa, and 50+ more sources &mdash; in seconds.
            </p>

            <div className="mt-8 max-w-[640px] mx-auto">
              <DirectoryForm
                initialValues={state.kind === "scanning" ? state.values : undefined}
                onSubmit={runScan}
                busy={false}
              />
              <ul
                className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13.5px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {TRUST_BULLETS.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Directory logo marquee — always visible, just under the hero */}
      <DirectoryMarquee />

      {/* Scan iframe */}
      {state.kind === "scanning" && (
        <section className="section-container py-12 sm:py-16 lg:py-20">
          <div
            id="scan-results-anchor"
            style={{ scrollMarginTop: 160 }}
          />
          <DirectoryScan iframeSrc={state.iframeSrc} />
        </section>
      )}

      {/* Idle-only marketing sections */}
      {state.kind === "idle" && <DirectoryIdleSections />}

      {/* CTA section after scan starts */}
      {state.kind === "scanning" && <DirectoryCtaSection />}
    </>
  )
}
