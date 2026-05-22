"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Sparkles } from "lucide-react"

type Mode = "diy" | "ours"

interface MockupProps {
  mode: Mode
}

const formats: Array<{
  label: string
  size: string
  aspect: string
  span?: string
  Mockup: React.ComponentType<MockupProps>
}> = [
  {
    label: "Instagram Post",
    size: "1080 × 1080",
    aspect: "1 / 1",
    Mockup: IGPostMockup,
  },
  {
    label: "Instagram Story",
    size: "1080 × 1920",
    aspect: "9 / 16",
    span: "row-span-2",
    Mockup: IGStoryMockup,
  },
  {
    label: "Facebook Ad",
    size: "1080 × 1350",
    aspect: "4 / 5",
    Mockup: FBAdMockup,
  },
  {
    label: "YouTube Thumbnail",
    size: "1280 × 720",
    aspect: "16 / 9",
    Mockup: YTThumbMockup,
  },
  {
    label: "Carousel Slide",
    size: "1080 × 1080",
    aspect: "1 / 1",
    Mockup: CarouselSlideMockup,
  },
  {
    label: "LinkedIn Ad",
    size: "1200 × 628",
    aspect: "1.91 / 1",
    Mockup: LinkedInAdMockup,
  },
  {
    label: "Reel Cover",
    size: "1080 × 1920",
    aspect: "9 / 16",
    span: "row-span-2",
    Mockup: ReelCoverMockup,
  },
  {
    label: "Email Header",
    size: "1200 × 400",
    aspect: "3 / 1",
    Mockup: EmailHeaderMockup,
  },
]

export function GraphicDesignShowcase() {
  const [mode, setMode] = useState<Mode>("ours")

  return (
    <section
      id="showcase"
      aria-labelledby="graphic-design-showcase-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Format Coverage"
          heading={
            <span id="graphic-design-showcase-heading">
              Every format, every{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">channel</span>.
              </span>
            </span>
          }
          paragraph="From a 1:1 Instagram post to a 9:16 reel cover, a 16:9 YouTube thumbnail to a 3:1 email header — your design team ships every social media graphic design format your channels actually need."
        />

        <div className="mt-6 flex flex-col items-center gap-4">
          <p
            className="text-[14.5px] text-center max-w-[520px]"
            style={{ color: "var(--muted)" }}
          >
            Toggle the switch to see the same brief designed by a template tool
            (DIY) versus our team (Ours).{" "}
            <a
              href="/services/social-media"
              className="font-semibold underline decoration-dotted underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Browse all formats →
            </a>
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center p-1 rounded-full border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow: "0 4px 14px rgba(17,35,68,0.06)",
            }}
            role="tablist"
            aria-label="Design comparison toggle"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "diy"}
              onClick={() => setMode("diy")}
              className="px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.08em] transition-all cursor-pointer"
              style={{
                background:
                  mode === "diy"
                    ? "linear-gradient(180deg, #94A3B8 0%, #64748B 100%)"
                    : "transparent",
                color: mode === "diy" ? "#fff" : "var(--muted)",
                boxShadow:
                  mode === "diy" ? "0 4px 12px rgba(100,116,139,0.30)" : "none",
              }}
            >
              DIY / Template
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "ours"}
              onClick={() => setMode("ours")}
              className="px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.08em] transition-all cursor-pointer inline-flex items-center gap-1.5"
              style={{
                background:
                  mode === "ours"
                    ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
                    : "transparent",
                color: mode === "ours" ? "#fff" : "var(--muted)",
                boxShadow:
                  mode === "ours"
                    ? "0 4px 12px rgba(22,119,255,0.35)"
                    : "none",
              }}
            >
              {mode === "ours" && (
                <Sparkles className="w-3.5 h-3.5" strokeWidth={2.75} />
              )}
              Designed by us
            </button>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-auto">
          {formats.map((f) => (
            <div
              key={f.label}
              className={`flex flex-col ${f.span ?? ""}`}
              style={{
                animation: "fadeInUp 0.7s ease-out both",
              }}
            >
              <div
                className="relative card-surface overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  aspectRatio: f.aspect,
                }}
              >
                <f.Mockup mode={mode} />
                {/* Mode badge */}
                <span
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-[0.1em] z-10"
                  style={{
                    background:
                      mode === "ours"
                        ? "rgba(22,119,255,0.94)"
                        : "rgba(100,116,139,0.94)",
                    color: "#fff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                  }}
                >
                  {mode === "ours" ? "Ours" : "DIY"}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2 px-1">
                <span
                  className="text-[12.5px] font-semibold truncate"
                  style={{ color: "var(--ink)" }}
                >
                  {f.label}
                </span>
                <span
                  className="text-[10.5px] font-mono shrink-0"
                  style={{ color: "var(--muted)" }}
                >
                  {f.size}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Need a format we didn&rsquo;t list?
          </span>
          <SecondaryButton asLink href="/contact">
            Send us a brief
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

/* ---------- Mockups ---------- */

function IGPostMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div className="absolute inset-0 flex flex-col bg-white">
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)",
          }}
        >
          <span
            className="font-bold text-center px-3"
            style={{
              color: "#475569",
              fontFamily: "Times, serif",
              fontSize: 14,
            }}
          >
            5 TIPS FOR YOUR HOME
          </span>
        </div>
        <div className="px-2 py-2 text-center">
          <span
            className="text-[10px]"
            style={{ color: "#94A3B8", fontFamily: "Arial" }}
          >
            @yourbusiness
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex flex-col">
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #FB7185 0%, #EC4899 35%, #BE185D 75%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,211,77,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-3 bottom-3">
          <div
            className="text-[13px] sm:text-[15px] font-extrabold leading-[1.05] tracking-[-0.01em]"
            style={{ color: "#fff" }}
          >
            5 signs your AC is on its <span style={{ color: "#FCD34D" }}>last leg</span>
          </div>
        </div>
        <span
          className="absolute top-3 left-3 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "rgba(255,255,255,0.92)", color: "#BE185D" }}
        >
          Tip series
        </span>
      </div>
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ background: "#0B132B" }}
      >
        <span
          className="text-[10px] font-bold tracking-[0.04em]"
          style={{ color: "#fff" }}
        >
          @acmehvac
        </span>
        <span
          className="text-[8.5px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "#FCD34D" }}
        >
          Save & share
        </span>
      </div>
    </div>
  )
}

function IGStoryMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center"
        style={{ background: "#F1F5F9" }}
      >
        <div
          className="w-12 h-12 rounded-full mb-3"
          style={{ background: "#CBD5E1" }}
        />
        <div
          className="text-[12px] font-bold mb-1"
          style={{ color: "#475569" }}
        >
          STORY HERE
        </div>
        <div className="text-[10px]" style={{ color: "#94A3B8" }}>
          tap to add text
        </div>
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #2B8AFF 0%, #1677FF 50%, #0B132B 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-2 top-2 h-1 rounded-full"
        style={{ background: "rgba(255,255,255,0.3)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ background: "#fff", width: "62%" }}
        />
      </div>
      <span
        className="absolute top-6 left-3 text-[8.5px] font-bold uppercase tracking-[0.14em]"
        style={{ color: "rgba(255,255,255,0.86)" }}
      >
        @acmehvac · 2h
      </span>
      <div className="absolute inset-x-3 top-1/3">
        <div
          className="text-[18px] font-extrabold leading-[1.0]"
          style={{ color: "#fff" }}
        >
          Spring tune-up
        </div>
        <div
          className="mt-1 text-[28px] font-extrabold leading-[1.0]"
          style={{ color: "#FCD34D" }}
        >
          $89
        </div>
        <div
          className="mt-1 text-[10px] font-semibold leading-[1.3]"
          style={{ color: "rgba(255,255,255,0.86)" }}
        >
          Booked through Friday only
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-3">
        <div
          className="h-7 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "#fff", color: "#1677FF" }}
        >
          Swipe up · Book
        </div>
      </div>
    </div>
  )
}

function FBAdMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div className="absolute inset-0 bg-white p-3 flex flex-col">
        <div
          className="text-[9px] font-bold mb-1"
          style={{ color: "#475569" }}
        >
          Sponsored
        </div>
        <div
          className="flex-1 flex items-center justify-center"
          style={{ background: "#E2E8F0" }}
        >
          <div className="text-[10px]" style={{ color: "#94A3B8" }}>
            stock photo
          </div>
        </div>
        <div className="mt-2">
          <div
            className="text-[10px] font-bold leading-tight"
            style={{ color: "#0F172A" }}
          >
            BUY OUR SERVICE TODAY
          </div>
          <div
            className="text-[8.5px] mt-0.5"
            style={{ color: "#64748B" }}
          >
            Click for more info
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div
        className="flex items-center gap-1.5 px-2.5 py-1.5"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <span
          className="w-4 h-4 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
          }}
        />
        <div className="flex-1 min-w-0">
          <div
            className="text-[8.5px] font-bold leading-tight"
            style={{ color: "#0F172A" }}
          >
            Acme HVAC
          </div>
          <div
            className="text-[7.5px] font-medium"
            style={{ color: "#64748B" }}
          >
            Sponsored · 🌎
          </div>
        </div>
      </div>
      <div
        className="px-2.5 py-1.5 text-[9.5px] leading-[1.35]"
        style={{ color: "#0F172A" }}
      >
        We&rsquo;ll have your AC ice-cold by tomorrow — or the call&rsquo;s on us.
      </div>
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #34D399 0%, #16A34A 60%, #064E3B 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-x-3 bottom-3 text-[14px] font-extrabold leading-[1.0]"
          style={{ color: "#fff" }}
        >
          AC out?
          <div style={{ color: "#FCD34D" }}>Same-day fix.</div>
        </div>
        <span
          className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[7px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "rgba(255,255,255,0.92)", color: "#16A34A" }}
        >
          24/7
        </span>
      </div>
      <div
        className="px-2.5 py-1.5 flex items-center justify-between"
        style={{ background: "#F1F5F9" }}
      >
        <div>
          <div
            className="text-[7px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "#64748B" }}
          >
            ACMEHVAC.COM
          </div>
          <div
            className="text-[9px] font-bold leading-tight"
            style={{ color: "#0F172A" }}
          >
            Same-day AC repair
          </div>
        </div>
        <span
          className="px-2 py-1 rounded-md text-[8px] font-bold uppercase tracking-[0.08em]"
          style={{ background: "#1677FF", color: "#fff" }}
        >
          Book
        </span>
      </div>
    </div>
  )
}

function YTThumbMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "#0F172A" }}
      >
        <div
          className="text-center px-2"
          style={{ color: "#94A3B8", fontFamily: "Arial", fontSize: 11 }}
        >
          MY VIDEO TITLE GOES HERE
        </div>
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0 flex"
      style={{
        background:
          "linear-gradient(120deg, #0B132B 0%, #1E293B 60%, #BE185D 100%)",
      }}
    >
      <div
        className="w-1/2 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(252,211,77,0.4) 0%, transparent 60%)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "#fff",
            boxShadow: "0 4px 24px rgba(252,211,77,0.55)",
          }}
        >
          <span
            className="block w-0 h-0"
            style={{
              borderLeft: "10px solid #BE185D",
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              marginLeft: 3,
            }}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center pr-3">
        <div
          className="text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "#FCD34D" }}
        >
          Episode 12
        </div>
        <div
          className="text-[15px] sm:text-[18px] font-extrabold leading-[1.0] mt-0.5"
          style={{ color: "#fff" }}
        >
          The $5K mistake
        </div>
        <div
          className="text-[15px] sm:text-[18px] font-extrabold leading-[1.0]"
          style={{ color: "#FCD34D" }}
        >
          every homeowner makes
        </div>
      </div>
    </div>
  )
}

function CarouselSlideMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div className="absolute inset-0 bg-white p-3 flex flex-col items-center justify-center text-center">
        <div className="text-[10px]" style={{ color: "#94A3B8" }}>
          1 / 7
        </div>
        <div
          className="mt-2 text-[12px] font-bold"
          style={{ color: "#475569", fontFamily: "Times, serif" }}
        >
          Hello, this is slide 1
        </div>
        <div
          className="mt-1 text-[9px]"
          style={{ color: "#94A3B8" }}
        >
          swipe →
        </div>
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "#FEF3C7" }}
    >
      <div className="flex items-center justify-between px-3 pt-3">
        <span
          className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "#0B132B", color: "#FCD34D" }}
        >
          Tip 01 / 06
        </span>
        <span
          className="text-[8.5px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "#92400E" }}
        >
          swipe →
        </span>
      </div>
      <div className="flex-1 px-4 flex flex-col justify-center">
        <div
          className="text-[20px] sm:text-[24px] font-extrabold leading-[1.0] tracking-[-0.02em]"
          style={{ color: "#0B132B" }}
        >
          The hook your competitor
        </div>
        <div
          className="mt-1 text-[20px] sm:text-[24px] font-extrabold leading-[1.0] tracking-[-0.02em]"
          style={{ color: "#BE185D" }}
        >
          can&rsquo;t copy.
        </div>
      </div>
      <div className="flex items-center gap-1 px-3 pb-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="h-0.5 rounded-full"
            style={{
              flex: i === 0 ? 1.6 : 1,
              background: i === 0 ? "#0B132B" : "rgba(11,19,43,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

function LinkedInAdMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div className="absolute inset-0 bg-white p-3 flex items-center gap-3">
        <div
          className="w-12 h-12 rounded shrink-0"
          style={{ background: "#CBD5E1" }}
        />
        <div className="flex-1">
          <div
            className="text-[10px] font-bold"
            style={{ color: "#475569" }}
          >
            Company Name
          </div>
          <div className="text-[8.5px]" style={{ color: "#94A3B8" }}>
            short tagline goes here
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex">
      <div
        className="w-2/5 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #0A66C2 0%, #0B132B 100%)",
        }}
      >
        <span
          className="px-2 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-[0.14em]"
          style={{ background: "#fff", color: "#0A66C2" }}
        >
          B2B
        </span>
      </div>
      <div
        className="w-3/5 flex flex-col justify-center px-3"
        style={{ background: "#fff" }}
      >
        <div
          className="text-[8.5px] font-bold uppercase tracking-[0.14em]"
          style={{ color: "#0A66C2" }}
        >
          Whitepaper
        </div>
        <div
          className="mt-0.5 text-[12px] sm:text-[13px] font-extrabold leading-[1.05] tracking-[-0.01em]"
          style={{ color: "#0B132B" }}
        >
          Why service ops leaders are switching from in-house design.
        </div>
      </div>
    </div>
  )
}

function ReelCoverMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "#0F172A" }}
      >
        <div className="text-[9px]" style={{ color: "#64748B" }}>
          play ▶
        </div>
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #BE185D 0%, #0B132B 60%, #1677FF 100%)",
      }}
    >
      <div className="absolute inset-x-2 top-3">
        <span
          className="px-1.5 py-0.5 rounded text-[7.5px] font-bold uppercase tracking-[0.18em]"
          style={{ background: "#FCD34D", color: "#0B132B" }}
        >
          Reel · 0:23
        </span>
      </div>
      <div className="absolute inset-x-3 top-12">
        <div
          className="text-[14px] sm:text-[17px] font-extrabold leading-[0.95]"
          style={{ color: "#fff" }}
        >
          Watch what
        </div>
        <div
          className="text-[14px] sm:text-[17px] font-extrabold leading-[0.95]"
          style={{ color: "#FCD34D" }}
        >
          happens
        </div>
        <div
          className="text-[14px] sm:text-[17px] font-extrabold leading-[0.95]"
          style={{ color: "#fff" }}
        >
          at 0:14
        </div>
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
        style={{
          background: "rgba(255,255,255,0.92)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        }}
      >
        <span
          className="absolute top-1/2 left-1/2 block w-0 h-0"
          style={{
            transform: "translate(-32%, -50%)",
            borderLeft: "12px solid #BE185D",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
          }}
        />
      </div>
    </div>
  )
}

function EmailHeaderMockup({ mode }: MockupProps) {
  if (mode === "diy") {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "#F1F5F9" }}
      >
        <span
          className="text-[12px] font-bold"
          style={{ color: "#94A3B8", fontFamily: "Arial" }}
        >
          [ COMPANY LOGO ]
        </span>
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0 flex"
      style={{
        background:
          "linear-gradient(120deg, #0B132B 0%, #1677FF 70%, #74D3FF 100%)",
      }}
    >
      <div className="flex-1 flex flex-col justify-center px-4">
        <div
          className="text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Newsletter · April
        </div>
        <div
          className="mt-1 text-[14px] sm:text-[18px] font-extrabold leading-[1.0]"
          style={{ color: "#fff" }}
        >
          The Service Operator
        </div>
      </div>
      <div className="flex items-center pr-4">
        <span
          className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-[0.1em]"
          style={{ background: "#FCD34D", color: "#0B132B" }}
        >
          Read →
        </span>
      </div>
    </div>
  )
}
