import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Hash,
  AlertTriangle,
  User,
} from "lucide-react"

type Thumb = {
  id: string
  before: {
    label: string
    bgFrom: string
    bgTo: string
    titleColor: string
    title: string
    sub?: string
    ctr: string
  }
  after: {
    label: string
    bgFrom: string
    bgTo: string
    titleColor: string
    title: string
    sub?: string
    ctr: string
    badge?: string
  }
  formula: string
  uplift: string
}

const thumbs: Thumb[] = [
  {
    id: "a",
    before: {
      label: "Before",
      bgFrom: "#1F2937",
      bgTo: "#0B132B",
      titleColor: "#9CA3AF",
      title: "Roof Inspection Tips",
      ctr: "4.2%",
    },
    after: {
      label: "After",
      bgFrom: "#FF0000",
      bgTo: "#7F1D1D",
      titleColor: "#FFD600",
      title: "STOP Hiring The Wrong Roofer",
      sub: "(Watch This First)",
      badge: "😱",
      ctr: "11.8%",
    },
    formula: "Negative-framing + emoji",
    uplift: "+181%",
  },
  {
    id: "b",
    before: {
      label: "Before",
      bgFrom: "#374151",
      bgTo: "#111827",
      titleColor: "#D1D5DB",
      title: "Lawn Care Mistakes",
      ctr: "3.8%",
    },
    after: {
      label: "After",
      bgFrom: "#1677FF",
      bgTo: "#0D5FD9",
      titleColor: "#FFD600",
      title: "I Tried 7 Lawn Hacks (Only 2 Worked)",
      badge: "7→2",
      ctr: "9.6%",
    },
    formula: "Number list + curiosity gap",
    uplift: "+152%",
  },
  {
    id: "c",
    before: {
      label: "Before",
      bgFrom: "#4B5563",
      bgTo: "#1F2937",
      titleColor: "#E5E7EB",
      title: "How To Pick A Plumber",
      ctr: "5.1%",
    },
    after: {
      label: "After",
      bgFrom: "#22C55E",
      bgTo: "#15803D",
      titleColor: "#FFFFFF",
      title: "How I Saved $4,200 On A Plumbing Job",
      badge: "$4,200",
      ctr: "10.4%",
    },
    formula: "How-I personal + dollar number",
    uplift: "+104%",
  },
]

const formulas = [
  {
    Icon: AlertTriangle,
    name: "Negative framing",
    example: '"STOP hiring the wrong roofer"',
    color: "#FF0000",
    bg: "rgba(255,0,0,0.10)",
  },
  {
    Icon: Hash,
    name: "Number list",
    example: '"7 lawn hacks (only 2 worked)"',
    color: "#1677FF",
    bg: "rgba(22,119,255,0.10)",
  },
  {
    Icon: User,
    name: "How-I personal",
    example: '"How I saved $4,200 on plumbing"',
    color: "#22C55E",
    bg: "rgba(34,197,94,0.10)",
  },
  {
    Icon: Sparkles,
    name: "Curiosity gap",
    example: '"The mistake every homeowner makes"',
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
  },
]

