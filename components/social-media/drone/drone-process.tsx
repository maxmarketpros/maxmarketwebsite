import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Phone,
  ClipboardCheck,
  Plane,
  Scissors,
  Send,
  Sun,
  CloudRain,
  CloudSun,
  Cloud,
} from "lucide-react"

type Step = {
  day: string
  Icon: typeof Phone
  title: string
  body: string
  tag: string
  accent: string
}

const steps: Step[] = [
  {
    day: "Day 0",
    Icon: Phone,
    title: "15-minute scoping call",
    body: "Address, shot list, deliverable platforms (MLS, Reels, YouTube), and golden-hour preference. We pull airspace + weather instantly.",
    tag: "Brief",
    accent: "#0891B2",
  },
  {
    day: "Day 1",
    Icon: ClipboardCheck,
    title: "Flight plan + LAANC clearance",
    body: "We file controlled-airspace authorization (if needed), pre-program waypoints, and lock a backup weather slot.",
    tag: "Plan",
    accent: "#0EA5E9",
  },
  {
    day: "Day 2",
    Icon: Plane,
    title: "On-site drone shoot",
    body: "FAA Part 107 pilot + visual observer arrive 45 minutes pre-window. Full shot list captured — orbit, reveal, top-down, push-in, fly-through.",
    tag: "Fly",
    accent: "#F97316",
  },
  {
    day: "Day 3",
    Icon: Scissors,
    title: "Cinematic edit",
    body: "Color graded in DaVinci, music sync-licensed, three deliverables formatted (16:9 master, 9:16 Reel, 1:1 social).",
    tag: "Edit",
    accent: "#7C3AED",
  },
  {
    day: "Day 4",
    Icon: Send,
    title: "Delivery + raw files",
    body: "Frame.io review link with one revision round, then final MP4s + raw 5.1K footage handed off to your Drive or Dropbox.",
    tag: "Deliver",
    accent: "#16A34A",
  },
]

const weatherWindow = [
  { day: "Mon", Icon: Sun, label: "Clear", wind: "4 mph", flyable: true },
  { day: "Tue", Icon: CloudSun, label: "Partly", wind: "8 mph", flyable: true },
  { day: "Wed", Icon: Sun, label: "Golden", wind: "3 mph", flyable: true, optimal: true },
  { day: "Thu", Icon: Cloud, label: "Overcast", wind: "12 mph", flyable: true },
  { day: "Fri", Icon: CloudRain, label: "Rain", wind: "18 mph", flyable: false },
]

export function DroneProcess() {
  return (
    <section
      id="drone-process"
      aria-labelledby="drone-process-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Booked → delivered in 5 days"
          heading={
            <span id="drone-process-heading">
              Your{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">drone shoot</span>
              </span>
              , from scoping call to final delivery.
            </span>
          }
          paragraph="Every drone videography project runs on the same five-day pipeline so you know exactly what&rsquo;s happening, when. Most jobs are quoted in 24 hours and on the calendar within 72."
        />

        {/* Timeline rail */}
        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,145,178,0.7) 0%, rgba(249,115,22,0.85) 50%, rgba(22,163,74,0.7) 100%)",
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative items-stretch">
            {steps.map((s, idx) => (
              <li
                key={s.day}
                className="relative flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                }}
              >
                {/* Day node */}
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(180deg, ${s.accent} 0%, ${s.accent}DD 100%)`,
                      color: "#fff",
                      boxShadow: `0 4px 14px ${s.accent}55`,
                      border: "4px solid #fff",
                    }}
                  >
                    <s.Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: s.accent }}
                    >
                      {s.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: `${s.accent}15`,
                        color: s.accent,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[16px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Weather window panel */}
        <div className="mt-14 max-w-[920px] mx-auto">
          <div
            className="text-center text-[12px] font-bold uppercase tracking-[0.14em] mb-4"
            style={{ color: "var(--muted)" }}
          >
            Built-in flight window — we read the weather, you don&rsquo;t
          </div>
          <div
            className="card-surface px-5 sm:px-7 py-6"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#0891B2",
                    animation: "subtlePulse 1.4s ease-in-out infinite",
                  }}
                />
                This week · Irvine, CA
              </span>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Updated · 6 min ago
              </span>
            </div>
            <ul className="grid grid-cols-5 gap-2 sm:gap-3">
              {weatherWindow.map((d) => (
                <li
                  key={d.day}
                  className="relative px-2.5 py-3.5 rounded-[var(--radius-sm)] text-center"
                  style={{
                    background: d.optimal
                      ? "linear-gradient(180deg, rgba(8,145,178,0.10) 0%, rgba(249,115,22,0.10) 100%)"
                      : d.flyable
                        ? "var(--surface)"
                        : "var(--bg)",
                    border: d.optimal
                      ? "2px solid #0891B2"
                      : d.flyable
                        ? "1px solid var(--border-color)"
                        : "1px dashed var(--border-color)",
                    opacity: d.flyable ? 1 : 0.55,
                    boxShadow: d.optimal ? "0 4px 16px rgba(8,145,178,0.20)" : "none",
                  }}
                >
                  {d.optimal && (
                    <span
                      className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[8.5px] font-extrabold uppercase tracking-[0.1em]"
                      style={{
                        background: "linear-gradient(180deg, #FB923C 0%, #F97316 100%)",
                        color: "#fff",
                        boxShadow: "0 2px 6px rgba(249,115,22,0.45)",
                      }}
                    >
                      Best
                    </span>
                  )}
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {d.day}
                  </div>
                  <d.Icon
                    className="w-7 h-7 mx-auto my-1.5"
                    strokeWidth={2}
                    style={{
                      color: d.flyable
                        ? d.optimal
                          ? "#F97316"
                          : "#0891B2"
                        : "#94A3B8",
                    }}
                  />
                  <div
                    className="text-[11.5px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    {d.label}
                  </div>
                  <div
                    className="text-[10px] font-mono mt-0.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {d.wind}
                  </div>
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-[12.5px] leading-[1.55] text-center"
              style={{ color: "var(--muted)" }}
            >
              We watch your shoot window for 7 days out and reschedule one slot back at no charge if winds exceed 22&nbsp;mph or rain hits the property.
            </p>
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Book your drone shoot
          </PrimaryButton>
          <SecondaryButton asLink href="#drone-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
