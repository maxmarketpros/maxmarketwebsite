import type { CaseStudy } from "@/lib/case-studies-data"

interface Props {
  study: CaseStudy
}

export function CaseStudyScreenshots({ study }: Props) {
  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6 lg:gap-8"
      style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
    >
      <DesktopMockup study={study} />
      <MobileMockup study={study} />
    </div>
  )
}

function DesktopMockup({ study }: Props) {
  return (
    <div
      className="relative rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${study.accentColor}18 0%, ${study.accentColor}06 100%)`,
        border: "1px solid var(--border-color)",
        boxShadow:
          "0 1px 3px var(--shadow-color), 0 24px 60px var(--shadow-strong)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(6px)",
          borderColor: "var(--border-color)",
        }}
      >
        <span className="inline-flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </span>
        <div
          className="ml-3 flex-1 h-7 rounded-md inline-flex items-center gap-2 px-3 text-[12px] font-medium"
          style={{
            background: "var(--bg)",
            color: "var(--muted)",
            border: "1px solid var(--border-color)",
          }}
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${study.domain}&sz=64`}
            alt=""
            width={14}
            height={14}
            className="w-3.5 h-3.5 rounded-sm"
            loading="lazy"
            decoding="async"
          />
          <span className="truncate">{study.domain}</span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={study.desktopImage}
          alt={`${study.name} desktop homepage`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Stack badge */}
      <div
        className="absolute top-12 right-3 sm:top-14 sm:right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.06em] backdrop-blur-sm"
        style={{
          background: "rgba(255,255,255,0.92)",
          color: study.accentColor,
          border: `1px solid ${study.accentColor}33`,
        }}
      >
        {study.stack}
      </div>
    </div>
  )
}

function MobileMockup({ study }: Props) {
  return (
    <div className="flex items-center justify-center lg:justify-start lg:items-start">
      <div
        className="relative w-[180px] sm:w-[200px] lg:w-full max-w-[220px]"
        style={{
          aspectRatio: "9 / 19",
        }}
      >
        {/* Phone body */}
        <div
          className="absolute inset-0 rounded-[36px] p-[6px]"
          style={{
            background: "linear-gradient(180deg, #1A1F2E 0%, #0B132B 100%)",
            boxShadow:
              "0 8px 24px rgba(17,35,68,0.25), 0 24px 60px rgba(17,35,68,0.20), inset 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Screen */}
          <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-white">
            {/* Notch */}
            <div
              className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[80px] h-[18px] rounded-full z-10"
              style={{ background: "#0B132B" }}
            />
            <img
              src={study.mobileImage}
              alt={`${study.name} on mobile`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