export function YoutubeThumbnailLab() {
  return (
    <section
      id="youtube-thumbnail-lab"
      aria-labelledby="youtube-thumbnail-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[8%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="flex justify-center mb-5">
            <Pill>YouTube thumbnail &amp; title lab</Pill>
          </div>
          <h2
            id="youtube-thumbnail-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="accent-underline">Thumbnails &amp; titles</span> we
            actually CTR-test, not just design.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[18.5px] leading-[1.65] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Every long-form video in our YouTube marketing services ships with{" "}
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>
              three thumbnail variants
            </span>{" "}
            and three title variants. We swap the loser if the 48-hour CTR
            comes in under 4% — and the wins compound.
          </p>
        </div>

        {/* Before / after grid */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out 0.05s both" }}
        >
          {thumbs.map((t) => (
            <article
              key={t.id}
              className="card-surface relative overflow-hidden"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="p-4">
                {/* Before */}
                <div className="relative">
                  <ThumbnailMock data={t.before} dim />
                  <span
                    className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "rgba(0,0,0,0.65)",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {t.before.label}
                  </span>
                  <span
                    className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      background: "rgba(91,107,132,0.85)",
                      color: "#fff",
                    }}
                  >
                    <TrendingDown className="w-3 h-3" strokeWidth={2.5} />
                    {t.before.ctr} CTR
                  </span>
                </div>

                {/* Down arrow */}
                <div className="my-3 flex items-center justify-center gap-2">
                  <span
                    className="h-px flex-1"
                    style={{ background: "var(--border-color)" }}
                  />
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                    style={{
                      background: "rgba(34,197,94,0.12)",
                      color: "#16A34A",
                    }}
                  >
                    {t.uplift} CTR
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: "var(--border-color)" }}
                  />
                </div>

                {/* After */}
                <div className="relative">
                  <ThumbnailMock data={t.after} />
                  <span
                    className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "#fff",
                      color: "var(--ink)",
                    }}
                  >
                    {t.after.label}
                  </span>
                  <span
                    className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      background: "#16A34A",
                      color: "#fff",
                    }}
                  >
                    <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
                    {t.after.ctr} CTR
                  </span>
                </div>

                {/* Formula tag */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Formula
                  </span>
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {t.formula}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Title formulas */}
        <div className="mt-14">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-tight tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Four title formulas we A/B test on every upload.
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
              style={{ color: "var(--accent)" }}
            >
              Get a thumbnail teardown
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formulas.map((f, i) => (
              <li
                key={f.name}
                className="card-surface card-surface-hover relative overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.6s ease-out ${0.05 * i}s both`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${f.bg} 100%)`,
                  }}
                />
                <div className="relative px-5 py-5">
                  <span
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                    style={{
                      background: `${f.color}1A`,
                      color: f.color,
                      boxShadow: `inset 0 0 0 1px ${f.color}33`,
                    }}
                  >
                    <f.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <h4
                    className="mt-3 text-[15.5px] font-bold leading-[1.25] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {f.name}
                  </h4>
                  <p
                    className="mt-1.5 text-[13px] leading-[1.5]"
                    style={{ color: "var(--muted)" }}
                  >
                    {f.example}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ThumbnailMock({
  data,
  dim,
}: {
  data: Thumb["before"] | Thumb["after"]
  dim?: boolean
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "16 / 9",
        borderRadius: 12,
        background: `linear-gradient(135deg, ${data.bgFrom} 0%, ${data.bgTo} 100%)`,
        opacity: dim ? 0.92 : 1,
        boxShadow: dim
          ? "inset 0 0 0 1px rgba(255,255,255,0.04)"
          : "inset 0 0 0 1px rgba(255,255,255,0.10), 0 8px 28px rgba(0,0,0,0.18)",
      }}
    >
      {/* Big arrow / vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 70% 30%, rgba(255,255,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 80% at 30% 80%, rgba(0,0,0,0.45) 0%, transparent 60%)",
        }}
      />

      {/* Subject silhouette circle */}
      {!dim && (
        <span
          aria-hidden
          className="absolute rounded-full"
          style={{
            right: 14,
            top: 14,
            bottom: 14,
            width: 64,
            background:
              "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.45) 70%)",
            border: "2px solid rgba(255,255,255,0.65)",
          }}
        />
      )}

      {/* Title overlay */}
      <div className="absolute inset-0 px-3 sm:px-4 py-3 flex flex-col justify-end">
        <span
          className="font-extrabold leading-[0.95] tracking-[-0.02em]"
          style={{
            color: data.titleColor,
            fontSize: dim ? 16 : 20,
            textShadow: dim
              ? "0 1px 2px rgba(0,0,0,0.4)"
              : "0 2px 8px rgba(0,0,0,0.7), 1.5px 0 0 rgba(0,0,0,0.6)",
            textTransform: dim ? "none" : "uppercase",
          }}
        >
          {data.title}
        </span>
        {data.sub && (
          <span
            className="mt-1 font-bold"
            style={{
              color: dim ? "#9CA3AF" : "#fff",
              fontSize: dim ? 11 : 12,
              textShadow: dim ? "none" : "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            {data.sub}
          </span>
        )}
      </div>

      {/* Big badge */}
      {"badge" in data && data.badge && !dim && (
        <span
          className="absolute font-extrabold flex items-center justify-center"
          style={{
            top: 10,
            left: 10,
            padding: "4px 10px",
            background: "#FFD600",
            color: "#0B132B",
            fontSize: 14,
            borderRadius: 6,
            transform: "rotate(-5deg)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
          }}
        >
          {data.badge}
        </span>
      )}

      {/* Duration chip (real YouTube touch) */}
      <span
        className="absolute font-bold"
        style={{
          right: 8,
          bottom: 8,
          background: "rgba(0,0,0,0.85)",
          color: "#fff",
          fontSize: 10,
          padding: "2px 5px",
          borderRadius: 3,
        }}
      >
        9:42
      </span>
    </div>
  )
}
